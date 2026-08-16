import type { PageNode } from "./node";

export interface PageMetadata {
  createdAt?: string;
  updatedAt?: string;
}

export interface Page {
  id: string;
  version: number;
  title: string;
  root: PageNode;
  metadata?: PageMetadata;
}
