import type { DesignSystem } from "./designSystem";
import type { PageNode } from "./node";

export type CmsPageStatus = "draft" | "published";

export interface SeoSettings {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export interface CmsPageRecord {
  id: string;
  title: string;
  slug: string;
  status: CmsPageStatus;
  root: PageNode;
  designSystem?: DesignSystem;
  seo: SeoSettings;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  alt: string;
  type: "image" | "file";
  createdAt: string;
}

export interface DynamicContentItem {
  id: string;
  key: string;
  label: string;
  value: string;
}

export interface Revision {
  id: string;
  pageId: string;
  name: string;
  root: PageNode;
  designSystem?: DesignSystem;
  seo: SeoSettings;
  createdAt: string;
}

export interface CmsWorkspace {
  activePageId: string;
  pages: CmsPageRecord[];
  media: MediaItem[];
  dynamicContent: DynamicContentItem[];
  revisions: Revision[];
}

export interface DynamicBinding {
  prop: string;
  sourceId: string;
}
