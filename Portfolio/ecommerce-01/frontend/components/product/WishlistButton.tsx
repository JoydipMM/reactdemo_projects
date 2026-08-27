"use client";

import { useState } from "react";

export function WishlistButton({ label = "Add to wishlist" }: { label?: string }) {
  const [active, setActive] = useState(false);

  return (
    <button
      aria-label={label}
      aria-pressed={active}
      className="grid size-10 place-items-center rounded-full bg-white text-xl shadow-sm transition hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
      onClick={() => setActive((value) => !value)}
      type="button"
    >
      <span aria-hidden="true">{active ? "♥" : "♡"}</span>
    </button>
  );
}
