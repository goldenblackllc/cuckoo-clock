import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Golden Black — Luxury Mechanical Cuckoo Clocks",
  description:
    "Discover hand-crafted mechanical cuckoo clocks from Germany's Black Forest. Authentic VdS-certified timepieces with precision movements, carved by master artisans since 1987.",
  keywords: [
    "cuckoo clocks",
    "Black Forest",
    "mechanical clocks",
    "luxury timepieces",
    "VdS certified",
    "Golden Black",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
