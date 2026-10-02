import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"; // Using Montserrat as requested
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

// Required by @cloudflare/next-on-pages: every server-rendered route must run on the edge runtime.
export const runtime = "edge";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["400", "500", "600", "700", "800"], display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === 'en' 
      ? "Quick Fix Handyman | Expert Renovation & Repair" 
      : "Quick Fix Handyman | Expertos en Remodelación y Reparación",
    description: locale === 'en'
      ? "Oregon's trusted experts for complete home renovations, specialized restorations, and premium maintenance."
      : "Los expertos de confianza en Oregon para remodelaciones completas, restauraciones especializadas y mantenimiento preventivo.",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <html lang={locale}>
      <body className={cn(inter.variable, montserrat.variable, "min-h-screen bg-background font-body antialiased flex flex-col")}>
        <Navbar dict={dict.navbar} locale={locale} />
        <main className="flex-grow pt-[var(--nav-height)]">
          {children}
        </main>
        <Footer dict={dict.footer} locale={locale} />
      </body>
    </html>
  );
}
