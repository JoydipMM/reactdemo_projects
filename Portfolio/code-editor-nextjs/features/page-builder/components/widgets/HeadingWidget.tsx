import type { WidgetRenderProps } from "../../types";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const headingTags = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

export function HeadingWidget({ props, className, style, dataNodeId }: WidgetRenderProps) {
  const tag = typeof props.tag === "string" && headingTags.has(props.tag) ? (props.tag as HeadingTag) : "h2";
  const text = typeof props.text === "string" ? props.text : "Heading";
  const Tag = tag;
  return (
    <Tag className={className} data-pb-node-id={dataNodeId} style={style}>
      {text}
    </Tag>
  );
}
