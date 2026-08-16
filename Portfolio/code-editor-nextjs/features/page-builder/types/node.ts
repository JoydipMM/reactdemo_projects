import type { StyleSettings } from "./styles";

export type WidgetKind = "structure" | "widget";

export interface PageNode {
  id: string;
  name?: string;
  type: string;
  kind: WidgetKind;
  props: Record<string, unknown>;
  styles: StyleSettings;
  children?: PageNode[];
}

export type DropPosition = "inside" | "before" | "after";
