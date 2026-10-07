# Contractor Bid Generator

**Status:** Complete (v1).

## Problem

Small contractors lose hours every week writing bids by hand. Generic AI tools produce plain text the contractor still has to reformat, and they don't sound like the contractor.

## What it does

Produces a finished bid that is **visually and structurally identical** to the contractor's own template (same layout, headers, branding, voice) with only the job-specific content swapped in: scope, price, materials, timeline, client info.

## Two layers

1. **Style extraction** (once per contractor). From 2 to 3 of their real sample bids, capture both the voice (tone, phrasing, detail density) and the literal template (section order, formatting, branding).
2. **Bid generation** (per job). Style profile + job intake → finished bid, ready for the contractor's review.

## Delivery architecture

```
Private Google Form (feels like the contractor's own tool)
        │
        ▼
     Zapier
        │
        ▼
Claude API call with the bid-generator instructions
        │
        ▼
Finished proposal delivered back (email or shared Drive folder)
```

The contractor never touches Claude directly. The instructions stay on my side, which is what makes it a recurring service instead of a one-time tool.

## Guardrails

- **Never invent facts.** Scope, pricing, materials, and timeline come only from the job intake.
- **Contractor reviews every bid** before it goes to a client. Every output carries a review marker.
- **Legal language is flagged, never rewritten.** Warranty, liability, indemnification, licensing, and payment-dispute language is carried over verbatim from the contractor's own samples.
- **Improves from real edits.** Versioning compares the generated draft against the version the contractor actually sent, instead of trying to extract rules.

## Research behind it

A researched anatomy of a residential remodeling bid (cover page, scope, pricing, timeline, payment schedule, terms) is the baseline. Where a contractor's samples match it, that's confirmation. Where they differ, that's their voice to preserve.

## Files

Full skill with all reference docs: [`skills/bid-generator-skill`](../../skills/bid-generator-skill/)

## v2 roadmap

Automated materials pricing: contractor submits a plain materials list, an agent looks up current pricing from a chosen supplier, and the priced list feeds straight into generation.
