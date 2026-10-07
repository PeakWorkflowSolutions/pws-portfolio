---
name: "pws-cold-call-prep"
description: "Use before Marcos's daily cold calls: pulls today's due leads from the Notion Prospects database and builds a researched, honest call script for each."
---

# PWS Cold Call Prep

Builds the morning call-prep packet for Marcos's outbound cold calls (currently real estate agents at a local brokerage, but works for any leads in the Notion Prospects database). Pulls whoever is due today, runs a passive research audit on each, and writes a call script per lead in Marcos's actual voice, not generic sales copy.

## Trigger

Marcos asks something like "next steps on the agents," "who do I need to call today," "pull today's leads," or asks for call prep/scripts before he starts dialing.

## Step 1: Pull today's leads from Notion

Data source: the Prospects database, collection id `<PROSPECTS_DATA_SOURCE_ID>` (fetch it fresh with `notion-fetch` if this ID ever changes or 404s).

**Known gotcha:** the display property name ("Follow-up Date") is NOT the queryable SQL column name. Notion's SQL layer expands date properties into `"date:<Property Name>:start"`, `"date:<Property Name>:end"`, and `"date:<Property Name>:is_datetime"`. Querying `WHERE "Follow-up Date" = ...` will fail with "no such column." Always query `"date:Follow-up Date:start"` instead. If unsure of any column name, call `notion-fetch` on the collection URL first to read its live `<sqlite-table>` schema before writing SQL.

Query pattern:
```sql
SELECT Name, Company, Phone, Email, Status, "Next Step", "Preferred Method", Source,
       "date:Follow-up Date:start" AS FollowUp
FROM "collection://<PROSPECTS_DATA_SOURCE_ID>"
WHERE date("date:Follow-up Date:start") = date('now')
ORDER BY Name
```

Use `mcp__Notion__notion-query-data-sources` in SQL mode with this query (adjust the WHERE clause for "this week" or a specific date if Marcos asks for something other than today).

## Step 2: Run the 7-point passive audit per lead

Source the checklist from the project's `claude/pws-marketing-pain-points-reference.md` (and the live Claude Docs page it points to) — don't reinvent it. The seven checks:

1. Website ownership (own site vs. brokerage/template profile only)
2. Site speed/mobile-friendliness (visual impression, note if a live PageSpeed check is still needed)
3. AI discoverability (does the name surface cleanly and consistently in search)
4. Booking button (any online scheduling, or just phone/email)
5. Google/Zillow/Realtor.com reviews (count, rating, recency — or genuinely not found)
6. Social activity (Facebook/Instagram, how recent, what kind of content)
7. Contact form (real form vs. just a mailto/phone)

Plus two items that always get flagged as "unknown, call-only" and never guessed: response time to social DMs, and what happens on a missed call.

For more than one or two leads, dispatch one research subagent (Agent tool) per lead in parallel rather than researching serially — each gets the same 7-point brief with that lead's name, company, and phone. Tell each subagent explicitly: WebSearch/WebFetch only, no fabrication, report "not found/unverifiable" honestly rather than guessing, keep the report under ~400 words as a findings table.

If two leads are visibly linked (a couple, a team), tell each subagent about the other so it can note joint branding without duplicating research effort or fabricating the other person's presence.

## Step 3: Build the packet

One markdown file, one section per lead, each with:

- **What's real** — a short honest summary of the audit findings, in Marcos's plain voice, not a sales pitch.
- **Lead with (2 of these, not all)** — pull 2 talking points max from what was actually found, per the "lead with 2-3, keep the rest in your back pocket" rule from the pain-points doc. Never list every finding as a talking point.
- **Call opener** — a short, warm, conversational script (see voice rules below). This is what actually gets said on the call, not a summary of research.
- **Voicemail fallback** — reuse the PWS standard voicemail script verbatim from `claude/pws-marketing-pain-points-reference.md` (the MIT-stat opener) unless Marcos has since updated it — check the reference doc for the current version rather than hardcoding it here.

End the packet with an honest gaps section: anything that couldn't be verified (blocked fetches, no data found) so Marcos doesn't accidentally state something as fact that was never confirmed.

## Call opener voice rules (read `claude/marcos-voice-personality-profile.md` before writing these)

- Sound like he already knows them a little: open with a specific, genuine observation pulled from real findings, not a generic "I noticed your website..." line.
- Friendly and conversational, first name early, casual phrasing ("gotta say," "I'll be straight with you," "not gonna lie").
- Ellipses are fine for natural pacing, no em dashes ever.
- Never invent personal knowledge of the lead. Every claim in the opener has to trace back to something the audit actually found — the "already knows them" feel comes from specificity and warmth, not fabricated familiarity.
- Short. A call opener is a few sentences, not a paragraph. End with a soft ask for a minute of their time, not a hard pitch.
- No discount talk, no hype words ("revolutionary," "game-changing"), no overselling.

## Step 4: Deliver

Send the packet via SendUserFile. This is working call-prep material for that day, not a revisit-later reference doc, so it doesn't need to be persisted as an artifact unless Marcos asks to keep it.

## Verification

- [ ] Every finding traces to an actual search/fetch result; anything not found is labeled "not found/unverifiable," never guessed
- [ ] DM response time and missed-call handling are flagged as call-only unknowns for every lead, never stated as fact
- [ ] Each call opener pulls from real findings only, sounds warm/familiar per the voice rules, and stays short
- [ ] Talking points per lead are capped at 2, not a dump of every finding
- [ ] SQL query used the expanded `"date:<Property>:start"` column form, not the display property name