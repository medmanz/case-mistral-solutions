import { Sidebar } from "@/components/layout/Sidebar";
import { Lightbox } from "@/components/ui/Lightbox";
import { VideoLightbox } from "@/components/ui/VideoLightbox";
import { Play, ChevronRight, ChevronUp } from "lucide-react";
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
        <main className="page-enter flex-1 min-w-0 flex flex-col items-center px-8">
          <PeakMoment />
          <Hero />
          <ReadingTheBrief />
          <UserResearch />
          <FlowInFourActs />
          <SameKit />
          <HowSolutionsShips />
          <Choices />
          <Feasibility />
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
        imgClassName="block w-full h-auto rounded"
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
        <H1>Where I landed</H1>
        <Body>
          After a week of framing, the call I made: a custom AI app
          inside Le Chat is one composition. Le Chat&rsquo;s shell. Le
          Chat&rsquo;s agent. A thin layer of domain logic on top.
          That&rsquo;s the position the rest of this case study defends.
        </Body>
        <Body>
          To make it concrete, I built the Recruiting Tool for CMA CGM.
          It&rsquo;s the worked example. Chat is the door in. Task in
          Work is where the search actually lives over weeks. The four
          design primitives I pulled out of the tool are what scales the
          kit to the next ninety-nine apps. The rest of the case study
          walks through how the position holds, and where I had to make
          trade-offs.
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
          The brief asked for a Recruiting Tool. Before I drew anything,
          I spent a real chunk of time just framing the problem.
          Designing for AI recruiting is mostly a question of which
          moments to take from the human and which moments to give back.
          The UI comes after that call. You can&rsquo;t make it from your
          desk.
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

      <div className="mt-10">
        <BodyCol>
          <Accordion className="flex w-full flex-col">
            <ChoicesItem value="trust" title="Trust is the differentiator">
              <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                Every tool sources well enough. Few of them earn
                confidence. An agent that acts without context burns brand
                trust in a single bad outreach. Candidates remember those.
                And the candidate-side AI is starting to filter the
                generic agent messages out anyway.
              </p>
            </ChoicesItem>

            <ChoicesItem value="context" title="Context is the quality lever">
              <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                The kick-off conversation is where the real signal lives.
                The scoring rubric is downstream of it. So are the
                rejection patterns from past hires. Diane put it plainly.
                The job ad is the essence of the kick-off, not the
                substance. An AI that matches on the ad alone misses
                everything the kick-off taught the human. Context already
                lives inside the enterprise. The agent&rsquo;s job is to
                compose it.
              </p>
            </ChoicesItem>

            <ChoicesItem value="triage" title="Inbound triage is the volumetric pain">
              <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                Diane&rsquo;s team gets 165 applications in a day on one
                role. Three hours of sorting. Half a recruiter&rsquo;s
                day, gone. No manual process scales to that.
              </p>
            </ChoicesItem>

            <ChoicesItem value="structured" title="AI earns its keep on structured text">
              <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                Scoring, qualification, drafts of any kind. The agent is
                reliable there. The final calls stay with the human.
                Mathias uses AI deep in the screening loop. He pastes
                interview transcripts into Claude and reads them against
                the rubric. The first message to a senior candidate, he
                still writes himself.
              </p>
            </ChoicesItem>

            <ChoicesItem value="ats" title="The ATS is the real goldmine">
              <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                Prescillia put it plainly. Past applicants, declined
                offers, interview notes, second-choice candidates from
                previous searches. Hundreds of people your team has
                already met and scored, with notes from human screens
                you&rsquo;ve already done. Most ATS make these
                unreachable. An AI that re-discovers your own pool before
                reaching outside is more valuable than one that scans
                more LinkedIn.
              </p>
              <p className="mt-3 text-[16px] leading-[24px] text-[#525252] text-pretty">
                That&rsquo;s why the shortlist defaults to eight
                internal, four external. Internal here means already in
                our ATS. The agent searches the ATS first.
              </p>
            </ChoicesItem>

            <ChoicesItem value="workspace" title="The product is a shared workspace">
              <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                Diane and Mathias described the same fragmentation. The
                TA reads one version of the role in Notion. The hiring
                manager reads a different one buried in email. The ATS
                quietly holds a third. So I put the Recruiting Tool
                inside a shared Vibe Project. Every stakeholder reads the
                same state.
              </p>
            </ChoicesItem>
          </Accordion>
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
          <H2>1. Access</H2>
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
          <H2>2. Brief, then Create as Task</H2>
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
          <H2>3. Daily use</H2>
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
// Section 7 · Same kit, different apps
// ─────────────────────────────────────────────────────────────────────────────

function SameKit() {
  return (
    <section id="kit" className="py-12">
      <BodyCol>
        <H1>How design helps Solutions ship faster</H1>
        <Body>
          Mistral Solutions ships custom AI apps for enterprise, plus
          clickable demos before the real build. The team is engineers,
          mostly. If design only lives with me, I become the bottleneck
          on every project. So the answer to that question is three
          things, applied to what I built here.
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
          <H2>How I&rsquo;d ship the primitives to Solutions</H2>
          <Body>
            Concepts don&rsquo;t scale a team. Code does. The way I see
            this landing is a versioned React library that Solutions
            imports the same way they import any internal package.
            <code className="font-mono text-[14px] mx-1 px-1.5 py-0.5 rounded bg-[#F4F4F5] text-[#242529]">
              @mistral/custom-app-kit
            </code>
            ships <code className="font-mono text-[14px] mx-1 px-1.5 py-0.5 rounded bg-[#F4F4F5] text-[#242529]">{"<ScoreGauge />"}</code>,{" "}
            <code className="font-mono text-[14px] mx-1 px-1.5 py-0.5 rounded bg-[#F4F4F5] text-[#242529]">{"<ApprovalLevel />"}</code>,{" "}
            <code className="font-mono text-[14px] mx-1 px-1.5 py-0.5 rounded bg-[#F4F4F5] text-[#242529]">{"<ReasoningChain />"}</code>{" "}
            and the rest, with stable props and design tokens baked in.
            Solutions doesn&rsquo;t restyle, they configure.
          </Body>
          <Body>
            The grid below is the inventory I sketched while building
            Recruiting. Roughly forty components, each tied to one of the
            four primitives. Consider it a working draft of what the
            library would hold. The shipped version lives behind a real
            <code className="font-mono text-[14px] mx-1 px-1.5 py-0.5 rounded bg-[#F4F4F5] text-[#242529]">
              npm install
            </code>
            , with Storybook for browsing and changelogs that signal
            breaking changes the day they happen.
          </Body>
          <div className="mt-6">
            <Lightbox
              src="/lofi/component-kit.png?v=3"
              alt="Component kit. 40 React components extracted from the Recruiting Tool"
            />
            <Caption>
              Working draft of the kit inventory. The shipped library
              would live as a versioned React package, browsable in
              Storybook.
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
            Same Le Chat shell. Same four primitives. What changes
            per app: the data sources, the scoring, the approval
            levels. Every new app is a configuration on top of work
            already done.
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
        <H1>Shipping in AI Studio</H1>
        <Body>
          Honest disclaimer first. I didn&rsquo;t have time to mock
          this part up. I prioritised the Recruiting Tool, the
          primitives, and the trade-offs because those carry the
          architectural argument. So instead of showing screens, let me
          tell you how I see this piece working.
        </Body>
        <Body>
          The Recruiting Tool a recruiter opens in Le Chat is the
          front. The composition behind it lives in AI Studio.
          Solutions builds the workflow once, configures it for the
          customer, and pushes it out from there. One workflow in
          Studio, many fronts in Le Chat. CMA CGM gets one
          configuration of the kit. La Fromagerie gets another. The
          agent stays the same. What changes is the connectors wired
          in, the scoring rubric, the voice samples, and the sign-off
          thresholds the client wants.
        </Body>
        <Body>
          The Solutions experience I&rsquo;d want to design in Studio
          looks roughly like this. A blank Custom App on the canvas, a
          primitive palette on the side (drop in a ScoreGauge, drop in
          an ApprovalLevel), connectors picked from a list, the rubric
          authored in a form, a preview pane that shows the front
          updating live. The same React components the Recruiting Tool
          renders in Le Chat, configured here. That&rsquo;s the
          demo-to-prod path.
        </Body>
        <Body>
          That&rsquo;s how Solutions stops being the bottleneck. The
          work that produced the Recruiting Tool produces the next
          ninety-nine the same way. A new Solutions Engineer opens her
          first app already half-built from the kit. Happy to walk
          through this in more detail at the panel, or sketch it live
          if that&rsquo;s useful.
        </Body>
      </BodyCol>
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

      <div className="mt-10">
        <BodyCol>
          <Accordion className="flex w-full flex-col">
            <ChoicesItem
              value="surfaces"
              title="App backs the surfaces, doesn't take a sidebar slot"
            >
              <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                I tried a peer Apps section. I tried turning the Project
                into the app. I tried nesting the app inside a Project.
                Each one added a primitive Vibe didn&rsquo;t need. Then I
                realized the app didn&rsquo;t need a sidebar item at all.
                Tasks already live in the sidebar. The app backs the
                surfaces Tasks render on. Discovery happens in the Agents
                page. Solutions deploys, client uses.
              </p>
              <div className="mt-4">
                <LofiGrid
                  images={[
                    { src: "/lofi/sidebar-a-right-panel.png?v=3", alt: "Apps as a peer sidebar section" },
                    { src: "/lofi/sidebar-b-tabs.png?v=3", alt: "App turned into a Project" },
                    { src: "/lofi/sidebar-d-app-card.png?v=3", alt: "App nested inside a Project" },
                  ]}
                  caption="Three sidebar architectures I sketched and dropped. Each one promoted the app to a sidebar primitive. None survived because the app doesn't need to be one."
                />
              </div>
            </ChoicesItem>

            <ChoicesItem value="chat-task" title="Chat is ad-hoc, Task is the bridge to Work">
              <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                Chat with the agent first. Files dragged by hand,
                archetypes proposed. When the conversation tightens into a
                real search, Create as Task makes it persistent. The Task
                lands in Work mode with the app&rsquo;s canvas attached.
                One bridge, no parallel surfaces.
              </p>
            </ChoicesItem>

            <ChoicesItem value="list-rows" title="List rows with side panel, not a card grid">
              <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                Workable, Pin, HeyMilo use cards. I tried cards. Twelve
                candidates as cards reads like inventory. I switched to
                list rows with a side panel. Editorial density holds up
                when the point is reading.
              </p>
              <div className="mt-4">
                <LofiGrid
                  images={[
                    { src: "/lofi/shortlist-card-grid.png?v=1", alt: "Card grid variant, dropped" },
                    { src: "/lofi/shortlist-list-rows.png?v=2", alt: "List rows variant, kept" },
                  ]}
                  caption="Same twelve candidates, sketched both ways. The list won."
                />
              </div>
            </ChoicesItem>

            <ChoicesItem value="individual-commits" title="Individual commits, no Send all">
              <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                Five drafts, one click. I considered it. I pulled it. The
                propose-to-commit contract holds only if every external
                action waits for a conscious commit. The friction is doing
                the work.
              </p>
            </ChoicesItem>

            <ChoicesItem value="ats-first" title="ATS-first sourcing, not LinkedIn-first">
              <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                Every other tool leads with the size of its external pool.
                Prescillia pointed at the opposite end. The biggest moat
                for an enterprise client is the ATS already inside. Past
                applicants, declined offers, finalists from prior
                searches. The default shortlist for CMA CGM lands
                eight from the ATS and four new sourced via LinkedIn.
              </p>
            </ChoicesItem>
          </Accordion>

          <div className="mt-10">
            <Body>
              Two areas I scoped out. Inbound triage and the pipeline
              view. The same scoring and propose-to-commit primitives
              apply to both. I focused on the moments where trust gets
              transmitted because that&rsquo;s where the architecture has
              something to teach. The rest is composition on top of the
              same five primitives.
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
          Four weeks to ship. I&rsquo;d phase it like this, and there are
          three things I&rsquo;d want to figure out with the team before
          drawing the final pixels. The questions whose answers actually
          change the design itself, so I&rsquo;d rather ask them than
          guess.
        </Body>
      </BodyCol>

      <div className="mt-10">
        <BodyCol>
          <Accordion className="flex w-full flex-col" defaultValue="weeks">
            <AccordionItem
              value="weeks"
              className="py-3 border-b border-[#EDE9E3]"
            >
              <AccordionTrigger className="w-full text-left">
                <div className="flex items-center gap-2">
                  <ChevronRight className="size-4 text-[#14110F] transition-transform duration-200 group-data-[state=expanded]:rotate-90 shrink-0" />
                  <span className="text-[16px] leading-[24px] font-medium text-[#242529]">
                    The 4 weeks
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-top">
                <div className="pl-6 pr-2 mt-2 flex flex-col gap-3">
                  <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                    <strong>Week 1.</strong> Lock the kit with eng. What
                    does each primitive look like in code, what data it
                    needs, what it returns. Nothing in the UI gets drawn
                    final until that contract holds.
                  </p>
                  <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                    <strong>Week 2.</strong> Build the Recruiting Tool as
                    the reference. The canonical version, the one every
                    later app clones. Real API calls behind the sign-off,
                    not mocks.
                  </p>
                  <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                    <strong>Week 3.</strong> Instrument and evaluate.
                    Where does the agent get scoring wrong? Where does the
                    sign-off feel too heavy or too light? I want to find
                    the trust breaks before the design partner does.
                  </p>
                  <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                    <strong>Week 4.</strong> One design partner. A real
                    recruiter, on a real role, sending real outreach.
                    First honest signal on whether the sign-off contract
                    holds when the stakes are real.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="questions"
              className="py-3 border-b border-[#EDE9E3]"
            >
              <AccordionTrigger className="w-full text-left">
                <div className="flex items-center gap-2">
                  <ChevronRight className="size-4 text-[#14110F] transition-transform duration-200 group-data-[state=expanded]:rotate-90 shrink-0" />
                  <span className="text-[16px] leading-[24px] font-medium text-[#242529]">
                    Three questions I&rsquo;d ask the team first
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-top">
                <div className="pl-6 pr-2 mt-2 flex flex-col gap-3">
                  <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                    <strong>How fast does the agent score 300 candidates?</strong>{" "}
                    I&rsquo;d ask science. If it&rsquo;s a 30-second batch,
                    the UI shows a thinking chain while the user waits. If
                    it&rsquo;s fast enough to stream candidate by candidate,
                    the shortlist fills in live. Two completely different
                    designs hang on that one number.
                  </p>
                  <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                    <strong>How do we know the shortlist is actually good?</strong>{" "}
                    I&rsquo;d ask science again. I&rsquo;d want a small
                    labeled baseline before the first ship. Fifty profiles
                    scored by three senior recruiters, with reasons.
                    Without that, we can&rsquo;t tell if the agent&rsquo;s
                    11/12 score means anything.
                  </p>
                  <p className="text-[16px] leading-[24px] text-[#525252] text-pretty">
                    <strong>Where does the brief live between sessions?</strong>{" "}
                    I&rsquo;d ask engineering. If a closed tab loses it,
                    the recovery UX is one design. If it persists in a
                    task that resumes, that&rsquo;s a different one.
                    I&rsquo;d rather know before I draw the empty state.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="design"
              className="py-3 border-b border-[#EDE9E3] last:border-b-0"
            >
              <AccordionTrigger className="w-full text-left">
                <div className="flex items-center gap-2">
                  <ChevronRight className="size-4 text-[#14110F] transition-transform duration-200 group-data-[state=expanded]:rotate-90 shrink-0" />
                  <span className="text-[16px] leading-[24px] font-medium text-[#242529]">
                    What I&rsquo;d own as design
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-top">
                <p className="pl-6 pr-2 mt-2 text-[16px] leading-[24px] text-[#525252] text-pretty">
                  Beyond the screens, the thing that decides whether
                  this scales is governance. Who can add a primitive to
                  the kit? Who can change a Le Chat surface? The kit
                  stays opinionated only if those answers are written
                  down explicitly. I&rsquo;d draft that one-pager in
                  week one, before the team grows and the answer drifts
                  to &ldquo;everyone, sometimes&rdquo;.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </BodyCol>
      </div>
    </section>
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
      className="text-[16px] leading-[24px] text-[#242529] text-balance"
      style={{ fontWeight: 550, letterSpacing: "-0.005em" }}
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

function ChoicesItem({
  value,
  title,
  children,
}: {
  value: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <AccordionItem
      value={value}
      className="py-4 border-b border-[#EDE9E3] last:border-b-0"
    >
      <AccordionTrigger className="w-full text-left">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[16px] leading-[24px] font-medium text-[#242529]">
            {title}
          </span>
          <ChevronUp
            className="size-4 text-[#79716B] shrink-0 -rotate-180 transition-transform duration-200 group-data-[state=expanded]:rotate-0"
            strokeWidth={2}
          />
        </div>
      </AccordionTrigger>
      <AccordionContent className="origin-top">
        <div className="mt-3">{children}</div>
      </AccordionContent>
    </AccordionItem>
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
