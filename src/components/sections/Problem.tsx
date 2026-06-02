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
    <section id="gap" className="py-20">
      <div className="max-w-[760px] mx-auto">
        <h2 className="text-[26px] leading-tight tracking-tight font-semibold text-ink text-balance">
          The gap behind the system
        </h2>
        <p className="mt-4 text-ink-muted text-pretty">
          Recruiting in 2026 has plenty of AI. It lacks trust. The AI
          recruiters get acts too early, on too little context. It breaks
          trust faster than it saves time.
        </p>

        <ul className="mt-10 space-y-8">
          {QUOTES.map((q, i) => (
            <li
              key={i}
              className="border-l-2 border-line pl-5 hover:border-mistral-orange transition-colors"
            >
              <p className="text-ink italic">
                &ldquo;{q.body}&rdquo;
              </p>
              <p className="mt-3 text-[13px] text-ink-muted">
                <span className="text-ink font-medium not-italic">
                  {q.source}
                </span>
                <span className="text-ink-soft"> · {q.context}</span>
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-ink-muted">
          The right question for design is how AI earns the right to act.
        </p>
      </div>
    </section>
  );
}
