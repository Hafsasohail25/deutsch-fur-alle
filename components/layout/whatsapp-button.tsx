"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/data";

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20German%20courses.`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)]"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <MessageCircle className="relative h-7 w-7" fill="white" />
    </motion.a>
  );
}
