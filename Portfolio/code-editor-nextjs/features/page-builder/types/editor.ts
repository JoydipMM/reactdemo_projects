import type { Page } from "./page";
import type { PageNode } from "./node";
import type { Viewport } from "./styles";
import type { WidgetDefinition } from "./widget";

export interface SelectionState {
  selectedNodeId: string | null;
  hoveredNodeId: string | null;
}

export interface HistoryState {
  past: Page[];
  future: Page[];
}

export interface ClipboardState {
  node: PageNode | null;
}

export type EditorMode = "edit" | "preview";

export interface EditorState {
  page: Page;
  selection: SelectionState;
  history: HistoryState;
  clipboard: ClipboardState;
  viewport: Viewport;
  mode: EditorMode;
  isSaving: boolean;
  lastSavedAt: string | null;
}

export interface PageStorage {
  load(): Promise<Page | null>;
  save(page: Page): Promise<void>;
  clear?(): Promise<void>;
}

export interface PageBuilderProps {
  initialPage?: Page;
  widgets?: WidgetDefinition[];
  storage?: PageStorage;
  onChange?: (page: Page) => void;
  onSave?: (page: Page) => void | Promise<void>;
}

export interface Command {
  type: string;
  label: string;
}
