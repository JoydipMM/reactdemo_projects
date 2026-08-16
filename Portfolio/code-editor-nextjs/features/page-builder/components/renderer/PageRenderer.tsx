import type { Page, Viewport } from "../../types";
import { NodeRenderer } from "./NodeRenderer";

interface PageRendererProps {
  page: Page;
  viewport?: Viewport;
}

export function PageRenderer({ page, viewport = "desktop" }: PageRendererProps) {
  return <NodeRenderer node={page.root} viewport={viewport} />;
}
