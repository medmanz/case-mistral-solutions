import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat_Brush } from "next/font/google";
import { Agentation } from "agentation";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const caveatBrush = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caveat-brush",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Médéric Manière · Mistral AI case study",
  description:
    "Solutions Designer take-home for Mistral AI. A custom AI app inside Vibe is a composition of Vibe's primitives with a thin business layer on top.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${caveatBrush.variable}`}
    >
      <body>
        {children}
        <Toaster />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
