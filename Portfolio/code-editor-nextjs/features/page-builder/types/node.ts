import type { StyleSettings } from "./styles";
import type { DynamicBinding } from "./cms";

export type WidgetKind = "structure" | "widget";

export interface PageNode {
  id: string;
  name?: string;
  type: string;
  kind: WidgetKind;
  cssClasses?: string[];
  customCss?: string;
  globalComponentId?: string;
  dynamicBindings?: DynamicBinding[];
  props: Record<string, unknown>;
  styles: StyleSettings;
  children?: PageNode[];
}

export type DropPosition = "inside" | "before" | "after";
