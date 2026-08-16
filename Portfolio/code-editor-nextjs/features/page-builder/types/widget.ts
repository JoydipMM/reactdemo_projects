import type { ComponentType } from "react";
import type { PageNode } from "./node";
import type { StyleSettings } from "./styles";

export type ControlTarget = "props" | "styles";

export type ControlType =
  | "text"
  | "textarea"
  | "select"
  | "color"
  | "url"
  | "responsiveText"
  | "spacing"
  | "alignment";

export interface ControlOption {
  label: string;
  value: string;
}

export interface ControlDefinition {
  type: ControlType;
  label: string;
  target: ControlTarget;
  path: string;
  section?: "content" | "style" | "advanced";
  options?: ControlOption[];
  placeholder?: string;
}

export interface WidgetRenderProps<TProps extends Record<string, unknown> = Record<string, unknown>> {
  node: PageNode;
  props: TProps;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface WidgetDefinition {
  type: string;
  label: string;
  category: "basic" | "layout";
  icon: string;
  kind: "structure" | "widget";
  acceptsChildren: boolean;
  component: ComponentType<WidgetRenderProps>;
  defaultProps: Record<string, unknown>;
  defaultStyles: StyleSettings;
  controls: ControlDefinition[];
}
