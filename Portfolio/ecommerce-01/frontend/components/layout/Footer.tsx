import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerGroups = [
  ["Shop", "Women", "Men", "New Arrivals", "Collections", "Sale"],
  ["Help", "Contact", "Shipping", "Returns", "FAQ", "Size Guide"],
  ["About", "Our Story", "Sustainability", "Careers"],
  ["Social", "Instagram", "Facebook", "Pinterest", "TikTok"],
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200 bg-stone-50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_2fr]">
          <div>
            <Link className="text-2xl font-semibold tracking-[0.24em]" href="/">NOVA</Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-600">
              Modern essentials. Designed for everyday. A premium static storefront template for thoughtful commerce.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerGroups.map(([title, ...links]) => (
              <div key={title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">{title}</h2>
                <ul className="mt-4 grid gap-3 text-sm text-neutral-600">
                  {links.map((link) => (
                    <li key={link}>
                      <Link className="hover:text-neutral-950" href="/products">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-stone-200 pt-6 text-xs uppercase tracking-[0.16em] text-neutral-500 sm:flex-row">
          <p>© 2026 NOVA. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
