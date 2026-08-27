export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="border border-stone-200 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-neutral-950">{value}</p>
    </article>
  );
}
