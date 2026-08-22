import type { DesignSystem } from "../types";

export function defaultDesignSystem(): DesignSystem {
  return {
    colors: [
      { id: "primary", name: "Primary", value: "#2563eb" },
      { id: "secondary", name: "Secondary", value: "#0f172a" },
      { id: "accent", name: "Accent", value: "#f97316" },
      { id: "surface", name: "Surface", value: "#ffffff" },
      { id: "muted", name: "Muted text", value: "#64748b" },
    ],
    typography: [
      { id: "heading", name: "Heading", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "48px", fontWeight: "800", lineHeight: "1.1" },
      { id: "body", name: "Body", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "18px", fontWeight: "400", lineHeight: "1.7" },
    ],
    spacing: [
      { id: "xs", name: "XS", value: "4px" },
      { id: "sm", name: "SM", value: "8px" },
      { id: "md", name: "MD", value: "16px" },
      { id: "lg", name: "LG", value: "32px" },
      { id: "xl", name: "XL", value: "64px" },
    ],
    breakpoints: [
      { id: "desktop", label: "Desktop", width: 1200 },
      { id: "tablet", label: "Tablet", width: 768 },
      { id: "mobile", label: "Mobile", width: 390 },
    ],
    globalStyles: {
      backgroundColor: "#f6f7fb",
      textColor: "#111827",
      fontFamily: "Arial, Helvetica, sans-serif",
      contentWidth: "1140px",
    },
    cssClasses: [
      {
        id: "section-card",
        name: "section-card",
        styles: {
          background: { color: "#ffffff" },
          border: { width: "1px", style: "solid", color: "#e5e7eb", radius: { desktop: "8px" } },
          effects: { boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)" },
        },
      },
    ],
    customCss: "",
  };
}
