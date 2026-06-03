"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Check } from "lucide-react";
import { TextShimmer } from "@/components/ui/TextShimmer";
import { cn } from "@/lib/utils";

export type ReasoningStep = {
  label: string;
  // Substeps shown when this step is the current one (streamed in)
  detail: string[];
};

type Props = {
  steps: ReasoningStep[];
  // Demo timing — total compressed wall time
  stepDurationMs?: number;
  detailIntervalMs?: number;
  // Narrative duration shown when complete (e.g. "Thought for 2m 47s")
  completedLabel?: string;
  // Defaults to false. If true, jumps straight to the completed/collapsed state.
  instant?: boolean;
  onComplete?: () => void;
};

export function ReasoningChain({
  steps,
  stepDurationMs = 3200,
  detailIntervalMs = 700,
  completedLabel = "Thought for 2m 47s",
  instant = false,
  onComplete,
}: Props) {
  const [currentStep, setCurrentStep] = useState(instant ? steps.length : 0);
  const [done, setDone] = useState(instant);
  const [expanded, setExpanded] = useState(!instant);

  // Advance through the steps on a fixed cadence.
  useEffect(() => {
    if (instant) return;
    if (currentStep >= steps.length) {
      setDone(true);
      // Collapse on completion (Claude/ChatGPT pattern).
      const t = setTimeout(() => {
        setExpanded(false);
        onComplete?.();
      }, 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setCurrentStep((c) => c + 1);
    }, stepDurationMs);
    return () => clearTimeout(t);
  }, [currentStep, steps.length, stepDurationMs, instant, onComplete]);

  // Header — collapsed bar
  const header = (
    <button
      type="button"
      onClick={() => setExpanded((e) => !e)}
      className="group inline-flex items-center gap-1 -ml-0.5 px-0.5 py-0.5 rounded transition-opacity hover:opacity-80"
      aria-expanded={expanded}
    >
      {done ? (
        <span className="text-[14px] font-medium text-[#57534D]">
          {completedLabel}
        </span>
      ) : (
        <TextShimmer className="text-[14px] font-medium" duration={1.8}>
          {steps[currentStep]?.label ?? "Thinking…"}
        </TextShimmer>
      )}
      <ChevronRight
        className={cn(
          "size-4 text-[#A6A09B] transition-transform duration-200 ease-out",
          expanded && "rotate-90"
        )}
        strokeWidth={2}
      />
    </button>
  );

  return (
    <div className="my-2">
      {header}
      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          expanded
            ? "grid-rows-[1fr] opacity-100 mt-2"
            : "grid-rows-[0fr] opacity-0 mt-0"
        )}
      >
        <div className="overflow-hidden">
          <ol className="relative">
            {/* Continuous vertical rail — centered under each bullet (x=7.5) */}
            <span
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 w-px bg-[#27272A19]"
            />
            {steps.map((step, i) => {
              const state =
                i < currentStep || done
                  ? "done"
                  : i === currentStep
                    ? "active"
                    : "pending";
              return (
                <li
                  key={i}
                  className="relative pl-[26px] py-2 first:pt-0 last:pb-0"
                >
                  {/* Bullet — 15px wrapper centered on the rail (x=0..15 → center 7.5) */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-[10px] size-[15px] grid place-items-center rounded-full bg-[#FAFAF9]"
                  >
                    {state === "done" ? (
                      <span className="size-3 grid place-items-center rounded-full bg-[#14110F]">
                        <Check
                          className="size-2 text-white"
                          strokeWidth={3.5}
                        />
                      </span>
                    ) : state === "active" ? (
                      <span className="size-2.5 rounded-full bg-[#57534D]" />
                    ) : (
                      <span className="size-2 rounded-full border border-[#27272A26] bg-[#FAFAF9]" />
                    )}
                  </span>
                  {/* Label */}
                  {state === "active" ? (
                    <TextShimmer
                      className="text-[14px] font-medium leading-[1.4] block"
                      duration={1.8}
                    >
                      {step.label}
                    </TextShimmer>
                  ) : (
                    <span
                      className={cn(
                        "text-[14px] font-medium leading-[1.4] block",
                        state === "done"
                          ? "text-[#14110F]"
                          : "text-[#A6A09B]"
                      )}
                    >
                      {step.label}
                    </span>
                  )}
                  {/* Detail substeps. Streamed when active, fully shown when done. */}
                  {(state === "active" || state === "done") &&
                    step.detail.length > 0 && (
                      <ActiveDetails
                        items={step.detail}
                        active={state === "active"}
                        instant={instant}
                        detailIntervalMs={detailIntervalMs}
                      />
                    )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

function ActiveDetails({
  items,
  active,
  instant,
  detailIntervalMs,
}: {
  items: string[];
  active: boolean;
  instant: boolean;
  detailIntervalMs: number;
}) {
  const [revealed, setRevealed] = useState(
    instant || !active ? items.length : 0
  );

  useEffect(() => {
    if (!active || instant) {
      setRevealed(items.length);
      return;
    }
    setRevealed(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setRevealed(i);
      if (i >= items.length) clearInterval(id);
    }, detailIntervalMs);
    return () => clearInterval(id);
  }, [active, instant, items.length, detailIntervalMs]);

  return (
    <ul className="mt-1.5 space-y-0.5">
      {items.slice(0, revealed).map((d, i) => (
        <li
          key={i}
          className="text-[13px] leading-[1.45] text-[#79716B] detail-fade-in"
        >
          {d}
        </li>
      ))}
    </ul>
  );
}
