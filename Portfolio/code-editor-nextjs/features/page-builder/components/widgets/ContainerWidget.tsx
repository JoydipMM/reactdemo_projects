import type { WidgetRenderProps } from "../../types";

export function ContainerWidget({ children, className, style, dataNodeId }: WidgetRenderProps) {
  return (
    <section className={className} data-pb-node-id={dataNodeId} style={style}>
      {children}
    </section>
  );
}
