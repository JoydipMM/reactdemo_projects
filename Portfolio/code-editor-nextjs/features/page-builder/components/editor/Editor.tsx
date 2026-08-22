"use client";

import { useEffect, useMemo, useState } from "react";
import type { PageBuilderProps } from "../../types";
import { defaultWidgets } from "../../data/defaultWidgets";
import { widgetRegistry } from "../../core/registry/defaultRegistry";
import { findNode } from "../../utils/treeUtils";
import { useEditorStore } from "../../store/editorStore";
import { EditorCanvas } from "./EditorCanvas";
import { EditorHeader } from "./EditorHeader";
import { EditorToolbar } from "./EditorToolbar";
import { ElementsPanel } from "./ElementsPanel";
import { Navigator } from "./Navigator";
import { SettingsPanel } from "./SettingsPanel";
import { JsonExportDialog } from "./JsonExportDialog";
import { DesignSystemPanel } from "./DesignSystemPanel";
import { defaultDesignSystem } from "../../data/defaultDesignSystem";
import { TemplateLibraryPanel } from "./TemplateLibraryPanel";
import { defaultTemplates } from "../../data/defaultTemplates";
import { CmsPanel } from "./CmsPanel";

export function PageBuilder({ initialPage, widgets, storage, onChange, onSave }: PageBuilderProps) {
  useMemo(() => widgets?.forEach((widget) => widgetRegistry.register(widget)), [widgets]);
  const { state, actions } = useEditorStore({ initialPage, storage, onChange, onSave });
  const selectedNode = state.selection.selectedNodeId ? findNode(state.page.root, state.selection.selectedNodeId) : null;
  const selectedWidget = selectedNode ? widgetRegistry.get(selectedNode.type) : undefined;
  const allWidgets = [...defaultWidgets, ...(widgets ?? [])];
  const [exportedJson, setExportedJson] = useState<string | null>(null);
  const [jsonCopied, setJsonCopied] = useState(false);
  const [inspectorMode, setInspectorMode] = useState<"element" | "design" | "templates" | "cms">("element");

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const command = event.ctrlKey || event.metaKey;
      if (event.key === "Escape") actions.dispatch({ type: "select", nodeId: null });
      if ((event.key === "Delete" || event.key === "Backspace") && state.selection.selectedNodeId) actions.deleteSelected();
      if (command && event.key.toLowerCase() === "z" && event.shiftKey) {
        event.preventDefault();
        actions.dispatch({ type: "redo" });
      } else if (command && event.key.toLowerCase() === "z") {
        event.preventDefault();
        actions.dispatch({ type: "undo" });
      } else if (command && event.key.toLowerCase() === "c") {
        event.preventDefault();
        actions.dispatch({ type: "copy" });
      } else if (command && event.key.toLowerCase() === "v") {
        event.preventDefault();
        actions.dispatch({ type: "paste" });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [actions, state.selection.selectedNodeId]);

  const handleSave = async () => {
    await actions.save();
    setJsonCopied(false);
    setExportedJson(JSON.stringify(state.page, null, 2));
  };

  const selectNode = (nodeId: string | null) => {
    actions.dispatch({ type: "select", nodeId });
    if (nodeId) setInspectorMode("element");
  };

  const handleCopyJson = async () => {
    if (!exportedJson) return;
    await navigator.clipboard.writeText(exportedJson);
    setJsonCopied(true);
  };

  return (
    <div className={`pb-editor ${state.mode === "preview" ? "is-preview" : ""}`}>
      <EditorHeader
        state={state}
        onUndo={() => actions.dispatch({ type: "undo" })}
        onRedo={() => actions.dispatch({ type: "redo" })}
        onSave={handleSave}
        onReset={actions.reset}
        onDesign={() => setInspectorMode((mode) => mode === "design" ? "element" : "design")}
        onTemplates={() => setInspectorMode((mode) => mode === "templates" ? "element" : "templates")}
        onCms={() => setInspectorMode((mode) => mode === "cms" ? "element" : "cms")}
        designActive={inspectorMode === "design"}
        templatesActive={inspectorMode === "templates"}
        cmsActive={inspectorMode === "cms"}
        onViewport={(viewport) => actions.dispatch({ type: "viewport", viewport })}
        onMode={(mode) => actions.dispatch({ type: "mode", mode })}
      />
      <div className="pb-body">
        {state.mode === "edit" && (
          <div className="pb-left-stack">
            <ElementsPanel widgets={allWidgets} onAdd={(type) => actions.addNode(type)} />
            <Navigator
              root={state.page.root}
              selectedNodeId={state.selection.selectedNodeId}
              onSelect={selectNode}
              onMove={actions.moveNode}
            />
          </div>
        )}
        <div className="pb-workspace">
          {state.mode === "edit" && (
            <EditorToolbar
              selected={Boolean(state.selection.selectedNodeId)}
              onCopy={() => actions.dispatch({ type: "copy" })}
              onPaste={() => actions.dispatch({ type: "paste" })}
              onMoveUp={() => actions.arrangeSelected("up")}
              onMoveDown={() => actions.arrangeSelected("down")}
              onSendTop={() => actions.arrangeSelected("top")}
              onSendBottom={() => actions.arrangeSelected("bottom")}
              onDuplicate={actions.duplicateSelected}
              onDelete={actions.deleteSelected}
            />
          )}
          <EditorCanvas
            state={state}
            onSelect={selectNode}
            onHover={(nodeId) => actions.dispatch({ type: "hover", nodeId })}
            onAdd={actions.addNode}
            onMove={actions.moveNode}
          />
        </div>
        {state.mode === "edit" && inspectorMode === "design" && (
          <DesignSystemPanel
            designSystem={state.page.designSystem ?? defaultDesignSystem()}
            onChange={actions.updateDesignSystem}
          />
        )}
        {state.mode === "edit" && inspectorMode === "templates" && (
          <TemplateLibraryPanel
            templates={state.page.templates ?? defaultTemplates()}
            selectedNode={selectedNode}
            onSavePageTemplate={actions.savePageTemplate}
            onSaveSectionTemplate={(name) => actions.saveSelectedTemplate(name, "section")}
            onSaveGlobalComponent={(name) => actions.saveSelectedTemplate(name, "globalComponent")}
            onInsertTemplate={actions.insertTemplate}
            onApplyPageTemplate={actions.applyPageTemplate}
            onDeleteTemplate={actions.deleteTemplate}
          />
        )}
        {state.mode === "edit" && inspectorMode === "cms" && (
          <CmsPanel
            page={state.page}
            selectedNode={selectedNode}
            onCreatePage={actions.createCmsPage}
            onSwitchPage={actions.switchCmsPage}
            onSetStatus={actions.setPageStatus}
            onSeoChange={actions.updateSeo}
            onSaveRevision={actions.saveRevision}
            onRestoreRevision={actions.restoreRevision}
            onAddMedia={actions.addMedia}
            onUpsertDynamicContent={actions.upsertDynamicContent}
            onCreateDynamicContent={actions.createDynamicContent}
            onBindDynamicContent={actions.bindSelectedDynamicContent}
            onUnbindDynamicContent={actions.unbindSelectedDynamicContent}
          />
        )}
        {state.mode === "edit" && inspectorMode === "element" && (
          <SettingsPanel
            selectedNode={selectedNode}
            widget={selectedWidget}
            viewport={state.viewport}
            onChange={actions.updateSelected}
            onRename={actions.renameSelected}
            onClassesChange={actions.updateSelectedClasses}
            onCustomCssChange={actions.updateSelectedCustomCss}
          />
        )}
      </div>
      {exportedJson && (
        <JsonExportDialog
          json={exportedJson}
          copied={jsonCopied}
          onCopy={handleCopyJson}
          onClose={() => setExportedJson(null)}
        />
      )}
    </div>
  );
}
