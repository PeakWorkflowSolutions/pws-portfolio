---
name: bid-generator-skill
description: Generates client-ready contractor bids that reproduce a specific business's own template and voice exactly, changing only the job-specific content (scope, price, materials, timeline, client info). Use this skill whenever building, adapting, or troubleshooting a bid/proposal generator for a contractor business, whenever the user mentions "bid generator," "proposal generator," extracting a business's bid style, or onboarding a new contractor client for PWS's bid generation offer. Status: Complete (v1).
---

# Bid Generator Skill — Contractor Bid Generation System

## Status: Complete (v1)
The items under Design Decisions below are per-client calibration points
handled during onboarding, not blockers.

## System Overview

This system takes a contractor business's existing bids and a new job's
details, and produces a new bid that is **visually and structurally
identical** to their existing template — same layout, headers, formatting,
branding — with only the job-specific content swapped in. It is explicitly
NOT a plain-text draft the contractor reformats; the output should be the
literal, final piece, ready to send.

Two layers:

1. **Style extraction** (done once per contractor business, from sample bids)
   — captures both their *voice* (tone, phrasing, detail density) and their
   *literal template* (layout, section order, formatting, branding). See
   `references/style-extraction-guide.md`.
2. **Bid generation** (done per new job) — takes the style/template profile
   plus a project intake and produces the finished bid. See
   `references/generation-workflow.md`.

## Non-negotiable design decisions (do not deviate without user confirmation)

- **Output = final template, not plain text.** The contractor's layout,
  headers, and formatting must be reproduced exactly, every time. Only
  content fields change per bid.
- **Never invent facts.** Scope, pricing, materials, and timeline come only
  from what the user/contractor provides for that specific job. The skill
  may borrow *voice and structure* from the style profile, but never
  fabricates project specifics to fill a gap.
- **Contractor accountability, not autopilot.** Every generated bid is a
  draft pending the contractor's own review and revision before it goes to
  a client. This is not something the skill sends on the contractor's
  behalf. See `references/review-checkpoint.md`.
- **Legal/warranty language is flagged, not rewritten.** See
  `references/legal-guardrail.md` — this is a firm policy, not a style
  choice.
- **Versioning uses before/after reference, not rule extraction.** See
  `references/versioning-approach.md`.

## When Building a New Client's Bid Generator

1. Read `references/bid-anatomy-residential-remodeling.md` first — it's
   the researched, industry-standard skeleton of what a complete
   residential remodeling bid contains (cover page, scope, pricing,
   timeline, payment schedule, terms/legal section, etc.). Use it as the
   comparison baseline: where a contractor's real samples match it,
   that's confirmation; where they diverge, that's a business-voice
   choice to capture in their profile, not an error to fix.
2. Read `references/style-extraction-guide.md` and work through it against
   2-3+ of the contractor's real sample bids to build their style/template
   profile.
3. Read `references/legal-guardrail.md` before generating any bid containing
   warranty, liability, indemnification, licensing/bonding, or
   payment-dispute language.
4. Read `references/generation-workflow.md` for the per-bid intake and
   generation steps.
5. Read `references/versioning-approach.md` once the contractor has sent
   revised versions of at least one generated bid back — this is how the
   generator improves over time.
6. Read `references/review-checkpoint.md` to see how the "pending review"
   marker should appear on every output.

## Delivery Architecture (how the client business actually uses this)

Decided: the contractor never interacts with Claude directly and never has
skill/project access. Access to the skill's instructions is the operator's
(Marcos's) IP and stays on the operator's account only.

Pipeline: **Google Form (private link, feels like the contractor's own
tool) → Zapier → Claude API call using this skill's instructions → finished
proposal delivered back automatically** (email or shared Drive folder).
No manual step required from the operator once built. This mirrors the
Form → Zapier → Claude → delivery shape already used in
`lead-capture-skill` — same pattern, applied to bid generation instead of
lead capture.

This is why recurring revenue holds up: the client is paying for a
pipeline they can't see into and don't own, not for a tool they could
rebuild themselves.

## Future / Not Yet In Scope (v2+)

- **Automated materials pricing lookup.** A researched idea, deliberately
  deferred: the contractor submits a plain materials list (item + qty,
  maybe preferred supplier), an agent looks up current pricing from a
  specified retailer/supplier site, and the priced results feed directly
  into the generation step — no manual Sheet-building or re-submission.
  Real caveats to address when this is scoped: retailer sites vary in how
  automatable they are, product-matching accuracy isn't guaranteed, and
  pricing output should be treated as a draft the contractor checks, same
  as everything else in this system. Do not build until the core generator
  is working and proven on a real client's actual bids.

## Design Decisions & Per-Client Calibration

1. **Minimum sample bid count** — Calibrated per client. Industry research
   (`bid-anatomy-residential-remodeling.md`) describes the standard shape
   of a bid but can't tell us how much one contractor's real bids vary
   from each other. Starting assumption: 2-3 minimum, more if job types
   vary widely. Confirmed per client from their real samples.
2. **Document format contractors actually use** — RESOLVED. Final
   client-facing deliverable is overwhelmingly a finished PDF regardless
   of drafting tool (Word, Excel-based estimate, or dedicated proposal
   software). Still confirm the *source* template format per client, since
   what the generator edits from may differ even when output converges on
   PDF. See `bid-anatomy-residential-remodeling.md` for detail.
3. **Trade-specific adaptation** — SEEDED (v2 expansion). This skill's current
   research (`bid-anatomy-residential-remodeling.md`) is scoped to
   residential remodeling specifically. A `trade-adaptation-guide.md` for
   other trades (roofer, plumber, etc.) is the v2 expansion and follows
   the same adaptation-guide pattern as `lead-capture-skill` once other
   trades have been researched or onboarded.

## Key Principle

Style and template extraction, legal guardrails, versioning, and generation
must all stay consistent with each other for a given client business — a
change to one (e.g. the contractor corrects their template) should prompt a
check of whether the others (e.g. the style profile) need updating too.
