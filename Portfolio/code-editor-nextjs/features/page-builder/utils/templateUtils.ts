import type { DesignSystem, Page, PageNode, PageTemplate, TemplateKind } from "../types";
import { cloneNode } from "./treeUtils";

export function createTemplateFromNodes(
  name: string,
  kind: TemplateKind,
  nodes: PageNode[],
  designSystem?: DesignSystem,
): PageTemplate {
  const now = new Date().toISOString();
  return {
    id: `template-${kind}-${Date.now().toString(36)}`,
    name,
    kind,
    nodes: nodes.map((node) => JSON.parse(JSON.stringify(node)) as PageNode),
    designSystem: kind === "page" ? designSystem : undefined,
    createdAt: now,
    updatedAt: now,
  };
}

export function instantiateTemplate(template: PageTemplate): PageNode[] {
  return template.nodes.map((node) => {
    const cloned = cloneNode(node);
    if (template.kind === "globalComponent") {
      return markGlobalComponent(cloned, template.id);
    }
    return cloned;
  });
}

export function applyPageTemplate(page: Page, template: PageTemplate): Page {
  if (template.kind !== "page") return page;
  return {
    ...page,
    root: {
      ...page.root,
      children: instantiateTemplate(template),
    },
    designSystem: template.designSystem ?? page.designSystem,
    metadata: {
      ...page.metadata,
      updatedAt: new Date().toISOString(),
    },
  };
}

function markGlobalComponent(node: PageNode, templateId: string): PageNode {
  return {
    ...node,
    globalComponentId: templateId,
    children: node.children?.map((child) => markGlobalComponent(child, templateId)),
  };
}
