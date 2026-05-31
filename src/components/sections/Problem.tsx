type Quote = {
  body: string;
  source: string;
  context: string;
};

const QUOTES: Quote[] = [
  {
    body: "In 2 minutes you can apply to 200 offers. The point is to propose things that are relevant, not noise.",
    source: "Jérémy Cleda",
    context: "CEO, Welcome to the Jungle · on the ATS rebuild",
  },
  {
    body: "AI Recruiter: Unfortunately, the position has been filled. Me: Actually, no it hasn't. AI Recruiter: I apologize for the mistake. Congratulations, we would like to offer you a role!",
    source: "Candidate verbatim",
    context: "Reported on Blind, anonymized · 2026",
  },
  {
    body: "A high-value recruiter in 2027 owns relationships, owns quality of hire, and steers the pipeline. Sourcing and scheduling sit elsewhere.",
    source: "Pin",
    context: "AI sourcing platform · 2026 outlook",
  },
];

export function Problem() {
  return (
    <section className="py-32 border-t border-line">
      <div className="editorial">
        <p className="mono-tag mb-8">§5 · The gap behind the system</p>
        <h2 className="text-h2 leading-tight tracking-tight font-medium text-ink">
          Recruiting in 2026 has plenty of AI. It lacks trust.
        </h2>
        <p className="mt-6 text-lede leading-snug text-ink-muted max-w-[44ch]">
          The AI recruiters get acts too early, with too little context, and
          breaks trust faster than it saves time.
        </p>

        <ul className="mt-16 space-y-12">
          {QUOTES.map((q, i) => (
            <li
              key={i}
              className="border-l-2 border-line pl-6 hover:border-mistral-orange transition-colors"
            >
              <p className="text-h3 leading-snug tracking-tight font-normal text-ink italic">
                &ldquo;{q.body}&rdquo;
              </p>
              <p className="mt-4 text-small text-ink-muted">
                <span className="text-ink font-medium not-italic">
                  {q.source}
                </span>
                <span className="text-ink-soft"> · {q.context}</span>
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-body leading-relaxed text-ink-muted">
          The right question for design is how AI earns the right to act.
        </p>
      </div>
    </section>
  );
}
