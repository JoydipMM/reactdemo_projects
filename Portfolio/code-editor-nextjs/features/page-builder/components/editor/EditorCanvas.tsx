"use client";

import type { EditorState, PageNode, Viewport, WidgetDefinition } from "../../types";
import { widgetRegistry } from "../../core/registry/defaultRegistry";
import { stylesToCss } from "../../utils/styleUtils";
import { ElementOutline } from "../common/ElementOutline";
import { DropIndicator } from "../common/DropIndicator";
import { WidgetRenderer } from "../renderer/WidgetRenderer";

interface EditorCanvasProps {
  state: EditorState;
  onSelect: (nodeId: string | null) => void;
  onHover: (nodeId: string | null) => void;
  onAdd: (type: string, parentId?: string, index?: number) => void;
  onMove: (nodeId: string, parentId: string, index?: number) => void;
}

export function EditorCanvas({ state, onSelect, onHover, onAdd, onMove }: EditorCanvasProps) {
  const width = state.viewport === "desktop" ? "100%" : state.viewport === "tablet" ? "768px" : "390px";
  return (
    <main className="pb-canvas-shell" onClick={() => onSelect(null)}>
      <div className="pb-canvas-scroll">
        <div className={`pb-canvas pb-canvas-${state.viewport}`} style={{ width }}>
          <EditorNode node={state.page.root} viewport={state.viewport} state={state} onSelect={onSelect} onHover={onHover} onAdd={onAdd} onMove={onMove} />
        </div>
      </div>
    </main>
  );
}

function EditorNode({ node, viewport, state, onSelect, onHover, onAdd, onMove }: {
  node: PageNode;
  viewport: Viewport;
  state: EditorState;
  onSelect: (nodeId: string | null) => void;
  onHover: (nodeId: string | null) => void;
  onAdd: (type: string, parentId?: string, index?: number) => void;
  onMove: (nodeId: string, parentId: string, index?: number) => void;
}) {
  const widget = widgetRegistry.get(node.type) as WidgetDefinition | undefined;
  const selected = state.selection.selectedNodeId === node.id;
  const hovered = state.selection.hoveredNodeId === node.id;
  const acceptsChildren = node.type === "root" || Boolean(widget?.acceptsChildren);

  const onDrop: React.DragEventHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const widgetType = event.dataTransfer.getData("application/page-builder-widget");
    const nodeId = event.dataTransfer.getData("application/page-builder-node");
    if (widgetType && acceptsChildren) onAdd(widgetType, node.id);
    if (nodeId && acceptsChildren && nodeId !== node.id) onMove(nodeId, node.id);
  };

  const nodeClass = [
    "pb-edit-node",
    selected ? "is-selected" : "",
    hovered ? "is-hovered" : "",
    acceptsChildren ? "can-drop" : "",
  ].filter(Boolean).join(" ");

  return (
    <div
      className={nodeClass}
      data-node-type={node.type}
      draggable={node.type !== "root"}
      onDragStart={(event) => {
        event.dataTransfer.setData("application/page-builder-node", node.id);
        event.stopPropagation();
      }}
      onDragOver={(event) => {
        if (acceptsChildren) event.preventDefault();
      }}
      onDrop={onDrop}
      onMouseEnter={(event) => {
        event.stopPropagation();
        onHover(node.id);
      }}
      onMouseLeave={() => onHover(null)}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(node.id);
      }}
    >
      {node.type !== "root" && <ElementOutline label={node.name ?? widget?.label ?? node.type} selected={selected} />}
      <WidgetRenderer node={node} registry={widgetRegistry} viewport={viewport} className="pb-rendered-node">
        {acceptsChildren && node.children?.length === 0 ? (
          <div className="pb-empty-container">
            <DropIndicator />
            Drop elements here
          </div>
        ) : (
          node.children?.map((child, index) => (
            <div
              key={child.id}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                event.stopPropagation();
                const widgetType = event.dataTransfer.getData("application/page-builder-widget");
                const draggedNodeId = event.dataTransfer.getData("application/page-builder-node");
                if (widgetType) onAdd(widgetType, node.id, index);
                if (draggedNodeId && draggedNodeId !== child.id) onMove(draggedNodeId, node.id, index);
              }}
            >
              <EditorNode node={child} viewport={viewport} state={state} onSelect={onSelect} onHover={onHover} onAdd={onAdd} onMove={onMove} />
            </div>
          ))
        )}
      </WidgetRenderer>
      <span className="pb-style-probe" style={stylesToCss(node.styles, viewport)} />
    </div>
  );
}
