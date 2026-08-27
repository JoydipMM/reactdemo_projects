"use client";

import { useState } from "react";

export function Accordion({ items }: { items: { title: string; content: string }[] }) {
  const [open, setOpen] = useState(items[0]?.title);

  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {items.map((item) => {
        const isOpen = open === item.title;
        return (
          <section key={item.title}>
            <button
              className="flex w-full items-center justify-between py-5 text-left text-xs font-semibold uppercase tracking-[0.18em]"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? "" : item.title)}
              type="button"
            >
              {item.title}
              <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? <p className="pb-5 text-sm leading-7 text-neutral-600">{item.content}</p> : null}
          </section>
        );
      })}
    </div>
  );
}
