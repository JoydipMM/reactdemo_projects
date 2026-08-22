import type { DynamicContentItem, Page, Viewport } from "../../types";
import { designSystemToCss, designSystemToCssVariables } from "../../utils/styleUtils";
import { NodeRenderer } from "./NodeRenderer";

interface PageRendererProps {
  page: Page;
  viewport?: Viewport;
}

export function PageRenderer({ page, viewport = "desktop" }: PageRendererProps) {
  return (
    <div className="pb-page-renderer" style={designSystemToCssVariables(page.designSystem)}>
      <style>{designSystemToCss(page.designSystem, viewport)}</style>
      <NodeRenderer node={page.root} viewport={viewport} dynamicContent={page.cms?.dynamicContent ?? []} />
    </div>
  );
}

export type { DynamicContentItem };
