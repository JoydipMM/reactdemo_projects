import type { WidgetRenderProps } from "../../types";

export function ContainerWidget({ children, className, style }: WidgetRenderProps) {
  return (
    <section className={className} style={style}>
      {children}
    </section>
  );
}
