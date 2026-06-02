"use client";

import { useEffect, useState } from "react";
import { Signature } from "./Signature";

type Item = {
  id: string;
  label: string;
};

const ITEMS: Item[] = [
  { id: "hero", label: "Intro" },
  { id: "brief", label: "Reading the brief" },
  { id: "research", label: "User research" },
  { id: "inspiration", label: "Inspiration" },
  { id: "flow", label: "Flow in 4 acts" },
  { id: "primitives", label: "Five primitives" },
  { id: "kit", label: "Same kit" },
  { id: "enablement", label: "How Solutions ships" },
  { id: "choices", label: "Trade-offs" },
  { id: "feasibility", label: "Feasibility" },
];

export function Sidebar() {
  const [active, setActive] = useState<string>("hero");

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
    <aside className="sticky top-0 h-screen w-[260px] shrink-0 py-12 pl-8 flex flex-col bg-surface">
      <Signature
        onNavigate={() => {
          const el = document.getElementById("hero");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />

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
