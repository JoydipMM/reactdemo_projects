import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { heroImage } from "@/data/products";

export function HeroSection() {
  return (
    <section className="relative bg-stone-100">
      <div className="relative min-h-[680px] overflow-hidden sm:min-h-[760px]">
        <Image alt="NOVA new season fashion editorial" className="object-cover" fill preload sizes="100vw" src={heroImage} />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/65 via-neutral-950/20 to-transparent" />
        <Container className="relative flex min-h-[680px] items-end pb-12 pt-28 sm:min-h-[760px] sm:items-center sm:pb-0">
          <div className="max-w-2xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.26em]">New season</p>
            <h1 className="mt-5 text-6xl font-semibold uppercase leading-[0.92] tracking-tight sm:text-8xl lg:text-9xl">
              Everyday,<br />Elevated.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-stone-100">Modern essentials designed for your everyday wardrobe.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/products">Shop women</Button>
              <Button href="/products" variant="secondary">Shop men</Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
