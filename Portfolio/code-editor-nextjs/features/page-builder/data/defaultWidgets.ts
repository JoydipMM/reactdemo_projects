import type { ControlDefinition, WidgetDefinition } from "../types";
import { ButtonWidget } from "../components/widgets/ButtonWidget";
import { ContainerWidget } from "../components/widgets/ContainerWidget";
import { DividerWidget } from "../components/widgets/DividerWidget";
import { HeadingWidget } from "../components/widgets/HeadingWidget";
import { ImageWidget } from "../components/widgets/ImageWidget";
import { SpacerWidget } from "../components/widgets/SpacerWidget";
import { TextWidget } from "../components/widgets/TextWidget";

const alignmentOptions = [
  { label: "Left", value: "left" },
  { label: "Center", value: "center" },
  { label: "Right", value: "right" },
];

const baseTypographyControls: ControlDefinition[] = [
  { type: "responsiveText", label: "Font size", target: "styles", path: "typography.fontSize", section: "style", placeholder: "18px" },
  { type: "responsiveText", label: "Weight", target: "styles", path: "typography.fontWeight", section: "style", placeholder: "600" },
  { type: "responsiveText", label: "Line height", target: "styles", path: "typography.lineHeight", section: "style", placeholder: "1.5" },
  { type: "color", label: "Color", target: "styles", path: "typography.color", section: "style" },
  { type: "alignment", label: "Alignment", target: "styles", path: "typography.textAlign", section: "style", options: alignmentOptions },
];

const boxControls: ControlDefinition[] = [
  { type: "spacing", label: "Margin", target: "styles", path: "spacing.margin", section: "advanced" },
  { type: "spacing", label: "Padding", target: "styles", path: "spacing.padding", section: "advanced" },
];

export const defaultWidgets: WidgetDefinition[] = [
  {
    type: "container",
    label: "Container",
    category: "layout",
    icon: "[]",
    kind: "structure",
    acceptsChildren: true,
    component: ContainerWidget,
    defaultProps: {},
    defaultStyles: {
      layout: { display: "flex", direction: { desktop: "column" }, gap: { desktop: "16px" }, minHeight: { desktop: "120px" }, width: { desktop: "100%" } },
      spacing: { padding: { desktop: { top: "24px", right: "24px", bottom: "24px", left: "24px" } } },
      background: { color: "#ffffff" },
      border: { width: "1px", style: "solid", color: "#e5e7eb", radius: { desktop: "8px" } },
    },
    controls: [
      { type: "select", label: "Direction", target: "styles", path: "layout.direction", section: "style", options: [{ label: "Column", value: "column" }, { label: "Row", value: "row" }] },
      { type: "responsiveText", label: "Width", target: "styles", path: "layout.width", section: "style", placeholder: "100%" },
      { type: "responsiveText", label: "Max width", target: "styles", path: "layout.maxWidth", section: "style", placeholder: "1140px" },
      { type: "responsiveText", label: "Min height", target: "styles", path: "layout.minHeight", section: "style", placeholder: "240px" },
      { type: "responsiveText", label: "Gap", target: "styles", path: "layout.gap", section: "style", placeholder: "16px" },
      { type: "color", label: "Background", target: "styles", path: "background.color", section: "style" },
      { type: "color", label: "Border color", target: "styles", path: "border.color", section: "style" },
      { type: "responsiveText", label: "Radius", target: "styles", path: "border.radius", section: "style", placeholder: "8px" },
      ...boxControls,
    ],
  },
  {
    type: "heading",
    label: "Heading",
    category: "basic",
    icon: "H",
    kind: "widget",
    acceptsChildren: false,
    component: HeadingWidget,
    defaultProps: { text: "Heading", tag: "h2" },
    defaultStyles: { typography: { fontSize: { desktop: "42px", mobile: "30px" }, fontWeight: { desktop: 800 }, lineHeight: { desktop: "1.1" }, color: "#111827" } },
    controls: [
      { type: "text", label: "Text", target: "props", path: "text", section: "content" },
      { type: "select", label: "HTML tag", target: "props", path: "tag", section: "content", options: ["h1", "h2", "h3", "h4", "h5", "h6"].map((value) => ({ label: value.toUpperCase(), value })) },
      ...baseTypographyControls,
      { type: "spacing", label: "Margin", target: "styles", path: "spacing.margin", section: "advanced" },
    ],
  },
  {
    type: "text",
    label: "Text",
    category: "basic",
    icon: "T",
    kind: "widget",
    acceptsChildren: false,
    component: TextWidget,
    defaultProps: { text: "Write your text here." },
    defaultStyles: { typography: { fontSize: { desktop: "18px" }, lineHeight: { desktop: "1.7" }, color: "#4b5563" } },
    controls: [{ type: "textarea", label: "Text", target: "props", path: "text", section: "content" }, ...baseTypographyControls, { type: "spacing", label: "Margin", target: "styles", path: "spacing.margin", section: "advanced" }],
  },
  {
    type: "image",
    label: "Image",
    category: "basic",
    icon: "Im",
    kind: "widget",
    acceptsChildren: false,
    component: ImageWidget,
    defaultProps: { src: "https://placehold.co/900x520/e5e7eb/334155?text=Image", alt: "Placeholder image" },
    defaultStyles: { layout: { width: { desktop: "100%" }, height: { desktop: "auto" }, objectFit: "cover" }, border: { radius: { desktop: "8px" } } },
    controls: [
      { type: "url", label: "Image URL", target: "props", path: "src", section: "content" },
      { type: "text", label: "Alt text", target: "props", path: "alt", section: "content" },
      { type: "responsiveText", label: "Width", target: "styles", path: "layout.width", section: "style", placeholder: "100%" },
      { type: "responsiveText", label: "Height", target: "styles", path: "layout.height", section: "style", placeholder: "320px" },
      { type: "responsiveText", label: "Radius", target: "styles", path: "border.radius", section: "style", placeholder: "8px" },
    ],
  },
  {
    type: "button",
    label: "Button",
    category: "basic",
    icon: "B",
    kind: "widget",
    acceptsChildren: false,
    component: ButtonWidget,
    defaultProps: { text: "Button", url: "#", target: "_self" },
    defaultStyles: { typography: { color: "#ffffff", fontWeight: { desktop: 700 } }, background: { color: "#2563eb" }, border: { width: "1px", style: "solid", color: "#2563eb", radius: { desktop: "8px" } }, spacing: { padding: { desktop: { top: "12px", right: "18px", bottom: "12px", left: "18px" } } } },
    controls: [
      { type: "text", label: "Text", target: "props", path: "text", section: "content" },
      { type: "url", label: "URL", target: "props", path: "url", section: "content" },
      { type: "select", label: "Target", target: "props", path: "target", section: "content", options: [{ label: "Same tab", value: "_self" }, { label: "New tab", value: "_blank" }] },
      ...baseTypographyControls,
      { type: "color", label: "Background", target: "styles", path: "background.color", section: "style" },
      { type: "color", label: "Hover background", target: "styles", path: "hover.background.color", section: "style" },
      ...boxControls,
    ],
  },
  {
    type: "spacer",
    label: "Spacer",
    category: "basic",
    icon: "-",
    kind: "widget",
    acceptsChildren: false,
    component: SpacerWidget,
    defaultProps: {},
    defaultStyles: { layout: { height: { desktop: "48px", tablet: "36px", mobile: "28px" }, width: { desktop: "100%" } } },
    controls: [{ type: "responsiveText", label: "Height", target: "styles", path: "layout.height", section: "style", placeholder: "48px" }],
  },
  {
    type: "divider",
    label: "Divider",
    category: "basic",
    icon: "/",
    kind: "widget",
    acceptsChildren: false,
    component: DividerWidget,
    defaultProps: {},
    defaultStyles: { layout: { width: { desktop: "100%" } }, border: { width: "1px 0 0 0", style: "solid", color: "#d1d5db" }, spacing: { margin: { desktop: { top: "16px", right: "0", bottom: "16px", left: "0" } } } },
    controls: [
      { type: "responsiveText", label: "Width", target: "styles", path: "layout.width", section: "style", placeholder: "100%" },
      { type: "color", label: "Color", target: "styles", path: "border.color", section: "style" },
      { type: "spacing", label: "Margin", target: "styles", path: "spacing.margin", section: "advanced" },
    ],
  },
];
