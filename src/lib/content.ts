// ───────────────────────────────────────────────────────────────
// Single content source for the giveaway recipient's portfolio.
// No invented metrics, testimonials, or projects.
// ───────────────────────────────────────────────────────────────

export const person = {
  name: "Portfolio Giveaway",
  initials: "PG",
  role: "Backend Software Engineer",
  shortRole: "Backend Engineer",
  location: "Faisalabad, Pakistan",
  email: "abdullahbinshahid287@gmail.com",
  yearsExperience: "4+",
  status: "Available for focused collaborations",
  social: {
    linkedin: "https://www.linkedin.com/in/abdullahshd/",
    github: "https://github.com/mabdshd",
  },
  positioning:
    "I build reliable Laravel backends that stay easy to change.",
  intro: [
    "I build backend systems that stay correct under load.",
    "I focus on clear permissions, scalable queries, and maintainable code.",
  ],
} as const

export const heroStats = [
  { value: "4+", label: "Years in production Laravel" },
  { value: "5", label: "Domains shipped — commerce to healthcare" },
  { value: "End-to-end", label: "Ownership of backend modules" },
] as const

export const heroCapabilities = [
  {
    label: "Data layer",
    value: "MySQL · MongoDB · Redis · Elasticsearch",
  },
  {
    label: "Secure systems",
    value: "OAuth 2.0 · JWT · Sanctum · RBAC · 2FA",
  },
  {
    label: "Reliable delivery",
    value: "Queues · retries · CI/CD · Docker",
  },
] as const

export const productionDomains = [
  "COMMERCE",
  "MARKETPLACES",
  "HEALTHCARE",
  "FITNESS",
] as const

// ── Selected work ──────────────────────────────────────────────
export type Project = {
  id: string
  index: string
  name: string
  category: string
  problem: string
  built: string
  role: string
  tech: string[]
  challenge: string
  result: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "marketplace-backend",
    index: "01",
    name: "Marketplace & E-commerce Backend",
    category: "Production commerce platform",
    featured: true,
    problem:
      "A growing marketplace backend had become risky to change.",
    built:
      "Built catalog, orders, identity, search, payments, caching, and queues.",
    role: "Owned REST APIs and backend modules end-to-end.",
    tech: ["Laravel", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Stripe", "PayPal"],
    challenge:
      "Separated core logic from requests and third-party services.",
    result:
      "Cleaner boundaries, faster data paths, and safer releases.",
  },
  {
    id: "consultation-platform",
    index: "02",
    name: "Doctor Appointment & Consultation Platform",
    category: "Healthcare scheduling system",
    problem:
      "Unclear consultation states made the client experience unpredictable.",
    built:
      "Built scheduling, roles, records, permissions, and video-call APIs.",
    role: "Defined the API contract and workflow logic.",
    tech: ["Laravel", "MySQL", "RBAC", "Zoom API"],
    challenge:
      "Made states and access rules explicit.",
    result:
      "Predictable workflows and a reliable client contract.",
  },
]

// ── Capabilities ───────────────────────────────────────────────
export type Capability = {
  id: string
  title: string
  summary: string
  builds: string[]
  tech: string[]
  example: string
  ownership: string
}

export const capabilities: Capability[] = [
  {
    id: "laravel",
    title: "Laravel Engineering",
    summary:
      "Laravel applications built for real delivery pressure.",
    builds: [
      "REST APIs and backend modules",
      "Service and module boundaries",
      "Validation, OOP, MVC, SOLID",
    ],
    tech: ["PHP", "Laravel", "REST", "OOP", "MVC", "SOLID"],
    example: "Marketplace & e-commerce backend",
    ownership: "Owns backend modules end-to-end",
  },
  {
    id: "data-search",
    title: "Data & Search",
    summary:
      "Fast, dependable schemas, queries, cache, and search.",
    builds: [
      "Schema design and migrations",
      "Query and index refinement",
      "Full-text and faceted search",
    ],
    tech: ["MySQL", "MongoDB", "Redis", "Elasticsearch"],
    example: "Catalog, ordering, and search at scale",
    ownership: "Improves production data paths directly",
  },
  {
    id: "security",
    title: "Security & Access",
    summary:
      "Authentication and access rules that scale with the product.",
    builds: [
      "OAuth 2.0, JWT, Sanctum, Passport",
      "Role-based access control",
      "Two-factor authentication",
    ],
    tech: ["OAuth 2.0", "JWT", "Sanctum", "Passport", "RBAC", "2FA"],
    example: "Healthcare records & permissions",
    ownership: "Defines access rules and auth flows",
  },
  {
    id: "async",
    title: "Async & Reliability",
    summary:
      "Queues, retries, and visible failure handling.",
    builds: [
      "Queued and background processing",
      "Retries and failure handling",
      "Caching and production debugging",
    ],
    tech: ["Queues", "Redis", "Cache", "Retries"],
    example: "Payments & integration workflows",
    ownership: "Owns failure paths, not just happy paths",
  },
  {
    id: "integrations",
    title: "Integrations & Payments",
    summary:
      "Clean integrations for payments and third-party services.",
    builds: [
      "Payments: Stripe, PayPal, Hyperwallet",
      "Communication: Zoom, Twilio, Pusher",
      "Third-party API adapters",
    ],
    tech: ["Stripe", "PayPal", "Hyperwallet", "Zoom", "Twilio", "Pusher"],
    example: "Marketplace payment & notification flows",
    ownership: "Isolates third-party concerns cleanly",
  },
  {
    id: "delivery",
    title: "Delivery & Infrastructure",
    summary:
      "Safe, frequent delivery with CI/CD and containers.",
    builds: [
      "Git and Git Flow workflows",
      "CI/CD pipelines",
      "Docker-based environments",
    ],
    tech: ["Git", "Git Flow", "Docker", "GitHub Actions", "GitLab CI/CD"],
    example: "Continuous delivery under live traffic",
    ownership: "Agile, collaborative delivery",
  },
]

// ── Experience ─────────────────────────────────────────────────
export type Role = {
  company: string
  position: string
  start: string
  end: string | null
  period: string
  location: string
  overview: string
  responsibilities: string[]
  tech: string[]
}

export const experience: Role[] = [
  {
    company: "Inspire Uplift",
    position: "Laravel Backend Developer",
    start: "2023-02",
    end: null,
    period: "Feb 2023 — Present",
    location: "Production commerce · Marketplace",
    overview:
      "Production e-commerce and marketplace systems with connected data, search, payment, identity, and integration workflows.",
    responsibilities: [
      "Own APIs for catalog, orders, auth, search, payments, and integrations.",
      "Create clear service and module boundaries.",
      "Improve queries, indexes, caching, and search.",
      "Build RBAC, 2FA, queues, retries, and failure handling.",
    ],
    tech: ["Laravel", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Stripe", "PayPal"],
  },
  {
    company: "EWDTech",
    position: "Laravel Developer",
    start: "2022-11",
    end: "2022-12",
    period: "Nov 2022 — Dec 2022",
    location: "E-commerce · Inventory · POS",
    overview:
      "Delivered Laravel features across e-commerce, inventory, and point-of-sale workflows.",
    responsibilities: [
      "Built Laravel features spanning e-commerce, inventory, and point-of-sale.",
      "Collaborated with frontend developers on APIs and data contracts.",
    ],
    tech: ["Laravel", "REST APIs"],
  },
  {
    company: "SJ Empowers (Pvt) Ltd",
    position: "Junior Laravel Developer",
    start: "2022-07",
    end: "2022-09",
    period: "Jul 2022 — Sep 2022",
    location: "Fitness · Mobile",
    overview:
      "Backend features and REST APIs for a fitness mobile application.",
    responsibilities: [
      "Built backend features and REST APIs for a fitness mobile application.",
      "Implemented personalized plans and progress-tracking workflows.",
    ],
    tech: ["Laravel", "REST APIs"],
  },
  {
    company: "360Brains",
    position: "Laravel Developer Intern",
    start: "2021-08",
    end: "2021-10",
    period: "Aug 2021 — Oct 2021",
    location: "Foundations",
    overview:
      "Developed practical foundations in PHP, Laravel, and backend engineering.",
    responsibilities: [
      "Built foundations in PHP, Laravel, and the Eloquent ORM.",
      "Practiced MVC, database schemas, and migrations.",
    ],
    tech: ["PHP", "Laravel", "Eloquent", "MVC"],
  },
]

// ── Process ────────────────────────────────────────────────────
export const processSteps = [
  {
    no: "01",
    title: "Understand the problem",
    body: "Find what's broken, slow, or risky. Map the workflow first.",
  },
  {
    no: "02",
    title: "Define the product",
    body: "Agree on APIs, roles, permissions, and key states.",
  },
  {
    no: "03",
    title: "Design the data & API",
    body: "Design data and APIs around real product usage.",
  },
  {
    no: "04",
    title: "Build the system",
    body: "Build focused modules with clean boundaries.",
  },
  {
    no: "05",
    title: "Test & harden",
    body: "Test retries, queues, auth, and failure paths.",
  },
  {
    no: "06",
    title: "Launch & improve",
    body: "Ship, monitor, and improve what matters.",
  },
] as const

// ── Experiments / additional work ──────────────────────────────
export const experiments = [
  {
    name: "Gym Journey",
    kind: "Fitness backend",
    body: "REST APIs for personalized fitness plans, progress tracking, and mobile workflows.",
    tech: ["Laravel", "REST APIs", "Mobile"],
  },
  {
    name: "Fertilizing & Seeding Helper",
    kind: "Planning backend",
    body: "Backend workflows translating crop and soil inputs into actionable planning guidance.",
    tech: ["Laravel", "Workflows"],
  },
] as const

// ── Education ──────────────────────────────────────────────────
export const education = [
  {
    degree: "M.S. Computer Science",
    school: "National Textile University, Faisalabad",
    period: "2024 — 2026 (expected)",
  },
  {
    degree: "B.S. Computer Science",
    school: "University of Engineering & Technology, Lahore",
    period: "2018 — 2022",
  },
] as const

// ── Proof strip ────────────────────────────────────────────────
export const proof = [
  {
    label: "Domains shipped",
    value: "Commerce · Marketplaces · Healthcare · Fitness",
  },
  {
    label: "Auth & security breadth",
    value: "OAuth 2.0 · JWT · Sanctum · Passport · RBAC · 2FA",
  },
  {
    label: "Integrations wired",
    value: "Stripe · PayPal · Hyperwallet · Zoom · Twilio · Pusher",
  },
  {
    label: "Education",
    value: "M.S. CS (in progress) · B.S. CS, UET Lahore",
  },
] as const

// ── Contact ────────────────────────────────────────────────────
export const projectTypes = [
  "Backend system / API",
  "Marketplace or e-commerce",
  "Healthcare platform",
  "Integration work",
  "Maintenance & refactor",
] as const

export const budgetRanges = [
  "Under $2k",
  "$2k — $5k",
  "$5k — $15k",
  "$15k+",
  "Let's discuss",
] as const
