type Quote = {
  body: string;
  source: string;
  context: string;
};

const QUOTES: Quote[] = [
  {
    body: "Sourcing AIs base their match on the job ad alone. The job ad is just the essence of the kick-off. They should be learning from the kick-off conversation to actually understand what fits.",
    source: "Diane",
    context: "Talent Acquisition · Qonto · interview, Nov 2026",
  },
  {
    body: "AI Recruiter: Unfortunately, the position has been filled. Me: Actually, no it hasn't. AI Recruiter: I apologize for the mistake. Congratulations, we would like to offer you a role!",
    source: "Candidate verbatim",
    context: "Reported on Blind, anonymized · 2026",
  },
  {
    body: "I put the same two profiles at the bottom of the list. The bot scored them medium-low. At the top, it scored them medium-high. The bot has order bias too.",
    source: "Diane",
    context: "Talent Acquisition · Qonto · interview, Nov 2026",
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
