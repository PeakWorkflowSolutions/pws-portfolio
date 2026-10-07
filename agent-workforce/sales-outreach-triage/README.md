# Sales & Outreach Triage

**Status:** Complete. Running in production.
**Role in the org:** Director 2 of the Agent Workforce.

## What it does

Watches the business inbox. For every new email it decides **sales vs. not sales**. For sales emails it writes a reply in my voice, using whatever the CRM already knows about the sender, and saves it as a **Gmail draft**. It never sends anything.

Human-in-the-loop is a design choice, not a limitation. In relationship-driven local sales, one bad automated message can burn a whole referral chain.

## Version 1: Zapier (6 steps)

1. **Gmail, New Email Matching Search**
   `in:inbox -from:me -subject:"Daily Project"`
   (Excludes my own mail and the Operations Manager's daily email, so the two automations never loop into each other.)
2. **Notion, Query Data Source (Advanced)**, Prospects, no filter, "Successful if no results found" = True
3. **Anthropic (Claude), Send Message.** Inputs: sender, subject, plain-text body, plus the full prospect list as JSON. Required output format:
   ```
   TRIAGE: sales   or   TRIAGE: not-sales
   DRAFT REPLY: [only if sales, ready to send as-is]
   ```
4. **Filter by Zapier.** Continue only if the response contains `TRIAGE: sales`
5. **Formatter by Zapier, Split Text.** Separator `DRAFT REPLY:`, take the second segment. This pulls the reply body out of Claude's structured response.
6. **Gmail, Create Draft Reply.** Thread ID and recipient mapped from Step 1. Drafts only.

Note: Step 6 was deliberately not tested in the editor. "Create Draft Reply" writes a real draft into the live inbox, and the sample record was a notification email.

## Version 2: Claude scheduled task

Same logic, rebuilt as a Claude agent so it can read the whole thread instead of one message. Polling replaces the instant trigger, so I added a dedup mechanism:

- A Gmail label, **PWS-Triaged**, marks every thread once it's been processed.
- Each run searches `in:inbox -label:<PWS-Triaged> after:<fixed build date>`. The fixed date keeps it from ever reaching back into old history.
- Every processed thread gets the label regardless of outcome. If a run hits an error on a thread, it skips labeling so the thread is retried next run.

Full prompt: [claude-agent-prompt.md](claude-agent-prompt.md)

**Test:** First run hit 9 unlabeled threads, all notifications and spam. Expected result was 9 labeled, 0 drafts. Verified exactly that by reading each thread directly.

**Gotcha found:** Gmail search with `label:<custom label ID>` doesn't reliably return results even when the label is present. Verify labeling with direct thread lookups, not search.
