"use client";

import { useEffect, useState } from "react";
import { type Candidate } from "@/lib/candidates";
import { companyLogoUrl } from "@/lib/companies";
import {
  X,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Target,
  ShieldAlert,
  MapPin,
  Database,
  Send,
  Clock,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SCORE_PILL: Record<Candidate["fit"], string> = {
  strong: "bg-[#16A34A1A] text-[#16734A]",
  good: "bg-[#FBF1DC] text-[#8A6A04]",
  "worth-exploring": "bg-[#F6F6F5] text-[#79716B]",
};

const DOT: Record<Candidate["fit"], string> = {
  strong: "bg-[#16A34A]",
  good: "bg-[#D97706]",
  "worth-exploring": "bg-[#9CA3AF]",
};

type View = "profile" | "compose" | "timeline";

export function CandidateDetail({
  candidate,
  onClose,
  onSend,
  isSent,
}: {
  candidate: Candidate | null;
  onClose: () => void;
  onSend?: (id: string) => void;
  isSent?: boolean;
}) {
  const [view, setView] = useState<View>("profile");
  const [draftSubject, setDraftSubject] = useState("");
  const [draftBody, setDraftBody] = useState("");

  // Reset view when a new candidate is opened: timeline if sent, profile otherwise
  useEffect(() => {
    if (!candidate) return;
    setView(isSent ? "timeline" : "profile");
    setDraftSubject(generateSubject(candidate));
    setDraftBody(generateBody(candidate));
  }, [candidate, isSent]);

  useEffect(() => {
    if (!candidate) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (view === "compose") setView("profile");
        else onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [candidate, onClose, view]);

  if (!candidate) return null;

  const scorePct =
    candidate.score * 18 + (candidate.id.charCodeAt(0) % 7);
  const isInternal = candidate.internal;
  const externalRisk = candidate.risks?.find(
    (r) => !r.toLowerCase().startsWith("internal")
  );
  const companyLogo = companyLogoUrl(candidate.company);

  return (
    <div className="fixed inset-0 z-40 flex justify-end pointer-events-none">
      <button
        onClick={onClose}
        aria-label="Close detail"
        className="absolute inset-0 bg-ink/25 overlay-fade-in pointer-events-auto"
      />
      <aside className="relative w-[480px] max-w-full h-full bg-[#FAFAF9] flex flex-col panel-slide-in shadow-2xl pointer-events-auto antialiased">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 px-6 py-4 border-b border-[#27272A19]">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={candidate.photo}
              alt=""
              className="size-9 rounded-full object-cover bg-[#F1EDE8] shrink-0"
            />
            <div className="min-w-0">
              <h2
                className="text-[18px] font-semibold text-[#14110F] leading-[1.55] truncate"
                style={{ letterSpacing: "-0.01em" }}
              >
                {candidate.name}
              </h2>
              <p className="text-[14px] text-[#79716B] leading-[1.42] truncate inline-flex items-center gap-1.5">
                <span>{candidate.role}</span>
                <span aria-hidden>·</span>
                {companyLogo && (
                  <img
                    src={companyLogo}
                    alt=""
                    width={16}
                    height={16}
                    className="size-4 rounded-sm shrink-0 object-contain"
                    aria-hidden
                  />
                )}
                <span>{candidate.company}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="size-7 grid place-items-center rounded-md text-[#79716B] hover:bg-[#27272A0F] hover:text-[#14110F] transition-colors shrink-0"
          >
            <X className="size-3.5" strokeWidth={2} />
          </button>
        </div>

        {view === "profile" && (
          <ProfileView
            candidate={candidate}
            scorePct={scorePct}
            isInternal={isInternal}
            externalRisk={externalRisk}
          />
        )}
        {view === "compose" && (
          <ComposeView
            candidate={candidate}
            isInternal={isInternal}
            subject={draftSubject}
            body={draftBody}
            onSubjectChange={setDraftSubject}
            onBodyChange={setDraftBody}
          />
        )}
        {view === "timeline" && (
          <TimelineView
            candidate={candidate}
            subject={draftSubject}
            body={draftBody}
            isInternal={isInternal}
          />
        )}

        {/* Footer */}
        {view === "profile" && (
          <div className="flex items-center justify-end gap-2 px-6 py-3 border-t border-[#27272A19]">
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#27272A0F] text-[13px] font-medium text-[#57534D] hover:bg-[#27272A19] hover:text-[#B91C1C] active:scale-[0.97] transition-[colors,transform] duration-150">
              Reject
            </button>
            <button
              onClick={() => setView("compose")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#14110F] text-white text-[13px] font-medium shadow-[inset_0_-1.5px_0_rgba(0,0,0,0.12)] hover:bg-[#2A2420] active:scale-[0.97] transition-[colors,transform] duration-150"
            >
              <Sparkles
                className="size-3.5 text-mistral-orange-yellow"
                strokeWidth={2}
              />
              Compose outreach
            </button>
          </div>
        )}
        {view === "compose" && (
          <div className="flex items-center justify-between gap-2 px-6 py-3 border-t border-[#27272A19]">
            <button
              onClick={() => setView("profile")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium text-[#79716B] hover:bg-[#27272A0F] hover:text-[#14110F] active:scale-[0.97] transition-[colors,transform] duration-150"
            >
              Save draft
            </button>
            <button
              onClick={() => {
                onSend?.(candidate.id);
                setView("timeline");
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#14110F] text-white text-[13px] font-medium shadow-[inset_0_-1.5px_0_rgba(0,0,0,0.12)] hover:bg-[#2A2420] active:scale-[0.97] transition-[colors,transform] duration-150"
            >
              Send
              <ArrowRight className="size-3.5" strokeWidth={2} />
            </button>
          </div>
        )}
        {view === "timeline" && (
          <div className="flex items-center justify-between gap-2 px-6 py-3 border-t border-[#27272A19]">
            <button
              onClick={() => setView("profile")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium text-[#79716B] hover:bg-[#27272A0F] hover:text-[#14110F] active:scale-[0.97] transition-[colors,transform] duration-150"
            >
              View profile
            </button>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium text-[#79716B] hover:bg-[#27272A0F] hover:text-[#B91C1C] active:scale-[0.97] transition-[colors,transform] duration-150">
              Cancel follow-up
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

function ProfileView({
  candidate,
  scorePct,
  isInternal,
  externalRisk,
}: {
  candidate: Candidate;
  scorePct: number;
  isInternal: boolean;
  externalRisk: string | undefined;
}) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-6 pt-5 pb-4">
        <div className="text-[13px] font-medium text-[#57534D] mb-3">
          Properties
        </div>
        <div className="flex flex-col gap-1">
          <PropertyRow icon={Target} label="Score">
            <span
              className={cn(
                "inline-block rounded-sm py-0.5 px-1.5 text-[12px] leading-[1.333] font-medium tabular-nums",
                SCORE_PILL[candidate.fit]
              )}
            >
              {scorePct}/100
            </span>
          </PropertyRow>
          <PropertyRow icon={ShieldAlert} label="Risk">
            {externalRisk ? (
              <span className="inline-flex items-center gap-1 rounded-sm py-0.5 px-1.5 text-[12px] leading-[1.333] font-medium bg-[#FEE2E2] text-[#B91C1C]">
                <AlertCircle className="size-3" strokeWidth={2} />
                In process at MSC
              </span>
            ) : isInternal ? (
              <span className="inline-flex items-center gap-1 rounded-sm py-0.5 px-1.5 text-[12px] leading-[1.333] font-medium bg-[#F6F6F5] text-[#79716B]">
                Internal
              </span>
            ) : (
              <span className="text-[13px] text-[#79716B]">None</span>
            )}
          </PropertyRow>
          <PropertyRow icon={MapPin} label="Location">
            <span className="text-[13px] text-[#14110F]">
              {candidate.location}
            </span>
          </PropertyRow>
          <PropertyRow icon={Database} label="Sourced from">
            {isInternal ? (
              <SourceChip logo={<WorkdayLogo />}>Workday</SourceChip>
            ) : (
              <SourceChip logo={<LinkedInLogo />}>
                LinkedIn Recruiter
              </SourceChip>
            )}
          </PropertyRow>
        </div>
      </div>

      <div className="px-6 py-5 border-t border-[#27272A0F]">
        <div className="text-[13px] font-medium text-[#57534D] mb-3">
          Strong match on
        </div>
        <ul className="flex flex-col gap-3">
          {candidate.reasons.map((r, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className={cn(
                  "size-1.5 rounded-full shrink-0 mt-[7px]",
                  DOT[candidate.fit]
                )}
              />
              <span className="text-[14px] text-[#14110F] leading-[1.5]">
                {r}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {candidate.atsHistory && (
        <div className="px-6 py-5 border-t border-[#27272A0F]">
          <div className="text-[13px] font-medium text-[#57534D] mb-3 inline-flex items-center gap-1.5">
            <WorkdayLogo />
            History in Workday
          </div>
          <div className="rounded-lg border border-[#27272A14] bg-white p-4">
            <div className="flex items-baseline justify-between gap-3 mb-1">
              <div className="text-[14px] font-medium text-[#14110F] leading-[1.4]">
                {candidate.atsHistory.appliedRole}
              </div>
              <div className="text-[12px] text-[#A6A09B] shrink-0">
                {candidate.atsHistory.appliedDate}
              </div>
            </div>
            <div className="text-[13px] text-[#79716B] leading-[1.5] mb-2">
              {candidate.atsHistory.outcome}
            </div>
            {candidate.atsHistory.notes && (
              <div className="text-[13px] text-[#14110F] leading-[1.55] pt-2 border-t border-[#27272A14]">
                {candidate.atsHistory.notes}
              </div>
            )}
          </div>
        </div>
      )}

      {candidate.signals && candidate.signals.length > 0 && (
        <div className="px-6 py-5 border-t border-[#27272A0F]">
          <div className="text-[13px] font-medium text-[#57534D] mb-2.5">
            Signals
          </div>
          <div className="flex flex-wrap gap-1.5">
            {candidate.signals.map((s) => (
              <span
                key={s}
                className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#F6F6F5] text-[#57534D] text-[12px] font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ComposeView({
  candidate,
  isInternal,
  subject,
  body,
  onSubjectChange,
  onBodyChange,
}: {
  candidate: Candidate;
  isInternal: boolean;
  subject: string;
  body: string;
  onSubjectChange: (v: string) => void;
  onBodyChange: (v: string) => void;
}) {
  const channel = isInternal ? "email" : "inmail";
  const internalEmail = candidate.name
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .trim()
    .replace(/\s+/g, ".") + "@cma-cgm.com";

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-6 pt-5 pb-3">
        <div className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#79716B]">
          <Sparkles
            className="size-3.5 text-mistral-orange-yellow"
            strokeWidth={2}
          />
          AI-drafted from this candidate&rsquo;s signals
        </div>
      </div>

      <div className="px-6 pb-3">
        <label className="block text-[13px] font-medium text-[#57534D] mb-1.5">
          To
        </label>
        <div className="flex items-center gap-2 w-full bg-white border border-[#27272A14] rounded-md px-3 py-2">
          <span className="text-[14px] text-[#14110F]">{candidate.name}</span>
          {channel === "inmail" ? (
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[12px] font-medium bg-[#0A66C214] text-[#0A66C2]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn InMail
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[12px] font-medium bg-[#F6F6F5] text-[#57534D] font-mono">
              {internalEmail}
            </span>
          )}
        </div>
      </div>

      <div className="px-6 pb-3">
        <label className="block text-[13px] font-medium text-[#57534D] mb-1.5">
          Subject
        </label>
        <input
          value={subject}
          onChange={(e) => onSubjectChange(e.target.value)}
          className="w-full text-[14px] text-[#14110F] bg-white border border-[#27272A14] rounded-md px-3 py-2 outline-none focus:border-[#27272A4D] transition-colors"
        />
      </div>

      <div className="px-6 pb-5 flex-1">
        <label className="block text-[13px] font-medium text-[#57534D] mb-1.5">
          Message
        </label>
        <textarea
          value={body}
          onChange={(e) => onBodyChange(e.target.value)}
          rows={12}
          className="w-full text-[14px] text-[#14110F] leading-[1.55] bg-white border border-[#27272A14] rounded-md px-3 py-2 outline-none focus:border-[#27272A4D] transition-colors resize-none"
        />
      </div>
    </div>
  );
}

function TimelineView({
  candidate,
  subject,
  body,
  isInternal,
}: {
  candidate: Candidate;
  subject: string;
  body: string;
  isInternal: boolean;
}) {
  const bodyPreview = body.split("\n").filter(Boolean).slice(0, 3).join(" · ");
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Sent message card */}
      <div className="px-6 pt-5 pb-5">
        <div className="text-[13px] font-medium text-[#57534D] mb-3">
          Outreach
        </div>
        <div className="rounded-lg border border-[#27272A14] bg-white p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[12px] font-medium bg-[#16A34A1A] text-[#16734A]">
              <Send className="size-3" strokeWidth={2.25} />
              Sent
            </span>
            <span className="text-[12px] text-[#79716B]">
              2 min ago{" "}
              {isInternal ? "via email" : "via LinkedIn InMail"}
            </span>
          </div>
          <div className="text-[14px] font-medium text-[#14110F] leading-[1.4] mb-1">
            {subject}
          </div>
          <div className="text-[13px] text-[#79716B] leading-[1.5] line-clamp-3">
            {bodyPreview}
          </div>
        </div>
      </div>

      {/* Follow-up scheduled */}
      <div className="px-6 pb-5 border-t border-[#27272A0F] pt-5">
        <div className="text-[13px] font-medium text-[#57534D] mb-3">
          Follow-up
        </div>
        <div className="flex items-start gap-2.5">
          <CalendarClock
            className="size-4 text-[#A6A09B] shrink-0 mt-0.5"
            strokeWidth={2}
          />
          <div className="flex-1">
            <div className="text-[14px] text-[#14110F] leading-[1.4]">
              Scheduled for Mar 14
            </div>
            <div className="text-[13px] text-[#79716B] leading-[1.5] mt-0.5">
              The agent will send a follow-up if {candidate.name.split(" ")[0]}{" "}
              hasn&rsquo;t replied in 3 days.
            </div>
          </div>
        </div>
      </div>

      {/* Activity log */}
      <div className="px-6 py-5 border-t border-[#27272A0F]">
        <div className="text-[13px] font-medium text-[#57534D] mb-3">
          Activity
        </div>
        <ul className="flex flex-col gap-3">
          <TimelineItem icon={Send} label="Outreach sent" time="2 min ago" />
          <TimelineItem
            icon={Target}
            label="Scored 92/100 against APAC rubric"
            time="31 min ago"
          />
          <TimelineItem
            icon={Database}
            label={
              isInternal
                ? "Sourced from Workday"
                : "Sourced from LinkedIn Recruiter"
            }
            time="31 min ago"
          />
        </ul>
      </div>
    </div>
  );
}

function TimelineItem({
  icon: Icon,
  label,
  time,
}: {
  icon: LucideIcon;
  label: string;
  time: string;
}) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="grid place-items-center size-5 rounded-full bg-[#F6F6F5] shrink-0 mt-0.5">
        <Icon className="size-3 text-[#79716B]" strokeWidth={2} />
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[13px] text-[#14110F] leading-[1.4]">{label}</div>
        <div className="text-[12px] text-[#A6A09B] leading-[1.4] mt-0.5 inline-flex items-center gap-1">
          <Clock className="size-3" strokeWidth={2} />
          {time}
        </div>
      </div>
    </li>
  );
}

function generateSubject(candidate: Candidate): string {
  return `Senior Supply Chain Manager, CMA CGM APAC, ${candidate.name.split(" ")[0]}`;
}

function generateBody(candidate: Candidate): string {
  const firstName = candidate.name.split(" ")[0];
  const topSignal = candidate.reasons[0] ?? "your work";
  const signalLine = topSignal.toLowerCase().startsWith("your")
    ? topSignal
    : `your work (${topSignal})`;
  return `Hi ${firstName},

I came across ${signalLine} and wanted to reach out.

We're hiring a Senior Supply Chain Manager for APAC at CMA CGM. Given your trajectory at ${candidate.company}, I think there's real overlap with what we're building.

Open to a 20-minute call next week?

Best,
Mederic`;
}

function PropertyRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start py-1.5 gap-3">
      <div className="flex items-center gap-2 w-[140px] shrink-0 text-[#79716B] h-5">
        <Icon className="size-3.5 text-[#A6A09B]" strokeWidth={2} />
        <span className="text-[13px] leading-[1.3]">{label}</span>
      </div>
      <div className="min-w-0 flex-1 flex flex-wrap gap-1.5 min-h-5 items-center">
        {children}
      </div>
    </div>
  );
}

function SourceChip({
  children,
  logo,
}: {
  children: React.ReactNode;
  logo?: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded text-[12px] font-medium bg-[#F6F6F5] text-[#79716B]">
      {logo && <span className="shrink-0 inline-flex">{logo}</span>}
      {children}
    </span>
  );
}

function LinkedInLogo() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#0A66C2"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WorkdayLogo() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#F38B00"
      aria-hidden
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 9.75l-2.25 6h-1.5l-1.5-4.125-1.5 4.125h-1.5l-2.25-6h1.5l1.5 4.125 1.5-4.125h1.5l1.5 4.125 1.5-4.125h1.5z" />
    </svg>
  );
}
