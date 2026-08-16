import type { Page } from "../types";
import { createNodeId } from "../utils/idUtils";

export function defaultPage(): Page {
  const now = new Date().toISOString();
  return {
    id: "demo-page",
    version: 1,
    title: "Visual Builder Demo",
    metadata: { createdAt: now, updatedAt: now },
    root: {
      id: "page-root",
      type: "root",
      kind: "structure",
      props: {},
      styles: {
        layout: { display: "flex", direction: { desktop: "column" }, gap: { desktop: "24px" } },
        spacing: { padding: { desktop: { top: "32px", right: "32px", bottom: "32px", left: "32px" } } },
        background: { color: "#f6f7fb" },
      },
      children: [
        {
          id: createNodeId("container"),
          type: "container",
          kind: "structure",
          props: {},
          styles: {
            layout: {
              display: "flex",
              direction: { desktop: "column" },
              alignItems: { desktop: "center" },
              justifyContent: { desktop: "center" },
              gap: { desktop: "18px" },
              minHeight: { desktop: "420px", tablet: "360px", mobile: "320px" },
              maxWidth: { desktop: "960px" },
              width: { desktop: "100%" },
            },
            spacing: {
              margin: { desktop: { top: "0", right: "auto", bottom: "0", left: "auto" } },
              padding: { desktop: { top: "72px", right: "48px", bottom: "72px", left: "48px" } },
            },
            background: { color: "#ffffff" },
            border: { width: "1px", style: "solid", color: "#e4e7ec", radius: { desktop: "8px" } },
            effects: { boxShadow: "0 22px 60px rgba(15, 23, 42, 0.08)" },
          },
          children: [
            {
              id: createNodeId("heading"),
              type: "heading",
              kind: "widget",
              props: { text: "Welcome to My Website", tag: "h1" },
              styles: {
                typography: {
                  fontSize: { desktop: "52px", tablet: "42px", mobile: "32px" },
                  fontWeight: { desktop: 800 },
                  lineHeight: { desktop: "1.05" },
                  textAlign: { desktop: "center" },
                  color: "#111827",
                },
                spacing: { margin: { desktop: { top: "0", right: "0", bottom: "0", left: "0" } } },
              },
            },
            {
              id: createNodeId("text"),
              type: "text",
              kind: "widget",
              props: { text: "Build beautiful pages visually." },
              styles: {
                typography: {
                  fontSize: { desktop: "20px", mobile: "17px" },
                  lineHeight: { desktop: "1.6" },
                  textAlign: { desktop: "center" },
                  color: "#4b5563",
                },
              },
            },
            {
              id: createNodeId("button"),
              type: "button",
              kind: "widget",
              props: { text: "Get Started", url: "#", target: "_self" },
              styles: {
                typography: { fontWeight: { desktop: 700 }, color: "#ffffff", textAlign: { desktop: "center" } },
                background: { color: "#2563eb" },
                border: { width: "1px", style: "solid", color: "#2563eb", radius: { desktop: "8px" } },
                spacing: { padding: { desktop: { top: "13px", right: "22px", bottom: "13px", left: "22px" } } },
                hover: { background: { color: "#1d4ed8" } },
              },
            },
          ],
        },
      ],
    },
  };
}
