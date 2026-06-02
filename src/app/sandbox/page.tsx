import Link from "next/link";

type Screen = {
  slug: string;
  title: string;
  note: string;
};

const SCREENS: Screen[] = [
  {
    slug: "access",
    title: "1 · Access",
    note: "Chat Mode with slash menu open. Recruiting Tool + 6 Skills surfaced. Entry into the custom app from Vibe's native surfaces.",
  },
  {
    slug: "brief",
    title: "2 · Brief",
    note: "Conversational brief in Chat Mode. The agent absorbs the kick-off context, challenges a blind spot, then proposes 4 archetypes to prioritize.",
  },
  {
    slug: "shortlist",
    title: "3 · Shortlist",
    note: "Work Mode. 12 candidates, scored, reason-on-hover, risk signals. The hero screen.",
  },
  {
    slug: "outreach",
    title: "4 · Outreach",
    note: "Propose-to-commit panel. 5 drafts, Send / Skip / Edit. The trust contract in action.",
  },
  {
    slug: "pipeline",
    title: "5 · Pipeline",
    note: "Manage view. Same Project, different lens: where each contacted candidate stands. Continuous agent suggestions on follow-ups, replies, scheduling.",
  },
  {
    slug: "quick-score",
    title: "Light path · Quick score",
    note: "Chat Mode lightweight invocation of the score-shortlist Skill on a single CV. No workflow, no Work Mode switch.",
  },
];

export default function SandboxIndex() {
  return (
    <div className="max-w-[760px] mx-auto px-6 py-16">
      <h1 className="text-[28px] font-semibold tracking-tight text-ink">
        Sandbox
      </h1>
      <p className="mt-3 text-ink-muted">
        Screens for the Recruiting Tool, in isolation. Each one lives at its
        own URL so you can iterate without touching the case study.
      </p>

      {SCREENS.length === 0 ? (
        <p className="mt-12 text-ink-soft text-[14px]">
          No screens yet. Add one by creating{" "}
          <code className="px-1.5 py-0.5 rounded bg-surface-sunken text-ink font-mono text-[12px]">
            src/app/sandbox/&lt;slug&gt;/page.tsx
          </code>{" "}
          and listing it above.
        </p>
      ) : (
        <ul className="mt-10 divide-y divide-line">
          {SCREENS.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/sandbox/${s.slug}`}
                className="block py-4 hover:bg-surface-sunken -mx-3 px-3 rounded-md transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[16px] font-medium text-ink">
                    {s.title}
                  </span>
                  <code className="text-[12px] font-mono text-ink-soft">
                    /sandbox/{s.slug}
                  </code>
                </div>
                <p className="mt-1 text-[13px] text-ink-muted">{s.note}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
