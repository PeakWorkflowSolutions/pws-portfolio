# Colonial Lawn & Garden: Operations Hub (Mockup)

**Status:** Clickable mockup for a pitch. Sample data only, no backend. Nothing here is connected to real systems yet.

A single place where every role at a Yakima landscaping company does its daily work: crews in the field, managers, the equipment shop, reception, and HR.

![Preview](preview.png)

Open [index.html](index.html) in a browser. It runs from one file and saves demo changes in that browser only. **Reset demo** restores the sample data.

## What each role sees

| Role | Screen | What it does |
|---|---|---|
| Technician | Phone app | Today's route, client details and site notes, the services the client paid for as a checklist, clock in / clock out per job, personal timesheet, report broken equipment |
| Manager | Dashboard | Crews on site right now with live timers vs. estimate, jobs done, hours logged, a "needs attention" feed (equipment down, unreturned voicemails, jobs running over), week schedule by tech, schedule/reassign jobs |
| Shop / Mechanics | Ticket board | New → In Progress → Waiting on Parts → Resolved, repair log per ticket, equipment roster with status that updates from tickets |
| Reception | Call log | Calls and voicemails with recording, transcript and AI summary, filed by receptionist ID (REC-01, REC-02…), full-text search across transcripts, mark voicemails returned |
| HR | Onboarding | New hires with paperwork + training checklists templated by role, progress per person |

## The demo story (how to pitch it)

The pieces are connected, which is the main selling point:

1. Technician tab → open a job → **Clock in**. Manager tab → it's live with a running timer.
2. Technician → **Report equipment issue** (mark it "down"). Shop tab → the ticket is there; the mower shows *Down* on the roster and on the manager's attention feed.
3. Reception → search "sprinkler" → the voicemail transcript with the match highlighted.
4. HR → check off items → progress updates.

## Architecture for the real build (draft)

```
Phone system (records + transcribes) ──webhook──▶ Calls table ──▶ Claude: summary, tags, client match
Tech phone app ──clock in/out, task checks──▶ Jobs + Timesheets tables ──▶ Manager dashboard
Tech app / office ──report issue──▶ Tickets table ──▶ Shop board (+ text to shop lead if "down")
HR ──new hire──▶ Onboarding checklist from role template ──▶ e-sign docs, training sign-offs
```

**Automation (fixed steps, no judgment):** clock in/out, schedule, ticket routing, checklists, progress math, filing calls under receptionist ID.
**Agent layer (Claude judgment):** call/voicemail summaries, tagging (new lead vs. existing client, service type), matching callers to client records, flagging voicemails that need a callback today.

## Open questions before any quote

These decide the stack. Don't pick tools until they're answered.

- What do they use **today** for scheduling, invoicing and payroll? (QuickBooks? Jobber? paper?) If they already pay for field-service software, connecting to it may beat replacing it.
- What **phone system** do they use? Recording and transcription should come from the phone provider (most VoIP systems offer it), not be built from scratch.
- How many techs, trucks and receptionists? Do techs all have smartphones?
- Payroll: does clock in/out need to feed payroll directly, or is it for job costing only?
- Which onboarding documents and trainings do they actually use today? The checklist in the mockup is a reasonable starting template, not their real one.

## Compliance notes (verify before building)

- **Call recording:** Washington requires consent from everyone on the call (RCW 9.73.030). Every recorded call needs an announcement. The mockup transcripts open with one.
- **Pesticide application:** applying pesticides for hire in WA requires a WSDA license. It's shown as a role-based training item.
- **Heat / smoke:** WA L&I has outdoor heat exposure and wildfire smoke rules for outdoor workers. They're in the training template.
- Employee records (I-9s, IDs) and call recordings are sensitive. The real build needs per-role access control (a tech shouldn't see HR files).

## Sample data

All names, addresses and phone numbers (555-01xx) are made up. Street names are real Yakima streets so it looks local.
