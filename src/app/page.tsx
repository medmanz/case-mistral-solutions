import { Sidebar } from "@/components/layout/Sidebar";
import { Lightbox } from "@/components/ui/Lightbox";
import { VideoLightbox } from "@/components/ui/VideoLightbox";
import { Play, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import { TestimonialStack } from "@/components/ui/TestimonialStack";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/Tabs";

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
    <section id="peak" className="pt-16 pb-8 w-full max-w-[1080px] mx-auto px-4">
      <Lightbox
        src="/sandbox/peak-shortlist.png?v=3"
        alt="The Recruiting Tool for CMA CGM, shortlist view"
        imgClassName="block w-full h-auto rounded-lg"
      />
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
          on top. I built a Recruiting Tool for CMA CGM to make that argument
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
          The brief asks three questions. I&rsquo;ll answer them later. But
          first I want to say who I designed this for. The three answers shift
          quite a bit depending on which customer you pick.
        </Body>
        <Body>
          So I looked at who actually pays Mistral. CMA CGM, ASML, Airbus, BMW,
          Stellantis, HSBC, BNP Paribas, France Travail. Industrial groups.
          Banks. Government. I picked CMA CGM. The user I had in mind is a
          head of TA running senior hires across APAC, inside a 155,000-person
          shipping group.
        </Body>
        <Body>
          Then I had to settle three architectural questions of my own
          before I could answer the brief&rsquo;s. They&rsquo;re the ones
          that decide what a custom AI app actually <em>is</em>.
        </Body>
      </BodyCol>

      <div className="mt-10">
        <BodyCol>
          <BriefQuestionsAccordion />
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
          The brief asked for a Recruiting Tool. Before I drew anything, I
          spent a real chunk of time just framing the problem. Design for
          AI recruiting isn&rsquo;t really about UI. It&rsquo;s about
          which moments to take from the human and which moments to give
          back. You can&rsquo;t decide that from your desk.
        </Body>
        <Body>
          So I did three things. First, I went through every AI recruiting
          tool that shipped in 2026. Workable Agent, Pin, Refolk, Noon,
          Wellfound Reach, HeyMilo, Metaview, Humanly. The tech works.
          Sourcing across 400 million profiles isn&rsquo;t a moat anymore.
          What&rsquo;s broken is the trust.
        </Body>
        <Body>
          Second, I read frustration threads on Blind, on Reddit, and in
          industry reports. That&rsquo;s where the real friction lives.
        </Body>
        <Body>
          Third, I jumped on video calls with three people I know
          personally from my network. Diane runs talent at Qonto. Mathias
          runs The Product Crew, an agency placing senior product roles.
          Prescillia runs talent at Hexa. Talking to people I trust
          shortened the loop. They told me what was actually broken without
          dressing it up. I asked each of them to walk me through a real
          role they were filling, the tools they had tried, and where
          things broke down.
        </Body>
      </BodyCol>

      <div className="mt-10 max-w-[634px] mx-auto">
        <ResearchVerbatims />
      </div>

      <div className="mt-10">
        <BodyCol>
          <Body>
            Six things stuck. They shaped the design.
          </Body>
        </BodyCol>
      </div>

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
              Prescillia put it plainly. Past applicants, declined offers,
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
          videoSrc="/sandbox/videos/flow-step2-brief.mp4?v=2"
          note="Brief flow. Files dropped, archetypes proposed, Create as Task clicked."
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
          note="Daily flow recording. Shortlist → click candidate → compose modal → send."
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
              at BNP Paribas, it scores tickets by compliance criticality.
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
        <H1>How design helps Solutions ship faster</H1>
        <Body>
          Mistral Solutions ships custom AI apps for enterprise, plus
          clickable demos before the real build. They&rsquo;re engineers,
          not designers. If design only lives with me, I&rsquo;m the
          bottleneck on every project. So the answer to that question is
          three things, applied to what I built here.
        </Body>
        <Body>
          <strong>One.</strong> A worked example. The Recruiting Tool for
          CMA CGM is built end-to-end. World-class UI, polish, the X
          factor. The brief asked for that. The local problem solved.
        </Body>
        <Body>
          <strong>Two.</strong> Four primitives extracted from it. Abstract
          composable concepts Le Chat doesn&rsquo;t ship today. Build them
          once, every custom AI app gets them. Then a component kit that
          implements each primitive. Drop-in for engineers.
        </Body>
        <Body>
          <strong>Three.</strong> One code path from demo to production.
          This case study <em>is</em> the demo Solutions would send a
          prospect. If the prospect signs, the same React components ship
          to production. We swap mock data for real APIs, that&rsquo;s it.
          The demo, the prototype, and the product are one file.
        </Body>
      </BodyCol>

      {/* Four primitives */}
      <div className="mt-12">
        <BodyCol>
          <H2>The four primitives</H2>
          <Body>
            One primitive = one composable concept that solves a class of
            problems for any custom AI app. Each one is motivated by an
            insight from the user research and manifests in three to five
            components in the kit.
          </Body>
        </BodyCol>
        <div className="mt-6 max-w-[760px] mx-auto">
          <PrimitivesGrid />
        </div>
      </div>

      {/* The component kit */}
      <div className="mt-14">
        <BodyCol>
          <H2>The component kit that ships the primitives</H2>
          <Body>
            Forty React components, the implementations Solutions
            Engineering drops into a new app. Each primitive shows up here
            as three to five components. The grid below is a lo-fi
            inventory. Drag-drop ready in the codebase, not a Figma
            library.
          </Body>
          <div className="mt-6">
            <Lightbox
              src="/lofi/component-kit.png?v=3"
              alt="Component kit. 40 React components extracted from the Recruiting Tool"
            />
            <Caption>
              A sample of components that let Solutions build any custom AI
              app faster. Each one ships one of the four primitives.
            </Caption>
          </div>
        </BodyCol>
      </div>

      {/* Three apps from the same primitives */}
      <div className="mt-14">
        <BodyCol>
          <H2>Three apps from the same four primitives</H2>
          <Body>
            Recruiting Tool is the one I built. Alert Monitoring for ASML
            and Customer Support for BNP Paribas are configurations of the
            same primitives. Different data sources, different scoring,
            different approval levels. Click between the tabs.
          </Body>
        </BodyCol>
        <div className="mt-6 max-w-[760px] mx-auto">
          <KitAppsTabs />
        </div>
        <div className="mt-6 max-w-[760px] mx-auto">
          <Caption>
            Same Le Chat shell, same four primitives. Only the data,
            scoring, and what needs approval change. A configuration, not a
            project from scratch.
          </Caption>
        </div>
      </div>
    </section>
  );
}

// ─── Primitives grid ──────────────────────────────────────────────────────

type Primitive = {
  name: string;
  definition: string;
  motivation: string;
  components: string[];
};

const PRIMITIVES: Primitive[] = [
  {
    name: "Explainable scoring",
    definition:
      "Every agent output carries a score and the criteria behind it, inspectable on demand.",
    motivation: "Trust is the differentiator",
    components: ["ScoreGauge", "ScoreBreakdown", "RankReason", "ConfidenceMeter"],
  },
  {
    name: "Composed transparent context",
    definition:
      "The agent reads from multiple sources at once and shows which one supported each claim.",
    motivation: "Context is the quality lever",
    components: ["AppConnectors", "SourceCitation", "DataPreview", "ConnectorHealth"],
  },
  {
    name: "Risk-graded autonomy",
    definition:
      "Action friction scales with the blast radius. Low for reversible, high for irreversible.",
    motivation: "Action is the moment of truth",
    components: ["ApprovalLevels", "TypeToConfirm", "UndoBar", "BlockingApproval"],
  },
  {
    name: "Chat-to-Task escalation",
    definition:
      "Quick questions live in chat. Sustained work escalates to a Task in Work, with full context.",
    motivation: "A senior search runs for weeks. A quick check takes minutes.",
    components: [
      "CreateAsTaskButton",
      "TaskContextHandoff",
      "SwitchToChatLink",
      "TaskAgentHeader",
    ],
  },
];

function PrimitivesGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {PRIMITIVES.map((p, i) => (
        <PrimitiveCard key={p.name} primitive={p} index={i + 1} />
      ))}
    </div>
  );
}

function PrimitiveCard({ primitive, index }: { primitive: Primitive; index: number }) {
  return (
    <div className="rounded-xl border border-[#27272A14] bg-white p-5 flex flex-col gap-3">
      <div className="flex items-baseline gap-2">
        <span className="inline-flex items-center justify-center size-5 rounded-full bg-mistral-cream text-[#FA500F] text-[11px] font-medium tabular-nums">
          {index}
        </span>
        <span className="text-[14px] font-medium text-[#14110F] leading-tight">
          {primitive.name}
        </span>
      </div>
      <div className="text-[13px] text-[#79716B] leading-[1.5]">
        {primitive.definition}
      </div>
      <div className="text-[12.5px] text-[#A6A09B] leading-tight italic">
        Why: {primitive.motivation}
      </div>
      <div className="mt-auto pt-3 border-t border-[#27272A0F]">
        <div className="text-[11px] font-mono text-[#A6A09B] uppercase tracking-wider mb-2">
          Components
        </div>
        <div className="flex flex-wrap gap-1.5">
          {primitive.components.map((c) => (
            <span
              key={c}
              className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-mono text-[#14110F] bg-[#FAFAF9] border border-[#27272A14]"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Kit apps tabs ────────────────────────────────────────────────────────

type AppMock = {
  id: string;
  tab: string;
  customer: string;
  agentLabel: string;
  count: string;
  columns: [string, string, string];
  rows: { name: string; source: string; signal: string; signalTone: "high" | "med" | "low" | "score" }[];
  primary: string;
  secondary: string;
  built?: boolean;
};

const KIT_APPS: AppMock[] = [
  {
    id: "recruiting",
    tab: "Recruiting",
    customer: "CMA CGM",
    agentLabel: "@Recruiting Agent",
    count: "12 candidates · ranked",
    columns: ["Name", "From", "Match"],
    rows: [
      { name: "Anne Pham", source: "Maersk APAC", signal: "11/12", signalTone: "score" },
      { name: "Marc Lefèvre", source: "CMA CGM internal", signal: "10/12", signalTone: "score" },
      { name: "Priya Subramanian", source: "ONE Singapore", signal: "10/12", signalTone: "score" },
      { name: "Lin Chen", source: "L'Oréal", signal: "7/12", signalTone: "score" },
    ],
    secondary: "Reject",
    primary: "Send outreach",
    built: true,
  },
  {
    id: "alerts",
    tab: "Alert Monitoring",
    customer: "ASML",
    agentLabel: "@Alert Agent",
    count: "20 active alerts",
    columns: ["Event", "Source", "Severity"],
    rows: [
      { name: "Yield drop 4.2%", source: "Fab 3, line 7", signal: "high", signalTone: "high" },
      { name: "Wafer warp anomaly", source: "Supplier Zeiss", signal: "medium", signalTone: "med" },
      { name: "Stepper drift", source: "EUV cluster 2", signal: "low", signalTone: "low" },
      { name: "Coolant pressure dip", source: "Fab 2, line 4", signal: "medium", signalTone: "med" },
    ],
    secondary: "Acknowledge",
    primary: "Escalate",
  },
  {
    id: "support",
    tab: "Customer Support",
    customer: "BNP Paribas",
    agentLabel: "@Support Agent",
    count: "30 priority tickets",
    columns: ["Ticket", "Channel", "Priority"],
    rows: [
      { name: "KYC re-verify, account 8472", source: "App", signal: "high", signalTone: "high" },
      { name: "Card declined abroad", source: "Phone", signal: "medium", signalTone: "med" },
      { name: "Statement export missing", source: "Web", signal: "low", signalTone: "low" },
      { name: "Transfer pending 48h", source: "App", signal: "high", signalTone: "high" },
    ],
    secondary: "Decline",
    primary: "Send reply",
  },
];

function KitAppsTabs() {
  return (
    <Tabs defaultValue={KIT_APPS[0].id} className="w-full">
      <TabsList className="border-b border-[#27272A14]">
        {KIT_APPS.map((app) => (
          <TabsTrigger key={app.id} value={app.id}>
            <span className="flex items-center gap-2">
              <span>{app.tab}</span>
              <span className="text-[12px] text-[#A6A09B] font-normal">
                · {app.customer}
              </span>
              {app.built && (
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#FA500F1A] text-[#EB3A0B]">
                  built
                </span>
              )}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      {KIT_APPS.map((app) => (
        <TabsContent
          key={app.id}
          value={app.id}
          className="mt-5 focus-visible:outline-none"
        >
          <AppMockup app={app} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function AppMockup({ app }: { app: AppMock }) {
  return (
    <div className="rounded-xl border border-[#27272A14] bg-white overflow-hidden shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      {/* Vibe top bar — same shell on every tab */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#27272A0F] bg-[#FAFAF9]">
        <div className="inline-flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#16A34A]" />
          <span className="text-[13px] font-medium text-[#14110F]">
            {app.agentLabel}
          </span>
        </div>
        <span className="text-[12px] text-[#79716B]">{app.count}</span>
      </div>
      {/* Column headers */}
      <div className="grid grid-cols-[1.6fr_1fr_auto] gap-3 px-4 py-2 border-b border-[#27272A0F] text-[11px] font-mono uppercase tracking-wider text-[#A6A09B]">
        {app.columns.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      {/* Rows */}
      {app.rows.map((r, i) => (
        <div
          key={i}
          className={cn(
            "grid grid-cols-[1.6fr_1fr_auto] gap-3 items-center px-4 py-3 text-[13px]",
            i < app.rows.length - 1 && "border-b border-[#27272A0F]"
          )}
        >
          <span className="text-[#14110F] truncate">{r.name}</span>
          <span className="text-[#79716B] truncate">{r.source}</span>
          <SignalPill tone={r.signalTone} label={r.signal} />
        </div>
      ))}
      {/* Action bar — propose-to-commit */}
      <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-[#27272A0F] bg-[#FAFAF9]">
        <button className="inline-flex items-center h-8 px-3 rounded-md text-[13px] text-[#57534D] border border-[#27272A14] bg-white">
          {app.secondary}
        </button>
        <button className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md text-[13px] font-medium text-white bg-[#14110F]">
          {app.primary} <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}

function SignalPill({
  tone,
  label,
}: {
  tone: "high" | "med" | "low" | "score";
  label: string;
}) {
  const styles =
    tone === "high"
      ? "bg-[#FEE2E2] text-[#991B1B]"
      : tone === "med"
        ? "bg-[#FEF3C7] text-[#92400E]"
        : tone === "low"
          ? "bg-[#DCFCE7] text-[#166534]"
          : "bg-[#27272A0F] text-[#14110F] tabular-nums";
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-[12px] font-medium",
        styles
      )}
    >
      {label}
    </span>
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
            One workflow in AI Studio. Many fronts in Vibe. CMA CGM gets
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
              Prescillia pointed at the opposite end. The biggest moat for
              an enterprise client is the ATS already inside. Past
              applicants, declined offers, finalists from prior searches.
              The default shortlist for CMA CGM lands eight from the ATS
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
          Four weeks to make this real. Feasibility isn&rsquo;t an
          engineering-only conversation. Every implementation choice
          reshapes the design. Latency budgets decide whether the agent
          streams or batches. Data model choices decide whether identity
          resolves silently or asks the user. Connector strategy decides
          whether a new customer takes days or weeks. So here&rsquo;s the
          phasing, and the questions I&rsquo;d want answered with eng,
          science, and Solutions before I draw a final pixel.
        </Body>
      </BodyCol>

      <div className="mt-12">
        <BodyCol>
          <Block title="4-week phasing">
            <Body>
              Week one is for locking the kit. The primitive contracts get
              frozen with eng and science. Component signatures, the
              connector auth model, the latency budgets per primitive.
              Nothing in the UI gets drawn final until the contract holds.
            </Body>
            <Body>
              Week two, Recruiting becomes the reference implementation.
              The canonical app every later one will clone. The sign-off
              ladder gets wired into actual API calls, not mocks.
            </Body>
            <Body>
              Week three is instrumentation and evals. Observability on
              every primitive, every connector. Failure-mode evals on the
              sign-off gates, run with science. I want to find where trust
              breaks before a design partner does.
            </Body>
            <Body>
              Week four, one design partner. A single enterprise pilot
              scoped tight. Real recruiters working a real role, sending
              real outreach to real candidates. First honest signal on
              whether the sign-off contract holds in production.
            </Body>
          </Block>

          <Block title="What I&rsquo;d want answered first">
            <Body>
              Five questions whose answers actually change what I draw.
              I&rsquo;d surface these in week one, not month two.
            </Body>
            <Body>
              <strong>Scoring latency.</strong> Which Mistral endpoint
              scores three hundred candidates against twelve criteria, and
              how fast? If it&rsquo;s batched at thirty seconds, the UI
              streams a reasoning chain. If it&rsquo;s sub-second per
              candidate, the UI updates the shortlist live. Two different
              designs.
            </Body>
            <Body>
              <strong>Connectors, build or buy.</strong> Thin custom
              connectors per customer or a paid abstraction like
              Merge.dev. Build is cheaper at scale but slower per
              customer. Buy ships the first ten pilots in days. The
              answer reshapes the architecture and the Solutions onboarding.
            </Body>
            <Body>
              <strong>Eval baseline.</strong> What does a labeled dataset
              of &ldquo;good shortlist&rdquo; look like? I&rsquo;d want
              fifty candidate profiles scored by three senior recruiters,
              with rationale. Anchor the eval before the first product
              launch. False positives carry a real brand cost.
            </Body>
            <Body>
              <strong>Candidate identity.</strong> The same person
              probably exists in Workday, in LinkedIn, in past Bolloré
              pools. Who owns the merge logic, and does it run in the
              agent&rsquo;s prompt or upstream as a dedup service? Design
              consequence: do duplicates ever surface to the recruiter, or
              never.
            </Body>
            <Body>
              <strong>Component scope.</strong> Which Le Chat primitives
              are stable enough to import directly, and which need to be
              forked for the custom layer. Picking the wrong cut means
              breaking changes upstream wreck every custom app. The
              version contract is design infrastructure.
            </Body>
          </Block>

          <Block title="For engineering">
            <Body>
              Where does the Custom Mode state live? In the Le Chat
              session, or in a Workflows runtime? Decides whether a brief
              survives a tab close. That choice shapes the entire
              recovery UX.
            </Body>
            <Body>
              Connector auth model is governance, not just plumbing. Per-user
              OAuth or per-tenant service account? Different security
              postures, different consent screens, different failure
              modes. I&rsquo;d argue this out before week two.
            </Body>
          </Block>

          <Block title="For science">
            <Body>
              Evaluate at the primitive level (does ScoreGauge return a
              defensible number?) or at the workflow level (does the
              shortlist actually map to good hires?). The first is easy
              to instrument and misses composition failures. The second
              is honest and slow. I&rsquo;d argue for both, workflow-first.
            </Body>
            <Body>
              Failure-mode dataset for sign-off. The agent occasionally
              tries to send outreach that shouldn&rsquo;t go out. What
              does &ldquo;shouldn&rsquo;t&rdquo; look like in data? I want
              labeled examples before we calibrate the friction thresholds.
            </Body>
          </Block>

          <Block title="For product / Solutions">
            <Body>
              Pick the next five verticals. For each, validate three
              things. Does the same primitive set hold? Does the same
              decision matrix hold? What&rsquo;s customer-specific and
              outside the kit? The kit only earns its keep if app two and
              three reuse eighty percent or more. I want that signal in
              month one, not month six.
            </Body>
          </Block>

          <Block title="For design (me)">
            <Body>
              Component kit governance. Who can add a primitive? Who can
              modify Le Chat surfaces? The kit stays opinionated only if
              the answer is named, not inferred. I&rsquo;d write the
              one-pager in week one, before the team scales and regret
              starts.
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
      className="text-[24px] leading-[32px] text-[#242529] text-balance"
      style={{
        fontFamily: "Signifier, ui-serif, Georgia, serif",
        fontWeight: 400,
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h1>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[24px] leading-[32px] text-[#242529] text-balance"
      style={{
        fontFamily: "Signifier, ui-serif, Georgia, serif",
        fontWeight: 400,
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[16px] leading-[24px] text-[#525252] text-pretty mt-4"
      style={{ fontWeight: 400, letterSpacing: "-0.005em" }}
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
        fontFamily: "var(--font-geist), Geist, sans-serif",
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

type Verbatim = {
  quote: string;
  name: string;
  company: string;
  logo: string | null;
  initials: string;
  background: string;
  quoteColor: string;
  footerColor: string;
};

const VERBATIMS: Verbatim[] = [
  {
    quote:
      "Sourcing AIs base their match on the job ad alone. The job ad is the essence of the kick-off, not the substance. The agent should be learning from the kick-off conversation to actually understand what fits.",
    name: "Diane Levron",
    company: "Qonto",
    logo: "/logos/qonto.png",
    initials: "Q",
    background:
      "linear-gradient(135deg, #FFE4D2 0%, #FFF7ED 60%, #FAF7F2 100%)",
    quoteColor: "#1A1614",
    footerColor: "#525252",
  },
  {
    quote:
      "How do you add a tool that integrates and doesn’t sit on top as another layer? Because otherwise it never gets used.",
    name: "Prescillia Kumponza",
    company: "Hexa",
    logo: "/logos/hexa.png",
    initials: "H",
    background: "#FCE7F3",
    quoteColor: "#1A1614",
    footerColor: "#525252",
  },
  {
    quote:
      "Today, few ATSs let you search your own candidate database properly. Just being able to source inside your own database, that’s already a huge plus. It’s a goldmine.",
    name: "Prescillia Kumponza",
    company: "Hexa",
    logo: "/logos/hexa.png",
    initials: "H",
    background: "#FCE7F3",
    quoteColor: "#1A1614",
    footerColor: "#525252",
  },
  {
    quote:
      "The modern method is to step above the job description. Challenge the need itself. Often there’s a gap between what’s being asked and what’s actually needed.",
    name: "Mathias Frachon",
    company: "The Product Crew",
    logo: null,
    initials: "TPC",
    background: "#E6F4D7",
    quoteColor: "#1A1614",
    footerColor: "#525252",
  },
  {
    quote:
      "I would never let a message go out without reviewing the profile first.",
    name: "Prescillia Kumponza",
    company: "Hexa",
    logo: "/logos/hexa.png",
    initials: "H",
    background: "#FCE7F3",
    quoteColor: "#1A1614",
    footerColor: "#525252",
  },
  {
    quote:
      "A high-value recruiter in 2027 is a relationship operator, a quality-of-hire owner, and a pipeline strategist. Not a sourcer or scheduler.",
    name: "Pin",
    company: "AI recruiting platform",
    logo: "/logos/pin.png",
    initials: "P",
    background: "#E0F2FE",
    quoteColor: "#1A1614",
    footerColor: "#525252",
  },
];

function ResearchVerbatims() {
  return (
    <TestimonialStack cardHeightVh={45}>
      {VERBATIMS.map((v, i) => (
        <VerbatimCard key={i} verbatim={v} />
      ))}
    </TestimonialStack>
  );
}

function VerbatimCard({ verbatim }: { verbatim: Verbatim }) {
  return (
    <div
      className="rounded-2xl p-8 md:p-10 flex flex-col"
      style={{ background: verbatim.background }}
    >
      <p
        className="text-[20px] md:text-[22px] font-medium leading-[1.5] tracking-[-0.005em] text-pretty"
        style={{ color: verbatim.quoteColor }}
      >
        “{verbatim.quote}”
      </p>
      <div className="mt-4 flex items-center gap-3">
        <CompanyLogo
          logo={verbatim.logo}
          initials={verbatim.initials}
          alt={verbatim.company}
          quoteColor={verbatim.quoteColor}
        />
        <div className="flex flex-col min-w-0 leading-[16px]">
          <span
            className="text-[14px] font-medium"
            style={{ color: verbatim.quoteColor }}
          >
            {verbatim.name}
          </span>
          <span
            className="text-[14px] mt-0.5"
            style={{ color: verbatim.footerColor }}
          >
            {verbatim.company}
          </span>
        </div>
      </div>
    </div>
  );
}

function CompanyLogo({
  logo,
  initials,
  alt,
  quoteColor,
}: {
  logo: string | null;
  initials: string;
  alt: string;
  quoteColor: string;
}) {
  if (!logo) {
    return (
      <span
        className="size-8 grid place-items-center text-[12px] font-mono font-semibold shrink-0 tracking-tight"
        style={{ color: quoteColor }}
        aria-label={alt}
      >
        {initials}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={alt}
      width={32}
      height={32}
      className="size-8 object-contain shrink-0"
      loading="lazy"
    />
  );
}

function BriefQuestionsAccordion() {
  const questions: { id: string; q: string; a: React.ReactNode }[] = [
    {
      id: "q1",
      q: "What is a custom AI app, relative to Vibe?",
      a: (
        <>
          A composition of Vibe&rsquo;s primitives plus a thin business
          layer. The sidebar, the composer, the mode switcher stay Vibe.
          Only the behavior changes. The app slots into the existing
          Agents page, Shared tab. Zero new top-level concept.
        </>
      ),
    },
    {
      id: "q2",
      q: "Where does the Recruiting Tool primarily live, Chat Mode or Work Mode?",
      a: (
        <>
          Work Mode is the home. A senior search runs for weeks, sometimes
          months, across sourcing, screening, interviews, sign-off. Chat
          Mode is the fast door in, opened with a slash for ad-hoc
          questions.
        </>
      ),
    },
    {
      id: "q3",
      q: "What’s the human-agent trust contract at each step?",
      a: (
        <>
          Sign-off scales with stakes. Auto-pilot on things that stay
          inside the company. A human commit before anything goes out. A
          heavier commit when an action is hard to undo. Friction maps to
          consequence.
        </>
      ),
    },
  ];
  return (
    <Accordion className="flex w-full flex-col" defaultValue="q1">
      {questions.map((q) => (
        <AccordionItem
          key={q.id}
          value={q.id}
          className="py-3 border-b border-[#EDE9E3] last:border-b-0"
        >
          <AccordionTrigger className="w-full text-left">
            <div className="flex items-center gap-2">
              <ChevronRight className="size-4 text-[#14110F] transition-transform duration-200 group-data-[state=expanded]:rotate-90 shrink-0" />
              <span className="text-[16px] leading-[24px] font-medium text-[#242529]">
                {q.q}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="origin-top">
            <p className="pl-6 pr-2 mt-2 text-[16px] leading-[24px] text-[#525252] text-pretty">
              {q.a}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
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
