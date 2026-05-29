"use client";

import { useState } from "react";
import { counts } from "@/lib/candidates";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type Filter = "all" | "strong" | "good" | "worth-exploring";

const FILTERS: { value: Filter; label: string; count: number }[] = [
  { value: "all", label: "All", count: counts.total },
  { value: "strong", label: "Strong fit", count: counts.strong },
  { value: "good", label: "Good fit", count: counts.good },
  { value: "worth-exploring", label: "Worth exploring", count: counts.worthExploring },
];

export function FilterBar({
  active,
  onChange,
}: {
  active: Filter;
  onChange: (f: Filter) => void;
}) {
  return (
    <div className="px-8 py-3 flex items-center justify-between border-b border-line bg-surface-subtle">
      <div className="flex items-center gap-1.5">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            className={cn(
              "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12.5px] font-medium transition-colors",
              active === f.value
                ? "bg-ink text-white"
                : "text-ink-muted hover:bg-line-soft hover:text-ink"
            )}
          >
            {f.label}
            <span
              className={cn(
                "text-[11px] tabular-nums",
                active === f.value ? "text-white/60" : "text-ink-soft"
              )}
            >
              {f.count}
            </span>
          </button>
        ))}
      </div>
      <button className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12.5px] text-ink-muted hover:bg-line-soft hover:text-ink transition-colors">
        <span className="text-ink-soft">Sort by</span>
        <span className="font-medium text-ink">Match score</span>
        <ChevronDown className="size-3 text-ink-soft" />
      </button>
    </div>
  );
}

export type { Filter };
