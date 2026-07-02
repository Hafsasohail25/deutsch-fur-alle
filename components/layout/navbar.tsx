"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(26,26,26,0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest font-display text-lg font-semibold text-white">
            DA
          </span>
          <span className="font-display text-lg font-semibold leading-none text-ink">
            Deutsch Für Alle
            <span className="block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-forest/80">
              German Language Institute
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative text-sm font-medium transition-colors hover:text-forest ${
                pathname === l.href ? "text-forest" : "text-ink/80"
              }`}
            >
              {l.label}
              {pathname === l.href && (
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-primary" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Link href="/contact" className="btn-primary">
            Book Free Consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-ink"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-ink/10 bg-cream lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-lg px-3 py-3 text-base font-medium ${
                    pathname === l.href ? "bg-primary/20 text-forest" : "text-ink/80"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-2 w-full">
                Book Free Consultation
              </Link>
              <span className="mt-2 px-3 text-xs text-ink/50">{SITE.phone}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
