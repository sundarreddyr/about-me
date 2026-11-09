# Vercel Web Interface Guidelines review

Source: https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
Reviewed 9 November 2026. Scope: main portfolio and palette comparison.

- dist/palette-options.js - fixed forced two-column focused previews at narrow widths.
- dist/palette-options.js - removed frozen Grower scene and blanket animation suppression.
- dist/app.js - added an accessible pause/resume control for continuous decorative previews; reduced-motion and visibility/dialog guards retained.
- dist/style.css - limited soft depth to selected controls; restored white-ish neutral surfaces.
- dist/style.css - contained Grower phone at narrow widths and allowed long keywords/titles to wrap.
- dist/index.html - added font-origin preconnects; existing semantic controls, image dimensions, labels, skip link, and native dialogs retained.

Owner-requested exceptions: preserved the exact hero copy, existing project
illustration concepts, static professional dates, and original brand-logo colors.
This is a targeted code/browser review, not a claim of comprehensive WCAG or
physical-device certification.

Browser verification: all three new palettes rendered in light/dark with no project-card shadow in selective mode. At 390px, the focused preview uses one column, reports no horizontal overflow, and all five keyword footers and Grower phone bounds fit. Pause/resume control responded correctly. Existing low-contrast aqua body links keep neutral text with accent underlines.

## Strict correction review — 9 November 2026

- illustrations.css: absolute caption/phone geometry could collide. Replaced with separate grid columns; no rotation into copy. Artwork is clipped between the title and footer.
- index.html / app.js: changed files retained old asset URLs. This allowed mixed cached HTML, CSS and scripts. Entry assets and the imported illustration stylesheet now use content hashes; CI rejects stale hashes and live checks include actual versioned URLs.
- illustrations.css: search prefix could wrap while the query truncated. Prefix is nonwrapping; decorative search action is icon-only, leaving space for the query.
- style.css: mobile role dates and progression labels wrapped differently by title length. Both now use one explicit stacked pattern. Android text autosizing is normalized while pinch zoom remains enabled.
- Previous checks verified outer card dimensions, not internal copy/art collisions or the URLs used by warm browser caches. Those checks were insufficient.

Deployment limitation: GitHub Actions deploys Pages. The current Sites connector has no supported unattended public deployment credential/API for Actions. Publish the same GitHub dist source through Sites for each release; never describe its drift-check job as dual-host deployment.
