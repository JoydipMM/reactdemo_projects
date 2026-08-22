import type { DesignSystem } from "./designSystem";
import type { PageNode } from "./node";

export type TemplateKind = "page" | "section" | "globalComponent";

export interface PageTemplate {
  id: string;
  name: string;
  kind: TemplateKind;
  nodes: PageNode[];
  designSystem?: DesignSystem;
  createdAt: string;
  updatedAt: string;
}
