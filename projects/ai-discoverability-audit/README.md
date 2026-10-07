# AI Search Discoverability Audit (GEO / AEO)

**Status:** Complete. Run on a client's real estate site and on my own site.

## What it is

A repeatable audit that checks whether a local business can be found, and correctly cited, by AI assistants (ChatGPT, Claude, Perplexity, Google AI Overviews) as well as regular search.

## The 7 checks

1. **Crawler access.** Does `robots.txt` allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended?
2. **`llms.txt`** present?
3. **Content extractability.** Real HTML content, or JS-locked / placeholder text?
4. **Answer-shaped content.** FAQ and direct-answer formatting an AI can lift and cite
5. **Schema.org structured data**
6. **NAP consistency.** Name, address, and phone identical across every profile found
7. **Live citation test.** Actually ask search and AI assistants and report what comes back

Output is a findings table (result + one-line reason per check), an action list split by **who owns the fix** (the owner, their web team or brokerage, or technical), and a sources list including anything that couldn't be checked.

## Rules

- Diagnose first. No fixes until the client confirms scope.
- A gap is only reported as confirmed after a second look.
- If a site blocks automated fetching, report it as "can't verify automatically." Don't work around it.
- Factual, not alarmist. It's a diagnostic, not a sales pitch.

## Case: my own site

Findings on pwslocal.com:

- A **brand-name collision**: an unrelated software company with a near-identical name was showing up in Google's AI Overview for my business name.
- **NAP mismatch**: the site footer listed a different city than my Google Business Profile and social pages.
- No schema, no `robots.txt` guidance, no `llms.txt`, no links out to verified profiles, no phone on the site.
- An open local search niche with zero local competitors for one of my target queries.

Fixes then shipped on the site: JSON-LD `ProfessionalService` and `FAQPage` schema, an FAQ section written in answer format, and Open Graph and canonical tags. See [pwslocal-website](../pwslocal-website/).

## Case: client #1

Run against a real estate agent's brokerage-hosted site. The brokerage's `robots.txt` blocked automated fetching, so the audit split findings into what the agent controls herself vs. what only the brokerage's corporate web team can change.

Skill: [`skills/ai-discoverability-audit`](../../skills/ai-discoverability-audit/)
