"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { candidates } from "@/lib/candidates";
import { Sidebar } from "@/components/shortlist/Sidebar";
import { HeroBlock } from "@/components/shortlist/HeroBlock";
import { FilterBar, type Filter } from "@/components/shortlist/FilterBar";
import { CandidateCard } from "@/components/shortlist/CandidateCard";
import { DraftPanel } from "@/components/shortlist/DraftPanel";
import { ChevronLeft, Share2, Settings2, MoreHorizontal } from "lucide-react";

export default function OutreachPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("all");
  const [selected] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    if (filter === "all") return candidates;
    return candidates.filter((c) => c.fit === filter);
  }, [filter]);

  return (
    <div className="h-[100dvh] bg-surface-subtle flex">
      <Sidebar width={260} />
      <div className="flex-1 flex flex-col bg-surface min-w-0">
        <div className="px-8 py-3.5 border-b border-line flex items-center justify-between">
          <div className="flex items-center gap-2 text-[12.5px]">
            <button className="inline-flex items-center gap-1 text-ink-soft hover:text-ink transition-colors">
              <ChevronLeft className="size-3.5" />
              Tasks
            </button>
            <span className="text-ink-faint">/</span>
            <span className="text-ink font-medium">
              Senior Supply Chain Manager search
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

        <HeroBlock />
        <FilterBar active={filter} onChange={setFilter} />

        <div className="flex-1 overflow-y-auto px-8 py-6 bg-surface-subtle">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-[1400px]">
            {filtered.map((c) => (
              <CandidateCard
                key={c.id}
                candidate={c}
                selected={selected.has(c.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <DraftPanel open onClose={() => router.push("/sandbox/shortlist")} />
    </div>
  );
}
