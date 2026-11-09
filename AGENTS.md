# Portfolio maintenance

## Start here: durable project memory

- Read `docs/PROJECT_MEMORY.md` for the complete November 9, 2026 owner handoff: approved copy, dates, metrics, ordered case-study labels, design guidance, and interaction requirements.
- Read `docs/PROJECT_STATUS.md` for the inspected GitHub baseline, confirmed differences, and remaining reconciliation work. Distinguish required behavior from what is currently implemented.
- Read `docs/DEPLOYMENT.md` before deployment work. This memory update alone does not authorize a website redesign, source synchronization, or publication.
- New explicit owner direction takes precedence. The November 9 handoff supersedes older prose-story guidance, Analytics-placeholder claims, and the stale p99 claim. Preserve the verified p95 below 300 ms claim.
- Keep memory in Git. After substantive work, update status with evidence, remaining work, and deployment outcomes; update the canonical memory when the owner changes direction. Never store credentials or rely on scratch paths as durable memory.

## Repository and deployment

- This repository contains Sundar Reddy's portfolio source. Preserve the existing root README.md; the owner maintains it.
- Primary hosting: GitHub Pages, published by `.github/workflows/portfolio.yml`. Obtain its actual live URL from the successful `github-pages` deployment. Expected project path: https://sundarreddyr.github.io/about-me/.
- Legacy mirror for old resumes: https://sundar-reddy-portfolio.sundarreddy022.chatgpt.site/
- Existing Sites project: `appgprj_6ae46619f6508191b4ec6eaba8959134`.
- `.openai/hosting.json` preserves that identity and declares `dist` as the static output. Never create a replacement Site for an update.
- This is a buildless HTML/CSS/JavaScript site. `dist/` is the editable source, not generated output. There is no dependency installation or compilation step.
- Site changes pushed to main automatically validate and deploy to GitHub Pages once the repository Pages source is set to GitHub Actions. Pull requests validate without publishing. GitHub pushes do not deploy to the legacy ChatGPT Sites URL.
- GitHub main is the durable working repository. Fetch it before editing. The November 9 handoff reports newer portfolio changes in Sites-managed source that were not verified synchronized here. Inspect both current versions before reconciliation; preserve unrelated work and never overwrite newer files blindly. GitHub and Sites have separate histories and deployment flows.

## File map

- `dist/index.html`: page layout, introduction, skills, career, contact, and project cards.
- `dist/projects.js`: project content stored in `window.portfolioProjects`.
- `dist/app.js`: project dialogs, theme, navigation, and illustrative animations.
- `dist/style.css`: shared styling, responsive layouts, and dark mode.
- `dist/assets/Sundar_Reddy_Resume.pdf`: downloadable resume. Replace only with an owner-supplied or approved revision.
- `dist/assets/icons/`: local icons and their source/license notices. Retain the notices.
- `dist/favicon.svg`: site icon.

## Content and design

- Preserve the established light bento style, per-project gradients, wordmarks, dark mode, and responsive layout.
- Keep changes within the requested project or section. Do not rewrite other projects as a side effect.
- Use concise relevant keyword lines on project cards, in plain text: the exact five lines are in `docs/PROJECT_MEMORY.md` section 8. Do not use the rejected outcome sentences or filler pills.
- Case studies use actual unordered lists with bold lead labels or concise useful headings. Preserve the story order and engineering reasoning; the exact labels and facts are in memory section 9. Lead real problems into solutions and outcomes; describe new features directly without inventing a problem.
- The current GitHub baseline still renders `story` as paragraphs. Treat this as pending reconciliation, not the desired format. Keep Analytics' optional `technicalNote` disclosure and meaningful implementation detail.
- Preserve Home → Career Journey → Skills → Contact, the exact title "The Journey so far", and skills heading "The tools behind the work". Resume stays a separate PDF download action. Do not restore removed navigation or redundant section labels.
- Preserve hero copy, the Sundar Reddy wordmark, SR favicon, both themes and persistent theme selection. Keep requested gentle gradients, project wordmarks, clear contrast, readable supporting text, and consistent SVG actions.
- Use "Trumetric.AI (part of Specbee)" linked to `https://www.specbee.com/`. Exclude "Team of 5" from portfolio copy; Finance's team of three remains supported. Exact career dates and role groupings are in memory section 7.
- Product sketches are illustrations, not screenshots or working products. Keep "View project" plus an SVG diagonal arrow visible on every card, including on hover and keyboard focus.
- Keep implementation detail in the Analytics replication disclosure. Do not link the likely `bakwc/mysql_ch_replicator` repository unless the owner or reliable project evidence confirms it is the library used.
- Analytics facts: joined Livine in 2022 as second SWE; 300+ reports/dashboards/touchpoints over 1.5 years; MySQL analytical reads moved to ClickHouse while transactions stayed on MySQL; migration latency >1 minute → 2–3 seconds.
- The separate ~60 seconds → ~5 seconds reporting-service metric must not be attributed to that migration.
- Versioned records for updates/deletes were this implementation's choice, not a claim that ClickHouse cannot update/delete.
- Keep unsupported metrics, cost savings, and unverified claims out. Ask for missing facts when necessary.
- Preserve accessibility: native dialog behavior, keyboard closure/focus restoration, readable contrast, accessible controls, reduced-motion support, and mobile layout.

## Local verification

For website changes, run from the repository root (documentation-only changes need whitespace, link, and scope checks):

```sh
node --check dist/app.js
node --check dist/projects.js
python3 scripts/check_site.py
git diff --check
python3 -m http.server 8000 --directory dist
```

Open the displayed local URL in an available browser. Check the changed card and dialog, replication disclosure when relevant, closing/reopening, light/dark themes, and a narrow mobile width. Confirm the resume and local assets still load. Stop the preview server when finished. In a managed Sites environment, follow its preview instructions instead of starting a separate server.

## GitHub Pages CI/CD

Read `docs/DEPLOYMENT.md` for initial setup, Actions status, and rollback. Push approved site edits to main; wait for validation, Pages deployment, and live file verification. Report the actual deployed URL and run URL. The separate ChatGPT mirror check only compares files and reports drift; it does not publish and is not a guarantee of mirror freshness. Do not modify the root README.md.

## Keeping the legacy ChatGPT Site updated

1. Keep both sites updated when making portfolio changes through ChatGPT while Sites hosting remains free. Do not set up paid hosting or overages. Free hosting is documented through December 31, 2026; recheck current official terms before relying on this date. At/after January 1, 2027, stop automatic/assumed legacy publishing and ask the owner about continuing the mirror. Keep the old site available; do not delete, redirect, or disable it without a request.
2. Use the available Sites integration and read its current workflow instructions. Fetch the existing project's current audience and latest source and obtain fresh repository access. Never store credentials in files, commits, URLs, logs, or documentation.
3. Open the Sites-managed source checkout through the supported workflow. GitHub and Sites have separate Git histories; do not force-push one over the other.
4. Reconcile the newest source in both locations, then apply the approved portfolio files to that checkout. Preserve `.openai/hosting.json` and existing configuration. Keep the owner-maintained GitHub README.md unchanged.
5. Validate, push the matching Sites source, package static output, save a version, and deploy that exact version through Sites. Preserve the existing audience; the initial export was public.
6. Confirm deployment success and report the live URL. Report verification limits accurately. If repository access fails, report the exact error and distinguish committed changes from published changes.
7. Ensure the final site changes are also committed to GitHub so subsequent agents start with the same content. Avoid force pushes and resolve concurrent changes before updating a branch.

If Sites is unavailable, editing, local preview, and GitHub commits can still proceed. Clearly say the live Site has not been updated. Do not imply a successful GitHub Pages deployment also published the legacy mirror. No hourly synchronization task is configured; the owner requested the same deployment step and the supported Sites integration cannot run in GitHub Actions.
