import type { Page, PageNode } from "../types";
import { createNodeId } from "./idUtils";

export function findNode(root: PageNode, nodeId: string): PageNode | null {
  if (root.id === nodeId) return root;
  for (const child of root.children ?? []) {
    const found = findNode(child, nodeId);
    if (found) return found;
  }
  return null;
}

export function findParent(root: PageNode, nodeId: string): PageNode | null {
  for (const child of root.children ?? []) {
    if (child.id === nodeId) return root;
    const found = findParent(child, nodeId);
    if (found) return found;
  }
  return null;
}

export function getNodePath(root: PageNode, nodeId: string, path: string[] = []): string[] | null {
  if (root.id === nodeId) return [...path, root.id];
  for (const child of root.children ?? []) {
    const found = getNodePath(child, nodeId, [...path, root.id]);
    if (found) return found;
  }
  return null;
}

export function updateNode(page: Page, nodeId: string, updater: (node: PageNode) => PageNode): Page {
  const update = (node: PageNode): PageNode => {
    if (node.id === nodeId) return updater(node);
    return { ...node, children: node.children?.map(update) };
  };
  return touchPage({ ...page, root: update(page.root) });
}

export function insertNode(page: Page, parentId: string, node: PageNode, index?: number): Page {
  return updateNode(page, parentId, (parent) => {
    const children = [...(parent.children ?? [])];
    const insertAt = index === undefined ? children.length : Math.max(0, Math.min(index, children.length));
    children.splice(insertAt, 0, node);
    return { ...parent, children };
  });
}

export function removeNode(page: Page, nodeId: string): { page: Page; removed: PageNode | null } {
  if (page.root.id === nodeId) return { page, removed: null };
  let removed: PageNode | null = null;
  const remove = (node: PageNode): PageNode => {
    const children = (node.children ?? []).filter((child) => {
      if (child.id === nodeId) {
        removed = child;
        return false;
      }
      return true;
    }).map(remove);
    return { ...node, children };
  };
  return { page: touchPage({ ...page, root: remove(page.root) }), removed };
}

export function cloneNode(node: PageNode): PageNode {
  return {
    ...node,
    id: createNodeId(node.type),
    props: { ...node.props },
    styles: structuredCloneSafe(node.styles),
    children: node.children?.map(cloneNode),
  };
}

export function duplicateNode(page: Page, nodeId: string): { page: Page; duplicated: PageNode | null } {
  const source = findNode(page.root, nodeId);
  const parent = findParent(page.root, nodeId);
  if (!source || !parent) return { page, duplicated: null };
  const index = (parent.children ?? []).findIndex((child) => child.id === nodeId);
  const duplicated = cloneNode(source);
  return { page: insertNode(page, parent.id, duplicated, index + 1), duplicated };
}

export function moveNode(page: Page, nodeId: string, parentId: string, index?: number): Page {
  if (nodeId === page.root.id || nodeId === parentId) return page;
  const moving = findNode(page.root, nodeId);
  const target = findNode(page.root, parentId);
  if (!moving || !target || isDescendant(moving, parentId)) return page;
  const sourceParent = findParent(page.root, nodeId);
  const sourceIndex = sourceParent?.children?.findIndex((child) => child.id === nodeId) ?? -1;
  const adjustedIndex = sourceParent?.id === parentId && index !== undefined && sourceIndex >= 0 && sourceIndex < index
    ? index - 1
    : index;
  const without = removeNode(page, nodeId).page;
  return insertNode(without, parentId, moving, adjustedIndex);
}

export type ArrangeDirection = "up" | "down" | "top" | "bottom";

export function arrangeNode(page: Page, nodeId: string, direction: ArrangeDirection): Page {
  if (nodeId === page.root.id) return page;
  const parent = findParent(page.root, nodeId);
  const children = parent?.children;
  if (!parent || !children || children.length < 2) return page;

  const currentIndex = children.findIndex((child) => child.id === nodeId);
  if (currentIndex < 0) return page;

  const targetIndex = getArrangeTargetIndex(currentIndex, children.length, direction);
  if (targetIndex === currentIndex) return page;

  return updateNode(page, parent.id, (node) => {
    const nextChildren = [...(node.children ?? [])];
    const [selected] = nextChildren.splice(currentIndex, 1);
    nextChildren.splice(targetIndex, 0, selected);
    return { ...node, children: nextChildren };
  });
}

export function isDescendant(node: PageNode, nodeId: string): boolean {
  return (node.children ?? []).some((child) => child.id === nodeId || isDescendant(child, nodeId));
}

export function collectIds(node: PageNode): string[] {
  return [node.id, ...(node.children ?? []).flatMap(collectIds)];
}

function touchPage(page: Page): Page {
  return {
    ...page,
    metadata: {
      ...page.metadata,
      updatedAt: new Date().toISOString(),
    },
  };
}

function structuredCloneSafe<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function getArrangeTargetIndex(currentIndex: number, siblingCount: number, direction: ArrangeDirection): number {
  if (direction === "up") return Math.max(0, currentIndex - 1);
  if (direction === "down") return Math.min(siblingCount - 1, currentIndex + 1);
  if (direction === "top") return 0;
  return siblingCount - 1;
}
