export const contact = {
  name: "Kaveri Singh",
  role: "Backend Engineer",
  phone: "+91 78380 52426",
  email: "kaveri2308@gmail.com",
  github: "https://github.com/kaveri-singh",
  linkedin: "https://www.linkedin.com/in/kaverisingh23/",
  resumeHref: "/Kaveri_Singh_Resume.pdf",
};

export const about = {
  location: "Ghaziabad, Uttar Pradesh",
  status: "Final-year student, graduating 2026",
  bio: [
    "I'm a recent Computer Science graduate specialising in AI & Machine Learning at ABES Engineering College, but the projects I keep coming back to are backend ones — services with real users, real auth, and real data to protect.",
    "I like backend work because the constraints are honest: a request either has permission or it doesn't, a field either validates or it doesn't. That clarity is what pulled me toward Spring Boot, layered architecture, and getting authentication right before anything else.",
  ],
  facts: [
    { label: "based in", value: "Ghaziabad, India" },
    { label: "focus", value: "Java · Spring Boot · MongoDB" },
    { label: "graduating", value: "2026" },
    { label: "shipped", value: "3 backend services" },
  ],
};

export const summary =
  "I build secure, scalable REST APIs on the JVM. My recent work covers Spring Boot services with layered architecture, Spring Security authentication and RBAC, MongoDB persistence, and async processing with CompletableFuture — three backend systems built end to end, from data model to auth to API contract.";

export const skillGroups = [
  {
    label: "languages",
    layer: "01",
    items: ["Java", "Python", "SQL"],
  },
  {
    label: "frameworks",
    layer: "02",
    items: ["Spring Boot", "Spring Security", "Spring Data MongoDB", "Maven"],
  },
  {
    label: "persistence",
    layer: "03",
    items: ["MongoDB", "SQL", "Repository Pattern"],
  },
  {
    label: "core concepts",
    layer: "04",
    items: [
      "REST API Design",
      "CRUD Operations",
      "Layered Architecture",
      "Authentication & Authorization",
      "RBAC",
      "CompletableFuture / Async",
      "Exception Handling",
    ],
  },
  {
    label: "tooling",
    layer: "05",
    items: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"],
  },
];

export type Project = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  route: string;
  status: number;
  name: string;
  date: string;
  description: string;
  points: string[];
  stack: string[];
  github: string;
  live: string;
};

export const projects: Project[] = [
  {
    method: "GET",
    route: "/api/org/access-report",
    status: 200,
    name: "GitHub Repository Access Report API",
    date: "Mar 2026",
    description:
      "A Spring Boot service that talks to the GitHub REST API and generates organization-wide access reports, mapping every user to the repositories they can reach.",
    points: [
      "Parallelised calls across repositories with CompletableFuture, cutting report generation time significantly",
      "Layered Controller → Service → Client → DTO design with fault-tolerant handling for restricted repos",
    ],
    stack: ["Java", "Spring Boot", "GitHub REST API", "CompletableFuture", "Maven"],
    github: "https://github.com/kaveri-singh/Github-Repository-Access-Report",
    live: "https://github-repository-access-report.onrender.com",
  },
  {
    method: "POST",
    route: "/api/tasks",
    status: 201,
    name: "Task Management API",
    date: "Jan 2026",
    description:
      "A RESTful backend for creating, updating, and tracking tasks with due dates and status, scoped so each user only ever sees their own work.",
    points: [
      "Role-based access control via Spring Security so users can only manage their own tasks",
      "User and Task entities modeled in MongoDB with full CRUD through Spring Data MongoDB",
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "MongoDB", "Spring Data MongoDB"],
    github: "https://github.com/kaveri-singh/Task-Management-App",
    live: "https://task-management-app-wlmt.onrender.com",
  },
  {
    method: "POST",
    route: "/api/journal/entries",
    status: 200,
    name: "Journal API",
    date: "Jun 2025",
    description:
      "A private journaling service where every entry is strictly isolated to the user who wrote it, with session-based auth guarding every route.",
    points: [
      "Spring Security handles registration, login, and session auth end to end",
      "Four-layer design — Controller → Service → Repository → Security — keeps business logic and data access cleanly separated",
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "MongoDB", "Maven"],
    github: "https://github.com/kaveri-singh/Journal-Application/tree/main/JournalApp",
    live: "https://journal-application-6v3f.onrender.com",
  },
];

export const education = [
  {
    school: "ABES Engineering College (AKTU)",
    location: "Ghaziabad, UP",
    credential: "B.Tech. in Computer Science — AI & Machine Learning",
    detail: "CGPA 8.12",
    period: "2022 – 2026",
  },
  {
    school: "Dehradun Public School (CBSE)",
    location: "Ghaziabad, UP",
    credential: "Senior Secondary (Class XII)",
    detail: "81.2%",
    period: "2022",
  },
  {
    school: "Dehradun Public School (CBSE)",
    location: "Ghaziabad, UP",
    credential: "Secondary (Class X)",
    detail: "82.2%",
    period: "2020",
  },
];

export const certifications = [
  {
    name: "Techno-Entrepreneurship Program",
    issuer: "IHFC, IIT Delhi & Jet Aerospace, IIT Delhi Sonipat Campus",
  },
  {
    name: "Python for Data Science, AI and Development",
    issuer: "IBM, via Coursera",
  },
  {
    name: "Intermediate Level Problem Solving",
    issuer: "HackerRank",
  },
  {
    name: "Basic Level Problem Solving",
    issuer: "HackerRank",
  },
];
