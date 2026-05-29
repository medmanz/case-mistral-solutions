export type Fit = "strong" | "good" | "worth-exploring";

export type Candidate = {
  id: string;
  name: string;
  initials: string;
  role: string;
  company: string;
  location: string;
  score: 1 | 2 | 3 | 4 | 5;
  fit: Fit;
  reasons: string[];
  signals?: string[];
  topPick?: boolean;
};

export const candidates: Candidate[] = [
  {
    id: "sophie-martin",
    name: "Sophie Martin",
    initials: "SM",
    role: "Senior Backend Engineer",
    company: "Stripe",
    location: "Paris · Open to remote",
    score: 5,
    fit: "strong",
    topPick: true,
    reasons: [
      "8+ years Python and Go, exact match for your seniority bar",
      "Built distributed payment systems at Stripe scale",
      "Recent talk on idempotency patterns, signals deep ownership",
    ],
    signals: ["EU work permit", "Replied to outbound 2 weeks ago"],
  },
  {
    id: "marc-dubois",
    name: "Marc Dubois",
    initials: "MD",
    role: "Staff Engineer",
    company: "Datadog",
    location: "Paris",
    score: 5,
    fit: "strong",
    topPick: true,
    reasons: [
      "Staff-level on observability backend, six years at Datadog",
      "Maintainer of open source tracing library, public craft",
      "Listed Mistral in his 'companies I'd consider' tweet in March",
    ],
  },
  {
    id: "sara-kim",
    name: "Sara Kim",
    initials: "SK",
    role: "Senior Software Engineer",
    company: "Vercel",
    location: "Remote · Berlin",
    score: 5,
    fit: "strong",
    topPick: true,
    reasons: [
      "Edge runtime experience matches your latency targets",
      "Shipped multiple AI-adjacent features at Vercel in 2026",
      "Active in Rust async community, complements your team",
    ],
  },
  {
    id: "james-okonkwo",
    name: "James Okonkwo",
    initials: "JO",
    role: "Backend Engineer",
    company: "Spotify",
    location: "London",
    score: 4,
    fit: "strong",
    topPick: true,
    reasons: [
      "Strong Python and event-driven systems at Spotify",
      "Personal projects show comfort with LLM tool use",
      "Slightly below 8 years bar but trajectory is sharp",
    ],
    signals: ["Visa-sponsored move possible"],
  },
  {
    id: "anya-petrov",
    name: "Anya Petrov",
    initials: "AP",
    role: "Senior Engineer",
    company: "Hugging Face",
    location: "Paris",
    score: 4,
    fit: "strong",
    topPick: true,
    reasons: [
      "ML infra at Hugging Face, deeply familiar with the stack",
      "Recent contributor to vLLM, exact adjacency to your work",
      "Wants to move from research-facing to product-facing",
    ],
  },
  {
    id: "lucas-fernandes",
    name: "Lucas Fernandes",
    initials: "LF",
    role: "Senior Backend Engineer",
    company: "Doctolib",
    location: "Lyon · Hybrid",
    score: 4,
    fit: "good",
    reasons: [
      "Python and Ruby at scale, healthcare regulatory experience",
      "Recently led migration to async, transferable to your stack",
      "Less AI-adjacent but learns fast based on side projects",
    ],
  },
  {
    id: "irene-garcia",
    name: "Irene García",
    initials: "IG",
    role: "Software Engineer",
    company: "Algolia",
    location: "Paris",
    score: 4,
    fit: "good",
    reasons: [
      "Search infra at Algolia maps to your retrieval needs",
      "Strong Go and gRPC, gap on Python that's bridgeable",
      "Six years experience, slightly under bar but very polished",
    ],
  },
  {
    id: "tomas-novak",
    name: "Tomas Novák",
    initials: "TN",
    role: "Senior Backend Engineer",
    company: "Hello Fresh",
    location: "Berlin",
    score: 3,
    fit: "good",
    reasons: [
      "Solid Python and distributed systems at HelloFresh",
      "Limited public craft, signals less ownership orientation",
      "Strong on backend fundamentals, weaker on AI exposure",
    ],
  },
  {
    id: "fatou-diop",
    name: "Fatou Diop",
    initials: "FD",
    role: "Software Engineer",
    company: "Qonto",
    location: "Paris",
    score: 3,
    fit: "good",
    reasons: [
      "Fintech-grade rigor on safety-critical flows at Qonto",
      "Five years experience, growth trajectory uncertain",
      "Limited LLM exposure but conceptual fit is strong",
    ],
  },
  {
    id: "ravi-shah",
    name: "Ravi Shah",
    initials: "RS",
    role: "Backend Engineer",
    company: "Klarna",
    location: "Stockholm",
    score: 3,
    fit: "worth-exploring",
    reasons: [
      "Strong on backend but less exposure to distributed scale",
      "Recently shipped LLM evaluation framework as side project",
      "Worth a screening call to test the trajectory hypothesis",
    ],
  },
  {
    id: "elena-rossi",
    name: "Elena Rossi",
    initials: "ER",
    role: "Senior Engineer",
    company: "BlaBlaCar",
    location: "Paris",
    score: 3,
    fit: "worth-exploring",
    reasons: [
      "Backend depth on marketplace primitives",
      "Has not worked with Python in 2 years, ramp-up needed",
      "Strong on system design, gap on the AI-specific stack",
    ],
  },
  {
    id: "noah-becker",
    name: "Noah Becker",
    initials: "NB",
    role: "Software Engineer",
    company: "N26",
    location: "Berlin",
    score: 3,
    fit: "worth-exploring",
    reasons: [
      "Solid backend, comfortable in regulated environments",
      "Less senior than the bar, but presents as fast learner",
      "Would need a strong onboarding to ramp on the AI side",
    ],
  },
];

export const counts = {
  total: candidates.length,
  strong: candidates.filter((c) => c.fit === "strong").length,
  good: candidates.filter((c) => c.fit === "good").length,
  worthExploring: candidates.filter((c) => c.fit === "worth-exploring").length,
};

export const topPicks = candidates.filter((c) => c.topPick).slice(0, 5);
