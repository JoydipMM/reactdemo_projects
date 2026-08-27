import Image from "next/image";
import Link from "next/link";

export function CategoryCard({ category }: { category: { name: string; href: string; image: string } }) {
  return (
    <article className="group relative aspect-[4/5] overflow-hidden bg-stone-100">
      <Image alt={`${category.name} category`} className="object-cover transition duration-500 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 33vw" src={category.image} />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="text-3xl font-semibold uppercase tracking-wide">{category.name}</h3>
        <Link className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] underline" href={category.href}>Explore</Link>
      </div>
    </article>
  );
}
