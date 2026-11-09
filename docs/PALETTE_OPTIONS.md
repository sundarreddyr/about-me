# Portfolio palette and material review

Local comparison: `http://127.0.0.1:8000/palette-options.html`.
No final palette has been chosen or deployed. Main local preview currently uses
soft depth with the existing gunmetal/fog/orange base; comparison choices do not
change that source palette or persist a site-wide preference.

| Direction | Base colors | Accent | Character |
| --- | --- | --- | --- |
| Paper & Cobalt | `#f8fafc`, `#182332` | `#365fd1` | Clearest professional default |
| Sand & Coral | `#f3ecdf`, `#173b3c` | `#d26356` | Warmer and more expressive |
| Graphite & Jade | `#f3f7f5`, `#202c29` | `#1c8267` | Quiet, composed alternative |
| Orange & Aqua | Owner's five-color Coolors palette | Orange/aqua | Most playful; extra deep teal for readable text/dark surfaces |

Coolors source:
https://coolors.co/palette/ff9f1c-ffbf69-ffffff-cbf3f0-2ec4b6

The first three use two bases plus one accent with derived tints. The owner
explicitly relaxed the color limit for the Coolors option and restored original
technology-logo colors as a brand-asset exception across all options.

Controls compare Flat / Soft depth and Career & projects / Full page / Case
study. Each direction renders the same source HTML, JS, facts, and typography in
paired light/dark frames. Full page retains the navigation, skills, and contact;
focused comparison omits the sidebar so the career content is easier to compare.
Frame themes are intentionally fixed to their labeled modes.

Neumorphic treatment: raised project/contact/skills surfaces, inset search/nav/
theme controls, one directional light source, neutral readable text, visible focus,
and nearly flat reading dialogs. Avoid embossed text or raised nested cards.
Small reading text stays neutral; Coral/Jade/Aqua raw accents do not satisfy
normal-text contrast on their light bases. Cobalt's dark accent is lightened.
Aqua's light controls use deep-teal boundaries/focus.

Full-component review used the invoked Impeccable and Taste guidance plus the
owner's constraints. User-authored content, illustrations, keyword middots,
layout, and native dialogs take precedence over generic plugin defaults.
The Impeccable context engine was unavailable; existing AGENTS, memory, source,
and prior verified screenshots supplied context directly.

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
