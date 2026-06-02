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
    pov: "Linear keeps the AI to one job and surfaces it as a thin overlay on existing primitives. Restraint is the lesson for a Skills system.",
  },
  {
    name: "Granola",
    category: "Meeting notes · 2025",
    what: "Background capture, structured output at the end.",
    pov: "The agent captures while you focus. The artifact arrives when you're ready. You never babysit it. The Custom Mode should feel this invisible.",
  },
  {
    name: "Perplexity Computer",
    category: "Agent runtime · Feb 2026",
    what: "Long-horizon workflows across tools.",
    pov: "The closest public reference for Vibe Work Mode. Trust gets earned by surfacing every step, with a sign-off at the boundaries where actions leave the system.",
  },
];

export function Inspiration() {
  return (
    <section id="inspiration" className="py-20">
      <div className="max-w-[760px] mx-auto">
        <h2 className="text-[26px] leading-tight tracking-tight font-semibold text-ink text-balance">
          Inspiration
        </h2>
        <p className="mt-4 text-ink-muted text-pretty">
          I look for three things in AI products in 2026. Agents that show
          their work. Products that compose primitives instead of stacking
          features. Trust treated as a design layer.
        </p>
        <p className="mt-3 text-[13px] text-ink-soft">
          Four references. ChatGPT, Claude, Gemini, and Perplexity stay
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
              <p className="mt-3 text-ink-muted pl-7">
                {r.pov}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
