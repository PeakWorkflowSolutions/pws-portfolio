# Real Estate Team Automation Suite (Client #1)

**Status:** Complete (Phase 1 delivered and paid).
**Client:** A real estate team lead and her two agents (anonymized).

My first paying client. The engagement is where the Builder process, the contract templates, and the consent/access form all came from.

## Discovery

The client sent a five-item wishlist after our first meeting. I ranked it with her by priority and by how much real detail each item had, and built the one with enough detail first.

| # | Wishlist item | What I delivered |
|---|---|---|
| 1 | Transaction intake → calendar deadlines | **Built and delivered.** [intake-calendar-sync](../intake-calendar-sync/) |
| 2 | Website, branding, reviews, AI search visibility | **AI search visibility audit built and run**, became the reusable [`ai-discoverability-audit`](../../skills/ai-discoverability-audit/) skill. Four-option web presence plan for the team. |
| 3 | Lead generation for two agents with zero leads of their own | Solution design: 13 channels ranked cheapest-first. Top picks reuse the intake form and calendar pipeline already built. |
| 4 | Checks and balances on handwritten letter campaigns | Solution design: three options, from a tracking sheet to automated alerts to a dashboard. Letters stay handwritten by design. |
| 5 | Expired-listing follow-up for one agent | Solution design: form → sheet → call reminder, with an AI step to parse inconsistent MLS alert emails (the one part that needs judgment, not fixed parsing). |
| + | Unify many similar checklists | Solution design: three options, standardize, one conditional master, or auto-generate from intake. |

## How the engagement ran

1. **Discovery** with a fixed question set so answers are comparable across clients ([discovery framework](../../systems/discovery-framework.md))
2. **Paperwork.** Services agreement with a scope-of-work exhibit, plus a Client Consent & Access Authorization listing exactly which systems I'd touch and why. Generated from the [contract generator](../contract-generator/).
3. **Scoped access.** Form, response sheet, and calendar shared separately, each one only after it was needed.
4. **Build, test with dummy data, rebuild against real data.**
5. **Deliver** with instructions for a real test entry.
6. **Remaining items split into separate standalone agreements** (website, letter + expired-listing workflow, lead generation) so each can be priced and timed on its own, in the client's own priority order.

## Pricing approach

- First-client rate in exchange for a testimonial and resale rights, so the build becomes reusable proof
- Discount presented verbally, never printed in the contract
- One-time builds: 20% at signing, 80% on completion
- Recurring work (monitoring, lead-gen tuning) in its own retainer section with autopay and 30-day cancellation

## What carried forward

- [`pws-builder`](../../skills/pws-builder/) skill, specced from this engagement
- [`pws-client-paperwork`](../../skills/pws-client-paperwork/) skill and the [contract generator](../contract-generator/)
- [`ai-discoverability-audit`](../../skills/ai-discoverability-audit/) skill
- A referral path into the client's brokerage
