import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/lib/data";

export function ContactCTA() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[160px]" />
      <div className="container relative text-center">
        <Reveal>
          <span className="eyebrow !text-gold justify-center">Start Today</span>
          <h2 className="heading-lg mx-auto mt-4 max-w-2xl text-cream">
            Your German Journey Starts With One Conversation.
          </h2>
          <p className="body-lg mx-auto mt-5 max-w-lg !text-cream/60">
            Book a free 15-minute consultation with our counsellors to find the right course and
            Germany pathway for your goals.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary !bg-primary !text-ink hover:!bg-white">
              Book Free Consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/20 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream/50"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
