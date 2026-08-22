"use client";

import type { EditorState } from "../../types";

interface EditorHeaderProps {
  state: EditorState;
  onUndo: () => void;
  onRedo: () => void;
  onSave: () => void;
  onReset: () => void;
  onDesign: () => void;
  onTemplates: () => void;
  onCms: () => void;
  onViewport: (viewport: EditorState["viewport"]) => void;
  onMode: (mode: EditorState["mode"]) => void;
  designActive: boolean;
  templatesActive: boolean;
  cmsActive: boolean;
}

export function EditorHeader({ state, onUndo, onRedo, onSave, onReset, onDesign, onTemplates, onCms, onViewport, onMode, designActive, templatesActive, cmsActive }: EditorHeaderProps) {
  return (
    <header className="pb-header">
      <div className="pb-brand">
        <span className="pb-brand-mark">PB</span>
        <strong>Page Builder</strong>
      </div>
      <nav className="pb-header-group" aria-label="Editor commands">
        <button type="button" onClick={onUndo} disabled={state.history.past.length === 0} title="Undo">Undo</button>
        <button type="button" onClick={onRedo} disabled={state.history.future.length === 0} title="Redo">Redo</button>
        <button type="button" onClick={onReset}>Reset</button>
        <button type="button" className={designActive ? "is-active" : ""} onClick={onDesign}>Design</button>
        <button type="button" className={templatesActive ? "is-active" : ""} onClick={onTemplates}>Templates</button>
        <button type="button" className={cmsActive ? "is-active" : ""} onClick={onCms}>CMS</button>
      </nav>
      <div className="pb-segment" role="group" aria-label="Viewport">
        {(["desktop", "tablet", "mobile"] as const).map((viewport) => (
          <button key={viewport} type="button" className={state.viewport === viewport ? "is-active" : ""} onClick={() => onViewport(viewport)}>
            {viewport}
          </button>
        ))}
      </div>
      <div className="pb-header-group pb-header-actions">
        <button type="button" onClick={() => onMode(state.mode === "preview" ? "edit" : "preview")}>{state.mode === "preview" ? "Edit" : "Preview"}</button>
        <button type="button" className="pb-primary" onClick={onSave} disabled={state.isSaving}>{state.isSaving ? "Saving" : "Save"}</button>
      </div>
    </header>
  );
}
