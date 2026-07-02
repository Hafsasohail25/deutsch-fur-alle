import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

// NOTE: next/font/google (Inter, Fraunces) requires network access to fonts.googleapis.com
// at build time. If your build environment has internet access, you can switch back to:
//   import { Inter, Fraunces } from "next/font/google";
//   const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
//   const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap",
//     weight: ["400","500","600","700"], style: ["normal","italic"] });
// and apply `${inter.variable} ${fraunces.variable}` on <html>.
// For now we load both fonts via a standard <link> tag in <head> below, which works
// in any environment (including sandboxes without outbound access to Google Fonts at build time).

export const metadata: Metadata = {
  metadataBase: new URL("https://deutschfuralle.pk"),
  title: {
    default: "Deutsch Für Alle — German Language Institute in Pakistan",
    template: "%s | Deutsch Für Alle",
  },
  description:
    "Premium, affordable German language courses (A1–C1) in Pakistan. Expert guidance for Ausbildung, studying in Germany, and German visa applications.",
  keywords: [
    "German language course Pakistan",
    "Deutsch Für Alle",
    "Ausbildung Pakistan",
    "Study in Germany",
    "German A1 A2 B1 B2 C1 Lahore",
    "Goethe Institut exam preparation",
  ],
  openGraph: {
    title: "Deutsch Für Alle — German, For Everyone.",
    description:
      "Premium, affordable German language courses (A1–C1) in Pakistan. Ausbildung & Study in Germany guidance.",
    url: "https://deutschfuralle.pk",
    siteName: "Deutsch Für Alle",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deutsch Für Alle — German, For Everyone.",
    description: "Premium, affordable German language courses (A1–C1) in Pakistan.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream font-sans text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
