"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="section-pad bg-forest text-cream">
      <div className="container">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow !text-gold justify-center">Success Stories</span>
          <h2 className="heading-lg mt-4">What Our Students Say</h2>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto h-10 w-10 text-gold/50" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="font-display text-xl italic leading-relaxed text-cream/90 md:text-2xl">
                "{t.quote}"
              </p>
              <div className="mt-6 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 font-semibold text-cream">{t.name}</p>
              <p className="text-sm text-cream/55">{t.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-gold" : "w-2 bg-cream/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
