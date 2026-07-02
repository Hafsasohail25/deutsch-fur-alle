import type { Metadata } from "next";
import { Stethoscope, Wrench, Hotel, Cpu, Check } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { InquiryForm } from "@/components/sections/inquiry-form";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Ausbildung Guidance",
  description:
    "Complete Ausbildung guidance for Pakistani students — paid vocational training in Germany across nursing, IT, mechatronics, and hospitality.",
};

const fields = [
  { icon: Stethoscope, title: "Nursing & Healthcare", desc: "High-demand Ausbildung in elderly care and nursing with strong long-term residency prospects." },
  { icon: Wrench, title: "Mechatronics & Engineering", desc: "Hands-on technical training with leading German manufacturing and automotive companies." },
  { icon: Hotel, title: "Hospitality & Tourism", desc: "Hotel management and culinary Ausbildung placements across Germany's hospitality sector." },
  { icon: Cpu, title: "IT & Technology", desc: "Dual-study and Ausbildung pathways into Germany's growing technology and software industry." },
];

const requirements = [
  "B1-level German certificate (minimum, B2 preferred for healthcare roles)",
  "Completed Matric/Intermediate or equivalent qualification",
  "Age generally between 18–30 years",
  "Clean police character certificate",
  "Genuine motivation letter & CV tailored to your chosen field",
];

export default function AusbildungPage() {
  return (
    <>
      <PageHero
        eyebrow="Ausbildung Guidance"
        title="Earn While You Learn — Germany's Dual Training System."
        desc="Ausbildung combines paid, on-the-job training with classroom education — a direct, practical pathway to a German career and residency."
      />

      <section className="section-pad bg-cream">
        <div className="container">
          <Reveal className="mx-auto max-w-xl text-center">
            <span className="eyebrow justify-center">In-Demand Fields</span>
            <h2 className="heading-lg mt-4 text-ink">Where Pakistani Students Are Placed</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fields.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="card-premium h-full p-6 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-forest">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container grid gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Eligibility</span>
            <h2 className="heading-md mt-4 text-ink">What You Need to Apply</h2>
            <ul className="mt-6 space-y-4">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  <span className="text-sm leading-relaxed text-ink/70 md:text-base">{r}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl bg-primary/10 p-4 text-sm text-forest">
              We provide complete document preparation, employer matching support, and interview coaching
              as part of our Ausbildung guidance program.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="font-display text-xl font-semibold text-ink">Start Your Ausbildung Application</h3>
            <p className="mt-2 text-sm text-ink/60">
              Share your background and we'll guide you toward the right field, German level, and timeline.
            </p>
            <div className="mt-6">
              <InquiryForm compact />
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
