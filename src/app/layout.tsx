import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Composing custom AI apps inside Vibe — Médéric Manière",
  description:
    "Solutions Designer take-home for Mistral. A custom AI app inside Vibe isn't a separate product — it's a composition of Vibe's primitives with a thin business layer on top.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
