"use client";

import type { Candidate } from "@/lib/candidates";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Pencil, Check } from "lucide-react";
import { ScoreDots, FIT_LABEL, FIT_COLOR } from "./ScoreDots";

export function CandidateCard({
  candidate,
  selected,
  onToggle,
}: {
  candidate: Candidate;
  selected?: boolean;
  onToggle?: () => void;
}) {
  const palette = FIT_COLOR[candidate.fit];

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-xl border bg-surface p-5 transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(26,22,20,0.18)]",
        selected
          ? "border-ink shadow-[0_4px_14px_-8px_rgba(26,22,20,0.3)]"
          : "border-line hover:border-ink-faint",
        candidate.topPick &&
          "before:absolute before:left-0 before:top-5 before:bottom-5 before:w-[2px] before:rounded-r before:bg-mistral-orange"
      )}
    >
      {/* Header row */}
      <div className="flex items-start gap-3">
        <button
          onClick={onToggle}
          className={cn(
            "size-9 shrink-0 rounded-lg grid place-items-center text-[12.5px] font-medium transition-colors",
            selected
              ? "bg-ink text-white"
              : "bg-mistral-cream-warm text-ink hover:bg-mistral-cream"
          )}
          aria-label={selected ? "Deselect" : "Select"}
        >
          {selected ? (
            <Check className="size-4" strokeWidth={2.5} />
          ) : (
            candidate.initials
          )}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-[14px] font-medium text-ink leading-tight truncate">
              {candidate.name}
            </h3>
            <ScoreDots score={candidate.score} fit={candidate.fit} />
          </div>
          <p className="mt-1 text-[12px] text-ink-muted leading-snug truncate">
            {candidate.role} · {candidate.company}
          </p>
          <div className="mt-1.5 inline-flex items-center gap-1.5">
            <span className={cn("size-1.5 rounded-full", palette.dot)} />
            <span
              className={cn(
                "text-[10.5px] font-medium uppercase tracking-wider",
                candidate.fit === "strong"
                  ? "text-[#16734A]"
                  : candidate.fit === "good"
                    ? "text-[#8A6A04]"
                    : "text-ink-soft"
              )}
            >
              {FIT_LABEL[candidate.fit]}
            </span>
          </div>
        </div>
      </div>

      {/* Reasons */}
      <ul className="mt-4 space-y-2">
        {candidate.reasons.map((reason, i) => (
          <li
            key={i}
            className="flex gap-2 text-[12.5px] leading-snug text-ink-muted"
          >
            <span
              className={cn("mt-[6px] size-1 rounded-full shrink-0", palette.dot)}
            />
            <span>{reason}</span>
          </li>
        ))}
      </ul>

      {/* Signals */}
      {candidate.signals && candidate.signals.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {candidate.signals.map((s) => (
            <span
              key={s}
              className="inline-flex items-center px-1.5 py-0.5 rounded text-[10.5px] font-medium bg-surface-sunken text-ink-muted"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {/* Location + actions */}
      <div className="mt-auto pt-4 flex items-center justify-between text-[11.5px]">
        <span className="text-ink-soft truncate">{candidate.location}</span>
        <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity shrink-0">
          <button
            className="inline-flex items-center gap-1 px-1.5 py-1 rounded-md text-ink-muted hover:bg-line-soft hover:text-ink transition-colors"
            aria-label="Override the agent's score"
          >
            <Pencil className="size-3" />
            <span className="text-[11px]">Override</span>
          </button>
          <button className="inline-flex items-center gap-1 px-1.5 py-1 rounded-md text-ink-muted hover:bg-line-soft hover:text-ink transition-colors">
            <span className="text-[11px]">View</span>
            <ArrowUpRight className="size-3" />
          </button>
        </div>
      </div>
    </article>
  );
}
