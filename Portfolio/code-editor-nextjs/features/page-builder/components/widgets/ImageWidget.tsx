import type { WidgetRenderProps } from "../../types";

export function ImageWidget({ props, className, style, dataNodeId }: WidgetRenderProps) {
  const src = typeof props.src === "string" && props.src ? props.src : "https://placehold.co/900x520/e5e7eb/334155?text=Image";
  const alt = typeof props.alt === "string" ? props.alt : "";
  // The page-builder renderer is framework-portable, so it intentionally uses a native image element.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} data-pb-node-id={dataNodeId} style={style} src={src} alt={alt} />;
}
