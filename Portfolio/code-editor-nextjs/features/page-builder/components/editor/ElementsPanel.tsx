"use client";

import type { WidgetDefinition } from "../../types";

interface ElementsPanelProps {
  widgets: WidgetDefinition[];
  onAdd: (type: string) => void;
}

export function ElementsPanel({ widgets, onAdd }: ElementsPanelProps) {
  const categories = [
    { id: "basic", label: "Basic" },
    { id: "layout", label: "Layout" },
  ] as const;

  return (
    <aside className="pb-sidebar pb-elements" aria-label="Elements">
      {categories.map((category) => (
        <section key={category.id}>
          <h2>{category.label}</h2>
          <div className="pb-element-grid">
            {widgets.filter((widget) => widget.category === category.id).map((widget) => (
              <button
                key={widget.type}
                type="button"
                draggable
                onDragStart={(event) => event.dataTransfer.setData("application/page-builder-widget", widget.type)}
                onClick={() => onAdd(widget.type)}
                className="pb-element-tile"
              >
                <span aria-hidden>{widget.icon}</span>
                {widget.label}
              </button>
            ))}
          </div>
        </section>
      ))}
    </aside>
  );
}
