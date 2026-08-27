import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-neutral-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li className="flex items-center gap-2" key={item.label}>
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link className="hover:text-neutral-950" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-950">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
