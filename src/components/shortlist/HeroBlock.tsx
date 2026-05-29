"use client";

import { topPicks } from "@/lib/candidates";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroBlock() {
  const picks = topPicks.map((c) => c.name.split(" ")[0]).join(", ");

  return (
    <div className="px-8 py-7 border-b border-line bg-surface">
      <div className="flex items-start justify-between gap-12">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#E8F7EE] text-[#16734A] text-[11px] font-medium">
              <span className="size-1.5 rounded-full bg-[#16A34A]" />
              Sourcing complete
            </span>
            <span className="text-[11px] text-ink-soft">31 min ago</span>
          </div>
          <h2 className="text-[26px] leading-[1.15] tracking-tight font-medium text-ink">
            12 candidates ready for your review.
          </h2>
          <p className="mt-2 text-[13.5px] text-ink-muted leading-snug max-w-[58ch]">
            Sourced from{" "}
            <span className="text-ink font-medium">847 profiles</span> across
            LinkedIn, GitHub, and Greenhouse · Filtered for fit, availability,
            and timezone overlap.
          </p>
        </div>

        <div className="shrink-0 flex flex-col items-end gap-2">
          <button className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-ink text-white text-[13px] font-medium hover:bg-[#2A2420] transition-colors shadow-[0_1px_2px_rgba(26,22,20,0.16)]">
            <Sparkles className="size-3.5 text-mistral-orange-yellow" strokeWidth={2.25} />
            Contact top 5
            <ArrowRight className="size-3.5 -mr-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <p className="text-[11px] text-ink-soft max-w-[18ch] text-right leading-snug">
            {picks}
          </p>
        </div>
      </div>
    </div>
  );
}
