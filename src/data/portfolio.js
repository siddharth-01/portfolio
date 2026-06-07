export const personal = {
  name: "Siddharth Sharma",
  title: "Senior Backend Engineer",
  tagline: "Building distributed systems, APIs, and cloud-native platforms",
  location: "Los Angeles, CA (Open to relocate)",
  email: "siddharth2503s@gmail.com",
  phone: "(945) 233-2085",
  linkedin: "https://linkedin.com/in/siddharth2503s",
  github: "https://github.com/siddharth2503s",
  summary:
    "Senior Backend Engineer with 5+ years of experience designing distributed microservices, ERP data platforms, and cloud-native systems. Specialized in Python/FastAPI, PostgreSQL schema design, event-driven architectures, and containerized deployments on AWS.",
};

export const experience = [
  {
    title: "Senior Software Engineer",
    company: "Interco",
    location: "St. Louis, MO",
    period: "Jan 2025 – Present",
    bullets: [
      "Architected a scalable Cloud Native Development platform on AWS using micro-service architecture and containerization, reducing operational costs by 20%.",
      "Designed an automated detection algorithm system utilizing SAR/RADAR imaging technologies, improving detection accuracy by 15% and reducing manual review efforts by 30%.",
      "Spearheaded integration of complex geospatial COTS software with custom services using OpenGeospatial Consortium standards, establishing high-performance data pipelines for NITF and GeoPDF formats.",
      "Drove evolution of PostGRES/PostGIS databases for high-volume spatial queries, optimizing query performance by 25% through advanced indexing and orchestration of data ingestion processes.",
      "Mentored junior engineers and facilitated cross-functional collaboration with data scientists to translate analytical requirements into production-ready geospatial solutions.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Interco",
    location: "St. Louis, MO",
    period: "Oct 2023 – Jan 2025",
    bullets: [
      "Developed a Python microservice for processing and validating KML/KMZ geospatial datasets, improving data ingestion reliability by 25%.",
      "Optimized Java Web Services architecture endpoints for real-time geospatial queries, achieving a 10% reduction in average response time.",
      "Implemented and maintained ArcGIS Server applications with custom extensions for specialized spatial analysis functions.",
      "Designed and managed File Geodatabases for efficient storage and retrieval of proprietary geospatial data.",
      "Contributed to the full lifecycle development within an Agile team, collaborating with product owners to refine requirements for new API features.",
    ],
  },
  {
    title: "Software Engineer",
    company: "HighRadius",
    location: "Hyderabad, India",
    period: "Jan 2019 – Aug 2021",
    bullets: [
      "Developed and deployed key components of a financial automation platform using Java and micro-service architecture on AWS, enhancing processing efficiency by 18%.",
      "Designed and optimized relational database schemas for high-volume transaction data, improving data retrieval speeds by 15%.",
      "Implemented robust API gateways for secure third-party integrations using Python and JavaScript with containerization.",
      "Contributed to migration of legacy services to a Cloud Native environment on AWS, reducing infrastructure overhead by 10%.",
      "Partnered with cross-functional product and operations teams to gather requirements and deliver critical backend services.",
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
  "Web Technologies": [
    "Python", "FastAPI", "Django", "JavaScript", "SQL", "C++",
    "Spring Boot", "RESTful APIs", "Microservices", "Event-Driven Architecture",
    "LangGraph", "LLM Integration", "SQLGlot",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  Cloud: ["AWS EC2", "S3", "Lambda", "RDS", "CloudWatch", "API Gateway"],
  "DevOps & Tools": [
    "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Git",
    "Maven", "Gradle", "Postman", "JIRA", "Linux",
  ],
  "Testing & Automation": ["Pytest", "Postman", "Unit Testing"],
  "Concepts & Practices": [
    "Kafka", "ETL Pipelines", "CI/CD", "OOP", "Design Patterns",
    "Distributed Systems", "Structured Logging", "Observability",
    "Incident Response", "RCA",
  ],
};

export const projects = [
  {
    name: "Lane Procurement AI Agent",
    tech: ["Python", "FastAPI", "Pandas", "OpenAI", "Claude", "PostgreSQL"],
    description:
      "AI-powered logistics procurement assistant that analyzes historical freight data to generate 12-week lane cost forecasts and carrier recommendations.",
    bullets: [
      "Built REST APIs using FastAPI to expose lane analytics, cost modeling, and carrier scoring services for supply chain decision-making.",
      "Integrated LLM-based natural language querying using OpenAI, enabling operations teams to retrieve freight insights through conversational queries.",
    ],
    github: null,
  },
];
