# Notion Operating System

**Status:** Complete. The single source of truth every agent reads from.

One Notion teamspace runs the business. The Operations Manager, Sales & Outreach Triage, Cold Call Prep, Weekly Post Ideas, and Website Lead Capture all read or write these databases.

## Databases

### Prospects (CRM)
| Property | Type | Notes |
|---|---|---|
| Name | title | |
| Company | text | |
| Status | select | Lead, Meeting Scheduled, Pitch/Demo Scheduled, Meeting held, Contacted, Won, Lost/Cold |
| Next Step | text | The specific next play for this person |
| Follow-up Date | date | Drives the daily "People to Contact Today" list |
| Idea Pitched | text | |
| Preferred Method | select | In-person, Text, Phone, Coffee (channel preference only) |
| Source | select | Website, Referral, Outbound (by list) |
| Email, Phone | email, phone | Structured fields so automations have somewhere to write |
| Linked Project | relation | Two-way with Projects |

No Notes field, by design. Narrative context lives in strategy conversations, not the CRM.

### Projects
| Property | Type |
|---|---|
| Name | title |
| Stage | select: Idea / Planning / In Progress / Complete / Archived |
| Timeline | date |
| Lead | person |
| Linked Prospect | relation |
| Tasks, Docs, Meetings | relations |

### Tasks
| Property | Type |
|---|---|
| Name | title |
| Status | status: Not started / Up next / In progress / Done |
| Project | relation |
| Due date | date |

### Pages
- **Daily Notes:** Date / Yesterday's Work / Today's Priorities / New Thoughts
- **Weekly Review:** Week Of / What Worked / What Didn't / Next Week's Focus

## Outbound scheduling trick

Outbound call lists are loaded as Prospect rows with `Follow-up Date` spread **4 per day** across the week. The Operations Manager's daily briefing already surfaces everyone due today with click-to-call links, so the call list runs itself with no new infrastructure.

Rules that came out of real use:
- Work one list (one brokerage, one niche) to completion before starting the next.
- Never list a shared office line as if it were a personal number.
- Records taken out of rotation get their follow-up date cleared, not deleted, so history is kept.

## Schema lesson

Notion's `status` type and `select` type need different filter JSON. Zapier's advanced query doesn't validate property names or types, so a wrong one fails silently. Always check filters against the live schema.
