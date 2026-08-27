import Link from "next/link";

export function SectionHeader({ eyebrow, title, href }: { eyebrow?: string; title: string; href?: string }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">{eyebrow}</p> : null}
        <h2 className="mt-2 text-2xl font-semibold uppercase tracking-wide text-neutral-950 sm:text-4xl">{title}</h2>
      </div>
      {href ? <Link className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] underline" href={href}>View all -&gt;</Link> : null}
    </div>
  );
}
