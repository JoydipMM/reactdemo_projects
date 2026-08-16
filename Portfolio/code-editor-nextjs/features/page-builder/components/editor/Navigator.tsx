"use client";

import type { PageNode } from "../../types";

interface NavigatorProps {
  root: PageNode;
  selectedNodeId: string | null;
  onSelect: (nodeId: string) => void;
  onMove: (nodeId: string, parentId: string, index?: number) => void;
}

interface NavigatorNodeProps {
  node: PageNode;
  parentId: string | null;
  index: number;
  selectedNodeId: string | null;
  onSelect: (nodeId: string) => void;
  onMove: (nodeId: string, parentId: string, index?: number) => void;
  depth: number;
}

export function Navigator({ root, selectedNodeId, onSelect, onMove }: NavigatorProps) {
  return (
    <div className="pb-navigator" aria-label="Navigator">
      <h2>Navigator</h2>
      <NavigatorNode node={root} parentId={null} index={0} selectedNodeId={selectedNodeId} onSelect={onSelect} onMove={onMove} depth={0} />
    </div>
  );
}

function NavigatorNode({ node, parentId, index, selectedNodeId, onSelect, onMove, depth }: NavigatorNodeProps) {
  const canDrag = node.type !== "root";
  const canAcceptChildren = node.type === "root" || node.kind === "structure";

  const handleDropBefore: React.DragEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const draggedNodeId = event.dataTransfer.getData("application/page-builder-node");
    if (!draggedNodeId || !parentId || draggedNodeId === node.id) return;
    onMove(draggedNodeId, parentId, index);
  };

  const handleDropInside: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const draggedNodeId = event.dataTransfer.getData("application/page-builder-node");
    if (!draggedNodeId || draggedNodeId === node.id || !canAcceptChildren) return;
    onMove(draggedNodeId, node.id);
  };

  return (
    <div
      className="pb-navigator-node"
      onDragOver={(event) => {
        if (canAcceptChildren) event.preventDefault();
      }}
      onDrop={handleDropInside}
    >
      <button
        type="button"
        draggable={canDrag}
        className={selectedNodeId === node.id ? "is-active" : ""}
        style={{ paddingLeft: 10 + depth * 12 }}
        onClick={() => onSelect(node.id)}
        onDragStart={(event) => {
          if (!canDrag) return;
          event.dataTransfer.setData("application/page-builder-node", node.id);
          event.dataTransfer.effectAllowed = "move";
          event.stopPropagation();
        }}
        onDragOver={(event) => {
          if (parentId) event.preventDefault();
        }}
        onDrop={handleDropBefore}
      >
        {node.name ?? node.type}
      </button>
      <div className="pb-navigator-children">
        {node.children?.map((child, childIndex) => (
          <NavigatorNode
            key={child.id}
            node={child}
            parentId={node.id}
            index={childIndex}
            selectedNodeId={selectedNodeId}
            onSelect={onSelect}
            onMove={onMove}
            depth={depth + 1}
          />
        ))}
      </div>
    </div>
  );
}
