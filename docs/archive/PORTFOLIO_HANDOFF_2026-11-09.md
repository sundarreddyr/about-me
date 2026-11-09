# Historical portfolio handoff — 9 November 2026

Historical reference only. Read ../PROJECT_MEMORY.md for current decisions.
The owner has since superseded parts of this design and source-authority guidance.

## 1. PROJECT AND REPOSITORY

Portfolio owner: Sundar Reddy R.
Positioning: Technical Lead | Back-end systems.
Location: Bengaluru, India.

GitHub repository:
https://github.com/sundarreddyr/about-me
Default branch: main.
This repository was verified to exist and is public.

ChatGPT Sites portfolio:
https://sundar-reddy-portfolio.sundarreddy022.chatgpt.site/

Existing Sites project ID:
appgprj_6ae46619f6508191b4ec6eaba8959134

Continue the existing portfolio. Do not rebuild from scratch or replace its
identity unless explicitly requested.

Read the repository's AGENTS.md, existing implementation, hosting configuration,
and Git status before making changes. Preserve unrelated work.

Leave the GitHub README.md unchanged unless explicitly asked to edit it.
Earlier work included keeping source and agent instructions on GitHub so
future agents could continue.

IMPORTANT SYNC DISTINCTION:
The latest changes described below were committed to the Sites-managed source
repository and published through Sites. They were NOT verified as synchronized
to GitHub about-me during this conversation.

Compare the current about-me repository with the latest published/source version
before assuming GitHub contains all these changes.

GitHub pushes and Sites publication are separate unless an existing integration
explicitly establishes otherwise. Do not claim both deployments were updated
after updating only one.

A GitHub Pages address appeared in earlier context:
https://sundarreddyr.github.io/about-me/
Its current deployment state was not verified in this conversation.


## 2. LAST VERIFIED PUBLICATION

The latest verified publication was Sites version 25.

Source commit in the Sites-managed repository:
9ed341f9b2c4075fe9f5439067287fe58c40d30c

Saved version:
appgprj_6ae46619f6508191b4ec6eaba8959134~appgver_4b14799f71948191a88c3dcedfea1415

Deployment:
appgdep_6af123fdd4b08191b30aab64d7918485

Deployment status: succeeded.
The published page was opened and its revised keyword cards verified.

These identifiers describe the state at handoff. Check for newer work before
editing. They are not necessarily commits or versions in GitHub about-me.


## 3. IMPLEMENTATION

The latest inspected Sites source is a buildless static website:

dist/index.html
  Page structure, hero, navigation, career timeline, project cards, skills,
  contact, and dialog container.

dist/style.css
  Layout, responsive styles, themes, animations, product illustrations.

dist/projects.js
  Project metadata, stack, summaries, ordered story bullets, and bullet labels.

dist/app.js
  Project dialogs, rendering, theme persistence, navigation highlighting,
  search preview, and Grower animation.

dist/assets/Sundar_Reddy_Resume.pdf
  Downloadable resume.

dist/assets/icons/
  Technology SVG assets.

dist/favicon.svg
  SR favicon.

.openai/hosting.json
  Existing Sites project identity and static directory configuration.

The hosting manifest uses static.directory = "dist".

Do not assume GitHub has exactly this directory structure; inspect it first.
No framework migration is needed for these changes.

Fonts in the inspected implementation: DM Sans and Manrope.
The personal wordmark uses a serif treatment.

The product UI sketches are illustrations, not real product screenshots.
Label them accurately. Never imply a decorative preview is a working product.


## 4. LATEST USER DIRECTION — OVERRIDES OLDER PLANS

PROJECT CARDS:
Do not use the proposed outcome sentences on the layout cards.
Use concise, relevant keywords such as Harness Engineering, RAG, and MCP.
Use plain text rather than adding filler badges or pills.

CASE STUDIES:
Prose-heavy essays did not work for the user.
Use bullet pointers with bold lead labels, or concise useful headings.
Preserve the original flow and order of the story.

Where a real problem exists:
Lead with the problem, explain how it was solved, and include the outcome.

Where the work is a new feature:
Describe the feature directly. Do not invent a problem to force the pattern.

Keep the engineering reasoning and meaningful details. Do not turn every
project into a generic technology list or remove the story entirely.

APPROVED VISUAL CHANGES:
- Larger, more readable supporting text.
- Better contrast.
- Simplified, clearer product illustrations.
- Removal of redundant labels and company footers.
- Consistent visible "View project" plus arrow icon.
- Consistent SVG icons rather than unreliable Unicode glyphs.

These were implemented and published.


## 5. PAGE STRUCTURE AND NAVIGATION

Use four main navigation sections, in this order:

Home
Career Journey
Skills
Contact

Career Journey appears above Skills.

Resume is a separate, visually distinct action, with a download icon and PDF
indication. Preserve its restrained blue/lavender treatment.

Use consistent navigation icons.

Preserve the exact career section title:
"The Journey so far"

Removed:
- "Explore the projects behind each role"
- "Built with, every day"
- Redundant Career Journey pill above "The Journey so far"
- Redundant Skills pill above the skills heading
- Unnecessary Contact eyebrow/divider treatment
- Repeated company attribution in project cards where the company is already
  obvious from the parent career section

Do not restore Blog, Notebook, or About navigation without a new request.

The latest skills heading is:
"The tools behind the work"

Keep Contact as "Say Hi" with a waving-hand visual and prominent email.


## 6. HERO, BRANDING, AND THEME

Preserve the existing hero wording unless explicitly asked to change it.

Current hero:
"Building systems with
Agentic Engineering."

Supporting copy:
"I'm a technical lead currently building Enterprise Search, Back-end systems
and leading teams effectively in this AI Engineering era."

Current-company copy:
"Currently at Trumetric.AI (part of Specbee), leading Trusearch: privacy-first
enterprise search with Agentic search & AI Overview."

Subtitle:
"Technical Lead | Back-end systems"

Keep the Sundar Reddy wordmark and SR favicon.

Keep light and dark themes and persistent theme selection.
The user previously wanted the animated theme control near the name and
appropriate mobile alignment. The inspected desktop version had the control
in the sidebar footer; do not describe the near-name placement as completed.

Keep subtle lighter card gradients and distinctive project wordmarks.
The design-reference cautions about gradients are not a blanket prohibition
against gradients specifically requested by the user.

Use clear hover and keyboard-focus states. The "View project" label must remain
readable on hover; an earlier disappearing-label hover issue was fixed.


## 7. CAREER JOURNEY AND EXACT DATES

Newest first. Group multiple roles within the same company.

Trumetric.AI (part of Specbee)
Technical Lead: Apr 2026–Present

Livine
Technical Lead: Apr 2025–Mar 2026
Software Developer: Apr 2022–Mar 2025

Lumen Technologies
Software Development Consultant I: Jan 2022–Mar 2022
Software Development Engineer: Sep 2020–Dec 2021

Education:
Manipal Institute of Technology
B.Tech., Electronics & Communication Engineering
2016–2020
CGPA 8.0

Use "Role progression", including for Livine.
Make role progression prominent through layout, connecting timeline elements,
and restrained visual emphasis.

Show dates clearly, with role dates aligned to the right where space permits.
Do not confuse company tenure, role periods, and exact project dates.

Do not include "Team of 5" in portfolio copy.
The Finance team-of-three detail remains supported and was retained.

In portfolio and resume:
Use "Trumetric.AI (part of Specbee)" and link to:
https://www.specbee.com/

Do not link to the unavailable Trumetric.AI website.

Leave the existing company name on LinkedIn and Naukri unchanged unless asked.

For application-form experience summaries, use at most 5–6 substantive bullets
per role. Portfolio case studies can retain useful engineering depth.


## 8. PROJECT CARDS AND THEIR CURRENT KEYWORDS

Keep project names consistently at the top left with restrained flair.
Follow the established trusearch treatment; keep that wordmark.

Agentic Engg:
Harness Engineering · Spec-driven development · AI-assisted review

trusearch:
Hybrid search · RAG · MCP

Grower App:
BLE · Offline sync · Growth projections

Livine Finance:
Event-driven accounting · PDF extraction · Webhooks

Livine Analytics:
Multi-tenant reporting · ClickHouse · ETL

Use the same "View project" plus SVG diagonal-arrow treatment on all cards.

Cards are grouped under the relevant company and role:
- Trumetric Technical Lead: Agentic Engg and trusearch.
- Livine Technical Lead: Grower App and Livine Finance.
- Livine Software Developer: Livine Analytics.

Use two columns on wide desktop layouts where space permits.
Stack naturally on narrow layouts; an intermediate-width single-column
breakpoint was added to avoid cramped cards.

Earlier instructions described Livine Analytics as a placeholder.
That is now superseded: it has a populated case study and published card.


## 9. CASE STUDY CONTENT AND ORDER

AGENTIC ENGG

Current labeled bullet order:
1. Architecture & delivery
2. Reviewable changes
3. Harness Engineering
4. Review & QA
5. Production delivery

Core facts:
- Took over a largely agent-written codebase during client onboarding.
- Owned architecture, backend delivery, sprint planning, and coordination with
  clients, QA, and DevOps.
- Features arrived in PRs spanning 50–80 files.
- Introduced spec-driven development and changes of roughly 20–25 files.
- Addressed context loss with persistent repository memory, architecture
  documentation, and implementation plans.
- Added agent-assisted reviews with human oversight, walkthroughs, and QA.
- Used agents to surface bugs and technical debt.
- Delegated feature work as the team grew while resolving critical blockers.

Keep the repository-artifact visual meaningful:
AGENTS.md
ARCHITECTURE.md
docs/
design-docs/
specs/
exec-plans/
tech-debt/

Do not turn it into an unreadable or merely decorative file inventory.
File numbering and filler context badges were removed.


TRUSEARCH

Current labeled bullet order:
1. Product ownership
2. Privacy-first architecture
3. Lexical-first onboarding
4. Search relevance & latency
## 5. RAG & MCP
6. Agentic search & client delivery

Core facts:
- Enterprise search for CMS websites.
- Led architecture, client requirements, delivery, and production readiness.
- Engine and indexed content in client infrastructure.
- Central platform for tenants, API keys, plans, and usage limits.
- Low-code widget builder delivered through S3 and CloudFront.
- Lexical-first onboarding makes about 10,000 documents searchable in about
  three minutes while vector embeddings are generated asynchronously.
- Hybrid retrieval combines BM25, HNSW dense vectors, and neural sparse search.
- Domain-specific embeddings and structural chunking.
- Typeahead and suggestions: p95 below 300 ms.
- Cross-encoder reranking initially added roughly 10× latency.
- Bounded the workload and used Caffeine L1 caching.
- RAG-powered AI Overview with citations and contextual actions.
- Evaluated self-hosted Granite through vLLM on EC2.
- Tenant-scoped MCP server for search and analytics within Claude.
- Explored agentic Query DSL generation from mappings and sample documents.
- Guided marketing on GEO and incorporated onboarding/go-live feedback.

IMPORTANT METRIC CORRECTION:
The current supplied resume, checked during this work, says p95 <300 ms.
The published portfolio retains p95.
An older memory document said p99; that is stale and must not override the
verified resume. Do not upgrade p95 to p99 without measurement evidence.

Search card:
- One search icon before "AI Search".
- One "AI Overview" label.
- Dynamic hospital/doctor/cancer-care search examples.
- No duplicate AI labels.

Relevant links:
https://www.hcghospitals.com/
https://www.drupalreleases.com/project/search-api-trusearch
https://huggingface.co/abhinand/MedEmbed-small-v0.1

The HCG action is available within the case study.


GROWER APP

Current labeled bullet order:
1. End-to-end ownership
2. BLE weighing
3. Offline sync & concurrency
4. Analytics & projections
5. Field implementation

Core facts:
- Built with Flutter and Quarkus.
- Owned requirements, design, delivery, on-site rollout, and user training.
- Replaced a two-person scale-reading/recording task with one operator.
- BLE readings roughly every 200 ms.
- Sliding-window standard deviation identifies stable weight.
- Phone can remain in the operator's pocket.
- Offline local capture and batch synchronization after connectivity returns.
- About three seconds per bird.
- 10+ concurrent operators, up to 50,000 birds per farm per day.
- Analytics immediately after synchronization, replacing evening/next-day waits.
- Gompertz growth model with SciPy curve fitting for farm-specific weekly targets.
- Refined workflows through field implementation and client feedback.

Visual requirements:
- Believable smartphone proportions; deliberate cropping is acceptable.
- Focus on product behavior rather than phone status/header chrome.
- Weighing, distribution, and projection scenes.
- Slides roughly every 2–3 seconds; implementation uses about 2.8 seconds.
- Projection axes: Week and Bodyweight.
- Distinguish standard, predicted, and current weight.
- Respect reduced motion.
- Simplified explanatory steps: capture a stable weight, save on the phone,
  sync when connected.

Links:
https://www.livine.io/grower-app
https://www.youtube.com/watch?v=9W_Rfoq-JNA


LIVINE FINANCE

Current labeled bullet order:
1. Accounting module ownership
2. Event-driven journal entries
3. Bank statement extraction
4. Payment integrations

Core facts:
- Led a team of three to build the accounting module from scratch.
- Owned requirements, solution design, sprint planning, and delivery.
- ERP purchases and sales previously required duplicate accounting entry.
- SNS/SQS consume events asynchronously and generate journal entries.
- Eliminated re-entry for those transactions into software such as Tally.
- Textract and Claude on Bedrock extract PDF bank-statement transactions.
- Generate payment and receipt entries.
- Pluggable provider SPI for Greenorange, Razorpay, and other webhooks.
- Signature verification and idempotency protect event processing.

Visual:
Project title "Livine Finance"; internal graphic label "Finance".
The tiny dashboard illustration was replaced with a clearer workflow:
ERP purchase/sale event → journal entry.
Keep illustrations simple and avoid unnecessary nested decorative containers.


LIVINE ANALYTICS

Current labeled bullet order:
1. Analytics foundation
2. Reporting services
3. Multi-tenant report management
4. OLAP migration
5. Scheduled calculations

Core facts:
- Joined Livine in 2022 as its second SWE.
- Built 300+ reports, dashboards, and analytical touchpoints over 1.5 years.
- Operational reporting, trends, and predictions.
- SQL, Metabase, custom reporting builder, FastAPI, SQLAlchemy, Pandas,
  Openpyxl, and SciPy.
- Livine Central manages report versions and tenant-specific configurations.
- Synchronizes relevant updates and deletions across deployments.
- Analytical queries on MySQL exceeded one minute and affected writes.
- Moved analytical reads to ClickHouse.
- Report loads reduced to 2–3 seconds; transactions stayed on MySQL.
- Pre-computed tables, overnight jobs, selected ten-minute jobs.
- Execution-status tracking and SNS/SES alerts.
- Query optimization, views, and partitioning.
- Expandable technical note about targeted mysql_ch_replicator changes and
  versioned records for ClickHouse updates/deletions.

Do not confuse these 2–3-second ClickHouse results with other reporting-service
benchmarks from older discussions.


## 10. MODAL AND INTERACTION REQUIREMENTS

Project cards open a native dialog.
Keep close-button, Escape, and backdrop dismissal.
Restore focus to the triggering card after closing.
Prevent background scrolling while the dialog is open.
Keep keyboard access and visible focus states.

Case studies now render actual unordered lists with bold inline labels.
Do not revert to long prose essays.

Larger labeled workflow illustrations for Search, Grower, and Finance appear
after the bullet story. They are explicitly described as illustrations.

Keep useful live-product and walkthrough links.
Avoid duplicate IDs when copying a card visual into a dialog.
Retain reduced-motion behavior and pause unnecessary preview animation when
hidden or while a project dialog is open.

The full-stack control opens a separate view in the shared dialog.


## 11. SKILLS

Keep Quarkus primary; Spring Boot is secondary.

Core visible stack:
Java / Quarkus
Python / FastAPI
RDBMS / MySQL
Flutter / Dart
AWS / Cloud
AI tools / Agentic workflows

Full-stack categories:
Frameworks
Libraries
Databases
Cloud & DevOps
Backend
Agentic Engineering

Relevant skills:
- Java, Quarkus, Spring Boot, Python, FastAPI, SQL, Dart, Flutter.
- Hibernate ORM/JPA, Blaze-Persistence, Liquibase, Pandas, SQLAlchemy,
  Pydantic, Boto3; Openpyxl where relevant to reporting.
- MySQL, ClickHouse, OpenSearch, Oracle SQL.
- AWS EC2, Cognito, IAM, S3, CloudFront, SNS, SQS, VPC, Bedrock.
- GitHub CI/CD, Docker Compose, ECR, Postman.
- REST APIs, data modeling, database optimization/scaling, AuthN/AuthZ,
  API gateways, rate limiting, CDN, load balancing, VPC/CORS,
  multi-tenancy, event-driven architecture, concurrency, caching.
- RAG, Harness Engineering, context management, spec-driven development,
  MCP, Codex/Claude Code, AI-assisted review.

Avoid duplicated skill sections and repeated "Tools & Practice" content.
Keep full-stack details readable and easy to close.


## 12. CONTACT

Email: sundarreddy022@gmail.com
LinkedIn: https://linkedin.com/in/sundarreddy022
X: https://x.com/sundarreddyr

Keep the email prominent.
External-link arrows and key UI icons use inline SVG.
Some former Unicode arrow symbols rendered as empty squares; this was fixed.


## 13. DESIGN REFERENCES — ALL 40 POINTERS

Two uploaded reference videos were reviewed:
"20 AI Design Slop Indicators"
"20 Ways to Unslop AI Designs"

Use them as review guidance, not absolute bans.
Explicit user preferences take precedence.

VIDEO A — INDICATORS TO REVIEW

1. Filler tags and pills.
2. Excessive italics.
3. Defaulting to Instrument Serif merely for a fashionable look.
4. Excessively tight negative kerning.
5. Overly detailed miniature UI.
6. Overused dividers.
7. Arbitrary color shades and low-opacity text.
8. Bordered containers around every group.
9. Overly detailed diagrams.
10. Verbose or redundant text.
11. Decorative code breadcrumbs.
12. Decorative section numbering.
13. Redundant eyebrow labels above headings.
14. Unnecessary dithering or grain.
15. Decorative ASCII imagery.
16. Indiscriminate squircle shapes.
17. Excessive monospace.
18. ALL CAPS subtitles everywhere.
19. Generic gradient backgrounds everywhere.
20. Decorative periods appended to every title.

VIDEO B — PRACTICAL IMPROVEMENTS

1. Delete filler badges.
2. Remove redundant labels.
3. Remove arbitrary italics.
4. Reserve monospace for appropriate technical content.
5. Use one coherent design system.
6. Show the actual product where suitable assets are available.
7. Enlarge the main feature.
8. Group related content through spacing.
9. Make headlines specific.
10. Make the primary action obvious.
11. Use a deliberate accent color consistently.
12. Keep icon family, weight, size, and alignment consistent.
13. Remove meaningless embellishments.
14. Coordinate nested radii with padding.
15. Improve text contrast.
16. Wrap headings intentionally.
17. Align optically as well as mathematically.
18. Use tabular numerals for changing/comparable numbers.
19. Add loading states for real asynchronous work.
20. Animate useful feedback.

APPLICATION TO THIS PORTFOLIO:
- Retain requested gentle card gradients and project-title flair.
- Retain relevant technical filenames and keyword text.
- Keep meaningful Role progression emphasis.
- Remove unnecessary decoration around the important content.
- Never invent fake product screenshots, metrics, features, or testimonials.


## 14. WHAT HAS BEEN COMPLETED

Latest published changes:
- Card outcome sentences replaced with relevant keyword lines.
- All five case studies converted to labeled bullets.
- Original story order retained.
- Real problems lead into solutions where applicable.
- New features described directly.
- Supporting typography enlarged and contrast improved.
- Product previews simplified.
- Larger workflow illustrations available in relevant case studies.
- Redundant section labels and company card footers removed.
- Consistent visible View project plus SVG arrow.
- Broken/inconsistent text-glyph icons replaced.
- Hover visibility issue corrected.
- p95 claim checked against the current supplied resume.
- Latest source pushed to Sites-managed Git and published as version 25.

Verification performed:
- JavaScript syntax checks.
- Keyword-card count and story/label consistency.
- Five project dialogs opened with expected bullet content.
- No "undefined" content in checked dialogs.
- Earlier pass checked unique page IDs and local assets.
- Desktop light/dark views inspected during the preceding visual pass.
- Latest public page opened and keyword content verified.

Do not claim comprehensive mobile-device testing was completed.
Responsive rules exist, but full mobile-device verification remains worthwhile.


## 15. FUTURE WORK AND OPERATING RULES

First:
Inspect GitHub about-me and its AGENTS.md.
Determine which of the latest published changes are missing there.
Reconcile source deliberately without overwriting unrelated changes.
Preserve README.md.

Continue from the current implementation, not from a blank template.
Keep subsequent changes scoped to the user's request.
Preserve verified dates, metrics, names, links, and engineering facts.
Check both themes, responsive layouts, text wrapping, hover/focus, dialog
opening/closing, navigation, links, and resume download as appropriate.

Read the current resume before making factual resume-based changes.
Do not treat older memory as authoritative when the current source disagrees.

An older saved document, Portfolio_Project_Memory_Instructions.md, still contains
superseded instructions:
- prose-oriented storytelling;
- Livine Analytics described as a placeholder;
- p99 below 300 ms.
The latest directions and verified facts in this handoff override those entries.

Keep source and project instructions durable in Git.
Scratch workspaces may be automatically removed; do not rely on their paths.

When updating Sites:
Use the existing project ID, obtain fresh source access, inspect current source,
preserve the public audience, validate, save the exact pushed source version,
and publish through the supported deployment flow.

Report actual access/build/deployment errors accurately.
Do not describe work as live until deployment succeeds.
Do not imply a GitHub commit automatically updates the Sites mirror.

Resume and portfolio are the central sources for digital-profile consistency.
When substantive professional content changes, flag relevant updates for
LinkedIn, Naukri, Indeed, and GitHub.
Do not send or publish external profile changes without authorization.
Purely visual website edits do not require unrelated profile rewrites.

For future blogs, the user wants suitable LinkedIn adaptations and possibly
Medium versions. This is a future preference, not permission to publish now.
