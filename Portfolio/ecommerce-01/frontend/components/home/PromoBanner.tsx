import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function PromoBanner({ image }: { image: string }) {
  return (
    <section className="grid bg-neutral-950 text-white lg:grid-cols-2">
      <div className="relative min-h-[420px]">
        <Image alt="Weekend edit editorial styling" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" src={image} />
      </div>
      <div className="flex items-center px-6 py-16 sm:px-12 lg:px-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-300">The weekend edit</p>
          <h2 className="mt-5 max-w-lg text-5xl font-semibold uppercase leading-none sm:text-7xl">Effortless pieces for slower days.</h2>
          <Button className="mt-8" href="/products" variant="secondary">Shop the collection</Button>
        </div>
      </div>
    </section>
  );
}
