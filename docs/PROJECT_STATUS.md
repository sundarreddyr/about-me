# Portfolio project status

Updated: 9 November 2026. Current scope: local preview for owner review.
GitHub `sundarreddyr/about-me` is the sole source of truth for both deployments.

## Baseline and current source

- Local checkout: `about-me` in the Portfolio workspace.
- Fetched GitHub main before editing; HEAD and origin/main were
  `b6882ad429321664b33804d4bb2a5341d3055f54` (project memory commit).
- The working tree was clean before this website task. The approved visual
  baseline is the existing GitHub Pages design, whose source predates the newer
  Sites-only design changes described in the historical handoff.
- Current edits are local and uncommitted for review. No site changes have been
  pushed to GitHub, published to Pages, or synchronized/published to Sites.
- Latest historical Sites reference supplied by the owner: version 25, source
  `9ed341f9b2c4075fe9f5439067287fe58c40d30c`, saved version
  `appgprj_6ae46619f6508191b4ec6eaba8959134~appgver_4b14799f71948191a88c3dcedfea1415`,
  succeeded deployment `appgdep_6af123fdd4b08191b30aab64d7918485`.
  These historical references were not reverified in this local-only task.

## Local changes ready for review

- Converted all five case studies from paragraph stories to actual unordered
  lists with bold lead labels. Real constraints precede decisions/results within
  relevant bullets; ownership and new features are described directly.
- Added two supported hero highlights to each project using one shared layout.
  Preserved story order, core facts, p95 below 300 ms, the Analytics replication
  disclosure, and useful product/walkthrough links.
- Retained GitHub's card illustrations and existing layout, including Finance's
  business dashboard. Did not port the newer Sites workflow illustrations or
  workflow-card redesign.
- All five card titles use the same component and typography. Removed decorative
  stars, plus signs, and arrows attached to titles. Card actions retain the
  approved circular plus treatment, now using a consistent SVG.
- Removed Trumetric's unique category subtitle. Added its inner role rail and
  explicit Apr 2026 — Present role dates. Company tenure ranges stay on one line;
  narrower layouts place the full range above the company content.
- Updated `AGENTS.md` with design consistency rules. Added the latest owner
  override to `docs/PROJECT_MEMORY.md` and clarified GitHub authority and the
  deployment contract in `docs/DEPLOYMENT.md`.
- README, resume, hosting identity, and Actions workflow are unchanged.

## Latest palette, typography, and attention pass

- Owner requested two base colors plus one accent (four colors absolute maximum),
  three font sizes preferred/four maximum, two families maximum, authentic AWS
  branding, and a separate senior design review.
- Selected gunmetal `#242c30`, fog silver `#f2f1ed`, molten orange `#c64f2d`.
  All CSS color literals are these three primitives. Other treatments derive
  through semantic tokens; dark mode swaps the neutral roles. No fourth color
  was needed. Original technology silhouettes are displayed monochromatically.
- Four size tokens: 12/16/24/32 px. DM Sans body and Manrope headings. Removed
  Georgia/monospace usage and simplified illustration microcopy to fit the scale.
- Removed redundant section labels and reduced hero-to-career whitespace, bringing
  employer, role, and first project cards into the initial desktop view.
- Replaced five repeated company footers with the owner's three keyword phrases
  per project. Reserved footer space beneath illustrations; wrapping uses plain
  text, not pills. Restored `assets/icons/aws.svg` in place of the cloud glyph.
- Retained Finance's dashboard and Grower's three scene concepts. Inactive Grower
  scenes hide immediately to prevent overlapping labels. Shortened the projection
  graphic so Standard/Prediction/Current weight labels fit within the phone with
  8px of clearance in the checked layout.
- An independent design-director agent reviewed desktop, narrow, and light/dark
  reading views. Its fixes addressed small orange-label text contrast, scene
  crossfade overlap, and the clipped third projection legend entry.
- Independent design review approved the result for local owner review, with no
  remaining design blocker identified. Physical-device testing and publication
  remain separate.
- Replaced accumulated active instructions with concise `AGENTS.md` and canonical
  `docs/PROJECT_MEMORY.md`. Preserved the complete historical handoff under
  `docs/archive/PORTFOLIO_HANDOFF_2026-11-09.md`; it is not a routine startup read.

## Verification

- JavaScript syntax validated for both scripts using Node's `vm.Script` parser
  in the available Node tool runtime. A `node` command was unavailable in the
  shell; no packages were installed.
- Project data evaluated: bullet counts 5/6/5/4/5, with two highlights per project.
- `python3 scripts/check_site.py` passed: local assets, unique IDs, PDF signature,
  project-relative paths, and existing Sites identity.
- `git diff --check` passed.
- Local HTTP responses were 200 for the page, both scripts, stylesheet, favicon,
  and PDF resume.
- All five dialogs opened with expected content and no undefined text. Verified
  close, Escape, backdrop dismissal, focus restoration, and scroll locking.
- Inspected light/dark themes, Analytics technical disclosure, and desktop,
  intermediate, and narrow browser layouts. Desktop card titles share 24px
  Manrope styling; company dates occupy one line at checked desktop/intermediate
  widths. Checked page and dialog for horizontal overflow.
- Latest design pass checked 1440px desktop, the tighter 1140px desktop breakpoint,
  and 390px narrow layouts. Rendered UI used only 12/16/24/32 px and the two font
  families. All five keyword footers contained exactly three phrases and fit their
  cards; titles cleared their actions and Grower/Finance art cleared footers.
- Verified only one Grower scene is visible; inactive scene labels are hidden.
  Checked the complete projection legend within its screen bounds.
- These are browser viewport checks, not comprehensive physical-device testing.

## Preview and release follow-up

Local preview: `http://127.0.0.1:8000/` (Python static server serving `dist/`).
Keep the server available during the owner's local review. It can be restarted
from the repository root with:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

After owner review, commit the approved changes to GitHub and deploy the same
revision to both hosts. GitHub Pages already has Actions deployment and live-file
verification. The available Sites integration requires a separate supported
publication step; automatic Sites publication from Actions remains unimplemented
because no supported unattended deployment credential/API is exposed. Do not
claim the mirror-check job deploys Sites or that a release to only one host
completed the owner's dual-deployment requirement.

Follow `docs/DEPLOYMENT.md` for the release. Record GitHub SHA, Pages run/result,
Sites source SHA, saved version, deployment result, and verification limits
separately. Do not import Sites design edits over the approved GitHub source.

## Whole-component neumorphism and palette pass

The owner requested Impeccable + Taste, three professional palette options plus
an extra Coolors option, authentic logo colors, neumorphism, and review of all
earlier components. The comparison is `dist/palette-options.html` with paired
light/dark frames, Flat/Soft depth, focused/full-page/case-study views.

Consolidated `dist/style.css` into tokens, layout, components, states, and responsive
rules; moved illustrations to `dist/illustrations.css`. Archived the previous
cascade under `docs/archive/style-before-neumorphism.css`. Original brand colors
are restored; AWS has a dark-background wordmark variant retaining its orange.
Replaced plus card actions with open arrows, unified contact/close/stack controls,
flattened stack categories, clarified illustration microcopy, and improved the
education hierarchy. Facts and case-study order are preserved.

Analytics is GitHub Pages only. Source and public Pages HTML had no tracker;
Sites public HTML returned HTTP 403. No reliable historical numbers were found.
`analytics-config.js` has `measurementId: null`; collection stays disabled pending
the owner's actual GA4 ID. A Node VM test verified scope gates, opt-outs, timing,
and hidden-tab exclusion without network traffic. See `ANALYTICS.md`.

All changes remain local and uncommitted. No deployment was performed.

Final full-component review verified the current Paper/Cobalt capture is correctly
labeled and found one comparison-only text-selection contrast issue. Selection
now uses the main site's neutral-safe rule. The reviewer identified no further
design blocker. All five dialogs, stack details, contact actions, light/dark
reading, 390px layout/keyword/art bounds, four palette mode pairs, Flat/Soft depth,
full navigation, and paired case-study modes were checked. The comparison itself
also stacks without horizontal overflow at 390px. No physical-device or live-GA4
verification was performed.

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
