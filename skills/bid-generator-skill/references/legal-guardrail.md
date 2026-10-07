# Legal Guardrail: Flag, Don't Freely Rewrite

This is a firm policy decision, not a style preference — do not deviate
without explicit user confirmation.

## The rule

Any section of a bid containing warranty, liability, indemnification,
licensing/bonding claims, or payment-dispute terms must be carried into the
new draft **verbatim** from the contractor's original sample bid — not
rephrased "in their voice," even if it reads stiffer than the rest of the
document.

## How it should appear in output

Mark these sections visibly in the generated bid, e.g.:

> [LEGAL LANGUAGE — CARRIED OVER UNCHANGED, CONFIRM APPLIES TO THIS JOB]

This tells the contractor to actively double-check the language still fits
this specific job — state law may have changed, the job size may cross a
licensing threshold, or the scope may include something their standard
warranty doesn't cover.

## If sample bids disagree with each other

If a contractor's sample bids contain inconsistent legal language (e.g.
different warranty terms bid to bid), do not guess which is current or
attempt to standardize it. Surface this directly to the contractor as
something they need to resolve with whoever handles their contracts.

## Why

Keeps the skill in "drafting assistant" territory and out of "giving legal
advice" territory. Pairs directly with the review checkpoint
(`review-checkpoint.md`) — the contractor's job is to actually read the
flagged section, not skim past it assuming the AI handled it.
