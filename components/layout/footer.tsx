import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-ink">
              DA
            </span>
            <span className="font-display text-lg font-semibold">Deutsch Für Alle</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Making German language learning accessible and affordable for every Pakistani student dreaming of Germany.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-primary">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-primary">Programs</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>German A1 – C1 Courses</li>
            <li>Ausbildung Guidance</li>
            <li>Study in Germany Counseling</li>
            <li>Visa Document Support</li>
            <li>IELTS / TestDaF Prep</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-primary">Get in Touch</h4>
          <ul className="mt-4 space-y-4 text-sm text-cream/70">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <span>{SITE.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <span>{SITE.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Deutsch Für Alle. All rights reserved.</p>
          <p>Designed with care for German learners across Pakistan 🇵🇰 🇩🇪</p>
        </div>
      </div>
    </footer>
  );
}
