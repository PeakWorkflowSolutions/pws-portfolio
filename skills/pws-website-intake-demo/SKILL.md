---
name: "pws-website-intake-demo"
description: "Runs the structured intake-to-demo pattern for a PWS website-build client: a fixed discovery questionnaire, a completeness check, and an auto-drafted first demo site built from the client's real answers with honest placeholders."
---

# PWS Website Intake → Demo

The repeatable front end of any PWS website-build engagement, proven on a yoga-studio client's website build (Sept 2026). Two real, tested pieces: a structured discovery questionnaire, and a first demo site auto-drafted straight from the client's real answers. A third piece, a completeness check, is added here because skipping it is exactly what went wrong on the first real client.

## Trigger

A new PWS website-build client needs their discovery intake sent, or a client's intake answers have come back and the first demo draft needs building.

## Step 1: Discovery questionnaire

Fixed section structure, reusable across business types, content within each section adapted to the specific client:

1. About You (the person/owner)
2. Their Business or Service (what they do, who for)
3. Offerings (classes, services, products, pricing if they'll share it)
4. Look & Feel (desired vibe, any existing logo/brand colors, photos or reference sites they like)
5. Trust & Extras (testimonials, policies, credentials, anything that builds confidence)
6. Wrap-Up (extra pages wanted, the one action they most want a visitor to take, timeline)

Offer it in whichever form fits the client: a written doc, an interactive web version, or a native Google Form linked to a Sheet. Whichever is chosen, it must actually reach the client complete. Building a live Google Form through browser automation is not reliable, on the first client build it silently stopped after section 3 and nobody caught it until she'd already answered the broken version. If building a live form this way, verify every single section actually published before sending it out, don't assume the build succeeded.

## Step 2: Completeness check (mandatory, not optional)

Before treating any client's intake as done: confirm every section of the questionnaire is actually live and was actually answered. If a client's answers came back against an incomplete form, don't proceed as if nothing's missing, identify exactly which questions were never asked and follow up directly before building the demo. Never guess at what a client would have said for a question they were never actually asked.

## Step 3: Auto-drafted first demo

Once real, complete answers exist, build the first demo site directly from them:

- Use the client's own words verbatim for anything they provided (bio, service descriptions, pricing).
- For anything not yet provided (address, logo, brand colors, real photos, booking platform), mark it honestly as a placeholder in an on-page draft notice. Never invent a fact the client hasn't given you, this includes not defaulting to assumptions like "has a physical location" when that hasn't been confirmed.
- Get this baseline draft reviewed and correct (structure, factual accuracy, their own wording) before moving into any visual/creative exploration. Visual direction should build on a confirmed-accurate baseline, not run in parallel with it.

## Principles carried over from the Builder pattern

- Snapshot or version anything before overwriting it, especially once real client-facing exploration starts.
- Confirm before anything irreversible (deleting a draft, a concept, client data).
- Label an explicitly non-automated placeholder as exactly that (e.g. a mailto-based booking form) rather than letting it pass as more than it is.

## Delivery

Save the completed intake answers and the demo draft's location to the client's own project. Log the batch (what was asked, what came back, what's still a placeholder) to the master build log.

## Verification

- [ ] Every questionnaire section actually reached the client, confirmed, not assumed
- [ ] Any section the client answered without seeing (a broken form) is flagged and followed up on directly, not silently treated as complete
- [ ] The demo draft uses the client's own words verbatim, nothing invented
- [ ] Every unconfirmed fact (address, logo, photos, booking platform, business structure) is marked as an honest placeholder, not guessed at
- [ ] Baseline draft is confirmed accurate before visual/creative exploration begins