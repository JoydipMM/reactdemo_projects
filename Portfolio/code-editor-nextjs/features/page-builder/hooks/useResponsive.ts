import type { EditorState } from "../types";

export function useResponsive(state: EditorState) {
  return state.viewport;
}
