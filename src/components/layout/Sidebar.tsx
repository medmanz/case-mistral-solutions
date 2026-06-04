"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Item = {
  id: string;
  label: string;
};

const DEFAULT_ITEMS: Item[] = [
  { id: "hero", label: "Where I landed" },
  { id: "brief", label: "Reading the brief" },
  { id: "research", label: "User research" },
  { id: "flow", label: "The flow" },
  { id: "kit", label: "Design for Solutions" },
  { id: "enablement", label: "Shipping in AI Studio" },
  { id: "choices", label: "Trade-offs" },
  { id: "feasibility", label: "Feasibility" },
  { id: "looking-back", label: "Looking back" },
];

export function Sidebar({ items, topId }: { items?: Item[]; topId?: string } = {}) {
  const ITEMS = items ?? DEFAULT_ITEMS;
  const TOP = topId ?? ITEMS[0]?.id ?? "hero";
  const [active, setActive] = useState<string>(TOP);

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
  }, [ITEMS]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="sticky top-0 h-screen w-[260px] shrink-0 py-12 pl-8 flex flex-col bg-surface">
      <Link
        href="/"
        className="group inline-flex items-center gap-1.5 mb-8 -ml-0.5 transition-colors"
        style={{
          fontSize: "13px",
          lineHeight: "18px",
          letterSpacing: "-0.18px",
          color: "#9CA3AF",
          fontWeight: 500,
          fontVariationSettings: `"wght" 500`,
          width: "max-content",
        }}
      >
        <ArrowLeft
          className="size-3.5 transition-transform duration-150 group-hover:-translate-x-0.5"
          strokeWidth={2}
        />
        <span className="group-hover:text-[#242529] transition-colors">
          Home
        </span>
      </Link>

      <div style={{ width: "max-content" }}>
        <nav>
          <ul className="flex flex-col gap-2 items-start">
            {ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    style={{
                      fontSize: "13px",
                      lineHeight: "18px",
                      letterSpacing: "-0.18px",
                      color: isActive ? "#242529" : "#9CA3AF",
                      fontWeight: 550,
                      fontVariationSettings: `"wght" 550`,
                    }}
                    className="block transition-colors hover:!text-[#242529]"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          style={{
            marginTop: "24px",
            paddingTop: "16px",
            borderTop: "1px solid #ECECEC",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "-0.12px",
              color: "#9CA3AF",
              fontWeight: 450,
              fontVariationSettings: `"wght" 450`,
            }}
          >
            Made by{" "}
            <a
              href="https://medericmaniere.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity underline-offset-4"
              style={{ color: "#242529", textDecoration: "underline" }}
            >
              Médéric
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
}
