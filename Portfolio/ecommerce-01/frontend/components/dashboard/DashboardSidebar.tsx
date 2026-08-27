import Link from "next/link";
import { accountNavigation } from "@/constants/navigation";

export function DashboardSidebar() {
  return (
    <aside className="lg:w-64">
      <div className="sticky top-32">
        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">My account</h2>
        <nav className="mt-5 flex gap-2 overflow-x-auto pb-2 lg:grid lg:overflow-visible" aria-label="Account navigation">
          {accountNavigation.map((item) => (
            <Link className="shrink-0 border border-stone-200 px-4 py-3 text-sm font-medium hover:border-neutral-950 lg:border-0 lg:px-0" href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
          <Link className="shrink-0 px-4 py-3 text-sm font-medium text-red-700 lg:px-0" href="/login">Logout</Link>
        </nav>
      </div>
    </aside>
  );
}
