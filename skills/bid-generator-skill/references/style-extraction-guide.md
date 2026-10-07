# Style & Template Extraction Guide

Goal: turn 2-3+ of a contractor's real sample bids into a single profile
that captures both how they write and how their document literally looks,
so future bids can be generated as finished pieces, not drafts.

Before working through real samples, read
`bid-anatomy-residential-remodeling.md` — it's the researched baseline for
what a complete residential remodeling bid contains. Use it as a checklist
while reading each sample: note which of the 8 standard components are
present, which are missing (missing ≠ wrong — some contractors legitimately
skip a company-bio section on repeat-client jobs, for instance), and where
their content differs from the researched baseline. Differences are the
actual style signal worth capturing; matches just confirm the sample is
a normal, complete bid.

Work through every sample bid provided and answer these for each, then
look for what's consistent across all of them (that becomes the profile)
versus what varies (flag it — likely job-type-dependent, not a style
choice).

## 1. Literal template (this is what makes output "final," not a draft)

- What file format is this bid in? (Word, PDF, Canva export, etc. — see
  Open Research Item #2 in SKILL.md if this isn't yet known for a client)
- What's the exact section order? (e.g. cover/intro → scope → materials →
  timeline → pricing table → payment schedule → exclusions → warranty →
  signature)
- Branding elements: logo placement, color scheme, fonts, letterhead
- Any tables? What do the columns look like (e.g. item / qty / unit price /
  total)?
- Page numbers, footers, contact info placement

## 2. Voice

- Formal or plainspoken? Read a paragraph aloud — does it sound like a
  contract or like the owner talking to a client?
- "We" (company voice) or "I" (personal)?
- Confidence/reassurance language — do they say things like "we stand
  behind our work" or "satisfaction guaranteed," or do they just state
  facts and let the work speak for itself?
- Sentence length and complexity — short and direct, or more explanatory?

## 3. Formatting habits (within sections, distinct from overall layout)

- Bullets vs. numbered lists vs. prose paragraphs
- How is pricing broken down — itemized line-by-line, or lump sum with a
  short scope description?
- How are change orders / contingencies phrased, if mentioned at all?
- **Pricing/materials table structure, specifically.** Some contractors
  build this table in a separate tool (e.g. a Google Sheet used as a
  materials/cost calculator) and paste the result into the proposal as a
  formatted table. When that's the case, treat the table's exact column
  structure (item / qty / unit price / total, grouped by room vs. flat
  list, subtotal placement, etc.) as its own style element to extract
  precisely — it may not match the formatting conventions of the
  surrounding narrative sections, since it comes from a different source.

## 4. Signature phrases

- Recurring openers (e.g. "Thank you for considering [Company] for...")
- Recurring closers (e.g. "We look forward to working with you")
- Any boilerplate reused bid to bid, word-for-word

## 5. Detail density

- How much do they explain vs. assume the client already understands?
- Does scope description read like a checklist or like a narrative?

## Output of this step

A profile document (per client business) covering all five areas above,
plus the original sample bids kept on hand as ground truth. This profile
feeds directly into `generation-workflow.md`. Anything inconsistent across
the samples should be surfaced to the contractor directly rather than
guessed at — e.g. "your last two bids use different warranty wording, which
should I treat as current?"
