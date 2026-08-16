import type { PageNode, Viewport, WidgetDefinition } from "../../types";
import { stylesToCss } from "../../utils/styleUtils";

interface WidgetRendererProps {
  node: PageNode;
  registry: WidgetRegistryLike;
  viewport: Viewport;
  children?: React.ReactNode;
  className?: string;
}

interface WidgetRegistryLike {
  get(type: string): WidgetDefinition | undefined;
}

export function WidgetRenderer({ node, registry, viewport, children, className }: WidgetRendererProps) {
  if (node.type === "root") return <div className={className} style={stylesToCss(node.styles, viewport)}>{children}</div>;
  const widget = registry.get(node.type);
  if (!widget) {
    return (
      <div className={className} style={stylesToCss(node.styles, viewport)}>
        Unknown element: {node.type}
      </div>
    );
  }
  const Component = widget.component;
  return <Component node={node} props={node.props} className={className} style={stylesToCss(node.styles, viewport)}>{children}</Component>;
}
