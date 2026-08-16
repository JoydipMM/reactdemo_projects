import type { Page } from "../types";
import { defaultPage } from "../data/defaultPage";
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
  return validation.valid ? (value as Page) : defaultPage();
}
