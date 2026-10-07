---
name: "pws-call-log-update"
description: "Use when Marcos reports how a sales call went (in any wording, any time of day) so the lead's record in the Notion Prospects database gets updated."
---

# PWS Call Log Update

Takes Marcos's plain-language report of how a call went and turns it into an accurate update to the lead's row in the Notion Prospects database. This is the companion piece to pws-cold-call-prep: that skill reads from Notion in the morning, this one writes back after calls happen.

## Trigger

Marcos says anything describing how a call, voicemail, or contact attempt went — "talked to Sam, she wants pricing first," "no answer on Jordan, left a voicemail," "Alex is a hard no," etc. Can happen any time, in any chat, not tied to the morning prep session. Also triggers if an evening check-in scheduled task pings him and he replies with the day's results.

## Data source

Same Prospects data source as pws-cold-call-prep: collection id `<PROSPECTS_DATA_SOURCE_ID>` (re-fetch via `notion-fetch` if stale). Schema properties relevant here: `Name` (title), `Company`, `Status` (select: Lead, Contacted, Meeting scheduled, Pitch/Demo Scheduled, Meeting held, Won, Lost/Cold), `Next Step` (text), `Last Contact` (date), `date:Follow-up Date:start` (date — use this expanded column name for SQL, never the display name "Follow-up Date", see pws-cold-call-prep for the full gotcha).

## Step 1: Identify the lead

Match Marcos's message to a specific row by name (first name alone is usually enough given the small active list, but confirm against the full name in Notion if there's any ambiguity, e.g. two leads with the same last name). If genuinely ambiguous, ask which one rather than guessing.

## Step 2: Map what he said to real field values

Don't over-infer. Only set what he actually told you:

- **Status** — map his description to the closest real option ("talked to her" → Contacted; "she wants a demo" → Pitch/Demo Scheduled; "hard no" → Lost/Cold; "we met" → Meeting held; etc). If it's ambiguous which status fits, ask rather than guess.
- **Last Contact** — set to today's date whenever he describes an actual contact attempt (call connected, voicemail left, text sent). A pure no-answer with no voicemail is still worth logging as a contact attempt unless he says otherwise.
- **Next Step** — write a short, concrete next action in his own words/tone, not generic boilerplate ("send pricing sheet," "call back Thursday," "none, marked cold").
- **Follow-up Date** (`date:Follow-up Date:start`) — only set this if he gave or implied a real timeframe ("follow up next Tuesday," "check back in two weeks"). Don't invent a date if he didn't give one; leave it as-is or ask.

## Step 3: Write the update

Use Notion's page update tool (`notion-update-page`) on that lead's specific page — not a bulk query. Confirm the page URL/ID first via a quick query or fetch if you don't already have it from the morning's run.

## Step 4: Confirm back

After writing, tell Marcos in one short line what got updated (e.g. "Updated Sam: Contacted, follow-up set for Oct 6, next step is sending pricing"). Don't re-explain the whole record, just the delta.

## Verification

- [ ] The correct lead was identified, not guessed when two names were close (e.g. two leads who share a last name)
- [ ] Only fields Marcos actually gave information for were changed; nothing was inferred or invented
- [ ] Follow-up Date was only set when he gave or clearly implied a timeframe
- [ ] The confirmation back to Marcos states exactly what changed, not a generic "updated!"