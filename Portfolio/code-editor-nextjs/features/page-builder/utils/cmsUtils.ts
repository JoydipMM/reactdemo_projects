import type { CmsPageRecord, CmsPageStatus, CmsWorkspace, DynamicContentItem, MediaItem, Page, Revision, SeoSettings } from "../types";
import { createDefaultCms, defaultSeo } from "../data/defaultCms";
import { cloneNode } from "./treeUtils";

export function ensureCms(page: Page): CmsWorkspace {
  const cms = page.cms ?? createDefaultCms(page);
  const activePage = cms.pages.find((item) => item.id === cms.activePageId);
  if (activePage) return cms;
  return {
    ...cms,
    activePageId: page.id,
    pages: [createPageRecordFromPage(page), ...cms.pages],
  };
}

export function syncActivePageRecord(page: Page): Page {
  const cms = ensureCms(page);
  return {
    ...page,
    cms: {
      ...cms,
      pages: cms.pages.map((record) => record.id === cms.activePageId ? createPageRecordFromPage(page, record) : record),
    },
  };
}

export function createCmsPage(page: Page, title: string): Page {
  const cms = ensureCms(syncActivePageRecord(page));
  const now = new Date().toISOString();
  const id = `page-${Date.now().toString(36)}`;
  const slug = slugify(title);
  const root = {
    ...page.root,
    id: "page-root",
    children: [],
  };
  const record: CmsPageRecord = {
    id,
    title,
    slug,
    status: "draft",
    root,
    designSystem: page.designSystem,
    seo: defaultSeo(title),
    createdAt: now,
    updatedAt: now,
  };
  return pageFromRecord({
    ...page,
    cms: {
      ...cms,
      activePageId: id,
      pages: [...cms.pages, record],
    },
  }, record);
}

export function switchCmsPage(page: Page, pageId: string): Page {
  const synced = syncActivePageRecord(page);
  const cms = ensureCms(synced);
  const record = cms.pages.find((item) => item.id === pageId);
  if (!record) return page;
  return pageFromRecord({ ...synced, cms: { ...cms, activePageId: pageId } }, record);
}

export function setCmsPageStatus(page: Page, status: CmsPageStatus): Page {
  const now = new Date().toISOString();
  const synced = syncActivePageRecord(page);
  const cms = ensureCms(synced);
  const next = {
    ...synced,
    status,
    metadata: { ...synced.metadata, updatedAt: now },
    cms: {
      ...cms,
      pages: cms.pages.map((record) => record.id === cms.activePageId ? {
        ...record,
        status,
        updatedAt: now,
        publishedAt: status === "published" ? now : record.publishedAt,
      } : record),
    },
  };
  return next;
}

export function updateSeo(page: Page, seo: SeoSettings): Page {
  const synced = syncActivePageRecord({ ...page, seo });
  return synced;
}

export function addRevision(page: Page, name: string): Page {
  const cms = ensureCms(syncActivePageRecord(page));
  const revision: Revision = {
    id: `revision-${Date.now().toString(36)}`,
    pageId: cms.activePageId,
    name,
    root: cloneNode(page.root),
    designSystem: page.designSystem,
    seo: page.seo ?? defaultSeo(page.title),
    createdAt: new Date().toISOString(),
  };
  return {
    ...page,
    cms: {
      ...cms,
      revisions: [revision, ...cms.revisions].slice(0, 30),
    },
  };
}

export function restoreRevision(page: Page, revisionId: string): Page {
  const cms = ensureCms(page);
  const revision = cms.revisions.find((item) => item.id === revisionId);
  if (!revision) return page;
  return syncActivePageRecord({
    ...page,
    root: cloneNode(revision.root),
    designSystem: revision.designSystem ?? page.designSystem,
    seo: revision.seo,
  });
}

export function addMediaItem(page: Page, item: Omit<MediaItem, "id" | "createdAt" | "type"> & { type?: MediaItem["type"] }): Page {
  const cms = ensureCms(page);
  const media: MediaItem = {
    id: `media-${Date.now().toString(36)}`,
    type: item.type ?? "image",
    name: item.name,
    url: item.url,
    alt: item.alt,
    createdAt: new Date().toISOString(),
  };
  return { ...page, cms: { ...cms, media: [media, ...cms.media] } };
}

export function upsertDynamicContent(page: Page, item: DynamicContentItem): Page {
  const cms = ensureCms(page);
  const exists = cms.dynamicContent.some((content) => content.id === item.id);
  return {
    ...page,
    cms: {
      ...cms,
      dynamicContent: exists
        ? cms.dynamicContent.map((content) => content.id === item.id ? item : content)
        : [item, ...cms.dynamicContent],
    },
  };
}

export function createDynamicContent(label: string, value: string): DynamicContentItem {
  const id = `dynamic-${Date.now().toString(36)}`;
  return {
    id,
    key: slugify(label).replaceAll("-", "."),
    label,
    value,
  };
}

export function createPageRecordFromPage(page: Page, previous?: CmsPageRecord): CmsPageRecord {
  const now = new Date().toISOString();
  return {
    id: previous?.id ?? page.id,
    title: page.title,
    slug: page.slug ?? previous?.slug ?? slugify(page.title),
    status: page.status ?? previous?.status ?? "draft",
    root: page.root,
    designSystem: page.designSystem,
    seo: page.seo ?? previous?.seo ?? defaultSeo(page.title),
    createdAt: previous?.createdAt ?? page.metadata?.createdAt ?? now,
    updatedAt: now,
    publishedAt: previous?.publishedAt,
  };
}

function pageFromRecord(page: Page, record: CmsPageRecord): Page {
  return {
    ...page,
    id: record.id,
    title: record.title,
    slug: record.slug,
    status: record.status,
    root: record.root,
    designSystem: record.designSystem ?? page.designSystem,
    seo: record.seo,
    metadata: {
      ...page.metadata,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    },
  };
}

function slugify(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "untitled";
}
