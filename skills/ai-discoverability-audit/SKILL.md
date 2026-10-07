---
name: ai-discoverability-audit
description: "Runs an AI Assistant Discoverability Audit (GEO/AEO) for a local service business — crawler access, llms.txt, content extractability, answer-shaped content, schema.org, NAP consistency, and live citation testing — output as a findings table + prioritized action list."
---

# AI Assistant Discoverability Audit (GEO/AEO)

## Purpose

Help local service businesses become accurately discoverable and citable by AI assistants. This means: their real business info (name, address, phone, hours, credentials) is consistent everywhere an AI might pull it from; their site has genuine, well-structured answer content instead of placeholder text; their site is technically accessible to AI crawlers; and gaps are diagnosed first, without alarmism, before any fixes begin.

This is a research/audit step only. Do not start fixing anything found without the user confirming scope first.

## Before starting: gather

- Client's full legal name as it should appear everywhere
- Business/brokerage name (and team name if different)
- Business address and phone number
- Primary website URL
- Any known profiles (website, social accounts, directory listings)

If this is a new business/client, suggest storing this audit's findings in a dedicated project (or a new doc within one) so the client's data stays separate from this reusable process — one project per business/client keeps things organized across multiple engagements.

## Checks to run

1. **Crawler access** — robots.txt allows AI bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
2. **llms.txt presence**
3. **Content extractability** — plain HTML vs. JS-locked, and whether pages actually contain real (not placeholder/template) content
4. **Answer-shaped content** — FAQ/direct-answer formatting an AI could extract and cite
5. **Schema.org structured data**
6. **Third-party profile consistency (NAP: name, address, phone)** across every platform found
7. **Live citation test** — actually query search/AI assistants and report what surfaces, including low-quality directory sites if found

## Tooling caveats — expect these every time

- Many agent/brokerage sites block automated fetching (robots.txt). If a fetch is blocked, do not try to bypass it — report the item as "can't verify automatically" and note it needs a manual PageSpeed Insights run (pagespeed.web.dev) and a manual view-source check.
- Google Maps listings require JavaScript, so GBP claim status usually can't be checked remotely. Confirm via a live Google search (a "Claim this business" prompt means unclaimed) or by having the client log into business.google.com directly.
- Don't report something as a confirmed gap without a second look — content lower on a page can be missed by a fetch tool. If corrected later, note the correction openly rather than quietly editing it away.

## Output format

1. A findings table (one row per item, each with a Result and a one-line Reason).
2. A prioritized action list split into three groups: client can do directly, needs their team/web developer/brokerage (flag rather than treat as a deliverable for the individual), and technical fixes (tackled last).
3. A sources list of every URL actually checked, noting anything attempted but not accessible.

Tone: factual and non-alarmist — this is a diagnostic, not a sales pitch.

## Verification

- Every "confirmed gap" has been checked at least twice (initial fetch + a second look) before being reported as confirmed.
- Every checked URL appears in the sources list, including ones that were blocked or inaccessible.
- The action list is split into the three ownership groups, not left as one flat list.
- No fixes have been started — scope confirmation from the user/client comes first.