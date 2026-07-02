import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const opportunities = [
  {
    tag: "Ausbildung",
    title: "Vocational Training Programs",
    desc: "Paid, dual vocational training in fields like nursing, IT, mechatronics, and hospitality — earn while you learn.",
    href: "/ausbildung",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
  },
  {
    tag: "Higher Education",
    title: "Study at German Universities",
    desc: "Low-to-no tuition public universities across Germany for Bachelor's, Master's, and PhD programs.",
    href: "/study-in-germany",
    img: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1000&auto=format&fit=crop",
  },
  {
    tag: "Skilled Work",
    title: "Skilled Worker Visa Pathways",
    desc: "Germany's growing demand for skilled professionals opens direct employment & relocation pathways.",
    href: "/study-in-germany",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1000&auto=format&fit=crop",
  },
];

export function GermanyOpportunities() {
  return (
    <section className="section-pad bg-cream">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Your Future in Germany</span>
          <h2 className="heading-lg mt-4 text-ink">Three Proven Pathways To Germany</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {opportunities.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.1}>
              <Link
                href={o.href}
                className="group relative block overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={o.img}
                    alt={o.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-ink">
                    {o.tag}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">{o.title}</h3>
                  <p className="mt-2 text-sm text-white/70 line-clamp-2">{o.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
