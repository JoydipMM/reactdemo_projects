import type { Breakpoint, ResponsiveValue } from "../types";

export function resolveResponsiveValue<T>(
  value: ResponsiveValue<T> | T | undefined,
  viewport: Breakpoint,
): T | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "object" || Array.isArray(value)) return value as T;

  const responsive = value as ResponsiveValue<T>;
  if (responsive[viewport] !== undefined) return responsive[viewport];
  if (viewport === "mobile") return responsive.tablet ?? responsive.desktop;
  if (viewport === "tablet") return responsive.desktop;
  return responsive.desktop;
}
