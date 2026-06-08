export const personal = {
  name: "Siddharth Sharma",
  title: "Senior Software Engineer",
  tagline: "5+ years building distributed systems, cloud-native platforms, and AI-powered APIs. Python/Django · PostgreSQL · AWS · LLMs.",
  location: "San Jose, CA",
  email: "siddharth2503s@gmail.com",
  phone: "(945) 233-2085",
  linkedin: "https://linkedin.com/in/siddharth2503s",
  github: "https://github.com/siddharth-01",
  summary:
    "Senior Backend Engineer with 5+ years of experience designing distributed microservices, ERP data platforms, and cloud-native systems. Specialized in Python/Django, PostgreSQL schema design, event-driven architectures, and containerized deployments on AWS. Proven track record of improving performance, reliability, and operational efficiency across high-throughput transactional systems.",
};

export const experience = [
  {
    title: "Senior Software Engineer",
    company: "Interco",
    location: "Remote, US",
    period: "Jan 2025 – Present",
    bullets: [
      "Architected end-to-end SDLC solutions for SOA microservices using Python/Django and PostgreSQL, supporting thousands of asset lifecycle transactions weekly across receiving, processing, and transfer workflows.",
      "Implemented event-driven service communication using async request handling and idempotent processing patterns, improving workflow throughput and reducing processing bottlenecks across asset tracking operations.",
      "Developed a multi-agent backend architecture using LangGraph, including caching layers, retry logic, schema stores, orchestration, and pytest-based automated tests.",
      "Engineered a schema-aware Text-to-SQL agent using LLMs, SQLGlot, automated validation, and retries, enabling accurate SQL generation and execution on large multi-table Postgres datasets.",
      "Implemented prompt engineering strategies including structured prompts, domain context injection, and output validation to improve reliability of AI-generated procurement recommendations.",
      "Built REST APIs for lane cost modeling, carrier performance scoring, and recommendation workflows supporting procurement decision-making.",
      "Implemented application performance monitoring using metrics, traces, and structured logs to track API latency, error rates, and service health across microservices.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Interco",
    location: "Remote, US",
    period: "Oct 2023 – Jan 2025",
    bullets: [
      "Developed RESTful APIs for warehouse asset lifecycle management and tracking, supporting 5,000+ asset transactions weekly.",
      "Integrated backend services with internal ERP systems and Android-based scanning applications, improving real-time inventory accuracy by 30% and reducing human errors by 50%.",
      "Designed ACID-compliant relational data models ensuring consistency under concurrent operational workloads.",
      "Built ETL pipelines and backend automation frameworks that reduced manual warehouse operations by 50%.",
      "Containerized services using Docker and implemented CI/CD pipelines with GitHub Actions, reducing deployment time by 50% and increasing release consistency.",
      "Configured monitoring dashboards and alerting rules to detect anomalies in API performance and system health, reducing incident response time.",
    ],
  },
  {
    title: "Software Engineer",
    company: "HighRadius",
    location: "Hyderabad, India",
    period: "Jan 2019 – Aug 2021",
    bullets: [
      "Developed enterprise microservices using Python and Django, improving payment processing efficiency by 25%.",
      "Analyzed slow queries, introduced composite indexes and query refactoring, improving average query execution time by 40%.",
      "Leveraged version-controlled database schema migrations to apply incremental schema updates, index changes, and table modifications across development and production environments.",
      "Implemented secure REST APIs with JWT authentication and Hibernate ORM optimizations to support distributed financial services.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "California State University Long Beach",
    location: "Long Beach, CA",
    period: "Aug 2021 – May 2023",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    period: "Jul 2015 – May 2019",
  },
];

export const skills = {
  "Languages & Backend": [
    "Python", "Django", "Spring Boot", "JavaScript", "SQL", "C++",
    "RESTful APIs", "Microservices", "Event-Driven Architecture",
  ],
  "AI & Data": [
    "LangGraph", "LLM Integration", "SQLGlot", "Kafka", "ETL Pipelines",
    "OpenAI", "Text-to-SQL",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  "Cloud & DevOps": [
    "AWS (EC2, S3, Lambda)", "Docker", "Kubernetes",
    "GitHub Actions", "Jenkins", "CI/CD", "Linux",
  ],
  "Observability & Tools": [
    "Structured Logging", "Metrics", "Monitoring", "Alerting",
    "Incident Response", "RCA", "Postman", "JIRA", "Git",
  ],
  "Testing": ["Pytest", "Unit Testing", "Integration Testing"],
};

export const projects = [
  {
    name: "Lane Procurement AI Agent",
    tech: ["Python", "Django", "Pandas", "OpenAI", "Claude", "PostgreSQL"],
    description:
      "AI-powered logistics procurement assistant that analyzes historical freight data to generate 12-week lane cost forecasts and carrier recommendations.",
    bullets: [
      "Built REST APIs using Django to expose lane analytics, cost modeling, and carrier scoring services for supply chain decision-making.",
      "Integrated LLM-based natural language querying using OpenAI, enabling operations teams to retrieve freight insights through conversational queries.",
      "Implemented prompt engineering strategies with structured prompts, domain context injection, and output validation.",
    ],
    github: null,
  },
];
