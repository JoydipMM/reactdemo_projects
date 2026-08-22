"use client";

import { useMemo, useState } from "react";
import type { DynamicContentItem, Page, PageNode, SeoSettings } from "../../types";
import { createDefaultCms } from "../../data/defaultCms";

interface CmsPanelProps {
  page: Page;
  selectedNode: PageNode | null;
  onCreatePage: (title: string) => void;
  onSwitchPage: (pageId: string) => void;
  onSetStatus: (status: "draft" | "published") => void;
  onSeoChange: (seo: SeoSettings) => void;
  onSaveRevision: (name: string) => void;
  onRestoreRevision: (revisionId: string) => void;
  onAddMedia: (name: string, url: string, alt: string) => void;
  onUpsertDynamicContent: (item: DynamicContentItem) => void;
  onCreateDynamicContent: (label: string, value: string) => void;
  onBindDynamicContent: (sourceId: string) => void;
  onUnbindDynamicContent: () => void;
}

export function CmsPanel({
  page,
  selectedNode,
  onCreatePage,
  onSwitchPage,
  onSetStatus,
  onSeoChange,
  onSaveRevision,
  onRestoreRevision,
  onAddMedia,
  onUpsertDynamicContent,
  onCreateDynamicContent,
  onBindDynamicContent,
  onUnbindDynamicContent,
}: CmsPanelProps) {
  const cms = page.cms ?? createDefaultCms(page);
  const [newPageTitle, setNewPageTitle] = useState("Untitled Page");
  const [revisionName, setRevisionName] = useState("Manual revision");
  const [mediaDraft, setMediaDraft] = useState({ name: "New media", url: "", alt: "" });
  const [dynamicDraft, setDynamicDraft] = useState({ label: "Headline", value: "Dynamic headline" });
  const activeBinding = selectedNode?.dynamicBindings?.[0]?.sourceId ?? "";
  const activePageRevisions = useMemo(() => cms.revisions.filter((revision) => revision.pageId === cms.activePageId), [cms]);

  return (
    <aside className="pb-sidebar pb-settings" aria-label="CMS">
      <div className="pb-settings-title">
        <span>CM</span>
        <div>
          <strong>CMS</strong>
          <small>Pages, publishing, media, SEO, and revisions</small>
        </div>
      </div>
      <section className="pb-control-section">
        <h2>Pages</h2>
        <div className="pb-cms-page-list">
          {cms.pages.map((record) => (
            <button key={record.id} type="button" className={record.id === cms.activePageId ? "is-active" : ""} onClick={() => onSwitchPage(record.id)}>
              <span>{record.title}</span>
              <small>{record.slug} · {record.status}</small>
            </button>
          ))}
        </div>
        <label className="pb-control" htmlFor="pb-new-page-title">
          <span>New page title</span>
          <input id="pb-new-page-title" value={newPageTitle} onChange={(event) => setNewPageTitle(event.target.value)} />
        </label>
        <button className="pb-panel-button" type="button" onClick={() => onCreatePage(newPageTitle)}>Create page</button>
      </section>
      <section className="pb-control-section">
        <h2>Draft / Publish</h2>
        <div className="pb-publish-row">
          <strong>{page.status ?? "draft"}</strong>
          <div>
            <button type="button" onClick={() => onSetStatus("draft")}>Draft</button>
            <button type="button" onClick={() => onSetStatus("published")}>Publish</button>
          </div>
        </div>
      </section>
      <SeoSection page={page} onSeoChange={onSeoChange} />
      <section className="pb-control-section">
        <h2>Dynamic Content</h2>
        {cms.dynamicContent.map((item) => (
          <div className="pb-dynamic-row" key={item.id}>
            <input aria-label={`${item.label} label`} value={item.label} onChange={(event) => onUpsertDynamicContent({ ...item, label: event.target.value })} />
            <textarea aria-label={`${item.label} value`} rows={2} value={item.value} onChange={(event) => onUpsertDynamicContent({ ...item, value: event.target.value })} />
          </div>
        ))}
        <label className="pb-control" htmlFor="pb-dynamic-label">
          <span>New dynamic label</span>
          <input id="pb-dynamic-label" value={dynamicDraft.label} onChange={(event) => setDynamicDraft((draft) => ({ ...draft, label: event.target.value }))} />
        </label>
        <label className="pb-control" htmlFor="pb-dynamic-value">
          <span>Value</span>
          <textarea id="pb-dynamic-value" rows={2} value={dynamicDraft.value} onChange={(event) => setDynamicDraft((draft) => ({ ...draft, value: event.target.value }))} />
        </label>
        <button className="pb-panel-button" type="button" onClick={() => onCreateDynamicContent(dynamicDraft.label, dynamicDraft.value)}>Add dynamic field</button>
        <label className="pb-control" htmlFor="pb-bind-dynamic">
          <span>Bind selected element</span>
          <select id="pb-bind-dynamic" value={activeBinding} disabled={!selectedNode} onChange={(event) => event.target.value ? onBindDynamicContent(event.target.value) : onUnbindDynamicContent()}>
            <option value="">No binding</option>
            {cms.dynamicContent.map((item) => <option value={item.id} key={item.id}>{item.label}</option>)}
          </select>
        </label>
      </section>
      <section className="pb-control-section">
        <h2>Media Library</h2>
        <div className="pb-media-list">
          {cms.media.map((item) => (
            <article key={item.id}>
              {/* The media library stores arbitrary user URLs, so it uses a native image preview. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {item.type === "image" && <img src={item.url} alt={item.alt} />}
              <div>
                <strong>{item.name}</strong>
                <small>{item.url}</small>
              </div>
            </article>
          ))}
        </div>
        <label className="pb-control" htmlFor="pb-media-name">
          <span>Name</span>
          <input id="pb-media-name" value={mediaDraft.name} onChange={(event) => setMediaDraft((draft) => ({ ...draft, name: event.target.value }))} />
        </label>
        <label className="pb-control" htmlFor="pb-media-url">
          <span>URL</span>
          <input id="pb-media-url" value={mediaDraft.url} onChange={(event) => setMediaDraft((draft) => ({ ...draft, url: event.target.value }))} />
        </label>
        <label className="pb-control" htmlFor="pb-media-alt">
          <span>Alt</span>
          <input id="pb-media-alt" value={mediaDraft.alt} onChange={(event) => setMediaDraft((draft) => ({ ...draft, alt: event.target.value }))} />
        </label>
        <button className="pb-panel-button" type="button" onClick={() => onAddMedia(mediaDraft.name, mediaDraft.url, mediaDraft.alt)}>Add media</button>
      </section>
      <section className="pb-control-section">
        <h2>Revisions</h2>
        <label className="pb-control" htmlFor="pb-revision-name">
          <span>Revision name</span>
          <input id="pb-revision-name" value={revisionName} onChange={(event) => setRevisionName(event.target.value)} />
        </label>
        <button className="pb-panel-button" type="button" onClick={() => onSaveRevision(revisionName)}>Save revision</button>
        <div className="pb-revision-list">
          {activePageRevisions.map((revision) => (
            <article key={revision.id}>
              <div>
                <strong>{revision.name}</strong>
                <small>{new Date(revision.createdAt).toLocaleString()}</small>
              </div>
              <button type="button" onClick={() => onRestoreRevision(revision.id)}>Restore</button>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
}

function SeoSection({ page, onSeoChange }: { page: Page; onSeoChange: (seo: SeoSettings) => void }) {
  const seo = page.seo ?? { title: page.title, description: "" };
  return (
    <section className="pb-control-section">
      <h2>SEO</h2>
      <label className="pb-control" htmlFor="pb-seo-title">
        <span>Title</span>
        <input id="pb-seo-title" value={seo.title} onChange={(event) => onSeoChange({ ...seo, title: event.target.value })} />
      </label>
      <label className="pb-control" htmlFor="pb-seo-description">
        <span>Description</span>
        <textarea id="pb-seo-description" rows={3} value={seo.description} onChange={(event) => onSeoChange({ ...seo, description: event.target.value })} />
      </label>
      <label className="pb-control" htmlFor="pb-seo-canonical">
        <span>Canonical URL</span>
        <input id="pb-seo-canonical" value={seo.canonicalUrl ?? ""} onChange={(event) => onSeoChange({ ...seo, canonicalUrl: event.target.value })} />
      </label>
      <label className="pb-control" htmlFor="pb-seo-og">
        <span>OG image</span>
        <input id="pb-seo-og" value={seo.ogImage ?? ""} onChange={(event) => onSeoChange({ ...seo, ogImage: event.target.value })} />
      </label>
      <label className="pb-checkbox-control" htmlFor="pb-seo-noindex">
        <input id="pb-seo-noindex" type="checkbox" checked={Boolean(seo.noIndex)} onChange={(event) => onSeoChange({ ...seo, noIndex: event.target.checked })} />
        <span>No index</span>
      </label>
    </section>
  );
}
