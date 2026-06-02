"use client";

import {
  Search,
  ChevronDown,
  Home,
  Layers,
  Key,
  Play,
  Bot,
  Boxes,
  Activity,
  CheckCircle2,
  Wrench,
  Plug,
  FileText,
  Code2,
  Circle,
  CircleDot,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type AgentBlock = {
  name: string;
  role: string;
  skills: string[];
  connectors?: string[];
  signOff?: boolean;
  status: "live" | "draft";
};

const AGENTS: AgentBlock[] = [
  {
    name: "Sourcing Agent",
    role: "Finds candidates across sources",
    skills: ["search_linkedin", "search_github", "cross_check_ats"],
    connectors: ["LinkedIn Recruiter", "GitHub", "Greenhouse"],
    status: "live",
  },
  {
    name: "Scoring Agent",
    role: "Scores fit with explainable reasons",
    skills: ["score_candidate", "explain_score", "flag_risk"],
    status: "live",
  },
  {
    name: "Outreach Agent",
    role: "Drafts the first contact, waits for commit",
    skills: ["draft_message", "personalize_voice"],
    connectors: ["Gmail", "Calendar"],
    signOff: true,
    status: "live",
  },
  {
    name: "Pipeline Agent",
    role: "Tracks state, suggests next moves",
    skills: ["track_stage", "propose_relance", "schedule_screening"],
    connectors: ["Calendar", "Greenhouse"],
    signOff: true,
    status: "live",
  },
];

const SIDEBAR_HOME = [
  { icon: Home, label: "Home" },
  { icon: Layers, label: "Workspace" },
  { icon: Key, label: "API Keys" },
];

const SIDEBAR_CREATE = [
  { icon: Play, label: "Playground" },
  { icon: Bot, label: "Agents", active: true },
  { icon: Boxes, label: "Batches" },
];

const SIDEBAR_IMPROVE = [
  { icon: Activity, label: "Observe", live: true },
  { icon: CheckCircle2, label: "Evaluate" },
  { icon: Wrench, label: "Fine-tune" },
];

const SIDEBAR_MANAGE = [
  { icon: Plug, label: "Connectors" },
  { icon: FileText, label: "Files" },
];

export function SolutionsKit() {
  return (
    <section id="kit" className="py-20">
      <div className="max-w-[760px] mx-auto">
        <p className="mono-tag mb-3">Part four of four · The factory</p>
        <h2 className="text-[26px] leading-tight tracking-tight font-semibold text-ink text-balance">
          Solutions kit
        </h2>
        <p className="mt-4 text-ink-muted text-pretty">
          The composition lives in AI Studio. The Recruiting Tool users see in
          Vibe is the front. The back is a Workflow in AI Studio, built once
          by Solutions, deployed to every client.
        </p>
      </div>

      <div className="mt-10 max-w-[760px] mx-auto">
        {/* AI Studio mockup */}
        <div className="rounded-2xl border border-line bg-surface overflow-hidden shadow-[0_1px_3px_rgba(26,22,20,0.04),0_24px_60px_-30px_rgba(26,22,20,0.22)]">
          <div className="flex h-[680px]">
            {/* Sidebar */}
            <aside className="w-[228px] shrink-0 border-r border-line bg-surface-subtle flex flex-col">
              <div className="px-3 pt-3 pb-3 flex items-center gap-2">
                <div className="size-7 rounded-md bg-ink grid place-items-center text-white text-[10px] font-semibold tracking-tight">
                  M
                </div>
                <button className="flex items-center gap-1 px-1.5 py-1 rounded-md hover:bg-line-soft transition-colors">
                  <span className="text-[12.5px] font-medium text-ink">
                    AI Studio
                  </span>
                  <ChevronDown className="size-3 text-ink-soft" />
                </button>
                <button className="ml-auto size-7 grid place-items-center rounded-md hover:bg-line-soft transition-colors">
                  <Search className="size-3.5 text-ink-soft" />
                </button>
              </div>

              <div className="px-3 pt-1 pb-3">
                <div className="rounded-md bg-surface border border-line px-2.5 py-1.5 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-mistral-orange" />
                  <span className="text-[11.5px] text-ink-muted truncate">
                    La Fromagerie · Enterprise
                  </span>
                  <ChevronDown className="size-3 text-ink-soft ml-auto" />
                </div>
              </div>

              <SidebarGroup items={SIDEBAR_HOME} />

              <SidebarLabel label="Create" />
              <SidebarGroup items={SIDEBAR_CREATE} />

              <SidebarLabel label="Improve" />
              <SidebarGroup items={SIDEBAR_IMPROVE} />

              <SidebarLabel label="Manage" />
              <SidebarGroup items={SIDEBAR_MANAGE} />

              <SidebarLabel label="Code" />
              <SidebarGroup items={[{ icon: Code2, label: "Mistral Code" }]} />

              <div className="mt-auto px-3 py-3">
                <button className="w-full flex items-center gap-2 px-1 py-1 rounded hover:bg-line-soft transition-colors">
                  <div className="size-6 rounded-md bg-mistral-cream-warm grid place-items-center text-[10px] font-medium text-ink">
                    MM
                  </div>
                  <span className="text-[11.5px] text-ink truncate text-left">
                    medericmaniere@…
                  </span>
                </button>
              </div>
            </aside>

            {/* Main area */}
            <div className="flex-1 flex flex-col bg-surface min-w-0">
              {/* Breadcrumb */}
              <div className="px-8 py-3.5 border-b border-line flex items-center justify-between">
                <div className="flex items-center gap-2 text-[12.5px]">
                  <span className="text-ink-soft">Agents</span>
                  <span className="text-ink-faint">/</span>
                  <span className="text-ink font-medium">
                    Recruiting Workflow
                  </span>
                  <span className="ml-2 text-[10.5px] mono-tag bg-mistral-orange/10 text-mistral-orange px-1.5 py-0.5 rounded">
                    v3.2
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#E8F7EE] text-[#16734A] text-[11px] font-medium">
                    <span className="size-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                    Live in production
                  </span>
                  <button className="px-3 py-1.5 rounded-md text-[12.5px] text-ink-muted border border-line hover:bg-line-soft transition-colors">
                    Open Playground
                  </button>
                  <button className="px-3 py-1.5 rounded-md text-[12.5px] font-medium bg-ink text-white hover:bg-[#2A2420] transition-colors">
                    Deploy
                  </button>
                </div>
              </div>

              {/* Header */}
              <div className="px-8 pt-7 pb-5">
                <h3 className="text-[22px] leading-tight tracking-tight font-medium text-ink">
                  Recruiting Workflow
                </h3>
                <p className="mt-2 text-[13px] text-ink-muted leading-snug">
                  Composed for La Fromagerie&rsquo;s talent team. Reuses the
                  Solutions Recruiting starter, configured against their ATS and
                  their voice samples. Forks on top: 2 Skills, 1 Connector.
                </p>
                <div className="mt-4 flex items-center gap-6 text-[11.5px]">
                  <KV label="Last run" value="6 min ago" />
                  <KV label="Runs · 30 days" value="412" />
                  <KV label="Sign-off rate" value="98.7%" />
                  <KV label="Avg time saved" value="11h / rec / wk" />
                </div>
              </div>

              {/* Composition */}
              <div className="flex-1 overflow-y-auto px-8 pb-8 bg-surface-subtle">
                <div className="pt-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="mono-tag">Composition</span>
                    <span className="text-[11px] text-ink-soft">
                      4 Agents · 9 Skills · 5 Connectors · 3 Files
                    </span>
                  </div>
                  <div className="space-y-3">
                    {AGENTS.map((a) => (
                      <AgentRow key={a.name} agent={a} />
                    ))}
                  </div>
                </div>

                {/* Files + Eval */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Card title="Files · Context" hint="3 attached">
                    <FileRow name="Voice samples · talent@lafromagerie.com" size="42 KB" />
                    <FileRow name="Scoring rubric · Senior Backend" size="6 KB" />
                    <FileRow name="Brand & tone guide" size="118 KB" />
                  </Card>
                  <Card title="Evaluation gates" hint="Sign-off contract">
                    <GateRow label="No outbound without commit" status="enforced" />
                    <GateRow label="Reject reason required on rejection" status="enforced" />
                    <GateRow label="Offer ≥ €120k routes to legal" status="enforced" />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-[760px] mx-auto mt-10">
        <p className="text-ink-muted">
          One Workflow in Studio. Many fronts in Vibe. Solutions builds the
          kit once, then deploys it to{" "}
          <span className="text-ink font-medium">
            La Fromagerie this month and CMA-CGM next month
          </span>{" "}
          without rebuilding the agent.
        </p>
      </div>
    </section>
  );
}

function SidebarLabel({ label }: { label: string }) {
  return (
    <div className="px-3 pt-4 pb-1">
      <span className="mono-tag !text-[9.5px]">{label}</span>
    </div>
  );
}

function SidebarGroup({
  items,
}: {
  items: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    active?: boolean;
    live?: boolean;
  }[];
}) {
  return (
    <div className="px-3 space-y-0.5">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-[12.5px] text-left transition-colors",
              item.active
                ? "bg-surface text-ink font-medium shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-line"
                : "text-ink hover:bg-line-soft"
            )}
          >
            <Icon className="size-3.5 text-ink-soft" />
            <span className="truncate">{item.label}</span>
            {item.live && (
              <span className="ml-auto size-1.5 rounded-full bg-[#16A34A] animate-pulse" />
            )}
          </button>
        );
      })}
    </div>
  );
}

function AgentRow({ agent }: { agent: AgentBlock }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-[14px] font-medium text-ink leading-tight">
              {agent.name}
            </h4>
            {agent.signOff && (
              <span className="text-[9.5px] font-mono uppercase tracking-wider bg-mistral-orange/15 text-mistral-orange px-1.5 py-0.5 rounded">
                Sign-off
              </span>
            )}
            <span className="text-[9.5px] font-mono uppercase tracking-wider bg-[#E8F7EE] text-[#16734A] px-1.5 py-0.5 rounded">
              {agent.status}
            </span>
          </div>
          <p className="mt-1 text-[12.5px] text-ink-muted leading-snug">
            {agent.role}
          </p>
        </div>
        <button className="shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11.5px] text-ink-muted hover:bg-line-soft hover:text-ink transition-colors">
          Observe
          <ArrowUpRight className="size-3" />
        </button>
      </div>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <span className="mono-tag !text-[9.5px] block mb-1.5">Skills</span>
          <div className="flex flex-wrap gap-1.5">
            {agent.skills.map((s) => (
              <span
                key={s}
                className="inline-flex items-center px-1.5 py-0.5 rounded text-[10.5px] font-mono bg-surface-sunken text-ink-muted"
              >
                /{s}
              </span>
            ))}
          </div>
        </div>
        {agent.connectors && (
          <div>
            <span className="mono-tag !text-[9.5px] block mb-1.5">
              Connectors
            </span>
            <div className="flex flex-wrap gap-1.5">
              {agent.connectors.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10.5px] font-medium bg-mistral-cream-warm text-ink"
                >
                  <Plug className="size-2.5" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="mono-tag !text-[9.5px]">{label}</span>
      <span className="text-[13px] font-medium text-ink leading-tight tabular-nums">
        {value}
      </span>
    </div>
  );
}

function Card({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface p-4">
      <div className="flex items-baseline justify-between mb-3">
        <span className="mono-tag">{title}</span>
        {hint && <span className="text-[11px] text-ink-soft">{hint}</span>}
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function FileRow({ name, size }: { name: string; size: string }) {
  return (
    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-surface-subtle border border-line">
      <FileText className="size-3 text-ink-soft" />
      <span className="text-[12px] text-ink truncate flex-1">{name}</span>
      <span className="text-[10.5px] text-ink-soft tabular-nums">{size}</span>
    </div>
  );
}

function GateRow({
  label,
  status,
}: {
  label: string;
  status: "enforced" | "draft";
}) {
  return (
    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-surface-subtle border border-line">
      {status === "enforced" ? (
        <CircleDot className="size-3 text-[#16A34A]" />
      ) : (
        <Circle className="size-3 text-ink-faint" />
      )}
      <span className="text-[12px] text-ink-muted leading-snug">{label}</span>
    </div>
  );
}
