# Portfolio maintenance

## Start here

- GitHub `sundarreddyr/about-me` is the source of truth. Fetch main and inspect Git status before editing. Preserve unrelated local and remote work.
- Read `docs/PROJECT_MEMORY.md` for current owner decisions and facts. `docs/PALETTE_OPTIONS.md` records pending visual options; `docs/ANALYTICS.md` records GitHub-only tracking setup. Read `docs/PROJECT_STATUS.md` for the current review/deployment state. Consult `docs/DEPLOYMENT.md` only for release work.
- Owner approved Navy & Persimmon with selective depth and publication to both hosts on 9 November 2026. Analytics is deferred and must remain disabled.
- Preserve root `README.md`, the owner-supplied resume, and `.openai/hosting.json` project identity. Never create a replacement Site.
- Update these concise canonical documents after meaningful decisions. The full historical handoff is archived under `docs/archive/`; do not load it routinely or restore superseded instructions.

## Implementation map

Buildless HTML/CSS/JavaScript: `dist/` is editable source, not generated output.

- `dist/index.html`: page, career groups, cards, keyword footers, skills, contact.
- `dist/projects.js`: case-study summaries, labeled bullets, highlights, stack, links.
- `dist/app.js`: shared dialog renderer, navigation, theme persistence, illustrative animations.
- `dist/style.css`: palette/type tokens, layout, components, responsive behavior.
- `dist/assets/icons/`: authentic technology assets; preserve source/license notices.
- `dist/assets/Sundar_Reddy_Resume.pdf`: replace only with an owner-approved revision.

## Design contract

- Optimize for immediate understanding of career progression and projects, followed by easy focused reading. Preserve hero wording and put the career journey near the first screen. Use spacing, weight, and grouping instead of extra labels, badges, or decoration.
- Approved palette: white `#fcfdff`, navy `#2f4156`, persimmon `#b9472e`; dark accent `#efa38e`. White-ish neutral surfaces dominate; sky-blue washes are restrained. Original brand-logo colors are permitted. Preserve selective depth; do not restore all-card shadows.
- Orange signals current/interactive/emphasized elements. Keep reading text and project names neutral. Maintain readable contrast in both themes.
- Exactly two UI families: DM Sans for body, Manrope for headings. Exactly four size tokens: 12px metadata, 16px body, 24px titles/highlights, 32px hero/name. Do not add local font sizes or a third family. Simplify illustration microcopy rather than making text tiny.
- Use one card-title component for all five projects: matching size, weight split, alignment, and spacing; preserve lowercase `trusearch`. No decorative stars, arrows, or plus signs attached to titles. Use a consistent circular SVG open-arrow action so it reads as opening a case study, not adding an item.
- Latest direction: 70-75% neutral white-ish surfaces, quiet gray separators, one hero accent for project names/links/selected metrics/actions, selective neumorphism only on a few interactive controls. Preserve search/Grower animation, with reduced-motion support; do not add a pause/resume preview control. New reference-inspired options are Navy/Persimmon, Sunlight/Raspberry, and Sunny Beach Day; the owner selected Navy & Persimmon.
- Use selective neumorphism: flat project/skills/contact surfaces, inset search and theme controls, occasional raised actions, one light direction, crisp neutral text and visible focus. Keep case-study reading surfaces nearly flat. `data-treatment="flat"` disables soft elevation for comparison.
- Keep all five project cards at one shared height and grid width, including Analytics. Grower uses a large cropped phone; Trusearch illustrates typing, a search click, then placeholder answer lines and citations 1/2/3.
- Retain the approved GitHub card concepts: repository artifacts, search preview, Grower phone scenes, Finance dashboard, Analytics graphic. Illustrations are not screenshots or working products. Permit focused simplification for legibility and the type/color constraints.
- Replace repeated company names at card bottoms with **at most three plain-text keyword phrases**. Exact current phrases are in project memory. Reserve footer space; illustrations must not overlap keywords.
- Restore/use the authentic local AWS wordmark asset, not the generic cloud glyph. Technology icons keep authentic brand colors as an explicit UI-palette exception; keep authentic silhouettes and source/license notices.
- One company-heading pattern. No unique Trumetric category subtitle. Every employer has an inner role rail and explicit role dates, including single-role Trumetric. Show "Role progression" for actual multi-role groups.
- Company date ranges stay on one line. At narrow widths move the complete range above company content. Align role dates right where space permits. Do not confuse tenure, role dates, and project dates.
- Navigation: Home → Career Journey → Skills → Contact. Preserve "The Journey so far", "The tools behind the work", "Say Hi", prominent email, SR favicon, and separate Resume PDF action.

## Case-study writing and facts

- Render actual unordered lists with bold lead labels. Start relevant bullets with the real problem, then the engineering decision and result. Describe new features directly; do not invent a problem or metric. Preserve story order and useful depth.
- Give each project one or two supported hero highlights using one shared layout. Follow with bullets, optional technical disclosure, then stack. Keep useful product and walkthrough links.
- Use "Trumetric.AI (part of Specbee)" linked to `https://www.specbee.com/`. Exclude "Team of 5"; Finance's team of three is supported.
- Preserve Trusearch's **p95 below 300 ms**. Never substitute stale p99 claims. Analytics' **>1 minute → 2–3 seconds** refers to the MySQL-to-ClickHouse migration; do not conflate it with other reporting-service benchmarks.
- Keep Analytics' replication technical disclosure. Versioned updates/deletes describe this implementation, not a ClickHouse limitation. Do not guess the replication library's upstream URL.
- Read the current supplied resume before resume-based factual changes. Flag substantive professional updates for other profiles, but do not modify/publish them without authorization.

## Validation and local review

For site changes, run JavaScript syntax checks, `python3 scripts/check_site.py`, and `git diff --check`. If `node` is unavailable in the shell, use the available Node runtime parser and record that substitution.

Preview with `python3 -m http.server 8000 --bind 127.0.0.1 --directory dist`.
Keep it running during the owner's review; stop it when that review ends.

Check changed sections in light/dark themes and desktop/intermediate/narrow widths. Verify typography remains within four sizes/two families, footer keywords fit, dates stay intact, controls/focus/contrast are clear, dialogs open/close via button/Escape/backdrop and restore focus, background scrolling locks, reduced motion remains supported, and local assets/resume load. Report limits accurately; viewport checks are not physical-device testing.

## Release contract

Analytics is authorized for GitHub Pages only. Keep the hostname/path gates, opt-out handling, and missing-ID disable behavior. Do not enable it on Sites, local previews, comparison pages, or iframe previews. A real owner-supplied GA4 ID and live verification are still required.

After owner approval, commit to GitHub and publish the same approved `dist/` revision to both hosts. Follow `docs/DEPLOYMENT.md`. Pages has Actions deployment; the Sites mirror needs a separate supported publication step until an unattended deployment API/credential exists. A mirror drift check is not publication. Record both results separately and preserve the existing Site's public audience and history. Do not overwrite GitHub with Sites design edits, force-push either history, store credentials, authorize hosting charges, or claim success before deployment succeeds.

## Vercel design guidelines

Use the saved `.agents/skills/web-design-guidelines/SKILL.md` for UI reviews and fetch its current rules before review. Owner instructions override generic guidelines. Preserve concise findings in `docs/DESIGN_REVIEW.md`.
