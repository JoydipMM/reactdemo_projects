import type { CSSProperties } from "react";
import type { DesignSystem, StyleSettings, Viewport } from "../types";
import { resolveResponsiveValue } from "./responsiveUtils";

function boxToCss(box?: { top?: string; right?: string; bottom?: string; left?: string }): string | undefined {
  if (!box) return undefined;
  return [box.top ?? "0", box.right ?? "0", box.bottom ?? "0", box.left ?? "0"].join(" ");
}

export function stylesToCss(styles: StyleSettings, viewport: Viewport): CSSProperties {
  const layout = styles.layout;
  const spacing = styles.spacing;
  const typography = styles.typography;
  const background = styles.background;
  const border = styles.border;
  const effects = styles.effects;

  return {
    display: layout?.display,
    flexDirection: resolveResponsiveValue(layout?.direction, viewport),
    justifyContent: resolveResponsiveValue(layout?.justifyContent, viewport),
    alignItems: resolveResponsiveValue(layout?.alignItems, viewport),
    gap: resolveResponsiveValue(layout?.gap, viewport),
    width: resolveResponsiveValue(layout?.width, viewport),
    maxWidth: resolveResponsiveValue(layout?.maxWidth, viewport),
    height: resolveResponsiveValue(layout?.height, viewport),
    minHeight: resolveResponsiveValue(layout?.minHeight, viewport),
    objectFit: layout?.objectFit,
    margin: boxToCss(resolveResponsiveValue(spacing?.margin, viewport)),
    padding: boxToCss(resolveResponsiveValue(spacing?.padding, viewport)),
    fontFamily: typography?.fontFamily,
    fontSize: resolveResponsiveValue(typography?.fontSize, viewport),
    fontWeight: resolveResponsiveValue(typography?.fontWeight, viewport),
    lineHeight: resolveResponsiveValue(typography?.lineHeight, viewport),
    letterSpacing: resolveResponsiveValue(typography?.letterSpacing, viewport),
    textAlign: resolveResponsiveValue(typography?.textAlign, viewport),
    color: typography?.color,
    backgroundColor: background?.color,
    backgroundImage: background?.image ? `url(${background.image})` : undefined,
    backgroundPosition: background?.position,
    backgroundSize: background?.size,
    borderWidth: border?.width,
    borderStyle: border?.style,
    borderColor: border?.color,
    borderRadius: resolveResponsiveValue(border?.radius, viewport),
    opacity: effects?.opacity,
    boxShadow: effects?.boxShadow,
  };
}

export function designSystemToCssVariables(designSystem: DesignSystem | undefined): CSSProperties {
  if (!designSystem) return {};

  const variables: Record<string, string> = {
    "--pb-global-background": designSystem.globalStyles.backgroundColor ?? "#ffffff",
    "--pb-global-text": designSystem.globalStyles.textColor ?? "#111827",
    "--pb-global-font": designSystem.globalStyles.fontFamily ?? "Arial, Helvetica, sans-serif",
    "--pb-global-content-width": designSystem.globalStyles.contentWidth ?? "1140px",
  };

  designSystem.colors.forEach((color) => {
    variables[`--pb-color-${sanitizeCssIdent(color.id)}`] = color.value;
  });
  designSystem.spacing.forEach((spacing) => {
    variables[`--pb-space-${sanitizeCssIdent(spacing.id)}`] = spacing.value;
  });
  designSystem.typography.forEach((typography) => {
    const id = sanitizeCssIdent(typography.id);
    variables[`--pb-font-${id}`] = typography.fontFamily;
    variables[`--pb-font-size-${id}`] = typography.fontSize;
    variables[`--pb-font-weight-${id}`] = typography.fontWeight;
    variables[`--pb-line-height-${id}`] = typography.lineHeight;
  });

  return variables as CSSProperties;
}

export function designSystemToCss(designSystem: DesignSystem | undefined, viewport: Viewport): string {
  if (!designSystem) return "";
  const globalCss = `
.pb-page-renderer {
  background: var(--pb-global-background);
  color: var(--pb-global-text);
  font-family: var(--pb-global-font);
}
.pb-page-renderer .pb-content-width {
  max-width: var(--pb-global-content-width);
}
`;
  const classCss = designSystem.cssClasses
    .map((cssClass) => `.pb-class-${sanitizeCssIdent(cssClass.name)} { ${styleSettingsToCssText(cssClass.styles, viewport)} }`)
    .join("\n");
  return [globalCss, classCss, designSystem.customCss].filter(Boolean).join("\n");
}

export function styleSettingsToCssText(styles: StyleSettings, viewport: Viewport): string {
  const css = stylesToCss(styles, viewport);
  return Object.entries(css)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([property, value]) => `${camelToKebab(property)}: ${String(value)};`)
    .join(" ");
}

export function sanitizeCssIdent(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "") || "class";
}

export function nodeCustomCss(nodeId: string, customCss: string | undefined): string {
  if (!customCss?.trim()) return "";
  return `[data-pb-node-id="${nodeId}"] { ${customCss} }`;
}

export function getAtPath(source: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((value, key) => {
    if (value && typeof value === "object" && key in value) {
      return (value as Record<string, unknown>)[key];
    }
    return undefined;
  }, source);
}

export function setAtPath<T extends Record<string, unknown>>(source: T, path: string, value: unknown): T {
  const keys = path.split(".");
  const clone = { ...source } as Record<string, unknown>;
  let cursor = clone;
  keys.slice(0, -1).forEach((key) => {
    const next = cursor[key];
    cursor[key] = next && typeof next === "object" && !Array.isArray(next) ? { ...next } : {};
    cursor = cursor[key] as Record<string, unknown>;
  });
  cursor[keys[keys.length - 1]] = value;
  return clone as T;
}

function camelToKebab(value: string): string {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}
