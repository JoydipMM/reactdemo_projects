"use client";

interface EditorToolbarProps {
  onDuplicate: () => void;
  onDelete: () => void;
  onCopy: () => void;
  onPaste: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onSendTop: () => void;
  onSendBottom: () => void;
  selected: boolean;
}

export function EditorToolbar({ onDuplicate, onDelete, onCopy, onPaste, onMoveUp, onMoveDown, onSendTop, onSendBottom, selected }: EditorToolbarProps) {
  return (
    <div className="pb-floating-toolbar" role="toolbar" aria-label="Element actions">
      <button type="button" onClick={onCopy} disabled={!selected}>Copy</button>
      <button type="button" onClick={onPaste}>Paste</button>
      <button type="button" onClick={onMoveUp} disabled={!selected} title="Move selected element up">Up</button>
      <button type="button" onClick={onMoveDown} disabled={!selected} title="Move selected element down">Down</button>
      <button type="button" onClick={onSendTop} disabled={!selected} title="Send selected element to top">Top</button>
      <button type="button" onClick={onSendBottom} disabled={!selected} title="Send selected element to bottom">Bottom</button>
      <button type="button" onClick={onDuplicate} disabled={!selected}>Duplicate</button>
      <button type="button" onClick={onDelete} disabled={!selected}>Delete</button>
    </div>
  );
}
