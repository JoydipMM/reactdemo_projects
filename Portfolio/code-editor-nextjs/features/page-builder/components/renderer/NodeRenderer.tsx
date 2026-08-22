import type { DynamicContentItem, PageNode, Viewport } from "../../types";
import { widgetRegistry } from "../../core/registry/defaultRegistry";
import { WidgetRenderer } from "./WidgetRenderer";

interface NodeRendererProps {
  node: PageNode;
  viewport: Viewport;
  dynamicContent?: DynamicContentItem[];
}

export function NodeRenderer({ node, viewport, dynamicContent = [] }: NodeRendererProps) {
  return (
    <WidgetRenderer node={node} viewport={viewport} registry={widgetRegistry} dynamicContent={dynamicContent}>
      {node.children?.map((child) => <NodeRenderer key={child.id} node={child} viewport={viewport} dynamicContent={dynamicContent} />)}
    </WidgetRenderer>
  );
}
