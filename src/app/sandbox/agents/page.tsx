"use client";

import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "@/components/shortlist/Sidebar";
import { cn } from "@/lib/utils";

type Tab = "all" | "mine" | "shared";

type AgentCard = {
  id: string;
  name: string;
  subtitle: string;
  by: string;
  href?: string;
  bg: string;
  icon: string;
  customMode?: boolean; // marks Apps with a canvas (Custom Mode primitive)
};

const AGENTS: AgentCard[] = [
  {
    id: "recruiting",
    name: "Recruiting",
    subtitle:
      "Source senior hires from your ATS first. Score, draft outreach, sign-off.",
    by: "By Mistral",
    href: "/sandbox/access?agent=recruiting",
    bg: "linear-gradient(135deg, #FF7A2C 0%, #FA500F 50%, #E14010 100%)",
    icon: "/sandbox/icons/recruiting.png?v=2",
    customMode: true,
  },
  {
    id: "alert-monitoring",
    name: "Alert Monitoring",
    subtitle:
      "Triage SCADA alerts on the APAC fleet. Pre-draft corrective actions for engineer commit.",
    by: "By Mistral",
    bg: "linear-gradient(135deg, #34D399 0%, #059669 100%)",
    icon: "/sandbox/icons/alert-monitoring.png",
    customMode: true,
  },
  {
    id: "trade-lane",
    name: "Trade Lane Optimizer",
    subtitle:
      "Compare routes, fuel, and schedules. Pre-draft re-routing proposals.",
    by: "By Mistral",
    bg: "linear-gradient(135deg, #60A5FA 0%, #2563EB 100%)",
    icon: "/sandbox/icons/trade-lane.png?v=2",
    customMode: true,
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    subtitle: "Convert any CSV file into an analysis.",
    by: "By Mistral",
    bg: "linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)",
    icon: "/sandbox/icons/data-analyst.png",
  },
  {
    id: "personal-tutor",
    name: "Personal Tutor",
    subtitle:
      "Experience personalized learning. Begin by asking for any subject.",
    by: "By Mistral",
    bg: "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)",
    icon: "/sandbox/icons/personal-tutor.png",
  },
  {
    id: "global-summarizer",
    name: "Global Summarizer",
    subtitle:
      "Summarize documents of any type into clear, concise summaries.",
    by: "By Mistral",
    bg: "linear-gradient(135deg, #FDE047 0%, #FACC15 100%)",
    icon: "/sandbox/icons/global-summarizer.png",
  },
];

export default function AgentsPage() {
  const [tab, setTab] = useState<Tab>("all");

  const sharedAgents = AGENTS.filter((a) => a.customMode === true);
  const browseAgents = AGENTS.filter((a) => a.customMode !== true);
  const showShared = tab === "all" || tab === "shared";
  const showBrowse = tab === "all";

  return (
    <div className="h-[calc(100dvh-49px)] bg-[#FAFAF9] flex antialiased">
      <Sidebar width={260} mode="chat" />
      <div className="flex-1 flex flex-col bg-[#FAFAF9] min-w-0 overflow-y-auto">
        {/* Page header */}
        <div className="flex items-start justify-between gap-6 px-10 pt-10 pb-7">
          <div className="flex flex-col gap-2 min-w-0 flex-1">
            <h1
              className="text-[32px] font-semibold text-[#14110F] leading-[1.2]"
              style={{ letterSpacing: "-0.02em" }}
            >
              My Agents
            </h1>
            <p className="text-[14px] text-[#79716B] leading-[1.42]">
              Your trusted sidekicks for automating tasks and supercharging
              productivity.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0 pt-2">
            <div className="inline-flex items-center h-9 bg-[#27272A0F] rounded-lg p-0.5 gap-0.5">
              <TabButton active={tab === "all"} onClick={() => setTab("all")}>
                All
              </TabButton>
              <TabButton active={tab === "mine"} onClick={() => setTab("mine")}>
                Mine
              </TabButton>
              <TabButton
                active={tab === "shared"}
                onClick={() => setTab("shared")}
              >
                Shared
              </TabButton>
            </div>
            <button className="h-9 px-3.5 rounded-lg bg-[#27272A0F] text-[13.5px] font-medium text-[#14110F] hover:bg-[#27272A14] active:scale-[0.97] transition-[colors,transform] duration-150">
              Create an Agent
            </button>
          </div>
        </div>

        {/* Sections */}
        <div className="px-10 pb-12 flex flex-col gap-10">
          {showShared && (
            <Section title="Made for CMA CGM">
              <Grid agents={sharedAgents} />
            </Section>
          )}

          {showBrowse && (
            <Section title="Browse Agents">
              <Grid agents={browseAgents} />
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5">
      <h2
        className="text-[18px] font-semibold text-[#14110F] leading-[1.3]"
        style={{ letterSpacing: "-0.015em" }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function Grid({ agents }: { agents: AgentCard[] }) {
  return (
    <div
      className="grid gap-5"
      style={{ gridTemplateColumns: "repeat(3, 304px)" }}
    >
      {agents.map((a) => (
        <AgentTile key={a.id} agent={a} />
      ))}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-8 px-3.5 rounded-md text-[13px] font-medium transition-colors",
        active
          ? "bg-white text-[#14110F] shadow-sm"
          : "text-[#79716B] hover:text-[#14110F]",
      )}
    >
      {children}
    </button>
  );
}

function AgentTile({ agent }: { agent: AgentCard }) {
  const Comp = (agent.href ? Link : "div") as React.ElementType;
  return (
    <Comp
      {...(agent.href ? { href: agent.href } : {})}
      className={cn(
        "flex flex-col bg-white rounded-2xl overflow-hidden border border-[#27272A14]",
        agent.href &&
          "hover:shadow-[0_4px_16px_rgba(15,23,42,0.08)] active:scale-[0.99] transition-[box-shadow,transform] duration-150 cursor-pointer",
      )}
    >
      <div
        className="w-full flex items-center justify-center relative"
        style={{ background: agent.bg, height: "165px" }}
      >
        {agent.customMode && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 h-5 px-2 rounded-md bg-white/22 backdrop-blur-sm text-[11px] font-medium text-white leading-none">
            <span className="size-1.5 rounded-full bg-white" />
            Custom Mode
          </span>
        )}
        <img
          src={agent.icon}
          alt=""
          width={80}
          height={80}
          className="block"
          style={{ imageRendering: "pixelated" }}
          aria-hidden
        />
      </div>
      <div className="flex flex-col flex-1 p-5 gap-2">
        <h3 className="text-[16px] font-semibold text-[#14110F] leading-[1.3]">
          {agent.name}
        </h3>
        <p className="text-[13.5px] text-[#525252] leading-[1.5]">
          {agent.subtitle}
        </p>
        <span className="text-[13px] text-[#79716B] mt-auto pt-2">
          {agent.by}
        </span>
      </div>
    </Comp>
  );
}
