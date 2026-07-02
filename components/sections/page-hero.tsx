import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-cream md:pt-44 md:pb-28">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-[100px]"
        aria-hidden
      />
      <div className="container relative">
        <Reveal>
          <span className="eyebrow !text-primary">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="heading-xl mt-4 max-w-3xl text-cream">{title}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-xl text-base text-cream/65 md:text-lg">{desc}</p>
        </Reveal>
      </div>
    </section>
  );
}
