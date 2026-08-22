import type { CmsWorkspace, Page } from "../types";

export function defaultSeo(title: string): { title: string; description: string } {
  return {
    title,
    description: "Build and publish visual pages from structured JSON.",
  };
}

export function createDefaultCms(page: Page): CmsWorkspace {
  const now = new Date().toISOString();
  const activePageId = page.id;
  return {
    activePageId,
    pages: [
      {
        id: activePageId,
        title: page.title,
        slug: page.slug ?? "home",
        status: page.status ?? "draft",
        root: page.root,
        designSystem: page.designSystem,
        seo: page.seo ?? defaultSeo(page.title),
        createdAt: page.metadata?.createdAt ?? now,
        updatedAt: page.metadata?.updatedAt ?? now,
        publishedAt: page.status === "published" ? now : undefined,
      },
    ],
    media: [
      {
        id: "media-placeholder",
        name: "Placeholder Image",
        url: "https://placehold.co/900x520/e5e7eb/334155?text=Image",
        alt: "Placeholder image",
        type: "image",
        createdAt: now,
      },
    ],
    dynamicContent: [
      { id: "site-title", key: "site.title", label: "Site title", value: "My Website" },
      { id: "hero-tagline", key: "hero.tagline", label: "Hero tagline", value: "Build beautiful pages visually." },
    ],
    revisions: [],
  };
}
