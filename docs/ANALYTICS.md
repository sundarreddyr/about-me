# GitHub Pages analytics

Current state: instrumentation is prepared locally, but collection is disabled.
The owner has not supplied a GA4 Measurement ID. Nothing has been deployed.
Historical traffic has not been recovered or estimated.

## Scope and activation

- Only `sundarreddyr.github.io/about-me/` and its `index.html` entry can load GA4.
- Localhost, the ChatGPT Sites host, other paths, palette comparisons, and their
  srcdoc frames are excluded. Do Not Track / Global Privacy Control opt-outs
  also disable collection.
- Put the owner's actual public `G-…` Measurement ID in
  `dist/analytics-config.js`. It is currently `null`, so no Google analytics
  request is made. Do not invent an ID or use someone else's property.
- After local review, publish the approved GitHub revision, verify Realtime or
  DebugView in the owner's GA4 property, then validate reports on real visits.
  Do not promise retrospective measurements from newly installed tracking.

## Reports

GA4's standard reports provide users, sessions by day, pageviews, traffic sources,
and average engagement time. Use sessions for daily visits and active users for
an estimate of distinct visitors; these are different metrics.

Custom events prepared for this single-page portfolio:

| Event | Properties | Meaning |
| --- | --- | --- |
| `section_view` | `section_name` | Section heading enters view, once per page load |
| `navigation_click` | `section_name` | Internal section link clicked |
| `project_open` | `project_id` | A project case study actually opens, including deep links |
| `section_engagement` | `section_name`, `active_seconds` | Foreground time outside project dialogs |
| `project_engagement` | `project_id`, `active_seconds` | Foreground time in an open project dialog |
| `resume_download` | none | Resume link clicked, not proof the download finished |
| `contact_click` | `link_type` | Email, LinkedIn, or X link clicked |
| `stack_open` | none | Full-stack details opened |

Register `section_name`, `project_id`, and `link_type` as event-scoped custom
dimensions, plus `active_seconds` as an event-scoped custom metric in seconds.
Then create reports for project opens, section navigation clicks, and summed
engagement seconds by section/project. Keep hostname available as a report
filter even though the loader already restricts collection to GitHub Pages.

Custom timing excludes hidden/unfocused tabs and stops after 60 seconds without
pointer, keyboard, touch, or scroll activity. It is an engagement estimate, not
proof of attention. Standard GA4 engagement uses Google's own definition and
will differ. Small fractional timing remainders carry to the next flush.

Custom events contain only fixed section/project identifiers and contact method.
They do not include form contents, keystrokes, email addresses, or clicked URLs.
Google signals and ad-personalization signals are disabled in the configuration.
There is no session replay or public traffic-counter UI.

## Verification completed

A local Node VM harness verified the hostname/path/config/opt-out gates without
network access, one eligible loader, 15 seconds of section time, 10 seconds of
project time, and exclusion of hidden-tab time. Live GA4 collection and reporting
remain unverified until a real ID is configured and the site is published.

Official references:
- https://developers.google.com/analytics/devguides/collection/ga4/events
- https://support.google.com/analytics/answer/11109416
