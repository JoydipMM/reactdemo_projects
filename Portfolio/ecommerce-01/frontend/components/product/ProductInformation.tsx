import type { Product } from "@/types/product";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Price } from "./Price";
import { ProductOptions } from "./ProductOptions";
import { QuantitySelector } from "./QuantitySelector";
import { Rating } from "./Rating";
import { WishlistButton } from "./WishlistButton";

export function ProductInformation({ product }: { product: Product }) {
  return (
    <aside className="lg:sticky lg:top-32 lg:self-start">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{product.category}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">{product.name}</h1>
      <div className="mt-4">
        <Rating rating={product.rating} count={product.reviewCount} />
      </div>
      <div className="mt-5 text-lg">
        <Price price={product.price} compareAtPrice={product.compareAtPrice} />
      </div>
      <p className="mt-6 leading-7 text-neutral-600">{product.description}</p>
      <div className="mt-8">
        <ProductOptions product={product} />
      </div>
      <div className="mt-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]">Quantity</p>
        <QuantitySelector />
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
        <Button className="w-full">Add to bag</Button>
        <div className="flex items-center gap-3 border border-stone-200 px-4 py-2">
          <WishlistButton />
          <span className="text-xs font-semibold uppercase tracking-[0.16em]">Add to wishlist</span>
        </div>
      </div>
      <div className="mt-10" id="size-guide">
        <Accordion
          items={[
            { title: "Description", content: product.description },
            { title: "Details & Material", content: "Organic cotton blends, clean interior finishing, corozo buttons, and premium trims selected for daily wear." },
            { title: "Shipping & Returns", content: "Free standard shipping over $75. Returns are accepted within 30 days in original condition." },
            { title: "Size Guide", content: "NOVA fits true to size with an easy modern silhouette. Choose your usual size for a relaxed look." },
          ]}
        />
      </div>
    </aside>
  );
}
