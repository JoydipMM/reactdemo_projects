"use client";

import Image from "next/image";
import { useState } from "react";
import type { OrderItem } from "@/types/order";
import { formatCurrency } from "@/lib/utils";
import { QuantitySelector } from "@/components/product/QuantitySelector";

export function CartItem({ item }: { item: OrderItem }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <article className="flex gap-4 border-b border-stone-200 py-6">
      <div className="relative aspect-[3/4] w-28 shrink-0 bg-stone-100 sm:w-36">
        <Image alt={item.name} className="object-cover" fill sizes="144px" src={item.image} />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-5 sm:flex-row">
        <div>
          <h2 className="font-semibold">{item.name}</h2>
          <p className="mt-2 text-sm text-neutral-500">Size: {item.size}</p>
          <p className="text-sm text-neutral-500">Color: {item.color}</p>
          <div className="mt-5">
            <QuantitySelector initial={item.quantity} />
          </div>
        </div>
        <div className="flex items-end justify-between gap-5 sm:flex-col sm:items-end">
          <p className="font-semibold">{formatCurrency(item.price)}</p>
          <div className="flex gap-4 text-xs font-semibold uppercase tracking-[0.14em]">
            <button className="underline" type="button">Wishlist</button>
            <button className="text-red-700 underline" onClick={() => setVisible(false)} type="button">Remove</button>
          </div>
        </div>
      </div>
    </article>
  );
}
