# Portfolio project memory

Updated: 9 November 2026. Current decisions below supersede archived handoffs.
For implementation rules read `../AGENTS.md`; for actual review/release state
read `PROJECT_STATUS.md`; for release procedures read `DEPLOYMENT.md`.

## Owner, source, and scope

Sundar Reddy R — Technical Lead | Back-end systems, Bengaluru, India.
GitHub `https://github.com/sundarreddyr/about-me` (main) is the sole source of
truth. Both hosts must publish the same approved revision:

- Pages: `https://sundarreddyr.github.io/about-me/`.
- Sites: `https://sundar-reddy-portfolio.sundarreddy022.chatgpt.site/`.
- Existing Sites project: `appgprj_6ae46619f6508191b4ec6eaba8959134`.

Current work is local preview first. Publication awaits owner review. Keep the
owner's README, supplied resume, source identity, and unrelated work intact.
Pages CI is configured; fully automatic Sites deployment from Actions is not
available through the current supported integration. Report that limitation.

## Current design direction

The goal is immediate understanding of career progression and projects, followed
by easy case-study reading. The owner invited a separate senior design reviewer
and roughly 30% creative freedom within the hard limits below.

Final palette selection is now pending a four-direction comparison with light/dark
modes: Paper/Cobalt, Sand/Coral, Graphite/Jade, plus the owner's five-color
Coolors Orange/Aqua palette. See `PALETTE_OPTIONS.md` for exact tokens and roles.
The owner explicitly relaxed the color limit for Coolors and permits original
brand-logo colors. Main local source retains the gunmetal/fog/orange base while
options are reviewed.

The owner requested neumorphism and a full review of all earlier components,
authorizing changes to previous presentation decisions. Current treatment uses
raised outer surfaces, inset controls, and quiet reading dialogs, with a Flat/
Soft depth comparison. The canonical CSS was consolidated; illustration styles
are separated in `dist/illustrations.css`. Project-card actions now use an open
arrow, not an add/plus glyph. Contact controls and education hierarchy were also
reviewed. Career facts and ordered case-study stories remain authoritative.

Two families: **DM Sans + Manrope**. Four sizes: **12 / 16 / 24 / 32 px**.
Hierarchy comes from weight, spacing, and grouping. Remove miniature labels that
would require a fifth size. Use the authentic AWS wordmark and original technology-logo colors; these are
explicit exceptions to the UI palette.

Retain GitHub's approved card concepts, especially Finance's dashboard. Do not
import the later Sites-only workflow-card redesign. Keep all project names
styled consistently; remove decorative symbols next to titles. Preserve
trusearch's lowercase brand spelling. All dialogs use labeled bullets with one
or two supported highlights. Real problems precede engineering decisions and
results; new features do not need invented problems.

Remove company attribution from card bottoms. Use exactly these three phrases,
plain text separated by middots, with room to wrap naturally:

| Project | Keywords |
| --- | --- |
| Agentic Engg | Harness Engineering · SDD · Review bot |
| trusearch | Hybrid search · AI Overview · RAG |
| Grower App | BLE · Async offline operations · Predictions |
| Livine Finance | Statement Extraction · Payment integration · Automated Entries |
| Livine Analytics | 300+ reports · ClickHouse migration · DB performance |

No unique "Enterprise Search · AI Engineering" subtitle at Trumetric. All
employers have the same role-rail pattern and explicit role dates. Company date
ranges stay intact; narrow layouts move complete ranges above company content.

## Structure and preserved copy

Navigation: Home, Career Journey, Skills, Contact. Career precedes Skills.
Resume is a separate PDF download. Exact titles: "The Journey so far",
"The tools behind the work", "Say Hi". Do not restore Blog/Notebook/About.
Keep Sundar Reddy wordmark, SR favicon, themes, persistent theme selection,
accessible native dialogs, focus restoration, scroll locking, and reduced motion.

Hero: "Building systems with / Agentic Engineering."

Supporting copy: "I'm a technical lead currently building Enterprise Search,
Back-end systems and leading teams effectively in this AI Engineering era."

Current-company copy: "Currently at Trumetric.AI (part of Specbee), leading
Trusearch: privacy-first enterprise search with Agentic search & AI Overview."

Company link: `https://www.specbee.com/`; do not use the unavailable Trumetric
website. Contact: `sundarreddy022@gmail.com`,
`https://linkedin.com/in/sundarreddy022`, `https://x.com/sundarreddyr`.

## Career facts

| Employer / education | Role | Dates |
| --- | --- | --- |
| Trumetric.AI (part of Specbee) | Technical Lead | Apr 2026–Present |
| Livine | Technical Lead | Apr 2025–Mar 2026 |
| Livine | Software Developer | Apr 2022–Mar 2025 |
| Lumen Technologies | Software Development Consultant I | Jan 2022–Mar 2022 |
| Lumen Technologies | Software Development Engineer | Sep 2020–Dec 2021 |
| Manipal Institute of Technology | B.Tech., Electronics & Communication Engineering; CGPA 8.0 | 2016–2020 |

Newest first; group roles within each employer. Remove "Team of 5" from portfolio
copy. Finance's team of three remains supported. The earlier request for theme
control placement near the name was not completed on desktop; do not say it was.

## Project facts and story order

`dist/projects.js` holds the current full approved case-study text and links.
Preserve its order and engineering reasoning. Key factual guardrails:

**Agentic Engg** — Architecture & delivery → Reviewable changes → Harness
Engineering → Review & QA → Production delivery. Took over a largely
agent-written codebase during client onboarding; owned architecture, backend,
sprints, client/QA/DevOps coordination. PRs of 50–80 files became changes of
roughly 20–25 files through spec-driven development. Persistent repository memory,
architecture docs and plans address context loss. Agent reviews retain human
oversight, walkthroughs and QA. Delegated features as the team grew while
resolving critical blockers. Meaningful artifact illustration: AGENTS.md,
ARCHITECTURE.md, docs/, design-docs/, specs/, exec-plans/, tech-debt/.

**trusearch** — Product ownership → Privacy-first architecture → Lexical-first
onboarding → Search relevance & latency → RAG & MCP → Agentic search & client
delivery. Engine/content stay in client infrastructure; central tenant/API-key/
plan/limit platform; S3/CloudFront widget builder. About 10,000 documents searchable
in about three minutes; asynchronous embeddings. BM25 + HNSW + neural sparse,
domain embeddings, structural chunking. **p95 <300 ms** for typeahead/suggestions;
never upgrade to p99. Cross-encoder reranking initially adds ~10× latency;
bounded workload and Caffeine L1 caching. RAG Overview with citations/actions,
Granite/vLLM on EC2 evaluation, tenant-scoped MCP in Claude, Query DSL exploration,
GEO guidance, onboarding/go-live feedback. Links: `https://www.hcghospitals.com/`,
`https://www.drupalreleases.com/project/search-api-trusearch`,
`https://huggingface.co/abhinand/MedEmbed-small-v0.1`.

**Grower App** — End-to-end ownership → BLE weighing → Offline sync & concurrency
→ Analytics & projections → Field implementation. Flutter/Quarkus, requirements
through rollout/training. Two operators reduced to one; BLE ~200 ms readings,
sliding-window standard deviation for stable weight, phone in pocket. Local
capture and batch sync, ~3 seconds/bird, 10+ concurrent operators, up to 50,000
birds/farm/day. Analytics immediately after sync rather than evening/next day.
Gompertz growth model with SciPy fitting for weekly targets. Keep three illustrated
scenes and distinguish standard/predicted/current weight. Links:
`https://www.livine.io/grower-app`, `https://www.youtube.com/watch?v=9W_Rfoq-JNA`.

**Livine Finance** — Accounting module ownership → Event-driven journal entries
→ Bank statement extraction → Payment integrations. Led three engineers from
requirements/design through sprints/delivery. SNS/SQS purchase/sale events create
journal entries, eliminating duplicate entry in software such as Tally. Textract
and Claude on Bedrock extract PDF statements into payment/receipt entries.
Pluggable provider SPI for Greenorange/Razorpay/other webhooks; signatures and
idempotency protect processing. Keep Finance dashboard illustration.

**Livine Analytics** — Analytics foundation → Reporting services → Multi-tenant
report management → OLAP migration → Scheduled calculations. Second SWE in 2022;
300+ reports/dashboards/touchpoints over 1.5 years. SQL, Metabase/custom builder,
FastAPI, SQLAlchemy, Pandas, Openpyxl, SciPy. Livine Central manages versions and
tenant configurations with update/delete synchronization. MySQL analytical reads
**>1 minute → 2–3 seconds** after moving to ClickHouse; transactions remain on
MySQL. Precomputed tables, overnight/selected ten-minute jobs, status tracking,
SNS/SES alerts, query optimization/views/partitioning. Keep replication disclosure:
targeted mysql_ch_replicator changes and versioned update/delete records. Do not
guess the upstream library URL or claim ClickHouse cannot update/delete.

## Analytics scope

The owner requested daily visits, engagement time, and popular sections/projects,
then specified **GitHub Pages only**. No GA4 tracker was found in the inspected
GitHub source/public HTML. Sites metadata is not a traffic report, and its public
HTML request was blocked with HTTP 403. No historical traffic has been recovered.
Instrumentation is prepared locally but disabled until the owner supplies a GA4
Measurement ID. See `ANALYTICS.md` for events, timing definitions, exclusions,
configuration, and activation/verification requirements. Do not enable tracking
on the ChatGPT mirror or palette previews.

## Skills and future preferences

Keep Quarkus primary, Spring Boot secondary. Core: Java/Quarkus, Python/FastAPI,
RDBMS/MySQL, Flutter/Dart, AWS/Cloud, AI tools/Agentic workflows. Full stack stays
in the shared dialog: Frameworks, Libraries, Databases, Cloud & DevOps, Backend,
Agentic Engineering. Avoid duplicate skills sections or technology-only stories.

Read the current resume before factual updates. Professional content changes may
warrant LinkedIn/Naukri/Indeed/GitHub updates; flag them without publishing. Future
blogs may need LinkedIn and Medium adaptations, but there is no publication
permission. Application-role summaries should use at most 5–6 substantive bullets.

The complete original handoff (including all 40 design pointers and historical
Sites version-25 identifiers) is preserved in
`archive/PORTFOLIO_HANDOFF_2026-11-09.md` for selective reference only. Current
instructions and source override its stale prose, placeholder, palette, card,
and p99 guidance.

## Latest white-first direction (9 November 2026)

Owner supplied yellow, navy/teal/sky, and ocean/teal/sand references, plus a sunny
beach-day direction. Added Navy & Persimmon, Sunlight & Raspberry, Sunny Beach Day
alongside the earlier four options. Default comparison is now selective depth:
70-75% neutral white-ish surfaces, quiet separators, one hero accent on meaningful
project names/links/metrics/actions, and soft depth on controls rather than every
card. Search and Grower animation remain enabled; a pause control and reduced
motion are supported. Mobile comparisons no longer force cramped two-column
cards. The Grower phone is contained at narrow widths. Final palette remains
pending; all work is local. Original brand-logo colors remain permitted.

Vercel's web-design-guidelines skill is installed globally and saved under
`.agents/skills/web-design-guidelines/` for future project reviews. Its current
rules were fetched and applied; owner content/layout preferences take precedence.

## Approved release — 9 November 2026

Owner selected Navy & Persimmon with selective depth and authorized publishing
to GitHub Pages and the existing public ChatGPT site. This supersedes earlier
local-only/pending-selection notes. GA4 is deferred; keep measurement ID null.
