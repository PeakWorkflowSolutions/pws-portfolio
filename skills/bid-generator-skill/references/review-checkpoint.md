# Review Checkpoint

Every bid this skill generates is a draft pending the contractor's own
review and revision. The skill does not send bids on the contractor's
behalf, and accountability for the final content sits with the contractor
— this is a deliberate design choice, not a limitation to work around.

## How this shows up in output

Every generated bid should include a clear, visible note — at the top of
the document or as a cover note alongside it, not buried — stating
something to the effect of:

> This bid was drafted for your review. Please check scope, pricing, and
> the legal/warranty section (flagged separately) before sending to the
> client.

This should never be silently omitted, even once the generator is well
tested and reliable. The point isn't to hedge against errors — it's that
final accountability for what goes to a client is explicitly the
contractor's, every time.

## Relationship to the legal guardrail

Legal/warranty sections get their own distinct flag (see
`legal-guardrail.md`) in addition to this general review note, since they
carry higher stakes than a scope description or price line.
