"use client";

import {
  Suspense,
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useTransition,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Plus,
  Mic,
  ChevronDown,
  ArrowRight,
  ArrowDown,
  Box,
  Code2,
  GripVertical,
  FileText,
  FileSpreadsheet,
  XCircle,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RotateCcw,
  Star,
  Upload,
  Briefcase,
  Check,
} from "lucide-react";
import { Sidebar } from "@/components/shortlist/Sidebar";
import { TextShimmer } from "@/components/ui/TextShimmer";
import { ReasoningChain } from "@/components/vibe/ReasoningChain";
import { cn } from "@/lib/utils";

type Attachment = {
  name: string;
  kind: "pdf" | "xlsx" | "docx";
  meta: string;
};

type Msg =
  | {
      from: "agent";
      body: string;
      final?: boolean;
      archetypes?: boolean;
      reasoning?: boolean;
      result?: boolean;
    }
  | { from: "user"; body: string; attachments?: Attachment[] };

const CONVERSATION: Msg[] = [
  {
    from: "user",
    body: "Starting a new search: Senior Supply Chain Manager APAC. Context attached from yesterday's kick-off with Sophie.",
    attachments: [
      {
        name: "kick-off_sophie-bertrand.pdf",
        kind: "pdf",
        meta: "Transcript · 18 min",
      },
      {
        name: "scoring_rubric.xlsx",
        kind: "xlsx",
        meta: "Sheet · 12 criteria",
      },
      {
        name: "JD_draft_v2.docx",
        kind: "docx",
        meta: "Doc · 2 pages",
      },
    ],
  },
  {
    from: "agent",
    body: "Got the context. Sophie's priorities from the kick-off: 8+ years in container shipping or maritime logistics, APAC regional expertise, fluency in at least one APAC language plus English. From the rejection patterns in your notes, I'll flag candidates from pure ops backgrounds (stakeholder management risk) and candidates without direct CMA CGM customer exposure (ramp-up risk).\n\nOne thing before I start: the JD mentions “managing distributed teams across timezones” but the kick-off doesn't elaborate. Is this a critical requirement or nice-to-have?",
  },
  {
    from: "user",
    body: "Critical. She has 8 reports across Singapore, Hong Kong, and Marseille. Anyone struggling with async work will fail.",
  },
  {
    from: "agent",
    body: "Before I start sourcing, here are 4 candidate archetypes that match this role. Tell me which to prioritize.",
    archetypes: true,
  },
  {
    from: "user",
    body: "Confirm order",
  },
  {
    from: "agent",
    body: "All set. I'll start in your Workday talent pool, then complement with ex-Maersk/MSC operators on LinkedIn. Secondary focus on digital transformation and industrial crossovers. This usually takes a few minutes.",
    final: true,
  },
  // Right-aligned user confirmation appears when Create as Task is clicked.
  { from: "user", body: "Create as Task" },
  // The agent's reply renders its reasoning chain first, then the body and
  // the Open Task button, all under a single agent avatar.
  {
    from: "agent",
    body:
      "Twelve candidates ready. Anne, Marc, and Priya are your strongest picks. Already cleared compliance, fluent across APAC, matched on every must-have. Open Task to dig in.",
    reasoning: true,
    result: true,
  },
];

const REASONING_STEPS = [
  {
    label: "Reading kick-off context",
    detail: [
      "Extracted 12 hiring criteria from Sophie's transcript",
      "Identified 3 critical must-haves: APAC presence, async fluency, language match",
    ],
  },
  {
    label: "Scanning your Workday talent pool",
    detail: [
      "3,847 profiles in CMA CGM Group",
      "312 candidates matched the role profile",
      "8 past applicants from previous senior searches",
    ],
  },
  {
    label: "Cross-referencing competitor pools",
    detail: [
      "Bolloré Logistics: 47 matches",
      "Maersk / MSC / Hapag-Lloyd: 89 matches",
      "ONE / NYK / K Line: 31 matches",
    ],
  },
  {
    label: "Scoring against Sophie's 12 criteria",
    detail: [
      "312 profiles reviewed",
      "89 above threshold (≥7/12)",
      "12 strong matches (≥10/12)",
    ],
  },
  {
    label: "Ranking by interview readiness",
    detail: [
      "Compliance pre-cleared: 8 candidates",
      "Language match: 11 candidates",
      "Sophie's top 3 picks identified",
    ],
  },
];

type Archetype = {
  id: string;
  index: number;
  title: string;
  profile: string;
  signal: string;
  pool: number;
  tag?: string;
};

const ARCHETYPES: Archetype[] = [
  {
    id: "internal-cma",
    index: 1,
    title: "Internal mobility, CMA CGM Group",
    profile: "Past applicants, interviewers, opt-ins across CMA CGM, CEVA, Bolloré integration",
    signal:
      "Already known, already cleared compliance, knows SAP TM and Workday",
    pool: 312,
    tag: "Internal pool",
  },
  {
    id: "apac-shipping",
    index: 2,
    title: "APAC shipping line operators",
    profile: "Senior managers from Maersk, MSC, Hapag-Lloyd, ONE",
    signal:
      "Direct competitor experience, regional expertise, language fluency",
    pool: 180,
  },
  {
    id: "digital",
    index: 3,
    title: "Digital transformation backgrounds",
    profile:
      "Operations leaders who led ATS/ERP rollouts at NYK, K Line, Yang Ming",
    signal: "Matches your APAC digitalization priority",
    pool: 95,
  },
  {
    id: "industrial",
    index: 4,
    title: "Industrial supply chain crossovers",
    profile:
      "Senior supply chain managers from L'Oréal, Saint-Gobain, Schneider Electric",
    signal:
      "Strong process discipline, ramp-up needed on maritime specifics",
    pool: 340,
  },
];

const DEFAULT_WEIGHTS: Record<string, number> = {
  "internal-cma": 3,
  "apac-shipping": 3,
  digital: 2,
  industrial: 2,
};

export default function BriefPage() {
  return (
    <Suspense
      fallback={
        <div className="h-[100dvh] bg-[#FAFAF9]" aria-hidden />
      }
    >
      <BriefPageInner />
    </Suspense>
  );
}

function BriefPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isReplay = searchParams.get("state") === "complete";
  const [, startTransition] = useTransition();

  // Prefetch the shortlist route on mount, by the time Open Task or the
  // header Briefcase is clicked, the JS chunks are already warm.
  useEffect(() => {
    router.prefetch("/sandbox/shortlist");
  }, [router]);

  const goShortlist = () =>
    startTransition(() => {
      router.push("/sandbox/shortlist");
    });
  const [order, setOrder] = useState<string[]>(
    ARCHETYPES.map((a) => a.id)
  );
  const [visibleCount, setVisibleCount] = useState(
    isReplay ? CONVERSATION.length : 1
  );
  const [thinking, setThinking] = useState(false);
  // The result message contains a reasoning chain that gates its body.
  // We track here whether the chain has finished, so the body + Open Task
  // button only appear after the reasoning collapses.
  const [reasoningDone, setReasoningDone] = useState(isReplay);

  // Progressive reveal. Auto-stream agent replies (with a thinking loader).
  // Stop and wait for the user to manually trigger the next user message.
  useEffect(() => {
    if (visibleCount >= CONVERSATION.length) return;
    const next = CONVERSATION[visibleCount];
    if (next.from === "user") return; // wait for manual trigger

    const lastShown = CONVERSATION[visibleCount - 1];
    // Stop after the "All set" final message, wait for Create as Task click.
    if (lastShown && lastShown.from === "agent" && lastShown.final) return;
    const isLastUser = lastShown.from === "user";

    if (isLastUser) {
      const showLoader = setTimeout(() => setThinking(true), 350);
      const revealAgent = setTimeout(() => {
        setThinking(false);
        setVisibleCount((c) => c + 1);
      }, 3200);
      return () => {
        clearTimeout(showLoader);
        clearTimeout(revealAgent);
      };
    }
    // Agent-to-agent: short beat, no thinking loader
    const followUp = setTimeout(() => setVisibleCount((c) => c + 1), 900);
    return () => clearTimeout(followUp);
  }, [visibleCount]);

  const startSourcing = () => {
    stickToBottomRef.current = true;
    setVisibleCount((c) => c + 1);
  };

  const [composerValue, setComposerValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollDown, setShowScrollDown] = useState(false);
  // Stick-to-bottom: tracks whether the user is at/near the bottom.
  // While true, new content auto-scrolls. While false (user scrolled up),
  // new content does NOT yank them down, show the floating pill instead.
  const stickToBottomRef = useRef(true);
  const STICK_THRESHOLD = 80;

  // Distance from the viewport's bottom edge to the actual last message's
  // bottom, ignoring the bottom spacer that pads the scroll area for the
  // scroll-to-top trick.
  const computeContentDist = (el: HTMLDivElement): number => {
    const lastIdx = visibleCount - 1;
    const last = el.querySelector(
      `[data-msg-index="${lastIdx}"]`
    ) as HTMLElement | null;
    if (!last) return el.scrollHeight - el.scrollTop - el.clientHeight;
    const containerTop = el.getBoundingClientRect().top;
    const lastBottomInDoc =
      last.getBoundingClientRect().bottom - containerTop + el.scrollTop;
    const viewportBottom = el.scrollTop + el.clientHeight;
    return lastBottomInDoc - viewportBottom;
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const dist = computeContentDist(el);
      stickToBottomRef.current = dist <= STICK_THRESHOLD;
      setShowScrollDown(dist > STICK_THRESHOLD);
    };
    onScroll();
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount]);

  // ChatGPT/Claude pattern: scroll happens ONLY when the user sends a
  // message. The user's message lands at the top of the viewport, freeing
  // the rest of the screen for the thinking state + agent response that
  // stream in below, no re-scrolling on each agent reveal, no cropping.
  // Agent reveals only update the down-arrow state.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const latest = CONVERSATION[visibleCount - 1];
    const justSent = latest && latest.from === "user";

    if (justSent && stickToBottomRef.current) {
      const node = el.querySelector(
        `[data-msg-index="${visibleCount - 1}"]`
      ) as HTMLElement | null;
      if (node) {
        const containerTop = el.getBoundingClientRect().top;
        const itemTop = node.getBoundingClientRect().top;
        const offset = itemTop - containerTop + el.scrollTop - 24;
        el.scrollTo({ top: offset, behavior: "smooth" });
      } else {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      }
      const t = setTimeout(() => {
        const dist = computeContentDist(el);
        setShowScrollDown(dist > STICK_THRESHOLD);
      }, 450);
      return () => clearTimeout(t);
    }
    const dist = computeContentDist(el);
    setShowScrollDown(dist > STICK_THRESHOLD);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount, thinking]);

  // When arriving in replay mode (from Open chat), jump to the bottom
  // synchronously, before the browser paints, no visible scroll.
  useLayoutEffect(() => {
    if (!isReplay) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [isReplay]);

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll to the last real message's bottom, not into the spacer.
    const last = el.querySelector(
      `[data-msg-index="${visibleCount - 1}"]`
    ) as HTMLElement | null;
    if (last) {
      const containerTop = el.getBoundingClientRect().top;
      const lastBottomInDoc =
        last.getBoundingClientRect().bottom - containerTop + el.scrollTop;
      const target = Math.max(0, lastBottomInDoc - el.clientHeight + 24);
      el.scrollTo({ top: target, behavior: "smooth" });
    } else {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  };

  const sendNext = () => {
    if (visibleCount >= CONVERSATION.length) return;
    if (CONVERSATION[visibleCount].from !== "user") return;
    // Force stick-to-bottom on send: the user explicitly engaged.
    stickToBottomRef.current = true;
    setVisibleCount((c) => c + 1);
    setComposerValue("");
  };


  return (
    <div className="h-[100dvh] bg-surface flex">
      <Sidebar
        width={260}
        mode="chat"
        activeChat="Senior Supply Chain Manager search"
      />

      <div className="flex-1 flex flex-col bg-surface min-w-0">
        {/* Top bar, ported from Paper */}
        <div className="flex items-center justify-between bg-[#FAFAF9] pt-5 pr-3 pb-3 pl-1 gap-4">
          <button className="inline-flex items-center h-9 max-w-xl min-w-0 rounded-lg px-3 gap-1.5 hover:bg-[#27272A0A] transition-colors">
            <span className="text-[14px] text-[#14110F] truncate" style={{ fontWeight: 450 }}>
              Senior Supply Chain Manager search
            </span>
            <ChevronDown className="size-4 text-[#14110F] shrink-0" strokeWidth={2} />
          </button>
          <div className="flex items-center gap-1">
            <button
              className="size-9 grid place-items-center rounded-lg hover:bg-[#27272A0A] transition-colors"
              aria-label="Star chat"
            >
              <Star className="size-[18px] text-[#79716B]" strokeWidth={2} />
            </button>
            <button
              className="size-9 grid place-items-center rounded-lg hover:bg-[#27272A0A] transition-colors"
              aria-label="Share chat"
            >
              <Upload className="size-4 text-[#79716B]" strokeWidth={2} />
            </button>
            {isReplay && (
              <>
                <span className="h-5 w-px bg-[#ECECEC] mx-2" aria-hidden />
                <button
                  onClick={goShortlist}
                  className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg bg-[#27272A0F] text-[14px] text-[#14110F] font-medium hover:bg-[#27272A14] active:scale-[0.97] transition-[colors,transform] duration-150"
                >
                  <Briefcase className="size-4 text-[#14110F]" strokeWidth={2} />
                  Open Task
                </button>
              </>
            )}
          </div>
        </div>

        {/* Conversation */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto bg-[#FAFAF9]">
          <div className="max-w-[768px] mx-auto px-6 py-10 flex flex-col gap-12">
            {CONVERSATION.slice(0, visibleCount).map((m, i) => {
              return (
                <div
                  key={i}
                  data-msg-index={i}
                  className={isReplay ? "" : "fade-up"}
                >
                  {m.from === "agent" ? (
                    <AgentMessage
                      body={m.body}
                      final={m.final}
                      instant={isReplay}
                      bodyVisible={!m.reasoning || reasoningDone}
                      reasoningSlot={
                        m.reasoning ? (
                          <ReasoningChain
                            steps={REASONING_STEPS}
                            instant={isReplay}
                            onComplete={() => setReasoningDone(true)}
                          />
                        ) : null
                      }
                    >
                      {m.archetypes && (
                        <div className="mt-4">
                          <ArchetypeCards
                            order={order}
                            onReorder={setOrder}
                            onSubmit={sendNext}
                            confirmed={visibleCount > i + 1}
                          />
                        </div>
                      )}
                      {m.final && (
                        <div className="mt-4">
                          <button
                            onClick={startSourcing}
                            disabled={visibleCount > i + 1}
                            className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg bg-[#FA500F] text-white text-[14px] font-medium shadow-[inset_0_-1.5px_0_rgba(0,0,0,0.08)] hover:bg-[#FC783B] disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.97] transition-[colors,transform] duration-150"
                          >
                            Create as Task
                          </button>
                        </div>
                      )}
                      {m.result && reasoningDone && (
                        <div className="mt-4">
                          <button
                            onClick={goShortlist}
                            className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg bg-[#FA500F] text-white text-[14px] font-medium shadow-[inset_0_-1.5px_0_rgba(0,0,0,0.08)] hover:bg-[#FC783B] active:scale-[0.97] transition-[colors,transform] duration-150"
                          >
                            <Briefcase className="size-4 text-white" strokeWidth={2} />
                            Open Task
                          </button>
                        </div>
                      )}
                    </AgentMessage>
                  ) : (
                    <UserMessage body={m.body} attachments={m.attachments} />
                  )}
                </div>
              );
            })}

            {thinking && (
              <div className="fade-up">
                <ThinkingLoader />
              </div>
            )}
            {/* ChatGPT trick: a tall bottom spacer ensures the page is always
                taller than the viewport, so the user message can be scrolled
                to the very top, leaving room below for the agent response
                to stream in without cropping. Shrinks visually when the
                conversation is long enough to fill the screen on its own. */}
            <div className="min-h-[calc(100dvh-260px)]" aria-hidden />
          </div>
        </div>

        {/* Composer with @Recruiting Agent banner */}
        <div className="relative px-8 py-4 bg-[#FAFAF9]">
          {showScrollDown && (
            <button
              onClick={scrollToBottom}
              aria-label="Scroll to latest"
              className="absolute left-1/2 -translate-x-1/2 -top-5 size-9 grid place-items-center rounded-full bg-white border border-[#27272A19] shadow-[0_4px_12px_-2px_rgba(15,23,42,0.12),0_2px_4px_rgba(15,23,42,0.06)] text-[#14110F] hover:bg-[#FAFAF9] active:scale-[0.97] transition-[colors,transform] duration-150 z-10"
            >
              <ArrowDown className="size-4" strokeWidth={2} />
            </button>
          )}
          <div className="max-w-[720px] mx-auto">
            <div className="rounded-[14px] p-[1.5px] bg-[#FA500F]">
              <div className="flex items-center justify-between p-1.5 gap-2">
                <button className="inline-flex items-center h-7 px-2.5 gap-1 rounded-lg hover:bg-white/10 active:scale-[0.97] transition-[colors,transform] duration-150">
                  <span className="text-white text-[13px] font-medium">
                    @Recruiting Agent
                  </span>
                  <ChevronDown className="size-3.5 text-white" />
                </button>
                <button
                  className="size-6 grid place-items-center rounded-lg hover:bg-white/10 active:scale-[0.97] transition-[colors,transform] duration-150 shrink-0"
                  aria-label="Remove agent"
                >
                  <XCircle className="size-3.5 text-white" strokeWidth={2} />
                </button>
              </div>
              <div className="rounded-[12.5px] overflow-clip bg-white border border-[#27272A19] shadow-[0_1px_2px_rgba(15,23,42,0.08),0_6px_14px_-8px_rgba(15,23,42,0.08)]">
                <div className="flex flex-col p-3 gap-3 bg-white">
                  <div className="px-0.5">
                    <textarea
                      value={composerValue}
                      onChange={(e) => setComposerValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          sendNext();
                        }
                      }}
                      rows={1}
                      placeholder="Type / for quick access"
                      aria-label="Reply to Recruiting Agent"
                      className="w-full resize-none bg-transparent text-[16px] leading-[150%] text-[#14110F] placeholder:text-[#14110F]/50 outline-none border-none focus:outline-none focus:ring-0 min-h-6"
                    />
                  </div>
                  <div className="flex items-center w-full gap-2 h-9">
                    <button
                      className="size-8 grid place-items-center rounded-lg bg-white border-[0.5px] border-[#27272A26] hover:bg-[#27272A0A] active:scale-[0.97] transition-[colors,transform] duration-150 text-[#57534D]"
                      aria-label="Attach"
                    >
                      <Plus className="size-4" />
                    </button>
                    <div className="flex grow gap-2">
                      <button className="inline-flex items-center h-8 px-2.5 gap-1.5 rounded-md bg-white border border-[#27272A19] hover:bg-[#27272A0A] active:scale-[0.97] transition-[colors,transform] duration-150">
                        <Box className="size-4 text-[#57534D]" />
                        <span className="text-[14px] font-medium text-[#14110F] leading-none">
                          1/4
                        </span>
                      </button>
                      <button
                        className="inline-flex items-center h-8 px-2.5 gap-1.5 rounded-md bg-white border border-[#27272A19] hover:bg-[#27272A0A] active:scale-[0.97] transition-[colors,transform] duration-150"
                        aria-label="GitHub"
                      >
                        <Code2 className="size-4 text-[#57534D]" />
                      </button>
                    </div>
                    <button className="inline-flex items-center h-8 px-2.5 gap-1 rounded-lg hover:bg-[#27272A0A] active:scale-[0.97] transition-[colors,transform] duration-150">
                      <span className="text-[14px] font-medium text-[#79716B] leading-none">
                        Fast
                      </span>
                      <ChevronDown className="size-4 text-[#57534D]" />
                    </button>
                    <button
                      className="size-8 grid place-items-center rounded-lg bg-[#27272A0F] hover:bg-[#27272A1A] active:scale-[0.97] transition-[colors,transform] duration-150"
                      aria-label="Voice"
                    >
                      <Mic className="size-4 text-[#57534D]" />
                    </button>
                    {composerValue.trim().length > 0 && (
                      <button
                        onClick={sendNext}
                        className="size-8 grid place-items-center rounded-lg bg-[#14110F] hover:bg-[#2A2420] active:scale-[0.97] transition-[colors,transform] duration-150 shadow-[inset_0_-1.5px_0_rgba(0,0,0,0.08)]"
                        aria-label="Send"
                      >
                        <SendPixelArrow />
                      </button>
                    )}
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

// Matrix loader from loaders.wtf, ported to React, adapted to light mode.
const MATRIX_FRAMES: number[][][] = [
  [[1,0,0,0,0],[0.86,0,0,0,0],[0.72,0,0,0,0],[0.58,0,0,0,0],[0.44,0,0,0,0]],
  [[0.86,1,0,0,0],[0.72,0,0,0,0],[0.58,0,0,0,0],[0.44,0,0,0,0],[0,0,0,0,0]],
  [[0.72,0.86,1,0,0],[0.58,0,0,0,0],[0.44,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
  [[0.58,0.72,0.86,1,0],[0.44,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
  [[0.44,0.58,0.72,0.86,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
  [[0,0.44,0.58,0.72,0.86],[0,0,0,0,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
  [[0,0,0.44,0.58,0.72],[0,0,0,0,0.86],[0,0,0,0,1],[0,0,0,0,0],[0,0,0,0,0]],
  [[0,0,0,0.44,0.58],[0,0,0,0,0.72],[0,0,0,0,0.86],[0,0,0,0,1],[0,0,0,0,0]],
  [[0,0,0,0,0.44],[0,0,0,0,0.58],[0,0,0,0,0.72],[0,0,0,0,0.86],[0,0,0,0,1]],
  [[0,0,0,0,0],[0,0,0,0,0.44],[0,0,0,0,0.58],[0,0,0,0,0.72],[0,0,0,1,0.86]],
  [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0.44],[0,0,0,0,0.58],[0,0,1,0.86,0.72]],
  [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0.44],[0,1,0.86,0.72,0.58]],
  [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,0.86,0.72,0.58,0.44]],
  [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,0],[0.86,0.72,0.58,0.44,0]],
  [[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,0],[0.86,0,0,0,0],[0.72,0.58,0.44,0,0]],
  [[0,0,0,0,0],[1,0,0,0,0],[0.86,0,0,0,0],[0.72,0,0,0,0],[0.58,0.44,0,0,0]],
];

function MatrixLoader() {
  const [frame, setFrame] = useState(0);
  const gridSize = 5;
  const cellSize = 4;
  const gap = 1;
  const total = gridSize * cellSize + (gridSize - 1) * gap;
  const onColor = "#FA500F";
  const offColor = "#F1EDE8";

  useEffect(() => {
    const fps = 12;
    const frameMs = 1000 / fps;
    let lastAdvance = performance.now();
    let raf: number;
    const tick = (now: number) => {
      if (now - lastAdvance >= frameMs) {
        lastAdvance = now - ((now - lastAdvance) % frameMs);
        setFrame((f) => (f + 1) % MATRIX_FRAMES.length);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const data = MATRIX_FRAMES[frame];
  const cells = [];
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const x = c * (cellSize + gap);
      const y = r * (cellSize + gap);
      cells.push({ x, y, opacity: data[r][c], key: `${r}-${c}` });
    }
  }

  return (
    <svg
      width={total}
      height={total}
      viewBox={`0 0 ${total} ${total}`}
      role="status"
      aria-label="Recruiting Agent is thinking"
    >
      {/* off layer */}
      {cells.map((cell) => (
        <rect
          key={`off-${cell.key}`}
          x={cell.x}
          y={cell.y}
          width={cellSize}
          height={cellSize}
          rx={1}
          fill={offColor}
        />
      ))}
      {/* on layer */}
      {cells.map((cell) => (
        <rect
          key={`on-${cell.key}`}
          x={cell.x}
          y={cell.y}
          width={cellSize}
          height={cellSize}
          rx={1}
          fill={onColor}
          opacity={cell.opacity}
        />
      ))}
    </svg>
  );
}

function SendPixelArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#FFFFFF"
      style={{ transform: "rotate(-90deg)" }}
      aria-hidden="true"
    >
      <path
        fill="#FFFFFF"
        d="M12 18v4h4v-4h-4ZM16 14v4h4v-4h-4ZM20 10v4h4v-4h-4ZM16 6v4h4V6h-4ZM12 2v4h4V2h-4ZM12 10v4h4v-4h-4ZM8 10v4h4v-4H8ZM4 10v4h4v-4H4ZM0 10v4h4v-4H0Z"
      />
    </svg>
  );
}

function ThinkingLoader() {
  return (
    <div className="inline-flex items-center gap-2 pl-1">
      <MatrixLoader />
      <TextShimmer className="text-[14px]" duration={1.6}>
        Thinking…
      </TextShimmer>
    </div>
  );
}

function AgentMessage({
  body,
  final,
  instant,
  children,
  reasoningSlot,
  bodyVisible = true,
}: {
  body: string;
  final?: boolean;
  instant?: boolean;
  children?: React.ReactNode;
  reasoningSlot?: React.ReactNode;
  bodyVisible?: boolean;
}) {
  const [bodyDone, setBodyDone] = useState(!!instant);
  return (
    <div className="group relative flex w-full gap-3">
      <div className="shrink-0">
        <RecruitingIcon />
      </div>
      <div className="flex-1 min-w-0">
        {reasoningSlot}
        {bodyVisible && (
          <div className={reasoningSlot ? "mt-3" : undefined}>
            <StreamingBody
              text={body}
              instant={instant}
              onDone={() => setBodyDone(true)}
            />
            {/* Children (archetype cards, action buttons) only appear after
                the body has finished streaming, keeps the order natural. */}
            {bodyDone && <div className="fade-up">{children}</div>}
          </div>
        )}
      </div>
      <div className="shrink-0 w-7" />
      <AgentToolbar />
    </div>
  );
}

function StreamingBody({
  text,
  instant,
  onDone,
}: {
  text: string;
  instant?: boolean;
  onDone?: () => void;
}) {
  const words = useMemo(() => text.split(/(\s+)/), [text]);
  const [shown, setShown] = useState(instant ? words.length : 0);

  useEffect(() => {
    if (instant) {
      setShown(words.length);
      onDone?.();
      return;
    }
    setShown(0);
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= words.length) {
        clearInterval(interval);
        onDone?.();
      }
    }, 10);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, instant]);

  return (
    <div className="text-[16px] leading-[150%] text-[#14110F] text-pretty whitespace-pre-line">
      {words.slice(0, shown).map((w, i) => (
        <span key={i} className="streaming-word">
          {w}
        </span>
      ))}
    </div>
  );
}

function UserMessage({
  body,
  attachments,
}: {
  body: string;
  attachments?: Attachment[];
}) {
  return (
    <div className="flex w-full">
      <div className="ml-auto max-w-full flex flex-col items-end gap-2">
        {attachments && attachments.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-end">
            {attachments.map((a) => (
              <FileChip key={a.name} attachment={a} />
            ))}
          </div>
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

function RecruitingIcon() {
  // Briefcase pixel-art in a rounded box, matches the AGENTS slash menu icon
  return (
    <span className="size-8 grid place-items-center rounded-lg overflow-clip bg-[#F1EDE8]">
      <svg
        width="28"
        height="28"
        viewBox="0 0 14 14"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        <rect x="5" y="1" width="4" height="1" fill="#4A2C0A" />
        <rect x="4" y="2" width="1" height="1" fill="#4A2C0A" />
        <rect x="9" y="2" width="1" height="1" fill="#4A2C0A" />
        <rect x="4" y="3" width="1" height="1" fill="#4A2C0A" />
        <rect x="9" y="3" width="1" height="1" fill="#4A2C0A" />
        <rect x="1" y="3" width="12" height="1" fill="#4A2C0A" />
        <rect x="0" y="4" width="1" height="9" fill="#4A2C0A" />
        <rect x="13" y="4" width="1" height="9" fill="#4A2C0A" />
        <rect x="1" y="13" width="12" height="1" fill="#4A2C0A" />
        <rect x="1" y="4" width="12" height="9" fill="#8B3D1E" />
        <rect x="1" y="7" width="12" height="1" fill="#FFD700" />
        <rect x="6" y="6" width="2" height="1" fill="#FFD700" />
        <rect x="6" y="8" width="2" height="1" fill="#FFD700" />
        <rect x="4" y="9" width="1" height="1" fill="#FFAF00" />
        <rect x="9" y="9" width="1" height="1" fill="#FFAF00" />
        <rect x="4" y="10" width="2" height="1" fill="#FA500F" />
        <rect x="8" y="10" width="2" height="1" fill="#FA500F" />
        <rect x="4" y="11" width="6" height="1" fill="#E10500" />
        <rect x="4" y="12" width="1" height="1" fill="#E10500" />
        <rect x="6" y="12" width="1" height="1" fill="#E10500" />
        <rect x="9" y="12" width="1" height="1" fill="#E10500" />
      </svg>
    </span>
  );
}

function AgentToolbar() {
  return (
    <div className="absolute left-11 right-7 -bottom-10 flex items-center justify-between pointer-events-none opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-[opacity,transform] duration-150 ease-out">
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

function FileChip({ attachment }: { attachment: Attachment }) {
  const icon =
    attachment.kind === "xlsx" ? (
      <FileSpreadsheet className="size-3.5 text-[#16A34A]" strokeWidth={1.75} />
    ) : (
      <FileText
        className={cn(
          "size-4",
          attachment.kind === "pdf" ? "text-[#DC2626]" : "text-[#2563EB]"
        )}
        strokeWidth={1.75}
      />
    );
  return (
    <span className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-surface border border-line max-w-full">
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col min-w-0 gap-0.5">
        <span className="text-[13px] leading-tight font-medium text-ink truncate">
          {attachment.name}
        </span>
        <span className="text-[12px] leading-tight text-ink-soft truncate">
          {attachment.meta}
        </span>
      </span>
    </span>
  );
}

function ArchetypeCards({
  order,
  onReorder,
  onSubmit,
  confirmed,
}: {
  order: string[];
  onReorder: (next: string[]) => void;
  onSubmit: () => void;
  confirmed?: boolean;
}) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = order.indexOf(active.id as string);
    const newIndex = order.indexOf(over.id as string);
    if (oldIndex < 0 || newIndex < 0) return;
    onReorder(arrayMove(order, oldIndex, newIndex));
  };

  return (
    <div className="flex flex-col gap-3">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={order} strategy={verticalListSortingStrategy}>
          <div className="flex flex-col gap-1.5">
            {order.map((id, i) => {
              const a = ARCHETYPES.find((x) => x.id === id);
              if (!a) return null;
              return <SortableArchetype key={id} archetype={a} rank={i + 1} />;
            })}
          </div>
        </SortableContext>
      </DndContext>
      {!confirmed && (
        <div className="pt-1">
          <button
            onClick={onSubmit}
            className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg bg-[#FA500F] text-white text-[14px] font-medium shadow-[inset_0_-1.5px_0_rgba(0,0,0,0.08)] hover:bg-[#FC783B] active:scale-[0.97] transition-[colors,transform] duration-150"
          >
            Confirm order
          </button>
        </div>
      )}
    </div>
  );
}

function SortableArchetype({
  archetype,
  rank,
}: {
  archetype: Archetype;
  rank: number;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: archetype.id });
  // Stronger ease-out curve, the default dnd-kit "ease" feels weak.
  const easedTransition = transition?.replace(
    /ease$/,
    "cubic-bezier(0.23, 1, 0.32, 1)"
  );
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: easedTransition,
    zIndex: isDragging ? 10 : undefined,
    position: isDragging ? "relative" : undefined,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex items-center gap-3 px-3.5 py-3 rounded-[10px] border bg-white touch-none select-none",
        "transition-[box-shadow,transform] duration-200 ease-out",
        isDragging
          ? "border-[#27272A26] shadow-[0_12px_28px_-8px_rgba(15,23,42,0.18),0_2px_4px_rgba(15,23,42,0.06)] cursor-grabbing"
          : "border-[#27272A14] shadow-[0_1px_2px_rgba(15,23,42,0.04)] cursor-grab hover:border-[#27272A26]"
      )}
      {...attributes}
      {...listeners}
    >
      <span
        aria-hidden="true"
        className={cn(
          "grid place-items-center size-5 -ml-1 transition-colors",
          isDragging ? "text-[#57534D]" : "text-[#A6A09B]"
        )}
      >
        <GripVertical className="size-4" strokeWidth={2} />
      </span>
      <span className="inline-flex items-center justify-center size-[22px] rounded-full bg-white border border-[#27272A19] text-[#57534D] text-[11px] font-semibold tabular-nums leading-none shrink-0">
        {rank}
      </span>
      <div className="flex-1 min-w-0">
        <div className="inline-flex items-center gap-1.5">
          <span className="text-[14px] font-medium text-[#14110F] leading-[1.4]">
            {archetype.title}
          </span>
          {archetype.tag && (
            <span className="inline-flex items-center rounded-sm py-1 px-1.5 text-[12px] leading-[1.333] font-medium bg-[#FA500F1A] text-[#EB3A0B]">
              {archetype.tag}
            </span>
          )}
        </div>
        <div className="text-[12.5px] text-[#79716B] leading-[1.4] mt-0.5">
          {archetype.profile} · ~{archetype.pool} candidates
        </div>
      </div>
    </div>
  );
}
