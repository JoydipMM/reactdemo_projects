import type { EditorState } from "../types";

export function useHistory(state: EditorState) {
  return state.history;
}
