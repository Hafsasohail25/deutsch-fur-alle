"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

const interests = [
  "A1 – Beginner",
  "A2 – Elementary",
  "B1 – Intermediate",
  "B2 – Upper Intermediate",
  "C1 – Advanced",
  "Ausbildung Guidance",
  "Study in Germany",
];

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1200);
  }

  if (status === "success") {
    return (
      <div className="card-premium flex flex-col items-center gap-3 px-6 py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-forest" />
        <h3 className="font-display text-xl font-semibold">Thank you!</h3>
        <p className="body-lg max-w-sm">
          Your inquiry has been received. Our counsellor will reach out to you on WhatsApp / phone within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`card-premium grid gap-4 p-6 md:p-8 ${compact ? "" : "md:grid-cols-2"}`}
    >
      <div className={compact ? "" : "md:col-span-1"}>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/60">
          Full Name
        </label>
        <input
          required
          type="text"
          placeholder="Your full name"
          className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/60">
          WhatsApp Number
        </label>
        <input
          required
          type="tel"
          placeholder="+92 3xx xxxxxxx"
          className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
        />
      </div>
      <div className={compact ? "" : "md:col-span-2"}>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/60">
          Email Address
        </label>
        <input
          required
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
        />
      </div>
      <div className={compact ? "" : "md:col-span-2"}>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/60">
          I'm interested in
        </label>
        <select
          required
          defaultValue=""
          className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
        >
          <option value="" disabled>
            Select a program
          </option>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <div className={compact ? "" : "md:col-span-2"}>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/60">
          Message (optional)
        </label>
        <textarea
          rows={3}
          placeholder="Tell us about your goals..."
          className="w-full resize-none rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
        />
      </div>
      <div className={compact ? "" : "md:col-span-2"}>
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
            </>
          ) : (
            "Submit Inquiry — It's Free"
          )}
        </motion.button>
        <p className="mt-3 text-center text-xs text-ink/45">
          By submitting, you agree to be contacted by our admissions team.
        </p>
      </div>
    </form>
  );
}
