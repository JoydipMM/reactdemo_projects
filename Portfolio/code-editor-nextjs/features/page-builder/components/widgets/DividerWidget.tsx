import type { WidgetRenderProps } from "../../types";

export function DividerWidget({ className, style, dataNodeId }: WidgetRenderProps) {
  return <hr className={className} data-pb-node-id={dataNodeId} style={style} />;
}
