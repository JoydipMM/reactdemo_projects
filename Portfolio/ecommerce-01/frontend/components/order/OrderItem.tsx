import Image from "next/image";
import type { OrderItem as Item } from "@/types/order";
import { formatCurrency } from "@/lib/utils";

export function OrderItem({ item }: { item: Item }) {
  return (
    <article className="flex gap-4 border-b border-stone-200 py-5 last:border-b-0">
      <div className="relative size-24 shrink-0 bg-stone-100">
        <Image alt={item.name} className="object-cover" fill sizes="96px" src={item.image} />
      </div>
      <div className="flex flex-1 justify-between gap-4">
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="mt-1 text-sm text-neutral-500">Size: {item.size} · Color: {item.color} · Qty: {item.quantity}</p>
        </div>
        <p className="font-semibold">{formatCurrency(item.price)}</p>
      </div>
    </article>
  );
}
