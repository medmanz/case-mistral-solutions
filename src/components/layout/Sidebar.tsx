"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Item = {
  id: string;
  label: string;
};

const ITEMS: Item[] = [
  { id: "thesis", label: "Thesis" },
  { id: "inspiration", label: "Inspiration" },
  { id: "hero", label: "The hero" },
  { id: "system", label: "System view" },
  { id: "gap", label: "The gap" },
  { id: "flow", label: "Full flow" },
  { id: "tradeoffs", label: "Tradeoffs" },
  { id: "scaling", label: "Scaling" },
  { id: "kit", label: "Solutions kit" },
  { id: "feasibility", label: "Feasibility" },
];

export function Sidebar() {
  const [active, setActive] = useState<string>("thesis");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    for (const item of ITEMS) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-[260px] px-10 py-12 flex flex-col bg-surface">
      <a
        href="#thesis"
        onClick={(e) => handleClick(e, "thesis")}
        className="inline-block mb-16 text-[20px] font-semibold tracking-tight text-ink hover:opacity-70 transition-opacity"
        aria-label="Top"
      >
        composing
      </a>

      <nav className="flex-1">
        <ul className="space-y-2.5">
          {ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={cn(
                  "text-[14.5px] transition-colors block",
                  active === item.id
                    ? "text-ink font-medium"
                    : "text-ink-soft hover:text-ink"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-[13px] text-ink-soft space-y-1 leading-relaxed">
        <p>v0.1 · June 2026</p>
        <p>
          Made by{" "}
          <a
            href="https://medericmaniere.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:opacity-70 transition-opacity underline-offset-4 decoration-line hover:decoration-ink"
          >
            Médéric
          </a>
        </p>
      </div>
    </aside>
  );
}
