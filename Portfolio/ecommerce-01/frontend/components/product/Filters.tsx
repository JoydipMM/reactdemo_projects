"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const groups = {
  Category: ["T-Shirts", "Shirts", "Jeans", "Trousers", "Jackets", "Dresses", "Sweaters", "Accessories"],
  Size: ["XS", "S", "M", "L", "XL"],
  Color: ["Black", "Ivory", "Stone", "Sage", "Denim"],
  Price: ["Under $50", "$50 - $100", "$100 - $150", "$150+"],
  Availability: ["In stock", "Sale"],
};

export function FilterSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Filters</h2>
      <FilterGroups />
    </aside>
  );
}

export function FilterControls() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-3 lg:hidden">
        <button className="h-11 border border-stone-300 px-4 text-xs font-semibold uppercase tracking-[0.16em]" onClick={() => setOpen(true)} type="button">Filters</button>
        <SortDropdown />
      </div>
      {open ? (
        <div className="fixed inset-0 z-50 bg-neutral-950/30" onClick={() => setOpen(false)}>
          <div className="ml-auto h-full w-[min(90vw,380px)] overflow-y-auto bg-white p-6" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">Filters</h2>
              <button className="text-2xl" aria-label="Close filters" onClick={() => setOpen(false)} type="button">×</button>
            </div>
            <FilterGroups />
          </div>
        </div>
      ) : null}
    </>
  );
}

export function SortDropdown() {
  return (
    <label className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
      <span className="hidden sm:inline">Sort by</span>
      <select className="h-11 border border-stone-300 bg-white px-3 text-xs" defaultValue="featured">
        <option value="featured">Featured</option>
        <option value="new">Newest</option>
        <option value="low">Price low to high</option>
        <option value="high">Price high to low</option>
      </select>
    </label>
  );
}

function FilterGroups() {
  return (
    <div className="mt-5 divide-y divide-stone-200">
      {Object.entries(groups).map(([title, values]) => (
        <fieldset className="py-5" key={title}>
          <legend className="text-xs font-semibold uppercase tracking-[0.16em]">{title}</legend>
          <div className="mt-4 grid gap-3">
            {values.map((value) => (
              <label className="flex items-center gap-3 text-sm text-neutral-600" key={value}>
                <input className={cn("size-4 accent-neutral-950")} type="checkbox" />
                {value}
              </label>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  );
}
