import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";
import { Price } from "./Price";
import { ProductBadge } from "./ProductBadge";
import { WishlistButton } from "./WishlistButton";

type ProductCardProps = {
  product: Product;
  showWishlist?: boolean;
  showBadge?: boolean;
  variant?: "default" | "compact";
};

export function ProductCard({ product, showWishlist = true, showBadge = true, variant = "default" }: ProductCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <Link href="/products/product-name" aria-label={`View ${product.name}`}>
          <Image
            alt={product.name}
            className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-0"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            src={product.images[0]}
          />
          <Image
            alt=""
            className="object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            src={product.images[1] ?? product.images[0]}
          />
        </Link>
        <div className="absolute left-3 top-3">{showBadge ? <ProductBadge label={product.badge} /> : null}</div>
        {showWishlist ? <div className="absolute right-3 top-3"><WishlistButton label={`Add ${product.name} to wishlist`} /></div> : null}
      </div>
      <div className={cn("pt-4", variant === "compact" && "pt-3")}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-neutral-950">
              <Link href="/products/product-name">{product.name}</Link>
            </h3>
            <p className="mt-1 text-xs text-neutral-500">{product.category}</p>
          </div>
          {!product.inStock ? <span className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">Sold out</span> : null}
        </div>
        <div className="mt-3">
          <Price price={product.price} compareAtPrice={product.compareAtPrice} />
        </div>
        <div className="mt-3 flex gap-1.5" aria-label={`${product.colors.length} color options`}>
          {product.colors.slice(0, 4).map((color) => (
            <span
              aria-label={color.name}
              className="size-4 rounded-full border border-neutral-300"
              key={color.name}
              role="img"
              style={{ backgroundColor: color.value }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
