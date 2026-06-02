"use client";

import { useEffect, useState } from "react";
import { topPicks } from "@/lib/candidates";
import { cn } from "@/lib/utils";
import { X, Send, Pencil, Check, Sparkles, RotateCcw } from "lucide-react";

const DRAFTS: Record<string, string> = {
  "mei-lin-chen": `Hi Mei-Lin,

Saw your work on the Singapore-Shanghai trade lane optimization — the 8% transit time improvement is exactly the kind of operational gain CMA CGM is hiring against. We're building out our APAC senior management team and your profile maps closely to what we need.

20 minutes to compare notes?`,
  "rajesh-krishnan": `Hi Rajesh,

Read your recent piece on decarbonization in container shipping — the framing on regional port partnerships was sharp. CMA CGM is investing heavily in this exact area for APAC and your network across Singapore, Hong Kong, and Mumbai is a major signal for us.

Worth a conversation?`,
  "anne-lefevre": `Hi Anne,

As you know, CMA CGM is opening a Senior Supply Chain Director role for APAC. Your decade at Bolloré Africa Logistics and your familiarity with our internal systems (SAP TM, Workday) make you an exceptional fit.

I'd like to discuss confidentially before bringing your name forward — are you open?`,
  "hiroshi-tanaka": `Hi Hiroshi,

Your Yokohama hub digital transformation work at NYK is referenced internally at CMA CGM as a benchmark. We're hiring for a Senior Supply Chain Manager APAC and your process and digital background is a strong match.

Open to a confidential discussion?`,
  "sarah-obrien": `Hi Sarah,

Saw your APAC-Europe air-sea conversion playbook at DSV — the cross-modal optimization is a capability we're explicitly hiring for at CMA CGM. Your French fluency and cross-cultural team experience make this a strong fit.

15 minutes to explore?`,
};

const SKIP_REASONS = [
  "Already engaged elsewhere",
  "Not the right timing",
  "Need to think more",
];

type Status =
  | { kind: "pending" }
  | { kind: "editing"; pending: string }
  | { kind: "picking-reason"; reason: string | null; other: string }
  | { kind: "sent" }
  | { kind: "skipped"; reason: string };

type DraftState = {
  id: string;
  body: string;
  status: Status;
};

function initial(): DraftState[] {
  return topPicks.map((c) => ({
    id: c.id,
    body: DRAFTS[c.id] ?? "",
    status: { kind: "pending" },
  }));
}

export function DraftPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [drafts, setDrafts] = useState<DraftState[]>(initial);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const updateDraft = (id: string, patch: Partial<DraftState>) => {
    setDrafts((prev) => prev.map((d) => (d.id === id ? { ...d, ...patch } : d)));
  };
  const setStatus = (id: string, status: Status) => updateDraft(id, { status });

  if (!open) return null;

  const sent = drafts.filter((d) => d.status.kind === "sent");
  const skipped = drafts.filter((d) => d.status.kind === "skipped");
  const pending = drafts.filter(
    (d) =>
      d.status.kind !== "sent" && d.status.kind !== "skipped"
  );
  const orderedDrafts = [...sent, ...skipped, ...pending];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <button
        aria-label="Close panel"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 overlay-fade-in"
      />

      {/* Panel */}
      <div className="relative w-[60%] max-w-[760px] min-w-[480px] h-full bg-surface flex flex-col panel-slide-in shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 px-6 py-5 border-b border-line bg-surface flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[20px] font-semibold tracking-tight text-ink text-balance">
              Outreach drafts
            </h2>
            <p className="mt-1 text-[13px] text-ink-muted leading-snug">
              5 messages prepared for your top candidates
            </p>
            <div className="mt-2.5">
              <span
                className={cn(
                  "inline-flex items-center h-6 px-2 rounded-full text-[11.5px] font-medium",
                  sent.length === 0
                    ? "bg-surface-sunken text-ink-soft"
                    : "bg-[#E8F7EE] text-[#16734A]"
                )}
              >
                Sent ({sent.length})
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="relative size-9 grid place-items-center rounded-md text-ink-soft hover:bg-line-soft hover:text-ink transition-colors shrink-0 before:absolute before:-inset-1.5 before:content-['']"
            aria-label="Close panel"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Draft list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {orderedDrafts.map((draft, i) => {
            const candidate = topPicks.find((c) => c.id === draft.id)!;
            return (
              <div
                key={draft.id}
                className="draft-stagger"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <DraftCard
                  draft={draft}
                  candidate={{
                    name: candidate.name,
                    role: candidate.role,
                    company: candidate.company,
                    initials: candidate.initials,
                  }}
                  onChangeBody={(body) => updateDraft(draft.id, { body })}
                  onSetStatus={(s) => setStatus(draft.id, s)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DraftCard({
  draft,
  candidate,
  onChangeBody,
  onSetStatus,
}: {
  draft: DraftState;
  candidate: { name: string; role: string; company: string; initials: string };
  onChangeBody: (s: string) => void;
  onSetStatus: (s: Status) => void;
}) {
  const status = draft.status;

  if (status.kind === "sent") {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-line bg-surface px-5 py-3">
        <Avatar initials={candidate.initials} sent />
        <div className="flex-1 min-w-0">
          <p className="text-[13.5px] font-medium text-ink truncate">
            {candidate.name}
          </p>
          <p className="text-[11.5px] text-[#16734A] leading-tight">
            Sent · waiting on reply
          </p>
        </div>
        <button
          onClick={() => onSetStatus({ kind: "pending" })}
          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11.5px] text-ink-soft hover:bg-line-soft hover:text-ink active:scale-[0.97] transition-[colors,transform] duration-150"
          aria-label="Undo send"
        >
          <RotateCcw className="size-3" />
          Undo
        </button>
      </div>
    );
  }

  if (status.kind === "skipped") {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-line bg-surface-subtle px-5 py-3">
        <Avatar initials={candidate.initials} skipped />
        <div className="flex-1 min-w-0">
          <p className="text-[13.5px] font-medium text-ink truncate">
            {candidate.name}
          </p>
          <p className="text-[11.5px] text-ink-soft truncate">
            Skipped · {status.reason}
          </p>
        </div>
        <button
          onClick={() => onSetStatus({ kind: "pending" })}
          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11.5px] text-ink-soft hover:bg-line-soft hover:text-ink active:scale-[0.97] transition-[colors,transform] duration-150"
          aria-label="Undo skip"
        >
          <RotateCcw className="size-3" />
          Undo
        </button>
      </div>
    );
  }

  return (
    <article className="rounded-lg border border-line bg-surface p-6">
      {/* Card header */}
      <header className="flex items-center gap-3">
        <Avatar initials={candidate.initials} />
        <div className="flex-1 min-w-0">
          <h3 className="text-[14.5px] font-semibold text-ink truncate leading-tight">
            {candidate.name}
          </h3>
          <p className="text-[12.5px] text-ink-muted truncate leading-tight">
            {candidate.role} · {candidate.company}
          </p>
        </div>
      </header>

      {/* Signal line */}
      <div className="mt-4 flex items-center gap-1.5 text-[11.5px] text-ink-soft">
        <Sparkles className="size-3.5 text-mistral-orange" strokeWidth={2} />
        Personalized from candidate signals
      </div>

      {/* Body */}
      {status.kind === "editing" ? (
        <div className="mt-3">
          <textarea
            value={status.pending}
            onChange={(e) =>
              onSetStatus({ kind: "editing", pending: e.target.value })
            }
            rows={8}
            aria-label={`Edit draft for ${candidate.name}`}
            className="w-full rounded-md border border-line bg-surface-subtle px-3 py-2.5 text-[13.5px] leading-relaxed text-ink resize-y focus:outline-none focus:border-ink-faint focus:ring-1 focus:ring-ink-faint"
            autoFocus
          />
        </div>
      ) : (
        <div className="mt-3 text-[13.5px] leading-relaxed text-ink whitespace-pre-wrap text-pretty">
          {draft.body}
        </div>
      )}

      {/* Skip reason picker */}
      {status.kind === "picking-reason" && (
        <SkipReasonForm
          reason={status.reason}
          other={status.other}
          onReason={(reason) =>
            onSetStatus({ kind: "picking-reason", reason, other: status.other })
          }
          onOther={(other) =>
            onSetStatus({ kind: "picking-reason", reason: status.reason, other })
          }
          onConfirm={() => {
            const finalReason =
              status.reason === "Other"
                ? status.other.trim() || "Other"
                : status.reason ?? "";
            if (!finalReason) return;
            onSetStatus({ kind: "skipped", reason: finalReason });
          }}
          onCancel={() => onSetStatus({ kind: "pending" })}
        />
      )}

      {/* Actions */}
      {status.kind === "editing" ? (
        <div className="mt-5 pt-4 border-t border-line flex items-center justify-end gap-2">
          <button
            onClick={() => onSetStatus({ kind: "pending" })}
            className="px-3 py-1.5 rounded-md text-[12.5px] text-ink-soft hover:bg-line-soft hover:text-ink active:scale-[0.97] transition-[colors,transform] duration-150"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onChangeBody(status.pending);
              onSetStatus({ kind: "pending" });
            }}
            className="px-3 py-1.5 rounded-md text-[12.5px] font-medium bg-ink text-white hover:bg-[#2A2420] active:scale-[0.97] transition-[colors,transform] duration-150"
          >
            Save
          </button>
        </div>
      ) : status.kind === "pending" ? (
        <div className="mt-5 pt-4 border-t border-line flex items-center justify-between gap-3">
          <button
            onClick={() => onSetStatus({ kind: "editing", pending: draft.body })}
            className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-soft hover:text-ink active:scale-[0.97] transition-[colors,transform] duration-150 underline-offset-4 hover:underline"
          >
            <Pencil className="size-3" />
            Edit draft
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                onSetStatus({
                  kind: "picking-reason",
                  reason: null,
                  other: "",
                })
              }
              className="text-[12.5px] text-ink-soft hover:text-ink active:scale-[0.97] transition-[colors,transform] duration-150 underline-offset-4 hover:underline"
            >
              Skip
            </button>
            <button
              onClick={() => onSetStatus({ kind: "sent" })}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-[13px] font-medium bg-mistral-orange text-white hover:bg-[#D9461F] active:scale-[0.97] transition-[colors,transform] duration-150 shadow-sm"
            >
              <Send className="size-3.5" />
              Send
            </button>
          </div>
        </div>
      ) : null}
    </article>
  );
}

function SkipReasonForm({
  reason,
  other,
  onReason,
  onOther,
  onConfirm,
  onCancel,
}: {
  reason: string | null;
  other: string;
  onReason: (r: string) => void;
  onOther: (s: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const canConfirm =
    reason !== null &&
    (reason !== "Other" || other.trim().length > 0);

  return (
    <div className="mt-4 pt-4 border-t border-line">
      <p className="text-[12.5px] text-ink-muted mb-2">Why skipping?</p>
      <div className="flex flex-wrap gap-1.5">
        {SKIP_REASONS.map((r) => (
          <button
            key={r}
            onClick={() => onReason(r)}
            className={cn(
              "px-2.5 py-1 rounded-md border text-[12.5px] transition-colors",
              reason === r
                ? "border-mistral-orange bg-mistral-orange/[0.06] text-ink font-medium"
                : "border-line bg-surface text-ink-muted hover:border-ink-faint hover:text-ink"
            )}
          >
            {r}
          </button>
        ))}
        <button
          onClick={() => onReason("Other")}
          className={cn(
            "px-2.5 py-1 rounded-md border text-[12.5px] transition-colors",
            reason === "Other"
              ? "border-mistral-orange bg-mistral-orange/[0.06] text-ink font-medium"
              : "border-line bg-surface text-ink-muted hover:border-ink-faint hover:text-ink"
          )}
        >
          Other
        </button>
      </div>
      {reason === "Other" && (
        <input
          value={other}
          onChange={(e) => onOther(e.target.value)}
          placeholder="Add a reason"
          className="mt-2 w-full rounded-md border border-line bg-surface-subtle px-3 py-2 text-[13px] text-ink placeholder:text-ink-soft focus:outline-none focus:border-ink-faint focus:ring-1 focus:ring-ink-faint"
          autoFocus
        />
      )}
      <div className="mt-3 flex items-center justify-end gap-2">
        <button
          onClick={onCancel}
          className="px-3 py-1.5 rounded-md text-[12.5px] text-ink-soft hover:bg-line-soft hover:text-ink active:scale-[0.97] transition-[colors,transform] duration-150"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={!canConfirm}
          className={cn(
            "px-3 py-1.5 rounded-md text-[12.5px] font-medium active:scale-[0.97] transition-[colors,transform] duration-150",
            canConfirm
              ? "bg-ink text-white hover:bg-[#2A2420]"
              : "bg-line-soft text-ink-soft cursor-not-allowed"
          )}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

function Avatar({
  initials,
  sent,
  skipped,
}: {
  initials: string;
  sent?: boolean;
  skipped?: boolean;
}) {
  return (
    <span
      className={cn(
        "relative shrink-0 size-9 rounded-full grid place-items-center text-[11.5px] font-semibold bg-mistral-cream-warm text-ink"
      )}
    >
      {initials}
      {sent && (
        <span className="absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-[#16A34A] grid place-items-center text-white border-2 border-surface">
          <Check className="size-2.5" strokeWidth={3} />
        </span>
      )}
      {skipped && (
        <span className="absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-ink-soft grid place-items-center text-white border-2 border-surface">
          <X className="size-2.5" strokeWidth={3} />
        </span>
      )}
    </span>
  );
}
