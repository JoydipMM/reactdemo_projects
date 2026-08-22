import type { WidgetRenderProps } from "../../types";

export function ButtonWidget({ props, className, style, dataNodeId }: WidgetRenderProps) {
  const text = typeof props.text === "string" ? props.text : "Button";
  const url = typeof props.url === "string" ? props.url : "#";
  const target = props.target === "_blank" ? "_blank" : "_self";
  return (
    <a className={className} data-pb-node-id={dataNodeId} style={{ display: "inline-flex", textDecoration: "none", ...style }} href={url} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
      {text}
    </a>
  );
}
