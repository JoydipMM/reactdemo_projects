import type { WidgetRenderProps } from "../../types";

export function SpacerWidget({ className, style, dataNodeId }: WidgetRenderProps) {
  return <div className={className} data-pb-node-id={dataNodeId} style={style} aria-hidden="true" />;
}
