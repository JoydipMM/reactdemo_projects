import { formatCurrency } from "@/lib/utils";

export function OrderSummary({ subtotal, shipping, tax, total }: { subtotal: number; shipping: number; tax: number; total: number }) {
  return (
    <div className="border border-stone-200 p-6">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Order summary</h2>
      <dl className="mt-5 grid gap-3 text-sm">
        <Row label="Subtotal" value={formatCurrency(subtotal)} />
        <Row label="Shipping" value={shipping === 0 ? "FREE" : formatCurrency(shipping)} />
        <Row label="Tax" value={formatCurrency(tax)} />
        <div className="my-2 h-px bg-stone-200" />
        <Row label="Total" value={formatCurrency(total)} strong />
      </dl>
    </div>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={strong ? "flex justify-between text-base font-semibold" : "flex justify-between text-neutral-600"}>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
