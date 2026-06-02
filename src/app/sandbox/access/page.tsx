"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  Code2,
  Mic,
  ChevronDown,
  EyeOff,
  Box,
  XCircle,
  FileText,
  FileSpreadsheet,
  X,
  Compass,
  Shapes,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Attachment = {
  name: string;
  kind: "pdf" | "xlsx" | "docx";
  meta: string;
};

const RECRUITING_PROMPT =
  "Starting a new search: Senior Supply Chain Manager APAC. Context attached from yesterday's kick-off with Sophie.";

const RECRUITING_ATTACHMENTS: Attachment[] = [
  {
    name: "kick-off_sophie-bertrand.pdf",
    kind: "pdf",
    meta: "Transcript · 18 min",
  },
  { name: "scoring_rubric.xlsx", kind: "xlsx", meta: "Sheet · 12 criteria" },
  { name: "JD_draft_v2.docx", kind: "docx", meta: "Doc · 2 pages" },
];
import { Sidebar } from "@/components/shortlist/Sidebar";
import { VibeLogo } from "@/components/vibe/VibeLogo";
import { SlashMenu } from "@/components/vibe/SlashMenu";

function FileChip({
  attachment,
  onRemove,
}: {
  attachment: Attachment;
  onRemove?: () => void;
}) {
  const icon =
    attachment.kind === "xlsx" ? (
      <FileSpreadsheet className="size-4 text-[#16A34A]" strokeWidth={1.75} />
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
    <span className="inline-flex items-center gap-2.5 pl-2 pr-1 py-1.5 rounded-md bg-[#FAFAF9] border border-[#27272A14] max-w-full group">
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col min-w-0 gap-0.5">
        <span className="text-[13px] font-medium text-[#14110F] leading-[1.3] truncate">
          {attachment.name}
        </span>
        <span className="text-[12px] text-[#79716B] leading-[1.3] truncate">
          {attachment.meta}
        </span>
      </span>
      {onRemove && (
        <button
          onClick={onRemove}
          className="size-5 grid place-items-center rounded text-[#A6A09B] hover:bg-[#27272A0F] hover:text-[#14110F] transition-colors shrink-0"
          aria-label={`Remove ${attachment.name}`}
        >
          <X className="size-3" strokeWidth={2.25} />
        </button>
      )}
    </span>
  );
}

function Suggestion({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <li>
      <button className="w-full flex items-center gap-3 px-1 py-2.5 rounded-md text-left hover:bg-[#27272A0A] transition-colors">
        <span className="shrink-0 grid place-items-center size-4">{icon}</span>
        <span className="text-[14px] text-[#14110F] leading-[1.4] truncate">
          {label}
        </span>
      </button>
    </li>
  );
}

function SlackLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52ZM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313Z"
        fill="#E01E5A"
      />
      <path
        d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834ZM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312Z"
        fill="#36C5F0"
      />
      <path
        d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834ZM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312Z"
        fill="#2EB67D"
      />
      <path
        d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52ZM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313Z"
        fill="#ECB22E"
      />
    </svg>
  );
}

function SendPixelArrow() {
  // Pixelated arrow castle, rotated -90deg to point up. Ported from Paper.
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

export default function AccessPage() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const slashAnchorRef = useRef<HTMLDivElement>(null);

  const goBrief = () => router.push("/sandbox/brief");
  const slashOpen = value.startsWith("/");
  const query = slashOpen ? value.slice(1) : "";

  const handleSelectAgent = () => {
    setSelectedAgent("Recruiting Tool");
    setValue(RECRUITING_PROMPT);
    setAttachments(RECRUITING_ATTACHMENTS);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const removeAttachment = (name: string) =>
    setAttachments((prev) => prev.filter((a) => a.name !== name));

  const clearAgent = () => {
    setSelectedAgent(null);
    setAttachments([]);
    setValue("");
  };

  return (
    <div className="h-[calc(100dvh-49px)] bg-[#FAFAF9] flex">
      <SlashMenu
        open={slashOpen}
        query={query}
        anchorRef={slashAnchorRef}
        onClose={() => {
          setValue("");
          inputRef.current?.focus();
        }}
        onSelectAgent={handleSelectAgent}
        onSelectScoreShortlist={() => router.push("/sandbox/quick-score")}
      />
      <Sidebar width={260} mode="chat" />

      <div className="flex-1 flex flex-col bg-[#FAFAF9] min-w-0 relative">
        {/* Top bar with incognito icon (matches Mede's screenshot) */}
        <div className="px-6 py-3 flex items-center justify-end">
          <button
            className="size-8 grid place-items-center rounded-md hover:bg-line-soft transition-colors"
            aria-label="Private chat"
          >
            <EyeOff className="size-4 text-ink-soft" />
          </button>
        </div>

        {/* Hero welcome + composer */}
        <div className="flex-1 flex justify-center px-8 pt-16">
          <div className="w-full max-w-[760px]">
            <div className="mb-5">
              <div className="mb-5 fade-up fade-up-0">
                <VibeLogo size={34} />
              </div>
              <h1 className="text-[32px] leading-[1.1] tracking-tight font-semibold text-ink text-balance fade-up fade-up-1">
                Welcome, Mederic
              </h1>
            </div>

            {/* Composer — ported from Paper */}
            <div className="relative">
              <div
                className={
                  selectedAgent
                    ? "rounded-[14px] p-[1.5px] bg-[#FA500F] fade-up fade-up-2"
                    : "fade-up fade-up-2"
                }
              >
                {selectedAgent && (
                  <div className="flex items-center justify-between p-1.5 gap-2 slash-menu-enter">
                    <button className="inline-flex items-center h-8 px-2.5 gap-1 rounded-lg hover:bg-white/10 active:scale-[0.97] transition-[colors,transform] duration-150">
                      <span className="text-white text-[14px] font-medium">
                        @{selectedAgent}
                      </span>
                      <ChevronDown className="size-4 text-white" />
                    </button>
                    <button
                      onClick={clearAgent}
                      className="size-7 grid place-items-center rounded-lg hover:bg-white/10 active:scale-[0.97] transition-[colors,transform] duration-150 shrink-0"
                      aria-label="Remove agent"
                    >
                      <XCircle className="size-4 text-white" strokeWidth={2} />
                    </button>
                  </div>
                )}
                {/* Inner white card */}
                <div
                  className={
                    selectedAgent
                      ? "rounded-[12.5px] overflow-clip bg-white"
                      : "rounded-[14px] overflow-clip bg-white border border-[#27272A19] shadow-[0_1px_2px_rgba(15,23,42,0.08),0_6px_14px_-8px_rgba(15,23,42,0.08)]"
                  }
                >
                  <div className="flex flex-col p-3 gap-3 bg-white">
                    {/* Attachment chips */}
                    {attachments.length > 0 && (
                      <div className="flex flex-wrap gap-2 slash-menu-enter">
                        {attachments.map((a) => (
                          <FileChip
                            key={a.name}
                            attachment={a}
                            onRemove={() => removeAttachment(a.name)}
                          />
                        ))}
                      </div>
                    )}

                    {/* Input row */}
                    <div ref={slashAnchorRef} className="px-0.5">
                      <textarea
                        ref={inputRef}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Escape" && slashOpen) {
                            e.preventDefault();
                            setValue("");
                          }
                        }}
                        rows={selectedAgent ? 2 : 1}
                        autoFocus
                        placeholder="Ask anything…"
                        aria-label="Compose a message"
                        className="w-full resize-none bg-transparent text-[16px] leading-[150%] text-[#14110F] placeholder:text-[#A6A09B] outline-none border-none focus:outline-none focus:ring-0 min-h-6"
                      />
                    </div>

                    {/* Action row — 36px height */}
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
                          <span className="text-[14px] font-medium text-[#14110F] leading-none">1/4</span>
                        </button>
                        <button className="inline-flex items-center h-8 px-2.5 gap-1.5 rounded-md bg-white border border-[#27272A19] hover:bg-[#27272A0A] active:scale-[0.97] transition-[colors,transform] duration-150" aria-label="GitHub">
                          <Code2 className="size-4 text-[#57534D]" />
                        </button>
                      </div>

                      <button className="inline-flex items-center h-8 px-2.5 gap-1 rounded-lg hover:bg-[#27272A0A] active:scale-[0.97] transition-[colors,transform] duration-150">
                        <span className="text-[14px] font-medium text-[#79716B] leading-none">Fast</span>
                        <ChevronDown className="size-4 text-[#57534D]" />
                      </button>
                      <button
                        className="size-8 grid place-items-center rounded-lg bg-[#27272A0F] hover:bg-[#27272A1A] active:scale-[0.97] transition-[colors,transform] duration-150"
                        aria-label="Voice"
                      >
                        <Mic className="size-4 text-[#57534D]" />
                      </button>
                      <button
                        onClick={() => {
                          if (selectedAgent) goBrief();
                        }}
                        className="size-8 grid place-items-center rounded-lg bg-[#14110F] hover:bg-[#2A2420] active:scale-[0.97] transition-[colors,transform] duration-150 shadow-[inset_0_-1.5px_0_rgba(0,0,0,0.08)]"
                        aria-label="Send"
                      >
                        <SendPixelArrow />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-4 fade-up fade-up-3">
              <div className="text-[13px] text-[#A6A09B] mb-1 px-1">
                Suggested for you
              </div>
              <ul className="flex flex-col">
                <Suggestion
                  icon={<Shapes className="size-4 text-[#79716B]" strokeWidth={1.75} />}
                  label="Setup and discover what Work can do"
                />
                <Suggestion
                  icon={<SlackLogo />}
                  label="Catch me up on what matters today"
                />
                <Suggestion
                  icon={<Compass className="size-4 text-[#79716B]" strokeWidth={1.75} />}
                  label="Deep research on the latest AI news"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
