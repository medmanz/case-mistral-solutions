type Phase = {
  week: string;
  title: string;
  body: string;
};

type Question = {
  team: string;
  body: string;
};

const PHASES: Phase[] = [
  {
    week: "Week 1",
    title: "Lock the kit",
    body: "Freeze the primitive contracts with eng and science. Skills signatures, Connector auth model, Custom Mode chrome. Nothing else moves until this is firm.",
  },
  {
    week: "Week 2",
    title: "Build Recruiting as the reference",
    body: "Ship the Recruiting Tool as the canonical implementation of the kit. Every later app cites it as the template. Sign-off pattern wired through Workflows.",
  },
  {
    week: "Week 3",
    title: "Instrument and stress-test",
    body: "Wire Observability into every Skill and Connector. Run failure-mode evals on the sign-off gates with science. Find where trust breaks before the design partner does.",
  },
  {
    week: "Week 4",
    title: "Deploy with one design partner",
    body: "One enterprise pilot, scoped tight. Real recruiters, real outreach, real candidates. Goal is not coverage — it is the first true signal on the sign-off contract.",
  },
];

const QUESTIONS: Question[] = [
  {
    team: "Product",
    body: "Which five métiers do we target after Recruiting? The kit only earns its keep if the second and third apps reuse 80%+ of it. We need to know now.",
  },
  {
    team: "Engineering",
    body: "Where does the Custom Mode layer live in the Vibe codebase? Is it a thin client on top of Workflows, or does it need its own state model? This shapes how Solutions teams ship.",
  },
  {
    team: "Science",
    body: "Do we evaluate at the Skill level or the Workflow level — and what does a failure-mode dataset look like for sign-off-required actions? The eval contract is design-shaped.",
  },
  {
    team: "Design",
    body: "How do we keep the kit opinionated as the team grows? Who has the right to add a primitive, who has the right to fork chrome? Governance before regret.",
  },
];

export function Feasibility() {
  return (
    <section className="py-32 border-t border-line bg-surface-subtle">
      <div className="editorial">
        <p className="mono-tag mb-8">§10 — Feasibility</p>
        <h2 className="text-h2 leading-tight tracking-tight font-medium text-ink">
          If I had to ship this in four weeks.
        </h2>
        <p className="mt-6 text-lede leading-snug text-ink-muted max-w-[44ch]">
          A phasing plan and the questions I would settle on day one with
          product, engineering, science, and design.
        </p>
      </div>

      <div className="wide mt-16">
        {/* 4-week phasing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHASES.map((p, i) => (
            <div
              key={p.week}
              className="rounded-xl border border-line bg-surface p-6"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="mono-tag tabular-nums">{p.week}</span>
                <span className="text-[11px] text-ink-soft tabular-nums">
                  0{i + 1} / 04
                </span>
              </div>
              <h3 className="text-[16px] font-medium leading-snug tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-[13px] leading-snug text-ink-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Questions for day one */}
        <div className="mt-16">
          <p className="mono-tag mb-6">Day-one questions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {QUESTIONS.map((q) => (
              <div key={q.team} className="border-l-2 border-mistral-orange pl-5">
                <h4 className="text-[14px] font-medium uppercase tracking-wider text-ink mb-2">
                  {q.team}
                </h4>
                <p className="text-body leading-relaxed text-ink-muted">
                  {q.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
