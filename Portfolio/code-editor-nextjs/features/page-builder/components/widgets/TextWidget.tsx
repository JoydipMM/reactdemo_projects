import type { WidgetRenderProps } from "../../types";

export function TextWidget({ props, className, style }: WidgetRenderProps) {
  const text = typeof props.text === "string" ? props.text : "Text";
  return (
    <p className={className} style={{ whiteSpace: "pre-wrap", ...style }}>
      {text}
    </p>
  );
}
