# Portfolio project status

Inspected: 9 November 2026. Scope: establish durable project memory from the
owner-supplied complete handoff. Website reconciliation is a subsequent task.

## Evidence and source boundaries

- Repository: `https://github.com/sundarreddyr/about-me`, branch `main`.
- Inspected source baseline: `3d8117f69e524a4fe202dc45eba5c416115447e0`
  ("Tell remaining project stories through concise first-person narratives").
- A fresh clone was clean before the memory edits. Existing `AGENTS.md`, website
  source, `docs/DEPLOYMENT.md`, hosting manifest, and Pages workflow were read.
- The repository is a buildless static site. Editable source is `dist/`;
  `.openai/hosting.json` retains the existing Sites project and static directory.
- The Pages workflow publishes on relevant source/configuration changes to
  `main`; its path filters exclude these Markdown memory changes. A memory-only
  commit does not trigger that workflow.
- The latest supplied handoff reports Sites version 25, source commit
  `9ed341f9b2c4075fe9f5439067287fe58c40d30c`, and succeeded deployment
  `appgdep_6af123fdd4b08191b30aab64d7918485`.
  Saved version:
  `appgprj_6ae46619f6508191b4ec6eaba8959134~appgver_4b14799f71948191a88c3dcedfea1415`.
  These are handoff-reported references; this memory task did not independently
  fetch current Sites-managed source, check for later versions, or verify either
  live deployment.

## Confirmed GitHub differences from the November 9 handoff

These observations describe the baseline above, not the desired final website.

| Area | Inspected GitHub source | Approved direction in project memory |
| --- | --- | --- |
| Case studies | Five populated `story` arrays; `dist/app.js` maps them to paragraphs | Ordered bullet pointers with bold labels, preserving engineering detail |
| Card keyword lines | The five approved keyword lines are absent from cards | Exact per-project keyword lines in section 8 |
| Card actions | `View project` uses a plus glyph | Consistent SVG diagonal arrow |
| Company attribution | Repeated card footers / company labels remain | Remove repetition within the company group |
| Section labels | Career Journey and Skills chips remain | Remove redundant chips |
| Skills heading | `The tools behind the work.` includes a terminal period | Exact heading `The tools behind the work` |
| Agentic visual | Numbered file inventory and context badge remain | Meaningful repository artifacts without numbering or filler badges |
| Finance visual | Miniature dashboard remains | Clear ERP purchase/sale event → journal entry illustration |
| Case-study visuals | Shared dialog renderer has no larger Search/Grower/Finance workflow illustrations | Labeled illustrations after the bullet story |
| Team size | Agentic and Trusearch metadata still include `Team of 5` | Remove this detail; retain Finance's team of three |

Already present in the inspected GitHub baseline: populated Analytics case study,
Trusearch's **p95 below 300 ms**, Home/Career Journey/Skills/Contact navigation,
career above skills, resume PDF action, grouped Livine roles, native dialog,
theme persistence, and reduced-motion handling. Presence in source is not a
claim of comprehensive browser or device verification.

Theme control placement near the name remains an earlier preference, not a
completed change: the inspected implementation places it in the sidebar footer.

## Memory work completed

- Preserved the complete supplied handoff in `docs/PROJECT_MEMORY.md`, including
  verified facts, exact label order, all 40 design pointers, historical release
  references, and future preferences.
- Updated `AGENTS.md` to load memory and status first and use the latest approved
  bullet-story and keyword-card direction. Preserved existing deployment,
  accessibility, factual, and owner-maintained README rules.
- Recorded this baseline and the confirmed gaps so future agents do not confuse
  approved direction, existing GitHub code, and historically published Sites code.
- Changes are limited to agent instructions and memory documents. `README.md`,
  website files, resume, hosting manifest, workflow, and deployment instructions
  remain byte-for-byte unchanged from the inspected baseline.

## Next website task

1. Fetch current GitHub main and check Git status and instructions again.
2. Obtain fresh access to the existing Sites project and inspect its latest source
   and release history. Compare it with current GitHub, using the supplied version
   25 references only as a historical starting point.
3. Reconcile changes deliberately, preserving unrelated and newer work. Do not
   replace GitHub history with Sites history or assume the handoff is a full diff.
4. Validate changed website behavior in both themes and responsive layouts,
   including hover/focus, dialog keyboard behavior, links, and resume download.
   Full mobile-device verification remains outstanding from the supplied handoff.
5. Follow `docs/DEPLOYMENT.md` and the current Sites workflow for authorized
   publication. Record GitHub commit, Pages run/live verification, Sites source
   commit, saved version, deployment result, and any verification limits separately.

For future updates, replace stale status entries with dated evidence. Keep the
owner's latest requirements in `docs/PROJECT_MEMORY.md`; do not accumulate
contradictory instructions or describe unperformed checks as completed.
