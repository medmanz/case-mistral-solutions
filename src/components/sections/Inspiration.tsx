type Reference = {
  name: string;
  category: string;
  pov: string;
  what: string;
};

const REFS: Reference[] = [
  {
    name: "Workable Agent",
    category: "AI recruiting · 2026",
    what: "Embedded agent inside an ATS.",
    pov: "Best execution I've seen of an agent that lives inside the existing surface. Every score has a reason. Every action stays a proposal until you commit.",
  },
  {
    name: "Linear AI triage",
    category: "Issue tracking · 2026",
    what: "Background classification on incoming issues.",
    pov: "Linear keeps the AI to one job and surfaces it as a thin overlay on existing primitives. Restraint is the lesson.",
  },
  {
    name: "Notion AI Agents",
    category: "Workspace · 2026",
    what: "Persistent agents working overnight.",
    pov: "Agents work while you're asleep. The morning summary is the surface. The chat is optional.",
  },
  {
    name: "v0 by Vercel",
    category: "UI prototyping · 2025",
    what: "Natural language to UI matching a design system.",
    pov: "AI output inherits a design system instead of inventing one. v0 turns beautiful-by-default into something you can deploy.",
  },
  {
    name: "Raycast AI",
    category: "Productivity · 2025",
    what: "Command palette as AI entry point.",
    pov: "Best example of an AI surface invocable from anywhere without owning the screen. The slash-command pattern in Vibe should feel this fluid.",
  },
  {
    name: "Granola",
    category: "Meeting notes · 2025",
    what: "Background capture, structured output at end.",
    pov: "Same insight as Notion Agents in a tighter form. The agent captures while you focus. The artifact arrives when you're ready. You never babysit it.",
  },
  {
    name: "Perplexity Computer",
    category: "Agent runtime · Feb 2026",
    what: "Long-horizon workflows across tools.",
    pov: "The closest public reference for Vibe Work Mode. The architecture is sound. The design problem sits in making the runtime legible to a non-engineer.",
  },
  {
    name: "Welcome to the Jungle ATS",
    category: "Recruiting · 2026",
    what: "Conversational job-spec creation, 3 minutes instead of 40.",
    pov: "Quoted later for the reason. Their public stance, rebuild rather than layer, validates the composition angle from the recruiting side.",
  },
];

export function Inspiration() {
  return (
    <section id="inspiration" className="px-16 py-20 border-t border-line">
      <div className="max-w-[760px]">
        <h2 className="text-[26px] leading-tight tracking-tight font-semibold text-ink">
          Inspiration
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-muted max-w-[64ch]">
          I look for three things in AI products in 2026. Agents that show
          their work. Products that compose primitives instead of stacking
          features. Trust treated as a design layer.
        </p>
        <p className="mt-3 text-[13px] text-ink-soft">
          Eight references. ChatGPT, Claude, Gemini, and Perplexity stay
          excluded.
        </p>

        <ul className="mt-10 divide-y divide-line">
          {REFS.map((r, i) => (
            <li key={r.name} className="py-6">
              <div className="flex items-baseline gap-3">
                <span className="text-[12px] font-mono text-ink-faint tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[17px] leading-snug tracking-tight font-medium text-ink">
                    {r.name}
                  </h3>
                  <p className="mt-0.5 text-[13px] text-ink-soft">
                    {r.category} · {r.what}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted pl-7">
                {r.pov}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
