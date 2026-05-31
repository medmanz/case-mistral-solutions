"use client";

import { useState, useMemo } from "react";
import { candidates } from "@/lib/candidates";
import { Sidebar } from "./Sidebar";
import { HeroBlock } from "./HeroBlock";
import { FilterBar, type Filter } from "./FilterBar";
import { CandidateCard } from "./CandidateCard";
import { ChevronLeft, Share2, Settings2, MoreHorizontal } from "lucide-react";

export function Shortlist() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    if (filter === "all") return candidates;
    return candidates.filter((c) => c.fit === filter);
  }, [filter]);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-line bg-surface shadow-[0_1px_3px_rgba(26,22,20,0.04),0_24px_60px_-30px_rgba(26,22,20,0.25)]">
      <div className="flex h-[720px]">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-surface min-w-0">
          {/* Top bar */}
          <div className="px-8 py-3.5 border-b border-line flex items-center justify-between">
            <div className="flex items-center gap-2 text-[12.5px]">
              <button className="inline-flex items-center gap-1 text-ink-soft hover:text-ink transition-colors">
                <ChevronLeft className="size-3.5" />
                Tasks
              </button>
              <span className="text-ink-faint">/</span>
              <span className="text-ink font-medium">
                Senior Backend Engineer search
              </span>
            </div>
            <div className="flex items-center gap-1 text-ink-soft">
              <button className="size-7 grid place-items-center rounded-md hover:bg-line-soft hover:text-ink transition-colors">
                <Share2 className="size-3.5" />
              </button>
              <button className="size-7 grid place-items-center rounded-md hover:bg-line-soft hover:text-ink transition-colors">
                <Settings2 className="size-3.5" />
              </button>
              <button className="size-7 grid place-items-center rounded-md hover:bg-line-soft hover:text-ink transition-colors">
                <MoreHorizontal className="size-3.5" />
              </button>
            </div>
          </div>

          {/* Hero block */}
          <HeroBlock />

          {/* Filter bar */}
          <FilterBar active={filter} onChange={setFilter} />

          {/* Grid */}
          <div className="flex-1 overflow-y-auto px-8 py-6 bg-surface-subtle">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((c, i) => (
                <div
                  key={c.id}
                  className="fade-up"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <CandidateCard
                    candidate={c}
                    selected={selected.has(c.id)}
                    onToggle={() => toggle(c.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sticky multi-select footer */}
          {selected.size > 0 && (
            <div className="px-8 py-3 border-t border-line bg-surface flex items-center justify-between">
              <span className="text-[12.5px] text-ink-muted">
                <span className="font-medium text-ink">{selected.size}</span>{" "}
                candidate{selected.size > 1 ? "s" : ""} selected
              </span>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-md text-[12.5px] text-ink-muted hover:bg-line-soft hover:text-ink transition-colors">
                  Compare side-by-side
                </button>
                <button className="px-3 py-1.5 rounded-md text-[12.5px] text-ink-muted hover:bg-line-soft hover:text-ink transition-colors">
                  Move to interview pool
                </button>
                <button className="px-3 py-1.5 rounded-md text-[12.5px] font-medium bg-ink text-white hover:bg-[#2A2420] transition-colors">
                  Draft outreach
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
