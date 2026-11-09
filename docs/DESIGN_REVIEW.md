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
