import type { CSSProperties } from "react";
import type { StyleSettings, Viewport } from "../types";
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
