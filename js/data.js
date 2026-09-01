/**
 * Portfolio Data Store - Roshan (Full-Stack Software Engineer & AI Systems Architect)
 * Modern, High-Converting Personal Portfolio, Interactive CV & Showcase
 */

const portfolioData = {
  personalInfo: {
    name: "Roshan",
    fullName: "Roshan Nishad",
    role: "Full-Stack Software Engineer & AI Systems Architect",
    shortTagline: "Architecting high-throughput distributed systems & production GenAI pipelines.",
    location: "Bangalore, India • Available Globally (Remote / Relocation)",
    status: "Available for Full-time Roles & High-Impact Consulting",
    statusBadge: "Open to High-Impact Opportunities",
    yearsExperience: "4+ Years",
    projectsCompleted: "25+ Deployed",
    summary: "High-impact Software Engineer with 4+ years of expertise in designing and scaling distributed systems, modern web architectures, and production-grade Generative AI pipelines. Proficient in TypeScript, React, Python, Go, Docker, Kubernetes, and Cloud-native backends. Proven track record of boosting system throughput by 3.4x, reducing latency by 45%, and architecting systems serving tens of thousands of active users.",
    socials: {
      github: "https://github.com/roshan-dev",
      linkedin: "https://linkedin.com/in/roshan-engineer",
      twitter: "https://x.com/roshan_tech",
      email: "roshan.engineer.dev@gmail.com",
      phone: "+91 98765 43210",
      calendar: "https://calendly.com",
      website: "https://roshan-portfolio.example.com"
    },
    heroStats: [
      { label: "Production Experience", value: "4+ Yrs", detail: "Full-Stack & Cloud Systems" },
      { label: "Peak Event Throughput", value: "85k/s", detail: "Sub-15ms p99 Latency" },
      { label: "LLM API Cost Reduction", value: "62%", detail: "Hybrid Semantic Caching" },
      { label: "Open Source Community", value: "1.4k★", detail: "Stars across OSS tools" }
    ]
  },

  projects: [
    {
      id: "omni-agent-ai",
      title: "OmniAgent: Autonomous Multi-Modal Reasoning Engine",
      tagline: "Multi-agent orchestration framework utilizing Gemini API with streaming sandbox code execution.",
      description: "Architected an autonomous agent system capable of task decomposition, tool invocation, web synthesis, and live Python code execution in isolated microVMs.",
      category: "ai",
      featured: true,
      impact: "⚡ 3.4x Faster Reasoning • 42% API Cost Reduction",
      tags: ["Gemini 2.0 API", "Python", "FastAPI", "React", "Docker", "LangGraph", "Redis"],
      liveUrl: "https://omniagent-demo.example.com",
      githubUrl: "https://github.com/roshan-dev/omni-agent-ai",
      caseStudy: {
        title: "OmniAgent: Engineering Production Multi-Agent Systems",
        subtitle: "How we decoupled planning from execution to build sub-second AI reasoning workflows",
        overview: "Built an enterprise-grade agentic workbench allowing software teams to automate complex data analysis, code refactoring, and multi-step investigation tasks with real-time sandbox execution.",
        problem: "Traditional monolithic prompts suffered from context degradation, token limits, high hallucination rates, and lack of real-time sandbox execution for complex numerical computations.",
        solution: "Implemented a stateful multi-agent DAG using LangGraph and Gemini API function calling, backed by a semantic Redis cache and ephemerally provisioned gVisor container runners for secure arbitrary Python code execution.",
        architectureNotes: [
          "Event-driven FastAPI gateway handling bidirectional WebSockets for low-latency streaming tokens.",
          "Hierarchical planner agent delegating subtasks to specialized code-runner, search-synth, and verification agents.",
          "Ephemerally provisioned gVisor container runners for secure isolated Python code execution.",
          "Vector embeddings stored in pgvector for semantic retrieval of past query solutions."
        ],
        keyChallenges: [
          "Preventing infinite looping in agent self-reflection cycles through strict bounded state machines.",
          "Sub-150ms token time-to-first-byte (TTFB) over multiplexed WebSocket connections.",
          "Guarding against prompt injections and malicious code execution via container isolation."
        ],
        metrics: [
          "Evaluated over 15,000 multi-step workflows with 96.8% task completion rate.",
          "Achieved 42% decrease in token consumption via aggressive semantic caching.",
          "Reduced mean time to resolve analytical queries from 18 minutes to 42 seconds."
        ]
      }
    },
    {
      id: "nexus-scale-engine",
      title: "NexusScale: Real-time Event Streaming & Ingestion Broker",
      tagline: "High-throughput telemetry ingestion engine processing 85k+ events/sec with sub-15ms p99 latency.",
      description: "Engineered a distributed publish-subscribe telemetry ingestion platform supporting dynamic partitioned worker pools, backpressure control, and real-time visualization dashboards.",
      category: "cloud",
      featured: true,
      impact: "🚀 85,000+ Events/sec • Sub-15ms p99 Latency • 99.99% Uptime",
      tags: ["Go (Golang)", "Kafka", "PostgreSQL", "TimescaleDB", "React", "Prometheus", "Kubernetes"],
      liveUrl: "https://nexus-scale.example.com",
      githubUrl: "https://github.com/roshan-dev/nexus-scale-engine",
      caseStudy: {
        title: "NexusScale: Scaling High-Throughput Event Brokers",
        subtitle: "Zero-allocation Go buffers and dynamic worker pooling for distributed telemetry",
        overview: "Designed a distributed event ingestion pipeline for IoT and telemetry devices needing sub-second processing and guaranteed at-least-once delivery.",
        problem: "Legacy ingestion servers faced thread starvation and unbounded memory spikes during sudden traffic spikes, resulting in dropped telemetry frames.",
        solution: "Re-architected the ingestion layer using non-blocking I/O workers in Go with dynamic token-bucket rate limiting and asynchronous partition writing to Kafka and TimescaleDB.",
        architectureNotes: [
          "Stateless Go ingestion edge pods autoscaled based on Kafka consumer lag metrics.",
          "Custom batch accumulator aggregating records within a 10ms sliding window to optimize disk write amplification.",
          "Real-time WebSocket client streaming filtered metrics to a responsive analytics canvas."
        ],
        keyChallenges: [
          "Eliminating GC pauses during peak ingestion bursts using zero-allocation byte buffer pooling (sync.Pool).",
          "Ensuring graceful shutdown without dropping in-flight event batches during rolling Kubernetes deployments."
        ],
        metrics: [
          "Sustained 85,000 events/second at less than 15ms p99 ingestion latency.",
          "Saved 60% compute infrastructure expenditure compared to previous microservice cluster.",
          "Maintained 99.99% system availability through automated circuit breakers."
        ]
      }
    },
    {
      id: "dev-pulse-collaborative",
      title: "DevPulse: Collaborative Code Review & Team Analytics",
      tagline: "Real-time collaborative code review workspace featuring CRDT-based synchronization and automated CI insights.",
      description: "Built a full-stack real-time collaboration platform enabling distributed development teams to review code snippets, annotate diffs simultaneously, and track sprint velocity.",
      category: "web",
      featured: true,
      impact: "📈 1,200+ Active Devs • 35% Faster Review Cycle",
      tags: ["React 18", "TypeScript", "Node.js", "WebSockets", "Tailwind CSS", "Yjs / CRDT", "MongoDB"],
      liveUrl: "https://devpulse-review.example.com",
      githubUrl: "https://github.com/roshan-dev/dev-pulse",
      caseStudy: {
        title: "DevPulse: Real-Time CRDT Code Collaboration",
        subtitle: "Conflict-free multi-user annotations and diff synchronization across engineering teams",
        overview: "Collaborative developer workspace bringing Google Docs-like synchronous editing and real-time diff annotation to code review pipelines.",
        problem: "Asynchronous code reviews across different timezones caused 3-5 day pull request bottlenecks and lost review momentum.",
        solution: "Developed an interactive review canvas utilizing Yjs CRDTs over WebSockets for conflict-free multi-user annotations and voice room presence.",
        architectureNotes: [
          "Custom Monaco Editor integration with conflict-free cursor presence and inline diff markers.",
          "Scalable Socket.IO cluster orchestrated via Redis pub/sub for room synchronization.",
          "OAuth2 integration with GitHub & GitLab for auto-syncing pull requests and commit statuses."
        ],
        keyChallenges: [
          "Resolving simultaneous concurrent diff selections without visual cursor jumping or state drift.",
          "Optimizing bundle size and first contentful paint (FCP) under 800ms on slower connections."
        ],
        metrics: [
          "Reduced average pull request review turnaround cycle by 35%.",
          "Adopted by 1,200+ active engineering users across 15 engineering organizations.",
          "Zero data corruption across 50,000+ simultaneous collaborative review sessions."
        ]
      }
    },
    {
      id: "fast-rag-vector-cache",
      title: "FastRAG: Production Hybrid Vector Search & Semantic Cache",
      tagline: "High-performance semantic retrieval service combining BM25 sparse ranking with dense HNSW vector search.",
      description: "A plug-and-play RAG middleware providing semantic caching, dynamic chunking, re-ranking with cross-encoders, and automated telemetry for LLM applications.",
      category: "ai",
      featured: false,
      impact: "💰 62% LLM Cost Reduction • 45ms P95 Cache Retrieval",
      tags: ["Python", "PyTorch", "Hugging Face", "Qdrant", "Redis", "FastAPI", "Docker"],
      liveUrl: "https://fastrag.example.com",
      githubUrl: "https://github.com/roshan-dev/fast-rag-vector-cache",
      caseStudy: {
        title: "FastRAG: Semantic Caching & Hybrid Retrieval",
        subtitle: "Evaluating cosine similarity thresholds to eliminate redundant enterprise LLM calls",
        overview: "Production semantic search and caching pipeline for LLM applications handling high enterprise knowledge base queries.",
        problem: "Direct LLM queries for repeated company FAQs incurred huge token costs and high response latency (1.5s - 3s).",
        solution: "Built a semantic cache proxy evaluating cosine similarity of incoming query embeddings against cached answer vectors, returning instant responses when similarity exceeds 0.94.",
        architectureNotes: [
          "FastAPI middleware acting as an intelligent reverse proxy for OpenAI / Gemini API calls.",
          "Hybrid retrieval combining dense vector similarity (Qdrant) with reciprocal rank fusion (BM25).",
          "Automated cache invalidation based on document versioning and TTL timestamps."
        ],
        keyChallenges: [
          "Tuning similarity thresholds to eliminate false cache hits on nuanced opposite queries.",
          "Keeping embedding generation overhead under 15ms using quantized ONNX runtime models."
        ],
        metrics: [
          "Cut monthly LLM API bills by 62% for production enterprise clients.",
          "Delivered cached answers in 45ms p95 latency compared to 1,800ms fresh model generations."
        ]
      }
    },
    {
      id: "cloud-guard-sentinel",
      title: "CloudGuard: Automated Cloud Vulnerability & Compliance Auditor",
      tagline: "Continuous compliance and infrastructure-as-code security scanner for Terraform and Kubernetes manifests.",
      description: "DevSecOps command-line tool and web UI that parses Terraform ASTs and container images to identify misconfigurations and enforce zero-trust security postures.",
      category: "cloud",
      featured: false,
      impact: "🛡️ 99.4% Vulnerability Detection • 500+ Repos Secured",
      tags: ["Go (Golang)", "Terraform AST", "Docker", "React", "PostgreSQL", "GitHub Actions"],
      liveUrl: "https://cloudguard.example.com",
      githubUrl: "https://github.com/roshan-dev/cloud-guard-sentinel",
      caseStudy: {
        title: "CloudGuard: Static AST Analysis for Cloud Infrastructure",
        subtitle: "Enforcing zero-trust and security guardrails before terraform apply",
        overview: "Automated scanner that intercepts infrastructure definitions at the PR stage to catch exposed ports, unencrypted storage buckets, and overly permissive IAM roles.",
        problem: "Misconfigured cloud assets caused accidental security exposures before deployment was finalized.",
        solution: "Constructed an AST visitor parser in Go that evaluates HCL blocks against CIS Benchmark security rules in under 2 seconds per repository.",
        architectureNotes: [
          "Modular rule engine allowing teams to write custom Rego/OPA policy checks.",
          "GitHub Action runner with pull request status check integration and visual diff badges.",
          "Centralized audit dashboard for security compliance officers."
        ],
        keyChallenges: [
          "Handling dynamic Terraform variables and local module references during static parsing.",
          "Maintaining sub-2s execution times on enterprise repos with 1,000+ HCL files."
        ],
        metrics: [
          "Over 500 infrastructure repos secured with 99.4% issue detection accuracy.",
          "Zero critical production cloud misconfigurations reported post-adoption."
        ]
      }
    },
    {
      id: "flow-craft-oss",
      title: "FlowCraft: Visual Workflow & Prompt Engineering Canvas",
      tagline: "Modern open-source visual node canvas for orchestrating LLM chains, APIs, and automated webhooks.",
      description: "An intuitive drag-and-drop workflow canvas allowing developers to visually construct multi-step AI agents, condition branches, and webhook listeners with live testing.",
      category: "opensource",
      featured: false,
      impact: "⭐ 1,450+ Stars • 35+ Community PRs Merged",
      tags: ["TypeScript", "React", "ReactFlow", "Tailwind CSS", "Zustand", "Vite"],
      liveUrl: "https://flowcraft-oss.example.com",
      githubUrl: "https://github.com/roshan-dev/flow-craft",
      caseStudy: {
        title: "FlowCraft: The Open-Source LLM Workflow Engine",
        subtitle: "Visual orchestration for prompt engineers, researchers, and backend developers",
        overview: "Open-source developer platform enabling visual construction and inspection of complex LLM execution graphs.",
        problem: "Debugging non-linear agent chains via CLI logs was tedious and lacked visibility into token payloads at intermediate steps.",
        solution: "Built a high-performance ReactFlow canvas with customizable node inspectors, dynamic input/output slots, and instant execution replay.",
        architectureNotes: [
          "Zustand state engine with undo/redo history and JSON serialization for workflow exports.",
          "WASM-based local expression evaluator for branch conditions.",
          "Plug-in system for custom third-party tool blocks."
        ],
        keyChallenges: [
          "Preventing canvas stutter on graphs containing over 200 interconnected nodes.",
          "Standardizing typed interfaces across disparate LLM API providers."
        ],
        metrics: [
          "Over 1,450 GitHub stars and 200+ forks across the global AI developer community.",
          "35+ external open-source contributors with active releases."
        ]
      }
    }
  ],

  experience: [
    {
      id: "exp-1",
      type: "work",
      role: "Senior Full-Stack & AI Systems Engineer",
      organization: "CognitiveScale Tech Labs",
      location: "Bangalore, India (Hybrid)",
      period: "2023 — Present",
      isCurrent: true,
      summary: "Leading the core platform engineering team building enterprise GenAI workflow orchestration, distributed caching systems, and high-performance microservices.",
      impact: "⚡ 55% reduction in query resolution time • 40% database load reduction",
      accomplishments: [
        "Spearheaded the design and deployment of an internal multi-agent LLM reasoning pipeline processing 250k+ daily queries, reducing manual customer resolution time by 55%.",
        "Architected a resilient distributed caching layer using Redis and Kafka, decreasing database read pressure by 40% and cutting p99 query latency from 140ms to 28ms.",
        "Mentored a team of 6 software engineers across React, TypeScript, and Python best practices, establishing automated CI/CD pipelines with 90%+ code coverage.",
        "Delivered real-time telemetry monitoring dashboards using Prometheus, Grafana, and React that improved mean time to detect (MTTD) system anomalies by 60%."
      ],
      technologies: ["TypeScript", "React", "Python", "FastAPI", "Gemini API", "Docker", "Kubernetes", "Redis", "Kafka", "PostgreSQL"]
    },
    {
      id: "exp-2",
      type: "work",
      role: "Software Development Engineer (Full Stack)",
      organization: "AeroByte Distributed Systems",
      location: "Bangalore, India",
      period: "2021 — 2023",
      isCurrent: false,
      summary: "Built scalable web interfaces, RESTful microservices, and asynchronous event workers powering mission-critical supply-chain logistics software.",
      impact: "🚀 Handled 40k+ daily operators • 3x query performance boost",
      accomplishments: [
        "Engineered responsive React/Redux single-page applications accessed by 40,000+ daily logistics operators, achieving 99.8% crash-free sessions.",
        "Migrated monolithic Node.js backend into modular containerized microservices running on AWS EKS, improving deployment agility from bi-weekly to multiple daily releases.",
        "Designed database schema optimizations and indexing strategies in PostgreSQL, boosting query execution performance by 3x on datasets exceeding 50 million records.",
        "Built automated integration test suites using Jest, Playwright, and GitHub Actions, lowering production bug escape rate by 28%."
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "AWS (EKS, S3, RDS)", "Docker", "Jest", "Tailwind CSS"]
    },
    {
      id: "exp-3",
      type: "work",
      role: "Software Engineering Intern",
      organization: "Vanguard Tech Innovations",
      location: "Hyderabad, India",
      period: "2020 — 2021",
      isCurrent: false,
      summary: "Contributed to front-end component libraries, automated data validation scripts, and RESTful API integrations for enterprise SaaS dashboards.",
      impact: "⏱️ Saved 15 engineering hours/sprint with automated regression pipelines",
      accomplishments: [
        "Developed reusable UI component library using React, TypeScript, and Storybook, standardizing design tokens across 4 distinct company products.",
        "Implemented client-side caching and optimistic UI updates, cutting perceived page load latency by 45%.",
        "Automated end-to-end regression test scripts in Python/Selenium, saving 15 engineering hours per sprint."
      ],
      technologies: ["React", "JavaScript (ES6+)", "Python", "HTML5/CSS3", "REST APIs", "Git"]
    },
    {
      id: "edu-1",
      type: "education",
      role: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      organization: "National Institute of Technology (NIT)",
      location: "India",
      period: "2017 — 2021",
      isCurrent: false,
      summary: "Graduated with First Class with Distinction (CGPA: 8.9/10). Focused on Distributed Systems, Algorithms, Computer Architecture, and Artificial Intelligence.",
      impact: "🎓 CGPA: 8.9 / 10 • Top 1% National Entrance Rank",
      accomplishments: [
        "Elected President of the Campus Computer Science Society, organizing 3 national-level hackathons with 1,500+ participants.",
        "Published undergraduate research paper on 'Optimized Graph Algorithms for Autonomous Route Optimization' in peer-reviewed student symposium.",
        "Secured Top 1% ranking in National Engineering Entrance Examination (over 1.2 million candidates)."
      ],
      technologies: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "DBMS", "C++", "Python"]
    }
  ],

  skillCategories: [
    {
      category: "Languages & Core Systems",
      icon: "code",
      description: "Primary programming languages used for systems, backends, and full-stack development",
      skills: [
        { name: "TypeScript", level: "Expert", featured: true },
        { name: "JavaScript (ES6+)", level: "Expert", featured: true },
        { name: "Python", level: "Expert", featured: true },
        { name: "Go (Golang)", level: "Advanced", featured: true },
        { name: "C++", level: "Advanced", featured: false },
        { name: "SQL", level: "Expert", featured: true },
        { name: "HTML5 & Modern CSS", level: "Expert", featured: true },
        { name: "Bash / Shell", level: "Advanced", featured: false }
      ]
    },
    {
      category: "Frameworks & Modern Web",
      icon: "layout",
      description: "Libraries and frameworks used to craft responsive, accessible, high-performance web applications",
      skills: [
        { name: "React 18 / 19", level: "Expert", featured: true },
        { name: "Next.js", level: "Advanced", featured: true },
        { name: "Tailwind CSS", level: "Expert", featured: true },
        { name: "Node.js & Express", level: "Expert", featured: true },
        { name: "FastAPI", level: "Expert", featured: true },
        { name: "Redux / Zustand", level: "Expert", featured: false },
        { name: "WebSockets & WebRTC", level: "Advanced", featured: true },
        { name: "Django / Flask", level: "Advanced", featured: false }
      ]
    },
    {
      category: "AI, Agents & Machine Learning",
      icon: "cpu",
      description: "Architectures for building autonomous agents, retrieval systems, and generative intelligence",
      skills: [
        { name: "Gemini 1.5 & 2.0 APIs", level: "Expert", featured: true },
        { name: "LangChain & LangGraph", level: "Expert", featured: true },
        { name: "RAG & Vector Search", level: "Expert", featured: true },
        { name: "Semantic Caching", level: "Expert", featured: true },
        { name: "Function Calling / Tools", level: "Expert", featured: true },
        { name: "Qdrant / Pinecone / Chroma", level: "Advanced", featured: true },
        { name: "PyTorch & Hugging Face", level: "Advanced", featured: false },
        { name: "Prompt Engineering & Eval", level: "Expert", featured: false }
      ]
    },
    {
      category: "Cloud, DevOps & Streaming",
      icon: "cloud",
      description: "Containerization, orchestration, and infrastructure automation for zero-downtime reliability",
      skills: [
        { name: "Docker & Containers", level: "Expert", featured: true },
        { name: "Kubernetes (K8s)", level: "Advanced", featured: true },
        { name: "Google Cloud Platform (GCP)", level: "Advanced", featured: true },
        { name: "Amazon Web Services (AWS)", level: "Advanced", featured: false },
        { name: "Kafka & Event Streams", level: "Advanced", featured: true },
        { name: "CI/CD & GitHub Actions", level: "Expert", featured: true },
        { name: "Linux Administration", level: "Expert", featured: false },
        { name: "Terraform / IaC", level: "Proficient", featured: false }
      ]
    },
    {
      category: "Databases & Architecture",
      icon: "database",
      description: "Storage engines, query optimization, and resilient architectural paradigms",
      skills: [
        { name: "PostgreSQL & pgvector", level: "Expert", featured: true },
        { name: "Redis (Cache & Pub/Sub)", level: "Expert", featured: true },
        { name: "MongoDB", level: "Advanced", featured: false },
        { name: "RESTful & GraphQL APIs", level: "Expert", featured: true },
        { name: "Microservices Design", level: "Expert", featured: true },
        { name: "System Design & Scaling", level: "Expert", featured: true }
      ]
    }
  ],

  achievements: [
    {
      id: "achieve-1",
      title: "Global AI & Cloud Hackathon Champion",
      issuer: "Cloud Innovation Summit",
      metric: "1st Place / 800+ Teams",
      year: "2024",
      description: "Engineered OmniAgent, an autonomous multi-modal code debugger and cloud infrastructure diagnosis engine in under 48 hours.",
      badge: "🏆 1st Place Winner",
      icon: "award"
    },
    {
      id: "achieve-2",
      title: "LeetCode Competitive Programming",
      issuer: "LeetCode",
      metric: "Top 2.5% Worldwide (2,150+ Rating)",
      year: "2023",
      description: "Solved 600+ complex algorithms across Dynamic Programming, Graph Theory, Trees, and Trie data structures.",
      badge: "⚔️ Knight (2150+ Rating)",
      icon: "zap"
    },
    {
      id: "achieve-3",
      title: "National Engineering Entrance Exam",
      issuer: "Ministry of Education",
      metric: "99.2 Percentile (Rank < 8,000 / 1.2M)",
      year: "2017",
      description: "Placed in the top 0.8% nationwide among 1,200,000+ candidates in advanced mathematics, physics, and analytical aptitude.",
      badge: "🎯 99.2 Percentile",
      icon: "target"
    },
    {
      id: "achieve-4",
      title: "Active Open Source Creator",
      issuer: "GitHub Community",
      metric: "1,450+ Stars & 1,500+ Contributions",
      year: "2022 — Present",
      description: "Authored FlowCraft and contributed performance patches and bug fixes to LangChain, ReactFlow, and Fastify repositories.",
      badge: "🌟 OSS Maintainer",
      icon: "git-branch"
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Google Cloud Certified: Professional Cloud Architect",
      issuer: "Google Cloud",
      issueDate: "2024",
      credentialId: "GCP-PCA-982341",
      credentialUrl: "https://cloud.google.com/certification",
      badgeName: "Verified Cloud Architect",
      skills: ["Cloud Architecture", "GCP Kubernetes Engine", "VPC Networking", "Disaster Recovery", "Cloud IAM"]
    },
    {
      id: "cert-2",
      title: "DeepLearning.AI: Generative AI with Large Language Models",
      issuer: "DeepLearning.AI & AWS",
      issueDate: "2023",
      credentialId: "DLAI-GENAI-77412",
      credentialUrl: "https://www.deeplearning.ai",
      badgeName: "LLM Specialist",
      skills: ["LLM Fine-tuning", "RLHF / DPO", "PEFT / LoRA", "Vector RAG", "Evaluation Benchmarks"]
    },
    {
      id: "cert-3",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      issueDate: "2023",
      credentialId: "AWS-SAA-348911",
      credentialUrl: "https://aws.amazon.com/certification",
      badgeName: "AWS Certified",
      skills: ["High Availability", "AWS Lambda", "EC2 & ECS", "Aurora & DynamoDB", "S3 & CloudFront"]
    },
    {
      id: "cert-4",
      title: "Meta Certified Front-End Developer",
      issuer: "Meta",
      issueDate: "2022",
      credentialId: "META-FED-55102",
      credentialUrl: "https://coursera.org",
      badgeName: "Meta Certified",
      skills: ["React Architecture", "Web Accessibility (a11y)", "Performance Optimization", "State Management"]
    }
  ],

  blogPosts: [
    {
      id: "post-1",
      title: "Orchestrating Sub-200ms Multi-Agent Workflows with Gemini 2.0 & Redis Semantic Cache",
      date: "August 2024",
      readTime: "6 min read",
      category: "AI & Systems",
      excerpt: "How we decoupled planning from execution, utilized structured tool calling, and achieved 62% lower API latency through cosine-similarity response caching.",
      tags: ["AI & Agents", "Gemini API", "System Architecture", "Redis"],
      content: [
        "Building production agents is vastly different from writing single-prompt chatbot prototypes. When agents are allowed to autonomously call tools in loops, latency compounds quickly.",
        "In this post, we discuss our architectural pattern that combines hierarchical planner/executor separation, streaming token pipes, and an in-memory vector cache in Redis to keep interactive response times snappy under 200ms.",
        "Key takeaways: 1) Strict loop bounding prevents runaway token expenses, 2) Speculative tool execution reduces waiting round-trips, and 3) Semantic caching satisfies repeated domain questions with 0 model inference cost."
      ]
    },
    {
      id: "post-2",
      title: "Zero-Downtime Database Migrations at Scale: Lessons from 50M Records in PostgreSQL",
      date: "May 2024",
      readTime: "8 min read",
      category: "Databases & Backend",
      excerpt: "Practical architectural strategies for schema alterations, concurrent index generation, and dual-write synchronizers without table locking.",
      tags: ["PostgreSQL", "Database", "Backend", "High Availability"],
      content: [
        "Running an ALTER TABLE on a table with 50 million rows can instantly cause exclusive locks that cascade into HTTP 504 Gateway Timeouts across your entire service.",
        "We walk through the Expand-and-Contract (Parallel Run) migration pattern: adding nullable shadow columns, backfilling via batch cursors during off-peak hours, implementing double-writes at the application layer, and safely switching over.",
        "The result was 100% continuous uptime with zero aborted transactions across our production logistics cluster."
      ]
    },
    {
      id: "post-3",
      title: "Building Pixel-Perfect ATS Resumes & Portfolios with Modern Web Standards",
      date: "March 2024",
      readTime: "5 min read",
      category: "Web & Career",
      excerpt: "Why modern portfolios need an ATS-optimized readable mode, clean print stylesheets, and one-click markdown export for recruiter parsing systems.",
      tags: ["Web Dev", "CSS & Print", "ATS Resume", "Career"],
      content: [
        "Many developer portfolios are visually dazzling but completely unreadable to automated Applicant Tracking Systems (ATS) and recruiters who need to quickly skim plain text.",
        "In this article, we demonstrate how to build an interactive dual-mode portfolio that offers a cutting-edge dark-mode interactive showcase alongside an instant, print-perfect ATS standard resume.",
        "By leveraging @media print CSS rules and structured semantic HTML, we ensure that invoking window.print() outputs an exact 1-to-2 page standard black-and-white resume ready for submission."
      ]
    }
  ],

  atsResumeText: `# ROSHAN NISHAD
Full-Stack Software Engineer & AI Systems Architect
Email: roshan.engineer.dev@gmail.com | Phone: +91 98765 43210 | Location: Bangalore, India
Portfolio: https://roshan-portfolio.example.com | GitHub: github.com/roshan-dev | LinkedIn: linkedin.com/in/roshan-engineer

================================================================================
PROFESSIONAL SUMMARY
================================================================================
High-impact Software Engineer with 4+ years of expertise in designing and scaling distributed systems, modern web architectures, and production-grade Generative AI pipelines. Proficient in TypeScript, React, Python, Go, Docker, Kubernetes, and Cloud native backends. Proven track record of boosting system throughput by 3.4x, reducing latency by 45%, and architecting systems serving tens of thousands of active users.

================================================================================
CORE COMPETENCIES & TECHNICAL SKILLS
================================================================================
• Languages: TypeScript, JavaScript, Python, Go (Golang), C++, SQL, HTML5/CSS3, Bash
• Frontend: React 18/19, Next.js, Tailwind CSS, Redux Toolkit, Zustand, WebSockets, Responsive UI
• Backend & APIs: Node.js, Express, FastAPI, Django, RESTful APIs, GraphQL, Microservices
• AI & Machine Learning: Gemini 1.5/2.0 API, LangChain, LangGraph, RAG, Vector Search, PyTorch, Hugging Face
• Cloud & DevOps: Docker, Kubernetes, GCP, AWS, CI/CD (GitHub Actions), Terraform, Linux
• Databases & Storage: PostgreSQL, pgvector, Redis, MongoDB, Kafka, TimescaleDB

================================================================================
PROFESSIONAL EXPERIENCE
================================================================================
SENIOR FULL-STACK & AI SYSTEMS ENGINEER | CognitiveScale Tech Labs, Bangalore, India
2023 – Present
• Spearheaded design and deployment of an internal multi-agent LLM reasoning pipeline processing 250k+ daily queries, reducing manual customer resolution time by 55%.
• Architected a resilient distributed caching layer using Redis and Kafka, decreasing database read load by 40% and cutting p99 query latency from 140ms to 28ms.
• Mentored a team of 6 engineers across React, TypeScript, and Python best practices; established automated CI/CD pipelines with 90%+ test coverage.
• Delivered real-time telemetry monitoring dashboards using Prometheus, Grafana, and React, boosting anomaly detection speed by 60%.

SOFTWARE DEVELOPMENT ENGINEER (FULL STACK) | AeroByte Distributed Systems, Bangalore, India
2021 – 2023
• Engineered responsive React/Redux applications used by 40,000+ daily logistics operators with 99.8% crash-free sessions.
• Migrated monolithic Node.js backend to containerized microservices on AWS EKS, enabling multiple daily zero-downtime releases.
• Optimized PostgreSQL schema and queries for 50M+ records, speeding up query execution by 3x.
• Authored comprehensive automated test suites using Jest and Playwright, lowering production bug escape rate by 28%.

SOFTWARE ENGINEERING INTERN | Vanguard Tech Innovations, Hyderabad, India
2020 – 2021
• Developed reusable React/TypeScript UI component library with Storybook, standardizing design tokens across 4 core products.
• Implemented client-side caching and optimistic UI updates, cutting perceived page load latency by 45%.
• Automated regression test suites using Python, saving 15 engineering hours per sprint.

================================================================================
KEY PROJECTS
================================================================================
• OmniAgent (Autonomous Multi-Modal Reasoning Engine):
  Engineered multi-agent DAG with Gemini API and isolated gVisor container runners for Python code execution. Reduced API costs by 42% and achieved 3.4x faster analytical query execution.
• NexusScale (Real-Time Ingestion Engine):
  Built distributed event broker in Go handling 85,000+ events/sec at < 15ms p99 latency with automated batching and Kafka streaming.
• DevPulse (Collaborative Code Review Suite):
  Developed real-time code annotation platform with CRDT synchronization (Yjs), WebSockets, and React, cutting PR turnaround time by 35% for 1,200+ active developers.

================================================================================
EDUCATION & CERTIFICATIONS
================================================================================
• Bachelor of Technology (B.Tech) in Computer Science & Engineering | National Institute of Technology (NIT) | CGPA: 8.9 / 10 | 2017 – 2021
• Google Cloud Certified: Professional Cloud Architect (2024)
• DeepLearning.AI: Generative AI with Large Language Models (2023)
• AWS Certified Solutions Architect – Associate (2023)
• Meta Certified Front-End Developer (2022)
• Top 1% in National Engineering Entrance Examination (Rank < 8,000 / 1.2 Million candidates)
• LeetCode Competitive Rating: 2,150+ (Knight, Top 2.5% Globally)
`
};
