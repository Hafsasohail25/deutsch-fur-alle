import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Users, Wallet, BookOpenCheck, HeartHandshake } from "lucide-react";

const points = [
  {
    icon: Users,
    title: "Native & Certified Instructors",
    desc: "Learn from instructors trained in Germany and Austria with years of CEFR-based teaching experience.",
  },
  {
    icon: Wallet,
    title: "Affordable, Transparent Fees",
    desc: "Premium education without the premium price tag — flexible installment plans for every student.",
  },
  {
    icon: BookOpenCheck,
    title: "Exam-Focused Curriculum",
    desc: "Every batch is built around real Goethe / telc exam patterns, not generic textbook teaching.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Guidance",
    desc: "From your first A1 class to your Ausbildung contract and visa interview — we stay with you.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-cream">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] shadow-xl mx-auto lg:mx-0">
            <Image
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200&auto=format&fit=crop"
              alt="Instructor guiding students"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden max-w-[220px] rounded-2xl bg-forest p-5 text-cream shadow-xl sm:block">
            <p className="font-display text-3xl font-semibold text-primary">12+</p>
            <p className="mt-1 text-sm text-cream/80">Years training German learners in Pakistan</p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">Why Deutsch Für Alle</span>
            <h2 className="heading-lg mt-4 text-ink">A Premium Institute, Built To Be Accessible</h2>
            <p className="body-lg mt-5 max-w-lg">
              We combine European teaching standards with a deep understanding of what Pakistani
              students need to succeed — academically, financially, and in their visa journey.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-forest">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
