import type { Metadata } from "next";
import { Inter, Caveat_Brush } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveatBrush = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caveat-brush",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Composing custom AI apps inside Vibe — Médéric Manière",
  description:
    "Solutions Designer take-home for Mistral. A custom AI app inside Vibe is a composition of Vibe's primitives with a thin business layer on top.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveatBrush.variable}`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
