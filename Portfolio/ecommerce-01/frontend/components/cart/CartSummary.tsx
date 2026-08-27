import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";

export function CartSummary({ subtotal, tax, total }: { subtotal: number; tax: number; total: number }) {
  return (
    <aside className="border border-stone-200 p-6 lg:sticky lg:top-32">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Order summary</h2>
      <dl className="mt-5 grid gap-3 text-sm">
        <Row label="Subtotal" value={formatCurrency(subtotal)} />
        <Row label="Shipping" value="FREE" />
        <Row label="Estimated tax" value={formatCurrency(tax)} />
        <div className="my-2 h-px bg-stone-200" />
        <Row label="Total" value={formatCurrency(total)} strong />
      </dl>
      <Button className="mt-6 w-full" type="button">Checkout</Button>
      <p className="mt-4 bg-stone-50 p-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600">Free shipping on orders over $75</p>
    </aside>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={strong ? "flex justify-between text-lg font-semibold" : "flex justify-between text-neutral-600"}>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
