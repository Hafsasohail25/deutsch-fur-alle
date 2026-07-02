"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { COURSE_LEVELS } from "@/lib/data";

export function CourseLevels() {
  const [active, setActive] = useState(2); // B1 default

  return (
    <section className="section-pad bg-ink text-cream">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow !text-primary justify-center">Curriculum</span>
          <h2 className="heading-lg mt-4">Structured Levels From A1 to C1</h2>
          <p className="body-lg mx-auto mt-5 max-w-xl !text-cream/60">
            Every level follows the CEFR framework used across Europe, with built-in exam preparation
            for official Goethe-Institut and telc certification.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {COURSE_LEVELS.map((c, i) => (
            <button
              key={c.level}
              onClick={() => setActive(i)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? "bg-primary text-ink shadow-lg"
                  : "border border-cream/15 text-cream/60 hover:border-cream/40 hover:text-cream"
              }`}
            >
              {c.level} · {c.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mx-auto mt-12 grid max-w-4xl gap-10 rounded-3xl border border-cream/10 bg-white/[0.03] p-8 md:grid-cols-[auto_1fr] md:p-12"
          >
            <div className="flex flex-col items-start gap-2">
              <span className="font-display text-6xl font-semibold text-primary">
                {COURSE_LEVELS[active].level}
              </span>
              <span className="text-sm font-medium text-cream/50">{COURSE_LEVELS[active].duration}</span>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold">{COURSE_LEVELS[active].title}</h3>
              <p className="mt-3 text-cream/60">{COURSE_LEVELS[active].desc}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {COURSE_LEVELS[active].outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm text-cream/75">
                    <Check className="h-4 w-4 shrink-0 text-primary" /> {o}
                  </li>
                ))}
              </ul>
              <Link
                href="/courses"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white"
              >
                View Full {COURSE_LEVELS[active].level} Syllabus <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
