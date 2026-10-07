# Versioning: Before/After Reference, Not Rule Extraction

## The approach

When a contractor revises a generated bid before sending it, store the pair
— the draft as generated, and the final version they actually sent. Do not
attempt to extract explicit rules or diff-summaries from these pairs.
Instead, pull the most relevant recent pairs in as **reference examples**
each time a new bid is generated, and let the generation step pattern-match
against them directly, the same way it draws on the original sample bids.

This was chosen deliberately over a "corrections log" that tries to codify
patterns into permanent rules — simpler to build and maintain, at the cost
of never fully "graduating" corrections into locked-in rules. That tradeoff
is intentional for now; revisit only if a specific correction shows up so
consistently that it's worth hard-coding into the style profile instead
(see `style-extraction-guide.md`).

## Practical constraints

- **Cap the reference set.** Use roughly the 3-5 most recent pairs, so the
  set doesn't grow unbounded and dilute into noise.
- **Prefer relevance over pure recency where possible.** A new roofing
  repair bid should pull from before/after pairs on similar-sized,
  similar-scope jobs over, say, a large one-off commercial job's edits.
- **No permanent rule-locking in this version.** The style profile itself
  stays mostly static (built once from the original samples in
  `style-extraction-guide.md`); before/after pairs are a rotating set of
  recent examples, not permanent amendments to that profile.

## What this requires from the client business

Both versions of a bid — as generated, and as actually sent — need to be
captured somewhere accessible for this to work. This isn't yet defined
mechanically (e.g. does the contractor forward the final version back, is
it pulled from their document tool) — flag this as part of onboarding a
new client until a standard mechanism exists.
