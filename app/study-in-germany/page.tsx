import type { Metadata } from "next";
import { GraduationCap, FileCheck2, PiggyBank, Plane } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { InquiryForm } from "@/components/sections/inquiry-form";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Study in Germany",
  description:
    "Complete guidance for Pakistani students to study at German universities — admissions, German language requirements, and visa process.",
};

const steps = [
  {
    icon: GraduationCap,
    title: "Choose Your Program",
    desc: "We help you shortlist universities and programs across Germany matched to your academic background and budget.",
  },
  {
    icon: FileCheck2,
    title: "Reach Required German Level",
    desc: "Most programs require B1–C1 German (or English-taught programs need B1 alongside IELTS/TOEFL).",
  },
  {
    icon: PiggyBank,
    title: "Blocked Account & Funding",
    desc: "Guidance on opening a blocked account, proving financial resources, and securing scholarships where possible.",
  },
  {
    icon: Plane,
    title: "Visa & Departure",
    desc: "Document checklist, embassy interview preparation, and pre-departure orientation before you fly.",
  },
];

const faqs = [
  ["Is German university tuition really free?", "Most public universities in Germany charge little to no tuition fees for Bachelor's and many Master's programs — students typically only pay a small semester contribution."],
  ["Can I study in English instead of German?", "Yes, many Master's programs are taught in English, though basic German (A2/B1) is still recommended for daily life and part-time work."],
  ["How much money do I need to show for a visa?", "Germany currently requires proof of sufficient funds via a blocked account — our counsellors provide the latest official figures during consultation."],
];

export default function StudyInGermanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Study in Germany"
        title="World-Class Education. Minimal Tuition Fees."
        desc="Germany is home to over 400 public universities offering low-to-no tuition programs. We guide you through every step — from admission to visa."
      />

      <section className="section-pad bg-cream">
        <div className="container">
          <Reveal className="mx-auto max-w-xl text-center">
            <span className="eyebrow justify-center">The Process</span>
            <h2 className="heading-lg mt-4 text-ink">Your Four-Step Journey to a German Degree</h2>
          </Reveal>

          <div className="relative mt-16 grid gap-10 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-ink/10 md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative text-center">
                  <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container grid gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Common Questions</span>
            <h2 className="heading-md mt-4 text-ink">Study in Germany — FAQs</h2>
            <div className="mt-8 space-y-6">
              {faqs.map(([q, a]) => (
                <div key={q} className="border-l-2 border-primary pl-5">
                  <h3 className="font-display font-semibold text-ink">{q}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{a}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="font-display text-xl font-semibold text-ink">
              Get Personalized University Guidance
            </h3>
            <p className="mt-2 text-sm text-ink/60">
              Tell us your academic background and goals — our counsellors will reach out with tailored
              recommendations.
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
