import { formatCurrency } from "@/lib/utils";

export function Price({ price, compareAtPrice }: { price: number; compareAtPrice?: number }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="font-semibold text-neutral-950">{formatCurrency(price)}</span>
      {compareAtPrice ? <span className="text-neutral-400 line-through">{formatCurrency(compareAtPrice)}</span> : null}
    </div>
  );
}
