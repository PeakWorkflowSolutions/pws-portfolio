# Bid Anatomy: Residential Remodeling & Home Improvement

Researched reference skeleton for what a complete, professional residential
remodeling bid/proposal contains. This is the industry-standard baseline to
compare a contractor's real sample bids against during style extraction —
where their samples match this, it confirms the pattern; where they
diverge, that's a deliberate business choice to capture in their profile,
not an error to "correct."

Sourced from contractor-facing proposal guides, state consumer-protection
statutes (NY, MA, CA), payment-schedule industry guides, scope-of-work
writing guides, construction law sources on warranty/change-order/concealed-
conditions clauses, NAHB's standardized contract catalog, and current
contractor proposal software practice (JobTread, Buildertrend, CoConstruct).

## The 8 recurring components

Nearly every professional residential remodeling proposal contains these,
in some order:

1. Cover page
2. Company bio / credibility section
3. Visual documentation (photos, plans, renderings)
4. Scope of work
5. Pricing
6. Project timeline
7. Payment schedule
8. Terms and conditions (legal/warranty section)

## 1. Cover page

- Company name, logo, contact information
- Client's name and project address
- Date of submission
- Project title
- Clean, consistent formatting — this is a credibility signal before the
  client reads a single line of content

## 2. Company bio / credibility section

- License number, insurance policy info (often legally required, see
  `legal-guardrail.md`)
- Years in business, relevant credentials
- Before/after photos of comparable past work — high-value, low-effort
  trust builder cited repeatedly across sources

## 3. Visual documentation

- Floor plans, renderings, or sketches where relevant to project size
- More common/expected on larger remodels (kitchens, additions) than small
  jobs (a single-room repair)

## 4. Scope of work — the highest-stakes section

This is where most disputes originate if done poorly. Standards:

- **Task-level detail, not category-level.** "Install flooring" is not a
  scope item. "Install 800 sq ft of 3/4-inch engineered oak hardwood
  flooring in living room, dining room, and hallway per manufacturer
  specifications, including acclimation, underlayment, installation, and
  transition strips at doorways" is.
- **Materials specified by name, brand, model, color, size, and grade**
  wherever they affect cost or quality.
- **Allowances** for undecided selections must state a dollar amount and
  explicitly define how overages/underages are handled (client pays
  difference via change order if over; credited if under). Vague
  allowances are a leading cause of billing disputes.
- **Inclusions AND exclusions**, explicitly. What's NOT included matters
  as much as what is.
- **Homeowner responsibilities**, if any (clearing rooms, pet access,
  decision deadlines, who pulls permits).
- Broken down by trade/room for larger remodels; can stay compact for
  small single-scope jobs.

## 5. Pricing

- Either itemized line-by-line (item / qty / unit price / total) or lump
  sum tied to the scope description — matches however the contractor's
  own samples present it.
- Some contractors show overhead & profit as its own transparent line
  rather than folding it invisibly into item prices — treat this as a
  business-voice choice to detect from their samples, not a default.

## 6. Project timeline

- Estimated start and completion dates
- Key milestones (demolition, rough-in, finishing phases) for anything
  beyond a small job
- Remodels specifically should account for a phase order: demolition →
  conditions get uncovered → rebuild stages — timelines that don't reflect
  this sequence are a red flag in the source material, not just a
  formatting choice

## 7. Payment schedule

Three common structures — the contractor's samples will show which they
use:

- **Deposit + final** — most common for smaller residential jobs. Deposit
  (10-30%+, subject to state caps) covers materials/permits; balance due
  on completion.
- **Milestone-based** — payments tied to completion of specific phases
  (e.g. framing, rough-in, drywall). Common for mid-size remodels.
- **Completion-based** — tied to overall percentage progress (25/50/75%)
  rather than specific tasks. Requires more tracking/verification, less
  common on residential work.

A typical residential remodel draw pattern seen across sources: ~10%
deposit → 15-30% at rough framing/structural → 20-30% at
rough-in/mechanical → 15-20% at drywall/finish stages → 10% final on
completion. Treat as a reference shape, not a rule — the contractor's own
samples define their actual schedule.

**Deposit caps are state-regulated and vary sharply** — e.g. California
caps deposits at $1,000 or 10% of contract price (whichever is less);
Nevada similarly caps at 10%/$1,000; Maryland caps at one-third of
contract price. This is exactly the kind of detail that belongs in
`legal-guardrail.md` territory — confirm current caps per state, don't
assume a percentage from one contractor's samples applies elsewhere.

## 8. Terms and conditions (legal/warranty section)

See `legal-guardrail.md` for the handling policy. Contents typically
include:

- **License/insurance disclosures** — often legally mandated language,
  not optional boilerplate
- **Change order clause** — process for modifying scope, and how price/
  schedule are affected when it happens
- **Concealed/unforeseen conditions clause** — standard remodeling-specific
  language stating the bid was based on conditions visible at time of
  bidding; if hidden conditions are found once work starts (rot, old
  wiring, structural issues), contractor stops work, documents it, and
  issues a change order rather than absorbing the cost or proceeding
  without disclosure
- **Warranty/workmanship clause** — typically a callback warranty
  (commonly ~1 year for workmanship/materials on remodel-scope work,
  though some states impose longer statutory warranties on specific
  systems), with explicit exclusions for damage from abuse, unauthorized
  modifications, improper maintenance, or normal wear and tear
- **Right-to-cancel notice** — legally required in most states within a
  set window after signing; a missing notice can let the homeowner
  rescind the contract entirely
- **Subcontractor disclosure** — a growing regulatory trend (e.g.
  California's 2026 requirement) requiring an explicit statement of
  whether subcontractors will be used, with specific mandated wording

## Why this validates the legal-guardrail policy

State requirements aren't just varied, they're specific and mandatory —
exact bolded warning statements, specific checkbox language, disclosure of
financing relationships, cancellation-notice wording. A generator that
paraphrases these sections "in the contractor's voice" risks quietly
dropping legally required exact language, which can make sections
unenforceable or void deposit protections entirely. This is why
`legal-guardrail.md` requires verbatim carry-over rather than stylistic
rewriting — confirmed necessary by this research, not just a cautious
default.

## How this feeds SKILL.md's design decisions

- **Document format** — largely resolved: regardless of what tool a
  contractor drafts in (Word, Excel-based estimate, dedicated proposal
  software), the client-facing deliverable is overwhelmingly a finished
  PDF. Strong signal for the generation step's target output format —
  still confirm per client, since the *source* template format (what the
  generator edits) may still vary even if final delivery converges on PDF.
- **Trade adaptation** — this file is remodeling/residential-specific by
  design and should seed `trade-adaptation-guide.md` (v2)
  rather than starting that guide from nothing.
- **Minimum sample count** — calibrated per client. Industry research
  describes the standard *shape* of a bid; how much a single contractor's
  real bids vary is measured from their own samples during style
  extraction (2-3 minimum).
