import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { InquiryForm } from "@/components/sections/inquiry-form";
import { FAQ } from "@/components/sections/faq";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Deutsch Für Alle — book a free consultation for German courses, Ausbildung guidance, or study in Germany counselling.",
};

const info = [
  { icon: MapPin, title: "Visit Us", value: SITE.address },
  { icon: Phone, title: "Call / WhatsApp", value: SITE.phone },
  { icon: Mail, title: "Email Us", value: SITE.email },
  { icon: Clock, title: "Office Hours", value: "Mon – Sat, 10:00 AM – 8:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Plan Your German Journey Together."
        desc="Whether you're curious about A1 classes or ready to apply for Ausbildung — our counsellors are one message away."
      />

      <section className="section-pad bg-cream">
        <div className="container grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="heading-md text-ink">Get in Touch</h2>
            <p className="body-lg mt-3">
              Reach out via the form, WhatsApp, or visit our campus — whichever is easiest for you.
            </p>
            <div className="mt-8 space-y-6">
              {info.map((i) => (
                <div key={i.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <i.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-ink">{i.title}</p>
                    <p className="text-sm text-ink/60">{i.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 aspect-video overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title="Deutsch Für Alle Location"
                src="https://www.google.com/maps?q=Gulberg%20III%20Lahore&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <InquiryForm />
          </Reveal>
        </div>
      </section>

      <FAQ />
    </>
  );
}
