import type { WidgetRenderProps } from "../../types";

export function TextWidget({ props, className, style, dataNodeId }: WidgetRenderProps) {
  const text = typeof props.text === "string" ? props.text : "Text";
  return (
    <p className={className} data-pb-node-id={dataNodeId} style={{ whiteSpace: "pre-wrap", ...style }}>
      {text}
    </p>
  );
}
