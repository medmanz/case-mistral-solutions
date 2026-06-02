type CrossApp = {
  domain: string;
  body: string;
};

type Primitive = {
  index: string;
  title: string;
  description: string;
  recruiting: string;
  cross: CrossApp[];
};

const PRIMITIVES: Primitive[] = [
  {
    index: "01",
    title: "Explainable qualitative scoring",
    description:
      "Every score the agent produces is paired with concrete reasons. Every reason is auditable, override-able, and tied to a rubric defined in advance. Humans can disagree with the score and correct it without friction.",
    recruiting:
      "The shortlist surfaces 12 candidates tagged Strong fit / Good fit / Worth exploring. Each tag is justified by 3-5 explicit bullets (12 years in container shipping, Led Singapore-Shanghai trade lane optimization, Fluent in Mandarin, English, French). One-click override is available on every score.",
    cross: [
      {
        domain: "Alert Monitoring · ASML",
        body: "Equipment alerts prioritized Critical / High / Medium with reasons drawn from telemetry baselines, historical incident patterns, and downstream production impact.",
      },
      {
        domain: "Customer Support · BNP Paribas",
        body: "Tickets scored Compliance critical / Standard / Informational with reasons from MIFID 2 references, product sensitivity flags, and escalation history.",
      },
      {
        domain: "Quality Control · Stellantis",
        body: "Defects scored Safety-critical / Functional / Cosmetic with reasons from ISO standards and historical incident matching.",
      },
    ],
  },
  {
    index: "02",
    title: "Propose-to-commit",
    description:
      "Any irreversible or external action (sending a message, modifying a third-party system, making a contractual commitment) is proposed as a draft but requires explicit human commit. No auto-execution on consequential actions. Commit options are Send, Skip, or Edit. The pattern repeats at every transition to the external.",
    recruiting:
      "Four propose-to-commit moments. Archetype validation before sourcing. Outreach drafts sent individually with Send / Skip / Edit. Quick-score actions (Add / Talent pool / Pass). Pipeline suggestions (Send follow-up / Draft invite / Review reply).",
    cross: [
      {
        domain: "Alert Monitoring · ASML",
        body: "The agent proposes corrective actions (Pause line / Schedule maintenance / Escalate). The engineer commits explicitly, because pausing a production line has direct customer impact.",
      },
      {
        domain: "Customer Support · BNP Paribas",
        body: "The agent drafts responses involving pricing or regulatory commitments. The advisor commits before any communication leaves the bank.",
      },
      {
        domain: "Quality Control · Stellantis",
        body: "The agent proposes reject / rework / continue with warning. The supervisor commits, because rejecting impacts suppliers.",
      },
    ],
  },
  {
    index: "03",
    title: "Composed transverse context",
    description:
      "The agent doesn't rely on a single data source. It composes context across the enterprise's tools, files, and systems — uploads, connectors, files, history. Context isn't in the agent. It's in the enterprise. Solutions team configures the sources. The agent composes.",
    recruiting:
      "The brief uploads 3 files: kick-off transcript, scoring rubric, JD draft. In Work Mode, the agent layers connectors (LinkedIn Recruiter, Workday, Gmail, Calendar, shipping industry networks). Context assembles across the workflow.",
    cross: [
      {
        domain: "Alert Monitoring · ASML",
        body: "Alert context composes real-time telemetry (SCADA), past incident runbooks (Confluence), equipment schematics (PLM), and intervention history (GMAO).",
      },
      {
        domain: "Customer Support · BNP Paribas",
        body: "Ticket context composes CRM history, core banking situation, regulatory communications, and prior sensitive conversations.",
      },
      {
        domain: "Quality Control · Stellantis",
        body: "Defect context composes vision system output, production logs, supplier history, and warranty data.",
      },
    ],
  },
  {
    index: "04",
    title: "Risk-contextual sign-off",
    description:
      "The level of approval required scales with the level of risk of the action. Auto-pilot on low-risk internal actions (scoring, qualification, search). Light human commit on moderate-risk external actions (outreach, standard communication). Reinforced human commit on critical actions (contractual engagement, irreversible action, regulated communication). Friction is proportional to consequence.",
    recruiting:
      "Auto-pilot on sourcing and scoring. Light commit on outreach (Send per draft). Reinforced commit on offer, routed to legal and hiring manager. Internal candidate triggers coordination with current manager.",
    cross: [
      {
        domain: "Alert Monitoring · ASML",
        body: "Auto-pilot on detection and categorization. Light commit on engineer notification. Reinforced commit on production line pause or safety escalation. Two-person rule on complete line shutdown.",
      },
      {
        domain: "Customer Support · BNP Paribas",
        body: "Auto-pilot on categorization and routing. Light commit on standard responses. Reinforced commit on pricing or regulatory communications. Compliance officer sign-off on MIFID-sensitive situations.",
      },
      {
        domain: "Quality Control · Stellantis",
        body: "Auto-pilot on detection and categorization. Light commit on rework decisions. Reinforced commit on batch rejection. Plant manager sign-off on complete line stoppage.",
      },
    ],
  },
  {
    index: "05",
    title: "Forgiveness by default",
    description:
      "Every automated action is reversible by default. Every score is override-able. Every commit can be undone within a tolerance window. Every draft can be edited before sending. Every categorization can be re-categorized. The system assumes the AI can be wrong and the human can change their mind.",
    recruiting:
      "Override button on every candidate score. Edit draft on outreach. Skip with reason, reversible. 30-second undo window after Send. Pipeline status manually modifiable.",
    cross: [
      {
        domain: "Alert Monitoring · ASML",
        body: "Engineers can downgrade critical alerts to standard if the AI over-reacted. Notifications cancelable within 30 seconds. Incidents reclassifiable post-hoc for training.",
      },
      {
        domain: "Customer Support · BNP Paribas",
        body: "Advisors can undo sent responses within 60 seconds. Tickets requalifiable. AI suggestions rejectable without system penalty.",
      },
      {
        domain: "Quality Control · Stellantis",
        body: "Operators can override reject decisions to accept with justification. Defects requalifiable post-hoc. System learns without penalizing human disagreement.",
      },
    ],
  },
];

export function DesignPrimitives() {
  return (
    <section id="primitives" className="py-20">
      <div className="max-w-[760px] mx-auto">
        <p className="mono-tag mb-3">Part two of four · Design DNA</p>
        <h2 className="text-[26px] leading-tight tracking-tight font-semibold text-ink text-balance">
          Five design primitives
        </h2>
        <p className="mt-4 text-ink-muted text-pretty">
          Custom AI Apps don&rsquo;t scale through reusable UI components alone.
          They scale through reusable design primitives — patterns that recur
          across verticals and that Solutions team configures rather than
          rebuilds. Five primitives structure every Custom AI App in this kit.
        </p>
      </div>

      <div className="mt-12 max-w-[760px] mx-auto space-y-14">
        {PRIMITIVES.map((p, i) => (
          <PrimitiveBlock key={i} primitive={p} />
        ))}
      </div>

      <div className="mt-16 max-w-[760px] mx-auto rounded-xl border border-line bg-mistral-cream-warm/40 px-6 py-5">
        <h3 className="text-[15px] font-semibold text-ink mb-2">
          Why primitives, not just components
        </h3>
        <p className="text-ink-muted text-pretty leading-relaxed">
          Five primitives mean Solutions team doesn&rsquo;t rebuild architecture
          for each new client. They configure the domain layer (vocabulary,
          rubric, connectors, archetypes specific to the vertical) while
          reusing the primitives. A Recruiting Tool for CMA CGM today. An Alert
          Monitoring Tool for ASML next month. A Customer Support Tool for BNP
          Paribas after. Same primitives. Different domains. The kit scales
          because the abstraction is at the right level.
        </p>
      </div>
    </section>
  );
}

function PrimitiveBlock({ primitive }: { primitive: Primitive }) {
  return (
    <div>
      <div className="mb-3">
        <p className="mono-tag tabular-nums mb-2">{primitive.index}</p>
        <h3 className="text-h3 leading-snug tracking-tight font-medium text-ink">
          {primitive.title}
        </h3>
      </div>

      <p className="text-ink-muted text-pretty leading-relaxed">
        {primitive.description}
      </p>

      <div className="mt-6 border-l-2 border-mistral-orange pl-5">
        <p className="text-[11px] font-medium text-mistral-orange uppercase tracking-wider mb-1.5">
          In the Recruiting Tool
        </p>
        <p className="text-ink-muted text-pretty leading-relaxed">
          {primitive.recruiting}
        </p>
      </div>

      <div className="mt-6">
        <p className="text-[11px] font-medium text-ink-faint uppercase tracking-wider mb-3">
          In other apps
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {primitive.cross.map((c) => (
            <div
              key={c.domain}
              className="rounded-lg border border-line bg-surface p-4"
            >
              <p className="text-[11.5px] font-medium text-ink mb-1.5 leading-snug">
                {c.domain}
              </p>
              <p className="text-[12.5px] text-ink-muted leading-snug">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
