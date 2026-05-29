"use client";

import {
  Search,
  PanelLeftClose,
  Plus,
  Box,
  Calendar,
  Folder,
  ChevronsUpDown,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  return (
    <aside className="w-[244px] shrink-0 border-r border-line bg-surface-subtle flex flex-col h-full">
      {/* Top: logo + workspace + controls */}
      <div className="px-3 pt-3 pb-2 flex items-center gap-2">
        <div className="size-7 rounded-md bg-mistral-orange grid place-items-center text-white text-[11px] font-semibold tracking-tight">
          M
        </div>
        <button className="flex items-center gap-1 px-1.5 py-1 rounded-md hover:bg-line-soft transition-colors">
          <span className="text-[13px] font-medium text-ink">Vibe</span>
          <ChevronDown className="size-3 text-ink-soft" />
        </button>
        <div className="ml-auto flex items-center gap-1">
          <button className="size-7 grid place-items-center rounded-md hover:bg-line-soft transition-colors">
            <Search className="size-3.5 text-ink-soft" />
          </button>
          <button className="size-7 grid place-items-center rounded-md hover:bg-line-soft transition-colors">
            <PanelLeftClose className="size-3.5 text-ink-soft" />
          </button>
        </div>
      </div>

      {/* Chat / Work tabs */}
      <div className="px-3 pt-1 pb-3">
        <div className="bg-surface-sunken rounded-lg p-1 flex gap-1">
          <button className="flex-1 px-2 py-1 text-[12px] font-medium text-ink-soft hover:text-ink transition-colors rounded-md">
            Chat
          </button>
          <button className="flex-1 px-2 py-1 text-[12px] font-medium text-ink bg-surface rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            Work
          </button>
        </div>
      </div>

      {/* New Task CTA */}
      <div className="px-3 pb-2">
        <button className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-line bg-surface hover:border-ink-faint transition-colors text-[13px] font-medium text-ink">
          <Plus className="size-3.5 text-mistral-orange" strokeWidth={2.25} />
          New Task
        </button>
      </div>

      {/* Nav items */}
      <nav className="px-3 pt-1 pb-2 space-y-0.5">
        <SidebarItem icon={<Box className="size-3.5" />} label="Context" />
        <SidebarItem
          icon={<Calendar className="size-3.5" />}
          label="Scheduled"
          badge="Preview"
        />
      </nav>

      {/* Projects section */}
      <div className="px-3 pt-3 pb-1 flex items-center justify-between">
        <span className="mono-tag !text-[10px]">Projects</span>
        <button className="size-5 grid place-items-center rounded hover:bg-line-soft transition-colors">
          <Plus className="size-3 text-ink-soft" />
        </button>
      </div>
      <div className="px-3 space-y-0.5">
        <SidebarItem icon={<Folder className="size-3.5" />} label="Hiring Q3" />
      </div>

      {/* Tasks section */}
      <div className="px-3 pt-4 pb-1">
        <span className="mono-tag !text-[10px]">Tasks</span>
      </div>
      <div className="px-3 space-y-0.5 flex-1">
        <SidebarItem label="Senior Backend Engineer search" active />
        <SidebarItem label="Staff PM intro briefs" muted />
        <SidebarItem label="EU Design Lead pipeline" muted />
      </div>

      {/* Bottom user block */}
      <div className="px-3 py-3 border-t border-line">
        <button className="w-full flex items-center gap-2.5 px-1 py-1.5 rounded-lg hover:bg-line-soft transition-colors">
          <div className="size-7 rounded-md bg-mistral-cream-warm grid place-items-center text-[11px] font-medium text-ink">
            MM
          </div>
          <div className="flex-1 text-left leading-tight">
            <div className="text-[12px] font-medium text-ink">
              Médéric Manière
            </div>
            <div className="text-[11px] text-ink-soft">La Fromagerie · Pro</div>
          </div>
          <ChevronsUpDown className="size-3 text-ink-soft" />
        </button>
      </div>
    </aside>
  );
}

function SidebarItem({
  icon,
  label,
  badge,
  active,
  muted,
}: {
  icon?: React.ReactNode;
  label: string;
  badge?: string;
  active?: boolean;
  muted?: boolean;
}) {
  return (
    <button
      className={cn(
        "w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-[13px] text-left transition-colors",
        active &&
          "bg-surface text-ink font-medium shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-line",
        !active && !muted && "text-ink hover:bg-line-soft",
        muted && "text-ink-soft hover:bg-line-soft"
      )}
    >
      {icon && <span className="text-ink-soft">{icon}</span>}
      <span className="truncate">{label}</span>
      {badge && (
        <span className="ml-auto text-[9.5px] uppercase tracking-wider text-ink-soft bg-surface-sunken px-1 py-0.5 rounded">
          {badge}
        </span>
      )}
    </button>
  );
}
