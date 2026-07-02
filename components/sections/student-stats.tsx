"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/data";

function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, "");

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * numeric);
      setDisplay(start.toLocaleString());
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, numeric]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StudentStats() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl font-semibold text-ink md:text-5xl">
              <Counter value={s.value} />
            </p>
            <p className="mt-2 text-sm font-medium text-ink/70 md:text-base">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
