"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
import type { CmsPageStatus, DesignSystem, DynamicContentItem, EditorState, Page, PageNode, PageStorage, SeoSettings, Viewport } from "../types";
import { defaultPage } from "../data/defaultPage";
import { defaultDesignSystem } from "../data/defaultDesignSystem";
import { widgetRegistry } from "../core/registry/defaultRegistry";
import { LocalStoragePageStorage } from "../core/storage/localStoragePageStorage";
import { arrangeNode, cloneNode, duplicateNode, findNode, findParent, insertNode, moveNode, removeNode, updateNode } from "../utils/treeUtils";
import type { ArrangeDirection } from "../utils/treeUtils";
import { createNodeId } from "../utils/idUtils";
import { setAtPath } from "../utils/styleUtils";
import { parsePage } from "../schema/validation";
import { applyPageTemplate, createTemplateFromNodes, instantiateTemplate } from "../utils/templateUtils";
import { addMediaItem, addRevision, createCmsPage, createDynamicContent, ensureCms, restoreRevision, setCmsPageStatus, switchCmsPage, syncActivePageRecord, updateSeo, upsertDynamicContent } from "../utils/cmsUtils";

type Action =
  | { type: "load"; page: Page }
  | { type: "select"; nodeId: string | null }
  | { type: "hover"; nodeId: string | null }
  | { type: "viewport"; viewport: Viewport }
  | { type: "mode"; mode: EditorState["mode"] }
  | { type: "save-start" }
  | { type: "save-done"; savedAt: string }
  | { type: "mutate"; page: Page; selectedNodeId?: string | null; history?: boolean }
  | { type: "undo" }
  | { type: "redo" }
  | { type: "copy" }
  | { type: "paste" };

const historyLimit = 80;

export function createInitialEditorState(page?: Page): EditorState {
  return {
    page: page ?? defaultPage(),
    selection: { selectedNodeId: null, hoveredNodeId: null },
    history: { past: [], future: [] },
    clipboard: { node: null },
    viewport: "desktop",
    mode: "edit",
    isSaving: false,
    lastSavedAt: null,
  };
}

function reducer(state: EditorState, action: Action): EditorState {
  switch (action.type) {
    case "load":
      return { ...state, page: action.page, history: { past: [], future: [] }, selection: { selectedNodeId: null, hoveredNodeId: null } };
    case "select":
      return { ...state, selection: { ...state.selection, selectedNodeId: action.nodeId } };
    case "hover":
      return { ...state, selection: { ...state.selection, hoveredNodeId: action.nodeId } };
    case "viewport":
      return { ...state, viewport: action.viewport };
    case "mode":
      return { ...state, mode: action.mode, selection: action.mode === "preview" ? { selectedNodeId: null, hoveredNodeId: null } : state.selection };
    case "save-start":
      return { ...state, isSaving: true };
    case "save-done":
      return { ...state, isSaving: false, lastSavedAt: action.savedAt };
    case "mutate": {
      const past = action.history === false ? state.history.past : [...state.history.past, state.page].slice(-historyLimit);
      return {
        ...state,
        page: action.page,
        history: { past, future: action.history === false ? state.history.future : [] },
        selection: { ...state.selection, selectedNodeId: action.selectedNodeId ?? state.selection.selectedNodeId },
      };
    }
    case "undo": {
      const previous = state.history.past.at(-1);
      if (!previous) return state;
      return {
        ...state,
        page: previous,
        history: { past: state.history.past.slice(0, -1), future: [state.page, ...state.history.future] },
        selection: { selectedNodeId: null, hoveredNodeId: null },
      };
    }
    case "redo": {
      const next = state.history.future[0];
      if (!next) return state;
      return {
        ...state,
        page: next,
        history: { past: [...state.history.past, state.page].slice(-historyLimit), future: state.history.future.slice(1) },
        selection: { selectedNodeId: null, hoveredNodeId: null },
      };
    }
    case "copy": {
      const selected = state.selection.selectedNodeId ? findNode(state.page.root, state.selection.selectedNodeId) : null;
      return { ...state, clipboard: { node: selected ? cloneNode(selected) : null } };
    }
    case "paste": {
      const selectedId = state.selection.selectedNodeId;
      const target = selectedId ? findNode(state.page.root, selectedId) : state.page.root;
      if (!state.clipboard.node || !target) return state;
      const pasted = cloneNode(state.clipboard.node);
      const parentId = target.children ? target.id : state.page.root.id;
      return reducer(state, { type: "mutate", page: insertNode(state.page, parentId, pasted), selectedNodeId: pasted.id });
    }
    default:
      return state;
  }
}

export function createNodeFromWidget(type: string): PageNode | null {
  const widget = widgetRegistry.get(type);
  if (!widget) return null;
  return {
    id: createNodeId(type),
    type,
    kind: widget.kind,
    props: { ...widget.defaultProps },
    styles: structuredClone(widget.defaultStyles),
    children: widget.acceptsChildren ? [] : undefined,
  };
}

export function useEditorStore({
  initialPage,
  storage,
  onChange,
  onSave,
}: {
  initialPage?: Page;
  storage?: PageStorage;
  onChange?: (page: Page) => void;
  onSave?: (page: Page) => void | Promise<void>;
}) {
  const [state, dispatch] = useReducer(reducer, createInitialEditorState(initialPage));
  const resolvedStorage = useMemo(() => storage ?? new LocalStoragePageStorage(), [storage]);

  useEffect(() => {
    let mounted = true;
    resolvedStorage.load().then((saved) => {
      if (mounted && saved) dispatch({ type: "load", page: parsePage(saved) });
    });
    return () => {
      mounted = false;
    };
  }, [resolvedStorage]);

  useEffect(() => {
    onChange?.(state.page);
    const timeout = window.setTimeout(() => {
      resolvedStorage.save(syncActivePageRecord(state.page)).catch(() => undefined);
    }, 650);
    return () => window.clearTimeout(timeout);
  }, [onChange, state.page, resolvedStorage]);

  const save = useCallback(async () => {
    dispatch({ type: "save-start" });
    const syncedPage = syncActivePageRecord(state.page);
    await resolvedStorage.save(syncedPage);
    await onSave?.(syncedPage);
    dispatch({ type: "save-done", savedAt: new Date().toLocaleTimeString() });
  }, [onSave, state.page, resolvedStorage]);

  const actions = useMemo(() => ({
    dispatch,
    save,
    addNode(type: string, parentId?: string, index?: number) {
      const node = createNodeFromWidget(type);
      if (!node) return;
      const target = resolveInsertTarget(state.page, parentId ?? state.selection.selectedNodeId, index);
      dispatch({ type: "mutate", page: insertNode(state.page, target.parentId, node, target.index), selectedNodeId: node.id });
    },
    updateSelected(target: "props" | "styles", path: string, value: unknown) {
      const selectedId = state.selection.selectedNodeId;
      if (!selectedId) return;
      const source = (target === "props" ? selectedNodePropsSource(selectedId, state.page) : selectedNodeStyleSource(selectedId, state.page));
      const page = updateNode(state.page, selectedId, (node) => ({ ...node, [target]: setAtPath(source, path, value) }));
      dispatch({ type: "mutate", page });
    },
    renameSelected(name: string) {
      const selectedId = state.selection.selectedNodeId;
      if (!selectedId) return;
      const trimmedName = name.trim();
      const page = updateNode(state.page, selectedId, (node) => ({
        ...node,
        name: trimmedName.length > 0 ? trimmedName : undefined,
      }));
      dispatch({ type: "mutate", page });
    },
    updateSelectedClasses(cssClasses: string[]) {
      const selectedId = state.selection.selectedNodeId;
      if (!selectedId) return;
      const page = updateNode(state.page, selectedId, (node) => ({
        ...node,
        cssClasses: cssClasses.length > 0 ? cssClasses : undefined,
      }));
      dispatch({ type: "mutate", page });
    },
    updateSelectedCustomCss(customCss: string) {
      const selectedId = state.selection.selectedNodeId;
      if (!selectedId) return;
      const page = updateNode(state.page, selectedId, (node) => ({
        ...node,
        customCss: customCss.trim().length > 0 ? customCss : undefined,
      }));
      dispatch({ type: "mutate", page });
    },
    updateDesignSystem(updater: (designSystem: DesignSystem) => DesignSystem) {
      const designSystem = updater(state.page.designSystem ?? defaultDesignSystem());
      dispatch({ type: "mutate", page: { ...state.page, designSystem } });
    },
    createCmsPage(title: string) {
      dispatch({ type: "mutate", page: createCmsPage(state.page, title), selectedNodeId: null });
    },
    switchCmsPage(pageId: string) {
      dispatch({ type: "mutate", page: switchCmsPage(state.page, pageId), selectedNodeId: null });
    },
    setPageStatus(status: CmsPageStatus) {
      dispatch({ type: "mutate", page: setCmsPageStatus(state.page, status), history: false });
    },
    updateSeo(seo: SeoSettings) {
      dispatch({ type: "mutate", page: updateSeo(state.page, seo), history: false });
    },
    saveRevision(name: string) {
      dispatch({ type: "mutate", page: addRevision(syncActivePageRecord(state.page), name), history: false });
    },
    restoreRevision(revisionId: string) {
      dispatch({ type: "mutate", page: restoreRevision(state.page, revisionId), selectedNodeId: null });
    },
    addMedia(name: string, url: string, alt: string) {
      dispatch({ type: "mutate", page: addMediaItem(state.page, { name, url, alt }), history: false });
    },
    upsertDynamicContent(item: DynamicContentItem) {
      dispatch({ type: "mutate", page: upsertDynamicContent(state.page, item), history: false });
    },
    createDynamicContent(label: string, value: string) {
      dispatch({ type: "mutate", page: upsertDynamicContent(state.page, createDynamicContent(label, value)), history: false });
    },
    bindSelectedDynamicContent(sourceId: string) {
      const selectedId = state.selection.selectedNodeId;
      if (!selectedId) return;
      const page = updateNode(state.page, selectedId, (node) => ({
        ...node,
        dynamicBindings: [{ prop: getPrimaryDynamicProp(node.type), sourceId }],
      }));
      dispatch({ type: "mutate", page });
    },
    unbindSelectedDynamicContent() {
      const selectedId = state.selection.selectedNodeId;
      if (!selectedId) return;
      const page = updateNode(state.page, selectedId, (node) => ({ ...node, dynamicBindings: undefined }));
      dispatch({ type: "mutate", page });
    },
    ensureCms() {
      dispatch({ type: "mutate", page: { ...state.page, cms: ensureCms(state.page) }, history: false });
    },
    savePageTemplate(name: string) {
      const template = createTemplateFromNodes(name, "page", state.page.root.children ?? [], state.page.designSystem);
      dispatch({ type: "mutate", page: { ...state.page, templates: [...(state.page.templates ?? []), template] }, history: false });
    },
    saveSelectedTemplate(name: string, kind: "section" | "globalComponent") {
      const selectedId = state.selection.selectedNodeId;
      if (!selectedId) return;
      const selected = findNode(state.page.root, selectedId);
      if (!selected || selected.id === state.page.root.id) return;
      const template = createTemplateFromNodes(name, kind, [selected]);
      dispatch({ type: "mutate", page: { ...state.page, templates: [...(state.page.templates ?? []), template] }, history: false });
    },
    insertTemplate(templateId: string) {
      const template = state.page.templates?.find((item) => item.id === templateId);
      if (!template) return;
      const nodes = instantiateTemplate(template);
      const target = resolveInsertTarget(state.page, state.selection.selectedNodeId);
      const nextPage = nodes.reduce((page, node, offset) => insertNode(page, target.parentId, node, (target.index ?? Number.MAX_SAFE_INTEGER) + offset), state.page);
      dispatch({ type: "mutate", page: nextPage, selectedNodeId: nodes[0]?.id ?? state.selection.selectedNodeId });
    },
    applyPageTemplate(templateId: string) {
      const template = state.page.templates?.find((item) => item.id === templateId);
      if (!template) return;
      dispatch({ type: "mutate", page: applyPageTemplate(state.page, template), selectedNodeId: null });
    },
    deleteTemplate(templateId: string) {
      dispatch({ type: "mutate", page: { ...state.page, templates: (state.page.templates ?? []).filter((template) => template.id !== templateId) }, history: false });
    },
    deleteSelected() {
      const selectedId = state.selection.selectedNodeId;
      if (!selectedId || selectedId === state.page.root.id) return;
      const next = removeNode(state.page, selectedId).page;
      dispatch({ type: "mutate", page: next, selectedNodeId: null });
    },
    duplicateSelected() {
      const selectedId = state.selection.selectedNodeId;
      if (!selectedId) return;
      const result = duplicateNode(state.page, selectedId);
      dispatch({ type: "mutate", page: result.page, selectedNodeId: result.duplicated?.id ?? selectedId });
    },
    moveNode(nodeId: string, parentId: string, index?: number) {
      dispatch({ type: "mutate", page: moveNode(state.page, nodeId, parentId, index), selectedNodeId: nodeId });
    },
    arrangeSelected(direction: ArrangeDirection) {
      const selectedId = state.selection.selectedNodeId;
      if (!selectedId) return;
      dispatch({ type: "mutate", page: arrangeNode(state.page, selectedId, direction), selectedNodeId: selectedId });
    },
    reset() {
      dispatch({ type: "load", page: defaultPage() });
    },
  }), [save, state.page, state.selection.selectedNodeId]);

  return { state, actions };
}

function selectedNodePropsSource(nodeId: string, page: Page): Record<string, unknown> {
  return findNode(page.root, nodeId)?.props ?? {};
}

function selectedNodeStyleSource(nodeId: string, page: Page): Record<string, unknown> {
  return (findNode(page.root, nodeId)?.styles ?? {}) as Record<string, unknown>;
}

function resolveInsertTarget(page: Page, requestedNodeId?: string | null, requestedIndex?: number): { parentId: string; index?: number } {
  if (!requestedNodeId) return { parentId: page.root.id, index: requestedIndex };

  const requestedNode = findNode(page.root, requestedNodeId);
  if (!requestedNode) return { parentId: page.root.id, index: requestedIndex };

  if (canAcceptChildren(requestedNode)) {
    return { parentId: requestedNode.id, index: requestedIndex };
  }

  const parent = findParent(page.root, requestedNode.id);
  if (!parent) return { parentId: page.root.id, index: requestedIndex };

  const selectedIndex = parent.children?.findIndex((child) => child.id === requestedNode.id) ?? -1;
  return {
    parentId: parent.id,
    index: requestedIndex ?? (selectedIndex >= 0 ? selectedIndex + 1 : undefined),
  };
}

function canAcceptChildren(node: PageNode): boolean {
  return node.type === "root" || Boolean(widgetRegistry.get(node.type)?.acceptsChildren);
}

function getPrimaryDynamicProp(type: string): string {
  if (type === "image") return "src";
  return "text";
}
