# Page Builder

Reusable Elementor-like visual page builder for Next.js/React. The page JSON is the source of truth; the editor changes JSON, the renderer renders JSON, and storage persists JSON.

## Architecture

```text
Page JSON -> Editor commands -> Editor state/history -> Renderer -> Storage
```

- `components/editor`: shell, canvas, sidebars, toolbar, navigator, settings panel.
- `components/renderer`: framework-light page rendering from JSON.
- `components/widgets`: default widget implementations.
- `components/controls`: dynamic settings controls driven by widget definitions.
- `core/registry`: widget registry and default registry.
- `core/storage`: `PageStorage` implementations.
- `schema`: runtime validation and parsing.
- `types`: public TypeScript contracts.
- `utils`: pure tree, style, ID, and responsive helpers.

## Page JSON

```ts
interface Page {
  id: string;
  version: number;
  title: string;
  root: PageNode;
  designSystem?: DesignSystem;
  templates?: PageTemplate[];
  metadata?: {
    createdAt?: string;
    updatedAt?: string;
  };
}

interface PageNode {
  id: string;
  name?: string;
  type: string;
  kind: "structure" | "widget";
  props: Record<string, unknown>;
  styles: StyleSettings;
  children?: PageNode[];
}
```

Example:

```json
{
  "id": "demo-page",
  "version": 1,
  "title": "Visual Builder Demo",
  "root": {
    "id": "page-root",
    "type": "root",
    "kind": "structure",
    "props": {},
    "styles": {},
    "children": [
      {
        "id": "container-1",
        "type": "container",
        "kind": "structure",
        "props": {},
        "styles": {},
        "children": [
          {
            "id": "heading-1",
            "type": "heading",
            "kind": "widget",
            "props": { "text": "Hello World", "tag": "h1" },
            "styles": {}
          }
        ]
      }
    ]
  }
}
```

## Widget Registry

Widgets are registered centrally. The renderer, elements panel, and settings panel read from the same definition.

```ts
registerWidget({
  type: "testimonial",
  label: "Testimonial",
  category: "basic",
  icon: "Ts",
  kind: "widget",
  acceptsChildren: false,
  component: TestimonialWidget,
  defaultProps: {
    quote: "This changed our workflow.",
    author: "A. Customer"
  },
  defaultStyles: {
    typography: {
      fontSize: { desktop: "18px" },
      color: "#1f2937"
    }
  },
  controls: [
    { type: "textarea", label: "Quote", target: "props", path: "quote", section: "content" },
    { type: "text", label: "Author", target: "props", path: "author", section: "content" },
    { type: "responsiveText", label: "Font size", target: "styles", path: "typography.fontSize", section: "style" },
    { type: "color", label: "Color", target: "styles", path: "typography.color", section: "style" }
  ]
});
```

## Creating A Widget

1. Create a component in `components/widgets`.
2. Add a `WidgetDefinition` with defaults and controls.
3. Register it through `widgetRegistry.register(...)` or pass it to `<PageBuilder widgets={[...]} />`.

No editor canvas or settings panel changes are needed when the widget is described with controls.

## Creating A Control

Add a `ControlType`, extend `ControlDefinition` if needed, and add one rendering branch in `ControlRenderer`. Widgets can then use the new control through their `controls` array.

## Responsive Properties

Responsive values use:

```ts
type Breakpoint = "desktop" | "tablet" | "mobile";
type ResponsiveValue<T> = Partial<Record<Breakpoint, T>>;
```

Use `resolveResponsiveValue(value, viewport)` to resolve fallbacks. The editor stores one JSON document; switching viewport only changes which breakpoint is edited and previewed.

## Design System

Phase 2 stores global design data on `page.designSystem`:

- `colors`: global color tokens emitted as `--pb-color-*`
- `typography`: font family, size, weight, and line-height tokens
- `spacing`: spacing scale emitted as `--pb-space-*`
- `breakpoints`: desktop, tablet, and mobile widths
- `globalStyles`: page background, text color, font family, and content width
- `cssClasses`: structured class definitions emitted as `.pb-class-*`
- `customCss`: raw page-level custom CSS

Each node can also store:

```ts
cssClasses?: string[];
customCss?: string;
```

The renderer applies classes to the rendered widget and scopes node custom CSS through `data-pb-node-id`.

## Undo / Redo

The editor stores page snapshots in `history.past` and `history.future`. Mutating actions go through `mutate`, which pushes the previous page into history. Undo and redo swap page snapshots without mutating the document.

## Drag / Drop

The elements panel writes widget types to `dataTransfer`. Existing canvas nodes write node IDs. The canvas routes both through `addNode` or `moveNode`, and tree utilities prevent invalid moves such as moving a node into itself or its descendants.

## Storage

`PageStorage` abstracts persistence:

```ts
interface PageStorage {
  load(): Promise<Page | null>;
  save(page: Page): Promise<void>;
  clear?(): Promise<void>;
}
```

Phase 1 ships `LocalStoragePageStorage`, saving to `page-builder-document`. API/database storage can replace it without changing editor UI.

## Templates

Phase 3 stores reusable templates in `page.templates`.

```ts
interface PageTemplate {
  id: string;
  name: string;
  kind: "page" | "section" | "globalComponent";
  nodes: PageNode[];
  designSystem?: DesignSystem;
  createdAt: string;
  updatedAt: string;
}
```

- Page templates can be applied to replace the current page structure or inserted as sections.
- Section templates insert cloned nodes into the selected container or after the selected widget.
- Global components insert cloned nodes marked with `globalComponentId`, which gives Phase 4+ a stable hook for synced components.
- All inserted template nodes receive new IDs through `cloneNode()`.

## CMS

Phase 4 stores local CMS data in `page.cms`:

```ts
interface CmsWorkspace {
  activePageId: string;
  pages: CmsPageRecord[];
  media: MediaItem[];
  dynamicContent: DynamicContentItem[];
  revisions: Revision[];
}
```

The editor supports:

- Pages with slugs and independent page structures
- Draft/publish status
- SEO metadata on the active page
- URL-based media library records
- Dynamic content fields
- Binding a selected widget's primary prop to dynamic content
- Manual revisions and restore

This is intentionally local-first for Phase 4. A backend CMS can later replace the storage layer while keeping the Page JSON and renderer contracts.

## Integrating

```tsx
import { PageBuilder, PageRenderer, createDefaultPage } from "@/features/page-builder";

export default function EditorRoute() {
  return <PageBuilder initialPage={createDefaultPage()} onSave={async (page) => console.log(page)} />;
}

export function PublicPage({ page }) {
  return <PageRenderer page={page} />;
}
```

## Public API

```ts
export {
  PageBuilder,
  PageRenderer,
  createDefaultPage,
  defaultWidgets,
  widgetRegistry,
  WidgetRegistry,
  LocalStoragePageStorage,
  parsePage,
  validatePage
};
```

## Phase 1 Limits

There is no backend, auth, collaboration, upload pipeline, template system, global components, theme builder, plugin marketplace, AI generation, Figma import, or revision database yet. The module is structured so those concerns can be added behind registry, storage, and command boundaries.
