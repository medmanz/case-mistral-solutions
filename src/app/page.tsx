import { Sidebar } from "@/components/layout/Sidebar";
import { Play } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-surface text-ink min-h-screen">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0 flex flex-col items-center px-8">
          <PeakMoment />
          <Hero />
          <ReadingTheBrief />
          <UserResearch />
          <Inspiration />
          <FlowInFourActs />
          <Primitives />
          <SameKit />
          <HowSolutionsShips />
          <Choices />
          <Feasibility />
          <Footer />
        </main>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 0 · The peak moment (front-loaded image only)
// ─────────────────────────────────────────────────────────────────────────────

function PeakMoment() {
  return (
    <section id="peak" className="pt-16 pb-8 w-full max-w-[634px] mx-auto">
      <VideoPlaceholder />
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 1 · Hero
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="hero" className="pt-16 pb-12">
      <BodyCol>
        <H1>Custom AI Apps don&rsquo;t scale through components.</H1>
        <Body>
          They scale through primitives. I designed a Recruiting Tool for CMA
          CGM so I had something concrete to argue from. The tool is what you
          see. The primitives are what I actually built.
        </Body>
        <p className="mt-8 text-[13px] text-ink-soft">
          Take-home for Mistral AI, Solutions Designer, June 2026.
        </p>
      </BodyCol>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 2 · Reading the brief
// ─────────────────────────────────────────────────────────────────────────────

function ReadingTheBrief() {
  return (
    <section id="brief" className="py-12">
      <BodyCol>
        <H1>Reading the brief.</H1>
        <Body>
          The brief asks three questions. I&rsquo;ll get to them. But first I
          want to say who I designed this for. The three answers shift quite a
          bit depending on which customer you pick.
        </Body>
        <Body>
          So I looked at who actually pays Mistral. CMA CGM, ASML, Airbus, BMW,
          Stellantis, HSBC, BNP Paribas, France Travail. Industrial groups.
          Banks. Government. I picked CMA CGM. The user I had in mind is a
          head of TA running senior hires across APAC, inside a 155,000-person
          shipping group.
        </Body>
        <Body>
          Then I rewrote each of the three questions in architectural form.
        </Body>
      </BodyCol>

      <div className="mt-12">
        <BodyCol>
          <Block title="What is a custom AI app, relative to Vibe?">
            <Body>
              It&rsquo;s a composition. Vibe&rsquo;s primitives at the base.
              A thin business layer on top. Everything around the work stays
              Vibe. The sidebar, the composer, the mode switcher, all of it.
              The behavior is what changes.
            </Body>
          </Block>
          <Block title="Where does the Recruiting Tool primarily live, Chat Mode or Work Mode?">
            <Body>
              Work Mode is the home. The work runs for hours, sometimes days.
              Chat Mode is the fast door in, opened with a slash.
            </Body>
          </Block>
          <Block title="What&rsquo;s the human-agent trust contract at each step?">
            <Body>
              I sized the sign-off to the risk. Auto-pilot for the things that
              stay inside the company. A human commit before anything goes out
              the door. A heavier commit when whatever is happening is hard to
              undo. Friction maps to consequence.
            </Body>
          </Block>
        </BodyCol>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 3 · User research
// ─────────────────────────────────────────────────────────────────────────────

function UserResearch() {
  return (
    <section id="research" className="py-12">
      <BodyCol>
        <H1>User research.</H1>
        <Body>
          I went through every AI recruiting tool that shipped in 2026.
          Workable Agent, Pin, Refolk, Noon, Wellfound Reach, HeyMilo,
          Metaview, Humanly. The tech works. Sourcing across 400 million
          profiles is not a moat anymore. What&rsquo;s actually broken is the
          trust.
        </Body>
        <Body>
          I read frustration threads on Blind, on Reddit, in industry reports.
          Then I sat down with two practitioners. Diane runs talent at a
          French fintech. Mathias runs an agency placing senior product roles.
        </Body>
        <Body>
          Five things stuck. They shaped the design.
        </Body>
      </BodyCol>

      <div className="mt-12">
        <BodyCol>
          <Block title="Trust is the differentiator.">
            <Body>
              Every tool sources well enough. Few of them earn confidence. An
              agent that acts without context burns brand trust in a single
              bad outreach. Candidates remember those. And the candidate-side
              AI is starting to filter the generic agent messages out anyway.
            </Body>
          </Block>
          <Block title="Context is the quality lever.">
            <Body>
              The kick-off conversation is where the real signal lives. The
              scoring rubric is downstream of it. So are the rejection
              patterns from past hires. Diane put it plainly. The job ad is
              the essence of the kick-off, not the substance. An AI that
              matches on the ad alone misses everything the kick-off taught
              the human. Context already lives inside the enterprise. The
              agent&rsquo;s job is to compose it.
            </Body>
          </Block>
          <Block title="Inbound triage is the volumetric pain.">
            <Body>
              Diane&rsquo;s team gets 165 applications in a day on one role.
              Three hours of sorting. Half a recruiter&rsquo;s day, gone. No
              manual process scales to that.
            </Body>
          </Block>
          <Block title="AI earns its keep on structured text.">
            <Body>
              Scoring, qualification, drafts of any kind. The agent is
              reliable there. The final calls stay with the human. Mathias
              uses AI deep in the screening loop. He pastes interview
              transcripts into Claude and reads them against the rubric. The
              first message to a senior candidate, he still writes himself.
            </Body>
          </Block>
          <Block title="The product is a shared workspace.">
            <Body>
              Diane and Mathias described the same fragmentation. The TA
              reads one version of the role in Notion. The hiring manager
              reads a different one buried in email. The ATS quietly holds a
              third. So I put the Recruiting Tool inside a shared Vibe
              Project. Every stakeholder reads the same state.
            </Body>
          </Block>
        </BodyCol>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 4 · Inspiration
// ─────────────────────────────────────────────────────────────────────────────

const REFERENCES = [
  { name: "LiveKit voice agents", note: "Propose-to-commit as a primitive." },
  { name: "Granola", note: "The agent&rsquo;s reasoning surfaces silently." },
  { name: "Linear AI", note: "Calm by default." },
  {
    name: "Notion AI",
    note: "Agents that compose context across the workspace.",
  },
  { name: "Cursor", note: "The human stays the editor." },
  {
    name: "Raycast Pro AI",
    note: "Slash invocations as the unit of action.",
  },
  {
    name: "Granola transcripts",
    note: "The meeting becomes the document.",
  },
  {
    name: "Anthropic Artifacts",
    note: "Primitives that let conversation and output coexist.",
  },
];

function Inspiration() {
  return (
    <section id="inspiration" className="py-12">
      <BodyCol>
        <H1>Pulled from these.</H1>
        <Body>
          Eight references sat on the wall next to me while I worked. ChatGPT,
          Claude, Gemini, Perplexity stayed off it. The brief asked me to
          look elsewhere, and the elsewhere turned out to be much more
          useful.
        </Body>
      </BodyCol>
      <div className="mt-10 max-w-[634px] mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line">
          {REFERENCES.map((r) => (
            <li
              key={r.name}
              className="bg-surface p-5 flex items-start gap-4"
            >
              <span className="shrink-0 size-10 rounded-md bg-surface-sunken grid place-items-center">
                <span className="size-3 rounded bg-line" />
              </span>
              <span className="flex flex-col min-w-0">
                <span className="text-[15px] font-medium text-ink leading-tight">
                  {r.name}
                </span>
                <span
                  className="mt-1 text-[15px] text-ink-muted leading-snug"
                  dangerouslySetInnerHTML={{ __html: r.note }}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 5 · The flow in 4 acts
// ─────────────────────────────────────────────────────────────────────────────

function FlowInFourActs() {
  return (
    <section id="flow" className="py-12">
      <BodyCol>
        <H1>The flow in 4 acts.</H1>
        <Body>
          Four screens. One primitive per screen. I&rsquo;ll walk through
          each.
        </Body>
      </BodyCol>

      <div className="mt-16 space-y-20">
        <Act
          title="Act 1, Access from Chat Mode."
          caption="Invoking the Recruiting Tool from the slash menu."
        >
          <Body>
            The recruiter types slash in the composer. The Recruiting Tool
            sits inside the AGENTS section, right next to her personal
            agents, alongside the other custom apps Solutions has already
            shipped into her workspace.
          </Body>
          <Body>
            I tried a separate APPS category. I pulled it out. OpenAI keeps
            Workspace Agents under agents. So does Anthropic with Managed
            Agents. Dust does the same. The grammar users are actually
            learning says agent. I went with that.
          </Body>
        </Act>

        <Act
          title="Act 2, Brief in Chat Mode."
          caption="Briefing the agent from the kick-off artifacts."
        >
          <Body>
            The recruiter already had her kick-off with Sophie Bertrand, the
            hiring manager. What the agent gets is the artifact of that
            meeting. The transcript, plus the scoring rubric, plus an early
            draft of the JD. Three files dragged into chat.
          </Body>
          <Body>
            The agent reads. Summarizes what it read. Asks one critical
            question that the kick-off left ambiguous. Proposes four
            archetypes for who to chase. The recruiter sets the weights. The
            agent confirms back. Then sourcing starts.
          </Body>
          <Body>
            The agent frames before it executes. Propose-to-commit applied
            at the intent stage, before any draft message even exists.
          </Body>
        </Act>

        <Act
          title="Act 3, Shortlist in Work Mode."
          caption="Reviewing the 12 candidates the agent surfaced."
        >
          <Body>
            Forty-five minutes later, the recruiter lands here. Twelve
            candidates, surfaced out of 1,240 profiles.
          </Body>
          <Body>
            This is where trust gets handed over. Every score sits next to
            its reasons. Each reason is one click away from being
            overridden. The agent flags risks too. Mei-Lin is in process at
            MSC and might fast-track on us. Anne is internal, which means
            her current manager needs a heads-up before anyone reaches out.
            That&rsquo;s the contract.
          </Body>
          <Body>
            The same primitive shows up elsewhere. Alerts inside Alert
            Monitoring. The tickets queue inside Customer Support.
            Production defects inside Industrial QC. Different domain each
            time, the underlying pattern stays put.
          </Body>
          <InlinePlaceholder caption="The risk signal chip in detail." />
          <Body>The Contact top 5 button is what kicks off the next act.</Body>
        </Act>

        <Act
          title="Act 4, Propose-to-commit."
          caption="Committing each outreach draft individually."
        >
          <Body>
            Five drafts. Each one knows something specific about who
            it&rsquo;s addressed to. Mei-Lin gets a line about her
            Singapore-Shanghai transit work. Rajesh gets one about his
            decarbonization piece. A template-driven version would have read
            like a template. These read like something a recruiter would
            have actually written.
          </Body>
          <Body>
            The recruiter commits each one on its own. Send it, skip it, or
            edit and then send. Every outbound message waits for a
            human&rsquo;s hand.
          </Body>
          <Body>
            I considered a Send all button. I pulled it. Commits need to
            stay individual and conscious. A bulk button breaks the
            contract the first time someone uses it without reading.
          </Body>
        </Act>
      </div>
    </section>
  );
}

function Act({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <BodyCol>
        <H2>{title}</H2>
      </BodyCol>
      <div className="mt-6 max-w-[634px] mx-auto">
        <VideoPlaceholder />
        <Caption>{caption}</Caption>
      </div>
      <div className="mt-8">
        <BodyCol>{children}</BodyCol>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 6 · Five primitives
// ─────────────────────────────────────────────────────────────────────────────

function Primitives() {
  return (
    <section id="primitives" className="py-12">
      <BodyCol>
        <H1>Five primitives that scale this to 100 apps.</H1>
        <Body>
          The brief asks how this scales. Components help. But components
          are the symptom of a system, not the system itself. The primitives
          underneath them are what actually scales. Five of them carry the
          whole kit.
        </Body>
      </BodyCol>

      <div className="mt-12">
        <BodyCol>
          <Block title="1, Explainable qualitative scoring.">
            <Body>
              Every score sits next to its reasons. Each reason is auditable
              and override-able, tied back to a rubric the recruiter defined
              up front. No black box.
            </Body>
            <Body>
              In Recruiting, the twelve candidates get tagged Strong fit,
              Good fit, or Worth exploring. At ASML, the same primitive
              grades equipment alerts as Critical, High, or Medium. Over at
              BNP Paribas, it scores tickets by compliance criticality.
              Same shape underneath.
            </Body>
          </Block>

          <Block title="2, Propose-to-commit.">
            <Body>
              Anything irreversible, or anything that leaves the company,
              comes back as a draft. The human commits. Send it, skip it,
              or edit before sending. Three buttons, one decision.
            </Body>
            <Body>
              In Recruiting it shows up at four moments. Archetype
              validation, outreach drafts, pipeline follow-ups, and reply
              drafts. Inside Alert Monitoring, it gates the corrective
              actions on a production line. For Customer Support, the
              regulated responses and the pricing ones run through the same
              pattern. There&rsquo;s always a draft first, and always a
              commit after.
            </Body>
          </Block>

          <Block title="3, Composed transverse context.">
            <Body>
              The agent pulls context across the enterprise&rsquo;s tools.
              Uploaded files, connectors, history, knowledge bases,
              whatever is relevant. Context already lives inside the
              company. Solutions configures which sources the agent can
              reach. Then the agent assembles them when it needs to.
            </Body>
            <Body>
              In Recruiting, that&rsquo;s three files and five connectors.
              At ASML the agent pulls SCADA telemetry, Confluence, PLM, and
              GMAO. The BNP version reaches into the CRM, core banking, and
              the regulatory archives. The shape stays identical. The
              sources change with the customer.
            </Body>
          </Block>

          <Block title="4, Risk-contextual sign-off.">
            <Body>
              Approval scales with risk. Low-risk actions run on auto-pilot.
              Moderate ones need a light commit. The critical ones ask for
              a reinforced commit, often with a second pair of eyes.
              Friction maps to consequence.
            </Body>
            <Body>
              In Recruiting, the agent runs auto-pilot on sourcing and
              scoring. Outreach asks for a light commit. An offer letter
              gets a reinforced one. Over at Alert Monitoring, a full line
              shutdown triggers a two-person rule. Inside Customer Support,
              a compliance officer signs off on anything MIFID-sensitive.
              Same gradient, different stakes.
            </Body>
          </Block>

          <Block title="5, Forgiveness by default.">
            <Body>
              Every automated action is reversible. Each score can be
              overridden. Every commit has a window to undo it before it
              lands.
            </Body>
            <Body>
              In Recruiting, that means override on every score, edit on
              every draft, and a thirty-second undo on every send. At ASML,
              engineers can downgrade an alert after the fact. Advisors at
              BNP can undo a sent response inside a minute. The agent moves
              first. The human can always walk it back.
            </Body>
          </Block>
        </BodyCol>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 7 · Same kit, different apps
// ─────────────────────────────────────────────────────────────────────────────

function SameKit() {
  return (
    <section id="kit" className="py-12">
      <BodyCol>
        <H1>Same kit, different apps.</H1>
        <Body>
          The Recruiting Tool is the worked example. The deliverable is the
          five primitives sitting behind it. Swap the domain layer and the
          same kit becomes Alert Monitoring for ASML. Swap it once more and
          it&rsquo;s Customer Support for BNP Paribas. The kit travels.
        </Body>
      </BodyCol>
      <div className="mt-10 max-w-[634px] mx-auto">
        <VideoPlaceholder />
        <Caption>Three apps from the same kit.</Caption>
      </div>
      <div className="mt-10">
        <BodyCol>
          <Body>
            Solutions configures the domain layer per vertical. The scoring
            rubric learns the language of alerts in one app. Of tickets in
            another. Of defects in a third. The propose-to-commit pattern
            wraps an outreach message in one context, a corrective action in
            another. Same shape every time.
          </Body>
          <Body>
            Solutions composes apps out of Vibe&rsquo;s primitives. They
            stay inside the existing chrome. Composition is the unit of
            work.
          </Body>
        </BodyCol>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 7.5 · How Solutions ships this
// ─────────────────────────────────────────────────────────────────────────────

function HowSolutionsShips() {
  return (
    <section id="enablement" className="py-12">
      <BodyCol>
        <H1>How Solutions ships this.</H1>
        <Body>
          The Recruiting Tool users open in Vibe is the front. The
          composition behind it lives in AI Studio. Solutions builds the
          workflow once, configures it for the customer, and pushes it out
          from there.
        </Body>
      </BodyCol>
      <div className="mt-10 max-w-[634px] mx-auto">
        <VideoPlaceholder />
        <Caption>The Recruiting Workflow open inside AI Studio.</Caption>
      </div>
      <div className="mt-10">
        <BodyCol>
          <Body>
            One workflow in AI Studio. Many fronts in Vibe. CMA CGM gets
            one configuration of the kit. La Fromagerie gets another. The
            agent stays the same. What changes is the connectors, the
            rubric, the voice samples, and the sign-off thresholds the
            client wants.
          </Body>
          <Body>
            That&rsquo;s how Solutions stops being the bottleneck. The work
            that produced the Recruiting Tool produces the next ninety-nine
            the same way. A new designer joining Solutions ships her first
            app from the kit, not from a blank file.
          </Body>
        </BodyCol>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 8 · What I chose, what I left
// ─────────────────────────────────────────────────────────────────────────────

function Choices() {
  return (
    <section id="choices" className="py-12">
      <BodyCol>
        <H1>Trade-offs.</H1>
        <Body>
          Two moments got most of the craft. The hero shortlist is where
          trust gets handed from agent to human, so I gave it the most
          attention. The propose-to-commit panel is where the contract
          actually lives, so it got the second most. Everything else is
          functional. I went lighter there on purpose.
        </Body>
        <Body>Four arbitrages worth naming. And what I scoped out.</Body>
      </BodyCol>

      <div className="mt-12">
        <BodyCol>
          <Block title="Slash menu invocation in AGENTS, not a separate APPS category.">
            <Body>
              The market converged on a single AGENTS category. I could
              have diverged from it. That would have made a statement. It
              also would have broken the grammar users are still learning. I
              kept the consistency. The Recruiting Tool sits in AGENTS,
              sub-grouped under SHARED.
            </Body>
          </Block>
          <Block title="Brief in Chat Mode, sourcing in Work Mode.">
            <Body>
              The brief stays in Chat Mode. Files uploaded by hand, no
              connectors needed at that stage. Work Mode kicks in when the
              recruiter hits Start sourcing. That&rsquo;s when LinkedIn
              Recruiter, Workday, and the heavier connectors come online.
              Two modes serving two purposes, stitched into one flow.
            </Body>
          </Block>
          <Block title="List rows with side panel, not a card grid.">
            <Body>
              Workable, Pin, and HeyMilo all use cards. Three lines of
              metadata plus a fit score plus a photo. I tried it. The
              screen ended up reading like a dashboard. Twelve candidates
              as cards reads like inventory you&rsquo;re trying to clear.
            </Body>
            <Body>
              So I switched to list rows. One row per candidate, two lines
              of text. Name, role, company, city, fit, and a risk flag.
              Clicking the row opens a side panel with the full reasoning
              and the signals. Linear and Chronicle taught me the move.
              Editorial density holds up when the point is reading
              carefully. Card maximalism is for when you&rsquo;re
              browsing.
            </Body>
          </Block>
          <Block title="Individual commits, no Send all.">
            <Body>
              The honest case for Send all is speed. Five drafts, one
              click, all gone. I sat with it. Then I pulled it.
            </Body>
            <Body>
              The propose-to-commit contract only holds if every external
              action waits for a conscious commit. A bulk button breaks
              that contract the first time someone uses it without reading
              the drafts. The bit of friction is doing actual work.
            </Body>
          </Block>

          <div className="mt-10">
            <Body>
              Two areas I scoped out. Inbound triage and the pipeline view.
              The same scoring and propose-to-commit primitives apply to
              both. I focused on the moments where trust gets transmitted
              because that&rsquo;s where the architecture has something to
              teach. The rest is composition on top of the same five
              primitives.
            </Body>
          </div>
        </BodyCol>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 9 · Feasibility
// ─────────────────────────────────────────────────────────────────────────────

function Feasibility() {
  return (
    <section id="feasibility" className="py-12">
      <BodyCol>
        <H1>Feasibility.</H1>
        <Body>
          If I had to ship this in four weeks, here&rsquo;s how I&rsquo;d
          phase it. And the questions I&rsquo;d want to argue out with
          product, design, eng, and science before week one starts.
        </Body>
      </BodyCol>

      <div className="mt-12">
        <BodyCol>
          <Block title="4-week phasing.">
            <Body>
              Week one is for locking the kit. I&rsquo;d freeze the
              primitive contracts with eng and science. Skills signatures,
              the connector auth model, the layout of Custom Mode. Everything
              else waits its turn.
            </Body>
            <Body>
              Week two, I build Recruiting as the reference implementation.
              The canonical version of the kit, the one every later app
              will cite as the template. Sign-off pattern wired through
              Workflows.
            </Body>
            <Body>
              Week three goes to instrumentation and stress-tests.
              Observability on every Skill and every Connector. Failure-mode
              evals on the sign-off gates, run with science. I want to find
              where trust breaks before the design partner does.
            </Body>
            <Body>
              Week four, I deploy with one design partner. A single
              enterprise pilot, scoped tight. Real recruiters working a
              real role, sending real outreach to real candidates. First
              honest signal on whether the sign-off contract holds in
              production.
            </Body>
          </Block>

          <Block title="For product.">
            <Body>
              Pick the next five verticals after Recruiting. The kit only
              earns its keep if the second and third apps reuse eighty
              percent of it or more. I want to find that out now. Not in
              month six.
            </Body>
          </Block>

          <Block title="For engineering.">
            <Body>
              Decide where the Custom Mode layer lives in the Vibe
              codebase. Thin client on top of Workflows, or its own state
              model. This decision shapes how Solutions ships every future
              app, so it can&rsquo;t slide.
            </Body>
          </Block>

          <Block title="For science.">
            <Body>
              Evaluate at the Skill level or at the Workflow level. And
              the failure-mode dataset for sign-off actions, what does
              that even look like. The eval contract is design-shaped. I
              want to argue it out early.
            </Body>
          </Block>

          <Block title="For design.">
            <Body>
              Keep the kit opinionated as the team grows. Decide up front
              who can add a primitive. And who is allowed to change the
              Vibe interface itself. Governance before regret.
            </Body>
          </Block>
        </BodyCol>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-16 border-t border-line">
      <BodyCol>
        <p className="text-[13px] text-ink-soft">
          Mederic Maniere, for Mistral AI Solutions Designer panel, June 5,
          2026.
        </p>
      </BodyCol>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Typographic primitives
// ─────────────────────────────────────────────────────────────────────────────

function BodyCol({ children }: { children: React.ReactNode }) {
  return <div className="w-full max-w-[634px] mx-auto">{children}</div>;
}

function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className="text-[15px] leading-[23px] font-medium text-[#242529] text-balance"
      style={{ letterSpacing: "-0.1px" }}
    >
      {children}
    </h1>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[15px] leading-[23px] font-medium text-[#242529] text-balance"
      style={{ letterSpacing: "-0.1px" }}
    >
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[15px] leading-[23px] text-[#525252] text-pretty mt-2"
      style={{ letterSpacing: "-0.1px" }}
    >
      {children}
    </p>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-[12.5px] text-ink-soft leading-snug text-pretty">
      {children}
    </p>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10 first:mt-0">
      <H2>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </H2>
      <div>{children}</div>
    </div>
  );
}

function VideoPlaceholder() {
  return (
    <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#14110F] shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
      <div className="absolute inset-0 grid place-items-center">
        <span className="size-12 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white">
          <Play
            className="size-5 ml-0.5"
            strokeWidth={1.5}
            fill="currentColor"
          />
        </span>
      </div>
    </div>
  );
}

function InlinePlaceholder({ caption }: { caption: string }) {
  return (
    <div className="mt-8 mb-4">
      <div className="mx-auto w-[60%] aspect-[16/10] rounded-xl overflow-hidden bg-[#14110F] shadow-[0_1px_2px_rgba(15,23,42,0.06)] grid place-items-center">
        <span className="size-10 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white">
          <Play
            className="size-4 ml-0.5"
            strokeWidth={1.5}
            fill="currentColor"
          />
        </span>
      </div>
      <p className="mt-3 text-[12.5px] text-ink-soft leading-snug text-center">
        {caption}
      </p>
    </div>
  );
}
