import { cn } from "@/lib/utils";

type Step = {
  index: string;
  surface: "work" | "chat";
  title: string;
  caption: string;
  signOff: boolean;
  body: React.ReactNode;
};

const STEPS: Step[] = [
  {
    index: "01",
    surface: "work",
    title: "Entry from the sidebar",
    caption:
      "Recruiting is a Custom Mode in Vibe Work Mode. The Solutions team installed it once. Every recruiter sees it as a native part of their workspace.",
    signOff: false,
    body: (
      <div className="text-[11px] text-ink-soft space-y-1.5 font-mono">
        <div className="px-2 py-1.5 rounded bg-mistral-cream-warm text-ink font-medium">
          ▸ Recruiting · Custom Mode
        </div>
        <div className="px-2 py-1 text-ink-muted">▸ Hiring Q3</div>
        <div className="px-2 py-1 text-ink-muted">▸ Pipeline overview</div>
      </div>
    ),
  },
  {
    index: "02",
    surface: "work",
    title: "Conversational brief",
    caption:
      "The agent asks just enough to scope: role, seniority, must-haves, anti-signals. Three minutes of dialogue replace a 40-minute intake form.",
    signOff: false,
    body: (
      <div className="space-y-2 text-[11.5px]">
        <div className="px-3 py-2 rounded-lg bg-mistral-cream-warm text-ink-muted">
          What level of seniority are we aiming for?
        </div>
        <div className="px-3 py-2 rounded-lg bg-surface-sunken text-ink ml-6">
          Staff or senior. 8+ years preferred.
        </div>
        <div className="px-3 py-2 rounded-lg bg-mistral-cream-warm text-ink-muted">
          Any non-negotiables on stack?
        </div>
      </div>
    ),
  },
  {
    index: "03",
    surface: "work",
    title: "Sourcing in background",
    caption:
      "A Task starts. The agent runs across LinkedIn, GitHub, the ATS. It can take minutes or hours, so the recruiter closes the tab and comes back later.",
    signOff: false,
    body: (
      <div className="space-y-2 text-[11.5px] font-mono">
        <div className="flex items-center gap-2 text-ink-muted">
          <span className="size-1.5 rounded-full bg-mistral-orange animate-pulse" />
          Searching LinkedIn · 312 / 847
        </div>
        <div className="flex items-center gap-2 text-ink-soft">
          <span className="size-1.5 rounded-full bg-line" />
          GitHub craft signals
        </div>
        <div className="flex items-center gap-2 text-ink-soft">
          <span className="size-1.5 rounded-full bg-line" />
          Cross-check Greenhouse
        </div>
        <div className="pt-1 text-ink-soft">
          Est. complete in 24 min · Notify me
        </div>
      </div>
    ),
  },
  {
    index: "04",
    surface: "work",
    title: "Shortlist arrives (see §3)",
    caption:
      "The agent hands back 12 candidates scored, every reason transparent, top 5 pre-flagged. Sign-off lives on the action.",
    signOff: false,
    body: (
      <div className="space-y-1.5 text-[11.5px]">
        <div className="flex items-center gap-2 text-ink-muted">
          <span className="size-1.5 rounded-full bg-[#16A34A]" />
          Sophie Martin · 5/5
        </div>
        <div className="flex items-center gap-2 text-ink-muted">
          <span className="size-1.5 rounded-full bg-[#16A34A]" />
          Marc Dubois · 5/5
        </div>
        <div className="flex items-center gap-2 text-ink-muted">
          <span className="size-1.5 rounded-full bg-[#16A34A]" />
          Sara Kim · 5/5
        </div>
        <div className="text-[10px] mono-tag pt-1">+9 more</div>
      </div>
    ),
  },
  {
    index: "05",
    surface: "work",
    title: "First contact, sign-off required",
    caption:
      "The agent drafts a personalised message per candidate. Send is a human action. No message leaves the workspace without a commit.",
    signOff: true,
    body: (
      <div className="space-y-2 text-[11.5px]">
        <div className="px-3 py-2 rounded-lg bg-surface-sunken border border-line text-ink-muted text-[11px] leading-snug">
          Hi Sophie, I saw your recent post on idempotency patterns at Stripe.
          We&rsquo;re hiring for an exact-fit role on payments…
        </div>
        <div className="flex items-center gap-2 pt-1">
          <button className="px-2.5 py-1 rounded-md bg-ink text-white text-[11px] font-medium">
            Send to Sophie
          </button>
          <button className="px-2.5 py-1 rounded-md text-[11px] text-ink-muted border border-line">
            Edit draft
          </button>
        </div>
      </div>
    ),
  },
  {
    index: "06",
    surface: "work",
    title: "Pipeline in motion",
    caption:
      "Once a candidate replies, the Project state advances. Scheduled relances, calendar suggestions, status changes. The agent proposes. You commit.",
    signOff: false,
    body: (
      <div className="space-y-1.5 text-[11px]">
        <div className="flex items-center justify-between py-1 border-b border-line">
          <span className="text-ink-muted">Contacted</span>
          <span className="text-ink font-medium tabular-nums">5</span>
        </div>
        <div className="flex items-center justify-between py-1 border-b border-line">
          <span className="text-ink-muted">Replied</span>
          <span className="text-ink font-medium tabular-nums">3</span>
        </div>
        <div className="flex items-center justify-between py-1 border-b border-line">
          <span className="text-ink-muted">Screening scheduled</span>
          <span className="text-ink font-medium tabular-nums">2</span>
        </div>
        <div className="flex items-center justify-between py-1">
          <span className="text-ink-muted">Interview pool</span>
          <span className="text-ink font-medium tabular-nums">1</span>
        </div>
      </div>
    ),
  },
  {
    index: "07",
    surface: "chat",
    title: "Chat Mode entry · slash-command",
    caption:
      "A hiring manager doesn&rsquo;t open Work Mode. They type a slash-command in Chat Mode and get an answer with a deep link back into the Project.",
    signOff: false,
    body: (
      <div className="space-y-2 text-[11.5px]">
        <div className="px-3 py-2 rounded-lg bg-surface-sunken text-ink font-mono text-[11px]">
          /recruiting status, Senior Backend Engineer
        </div>
        <div className="px-3 py-2 rounded-lg bg-mistral-cream-warm text-ink-muted leading-snug">
          5 contacted, 3 replied. Sophie scheduled for Tue 14:00. Marc on
          hold. Want a summary?{" "}
          <span className="text-ink font-medium underline">Open Project →</span>
        </div>
      </div>
    ),
  },
];

export function Flow() {
  return (
    <section className="py-32 border-t border-line">
      <div className="editorial">
        <p className="mono-tag mb-8">§6 · The full flow · low fidelity</p>
        <h2 className="text-h2 leading-tight tracking-tight font-medium text-ink">
          The shortlist is one moment. This is the rest.
        </h2>
        <p className="mt-6 text-lede leading-snug text-ink-muted max-w-[44ch]">
          Sign-off appears wherever the agent is about to touch the outside
          world. Internal actions run on autopilot. Risk draws the line.
        </p>
      </div>

      <div className="wide mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {STEPS.map((step) => (
            <FlowStep key={step.index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowStep({ step }: { step: Step }) {
  return (
    <div className="flex gap-5">
      <div className="shrink-0 w-12 flex flex-col items-start gap-2">
        <span className="mono-tag tabular-nums">{step.index}</span>
        <span
          className={cn(
            "text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider",
            step.surface === "work" && "bg-mistral-cream-warm text-ink",
            step.surface === "chat" && "bg-surface-sunken text-ink-muted"
          )}
        >
          {step.surface === "work" ? "Work" : "Chat"}
        </span>
        {step.signOff && (
          <span className="text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider bg-mistral-orange/15 text-mistral-orange">
            Sign-off
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[18px] font-medium leading-snug tracking-tight text-ink">
          {step.title}
        </h3>
        <p className="mt-2 text-small leading-relaxed text-ink-muted">
          {step.caption}
        </p>
        <div className="mt-4 rounded-xl border border-line bg-surface p-4">
          {step.body}
        </div>
      </div>
    </div>
  );
}
