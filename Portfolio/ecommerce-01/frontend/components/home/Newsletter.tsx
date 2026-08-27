import { Button } from "@/components/ui/Button";

export function Newsletter() {
  return (
    <section className="border-y border-stone-200 bg-stone-50 px-4 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Join the NOVA list</p>
      <h2 className="mt-4 text-3xl font-semibold uppercase tracking-wide text-neutral-950 sm:text-5xl">Early access, refined.</h2>
      <p className="mx-auto mt-4 max-w-xl leading-7 text-neutral-600">Get early access to new collections, exclusive offers and styling inspiration.</p>
      <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <input className="input min-h-12 flex-1" id="newsletter-email" placeholder="Email address" type="email" />
        <Button type="button">Subscribe</Button>
      </form>
    </section>
  );
}
