import { Reveal } from "@/components/ui/reveal";
import { Briefcase, GraduationCap, Globe2, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Briefcase,
    title: "Ausbildung Opportunities",
    desc: "Germany has thousands of vocational training (Ausbildung) seats open for skilled, German-speaking applicants every year.",
  },
  {
    icon: GraduationCap,
    title: "Free / Low-Cost Education",
    desc: "German public universities charge little to no tuition — German proficiency is the key requirement for most programs.",
  },
  {
    icon: TrendingUp,
    title: "Strong Job Market",
    desc: "From healthcare to engineering, Germany actively recruits skilled foreign workers facing an aging local workforce.",
  },
  {
    icon: Globe2,
    title: "Gateway to Europe",
    desc: "German is the most widely spoken native language in the EU — opening doors across Germany, Austria, and Switzerland.",
  },
];

export function WhyLearnGerman() {
  return (
    <section className="section-pad bg-cream">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">Why German?</span>
            <h2 className="heading-lg mt-4 text-ink">
              One Language. Countless Doors Open Across Germany &amp; Europe.
            </h2>
            <p className="body-lg mt-5 max-w-md">
              German isn't just a language — it's your visa, your career, and your future in one of
              the world's strongest economies. Here's why thousands of Pakistani students choose to
              learn it with us.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.1}>
                <div className="card-premium group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(76,122,45,0.35)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                    <r.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
