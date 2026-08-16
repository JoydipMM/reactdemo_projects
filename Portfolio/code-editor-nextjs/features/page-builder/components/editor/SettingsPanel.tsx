"use client";

import type { PageNode, Viewport, WidgetDefinition } from "../../types";
import { ControlRenderer } from "../controls/ControlRenderer";

interface SettingsPanelProps {
  selectedNode: PageNode | null;
  widget: WidgetDefinition | undefined;
  viewport: Viewport;
  onChange: (target: "props" | "styles", path: string, value: unknown) => void;
  onRename: (name: string) => void;
}

export function SettingsPanel({ selectedNode, widget, viewport, onChange, onRename }: SettingsPanelProps) {
  if (!selectedNode || !widget) {
    return (
      <aside className="pb-sidebar pb-settings" aria-label="Settings">
        <div className="pb-empty-panel">
          <strong>No element selected</strong>
          <span>Select an element on the canvas to edit its content and styles.</span>
        </div>
      </aside>
    );
  }

  const sections = [
    { id: "content", label: "Content" },
    { id: "style", label: "Style" },
    { id: "advanced", label: "Advanced" },
  ] as const;

  return (
    <aside className="pb-sidebar pb-settings" aria-label="Settings">
      <div className="pb-settings-title">
        <span>{widget.icon}</span>
        <div>
          <strong>{selectedNode.name ?? widget.label}</strong>
          <small>{selectedNode.id}</small>
        </div>
      </div>
      <section className="pb-control-section">
        <h2>Element</h2>
        <label className="pb-control" htmlFor="pb-element-name">
          <span>Name</span>
          <input
            id="pb-element-name"
            value={selectedNode.name ?? ""}
            placeholder={widget.label}
            onChange={(event) => onRename(event.target.value)}
          />
        </label>
      </section>
      {sections.map((section) => {
        const controls = widget.controls.filter((control) => (control.section ?? "content") === section.id);
        if (controls.length === 0) return null;
        return (
          <section key={section.id} className="pb-control-section">
            <h2>{section.label}</h2>
            {controls.map((control) => (
              <ControlRenderer
                key={`${control.target}-${control.path}`}
                control={control}
                valueSource={control.target === "props" ? selectedNode.props : selectedNode.styles as unknown as Record<string, unknown>}
                viewport={viewport}
                onChange={(value) => onChange(control.target, control.path, value)}
              />
            ))}
          </section>
        );
      })}
    </aside>
  );
}
