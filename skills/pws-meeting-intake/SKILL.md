---
name: "pws-meeting-intake"
description: "Turns a recorded client meeting into a structured intake ready for the paperwork skill — pulls the Wispr Flow transcript, checks it against a fixed Scope/Timeline/Pricing/Payment/Access checklist, and publishes an interactive artifact so Marcos can fill in whatever the meeting didn't cover before it ends."
---

# PWS Meeting Intake

Bridges a recorded client meeting straight into `pws-client-paperwork`'s "gather real inputs" step, instead of Marcos hunting through notes afterward. Works from Wispr Flow's Meeting Recorder — a real transcript, not a summary.

## Trigger

- Marcos just finished (or is finishing) a client meeting recorded in Wispr Flow, and says something like "check my Wispr Flow notes" or "pull the meeting details" in that client's project chat.
- A client's project needs its intake checklist built or re-checked before the paperwork skill can run.

## What this collects (the only things that vary per client)

Everything else in `pws-client-paperwork`'s template is fixed. This skill exists to answer exactly five things, matching that skill's own "gather real inputs" step:

1. **Scope of Work** — one line item per distinct automation/deliverable (name, plain description, timeline if given, price if given)
2. **Estimated Timeline** — overall engagement timeline, not just per-item
3. **Pricing** — whatever was actually discussed, per line item and/or total
4. **Payment Method & Details** — how they'll pay, one-time vs. recurring, anything about invoicing they asked for
5. **Access Needed** — which of the client's own systems/accounts PWS will need into to do the work (a Google Form, an Instagram account, a calendar, a POS system, etc.) — this feeds the Consent & Access Authorization, not just the agreement

## Process

1. **Find the right meeting.** Use `search_meetings` (Wispr Flow), filtered by recency and/or `attendee_emails` if Marcos gave you the client's email already. If more than one recent meeting could match, don't guess — show Marcos the candidates (title, time, attendees) and confirm which one before proceeding.
2. **Pull the real transcript.** Call `get_meeting` with `view_transcript` on the confirmed meeting. If `has_transcript` is false or the transcript isn't ready yet, say so plainly and stop — don't proceed on the notes summary alone, and don't fabricate content for a transcript that isn't there yet. Offer to retry once Wispr Flow finishes processing it.
3. **Extract against the five-item checklist above, nothing else.** For each item, pull only what the client or Marcos actually said, quoting or closely paraphrasing the transcript. Never infer a number, a system name, or a scope item that wasn't actually mentioned — if it wasn't discussed, that field stays open, exactly the same "leave it blank, don't guess" rule `pws-client-paperwork` already runs on.
4. **Publish an interactive checklist artifact.** Load the `artifact-capabilities` skill first, since this needs to save what Marcos types, not just display text. Build it as: each of the five items as its own section, whatever the transcript already answered shown pre-filled (with a quick note it came from the meeting), anything not covered shown as an open field Marcos fills in himself. Use the artifact's data-persistence capability so his answers save as he types, not just in the moment the page is open.
5. **Marcos fills the gaps live** (during meeting wrap-up/small talk, or right after, depending on whether the transcript is available mid-call or only after the recording stops; the skill supports both).
6. **Once every item has a real answer (or an explicit "still pending, follow up"),** hand the completed set directly to `pws-client-paperwork`'s gather-inputs step — same document, same client, no re-asking Marcos for anything already captured here.
7. **Save the completed intake to that client's own project** (not the general PWS project), same convention as `pws-website-intake-demo`.

## Principles carried over from the rest of the Builder pattern

- Never fabricate a number, system name, or scope item the meeting didn't actually cover.
- If a field is still genuinely undecided after the meeting (pricing not finalized, access not yet clear), mark it as pending rather than forcing an answer — `pws-client-paperwork` already handles blank fill-lines correctly.
- Confirm which meeting you're pulling from before reading it, if there's any ambiguity.

## Verification

- [ ] The correct meeting was confirmed with Marcos before its transcript was used, if more than one could match
- [ ] Every checklist answer traces to something actually said in the transcript, nothing inferred or guessed
- [ ] The artifact actually persists Marcos's typed answers (tested, not assumed)
- [ ] Access Needed lists specific real systems/accounts, not generic categories
- [ ] Any field left open is marked as pending, not silently skipped
- [ ] The completed intake was saved to the client's own project, not the general PWS project
- [ ] The completed set was hooked directly into `pws-client-paperwork` with no re-asking Marcos for anything already captured