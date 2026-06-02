"use client";

import Link from "next/link";
import {
  Search,
  PanelRight,
  Plus,
  ChevronDown,
  ChevronsUpDown,
  CirclePlus,
  Briefcase,
  Box,
  Folder,
  Calendar,
  ArrowUpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "chat" | "work";

const SIDEBAR_BG = "#FAFAF9";

export function Sidebar({
  width = 260,
  mode = "work",
  activeChat,
}: {
  width?: number;
  mode?: Mode;
  activeChat?: string;
} = {}) {
  return (
    <aside
      style={{ width: `${width}px`, backgroundColor: SIDEBAR_BG }}
      className="shrink-0 flex flex-col h-full border-r border-[#27272A19]"
    >
      <Header mode={mode} />

      {mode === "chat" ? <ChatNav activeChat={activeChat} /> : <WorkNav />}

      <UserBlock subtitle={mode === "chat" ? "Vibe Free" : "CMA CGM · Enterprise"} />

      {mode === "chat" && <UpgradeCard />}
    </aside>
  );
}

function Header({ mode }: { mode: Mode }) {
  return (
    <div className="flex flex-col w-full pt-5 px-3 gap-3 mb-3">
      <div className="flex items-center min-w-0 gap-1">
        <div className="flex items-center h-12 max-w-full rounded-lg px-2 gap-3">
          {/* Vibe logo — simplified M castle */}
          <div className="flex items-center justify-center shrink-0 rounded-md overflow-clip size-8 bg-mistral-orange">
            <svg
              width="16"
              height="11.4"
              viewBox="0 0 80 57"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M45.715 45.158H57.144V33.869H45.714L45.715 45.158H34.285V33.869H22.857V45.158H34.285V56.448H0V45.158H11.429V0H22.857V11.29H34.286V22.579H45.715V11.29H57.144V0H68.572V45.158H80V56.448H45.715V45.158Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
          <span className="text-[16px] font-bold text-[#14110F] leading-none">Vibe</span>
          <ChevronDown className="size-4 text-[#14110F] shrink-0" />
        </div>
        <div className="flex items-center shrink-0 ml-auto -mr-1 gap-1">
          <button className="size-6 grid place-items-center rounded-lg hover:bg-[#27272A0F] transition-colors" aria-label="Search">
            <Search className="size-[18px] text-[#A6A09B]" strokeWidth={2} />
          </button>
          <button className="size-6 grid place-items-center rounded-lg hover:bg-[#27272A0F] transition-colors" aria-label="Collapse sidebar">
            <PanelRight className="size-[18px] text-[#A6A09B]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Chat / Work pill toggle */}
      <div className="my-1">
        <div className="flex h-9 w-full rounded-lg p-0.5 gap-0.5 bg-[#27272A0F]">
          <ToggleTab href="/sandbox/access" active={mode === "chat"}>Chat</ToggleTab>
          <ToggleTab href="/sandbox/shortlist" active={mode === "work"}>Work</ToggleTab>
        </div>
      </div>
    </div>
  );
}

function ToggleTab({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex-1 flex items-center justify-center py-1.5 px-2.5 rounded-md text-[14px] font-medium transition-colors",
        active
          ? "text-[#14110F] bg-white shadow-sm"
          : "text-[#79716B] hover:text-[#14110F]"
      )}
    >
      {children}
    </Link>
  );
}

function ChatNav({ activeChat }: { activeChat?: string }) {
  return (
    <div className="flex flex-col grow min-h-0 overflow-clip gap-6">
      <div className="flex flex-col gap-0.5">
        <NavRow
          icon={<CirclePlus className="size-4" strokeWidth={2} />}
          label="New Chat"
        />
        <NavRow
          icon={<Briefcase className="size-4 text-[#14110F]" strokeWidth={1.75} />}
          label="Agents"
        />
        <NavRow
          icon={<Box className="size-4 text-[#14110F]" strokeWidth={1.75} />}
          label="Context"
        />
      </div>

      <div className="flex flex-col grow min-h-0 overflow-y-auto pb-20 gap-4">
        <div>
          <SectionHeader label="Projects" />
          {/* Empty per Paper */}
        </div>

        <div>
          <SectionHeader label="Chats" />
          <div className="flex flex-col gap-1">
            {[
              "Quick score - John Doe",
              "Senior Supply Chain Manager search",
              "Finding Job Candidates",
              "Recrutement Python Paris",
              "AI Recruiting Assistant for HR Teams",
              "Navigating Daily Conversations",
              "Activités GitHub et contributions",
              "Raconter une histoire courte",
            ].map((label) => (
              <ChatItem
                key={label}
                label={label}
                active={activeChat === label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkNav() {
  return (
    <div className="flex flex-col grow min-h-0 overflow-clip gap-6">
      <div className="flex flex-col gap-0.5">
        <NavRow
          icon={<CirclePlus className="size-4" strokeWidth={2} />}
          label="New Task"
        />
        <NavRow
          icon={<Box className="size-4 text-[#14110F]" strokeWidth={1.75} />}
          label="Context"
        />
        <NavRow
          icon={<Calendar className="size-4 text-[#14110F]" strokeWidth={1.75} />}
          label="Scheduled"
          badge="Preview"
        />
      </div>

      <div className="flex flex-col grow min-h-0 overflow-y-auto pb-20 gap-6">
        <div>
          <SectionHeader label="Projects" />
          <div className="flex flex-col gap-1">
            <ChatItem
              label="Hiring Q3"
              icon={<Folder className="size-3.5 text-[#79716B]" />}
            />
          </div>
        </div>

        <div>
          <SectionHeader label="Tasks" />
          <div className="flex flex-col gap-1">
            <ChatItem label="Senior Supply Chain Manager search" active />
            <ChatItem label="Staff PM intro briefs" muted />
            <ChatItem label="EU Design Lead pipeline" muted />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavRow({
  icon,
  label,
  badge,
  highlighted,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  highlighted?: boolean;
}) {
  return (
    <div className="mx-3">
      <button
        className={cn(
          "group w-full flex items-center h-8 rounded-lg px-2 gap-1.5 transition-colors hover:bg-[#27272A0A]",
          highlighted && "bg-[#27272A0F]"
        )}
      >
        <span
          className={cn(
            "m-1 grid place-items-center size-4 shrink-0 transition-colors",
            highlighted
              ? "text-mistral-orange"
              : "text-[#14110F] group-hover:text-mistral-orange"
          )}
        >
          {icon}
        </span>
        <span className="text-[14px] text-[#14110F] flex-1 text-left leading-snug line-clamp-1" style={{ fontWeight: 450 }}>
          {label}
        </span>
        {badge && (
          <span className="text-[9.5px] uppercase tracking-wider text-[#79716B] bg-[#27272A0F] px-1 py-0.5 rounded">
            {badge}
          </span>
        )}
      </button>
    </div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between sticky w-full px-2 py-1" style={{ backgroundColor: SIDEBAR_BG }}>
      <div className="flex items-center justify-between w-full px-2 gap-2">
        <span className="text-[12px] font-medium text-[#57534D]">{label}</span>
        <button className="size-6 grid place-items-center rounded-lg hover:bg-[#27272A0F] transition-colors" aria-label={`New ${label.toLowerCase()}`}>
          <Plus className="size-[18px] text-[#A6A09B]" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px shrink-0 border-t border-[#27272A33] mx-3 my-3" />
  );
}

function ChatItem({
  label,
  active,
  muted,
  icon,
}: {
  label: string;
  active?: boolean;
  muted?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div className="mx-3">
      <button
        className={cn(
          "w-full flex items-center h-8 rounded-lg px-2 gap-1.5 transition-colors text-left",
          active ? "bg-[#27272A0F]" : "hover:bg-[#27272A0A]"
        )}
      >
        {icon && (
          <span className="shrink-0 grid place-items-center size-4">
            {icon}
          </span>
        )}
        <span
          className="text-[14px] flex-1 line-clamp-1 leading-[1.4] text-[#14110F]"
          style={{ fontWeight: 450 }}
        >
          {label}
        </span>
      </button>
    </div>
  );
}

function UserBlock({ subtitle }: { subtitle: string }) {
  return (
    <div className="w-full px-4 py-2">
      <button className="w-full flex items-center h-12 rounded-[10px] pl-2 pr-1.5 py-2 gap-3 hover:bg-[#27272A0A] transition-colors">
        <span className="size-8 grid place-items-center rounded-md bg-[#E7E5E4] text-[12px] font-semibold text-[#57534D] shrink-0">
          MM
        </span>
        <span className="flex flex-col min-w-0 grow text-left">
          <span className="text-[14px] leading-[18px] font-medium text-[#57534D] truncate">
            Mederic Maniere
          </span>
          <span className="text-[12px] leading-[16px] text-[#79716B] truncate">
            {subtitle}
          </span>
        </span>
        <ChevronsUpDown className="size-4 text-[#57534D] shrink-0" />
      </button>
    </div>
  );
}

function UpgradeCard() {
  return (
    <div className="px-4 py-5 border-t border-[#27272A0A]">
      <button className="w-full flex items-center justify-between rounded-sm py-2.5 px-3 gap-2 bg-white border border-[#27272A19] hover:bg-[#FAFAF9] active:scale-[0.99] transition-[colors,transform] duration-150 outline-4 outline-[#27272A0A]">
        <span className="flex items-center gap-1.5">
          <ArrowUpCircle className="size-5 text-[#BBBBBB]" strokeWidth={2} />
          <span className="text-[14px] font-medium text-[#14110F]">
            Upgrade to Vibe Pro
          </span>
        </span>
        <span className="flex rounded-xs overflow-clip">
          <span className="h-4 w-1.5 bg-[#FEBC06]" />
          <span className="h-4 w-1.5 bg-[#FEA806]" />
          <span className="h-4 w-1.5 bg-[#FF9C05]" />
          <span className="h-4 w-1.5 bg-[#FC6F0D]" />
        </span>
      </button>
    </div>
  );
}
