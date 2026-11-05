import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { business } from "@/data/business";
import "@/styles/globals.css";

const manrope = localFont({ src: "./fonts/manrope-latin.woff2", weight: "400 800", variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: { template: `%s | ${business.name}`, default: `${business.name} | Institut de beauté à Marrakech` },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang={business.language} className={manrope.variable}><body>
    <Header /><main id="contenu" tabIndex={-1}>{children}</main><Footer />
  </body></html>;
}
