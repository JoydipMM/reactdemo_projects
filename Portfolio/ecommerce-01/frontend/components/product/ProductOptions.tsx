"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";

export function ProductOptions({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0]);

  return (
    <div className="grid gap-7">
      <fieldset>
        <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]">Color: {color}</legend>
        <div className="flex gap-3">
          {product.colors.map((item) => (
            <button
              aria-label={item.name}
              className={cn("size-9 rounded-full border", color === item.name ? "border-neutral-950 ring-2 ring-neutral-950 ring-offset-2" : "border-stone-300")}
              key={item.name}
              onClick={() => setColor(item.name)}
              style={{ backgroundColor: item.value }}
              type="button"
            />
          ))}
        </div>
      </fieldset>
      <fieldset>
        <div className="mb-3 flex items-center justify-between">
          <legend className="text-xs font-semibold uppercase tracking-[0.18em]">Size</legend>
          <a className="text-xs underline" href="#size-guide">Size guide</a>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {product.sizes.map((item) => (
            <button
              className={cn("h-11 border text-sm font-medium", size === item ? "border-neutral-950 bg-neutral-950 text-white" : "border-stone-300 hover:border-neutral-950")}
              key={item}
              onClick={() => setSize(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
