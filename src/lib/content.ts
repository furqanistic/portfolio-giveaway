// ───────────────────────────────────────────────────────────────
// Single content source — all data drawn from Abdullah Shahid's
// resume. No invented metrics, testimonials, or projects.
// ───────────────────────────────────────────────────────────────

export const person = {
  name: "Abdullah Shahid",
  initials: "AS",
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
    "I design and maintain production Laravel systems — APIs, authentication, payments, data stores, search, caching, queues, and integrations — engineered to stay safe to change as products evolve.",
  intro: [
    "I build the parts of a product that have to stay correct under load: request handling, business behavior, and the boundaries where third-party services meet your own code.",
    "My work is pragmatic. I care about failure paths, explicit permissions, queries that scale, and code that the next engineer can reason about without fear.",
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
      "A live marketplace with catalog, ordering, identity, search, payments, and a growing web of third-party integrations — where backend areas had become hard to change without risk.",
    built:
      "Connected catalog, ordering, administration, identity, search, payment, caching, and asynchronous workflows, maintained under continuous delivery.",
    role: "Owned REST APIs and backend modules end-to-end across the product surface.",
    tech: ["Laravel", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Stripe", "PayPal"],
    challenge:
      "Untangling request handling, business behavior, and third-party concerns so each could evolve independently — without a risky rewrite.",
    result:
      "Clearer service and module boundaries, refined data paths, explicit failure handling, and production code that became easier to reason about and safer to extend.",
  },
  {
    id: "consultation-platform",
    index: "02",
    name: "Doctor Appointment & Consultation Platform",
    category: "Healthcare scheduling system",
    problem:
      "Connecting patients and doctors through scheduling, role-based access, secure records, and video consultation — where ambiguous state transitions had made the client-side experience unpredictable.",
    built:
      "APIs and backend modules for scheduling, doctor and patient roles, consultation states, secure records, permissions, and video-call integration.",
    role: "Built the backend contract and workflow logic consumed by the client team.",
    tech: ["Laravel", "MySQL", "RBAC", "Zoom API"],
    challenge:
      "Making consultation state transitions and access rules explicit so the client could trust the workflow.",
    result:
      "Predictable, permission-aware workflows with clear state transitions, giving the client team a reliable contract to build against.",
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
      "Building and maintaining Laravel applications where the structure has to survive real delivery pressure.",
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
      "Designing schemas and refining the real data paths products depend on — queries, indexes, cache, and search.",
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
      "Authentication and authorization that stay correct as roles and surfaces multiply.",
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
      "Background work, retries, and explicit failure paths so operational workflows don't fail silently.",
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
      "Connecting payment providers and third-party services with explicit, observable boundaries.",
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
      "Shipping safely and often through version control, CI/CD, and containerization.",
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
      "Own REST APIs and backend modules for catalog, orders, authentication, administration, search, payments, and external integrations.",
      "Design clearer service and module boundaries so request handling, business behavior, and third-party concerns can evolve independently.",
      "Work across MySQL, MongoDB, Redis, and Elasticsearch — improving real product paths through query, index, cache, and search refinement.",
      "Implement role-based access, two-factor authentication, queued work, retries, and explicit failure handling for operational workflows.",
      "Diagnose production behavior and simplify backend areas that became difficult to change safely during ongoing delivery.",
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
    body: "Start with the real production pressure — what breaks, what's slow, what's risky to change. Map the actual workflows before touching code.",
  },
  {
    no: "02",
    title: "Define the product",
    body: "Agree on the contract: API shape, roles, permissions, and the states that matter. Make the boundaries explicit so behavior is predictable.",
  },
  {
    no: "03",
    title: "Design the data & API",
    body: "Schema, indexes, queries, cache, and search — designed around the paths the product actually exercises, not theoretical ones.",
  },
  {
    no: "04",
    title: "Build the system",
    body: "Implement modules with clean service boundaries, separating request handling, business behavior, and third-party concerns.",
  },
  {
    no: "05",
    title: "Test & harden",
    body: "Exercise the failure paths — retries, queues, auth edge cases. Make sure work doesn't fail silently in production.",
  },
  {
    no: "06",
    title: "Launch & improve",
    body: "Ship through CI/CD, watch production behavior, and simplify the areas that get hard to change over time.",
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
