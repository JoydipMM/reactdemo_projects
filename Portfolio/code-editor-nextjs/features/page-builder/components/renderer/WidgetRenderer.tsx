import type { DynamicContentItem, PageNode, Viewport, WidgetDefinition } from "../../types";
import { nodeCustomCss, sanitizeCssIdent, stylesToCss } from "../../utils/styleUtils";

interface WidgetRendererProps {
  node: PageNode;
  registry: WidgetRegistryLike;
  viewport: Viewport;
  children?: React.ReactNode;
  className?: string;
  dynamicContent?: DynamicContentItem[];
}

interface WidgetRegistryLike {
  get(type: string): WidgetDefinition | undefined;
}

export function WidgetRenderer({ node, registry, viewport, children, className, dynamicContent = [] }: WidgetRendererProps) {
  const nodeClasses = [
    className,
    ...(node.cssClasses ?? []).map((cssClass) => `pb-class-${sanitizeCssIdent(cssClass)}`),
  ].filter(Boolean).join(" ");
  const customCss = nodeCustomCss(node.id, node.customCss);

  if (node.type === "root") return <div className={nodeClasses} data-pb-node-id={node.id} style={stylesToCss(node.styles, viewport)}>{customCss && <style>{customCss}</style>}{children}</div>;
  const widget = registry.get(node.type);
  if (!widget) {
    return (
      <div className={nodeClasses} data-pb-node-id={node.id} style={stylesToCss(node.styles, viewport)}>
        {customCss && <style>{customCss}</style>}
        Unknown element: {node.type}
      </div>
    );
  }
  const Component = widget.component;
  const resolvedProps = resolveDynamicProps(node, dynamicContent);
  return (
    <>
      {customCss && <style>{customCss}</style>}
      <Component node={node} props={resolvedProps} className={nodeClasses} style={stylesToCss(node.styles, viewport)} dataNodeId={node.id}>
        {children}
      </Component>
    </>
  );
}

function resolveDynamicProps(node: PageNode, dynamicContent: DynamicContentItem[]): Record<string, unknown> {
  if (!node.dynamicBindings?.length) return node.props;
  const props = { ...node.props };
  node.dynamicBindings.forEach((binding) => {
    const source = dynamicContent.find((item) => item.id === binding.sourceId);
    if (source) props[binding.prop] = source.value;
  });
  return props;
}
