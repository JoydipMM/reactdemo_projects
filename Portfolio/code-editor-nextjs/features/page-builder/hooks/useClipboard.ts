import type { EditorState } from "../types";

export function useClipboard(state: EditorState) {
  return state.clipboard;
}
