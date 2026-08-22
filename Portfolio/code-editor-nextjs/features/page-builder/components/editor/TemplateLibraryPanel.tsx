"use client";

import { useState } from "react";
import type { PageNode, PageTemplate } from "../../types";

interface TemplateLibraryPanelProps {
  templates: PageTemplate[];
  selectedNode: PageNode | null;
  onSavePageTemplate: (name: string) => void;
  onSaveSectionTemplate: (name: string) => void;
  onSaveGlobalComponent: (name: string) => void;
  onInsertTemplate: (templateId: string) => void;
  onApplyPageTemplate: (templateId: string) => void;
  onDeleteTemplate: (templateId: string) => void;
}

export function TemplateLibraryPanel({
  templates,
  selectedNode,
  onSavePageTemplate,
  onSaveSectionTemplate,
  onSaveGlobalComponent,
  onInsertTemplate,
  onApplyPageTemplate,
  onDeleteTemplate,
}: TemplateLibraryPanelProps) {
  const [templateName, setTemplateName] = useState("My Template");
  const canSaveSelection = Boolean(selectedNode && selectedNode.type !== "root");
  const groups = [
    { kind: "page", label: "Page Templates" },
    { kind: "section", label: "Section Templates" },
    { kind: "globalComponent", label: "Global Components" },
  ] as const;

  const saveAndReset = (save: (name: string) => void) => {
    const name = templateName.trim() || "Untitled Template";
    save(name);
    setTemplateName("My Template");
  };

  return (
    <aside className="pb-sidebar pb-settings" aria-label="Template library">
      <div className="pb-settings-title">
        <span>T</span>
        <div>
          <strong>Templates</strong>
          <small>Save and reuse page structures</small>
        </div>
      </div>
      <section className="pb-control-section">
        <h2>Save Template</h2>
        <label className="pb-control" htmlFor="pb-template-name">
          <span>Name</span>
          <input id="pb-template-name" value={templateName} onChange={(event) => setTemplateName(event.target.value)} />
        </label>
        <div className="pb-template-actions">
          <button type="button" onClick={() => saveAndReset(onSavePageTemplate)}>Save page</button>
          <button type="button" onClick={() => saveAndReset(onSaveSectionTemplate)} disabled={!canSaveSelection}>Save section</button>
          <button type="button" onClick={() => saveAndReset(onSaveGlobalComponent)} disabled={!canSaveSelection}>Save global</button>
        </div>
        {!canSaveSelection && <p className="pb-help-text">Select an element to save it as a section template or global component.</p>}
      </section>
      {groups.map((group) => {
        const groupTemplates = templates.filter((template) => template.kind === group.kind);
        return (
          <section className="pb-control-section" key={group.kind}>
            <h2>{group.label}</h2>
            {groupTemplates.length === 0 ? (
              <p className="pb-help-text">No templates saved yet.</p>
            ) : (
              <div className="pb-template-list">
                {groupTemplates.map((template) => (
                  <article className="pb-template-card" key={template.id}>
                    <div>
                      <strong>{template.name}</strong>
                      <small>{template.nodes.length} node{template.nodes.length === 1 ? "" : "s"}</small>
                    </div>
                    <div className="pb-template-card-actions">
                      {template.kind === "page" && <button type="button" onClick={() => onApplyPageTemplate(template.id)}>Apply</button>}
                      <button type="button" onClick={() => onInsertTemplate(template.id)}>Insert</button>
                      <button type="button" onClick={() => onDeleteTemplate(template.id)}>Delete</button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </aside>
  );
}
