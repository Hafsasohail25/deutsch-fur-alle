import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { StudentStats } from "@/components/sections/student-stats";
import { ContactCTA } from "@/components/sections/contact-cta";
import { TESTIMONIALS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real success stories from Deutsch Für Alle students — Ausbildung placements, university admissions, and German visa journeys.",
};

const stories = [
  ...TESTIMONIALS,
  {
    name: "Usman Tariq",
    role: "Ausbildung — IT, Hamburg",
    quote:
      "I joined as a complete beginner after my Intermediate. Eighteen months later, I had my B1 certificate and a confirmed Ausbildung contract in Hamburg.",
  },
  {
    name: "Mehwish Akram",
    role: "B.Sc. Student, RWTH Aachen",
    quote:
      "The teachers' patience and structured weekly tests made all the difference. I passed my B2 exam in the first attempt and got my university offer the same year.",
  },
  {
    name: "Fahad Naeem",
    role: "Ausbildung — Hospitality, Munich",
    quote:
      "Beyond just German classes, the visa documentation support saved me months of confusion. Highly recommend this institute to anyone serious about Germany.",
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="Real Students. Real Visas. Real Lives Changed."
        desc="Every certificate, Ausbildung contract, and university admission letter here represents a student who started exactly where you are now."
      />

      <StudentStats />

      <section className="section-pad bg-cream">
        <div className="container columns-1 gap-6 md:columns-2 lg:columns-3">
          {stories.map((s, i) => (
            <Reveal key={s.name + i} delay={(i % 3) * 0.08} className="mb-6 break-inside-avoid">
              <div className="card-premium p-7">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">"{s.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 font-display font-semibold text-forest">
                    {s.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{s.name}</p>
                    <p className="text-xs text-ink/50">{s.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
