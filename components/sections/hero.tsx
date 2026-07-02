"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, GraduationCap, BadgeCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-32 text-cream md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#F7F5EF 1px, transparent 1px), linear-gradient(90deg, #F7F5EF 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-semibold tracking-wide text-primary">
              Pakistan's Trusted German Institute Since 2013
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-xl mt-6 text-cream"
          >
            Your Path to{" "}
            <span className="relative font-display italic text-primary">
              Germany
            </span>{" "}
            Begins With Fluent German.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-base text-cream/65 md:text-lg"
          >
            From A1 to C1, Ausbildung guidance to visa support — Deutsch Für Alle gives Pakistani
            students an affordable, premium route to study, train, and work in Germany.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link href="/contact" className="btn-primary !bg-primary !text-ink hover:!bg-white">
              Book Free Consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/20 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream/50"
            >
              Explore Courses
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-cream/10 pt-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-cream/70">4.9/5 from 1,200+ reviews</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-cream/70">
              <BadgeCheck className="h-4 w-4 text-primary" /> Goethe-aligned curriculum
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-cream/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80"
              alt="Students learning German in classroom"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 hidden rounded-2xl border border-ink/8 bg-white p-4 shadow-xl md:flex md:items-center md:gap-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/20">
              <GraduationCap className="h-5 w-5 text-forest" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-ink leading-none">850+</p>
              <p className="text-xs text-ink/55">Visas &amp; Placements</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-10 hidden rounded-2xl border border-ink/8 bg-white p-4 shadow-xl md:block"
          >
            <p className="font-display text-lg font-semibold text-ink leading-none">94%</p>
            <p className="mt-1 text-xs text-ink/55">Goethe Exam Pass Rate</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
