type Spectrum = {
  question: string;
  leftLabel: string;
  leftDescription: string;
  rightLabel: string;
  rightDescription: string;
  chose: string;
  rationale: string;
  positionPct: number;
};

const SPECTRA: Spectrum[] = [
  {
    question: "How does a custom app relate to Vibe?",
    leftLabel: "Pure native composition",
    leftDescription:
      "Custom app is invisible. A bag of Skills and Connectors that live in Vibe's existing surfaces.",
    rightLabel: "Separate product",
    rightDescription:
      "Each custom app gets its own UI, branding, design system. Vibe becomes an app store.",
    chose: "Composition with a thin business layer",
    rationale:
      "Pure composition leaves Solutions no place to put métier-specific affordances. A separate product makes 100 apps impossible to maintain. I land on a Custom Mode that wraps shared primitives in a thin, opinionated surface.",
    positionPct: 35,
  },
  {
    question: "Where does the Recruiting Tool live?",
    leftLabel: "Chat Mode only",
    leftDescription:
      "Everything happens in conversation. Lightweight, with no long-horizon state and no canvas-style pipeline view.",
    rightLabel: "Work Mode only",
    rightDescription:
      "No conversational entry. Powerful for the operator. Invisible to colleagues who could use a quick slash-command query.",
    chose: "Work Mode primary, Chat Mode slash-entry",
    rationale:
      "Recruiting is long-horizon work: Projects, Scheduled tasks, persistent pipeline. Work Mode is the home. The agent's Skills also stay invocable from Chat Mode, for the manager who wants to ask 'where are we on Sara?'",
    positionPct: 70,
  },
  {
    question: "How much autonomy does the agent get?",
    leftLabel: "Co-pilot only",
    leftDescription:
      "Every action requires explicit human approval. Maximum safety, and the value erodes against existing tools.",
    rightLabel: "Full autopilot",
    rightDescription:
      "Agent acts on the outside world without ask. Maximum leverage, and one bad outreach poisons the brand.",
    chose: "Contextual sign-off by risk",
    rationale:
      "Internal actions like sourcing, scoring, and qualification run on autopilot. External, irreversible actions like sending a message, rejecting a candidate, or making an offer require a human commit. Side-effect draws the line.",
    positionPct: 50,
  },
];

export function Tradeoffs() {
  return (
    <section className="py-32 border-t border-line">
      <div className="editorial">
        <p className="mono-tag mb-8">§7 · Tradeoffs</p>
        <h2 className="text-h2 leading-tight tracking-tight font-medium text-ink">
          For every key call, I painted the extremes first.
        </h2>
        <p className="mt-6 text-lede leading-snug text-ink-muted max-w-[44ch]">
          Three questions, three spectrums. I defend one position per question.
          The edges show what I abandoned.
        </p>
      </div>

      <div className="wide mt-20 space-y-24">
        {SPECTRA.map((s, i) => (
          <SpectrumBlock key={i} spectrum={s} index={i + 1} />
        ))}
      </div>
    </section>
  );
}

function SpectrumBlock({
  spectrum,
  index,
}: {
  spectrum: Spectrum;
  index: number;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">
      <div>
        <p className="mono-tag tabular-nums mb-3">
          {String(index).padStart(2, "0")}
        </p>
        <h3 className="text-h3 leading-snug tracking-tight font-medium text-ink">
          {spectrum.question}
        </h3>
      </div>

      <div>
        {/* The spectrum bar */}
        <div className="relative pt-2 pb-12">
          <div className="h-[1px] bg-line w-full relative">
            <div
              className="absolute top-1/2 -translate-y-1/2 size-3 rounded-full bg-mistral-orange ring-4 ring-mistral-orange/20"
              style={{ left: `${spectrum.positionPct}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-line via-mistral-orange/30 to-line"
              style={{
                maskImage: `linear-gradient(to right, transparent ${Math.max(0, spectrum.positionPct - 20)}%, black ${spectrum.positionPct}%, transparent ${Math.min(100, spectrum.positionPct + 20)}%)`,
              }}
            />
          </div>
          <div className="flex justify-between mt-3">
            <span className="mono-tag !text-[10px]">Extreme A</span>
            <span className="mono-tag !text-[10px]">Extreme B</span>
          </div>
        </div>

        {/* Three columns: A, chose, B */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left extreme */}
          <div className="border-l-2 border-line pl-4">
            <p className="text-[12px] font-medium text-ink-faint uppercase tracking-wider mb-2">
              Abandoned
            </p>
            <h4 className="text-[14px] font-medium text-ink-muted">
              {spectrum.leftLabel}
            </h4>
            <p className="mt-2 text-[13px] text-ink-soft leading-snug">
              {spectrum.leftDescription}
            </p>
          </div>

          {/* Chose */}
          <div className="border-l-2 border-mistral-orange pl-4">
            <p className="text-[12px] font-medium text-mistral-orange uppercase tracking-wider mb-2">
              My position
            </p>
            <h4 className="text-[14px] font-medium text-ink">
              {spectrum.chose}
            </h4>
            <p className="mt-2 text-[13px] text-ink-muted leading-snug">
              {spectrum.rationale}
            </p>
          </div>

          {/* Right extreme */}
          <div className="border-l-2 border-line pl-4">
            <p className="text-[12px] font-medium text-ink-faint uppercase tracking-wider mb-2">
              Abandoned
            </p>
            <h4 className="text-[14px] font-medium text-ink-muted">
              {spectrum.rightLabel}
            </h4>
            <p className="mt-2 text-[13px] text-ink-soft leading-snug">
              {spectrum.rightDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
