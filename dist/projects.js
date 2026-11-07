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
    "bullets": [],
    "companyUrl": "https://www.specbee.com/",
    "role": "Technical Lead · Team of 5",
    "story": [
      "I took over a largely agent-written codebase while Trusearch was onboarding clients. I owned the architecture and delivery, balancing hands-on backend work with sprint planning, client discussions, and coordination across development, QA, and DevOps.",
      "Coding agents accelerated implementation, but features arrived as PRs spanning 50–80 files. I introduced <strong><em>spec-driven development</em></strong> and staged changes of roughly 20–25 files, making each step easier to understand and review.",
      "Context also disappeared between sessions. My approach to <strong><em>Harness Engineering</em></strong> gave agents persistent repository memory, architecture documentation, and implementation plans to work from.",
      "As reviews became a bottleneck, I added mandatory agent-assisted reviews with human oversight. Developer walkthroughs and QA checks tested both the generated code and the team’s understanding of it. Agent-assisted bug and technical-debt reporting helped surface issues alongside feature work.",
      "Together, these Agentic Engineering practices gave the team a more deliberate path from generated code to production. As the team grew, I delegated more feature work while staying hands-on with critical delivery blockers."
    ]
  },
  {
    "id": "trusearch",
    "mark": "TS",
    "name": "Trusearch",
    "company": "Trumetric.AI (part of Specbee)",
    "role": "Technical Lead · Team of 5",
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
    "bullets": [],
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
    "story": [
      "I led Trusearch from an agent-first codebase toward production readiness, owning architecture, client requirements, and delivery. The goal was enterprise search that clients could embed in their CMS while retaining control of their content.",
      "Privacy shaped the architecture: I kept the search engine and indexed content in client infrastructure, with a central platform for tenants, API keys, plans, and usage limits. A low-code widget builder served JavaScript and CSS through S3 and CloudFront to simplify integration.",
      "New clients needed useful search before every embedding was ready. I led lexical-first onboarding that made <strong><em>about 10,000 documents searchable in three minutes</em></strong>, while vector embeddings were generated asynchronously.",
      "For relevance, I combined BM25, HNSW dense vectors, and neural sparse retrieval, with domain-specific embeddings and structural chunking. Typeahead and suggestions ran at <strong><em>p95 below 300 ms</em></strong>. Cross-encoder reranking initially added roughly 10× latency; I bounded the workload and added Caffeine L1 caching to keep repeated searches responsive.",
      "I built <strong><em>RAG-powered AI Overview</em></strong> to summarize retrieved results with citations and contextual actions. I also evaluated self-hosted Granite through vLLM on EC2, and built a tenant-scoped <strong><em>MCP server</em></strong> so clients could search content and query analytics within Claude.",
      "Beyond delivery, I explored agentic Query DSL generation using index mappings and sample documents, and guided marketing on Generative Engine Optimization. I worked with clients through onboarding and go-live to turn integration feedback into product decisions."
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
    "bullets": [],
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
    "story": [
      "I owned the Grower App from requirements and design through on-site rollout and user training. Built with Flutter and Quarkus, it brought breeder-farm weighing, analytics, and growth projections into one workflow.",
      "Weighing depended on one person reading the scale and another recording results. I connected BLE scales to a phone that could stay in the operator’s pocket, using sliding-window standard deviation to identify stable weights from readings roughly every 200 ms. That reduced the task from <strong><em>two people to one</em></strong>.",
      "Farm connectivity was unreliable, so weighing had to continue offline. I stored readings locally and synchronized them in batches when the connection returned. The workflow supported <strong><em>about three seconds per bird</em></strong>, with 10+ concurrent operators processing up to 50,000 birds per farm per day.",
      "Collecting data faster mattered only if farmers could use it sooner. I made analytics available immediately after synchronization, replacing an evening or next-day wait. A Gompertz growth model with SciPy curve fitting produced farm-specific weekly body-weight targets.",
      "On-site implementation and ongoing client feedback helped me refine the workflow around how operators actually worked, from handling scale readings to troubleshooting synchronization."
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
    "bullets": [],
    "companyUrl": "https://www.livine.io/",
    "story": [
      "ERP purchases and sales still needed to be entered again in accounting software. I led a team of three to build Livine Finance from scratch, owning client requirements, solution design, sprint planning, and delivery.",
      "To connect operations with accounting, I used AWS SNS and SQS to consume purchase and sale events asynchronously and generate journal entries. This <strong><em>removed manual re-entry into Tally</em></strong> for those transactions.",
      "Bank statements created another manual step. I built a cost-effective alternative to third-party processing with Textract and Claude on Bedrock, extracting transactions from PDFs to create payment and receipt entries.",
      "Payment providers needed the same automation without tightly coupling the module to each integration. I designed a pluggable provider SPI for webhooks from Greenorange, Razorpay, and others. Signature verification validated incoming events, while idempotency prevented duplicate receipt entries."
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
    "bullets": [],
    "story": [
      "I joined Livine in <strong><em>2022 as its second SWE</em></strong>, with the ERP’s analytics engine as my first major assignment. Over the next <strong><em>1.5 years</em></strong>, I built 300+ reports, dashboards, and analytical touchpoints spanning operational reporting, trends, and predictions.",
      "The work ranged from SQL reports in Metabase and a custom builder to Python services built with FastAPI and SQLAlchemy. Pandas, Openpyxl, and SciPy supported the data processing, Excel reporting, and trend predictions behind them.",
      "As more clients came onboard, keeping that report inventory consistent became a challenge of its own. Updates and deletions needed to reach the right tenants, while each division needed its own selection of reports. I built <strong><em>Livine Central</em></strong> to manage report versions and tenant configurations in one place, then synchronize the relevant changes across deployments.",
      "Growing data volumes brought another constraint. Analytical queries on MySQL were taking over a minute and beginning to affect transactional writes. I led the migration of analytical reads to <strong><em>ClickHouse</em></strong>, bringing report loads down to <strong><em>2–3 seconds</em></strong> while keeping transactions on MySQL.",
      "For recurring calculations, I used pre-computed tables populated by overnight jobs and selected jobs running <strong><em>every ten minutes</em></strong>. Execution-status tracking and alerts through Amazon SNS and SES helped surface failed or missed runs. Alongside this, I worked on query optimization, views, and partitioning across the data layer."
    ],
    "technicalNote": "That separation also meant adapting how we handled changing data. I made targeted changes to <code>mysql_ch_replicator</code> for replication and handled updates and deletions through new versioned records in our ClickHouse data model."
  }
];
