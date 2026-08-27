export function ProductBadge({ label }: { label?: string }) {
  if (!label) return null;
  return <span className="bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-950">{label}</span>;
}
