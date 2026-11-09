// Content grounded in the resume and project discussions; dates describe role periods.
window.portfolioProjects = [
  {
    "id": "agentic",
    "mark": "AE",
    "name": "Agentic Engg",
    "company": "Trumetric.AI (part of Specbee)",
    "dates": "Apr 2026 — Present",
    "period": "Role period",
    "draft": false,
    "summary": "Building the practices around coding agents so a team can deliver reliable software: clear plans, persistent context, review gates, and human oversight.",
    "stack": [
      "Claude Code",
      "Codex",
      "Spec-driven development",
      "Context engineering",
      "GitHub reviews",
      "Human-in-the-loop"
    ],
    "bullets": [
      [
        "Architecture & delivery",
        "Took over a largely agent-written codebase during client onboarding. Owned architecture, backend delivery, sprint planning, and coordination with clients, QA, and DevOps."
      ],
      [
        "Reviewable changes",
        "Features arrived in PRs spanning <strong>50–80 files</strong>, making review difficult. Introduced <strong>spec-driven development</strong> and changes of roughly <strong>20–25 files</strong> so each step could be understood and reviewed."
      ],
      [
        "Harness Engineering",
        "Agents lost context between sessions. Added persistent repository memory, architecture documentation, and implementation plans through <strong>Harness Engineering</strong>."
      ],
      [
        "Review & QA",
        "Reviews became a bottleneck. Added mandatory agent-assisted reviews with human oversight, developer walkthroughs, and QA checks; used agents to surface bugs and technical debt alongside feature work."
      ],
      [
        "Production delivery",
        "As the team grew, delegated more feature work while staying hands-on with critical delivery blockers and production readiness."
      ]
    ],
    "companyUrl": "https://www.specbee.com/",
    "role": "Technical Lead",
    "highlights": [
      [
        "20–25 files",
        "reviewable changes, down from 50–80"
      ],
      [
        "Harness Engineering",
        "persistent context across sessions"
      ]
    ]
  },
  {
    "id": "trusearch",
    "mark": "TS",
    "name": "trusearch",
    "company": "Trumetric.AI (part of Specbee)",
    "role": "Technical Lead",
    "dates": "Apr 2026 — Present",
    "period": "Role period",
    "summary": "Privacy-first enterprise search for CMS websites, combining fast onboarding, hybrid retrieval, AI summaries, and client-controlled deployments.",
    "stack": [
      "Java / Quarkus",
      "OpenSearch",
      "Redis",
      "PostgreSQL",
      "SQLite",
      "Caffeine",
      "S3 / CloudFront",
      "Cognito",
      "EC2",
      "Docker Compose",
      "Neural sparse retrieval",
      "ONNX",
      "vLLM",
      "MCP"
    ],
    "bullets": [
      [
        "Product ownership",
        "Led enterprise search for CMS websites from an agent-first codebase toward production readiness. Owned architecture, client requirements, and delivery."
      ],
      [
        "Privacy-first architecture",
        "Clients needed control of their content. Kept the search engine and indexed content in client infrastructure, with a central platform for tenants, API keys, plans, and usage limits. Delivered a low-code widget builder through S3 and CloudFront."
      ],
      [
        "Lexical-first onboarding",
        "Generating every embedding upfront delayed useful search. Made <strong>about 10,000 documents searchable in about three minutes</strong> through lexical-first onboarding, with vector embeddings generated asynchronously."
      ],
      [
        "Search relevance & latency",
        "Combined BM25, HNSW dense vectors, and neural sparse retrieval with domain-specific embeddings and structural chunking. Typeahead and suggestions ran at <strong>p95 below 300 ms</strong>. Cross-encoder reranking initially added roughly <strong>10× latency</strong>; bounded the workload and added Caffeine L1 caching."
      ],
      [
        "RAG & MCP",
        "Built <strong>RAG-powered AI Overview</strong> with citations and contextual actions. Evaluated self-hosted Granite through vLLM on EC2 and built a tenant-scoped <strong>MCP server</strong> for search and analytics within Claude."
      ],
      [
        "Agentic search & client delivery",
        "Explored agentic Query DSL generation from index mappings and sample documents. Guided marketing on GEO and used client onboarding and go-live feedback to shape product decisions."
      ]
    ],
    "liveUrl": "https://www.hcghospitals.com/",
    "liveLabel": "Explore my live work at HCG Hospitals",
    "companyUrl": "https://www.specbee.com/",
    "projectUrl": "https://www.drupalreleases.com/project/search-api-trusearch",
    "inlineLinks": [
      {
        "text": "vector embeddings",
        "url": "https://huggingface.co/abhinand/MedEmbed-small-v0.1"
      }
    ],
    "highlights": [
      [
        "~3 min",
        "to make 10,000 documents searchable"
      ],
      [
        "p95 <300 ms",
        "typeahead and suggestions"
      ]
    ]
  },
  {
    "id": "grower",
    "mark": "LG",
    "name": "Grower App",
    "company": "Livine · Poultry ERP",
    "role": "Technical Lead",
    "dates": "Apr 2025 — Mar 2026",
    "period": "Role period",
    "summary": "An offline-first mobile app for breeder-farm weighing, analytics, and projections.",
    "stack": [
      "Flutter / Dart",
      "Java / Quarkus",
      "BLE",
      "MySQL",
      "Python / FastAPI",
      "Pandas",
      "SciPy",
      "Scikit"
    ],
    "bullets": [
      [
        "End-to-end ownership",
        "Built the Grower App with Flutter and Quarkus. Owned requirements, design, delivery, on-site rollout, and user training."
      ],
      [
        "BLE weighing",
        "Weighing required one person to read the scale and another to record results. Used BLE readings roughly every <strong>200 ms</strong> and sliding-window standard deviation to identify stable weight, reducing the task from <strong>two operators to one</strong> while the phone stayed in a pocket."
      ],
      [
        "Offline sync & concurrency",
        "Unreliable farm connectivity interrupted data capture. Stored readings locally and synchronized in batches when connected. Supported <strong>about three seconds per bird</strong>, 10+ concurrent operators, and up to <strong>50,000 birds per farm per day</strong>."
      ],
      [
        "Analytics & projections",
        "Farmers previously waited until evening or the next day for analytics. Made results available immediately after synchronization and used a <strong>Gompertz growth model</strong> with SciPy curve fitting for farm-specific weekly bodyweight targets."
      ],
      [
        "Field implementation",
        "Refined weighing, synchronization, and user workflows through on-site implementation, training, and client feedback."
      ]
    ],
    "companyUrl": "https://www.livine.io/",
    "projectUrl": "https://www.livine.io/grower-app",
    "inlineLinks": [
      {
        "text": "Smart Grower App",
        "url": "https://www.livine.io/grower-app"
      }
    ],
    "liveUrl": "https://www.livine.io/grower-app",
    "liveLabel": "Explore the Livine Grower App",
    "videoUrl": "https://www.youtube.com/watch?v=9W_Rfoq-JNA",
    "videoLabel": "Watch the app walkthrough",
    "highlights": [
      [
        "2 → 1",
        "operators needed for weighing"
      ],
      [
        "~3 sec",
        "per bird, with offline capture"
      ]
    ]
  },
  {
    "id": "finance",
    "mark": "LF",
    "name": "Livine Finance",
    "company": "Livine · Poultry ERP",
    "role": "Technical Lead · Team of 3",
    "dates": "Apr 2025 — Mar 2026",
    "period": "Role period",
    "summary": "An accounting module connecting ERP activity, bank statements, and payment providers.",
    "stack": [
      "Java / Quarkus",
      "Hibernate",
      "Envers",
      "MySQL",
      "Cognito",
      "SNS / SQS",
      "AWS Textract",
      "Claude on Bedrock"
    ],
    "bullets": [
      [
        "Accounting module ownership",
        "ERP purchases and sales required duplicate entry in accounting software. Led a <strong>team of three</strong> to build the accounting module from scratch, owning requirements, solution design, sprint planning, and delivery."
      ],
      [
        "Event-driven journal entries",
        "Removed duplicate entry for those transactions by consuming purchase and sale events asynchronously through <strong>SNS/SQS</strong> and generating journal entries, eliminating re-entry into software such as Tally."
      ],
      [
        "Bank statement extraction",
        "Bank statements created another manual processing step. Used <strong>Textract and Claude on Bedrock</strong> to extract transactions from PDFs and generate payment and receipt entries."
      ],
      [
        "Payment integrations",
        "Built a pluggable provider SPI for Greenorange, Razorpay, and other webhooks. <strong>Signature verification and idempotency</strong> validated incoming events and prevented duplicate receipt entries."
      ]
    ],
    "companyUrl": "https://www.livine.io/",
    "highlights": [
      [
        "Team of 3",
        "built the accounting module"
      ],
      [
        "Event-driven",
        "ERP transactions to journal entries"
      ]
    ]
  },
  {
    "id": "analytics",
    "mark": "LA",
    "name": "Livine Analytics",
    "company": "Livine · Poultry ERP",
    "companyUrl": "https://www.livine.io/",
    "summary": "Building the ERP’s analytics foundation—and helping it grow.",
    "stack": [
      "MySQL",
      "ClickHouse",
      "Python / FastAPI",
      "Java / Quarkus"
    ],
    "bullets": [
      [
        "Analytics foundation",
        "Joined Livine in <strong>2022 as its second SWE</strong>. Built <strong>300+ reports, dashboards, and analytical touchpoints over 1.5 years</strong>, spanning operational reporting, trends, and predictions."
      ],
      [
        "Reporting services",
        "Built SQL reports in Metabase and a custom reporting builder, plus Python services with FastAPI and SQLAlchemy. Used Pandas, Openpyxl, and SciPy for data processing, Excel reporting, and predictions."
      ],
      [
        "Multi-tenant report management",
        "Report updates and deletions needed to reach the right tenants while preserving division-specific selections. Built <strong>Livine Central</strong> to manage versions and tenant configurations, then synchronize relevant changes across deployments."
      ],
      [
        "OLAP migration",
        "Analytical queries on MySQL exceeded <strong>one minute</strong> and affected transactional writes. Moved analytical reads to <strong>ClickHouse</strong>, reducing report loads to <strong>2–3 seconds</strong> while transactions stayed on MySQL."
      ],
      [
        "Scheduled calculations",
        "Used pre-computed tables populated by overnight jobs and selected jobs every <strong>ten minutes</strong>. Added execution-status tracking and SNS/SES alerts for failed or missed runs, alongside query optimization, views, and partitioning."
      ]
    ],
    "technicalNote": "That separation also meant adapting how we handled changing data. I made targeted changes to <code>mysql_ch_replicator</code> for replication and handled updates and deletions through new versioned records in our ClickHouse data model.",
    "highlights": [
      [
        "300+",
        "analytics touchpoints"
      ],
      [
        ">1 min → 2–3 sec",
        "analytical report loads"
      ]
    ]
  }
];
