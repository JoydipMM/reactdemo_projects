import type { EditorState } from "../types";

export function useSelection(state: EditorState) {
  return state.selection;
}
