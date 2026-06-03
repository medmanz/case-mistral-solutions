import { Sidebar } from "@/components/layout/Sidebar";
import { Lightbox } from "@/components/ui/Lightbox";
import { VideoLightbox } from "@/components/ui/VideoLightbox";
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
      <Lightbox
        src="/sandbox/peak-shortlist.png?v=3"
        alt="The Recruiting Tool for CMA CGM, shortlist view"
      />
      <Caption>
        The Recruiting Tool for CMA CGM. Five Skills, four Connectors, one
        Custom Mode, one Project. Swap the business layer and the same kit
        becomes Alert Monitoring for ASML.
      </Caption>
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
        <H1>The bet behind that screen</H1>
        <Body>
          A custom AI app inside Vibe isn&rsquo;t a separate product. It&rsquo;s
          a composition of Vibe&rsquo;s primitives, plus a thin business layer
          on top. I built a Recruiting Tool for CMA CGM to make that argument
          concrete. The Recruiting Tool is what you see. The primitives are
          what I actually built.
        </Body>
        <Body>
          Solutions ships ninety-nine more like it from the same kit, with the
          same shell and a different business layer. That&rsquo;s the bet.
          The rest of this case study walks through what that means in
          practice and why I think it holds.
        </Body>
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
        <H1>Reading the brief</H1>
        <Body>
          Quick context. The brief points at the Mistral Chat Figma. That
          same week, Mistral shipped Vibe with the new Chat / Work split.
          I went with Vibe. It&rsquo;s what people are using now, and the
          older Figma felt like a moving target.
        </Body>
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

      <div className="mt-10">
        <BodyCol>
          <ol className="flex flex-col gap-6">
            <NumberedQuestion
              n={1}
              question="What is a custom AI app, relative to Vibe?"
            >
              A composition of Vibe&rsquo;s primitives plus a thin business
              layer. The sidebar, the composer, the mode switcher stay Vibe.
              Only the behavior changes. The app slots into the existing
              Agents page, Shared tab. Zero new top-level concept.
            </NumberedQuestion>
            <NumberedQuestion
              n={2}
              question="Where does the Recruiting Tool primarily live, Chat Mode or Work Mode?"
            >
              Work Mode is the home. A senior search runs for weeks, sometimes
              months, across sourcing, screening, interviews, sign-off. Chat
              Mode is the fast door in, opened with a slash for ad-hoc
              questions.
            </NumberedQuestion>
            <NumberedQuestion
              n={3}
              question="What&rsquo;s the human-agent trust contract at each step?"
            >
              Sign-off scales with stakes. Auto-pilot on things that stay
              inside the company. A human commit before anything goes out. A
              heavier commit when an action is hard to undo. Friction maps to
              consequence.
            </NumberedQuestion>
          </ol>
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
        <H1>User research</H1>
        <Body>
          I went through every AI recruiting tool that shipped in 2026.
          Workable Agent, Pin, Refolk, Noon, Wellfound Reach, HeyMilo,
          Metaview, Humanly. The tech works. Sourcing across 400 million
          profiles is not a moat anymore. What&rsquo;s actually broken is the
          trust.
        </Body>
        <Body>
          I read frustration threads on Blind, on Reddit, in industry reports.
          Then I sat down with three practitioners. Diane runs talent at a
          French fintech. Mathias runs an agency placing senior product
          roles. Prescilia runs talent at a fast-growing scale-up.
        </Body>
        <Body>
          Six things stuck. They shaped the design.
        </Body>
      </BodyCol>

      <div className="mt-12">
        <BodyCol>
          <Block title="Trust is the differentiator">
            <Body>
              Every tool sources well enough. Few of them earn confidence. An
              agent that acts without context burns brand trust in a single
              bad outreach. Candidates remember those. And the candidate-side
              AI is starting to filter the generic agent messages out anyway.
            </Body>
          </Block>
          <Block title="Context is the quality lever">
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
          <Block title="Inbound triage is the volumetric pain">
            <Body>
              Diane&rsquo;s team gets 165 applications in a day on one role.
              Three hours of sorting. Half a recruiter&rsquo;s day, gone. No
              manual process scales to that.
            </Body>
          </Block>
          <Block title="AI earns its keep on structured text">
            <Body>
              Scoring, qualification, drafts of any kind. The agent is
              reliable there. The final calls stay with the human. Mathias
              uses AI deep in the screening loop. He pastes interview
              transcripts into Claude and reads them against the rubric. The
              first message to a senior candidate, he still writes himself.
            </Body>
          </Block>
          <Block title="The ATS is the real goldmine">
            <Body>
              Prescilia put it plainly. Past applicants, declined offers,
              interview notes, second-choice candidates from previous
              searches. Hundreds of people your team has already met and
              scored, with notes from human screens you&rsquo;ve already
              done. Most ATS make these unreachable. An AI that
              re-discovers your own pool before reaching outside is more
              valuable than one that scans more LinkedIn.
            </Body>
            <Body>
              That&rsquo;s why the shortlist defaults to eight internal,
              four external. Internal here means already in our ATS. The
              agent searches the ATS first.
            </Body>
          </Block>
          <Block title="The product is a shared workspace">
            <Body>
              Diane and Mathias described the same fragmentation. The TA
              reads one version of the role in Notion. The hiring manager
              reads a different one buried in email. The ATS quietly holds
              a third. So I put the Recruiting Tool inside a shared Vibe
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
  {
    name: "Workable Agent",
    note: "Brief as conversation, scoring with reasons, hand-off with full context.",
  },
  {
    name: "LiveKit voice agents",
    note: "Propose-to-commit named as a primitive.",
  },
  {
    name: "Mercury inbox",
    note: "Banking approvals as a calm table with a floating commit bar.",
  },
  {
    name: "Linear AI triage",
    note: "Live widgets that show each step of the agent&rsquo;s work.",
  },
  {
    name: "Raycast Pro AI",
    note: "Slash invocation as the unit of action.",
  },
  {
    name: "Granola",
    note: "Background agent, calm artifact at the end, no interruption.",
  },
  {
    name: "v0 by Vercel",
    note: "Beautiful by default, the design system carries the output.",
  },
  {
    name: "Welcome to the Jungle ATS",
    note: "Conversational brief, forty minutes becomes three.",
  },
];

function Inspiration() {
  return (
    <section id="inspiration" className="py-12">
      <BodyCol>
        <H1>Pulled from these</H1>
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
// Section 5 · The flow
// ─────────────────────────────────────────────────────────────────────────────

function FlowInFourActs() {
  return (
    <section id="flow" className="py-12">
      <BodyCol>
        <H1>The flow</H1>
        <Body>
          Three steps, chronological. How Hélène starts a new search, how
          the Task is born, how she works through the shortlist.
        </Body>
      </BodyCol>

      {/* Step 1 — Access */}
      <div className="mt-16">
        <BodyCol>
          <H2>1, Access</H2>
          <Body>
            Two months ago, Hélène opens a fresh chat. She types slash. The
            menu lists every agent her workspace has, Recruiting included.
            She picks it. The agent answers like any agent would.
          </Body>
        </BodyCol>
      </div>
      <div className="mt-8">
        <FlowPlaceholder
          filename="flow-step1-access.png"
          videoSrc="/sandbox/videos/flow-step1-access.mp4?v=3"
          note="Fresh chat, slash menu open, Recruiting highlighted."
        />
      </div>

      {/* Step 2 — Brief & Create as Task */}
      <div className="mt-24">
        <BodyCol>
          <H2>2, Brief, then Create as Task</H2>
          <Body>
            She drags her kick-off files into the chat. The agent reads,
            summarizes, asks one critical question, proposes four
            archetypes. When the brief is tight, it suggests Create as
            Task. One click. A new Task appears in Work. Sourcing starts.
          </Body>
        </BodyCol>
      </div>
      <div className="mt-8">
        <FlowPlaceholder
          filename="flow-step2-brief.png"
          note="Brief flow recording — files dropped, archetypes proposed, Create as Task clicked."
        />
      </div>

      {/* Step 3 — Daily use */}
      <div className="mt-24">
        <BodyCol>
          <H2>3, Daily use</H2>
          <Body>
            A few minutes later, the Task is ready. Hélène switches to
            Work mode and opens it. The shortlist is there, the agent&rsquo;s
            recap names her three strongest picks. She clicks Anne, reads
            the draft, edits one line, sends. Four candidates in eight
            minutes.
          </Body>
        </BodyCol>
      </div>
      <div className="mt-8">
        <FlowPlaceholder
          filename="flow-step3-daily.png"
          videoSrc="/sandbox/videos/flow-part1-daily.mp4?v=2"
          note="Daily flow recording — shortlist → click candidate → compose modal → send."
        />
      </div>
    </section>
  );
}

function Act({
  title,
  caption,
  children,
  route,
  filename,
  note,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
  route?: string;
  filename?: string;
  note?: string;
}) {
  return (
    <div>
      <BodyCol>
        <H2>{title}</H2>
      </BodyCol>
      <div className="mt-6 max-w-[634px] mx-auto">
        <VideoPlaceholder route={route} filename={filename} note={note} />
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
        <H1>Five primitives that scale this to 100 apps</H1>
        <Body>
          The brief asks how this scales. Components help. But components
          are the symptom of a system, not the system itself. The
          primitives underneath them are what actually scales. Five of
          them carry the whole kit.
        </Body>
        <Body>
          The first one is the one that defines what an app even is. The
          other four are how the app stays trustworthy at runtime.
        </Body>
      </BodyCol>

      <div className="mt-10 max-w-[634px] mx-auto">
        <div className="rounded-md overflow-hidden bg-[#FAFAF9] border border-[#EDE9E3]">
          <img
            src="/lofi/primitives-mapping.png?v=1"
            alt="The five primitives, mapped to the five places they show up in the Recruiting Tool."
            className="block w-full h-auto"
          />
        </div>
        <Caption>
          The five primitives, mapped to the five places they show up in
          the Recruiting Tool.
        </Caption>
      </div>

      <div className="mt-12">
        <BodyCol>
          <Block title="1, Custom Mode surface">
            <Body>
              The primitive that turns an agent into an app. A regular
              agent in Vibe opens as a chat. With Custom Mode installed,
              the same agent opens as a configured UI instead. A
              shortlist, an inbox, a pipeline. Solutions writes that
              surface once in Studio, then deploys.
            </Body>
            <Body>
              In Recruiting, Custom Mode delivers the Inbox and the
              Shortlist. At ASML, the same primitive renders an Alert
              triage table. At BNP, it&rsquo;s a Customer Support queue.
              Same shell, swapped surface.
            </Body>
          </Block>

          <Block title="2, Propose-to-commit">
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

          <Block title="3, Explainable scoring with reasons">
            <Body>
              Every score sits next to its reasons. Each reason is
              auditable and override-able, tied back to a rubric the
              recruiter defined up front. No black box.
            </Body>
            <Body>
              In Recruiting, the twelve candidates get tagged Strong fit,
              Good fit, or Worth exploring. At ASML, the same primitive
              grades equipment alerts as Critical, High, or Medium. Over
              at BNP Paribas, it scores tickets by compliance criticality.
              Same shape underneath.
            </Body>
          </Block>

          <Block title="4, Composed transverse context">
            <Body>
              The agent pulls context across the enterprise&rsquo;s tools.
              Uploaded files, connectors, history, knowledge bases,
              whatever is relevant. Context already lives inside the
              company. Solutions configures which sources the agent can
              reach. Then the agent assembles them when it needs to.
            </Body>
            <Body>
              In Recruiting, that&rsquo;s three files and five connectors,
              with the ATS first so the people we already know surface
              before LinkedIn. At ASML the agent pulls SCADA telemetry,
              Confluence, PLM, and GMAO. The BNP version reaches into the
              CRM, core banking, and the regulatory archives. The shape
              stays identical. The sources change with the customer.
            </Body>
          </Block>

          <Block title="5, Risk-contextual sign-off">
            <Body>
              Approval scales with risk. Low-risk actions run on
              auto-pilot. Moderate ones need a light commit. The critical
              ones ask for a reinforced commit, often with a second pair
              of eyes. Friction maps to consequence.
            </Body>
            <Body>
              In Recruiting, the agent runs auto-pilot on sourcing and
              scoring. Outreach asks for a light commit. An offer letter
              gets a reinforced one. Over at Alert Monitoring, a full line
              shutdown triggers a two-person rule. Inside Customer
              Support, a compliance officer signs off on anything
              MIFID-sensitive. Same gradient, different stakes.
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
        <H1>Same kit, different apps</H1>
        <Body>
          The Recruiting Tool is the worked example. The deliverable is the
          five primitives sitting behind it. Swap the domain layer and the
          same kit becomes Alert Monitoring for ASML. Swap it once more and
          it&rsquo;s Customer Support for BNP Paribas. The kit travels.
        </Body>
      </BodyCol>
      <div className="mt-10 max-w-[634px] mx-auto">
        <VideoPlaceholder
          route="Paper · 8GL-0"
          filename="samekit-inbox-twin.png"
          note="Export of the Alert Monitoring Inbox from Paper, side-by-side with Recruiting Inbox."
        />
        <Caption>
          The Recruiting Inbox next to the Alert Monitoring Inbox. Same
          shell, same grammar, swapped business layer.
        </Caption>
      </div>
      <div className="mt-10">
        <BodyCol>
          <Body>
            Solutions configures the domain layer per vertical. The scoring
            rubric learns the language of alerts in one app. Of tickets in
            another. Of defects in a third. The propose-to-commit pattern
            wraps an outreach message in one context, a corrective action
            in another. Same shape every time.
          </Body>
          <Body>
            The user shell stays put. Project + App card + Inbox + Tasks.
            What changes is the labels, the connectors, the scoring rubric,
            the sign-off thresholds. Solutions composes apps out of
            Vibe&rsquo;s primitives. Composition is the unit of work.
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
        <H1>How Solutions ships this</H1>
        <Body>
          The Recruiting Tool users open in Vibe is the front. The
          composition behind it lives in AI Studio. Solutions builds the
          workflow once, configures it for the customer, and pushes it out
          from there.
        </Body>
      </BodyCol>
      <div className="mt-10 max-w-[634px] mx-auto">
        <VideoPlaceholder
          route="AI Studio mockup"
          filename="studio-workflow.png"
          note="AI Studio view, Recruiting Workflow open. To be mocked-up in Paper."
        />
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
        <H1>Trade-offs</H1>
        <Body>
          Honestly, I tergiversated a lot. Most of the week went into
          framing the problem, sketching the architecture in Paper, and
          arguing with myself about what fit Vibe and what didn&rsquo;t.
          The polish came later, on the two screens where it mattered.
          The hero shortlist is where trust gets handed from agent to
          human. The propose-to-commit panel is where the contract
          actually lives. Everything else is functional. I went lighter
          there on purpose.
        </Body>
        <Body>Five arbitrages worth naming. And what I scoped out.</Body>
      </BodyCol>

      <div className="mt-12">
        <BodyCol>
          <Block title="App backs the surfaces, doesn't take a sidebar slot">
            <Body>
              I tried a peer Apps section. I tried turning the Project into
              the app. I tried nesting the app inside a Project. Each one
              added a primitive Vibe didn&rsquo;t need. Then I realized the
              app didn&rsquo;t need a sidebar item at all. Tasks already
              live in the sidebar. The app backs the surfaces Tasks render
              on. Discovery happens in the Agents page. Solutions deploys,
              client uses.
            </Body>
            <LofiGrid
              images={[
                { src: "/lofi/sidebar-a-right-panel.png?v=3", alt: "Apps as a peer sidebar section" },
                { src: "/lofi/sidebar-b-tabs.png?v=3", alt: "App turned into a Project" },
                { src: "/lofi/sidebar-d-app-card.png?v=3", alt: "App nested inside a Project" },
              ]}
              caption="Three sidebar architectures I sketched and dropped. Each one promoted the app to a sidebar primitive. None survived because the app doesn't need to be one."
            />
          </Block>
          <Block title="Chat is ad-hoc, Task is the bridge to Work">
            <Body>
              Chat with the agent first. Files dragged by hand, archetypes
              proposed. When the conversation tightens into a real search,
              Create as Task makes it persistent. The Task lands in Work
              mode with the app&rsquo;s canvas attached. One bridge, no
              parallel surfaces.
            </Body>
          </Block>
          <Block title="List rows with side panel, not a card grid">
            <Body>
              Workable, Pin, HeyMilo use cards. I tried cards. Twelve
              candidates as cards reads like inventory. I switched to list
              rows with a side panel. Editorial density holds up when the
              point is reading.
            </Body>
            <LofiGrid
              images={[
                { src: "/lofi/shortlist-card-grid.png?v=1", alt: "Card grid variant, dropped" },
                { src: "/lofi/shortlist-list-rows.png?v=2", alt: "List rows variant, kept" },
              ]}
              caption="Same twelve candidates, sketched both ways. The list won."
            />
          </Block>
          <Block title="Individual commits, no Send all">
            <Body>
              Five drafts, one click. I considered it. I pulled it. The
              propose-to-commit contract holds only if every external
              action waits for a conscious commit. The friction is doing
              the work.
            </Body>
          </Block>
          <Block title="ATS-first sourcing, not LinkedIn-first">
            <Body>
              Every other tool leads with the size of its external pool.
              Prescilia pointed at the opposite end. The biggest moat for
              an enterprise client is the ATS already inside. Past
              applicants, declined offers, finalists from prior searches.
              The default shortlist for CMA CGM lands eight from the ATS
              and four new sourced via LinkedIn.
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
        <H1>Feasibility</H1>
        <Body>
          If I had to ship this in four weeks, here&rsquo;s how I&rsquo;d
          phase it. And the questions I&rsquo;d want to argue out with
          product, design, eng, and science before week one starts.
        </Body>
      </BodyCol>

      <div className="mt-12">
        <BodyCol>
          <Block title="4-week phasing">
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

          <Block title="For product">
            <Body>
              Pick the next five verticals after Recruiting. The kit only
              earns its keep if the second and third apps reuse eighty
              percent of it or more. I want to find that out now. Not in
              month six.
            </Body>
          </Block>

          <Block title="For engineering">
            <Body>
              Decide where the Custom Mode layer lives in the Vibe
              codebase. Thin client on top of Workflows, or its own state
              model. This decision shapes how Solutions ships every future
              app, so it can&rsquo;t slide.
            </Body>
          </Block>

          <Block title="For science">
            <Body>
              Evaluate at the Skill level or at the Workflow level. And
              the failure-mode dataset for sign-off actions, what does
              that even look like. The eval contract is design-shaped. I
              want to argue it out early.
            </Body>
          </Block>

          <Block title="For design">
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
    <p
      className="mt-3 text-pretty"
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: "18px",
        color: "#9CA3AF",
      }}
    >
      {children}
    </p>
  );
}

function NumberedQuestion({
  n,
  question,
  children,
}: {
  n: number;
  question: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3 items-start">
      <span className="text-[15px] font-medium text-[#9CA3AF] tabular-nums leading-[1.55] shrink-0">
        {n}.
      </span>
      <div className="flex flex-col gap-1.5 min-w-0">
        <span
          className="text-[15px] font-medium text-[#14110F] leading-[1.55]"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <p className="text-[15px] text-[#525252] leading-[1.55]">{children}</p>
      </div>
    </li>
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

function FlowPlaceholder({
  filename,
  note,
  steps,
  videoSrc,
}: {
  filename: string;
  note?: string;
  steps?: { title: string; body: string }[];
  videoSrc?: string;
}) {
  return (
    <div className="max-w-[634px] mx-auto">
      <div className="relative w-full rounded-lg overflow-hidden">
        {videoSrc ? (
          <VideoLightbox src={videoSrc} />
        ) : (
          <div className="bg-[#14110F] aspect-[3/1] grid place-items-center p-8 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-[11px] uppercase tracking-[0.12em] text-white/50 font-medium">
                Flow recording
              </span>
              <span className="font-mono text-[14px] text-white/90 px-2.5 py-1 rounded bg-white/10 border border-white/15">
                /public/sandbox/{filename}
              </span>
              {note && (
                <span className="text-[12px] text-white/60 max-w-[70%] leading-snug">
                  {note}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
      {steps && steps.length > 0 && (
        <div className="flex flex-col gap-4 mt-5">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-3 items-start">
              <span className="text-[13px] font-medium text-[#9CA3AF] tabular-nums leading-[1.55] shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-[14px] font-semibold text-[#14110F] leading-[1.4]">
                  {s.title}
                </span>
                <p className="text-[14px] text-[#525252] leading-[1.55]">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function VideoPlaceholder({
  route,
  filename,
  note,
}: {
  route?: string;
  filename?: string;
  note?: string;
} = {}) {
  return (
    <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#14110F] shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
      <div className="absolute inset-0 grid place-items-center p-6">
        {route || filename ? (
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-white/50 font-medium">
              Screenshot slot
            </span>
            {route && (
              <span className="font-mono text-[14px] text-white/90 px-2.5 py-1 rounded bg-white/10 border border-white/15">
                {route}
              </span>
            )}
            {filename && (
              <span className="font-mono text-[11.5px] text-white/60">
                /public/sandbox/{filename}
              </span>
            )}
            {note && (
              <span className="text-[12px] text-white/60 max-w-[60%] leading-snug">
                {note}
              </span>
            )}
          </div>
        ) : (
          <span className="size-12 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white">
            <Play
              className="size-5 ml-0.5"
              strokeWidth={1.5}
              fill="currentColor"
            />
          </span>
        )}
      </div>
    </div>
  );
}

function LofiGrid({
  images,
  caption,
}: {
  images: { src: string; alt: string }[];
  caption: string;
}) {
  const cols = images.length === 2 ? "grid-cols-2" : "grid-cols-3";
  return (
    <div className="mt-6 mb-2">
      <div className={`grid ${cols} gap-3`}>
        {images.map((img) => (
          <div
            key={img.src}
            className="rounded-md overflow-hidden bg-[#FAFAF9] border border-[#EDE9E3]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="block w-full h-auto"
            />
          </div>
        ))}
      </div>
      <p className="mt-3 text-[12.5px] text-ink-soft leading-snug text-pretty">
        {caption}
      </p>
    </div>
  );
}

function InlinePlaceholder({
  caption,
  route,
  filename,
  note,
}: {
  caption: string;
  route?: string;
  filename?: string;
  note?: string;
}) {
  return (
    <div className="mt-8 mb-4">
      <div className="mx-auto w-[60%] aspect-[16/10] rounded-xl overflow-hidden bg-[#14110F] shadow-[0_1px_2px_rgba(15,23,42,0.06)] grid place-items-center p-5">
        {route || filename ? (
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-[10px] uppercase tracking-[0.12em] text-white/50 font-medium">
              Screenshot slot
            </span>
            {route && (
              <span className="font-mono text-[12.5px] text-white/90 px-2 py-0.5 rounded bg-white/10 border border-white/15">
                {route}
              </span>
            )}
            {filename && (
              <span className="font-mono text-[11px] text-white/60">
                /public/sandbox/{filename}
              </span>
            )}
            {note && (
              <span className="text-[11.5px] text-white/60 max-w-[80%] leading-snug">
                {note}
              </span>
            )}
          </div>
        ) : (
          <span className="size-10 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white">
            <Play
              className="size-4 ml-0.5"
              strokeWidth={1.5}
              fill="currentColor"
            />
          </span>
        )}
      </div>
      <p className="mt-3 text-[12.5px] text-ink-soft leading-snug text-center">
        {caption}
      </p>
    </div>
  );
}
