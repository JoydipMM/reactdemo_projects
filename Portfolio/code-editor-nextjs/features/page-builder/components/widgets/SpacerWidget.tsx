import type { WidgetRenderProps } from "../../types";

export function SpacerWidget({ className, style }: WidgetRenderProps) {
  return <div className={className} style={style} aria-hidden="true" />;
}
