export function ElementOutline({ label, selected }: { label: string; selected: boolean }) {
  return <span className={`pb-outline-label ${selected ? "is-selected" : ""}`}>{label}</span>;
}
