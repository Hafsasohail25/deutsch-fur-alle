import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ContactCTA } from "@/components/sections/contact-cta";
import { COURSE_LEVELS } from "@/lib/data";

export const metadata: Metadata = {
  title: "German Courses A1–C1",
  description:
    "Structured German language courses from A1 to C1 in Pakistan — Goethe-aligned curriculum, expert instructors, flexible batches.",
};

const formats = [
  { title: "In-Person Classes", desc: "Morning, evening & weekend batches at our Lahore campus, max 15 students per class." },
  { title: "Live Online Classes", desc: "Real-time instructor-led sessions for students anywhere in Pakistan, fully interactive." },
  { title: "Exam Preparation", desc: "Dedicated Goethe / telc mock tests, speaking practice, and personalized feedback." },
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="German Courses"
        title="A Structured Path From Your First Word to Fluency."
        desc="Every course is built around the Common European Framework (CEFR), combining classroom teaching, conversation practice, and real exam preparation."
      />

      <section className="section-pad bg-cream">
        <div className="container space-y-8">
          {COURSE_LEVELS.map((c, i) => (
            <Reveal key={c.level} delay={i * 0.05}>
              <div className="card-premium grid gap-8 p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:p-10">
                <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-1">
                  <span className="font-display text-5xl font-semibold text-forest">{c.level}</span>
                  <span className="text-sm font-medium text-ink/45">{c.title}</span>
                </div>
                <div>
                  <p className="text-ink/65">{c.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {c.outcomes.map((o) => (
                      <li key={o} className="flex items-center gap-2 text-sm text-ink/70">
                        <Check className="h-4 w-4 text-forest" /> {o}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gold">
                    Duration: {c.duration}
                  </p>
                </div>
                <Link href="/contact" className="btn-secondary whitespace-nowrap">
                  Enroll Now <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-forest text-cream">
        <div className="container">
          <Reveal className="mx-auto max-w-xl text-center">
            <span className="eyebrow !text-gold justify-center">Learning Formats</span>
            <h2 className="heading-lg mt-4">Choose How You Want To Learn</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {formats.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-cream/15 bg-white/5 p-7">
                  <h3 className="font-display text-lg font-semibold text-primary">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
