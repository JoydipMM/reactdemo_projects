import type { Page, PageStorage } from "../../types";
import { parsePage } from "../../schema/validation";

export const LOCAL_STORAGE_KEY = "page-builder-document";

export class LocalStoragePageStorage implements PageStorage {
  constructor(private readonly key = LOCAL_STORAGE_KEY) {}

  async load(): Promise<Page | null> {
    if (typeof window === "undefined") return null;
    try {
      const raw = window.localStorage.getItem(this.key);
      return raw ? parsePage(JSON.parse(raw)) : null;
    } catch {
      return null;
    }
  }

  async save(page: Page): Promise<void> {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(this.key, JSON.stringify(page));
  }

  async clear(): Promise<void> {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(this.key);
  }
}
