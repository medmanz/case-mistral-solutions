"use client";

import { useState } from "react";
import {
  ChevronLeft,
  Share2,
  Settings2,
  MoreHorizontal,
  Settings,
  Sparkles,
  Clock,
  AlertCircle,
  Mail,
  CalendarCheck,
  ChevronDown,
} from "lucide-react";
import { Sidebar } from "@/components/shortlist/Sidebar";
import { cn } from "@/lib/utils";

type Stage = "waiting" | "replied" | "screening" | "interview" | "offer";

type PipelineCandidate = {
  id: string;
  name: string;
  initials: string;
  role: string;
  company: string;
  stage: Stage;
  statusLabel: string;
  statusTone: "neutral" | "green";
  lastAction: string;
  suggestion: string;
  primary: string;
  secondary?: string;
  flag?: { tone: "warn" | "info"; label: string };
};

const CANDIDATES: PipelineCandidate[] = [
  {
    id: "hiroshi",
    name: "Hiroshi Tanaka",
    initials: "HT",
    role: "Director of Logistics Operations",
    company: "NYK Line",
    stage: "waiting",
    statusLabel: "Sent 3 days ago",
    statusTone: "neutral",
    lastAction: "Outbound message sent via Gmail, no reply yet",
    suggestion:
      "Hiroshi typically replies within 48h based on his LinkedIn activity. Want me to send a soft follow-up tomorrow morning?",
    primary: "Send follow-up",
    secondary: "Skip",
  },
  {
    id: "rajesh",
    name: "Rajesh Krishnan",
    initials: "RK",
    role: "Head of Trade Operations",
    company: "Hapag-Lloyd",
    stage: "waiting",
    statusLabel: "Sent 3 days ago",
    statusTone: "neutral",
    lastAction: "Outbound message sent via Gmail, no reply yet",
    suggestion:
      "No clear reply pattern from Rajesh's activity. I recommend waiting 2 more days before any follow-up.",
    primary: "Acknowledge",
  },
  {
    id: "mei-lin",
    name: "Mei-Lin Chen",
    initials: "MC",
    role: "Senior Supply Chain Manager",
    company: "Maersk",
    stage: "replied",
    statusLabel: "Replied 1 day ago",
    statusTone: "green",
    lastAction: "Replied positively, asked about timeline and remote policy",
    suggestion:
      "Reply draft prepared. It addresses her timeline question with the September target and the hybrid policy from your scoring rubric. Want to review?",
    primary: "Review reply draft",
    secondary: "Reply manually",
    flag: {
      tone: "warn",
      label: "Reminder: Mei-Lin is currently in process at MSC, fast-track",
    },
  },
  {
    id: "sarah",
    name: "Sarah O'Brien",
    initials: "SO",
    role: "Senior Manager, Global Operations",
    company: "DSV",
    stage: "replied",
    statusLabel: "Replied 6 hours ago",
    statusTone: "green",
    lastAction: "Replied, requested a call next week to discuss",
    suggestion:
      "Sarah is available Tuesday, Wednesday, or Friday afternoon based on her Calendar (connector). Want me to draft a meeting invite?",
    primary: "Draft invite",
    secondary: "Reply with availability",
  },
  {
    id: "anne",
    name: "Anne Lefèvre",
    initials: "AL",
    role: "Senior Supply Chain Director",
    company: "Bolloré Logistics",
    stage: "screening",
    statusLabel: "Screening scheduled 2 days ago",
    statusTone: "neutral",
    lastAction:
      "Internal screening scheduled with Sophie Bertrand for next Monday, 2pm",
    suggestion:
      "I prepared a screening prep doc for Sophie with Anne's profile, the scoring against the APAC rubric, and 5 suggested questions based on the kick-off. Want to review before sending?",
    primary: "Review prep doc",
    secondary: "Send to Sophie directly",
    flag: {
      tone: "info",
      label: "Internal candidate — coordinate with current manager",
    },
  },
];

const STAGES: { id: Stage; label: string; emptyCopy?: string }[] = [
  { id: "waiting", label: "Sent, waiting reply" },
  { id: "replied", label: "Replied" },
  { id: "screening", label: "Screening" },
  {
    id: "interview",
    label: "Interview",
    emptyCopy: "No candidates yet at this stage.",
  },
  {
    id: "offer",
    label: "Offer",
    emptyCopy: "No candidates yet at this stage.",
  },
];

const FILTERS = [
  { id: "all", label: "All", count: 5 },
  { id: "waiting", label: "Waiting reply", count: 2 },
  { id: "replied", label: "Replied", count: 2 },
  { id: "screening", label: "Screening", count: 1 },
  { id: "interview", label: "Interview", count: 0 },
  { id: "offer", label: "Offer", count: 0 },
];

export default function PipelinePage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <div className="h-[calc(100dvh-49px)] bg-surface-subtle flex">
      <Sidebar width={260} />
      <div className="flex-1 flex flex-col bg-surface min-w-0">
        {/* Top breadcrumb bar */}
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
            <button
              className="size-7 grid place-items-center rounded-md hover:bg-line-soft hover:text-ink transition-colors"
              aria-label="Share"
            >
              <Share2 className="size-3.5" />
            </button>
            <button
              className="size-7 grid place-items-center rounded-md hover:bg-line-soft hover:text-ink transition-colors"
              aria-label="Settings"
            >
              <Settings2 className="size-3.5" />
            </button>
            <button
              className="size-7 grid place-items-center rounded-md hover:bg-line-soft hover:text-ink transition-colors"
              aria-label="More"
            >
              <MoreHorizontal className="size-3.5" />
            </button>
          </div>
        </div>

        {/* Main scrollable area */}
        <div className="flex-1 overflow-y-auto bg-surface-subtle">
          <div className="max-w-[1200px] mx-auto px-8 py-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-6 mb-6 fade-up fade-up-0">
              <div>
                <h1 className="text-[26px] leading-tight tracking-tight font-semibold text-ink text-balance">
                  Pipeline
                </h1>
                <p className="mt-1.5 text-[14px] text-ink-muted">
                  5 candidates contacted · 3 days since outreach started
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12.5px] text-ink-muted hover:bg-line-soft hover:text-ink active:scale-[0.97] transition-[colors,transform] duration-150">
                  <Settings className="size-3.5" />
                  Configure cadence
                </button>
                <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-[13px] font-medium bg-ink text-white hover:bg-[#2A2420] active:scale-[0.97] transition-[colors,transform] duration-150 shadow-sm">
                  <Sparkles
                    className="size-3.5 text-mistral-orange-yellow"
                    strokeWidth={2.25}
                  />
                  Suggest next actions
                  <ChevronDown className="size-3" />
                </button>
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-1.5 mb-8 fade-up fade-up-1">
              {FILTERS.map((f) => (
                <FilterPill
                  key={f.id}
                  label={f.label}
                  count={f.count}
                  active={activeFilter === f.id}
                  onClick={() => setActiveFilter(f.id)}
                />
              ))}
            </div>

            {/* Sections by stage */}
            <div className="space-y-10">
              {STAGES.map((stage, si) => {
                const cards = CANDIDATES.filter((c) => c.stage === stage.id);
                const hidden =
                  activeFilter !== "all" && activeFilter !== stage.id;
                if (hidden) return null;
                return (
                  <section
                    key={stage.id}
                    className="fade-up"
                    style={{ animationDelay: `${si * 60 + 120}ms` }}
                  >
                    <div className="flex items-baseline justify-between mb-3">
                      <h2 className="text-[11px] uppercase tracking-wider font-medium text-ink-soft">
                        {stage.label} ({cards.length})
                      </h2>
                    </div>
                    {cards.length > 0 ? (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {cards.map((c) => (
                          <PipelineCard key={c.id} candidate={c} />
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-xl border border-dashed border-line bg-surface px-5 py-6 text-[13px] text-ink-soft">
                        {stage.emptyCopy ?? "No candidates yet."}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            {/* Agent cadence footer */}
            <div className="mt-12 rounded-xl border border-line bg-surface p-5 flex items-start gap-3 fade-up fade-up-3">
              <span className="shrink-0 size-8 rounded-md bg-mistral-orange/12 grid place-items-center mt-0.5">
                <Sparkles
                  className="size-4 text-mistral-orange"
                  strokeWidth={2}
                />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-[13.5px] font-semibold text-ink mb-1">
                  Agent cadence
                </h3>
                <p className="text-[13px] text-ink-muted leading-snug">
                  I&rsquo;ll check the pipeline daily and surface follow-ups,
                  response patterns, and risk signals. You can adjust my cadence
                  anytime.
                </p>
              </div>
              <button className="shrink-0 text-[12.5px] text-ink-soft hover:text-ink active:scale-[0.97] transition-[colors,transform] duration-150 underline-offset-4 hover:underline">
                Configure →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterPill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12.5px] font-medium transition-colors active:scale-[0.97] duration-150",
        active
          ? "bg-ink text-white"
          : "text-ink-muted hover:bg-line-soft hover:text-ink"
      )}
    >
      {label}
      <span
        className={cn(
          "text-[11px] tabular-nums",
          active ? "text-white/60" : "text-ink-soft"
        )}
      >
        {count}
      </span>
    </button>
  );
}

function PipelineCard({ candidate }: { candidate: PipelineCandidate }) {
  return (
    <article className="rounded-xl border border-line bg-surface p-5 hover:border-ink-faint transition-colors">
      {/* Header */}
      <header className="flex items-start gap-3">
        <span className="shrink-0 size-9 rounded-lg bg-mistral-cream-warm grid place-items-center text-[12px] font-semibold text-ink">
          {candidate.initials}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-[14px] font-semibold text-ink leading-tight truncate">
            {candidate.name}
          </h3>
          <p className="text-[12px] text-ink-muted truncate leading-snug">
            {candidate.role} · {candidate.company}
          </p>
        </div>
        <StatusChip
          label={candidate.statusLabel}
          tone={candidate.statusTone}
        />
      </header>

      {/* Last action */}
      <div className="mt-3.5 flex items-start gap-2">
        <ActionIcon stage={candidate.stage} />
        <p className="text-[12.5px] text-ink-muted leading-snug">
          {candidate.lastAction}
        </p>
      </div>

      {/* Optional risk/info flag */}
      {candidate.flag && (
        <div
          className={cn(
            "mt-3 inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium",
            candidate.flag.tone === "warn"
              ? "bg-[#FBF1DC] text-[#8A6A04] border border-[#F1D98A]"
              : "bg-surface-sunken text-ink-muted border border-line"
          )}
        >
          <AlertCircle className="size-3" strokeWidth={2.25} />
          {candidate.flag.label}
        </div>
      )}

      {/* Agent suggestion */}
      <div className="mt-4 rounded-lg bg-mistral-orange/[0.04] border border-mistral-orange/15 px-3.5 py-3">
        <div className="flex items-start gap-2">
          <Sparkles
            className="size-3.5 text-mistral-orange shrink-0 mt-0.5"
            strokeWidth={2.25}
          />
          <p className="text-[12.5px] text-ink leading-snug">
            {candidate.suggestion}
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[12.5px] font-medium bg-mistral-orange text-white hover:bg-[#D9461F] active:scale-[0.97] transition-[colors,transform] duration-150 shadow-sm">
            {candidate.primary}
          </button>
          {candidate.secondary && (
            <button className="px-2.5 py-1.5 rounded-md text-[12.5px] text-ink-soft hover:text-ink active:scale-[0.97] transition-[colors,transform] duration-150 underline-offset-4 hover:underline">
              {candidate.secondary}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function StatusChip({
  label,
  tone,
}: {
  label: string;
  tone: "neutral" | "green";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-medium whitespace-nowrap shrink-0",
        tone === "green"
          ? "bg-[#E8F7EE] text-[#16734A]"
          : "bg-surface-sunken text-ink-soft"
      )}
    >
      <Clock className="size-2.5" strokeWidth={2.25} />
      {label}
    </span>
  );
}

function ActionIcon({ stage }: { stage: Stage }) {
  if (stage === "waiting") {
    return (
      <Mail
        className="size-3.5 text-ink-soft shrink-0 mt-0.5"
        strokeWidth={1.75}
      />
    );
  }
  if (stage === "replied") {
    return (
      <Mail
        className="size-3.5 text-[#16A34A] shrink-0 mt-0.5"
        strokeWidth={1.75}
      />
    );
  }
  if (stage === "screening") {
    return (
      <CalendarCheck
        className="size-3.5 text-ink-soft shrink-0 mt-0.5"
        strokeWidth={1.75}
      />
    );
  }
  return (
    <Mail
      className="size-3.5 text-ink-soft shrink-0 mt-0.5"
      strokeWidth={1.75}
    />
  );
}
