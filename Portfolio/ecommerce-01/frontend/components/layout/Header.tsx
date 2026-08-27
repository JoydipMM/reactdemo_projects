"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNavigation } from "@/constants/navigation";
import { AnnouncementBar } from "./AnnouncementBar";

function SymbolIcon({ children }: { children: string }) {
  return <span aria-hidden="true" className="text-base leading-none">{children}</span>;
}

type Theme = "day" | "night";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "day";
  }

  const savedTheme = window.localStorage.getItem("nova-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return savedTheme === "night" || (!savedTheme && prefersDark) ? "night" : "day";
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("nova-theme", theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "day" ? "night" : "day";
    setTheme(nextTheme);
  }

  return (
    <div className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <AnnouncementBar />
      <header className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="text-2xl font-semibold tracking-[0.24em] text-neutral-950" href="/">
          NOVA
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-700 lg:flex">
          {mainNavigation.map((item) => (
            <Link className="hover:text-neutral-950" href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <button className="nav-icon" aria-label="Open search" onClick={() => setSearchOpen((value) => !value)} type="button">
            <SymbolIcon>⌕</SymbolIcon>
            <span className="hidden sm:inline">Search</span>
          </button>
          <Link className="nav-icon hidden md:inline-flex" href="/dashboard" aria-label="Account">
            <SymbolIcon>◎</SymbolIcon>
            <span>Account</span>
          </Link>
          <button className="nav-icon hidden md:inline-flex" aria-label="Wishlist" type="button">
            <SymbolIcon>♡</SymbolIcon>
          </button>
          <Link className="nav-icon relative" href="/cart" aria-label="Shopping bag with 3 items">
            <SymbolIcon>□</SymbolIcon>
            <span className="hidden sm:inline">Bag</span>
            <span className="absolute -right-1 top-1 grid size-4 place-items-center rounded-full bg-neutral-950 text-[10px] text-white">3</span>
          </Link>
          <button
            aria-label={`Switch to ${theme === "day" ? "night" : "day"} mode`}
            aria-pressed={theme === "night"}
            className="nav-icon"
            onClick={toggleTheme}
            type="button"
          >
            <SymbolIcon>{theme === "day" ? "☾" : "☼"}</SymbolIcon>
            <span className="hidden xl:inline">{theme === "day" ? "Night" : "Day"}</span>
          </button>
          <button className="nav-icon lg:hidden" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label="Open menu" onClick={() => setMenuOpen(true)} type="button">
            <SymbolIcon>☰</SymbolIcon>
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </header>
      {searchOpen ? (
        <div className="border-t border-stone-200 bg-stone-50 px-4 py-4">
          <label className="mx-auto block max-w-3xl">
            <span className="sr-only">Search products</span>
            <input className="input" placeholder="Search NOVA essentials" type="search" />
          </label>
        </div>
      ) : null}
      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-neutral-950/30 lg:hidden" onClick={() => setMenuOpen(false)}>
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="ml-auto flex h-full w-[min(86vw,360px)] flex-col bg-white p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold tracking-[0.22em]">NOVA</span>
              <button className="nav-icon" aria-label="Close menu" onClick={() => setMenuOpen(false)} type="button">×</button>
            </div>
            <div className="mt-8 grid gap-5 text-sm font-semibold uppercase tracking-[0.18em]">
              {mainNavigation.map((item) => (
                <Link href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link href="/login">Sign in</Link>
              <Link href="/dashboard">My account</Link>
              <button className="text-left" onClick={toggleTheme} type="button">
                {theme === "day" ? "Night mode" : "Day mode"}
              </button>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
