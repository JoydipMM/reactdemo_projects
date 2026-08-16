"use client";

import { useCallback, useEffect, useMemo, useReducer } from "react";
import type { EditorState, Page, PageNode, PageStorage, Viewport } from "../types";
import { defaultPage } from "../data/defaultPage";
import { widgetRegistry } from "../core/registry/defaultRegistry";
import { LocalStoragePageStorage } from "../core/storage/localStoragePageStorage";
import { arrangeNode, cloneNode, duplicateNode, findNode, findParent, insertNode, moveNode, removeNode, updateNode } from "../utils/treeUtils";
import type { ArrangeDirection } from "../utils/treeUtils";
import { createNodeId } from "../utils/idUtils";
import { setAtPath } from "../utils/styleUtils";
import { parsePage } from "../schema/validation";

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
      resolvedStorage.save(state.page).catch(() => undefined);
    }, 650);
    return () => window.clearTimeout(timeout);
  }, [onChange, state.page, resolvedStorage]);

  const save = useCallback(async () => {
    dispatch({ type: "save-start" });
    await resolvedStorage.save(state.page);
    await onSave?.(state.page);
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
