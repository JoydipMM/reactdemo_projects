"use client";

import { useState } from "react";

export function QuantitySelector({ initial = 1 }: { initial?: number }) {
  const [quantity, setQuantity] = useState(initial);

  return (
    <div className="inline-flex h-11 items-center border border-stone-300">
      <button className="size-11 text-lg" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))} type="button">-</button>
      <span className="w-10 text-center text-sm" aria-live="polite">{quantity}</span>
      <button className="size-11 text-lg" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)} type="button">+</button>
    </div>
  );
}
