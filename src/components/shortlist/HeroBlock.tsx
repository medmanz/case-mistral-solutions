"use client";

import { ArrowRight, Sparkles, Info } from "lucide-react";

export function HeroBlock({
  compact = false,
  onContactTop5,
}: {
  compact?: boolean;
  onContactTop5?: () => void;
} = {}) {
  return (
    <div
      className={
        compact
          ? "px-5 py-4 border-b border-[#27272A0F] bg-surface"
          : "px-8 py-5 border-b border-[#27272A0F] bg-surface"
      }
    >
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-3 min-w-0">
          <h2
            className="text-[20px] font-medium text-[#14110F] leading-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            12 candidates
          </h2>
          <span className="inline-flex items-center gap-1.5 text-[12px] text-[#6B6B6B]">
            <span className="size-1.5 rounded-full bg-[#16A34A]" />
            Sourcing complete · 31 min ago
          </span>
          <button
            className="size-6 grid place-items-center rounded-md text-[#6B6B6B] hover:bg-[#27272A0A] hover:text-[#14110F] transition-colors"
            aria-label="Show sourcing context"
            title="Sourced from 1,240 profiles · Briefed from your kick-off with Sophie Bertrand"
          >
            <Info className="size-3.5" strokeWidth={1.75} />
          </button>
        </div>

        <button
          onClick={onContactTop5}
          className="group shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#14110F] text-white text-[13px] font-medium hover:bg-[#2A2420] active:scale-[0.97] transition-[colors,transform] duration-150"
        >
          <Sparkles
            className="size-3.5 text-mistral-orange-yellow"
            strokeWidth={2.25}
          />
          Contact top 5
          <ArrowRight className="size-3.5 -mr-0.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
