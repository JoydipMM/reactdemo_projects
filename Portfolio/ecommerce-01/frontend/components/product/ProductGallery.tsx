"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";

export function ProductGallery({ product }: { product: Product }) {
  const [selected, setSelected] = useState(product.images[0]);

  return (
    <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
      <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
        {product.images.map((image, index) => (
          <button
            aria-label={`Show ${product.name} image ${index + 1}`}
            className={cn("relative aspect-[3/4] w-20 overflow-hidden border bg-stone-100 lg:w-24", selected === image ? "border-neutral-950" : "border-transparent")}
            key={image}
            onClick={() => setSelected(image)}
            type="button"
          >
            <Image alt="" className="object-cover" fill sizes="96px" src={image} />
          </button>
        ))}
      </div>
      <div className="relative order-1 aspect-[4/5] overflow-hidden bg-stone-100 lg:order-2">
        <Image alt={product.name} className="object-cover" fill preload sizes="(max-width: 1024px) 100vw, 50vw" src={selected} />
      </div>
    </div>
  );
}
