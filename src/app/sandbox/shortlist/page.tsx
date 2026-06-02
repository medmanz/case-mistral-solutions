"use client";

import { useState, useMemo } from "react";
import { toast } from "sonner";
import {
  candidates,
  type Candidate,
  type Status,
} from "@/lib/candidates";
import { companyLogoUrl } from "@/lib/companies";
import { Sidebar } from "@/components/shortlist/Sidebar";
import { CandidateDetail } from "@/components/shortlist/CandidateDetail";
import {
  Plus,
  Columns3,
  Search,
  ChevronsUpDown,
  FileText,
  FileSpreadsheet,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ShortlistHiFi() {
  const [openCandidate, setOpenCandidate] = useState<string | null>(null);
  const [sentIds, setSentIds] = useState<Set<string>>(new Set());

  const rows = useMemo(
    () =>
      [...candidates].sort((a, b) => {
        const aScore = a.score * 18 + (a.id.charCodeAt(0) % 7);
        const bScore = b.score * 18 + (b.id.charCodeAt(0) % 7);
        return bScore - aScore;
      }),
    []
  );

  const markSent = (id: string) => {
    const candidate = candidates.find((c) => c.id === id);
    if (!candidate) return;
    const channel = candidate.internal ? "email" : "LinkedIn InMail";
    setSentIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setOpenCandidate(null);
    toast.success(`Outreach sent to ${candidate.name}`, {
      description: `via ${channel}`,
    });
  };

  const detail = openCandidate
    ? candidates.find((c) => c.id === openCandidate) ?? null
    : null;

  return (
    <div className="h-[calc(100dvh-49px)] bg-[#FAFAF9] flex antialiased">
      <Sidebar width={260} />
      <div className="flex-1 flex flex-col bg-[#FAFAF9] min-w-0 overflow-y-auto">
        {/* Page header */}
        <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-5 border-b border-[#27272A19]">
          <div className="flex flex-col gap-2 min-w-0 flex-1">
            <h1
              className="text-[24px] font-semibold text-[#14110F] leading-[1.2]"
              style={{ letterSpacing: "-0.015em" }}
            >
              Senior Supply Chain Manager · APAC
            </h1>
            <div className="flex items-center gap-1.5 text-[13px] text-[#79716B] leading-[1.4]">
              <span>8 internal · 4 external · 1,240 profiles scanned</span>
              <span className="text-[#D6D3D1]">·</span>
              <span className="inline-flex items-center">
                <WorkdayLogoStack />
                <LinkedInLogoStack />
                <PlusOneStack />
              </span>
              <span className="text-[#D6D3D1]">·</span>
              <span className="inline-flex items-center gap-1.5">
                <FileText
                  className="size-4 text-[#A6A09B] shrink-0"
                  strokeWidth={2}
                />
                3 files
              </span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 pt-2 shrink-0">
            <span className="size-1.5 rounded-full bg-[#16A34A]" />
            <span className="text-[13px] text-[#79716B] whitespace-nowrap">
              Sourcing complete · 31 min ago
            </span>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex items-center justify-between w-full py-4 px-6">
          <div className="flex items-center grow mr-4 overflow-clip">
            <FilterPill label="Status" />
            <FilterPill label="Fit" />
            <FilterPill label="Location" />
          </div>
          <div className="h-9 inline-flex items-center justify-center rounded-lg px-3 gap-1.5 bg-[#27272A0F] mr-4">
            <Columns3 className="size-4 text-[#14110F]" strokeWidth={2} />
            <span className="text-[14px] leading-[1.428] font-medium text-[#14110F] ml-1">
              Columns
            </span>
            <span className="inline-flex items-center h-6 rounded-md px-2 bg-[#27272A0F] text-[12px] leading-[1.333] font-medium text-[#57534D]">
              5
            </span>
          </div>
          <div className="flex items-center w-[240px] rounded-lg bg-[#27272A14]">
            <Search
              className="size-5 ml-2 mr-2 text-[#A6A09B]"
              strokeWidth={2}
            />
            <input
              type="text"
              placeholder="Search"
              className="grow h-9 bg-transparent text-[14px] text-[#14110F] placeholder:text-[#14110F80] outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="px-2 pb-12">
          <table className="w-full table-fixed border-collapse">
            <thead className="sticky top-0 bg-[#FAFAF9] z-10">
              <tr>
                <HeaderCell label="Candidate" width="w-[280px]" first />
                <HeaderCell label="Company" width="w-[180px]" />
                <HeaderCell label="Score" width="w-[100px]" />
                <HeaderCell label="Top reason" />
                <HeaderCell label="Status" width="w-[180px]" last />
              </tr>
            </thead>
            <tbody>
              {rows.map((c, i) => (
                <CandidateRow
                  key={c.id}
                  candidate={c}
                  index={i}
                  sent={sentIds.has(c.id)}
                  onOpen={() => setOpenCandidate(c.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CandidateDetail
        candidate={detail}
        onClose={() => setOpenCandidate(null)}
        onSend={markSent}
        isSent={
          detail ? sentIds.has(detail.id) || detail.status !== "pending" : false
        }
      />

    </div>
  );
}

function FilterPill({ label }: { label: string }) {
  return (
    <button className="h-9 inline-flex items-center justify-center mr-2 rounded-full px-3 gap-1.5 bg-white border border-dashed border-[#27272A26] my-1 hover:border-[#27272A4D] transition-colors">
      <Plus className="size-4 text-[#A6A09B] shrink-0" strokeWidth={2} />
      <span className="text-[14px] leading-[1.428] font-medium text-[#79716B]">
        {label}
      </span>
    </button>
  );
}

function HeaderCell({
  label,
  first,
  last,
  width,
}: {
  label: string;
  first?: boolean;
  last?: boolean;
  width?: string;
}) {
  return (
    <th
      className={cn(
        "h-10 py-3 relative text-left font-normal",
        first ? "pr-6 pl-6" : last ? "pr-6 pl-6" : "px-6",
        width
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-[12px] leading-[1.333] font-medium text-[#79716B]">
          {label}
        </span>
        <ChevronsUpDown
          className="size-3 text-[#A6A09B]"
          strokeWidth={2}
        />
      </div>
      <span className="absolute bottom-0 left-0 right-0 h-px bg-[#27272A19]" />
    </th>
  );
}

function CandidateRow({
  candidate,
  index,
  sent,
  onOpen,
}: {
  candidate: Candidate;
  index: number;
  sent: boolean;
  onOpen: () => void;
}) {
  const effectiveStatus =
    sent && candidate.status === "pending" ? "contacted" : candidate.status;
  const topReason = candidate.reasons[0] ?? "";
  // Deterministic score out of 100 derived from the 1–5 rubric score plus a
  // per-candidate offset so two 5s don't read identical.
  const scorePct =
    candidate.score * 18 + (candidate.id.charCodeAt(0) % 7);

  return (
    <tr
      onClick={onOpen}
      className="border-b border-[#27272A0F] cursor-pointer transition-colors fade-up hover:bg-[#27272A05]"
      style={{ animationDelay: `${index * 25}ms` }}
    >
      <td className="px-6 py-3 align-middle">
        <div className="flex items-center gap-3 max-w-md">
          <img
            src={candidate.photo}
            alt=""
            className="size-9 rounded-full object-cover shrink-0 bg-[#F1EDE8]"
          />
          <div className="min-w-0">
            <div className="text-[14px] leading-[1.428] font-medium text-[#14110F] truncate">
              {candidate.name}
            </div>
            <div className="text-[13px] leading-[1.4] mt-1 text-[#79716B] truncate">
              {candidate.role}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-3 align-middle">
        <CompanyCell company={candidate.company} />
      </td>
      <td className="px-6 py-3 align-middle">
        <ScoreGauge score={scorePct} />
      </td>
      <td className="px-6 py-3 align-middle">
        <span className="block text-[13px] leading-[1.4] text-[#3A3530] line-clamp-2">
          {topReason}
        </span>
      </td>
      <td className="px-6 py-3 align-middle">
        <StatusChip status={effectiveStatus} />
      </td>
    </tr>
  );
}

function ScoreGauge({ score }: { score: number }) {
  const size = 36;
  const stroke = 3;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(score, 100) / 100);
  const color = score >= 70 ? "#16A34A" : "#A6A09B";
  return (
    <span className="relative inline-flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#F1EDE8"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="absolute text-[12px] font-medium text-[#14110F] tabular-nums">
        {score}
      </span>
    </span>
  );
}

const STATUS_LABEL: Record<Status, string> = {
  pending: "Pending review",
  contacted: "Contacted",
  replied: "Replied",
  interview: "Interview",
  offer: "Offer",
};

const STATUS_PILL: Record<Status, string> = {
  pending: "bg-[#F6F6F5] text-[#79716B]",
  contacted: "bg-[#E0F2FE] text-[#075985]",
  replied: "bg-[#16A34A1A] text-[#16734A]",
  interview: "bg-[#FA500F1A] text-[#EB3A0B]",
  offer: "bg-[#FBF1DC] text-[#8A6A04]",
};

function StatusChip({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm py-1 px-1.5 text-[12px] leading-[1.333] font-medium whitespace-nowrap",
        STATUS_PILL[status]
      )}
    >
      <span className="size-1.5 rounded-full bg-current opacity-70" />
      {STATUS_LABEL[status]}
    </span>
  );
}

function CompanyCell({ company }: { company: string }) {
  const logo = companyLogoUrl(company);
  return (
    <div className="flex items-center gap-2 min-w-0 w-full">
      {logo ? (
        <img
          src={logo}
          alt=""
          width={16}
          height={16}
          className="size-4 rounded-sm shrink-0 object-contain"
          aria-hidden
        />
      ) : (
        <span className="size-4 rounded-sm bg-[#F1EDE8] shrink-0" aria-hidden />
      )}
      <span className="text-[13px] text-[#14110F] truncate min-w-0 flex-1">
        {company}
      </span>
    </div>
  );
}

function FileChip({
  type,
  children,
}: {
  type: "doc" | "sheet";
  children: React.ReactNode;
}) {
  const Icon = type === "sheet" ? FileSpreadsheet : FileText;
  const color = type === "sheet" ? "text-[#16A34A]" : "text-[#3B82F6]";
  return (
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[12px] font-medium bg-[#F6F6F5] text-[#57534D]">
      <Icon className={cn("size-3 shrink-0", color)} strokeWidth={2} />
      {children}
    </span>
  );
}

function LinkedInLogoStack() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#0A66C2"
      style={{
        marginRight: -4,
        background: "#FFFFFF",
        border: "1.5px solid #FAFAF9",
        borderRadius: 999,
        boxSizing: "content-box",
      }}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WorkdayLogoStack() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#F38B00"
      style={{
        marginRight: -4,
        background: "#FFFFFF",
        border: "1.5px solid #FAFAF9",
        borderRadius: 999,
        boxSizing: "content-box",
      }}
      aria-hidden
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 9.75l-2.25 6h-1.5l-1.5-4.125-1.5 4.125h-1.5l-2.25-6h1.5l1.5 4.125 1.5-4.125h1.5l1.5 4.125 1.5-4.125h1.5z" />
    </svg>
  );
}

function PlusOneStack() {
  return (
    <span
      className="inline-flex items-center justify-center text-[12px] font-semibold text-[#79716B] leading-none"
      style={{
        width: 16,
        height: 16,
        background: "#F6F6F5",
        border: "1.5px solid #FAFAF9",
        borderRadius: 999,
        boxSizing: "content-box",
      }}
      aria-hidden
    >
      +1
    </span>
  );
}

