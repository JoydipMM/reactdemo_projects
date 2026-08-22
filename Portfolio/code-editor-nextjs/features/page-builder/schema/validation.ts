import type { Page } from "../types";
import { defaultPage } from "../data/defaultPage";
import { defaultDesignSystem } from "../data/defaultDesignSystem";
import { defaultTemplates } from "../data/defaultTemplates";
import { ensureCms } from "../utils/cmsUtils";
import { isPage } from "./page.schema";
import { collectIds } from "../utils/treeUtils";

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export function validatePage(value: unknown): ValidationResult {
  if (!isPage(value)) return { valid: false, errors: ["Document does not match the Page schema."] };
  const ids = collectIds(value.root);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length > 0) {
    return { valid: false, errors: [`Duplicate node IDs: ${Array.from(new Set(duplicates)).join(", ")}`] };
  }
  return { valid: true, errors: [] };
}

export function parsePage(value: unknown): Page {
  const validation = validatePage(value);
  if (!validation.valid) return defaultPage();
  const page = value as Page;
  return {
    ...page,
    designSystem: page.designSystem ?? defaultDesignSystem(),
    templates: page.templates ?? defaultTemplates(),
    cms: ensureCms(page),
  };
}
