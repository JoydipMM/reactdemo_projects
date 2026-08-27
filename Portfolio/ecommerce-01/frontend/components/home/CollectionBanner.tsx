import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function CollectionBanner({ image }: { image: string }) {
  return (
    <section className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="order-2 lg:order-1">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">The essentials</p>
        <h2 className="mt-5 text-5xl font-semibold uppercase leading-none text-neutral-950 sm:text-7xl">
          Minimal silhouettes. Premium materials.
        </h2>
        <p className="mt-6 max-w-md leading-7 text-neutral-600">Designed to last beyond one season, NOVA essentials are built around balance, comfort, and quiet detail.</p>
        <Button className="mt-8" href="/products">Explore collection</Button>
      </div>
      <div className="relative order-1 aspect-[4/5] bg-stone-100 lg:order-2">
        <Image alt="NOVA essentials collection" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" src={image} />
      </div>
    </section>
  );
}
