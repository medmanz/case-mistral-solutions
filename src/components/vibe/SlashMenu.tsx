"use client";

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import {
  Upload,
  RotateCcw,
  Code2,
  Mail,
  Calendar,
  ImageIcon,
  Image,
  Globe,
  Lightbulb,
  Compass,
} from "lucide-react";
import { cn } from "@/lib/utils";

function BriefcaseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 14 14"
      shapeRendering="crispEdges"
      aria-hidden
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
  );
}

function TargetIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 14 14"
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="4" y="0" width="6" height="1" fill="#FA500F" />
      <rect x="2" y="1" width="10" height="1" fill="#FA500F" />
      <rect x="1" y="2" width="2" height="2" fill="#FA500F" />
      <rect x="11" y="2" width="2" height="2" fill="#FA500F" />
      <rect x="0" y="4" width="2" height="6" fill="#FA500F" />
      <rect x="12" y="4" width="2" height="6" fill="#FA500F" />
      <rect x="1" y="10" width="2" height="2" fill="#FA500F" />
      <rect x="11" y="10" width="2" height="2" fill="#FA500F" />
      <rect x="2" y="12" width="10" height="1" fill="#FA500F" />
      <rect x="4" y="13" width="6" height="1" fill="#FA500F" />
      <rect x="3" y="2" width="8" height="2" fill="#FFFFFF" />
      <rect x="2" y="4" width="3" height="1" fill="#FFFFFF" />
      <rect x="9" y="4" width="3" height="1" fill="#FFFFFF" />
      <rect x="2" y="5" width="2" height="1" fill="#FFFFFF" />
      <rect x="10" y="5" width="2" height="1" fill="#FFFFFF" />
      <rect x="2" y="6" width="2" height="2" fill="#FFFFFF" />
      <rect x="10" y="6" width="2" height="2" fill="#FFFFFF" />
      <rect x="2" y="8" width="2" height="1" fill="#FFFFFF" />
      <rect x="10" y="8" width="2" height="1" fill="#FFFFFF" />
      <rect x="2" y="9" width="3" height="1" fill="#FFFFFF" />
      <rect x="9" y="9" width="3" height="1" fill="#FFFFFF" />
      <rect x="3" y="10" width="8" height="2" fill="#FFFFFF" />
      <rect x="5" y="4" width="4" height="1" fill="#E10500" />
      <rect x="4" y="5" width="6" height="1" fill="#E10500" />
      <rect x="4" y="6" width="2" height="2" fill="#E10500" />
      <rect x="8" y="6" width="2" height="2" fill="#E10500" />
      <rect x="4" y="8" width="6" height="1" fill="#E10500" />
      <rect x="5" y="9" width="4" height="1" fill="#E10500" />
      <rect x="6" y="6" width="2" height="2" fill="#FFD700" />
    </svg>
  );
}

function DocumentIcon() {
  // Pixel-art document with text lines, no Mistral branding (Mine agent)
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 14 14"
      shapeRendering="crispEdges"
      aria-hidden
    >
      {/* Page outline */}
      <rect x="2" y="0" width="8" height="1" fill="#57534D" />
      <rect x="2" y="13" width="10" height="1" fill="#57534D" />
      <rect x="2" y="1" width="1" height="12" fill="#57534D" />
      <rect x="12" y="3" width="1" height="10" fill="#57534D" />
      {/* Folded corner */}
      <rect x="10" y="0" width="1" height="1" fill="#57534D" />
      <rect x="11" y="1" width="1" height="1" fill="#57534D" />
      <rect x="12" y="2" width="1" height="1" fill="#57534D" />
      <rect x="10" y="1" width="2" height="2" fill="#E7E5E4" />
      {/* Page fill */}
      <rect x="3" y="1" width="7" height="12" fill="#FFFFFF" />
      <rect x="10" y="3" width="2" height="10" fill="#FFFFFF" />
      {/* Text lines */}
      <rect x="4" y="3" width="5" height="1" fill="#FA500F" />
      <rect x="4" y="5" width="7" height="1" fill="#A6A09B" />
      <rect x="4" y="7" width="7" height="1" fill="#A6A09B" />
      <rect x="4" y="9" width="5" height="1" fill="#A6A09B" />
      <rect x="4" y="11" width="6" height="1" fill="#A6A09B" />
    </svg>
  );
}

function MagnifyingGlassIcon() {
  // Pixel-art magnifying glass without Mistral branding (Mine agent)
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 14 14"
      shapeRendering="crispEdges"
      aria-hidden
    >
      {/* Outer ring (gray) */}
      <rect x="3" y="0" width="6" height="1" fill="#57534D" />
      <rect x="2" y="1" width="1" height="1" fill="#57534D" />
      <rect x="9" y="1" width="1" height="1" fill="#57534D" />
      <rect x="1" y="2" width="1" height="5" fill="#57534D" />
      <rect x="10" y="2" width="1" height="5" fill="#57534D" />
      <rect x="2" y="7" width="1" height="1" fill="#57534D" />
      <rect x="9" y="7" width="1" height="1" fill="#57534D" />
      <rect x="3" y="8" width="6" height="1" fill="#57534D" />
      {/* Lens (white) */}
      <rect x="3" y="1" width="6" height="1" fill="#FFFFFF" />
      <rect x="2" y="2" width="8" height="5" fill="#FFFFFF" />
      <rect x="3" y="7" width="6" height="1" fill="#FFFFFF" />
      {/* Glare highlight */}
      <rect x="3" y="2" width="2" height="1" fill="#E7E5E4" />
      <rect x="3" y="3" width="1" height="1" fill="#E7E5E4" />
      {/* Handle (gray gradient) */}
      <rect x="9" y="8" width="2" height="1" fill="#57534D" />
      <rect x="10" y="9" width="2" height="1" fill="#57534D" />
      <rect x="11" y="10" width="2" height="1" fill="#57534D" />
      <rect x="12" y="11" width="2" height="1" fill="#57534D" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 14 14"
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="1" y="1" width="12" height="1" fill="#FFAF00" />
      <rect x="1" y="2" width="12" height="5" fill="#FFD700" />
      <rect x="0" y="3" width="1" height="3" fill="#FFAF00" />
      <rect x="13" y="3" width="1" height="3" fill="#FFAF00" />
      <rect x="3" y="2" width="1" height="1" fill="#FA500F" />
      <rect x="10" y="2" width="1" height="1" fill="#FA500F" />
      <rect x="3" y="3" width="2" height="1" fill="#FA500F" />
      <rect x="9" y="3" width="2" height="1" fill="#FA500F" />
      <rect x="3" y="4" width="8" height="1" fill="#E10500" />
      <rect x="3" y="5" width="1" height="1" fill="#E10500" />
      <rect x="6" y="5" width="2" height="1" fill="#E10500" />
      <rect x="10" y="5" width="1" height="1" fill="#E10500" />
      <rect x="2" y="6" width="3" height="1" fill="#E10500" />
      <rect x="9" y="6" width="3" height="1" fill="#E10500" />
      <rect x="2" y="7" width="10" height="1" fill="#FFD700" />
      <rect x="3" y="8" width="8" height="1" fill="#FFD700" />
      <rect x="6" y="9" width="2" height="2" fill="#FFAF00" />
      <rect x="3" y="11" width="8" height="1" fill="#FFAF00" />
      <rect x="2" y="12" width="10" height="1" fill="#FFAF00" />
    </svg>
  );
}

type Item = {
  id: string;
  label: string;
  hint?: string;
  icon: React.ReactNode;
  badge?: string;
  highlighted?: boolean;
  subtle?: boolean;
  onSelect?: () => void;
};

type SubGroup = {
  label: string;
  items: Item[];
};

type Section = {
  label?: string;
  items?: Item[];
  subgroups?: SubGroup[];
  variant?: "skill" | "single";
};

export function SlashMenu({
  open,
  query = "",
  anchorRef,
  onClose,
  onSelectAgent,
  onSelectScoreShortlist,
}: {
  open: boolean;
  query?: string;
  anchorRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
  onSelectAgent: () => void;
  onSelectScoreShortlist?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useLayoutEffect(() => {
    if (!open || !anchorRef.current) return;
    const update = () => {
      const r = anchorRef.current?.getBoundingClientRect();
      if (!r) return;
      setPos({ top: r.bottom + 8, left: r.left });
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open, anchorRef]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open || !mounted || !pos) return null;

  const SECTIONS: Section[] = [
    {
      variant: "single",
      items: [
        {
          id: "upload",
          label: "Upload Files",
          icon: <Upload className="size-4 text-[#57534D]" strokeWidth={2} />,
        },
        {
          id: "reset",
          label: "Reset input",
          icon: <RotateCcw className="size-4 text-[#57534D]" strokeWidth={2} />,
        },
      ],
    },
    {
      label: "Agents",
      subgroups: [
        {
          label: "Mine",
          items: [
            {
              id: "jd-writer",
              label: "Job description writer",
              icon: <DocumentIcon />,
            },
            {
              id: "screening-notes",
              label: "Screening notes summarizer",
              icon: <MagnifyingGlassIcon />,
            },
          ],
        },
        {
          label: "Shared",
          items: [
            {
              id: "recruiting",
              label: "Recruiting Tool",
              icon: <BriefcaseIcon />,
              onSelect: onSelectAgent,
            },
            {
              id: "alert-monitoring",
              label: "Alert Monitoring Tool",
              icon: <TargetIcon />,
            },
            {
              id: "customer-support",
              label: "Customer Support Tool",
              icon: <TrophyIcon />,
            },
          ],
        },
      ],
    },
    {
      label: "Connectors",
      items: [
        {
          id: "github",
          label: "GitHub",
          icon: <Code2 className="size-4 text-[#57534D]" strokeWidth={2} />,
        },
        {
          id: "gmail",
          label: "Gmail",
          icon: <Mail className="size-4 text-[#57534D]" strokeWidth={2} />,
        },
        {
          id: "calendar",
          label: "Calendar",
          icon: <Calendar className="size-4 text-[#57534D]" strokeWidth={2} />,
        },
      ],
    },
    {
      label: "Skills",
      variant: "skill",
      items: [
        {
          id: "plan-sourcing",
          label: "plan-sourcing",
          hint: "Propose target companies and candidate archetypes before sourcing",
          icon: <Compass className="size-4 text-mistral-orange" strokeWidth={2} />,
          onSelect: onSelectAgent,
        },
        {
          id: "source-candidates",
          label: "source-candidates",
          hint: "Find candidates across LinkedIn, Workday, and industry networks",
          icon: <Lightbulb className="size-4 text-mistral-orange" strokeWidth={2} />,
          onSelect: onSelectAgent,
        },
        {
          id: "score-shortlist",
          label: "score-shortlist",
          hint: "Rank candidates with explainable reasons",
          icon: <Lightbulb className="size-4 text-mistral-orange" strokeWidth={2} />,
          onSelect: onSelectScoreShortlist ?? onSelectAgent,
        },
        {
          id: "draft-outreach",
          label: "draft-outreach",
          hint: "Generate personalized first contact messages",
          icon: <Lightbulb className="size-4 text-mistral-orange" strokeWidth={2} />,
          onSelect: onSelectAgent,
        },
        {
          id: "check-pipeline-status",
          label: "check-pipeline-status",
          hint: "See where each candidate stands",
          icon: <Lightbulb className="size-4 text-mistral-orange" strokeWidth={2} />,
          onSelect: onSelectAgent,
        },
        {
          id: "schedule-followup",
          label: "schedule-followup",
          hint: "Plan reminders and next steps",
          icon: <Lightbulb className="size-4 text-mistral-orange" strokeWidth={2} />,
          onSelect: onSelectAgent,
        },
      ],
    },
    {
      label: "Tools",
      items: [
        {
          id: "image-generation",
          label: "Image generation",
          icon: <ImageIcon className="size-4 text-[#57534D]" strokeWidth={2} />,
        },
        {
          id: "canvas",
          label: "Canvas",
          icon: <Image className="size-4 text-[#57534D]" strokeWidth={2} />,
        },
        {
          id: "web-search",
          label: "Web search",
          icon: <Globe className="size-4 text-[#57534D]" strokeWidth={2} />,
        },
      ],
    },
  ];

  const filtered = filterSections(SECTIONS, query);
  const hasResults = filtered.some(
    (s) =>
      (s.items && s.items.length > 0) ||
      (s.subgroups && s.subgroups.some((g) => g.items.length > 0))
  );

  return createPortal(
    <div
      ref={ref}
      role="listbox"
      aria-label="Slash menu"
      style={{ top: pos.top, left: pos.left }}
      className="slash-menu-enter fixed z-50 w-[256px] max-h-[300px] flex flex-col rounded-xl border border-[#27272A19] bg-white shadow-[0_8px_24px_-6px_rgba(15,23,42,0.18),0_2px_4px_rgba(15,23,42,0.06)] overflow-clip origin-top-left"
    >
      <div className="flex-1 overflow-y-auto pt-2 px-2">
        {!hasResults && (
          <div className="px-2 py-6 text-center">
            <p className="text-[13px] text-[#79716B]">
              No match for{" "}
              <span className="font-mono text-[#14110F]">/{query}</span>
            </p>
          </div>
        )}
        {filtered.map((section, si) => (
          <div key={si} className={si === 0 ? "" : "mt-1"}>
            {section.label && (
              <div className="flex items-center justify-between py-0.5 px-1.5">
                <span className="text-[11px] uppercase text-[#79716B] tracking-wide font-medium">
                  {section.label}
                </span>
              </div>
            )}
            {section.subgroups ? (
              <div className="flex flex-col">
                {section.subgroups.map((group, gi) => (
                  <div key={gi} className={gi === 0 ? "" : "mt-1.5"}>
                    <div className="px-1.5 pt-0.5 pb-1">
                      <span className="text-[9.5px] uppercase tracking-[0.08em] text-[#A6A09B]">
                        {group.label}
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      {group.items.map((item) => (
                        <SlashMenuRow
                          key={item.id}
                          item={item}
                          variant={section.variant ?? "single"}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-0.5">
                {section.items?.map((item) => (
                  <SlashMenuRow
                    key={item.id}
                    item={item}
                    variant={section.variant ?? "single"}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 border-t border-[#27272A19] bg-white px-2 py-1.5">
        <button
          onClick={onClose}
          className="w-full flex items-center justify-between rounded-lg py-1 px-2 hover:bg-[#27272A0A] active:scale-[0.99] transition-[colors,transform] duration-150"
        >
          <span className="text-[13px] font-medium text-[#57534D]">
            Close menu
          </span>
          <span className="flex items-center h-4 rounded-md px-1 bg-[#27272A0F]">
            <span className="text-[10px] font-medium text-[#57534D]">ESC</span>
          </span>
        </button>
      </div>
    </div>,
    document.body
  );
}

function matchesQuery(item: Item, q: string): boolean {
  if (!q) return true;
  const haystack = `${item.label} ${item.hint ?? ""}`.toLowerCase();
  return haystack.includes(q.toLowerCase());
}

function filterSections(sections: Section[], query: string): Section[] {
  if (!query) return sections;
  const out: Section[] = [];
  for (const section of sections) {
    if (section.subgroups) {
      const subgroups = section.subgroups
        .map((g) => ({
          ...g,
          items: g.items.filter((i) => matchesQuery(i, query)),
        }))
        .filter((g) => g.items.length > 0);
      if (subgroups.length > 0) {
        out.push({ ...section, subgroups });
      }
    } else {
      const items = (section.items ?? []).filter((i) =>
        matchesQuery(i, query)
      );
      if (items.length > 0) {
        out.push({ ...section, items });
      }
    }
  }
  return out;
}

function SlashMenuRow({
  item,
  variant,
}: {
  item: Item;
  variant: "skill" | "single";
}) {
  const stacked = !!item.hint;
  return (
    <button
      onClick={item.onSelect}
      className={cn(
        "w-full flex rounded-md gap-2 text-left transition-colors active:scale-[0.997] duration-100",
        stacked || variant === "skill"
          ? "items-start p-1.5"
          : "items-center py-1 px-1.5",
        item.highlighted
          ? "bg-mistral-orange/[0.08] hover:bg-mistral-orange/[0.14] ring-1 ring-mistral-orange/25"
          : "hover:bg-[#27272A0A]"
      )}
    >
      <span
        className={cn(
          "shrink-0 grid place-items-center",
          item.highlighted ? "size-7" : "size-5",
          stacked && "mt-0.5"
        )}
      >
        {item.icon}
      </span>
      <span className="flex flex-col min-w-0 flex-1">
        <span className="flex items-center gap-1.5 min-w-0">
          <span
            className={cn(
              "line-clamp-1 leading-[1.4]",
              item.subtle ? "text-[12.5px] text-[#79716B]" : "text-[13px]",
              item.highlighted
                ? "text-[#14110F] font-medium"
                : !item.subtle && "text-[#14110F]"
            )}
          >
            {item.label}
          </span>
          {item.badge && (
            <span className="text-[9.5px] uppercase tracking-wider font-medium text-mistral-orange bg-mistral-orange/10 px-1 py-0.5 rounded shrink-0">
              {item.badge}
            </span>
          )}
        </span>
        {item.hint && (
          <span className="text-[11.5px] text-[#79716B] line-clamp-1 leading-[1.3]">
            {item.hint}
          </span>
        )}
      </span>
    </button>
  );
}

