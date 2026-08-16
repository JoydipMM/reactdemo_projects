import type { Page, PageNode, StyleSettings } from "../types";

const widgetKinds = new Set(["structure", "widget"]);

export function isPageNode(value: unknown): value is PageNode {
  if (!value || typeof value !== "object") return false;
  const node = value as Partial<PageNode>;
  return (
    typeof node.id === "string" &&
    typeof node.type === "string" &&
    typeof node.props === "object" &&
    Boolean(node.props) &&
    typeof node.styles === "object" &&
    Boolean(node.styles) &&
    typeof node.kind === "string" &&
    widgetKinds.has(node.kind) &&
    (node.children === undefined || (Array.isArray(node.children) && node.children.every(isPageNode)))
  );
}

export function isStyleSettings(value: unknown): value is StyleSettings {
  return typeof value === "object" && Boolean(value) && !Array.isArray(value);
}

export function isPage(value: unknown): value is Page {
  if (!value || typeof value !== "object") return false;
  const page = value as Partial<Page>;
  return (
    typeof page.id === "string" &&
    typeof page.version === "number" &&
    typeof page.title === "string" &&
    isPageNode(page.root)
  );
}
