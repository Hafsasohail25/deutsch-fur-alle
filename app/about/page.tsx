import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ContactCTA } from "@/components/sections/contact-cta";
import { StudentStats } from "@/components/sections/student-stats";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Deutsch Für Alle's mission to make premium German language education accessible and affordable for every Pakistani student.",
};

const values = [
  { icon: Target, title: "Our Mission", desc: "To make premium German language education accessible and affordable for every Pakistani student, regardless of background." },
  { icon: Eye, title: "Our Vision", desc: "To become Pakistan's leading bridge between local talent and German opportunity — in education, training, and careers." },
  { icon: HeartHandshake, title: "Our Promise", desc: "Honest counselling, transparent fees, and a genuine commitment to every student's success — from A1 to departure." },
];

const team = [
  { name: "Dr. Anum Sheikh", role: "Founder & Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
  { name: "Markus Weber", role: "Head of German Curriculum", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
  { name: "Ayesha Khan", role: "Ausbildung & Visa Counsellor", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" },
  { name: "Hamza Iqbal", role: "Senior German Instructor", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built By Educators Who Believe Germany Should Be Within Reach."
        desc="Deutsch Für Alle was founded in Lahore in 2013 with one belief: that quality German education shouldn't be a privilege reserved for the few."
      />

      <section className="section-pad bg-white">
        <div className="container grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop"
                alt="Deutsch Für Alle classroom"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-md mt-4 text-ink">From One Classroom to a Movement</h2>
            <p className="body-lg mt-4">
              What started as a single evening class for ten students has grown into one of Pakistan's
              most trusted German language institutes — with over 3,200 students trained and hundreds
              successfully placed in Ausbildung programs, universities, and jobs across Germany.
            </p>
            <p className="body-lg mt-4">
              We built Deutsch Für Alle around a simple idea: combine the rigor of European language
              education with the affordability and personal care that Pakistani families deserve.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="card-premium h-full p-8 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <StudentStats />

      <section className="section-pad bg-white">
        <div className="container">
          <Reveal className="mx-auto max-w-xl text-center">
            <span className="eyebrow justify-center">Our Team</span>
            <h2 className="heading-lg mt-4 text-ink">Meet the People Behind Deutsch Für Alle</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="text-center">
                  <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-2xl">
                    <Image src={m.img} alt={m.name} fill className="object-cover" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-ink">{m.name}</h3>
                  <p className="text-sm text-forest">{m.role}</p>
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
