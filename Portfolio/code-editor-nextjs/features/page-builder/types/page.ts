import type { PageNode } from "./node";
import type { DesignSystem } from "./designSystem";
import type { PageTemplate } from "./template";
import type { CmsPageStatus, CmsWorkspace, SeoSettings } from "./cms";

export interface PageMetadata {
  createdAt?: string;
  updatedAt?: string;
}

export interface Page {
  id: string;
  version: number;
  title: string;
  slug?: string;
  status?: CmsPageStatus;
  seo?: SeoSettings;
  root: PageNode;
  designSystem?: DesignSystem;
  templates?: PageTemplate[];
  cms?: CmsWorkspace;
  metadata?: PageMetadata;
}
