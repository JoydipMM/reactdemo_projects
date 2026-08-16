import type { WidgetRenderProps } from "../../types";

export function DividerWidget({ className, style }: WidgetRenderProps) {
  return <hr className={className} style={style} />;
}
