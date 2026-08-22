import type { PageTemplate } from "../types";
import { createNodeId } from "../utils/idUtils";

export function defaultTemplates(): PageTemplate[] {
  return [
    {
      id: "template-page-saas-hero",
      name: "SaaS Landing Page",
      kind: "page",
      createdAt: "2026-01-01T00:00:00.000Z",
      updatedAt: "2026-01-01T00:00:00.000Z",
      nodes: [
        {
          id: createNodeId("container"),
          name: "Landing Hero",
          type: "container",
          kind: "structure",
          props: {},
          styles: {
            layout: { display: "flex", direction: { desktop: "column" }, alignItems: { desktop: "center" }, gap: { desktop: "18px" }, minHeight: { desktop: "520px" } },
            spacing: { padding: { desktop: { top: "96px", right: "40px", bottom: "96px", left: "40px" } } },
            background: { color: "#ffffff" },
          },
          children: [
            {
              id: createNodeId("heading"),
              type: "heading",
              kind: "widget",
              props: { text: "Launch polished pages faster", tag: "h1" },
              styles: { typography: { fontSize: { desktop: "56px", mobile: "34px" }, fontWeight: { desktop: 900 }, lineHeight: { desktop: "1.05" }, textAlign: { desktop: "center" }, color: "#0f172a" } },
            },
            {
              id: createNodeId("text"),
              type: "text",
              kind: "widget",
              props: { text: "Use reusable sections, design tokens, and visual editing to assemble production-ready pages." },
              styles: { typography: { fontSize: { desktop: "20px" }, lineHeight: { desktop: "1.7" }, textAlign: { desktop: "center" }, color: "#64748b" } },
            },
            {
              id: createNodeId("button"),
              type: "button",
              kind: "widget",
              props: { text: "Start building", url: "#", target: "_self" },
              styles: {
                typography: { color: "#ffffff", fontWeight: { desktop: 800 } },
                background: { color: "#2563eb" },
                border: { width: "1px", style: "solid", color: "#2563eb", radius: { desktop: "8px" } },
                spacing: { padding: { desktop: { top: "14px", right: "22px", bottom: "14px", left: "22px" } } },
              },
            },
          ],
        },
      ],
    },
    {
      id: "template-section-feature-band",
      name: "Feature Band",
      kind: "section",
      createdAt: "2026-01-01T00:00:00.000Z",
      updatedAt: "2026-01-01T00:00:00.000Z",
      nodes: [
        {
          id: createNodeId("container"),
          name: "Feature Band",
          type: "container",
          kind: "structure",
          props: {},
          styles: {
            layout: { display: "flex", direction: { desktop: "column" }, gap: { desktop: "14px" }, minHeight: { desktop: "220px" } },
            spacing: { padding: { desktop: { top: "40px", right: "40px", bottom: "40px", left: "40px" } } },
            background: { color: "#eff6ff" },
            border: { width: "1px", style: "solid", color: "#bfdbfe", radius: { desktop: "8px" } },
          },
          children: [
            {
              id: createNodeId("heading"),
              type: "heading",
              kind: "widget",
              props: { text: "Reusable section", tag: "h2" },
              styles: { typography: { fontSize: { desktop: "34px" }, fontWeight: { desktop: 800 }, color: "#1e3a8a" } },
            },
            {
              id: createNodeId("text"),
              type: "text",
              kind: "widget",
              props: { text: "Save this pattern once and insert it wherever the page needs it." },
              styles: { typography: { fontSize: { desktop: "17px" }, lineHeight: { desktop: "1.7" }, color: "#334155" } },
            },
          ],
        },
      ],
    },
  ];
}
