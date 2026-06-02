"use client";

import { useState } from "react";
import {
  Plus,
  Mic,
  ChevronDown,
  EyeOff,
  FileText,
  Lightbulb,
  Sparkles,
  XCircle,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RotateCcw,
} from "lucide-react";
import { Sidebar } from "@/components/shortlist/Sidebar";
import { cn } from "@/lib/utils";

type Choice = "current-search" | "talent-pool" | "pass" | null;

export default function QuickScorePage() {
  const [choice, setChoice] = useState<Choice>(null);

  return (
    <div className="h-[calc(100dvh-49px)] bg-[#FAFAF9] flex">
      <Sidebar
        width={260}
        mode="chat"
        activeChat="Quick score - John Doe"
      />

      <div className="flex-1 flex flex-col bg-[#FAFAF9] min-w-0">
        {/* Top bar */}
        <div className="px-8 py-3.5 border-b border-line flex items-center justify-between">
          <div className="flex items-center gap-2 text-[12.5px]">
            <span className="text-ink-soft">Chats</span>
            <span className="text-ink-faint">/</span>
            <span className="text-ink font-medium">Quick score - John Doe</span>
            <span className="ml-3 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-mistral-orange/10 text-mistral-orange text-[11px] font-medium">
              <Lightbulb className="size-3" strokeWidth={2} />
              Skill: score-shortlist
            </span>
          </div>
          <button
            className="size-8 grid place-items-center rounded-md hover:bg-line-soft transition-colors"
            aria-label="Private chat"
          >
            <EyeOff className="size-4 text-ink-soft" />
          </button>
        </div>

        {/* Conversation */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[768px] mx-auto px-6 py-10 flex flex-col gap-8">
            {/* 1. User message with CV attachment */}
            <div className="fade-up">
              <UserBubble
                body="Quick score on this candidate? Came in through Sophie's network last week."
                attachment={{
                  name: "cv_john-doe_supply-chain.pdf",
                  meta: "1.2 MB",
                }}
              />
            </div>

            {/* 2. Agent: scoring card */}
            <div
              className="fade-up"
              style={{ animationDelay: "120ms" }}
            >
              <AgentBubble>
                <ScoreCard />
              </AgentBubble>
            </div>

            {/* 3. Agent follow-up + 3 actions */}
            <div
              className="fade-up"
              style={{ animationDelay: "260ms" }}
            >
              <AgentBubble>
                <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                  Strong general profile but doesn&rsquo;t fully match your
                  current APAC search criteria. Want me to add him to the
                  Senior Supply Chain Manager pipeline as exploratory, keep him
                  in your talent pool for future searches, or pass?
                </p>
                {!choice && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setChoice("current-search")}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-[13px] font-medium bg-mistral-orange text-white hover:bg-[#D9461F] active:scale-[0.97] transition-[colors,transform] duration-150 shadow-sm"
                    >
                      Add to current search (exploratory)
                    </button>
                    <button
                      onClick={() => setChoice("talent-pool")}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-[13px] font-medium bg-surface text-ink border border-line hover:border-ink-faint active:scale-[0.97] transition-[colors,transform] duration-150"
                    >
                      Talent pool only
                    </button>
                    <button
                      onClick={() => setChoice("pass")}
                      className="text-[13px] text-ink-soft hover:text-ink active:scale-[0.97] transition-[colors,transform] duration-150 underline-offset-4 hover:underline px-2"
                    >
                      Pass with note
                    </button>
                  </div>
                )}
              </AgentBubble>
            </div>

            {/* 4. User confirms choice */}
            {choice && (
              <div className="fade-up">
                <UserBubble body={USER_REPLY[choice]} />
              </div>
            )}

            {/* 5. Final agent acknowledgement */}
            {choice && (
              <div
                className="fade-up"
                style={{ animationDelay: "120ms" }}
              >
                <AgentBubble final>
                  <p className="text-[15px] leading-relaxed text-ink text-pretty">
                    {AGENT_REPLY[choice]}
                  </p>
                </AgentBubble>
              </div>
            )}
          </div>
        </div>

        {/* Composer with @score-shortlist banner */}
        <div className="border-t border-line px-8 py-4">
          <div className="max-w-[720px] mx-auto">
            <div className="rounded-[14px] p-[1.5px] bg-[#FA500F]">
              <div className="flex items-center justify-between p-1.5 gap-2">
                <button className="inline-flex items-center h-7 px-2.5 gap-1 rounded-lg hover:bg-white/10 active:scale-[0.97] transition-[colors,transform] duration-150">
                  <span className="text-white text-[13px] font-medium">
                    @score-shortlist
                  </span>
                  <ChevronDown className="size-3.5 text-white" />
                </button>
                <button
                  className="size-6 grid place-items-center rounded-lg hover:bg-white/10 active:scale-[0.97] transition-[colors,transform] duration-150 shrink-0"
                  aria-label="Remove skill"
                >
                  <XCircle className="size-3.5 text-white" strokeWidth={2} />
                </button>
              </div>
              <div className="rounded-[12.5px] overflow-clip bg-white">
                <div className="px-4 pt-3 pb-2 text-[14px] text-ink-soft">
                  Reply or attach another CV…
                </div>
                <div className="px-3 pb-3 flex items-center gap-1">
                  <button
                    className="size-8 grid place-items-center rounded-md hover:bg-line-soft transition-colors text-ink-soft"
                    aria-label="Attach"
                  >
                    <Plus className="size-4" />
                  </button>
                  <div className="ml-auto flex items-center gap-1.5">
                    <button className="inline-flex items-center gap-1 px-2.5 h-8 rounded-md hover:bg-line-soft transition-colors text-[12.5px] text-ink-muted">
                      Fast
                      <ChevronDown className="size-3" />
                    </button>
                    <button
                      className="size-8 grid place-items-center rounded-md bg-ink text-white"
                      aria-label="Voice"
                    >
                      <Mic className="size-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const USER_REPLY: Record<Exclude<Choice, null>, string> = {
  "current-search": "Add him to the current search as exploratory.",
  "talent-pool":
    "Talent pool only for now. Sophie will appreciate the follow-up.",
  pass: "Pass for now. Note that the fit isn't there for this search.",
};

const AGENT_REPLY: Record<Exclude<Choice, null>, string> = {
  "current-search":
    "Done. Added John Doe to the Senior Supply Chain Manager APAC search with an exploratory tag. He'll appear in your shortlist with a note explaining the lower match score.",
  "talent-pool":
    'Done. Added to your talent pool with the note "Referred by Sophie Bertrand, exploratory for APAC future searches." I\'ll surface him in your next search if relevant.',
  pass:
    "Done. Logged as a pass on this search with your note. I’ll keep him out of the next APAC search unless his profile shifts.",
};

function AgentBubble({
  children,
  final,
}: {
  children: React.ReactNode;
  final?: boolean;
}) {
  return (
    <div className="group flex w-full gap-3">
      <div className="shrink-0">
        <ScoreShortlistIcon />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[16px] leading-[150%] text-[#14110F] text-pretty">
          {children}
        </div>
        <AgentToolbar />
      </div>
      <div className="shrink-0 w-7" />
    </div>
  );
}

function UserBubble({
  body,
  attachment,
}: {
  body: string;
  attachment?: { name: string; meta: string };
}) {
  return (
    <div className="flex w-full">
      <div className="ml-auto max-w-full flex flex-col items-end gap-2">
        {attachment && (
          <span className="inline-flex items-center gap-2 pl-2 pr-2.5 py-1.5 rounded-md bg-surface border border-line shadow-sm">
            <FileText
              className="size-3.5 text-[#DC2626]"
              strokeWidth={1.75}
            />
            <span className="flex flex-col min-w-0 leading-tight">
              <span className="text-[12px] font-medium text-ink truncate">
                {attachment.name}
              </span>
              <span className="text-[10.5px] text-ink-soft truncate">
                {attachment.meta}
              </span>
            </span>
          </span>
        )}
        <div className="rounded-3xl bg-[#27272A0A] py-2.5 px-5">
          <div className="text-[16px] leading-[150%] text-[#14110F] text-pretty">
            {body}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreShortlistIcon() {
  return (
    <span className="size-7 grid place-items-center rounded-lg bg-mistral-orange">
      <Lightbulb className="size-4 text-white" strokeWidth={2.25} />
    </span>
  );
}

function AgentToolbar() {
  return (
    <div className="mt-2 flex items-center justify-between min-h-8 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="flex items-center gap-1">
        <ToolbarBtn label="Helpful">
          <ThumbsUp className="size-4" strokeWidth={1.75} />
        </ToolbarBtn>
        <ToolbarBtn label="Not helpful">
          <ThumbsDown className="size-4" strokeWidth={1.75} />
        </ToolbarBtn>
        <ToolbarBtn label="Copy">
          <Copy className="size-4" strokeWidth={1.75} />
        </ToolbarBtn>
        <ToolbarBtn label="Regenerate">
          <RotateCcw className="size-4" strokeWidth={1.75} />
        </ToolbarBtn>
      </div>
      <span className="text-[12px] text-[#27272A66]">Jun 3, 9:14am</span>
    </div>
  );
}

function ToolbarBtn({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      aria-label={label}
      className="size-8 grid place-items-center rounded-lg text-[#14110F] hover:bg-[#27272A0A] transition-colors"
    >
      {children}
    </button>
  );
}

function ScoreCard() {
  const score = 76;
  return (
    <div className="rounded-xl border border-line bg-surface p-5 max-w-full">
      {/* Header */}
      <div className="flex items-baseline justify-between gap-3 mb-4">
        <div className="min-w-0">
          <h3 className="text-[15px] font-semibold text-ink leading-tight">
            John Doe
          </h3>
          <p className="text-[12.5px] text-ink-muted leading-snug truncate">
            Senior Logistics Director · ex-Geodis
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 text-[10.5px] text-ink-soft shrink-0">
          <Sparkles className="size-3 text-mistral-orange" strokeWidth={2} />
          Scored vs APAC rubric
        </div>
      </div>

      {/* Score */}
      <div className="flex items-end justify-between gap-4 mb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-[32px] font-semibold text-ink leading-none tabular-nums">
            {score}
          </span>
          <span className="text-[14px] text-ink-soft tabular-nums">/100</span>
        </div>
        <div className="flex-1 max-w-[260px]">
          <div className="h-2 rounded-full bg-line overflow-hidden">
            <div
              className="h-full rounded-full bg-mistral-orange transition-[width] duration-300"
              style={{ width: `${score}%` }}
            />
          </div>
          <p className="mt-1 text-[10.5px] text-ink-soft uppercase tracking-wider">
            Good match · below APAC threshold
          </p>
        </div>
      </div>

      {/* Strong match on */}
      <ReasonGroup
        label="Strong match on"
        color="green"
        items={[
          "11 years in international freight forwarding (Geodis, Bolloré earlier in career)",
          "Multi-modal expertise (sea, air, road)",
          "French / English / Spanish trilingual",
        ]}
      />

      {/* Potential gaps */}
      <ReasonGroup
        label="Potential gaps"
        color="amber"
        className="mt-3"
        items={[
          "Limited container shipping specialization (more freight forwarding background)",
          "No direct APAC operational experience (Europe and Latam focused)",
        ]}
      />

      {/* Against rubric line */}
      <p className="mt-4 pt-3 border-t border-line text-[11.5px] text-ink-soft leading-snug">
        Against your APAC rubric: below threshold on regional expertise
        (priority 1) and shipping line operations (priority 2).
      </p>
    </div>
  );
}

function ReasonGroup({
  label,
  items,
  color,
  className,
}: {
  label: string;
  items: string[];
  color: "green" | "amber";
  className?: string;
}) {
  const dot = color === "green" ? "bg-[#16A34A]" : "bg-[#D97706]";
  const text = color === "green" ? "text-[#16734A]" : "text-[#8A6A04]";
  return (
    <div className={className}>
      <p
        className={cn(
          "text-[10.5px] uppercase tracking-wider font-medium mb-2",
          text
        )}
      >
        {label}
      </p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2 text-[13px] leading-snug text-ink-muted"
          >
            <span
              className={cn("mt-[6px] size-1.5 rounded-full shrink-0", dot)}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
