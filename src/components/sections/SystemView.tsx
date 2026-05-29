"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Metier = "recruiting" | "alert" | "support";

const METIERS: {
  id: Metier;
  label: string;
  color: string;
  businessLayer: string[];
}[] = [
  {
    id: "recruiting",
    label: "AI Recruiting",
    color: "bg-mistral-orange",
    businessLayer: [
      "Score candidates by fit",
      "Draft outreach in your voice",
      "Track pipeline state",
    ],
  },
  {
    id: "alert",
    label: "AI Alert Monitoring",
    color: "bg-[#2563EB]",
    businessLayer: [
      "Triage incoming alerts",
      "Cluster by root cause",
      "Draft incident summaries",
    ],
  },
  {
    id: "support",
    label: "AI Customer Support",
    color: "bg-[#16A34A]",
    businessLayer: [
      "Classify ticket intent",
      "Draft replies in tone",
      "Escalate when stuck",
    ],
  },
];

const PRIMITIVES = [
  { name: "Skills", count: 5, hint: "Action atoms" },
  { name: "Connectors", count: 4, hint: "LinkedIn, ATS, Gmail, Calendar" },
  { name: "Custom Mode", count: 1, hint: "Persistent surface in Work Mode" },
  { name: "Project", count: 1, hint: "Long-horizon container" },
  { name: "Canvas", count: 1, hint: "Pipeline view" },
];

export function SystemView() {
  const [active, setActive] = useState<Metier>("recruiting");
  const current = METIERS.find((m) => m.id === active)!;

  return (
    <section className="py-32 border-t border-line bg-mistral-cream">
      <div className="wide">
        <div className="editorial !max-w-[720px] !px-0">
          <p className="mono-tag mb-8">§5 · One kit, many apps</p>
          <h2 className="text-h2 leading-tight tracking-tight font-medium text-ink">
            A custom app composes primitives.
          </h2>
          <p className="mt-6 text-lede leading-snug text-ink-muted max-w-[44ch]">
            Five Skills. Four Connectors. One Custom Mode. One Project. Swap
            the business layer and you have the next app.
          </p>
        </div>

        {/* The diagram */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-14 items-center">
          {/* Left: Vibe primitives stack */}
          <div className="bg-surface rounded-2xl border border-line p-7 shadow-[0_1px_3px_rgba(26,22,20,0.04)]">
            <div className="flex items-center justify-between mb-5">
              <span className="mono-tag">Vibe primitives</span>
              <span className="text-[11px] text-ink-soft tabular-nums">
                The kit
              </span>
            </div>
            <ul className="space-y-2">
              {PRIMITIVES.map((p) => (
                <li
                  key={p.name}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-surface-subtle border border-line"
                >
                  <div className="size-7 rounded-md bg-ink/5 grid place-items-center">
                    <span className="text-[11px] font-mono text-ink-muted tabular-nums">
                      {p.count}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-medium text-ink leading-tight">
                      {p.name}
                    </div>
                    <div className="text-[11.5px] text-ink-soft leading-tight">
                      {p.hint}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: arrow / plus */}
          <div className="flex lg:flex-col items-center justify-center gap-4 text-ink-soft">
            <div className="text-[28px] font-light leading-none tabular-nums">
              +
            </div>
            <div className="text-[10px] mono-tag !text-ink-soft text-center">
              Business
              <br />
              layer
            </div>
            <div className="text-[20px] font-light leading-none">→</div>
          </div>

          {/* Right: business layer stack with tabs */}
          <div
            className={cn(
              "rounded-2xl border-2 p-7 transition-all duration-300",
              active === "recruiting" && "border-mistral-orange bg-surface",
              active === "alert" && "border-[#2563EB] bg-surface",
              active === "support" && "border-[#16A34A] bg-surface"
            )}
          >
            <div className="flex items-center gap-2 mb-5">
              {METIERS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActive(m.id)}
                  className={cn(
                    "px-2.5 py-1 rounded-md text-[11.5px] font-medium transition-colors",
                    active === m.id
                      ? "bg-ink text-white"
                      : "text-ink-muted hover:bg-line-soft"
                  )}
                >
                  {m.label}
                </button>
              ))}
            </div>
            <div
              className={cn("size-3 rounded-full mb-4", current.color)}
              aria-hidden
            />
            <h3 className="text-[18px] font-medium text-ink leading-tight">
              {current.label}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {current.businessLayer.map((line) => (
                <li
                  key={line}
                  className="flex gap-2 text-[13px] text-ink-muted leading-snug"
                >
                  <span
                    className={cn(
                      "mt-[7px] size-1 rounded-full shrink-0",
                      current.color
                    )}
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-line">
              <p className="text-[11.5px] text-ink-soft leading-snug">
                Same primitives. Same trust contract.{" "}
                <span className="text-ink font-medium">
                  Different métier.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="editorial !max-w-[720px] !px-0 mt-20">
          <p className="text-body leading-relaxed text-ink-muted">
            Scaling to 100 apps becomes a question about{" "}
            <span className="text-ink font-medium">kit quality</span>. So does
            helping the Solutions team produce fast.{" "}
            <span className="text-ink font-medium">
              The same answer covers both.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
