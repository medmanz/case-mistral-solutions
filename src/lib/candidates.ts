export type Fit = "strong" | "good" | "worth-exploring";

export type Status =
  | "pending"
  | "contacted"
  | "replied"
  | "interview"
  | "offer";

export type AtsHistory = {
  appliedDate: string; // e.g. "18 months ago"
  appliedRole: string;
  outcome: string; // e.g. "Declined offer", "Finalist, lost to internal mobility"
  notes?: string; // condensed interview / recruiter note
};

export type Candidate = {
  id: string;
  name: string;
  initials: string;
  photo: string;
  role: string;
  company: string;
  location: string;
  score: 1 | 2 | 3 | 4 | 5;
  fit: Fit;
  status: Status;
  internal: boolean;
  reasons: string[];
  signals?: string[];
  risks?: string[];
  topPick?: boolean;
  atsHistory?: AtsHistory;
};

function statusFor(_id: string): Status {
  // Initial state — Hélène just discovered the shortlist, no one contacted yet
  return "pending";
}

// Less recognizable than the classic Unsplash portraits. randomuser.me gives
// real-looking faces that don't carry the "stock-photo of the year" feel.
// Hand-curated per candidate so the look stays stable across deployments.
const PORTRAITS: Record<string, string> = {
  "anne-lefevre": "https://randomuser.me/api/portraits/women/65.jpg",
  "marc-tessier": "https://randomuser.me/api/portraits/men/41.jpg",
  "yuki-nakamura": "https://randomuser.me/api/portraits/men/83.jpg",
  "camille-roux": "https://randomuser.me/api/portraits/women/44.jpg",
  "sofia-esposito": "https://randomuser.me/api/portraits/women/29.jpg",
  "tanguy-lefort": "https://randomuser.me/api/portraits/men/15.jpg",
  "karim-belkacem": "https://randomuser.me/api/portraits/men/73.jpg",
  "lea-fournier": "https://randomuser.me/api/portraits/women/12.jpg",
  "mei-lin-chen": "https://randomuser.me/api/portraits/women/79.jpg",
  "rajesh-krishnan": "https://randomuser.me/api/portraits/men/29.jpg",
  "hiroshi-tanaka": "https://randomuser.me/api/portraits/men/51.jpg",
  "sarah-obrien": "https://randomuser.me/api/portraits/women/8.jpg",
};

function photoUrl(id: string): string {
  return PORTRAITS[id] ?? PORTRAITS["anne-lefevre"];
}

const RAW_CANDIDATES: Omit<Candidate, "photo" | "status">[] = [
  {
    id: "anne-lefevre",
    name: "Anne Lefèvre",
    initials: "AL",
    role: "Senior Supply Chain Director",
    company: "Bolloré Logistics",
    location: "Marseille",
    score: 5,
    fit: "strong",
    internal: true,
    topPick: true,
    reasons: [
      "10 years at Bolloré Logistics across Africa and EMEA trade lanes",
      "We met her in 2024 for a VP search, panel scored 4.6/5",
      "Already cleared compliance and security review during that process",
    ],
    signals: ["Mandarin C1", "Singapore rotation 2019-2021", "Cleared 2024"],
    atsHistory: {
      appliedDate: "18 months ago",
      appliedRole: "VP, Trade Lanes EMEA",
      outcome: "Declined offer",
      notes:
        "Final round, panel rated 4.6/5. Declined on relocation timing (school year). Recruiter note: \"Re-engage in 12-18 months, strong fit for APAC scope.\"",
    },
  },
  {
    id: "marc-tessier",
    name: "Marc Tessier",
    initials: "MT",
    role: "Senior Manager, Trade Operations EMEA",
    company: "Maersk",
    location: "Marseille",
    score: 5,
    fit: "strong",
    internal: true,
    topPick: true,
    reasons: [
      "12 years at Maersk across Le Havre, Marseille and a Shanghai rotation",
      "Led the EMEA-Asia trade lane optimization that saved 8% on transit times",
      "Final round with us 2 years ago for the APAC Director seat",
    ],
    signals: ["Director-track", "Shanghai rotation 2018", "Mandarin B2"],
    atsHistory: {
      appliedDate: "2 years ago",
      appliedRole: "Director, Trade Lanes APAC",
      outcome: "Lost to internal mobility",
      notes:
        "Panel preferred internal at the time. Recruiter note: \"Strong second choice, re-engage when next APAC opening lands.\"",
    },
  },
  {
    id: "yuki-nakamura",
    name: "Yuki Nakamura",
    initials: "YN",
    role: "Trade Lane Manager APAC",
    company: "ONE (Ocean Network Express)",
    location: "Singapore",
    score: 5,
    fit: "strong",
    internal: true,
    topPick: true,
    reasons: [
      "Runs the APAC trade lane desk for ONE",
      "Built the Singapore-Yokohama-Busan rotation playbook in 2024",
      "Native Japanese, fluent English, working Mandarin",
    ],
    signals: ["APAC-based", "Finalist last cycle", "Trilingual"],
    atsHistory: {
      appliedDate: "14 months ago",
      appliedRole: "Senior Manager, APAC Trade Lanes",
      outcome: "Finalist, lost to internal mobility candidate",
      notes:
        "Panel rated 4.4/5. Recruiter note: \"Same role one level up should be an easy yes.\"",
    },
  },
  {
    id: "mei-lin-chen",
    name: "Mei-Lin Chen",
    initials: "MC",
    role: "Senior Supply Chain Manager",
    company: "Maersk",
    location: "Singapore · Open to Marseille relocation",
    score: 5,
    fit: "strong",
    internal: false,
    topPick: true,
    reasons: [
      "12 years in container shipping and intermodal logistics across APAC",
      "Led the Singapore-Shanghai trade lane optimization at Maersk (saved 8%)",
      "Fluent in Mandarin, English, French, exact match for your APAC scope",
    ],
    signals: ["Open to relocate", "Trilingual"],
    risks: ["Currently in process at MSC, fast-track"],
  },
  {
    id: "rajesh-krishnan",
    name: "Rajesh Krishnan",
    initials: "RK",
    role: "Head of Trade Operations",
    company: "Hapag-Lloyd",
    location: "Hamburg · Remote-friendly",
    score: 5,
    fit: "strong",
    internal: false,
    topPick: true,
    reasons: [
      "Built the trade compliance framework for Hapag-Lloyd APAC region",
      "Deep network with port authorities across Singapore, Hong Kong, Mumbai",
      "Recently published on decarbonization in container shipping",
    ],
    signals: ["Published author", "APAC network"],
  },
  {
    id: "camille-roux",
    name: "Camille Roux",
    initials: "CR",
    role: "Operations Lead, Trade Lanes",
    company: "Geodis",
    location: "Marseille",
    score: 4,
    fit: "good",
    internal: true,
    reasons: [
      "7 years at Geodis, currently leads the EMEA-LATAM lane team",
      "Completed the Geodis Senior Leadership program in 2024",
      "Strong on process discipline, slightly light on APAC exposure",
    ],
    signals: ["High-potential", "Leadership program 2024"],
    atsHistory: {
      appliedDate: "9 months ago",
      appliedRole: "Senior Manager, Trade Operations EMEA",
      outcome: "Strong second choice",
      notes:
        "Panel scored 4.2/5. Lost the EMEA seat to another candidate. Recruiter note: \"Stretch on APAC scope but ready, re-engage on next opening.\"",
    },
  },
  {
    id: "sofia-esposito",
    name: "Sofia Esposito",
    initials: "SE",
    role: "Senior Manager, Customer Operations",
    company: "MSC",
    location: "Genoa",
    score: 4,
    fit: "good",
    internal: true,
    reasons: [
      "9 years at MSC, runs the Genoa customer operations hub",
      "Comfortable across Mediterranean and APAC reefer trade",
      "Working English/Italian/French, basic Mandarin",
    ],
    signals: ["Mediterranean lead", "Cleared 2024"],
    atsHistory: {
      appliedDate: "16 months ago",
      appliedRole: "Senior Manager, APAC Customer Operations (Singapore)",
      outcome: "Declined offer",
      notes:
        "Declined for family reasons (partner's job). LinkedIn signal: partner left employer in Q1 2026, may be open again.",
    },
  },
  {
    id: "tanguy-lefort",
    name: "Tanguy Lefort",
    initials: "TL",
    role: "Logistics Strategy Manager",
    company: "DSV",
    location: "Paris",
    score: 4,
    fit: "good",
    internal: true,
    reasons: [
      "6 years at DSV on contract logistics strategy for industrial clients",
      "Built the APAC contract logistics expansion deck in 2025",
      "Less direct container shipping exposure, strong on adjacency",
    ],
    signals: ["Adjacent expertise", "Re-engage flag"],
    atsHistory: {
      appliedDate: "11 months ago",
      appliedRole: "Senior Manager, Asia Strategy",
      outcome: "Withdrew (timing)",
      notes:
        "Withdrew at offer stage citing project commitments. Recruiter note: \"Re-engage in Q2 2026.\"",
    },
  },
  {
    id: "hiroshi-tanaka",
    name: "Hiroshi Tanaka",
    initials: "HT",
    role: "Director of Logistics Operations",
    company: "NYK Line",
    location: "Tokyo · Willing to consider relocation",
    score: 4,
    fit: "good",
    internal: false,
    reasons: [
      "15 years at NYK on container and dry bulk operations",
      "Led the digital transformation of NYK's Yokohama hub",
      "Strong process and quality background",
    ],
    signals: ["Yokohama hub lead"],
  },
  {
    id: "sarah-obrien",
    name: "Sarah O'Brien",
    initials: "SO",
    role: "Senior Manager, Global Operations",
    company: "DSV",
    location: "Copenhagen · Open to Marseille",
    score: 4,
    fit: "good",
    internal: false,
    reasons: [
      "9 years at DSV across freight forwarding and contract logistics",
      "Built the APAC-Europe air-sea conversion playbook",
      "English/French bilingual, manages cross-cultural teams",
    ],
    signals: ["Open to relocate"],
  },
  {
    id: "karim-belkacem",
    name: "Karim Belkacem",
    initials: "KB",
    role: "Trade Manager, North Africa",
    company: "Bolloré Logistics",
    location: "Algiers",
    score: 3,
    fit: "worth-exploring",
    internal: true,
    reasons: [
      "8 years at Bolloré Logistics on North Africa trade lanes",
      "Completed APAC rotation in 2025, closes the previous APAC gap",
      "Less senior than the bar, trajectory is sharp",
    ],
    signals: ["2025 APAC rotation", "Stretch candidate"],
    atsHistory: {
      appliedDate: "8 months ago",
      appliedRole: "Senior Trade Manager, APAC",
      outcome: "Rejected (no APAC experience)",
      notes:
        "Rejection reason no longer applies: completed a 6-month APAC rotation since. Worth a second look.",
    },
  },
  {
    id: "lea-fournier",
    name: "Léa Fournier",
    initials: "LF",
    role: "Senior Analyst, S&OP",
    company: "Kuehne+Nagel",
    location: "Marseille",
    score: 3,
    fit: "worth-exploring",
    internal: true,
    reasons: [
      "5 years at Kuehne+Nagel on S&OP and trade analytics",
      "Mandarin C1 per LinkedIn skills, rare in the pool",
      "Stretch role at senior manager level, would need a sponsor",
    ],
    signals: ["Mandarin C1", "High-potential"],
    atsHistory: {
      appliedDate: "10 months ago",
      appliedRole: "Manager, APAC S&OP",
      outcome: "Strong fit, no role at the time",
      notes:
        "Sourced via a previous APAC search, panel rated 4.0/5 but role closed before we could move. Recruiter note: \"Re-engage when an APAC analyst-to-manager seat opens.\"",
    },
  },
];

export const candidates: Candidate[] = RAW_CANDIDATES.map((c) => ({
  ...c,
  photo: photoUrl(c.id),
  status: statusFor(c.id),
}));

export const counts = {
  total: candidates.length,
  strong: candidates.filter((c) => c.fit === "strong").length,
  good: candidates.filter((c) => c.fit === "good").length,
  worthExploring: candidates.filter((c) => c.fit === "worth-exploring").length,
  internal: candidates.filter((c) => c.internal).length,
  external: candidates.filter((c) => !c.internal).length,
};

export const topPicks = candidates.filter((c) => c.topPick).slice(0, 5);
