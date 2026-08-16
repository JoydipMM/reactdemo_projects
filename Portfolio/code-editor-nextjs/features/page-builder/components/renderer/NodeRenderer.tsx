import type { PageNode, Viewport } from "../../types";
import { widgetRegistry } from "../../core/registry/defaultRegistry";
import { WidgetRenderer } from "./WidgetRenderer";

interface NodeRendererProps {
  node: PageNode;
  viewport: Viewport;
}

export function NodeRenderer({ node, viewport }: NodeRendererProps) {
  return (
    <WidgetRenderer node={node} viewport={viewport} registry={widgetRegistry}>
      {node.children?.map((child) => <NodeRenderer key={child.id} node={child} viewport={viewport} />)}
    </WidgetRenderer>
  );
}
