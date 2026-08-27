import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";

const variants: Record<Variant, string> = {
  primary: "bg-neutral-950 text-white hover:bg-neutral-800",
  secondary: "bg-stone-100 text-neutral-950 hover:bg-stone-200",
  outline: "border border-neutral-950 text-neutral-950 hover:bg-neutral-950 hover:text-white",
  ghost: "text-neutral-800 hover:bg-stone-100",
  danger: "bg-red-700 text-white hover:bg-red-800",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 text-xs font-semibold uppercase tracking-[0.16em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
};

export function Button({ variant = "primary", href, children, className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
