# Operations Manager (Accountability Manager)

**Status:** Complete. Running in production every weekday.
**Role in the org:** Director 1 of the Agent Workforce. The first agent built, and the one the rest of the system leans on.

## What it does

Every weekday morning it reads the business's Notion workspace (projects, tasks, and prospects), decides what actually needs attention today, and emails a short briefing:

- **Active Projects** in progress or planning
- **Tasks Needing Attention** that are overdue or due soon
- **Bottleneck(s)** it can infer from the data
- **Action Items Today**
- **People to Contact Today**, with each phone number rendered as a one-tap `tel:` link so the email doubles as a click-to-call list

Cold or lost prospects are filtered out so the briefing stays short.

## Two implementations

I built this twice, on purpose, and ran them side by side to compare.

| | Version 1: Zapier | Version 2: Claude scheduled task |
|---|---|---|
| Trigger | Schedule by Zapier, weekdays, 3:00 AM Pacific | Cron, weekdays |
| Data | 3 Notion "Query Data Source (Advanced)" steps | Notion MCP queries |
| Judgment | Anthropic "Send Message" step | The agent itself |
| Output | Email by Zapier | Gmail MCP `send_message` |
| Config | [zapier-build.md](zapier-build.md) | [claude-agent-prompt.md](claude-agent-prompt.md) |

## Bugs I found and fixed along the way

- **Duplicated email body.** The output field had been inserted four times back to back. Cleared and re-inserted once.
- **Wrong property name.** The Projects filter referenced `Status` and `Priority`. Neither exists on that database; the real property is `Stage`. Zapier's JSON filter doesn't validate property names, so it failed silently.
- **A filter that would have halted every run.** The Prospects step filtered on a status value that didn't exist, with "Successful if no results found" set to False. Every run would have stopped there. Fixed the filter and flipped the setting.
- **Timezone drift.** The email arrived at midnight with yesterday's date. The schedule trigger had no timezone override, so 7:00 AM was running in the account's default zone. Set `America/Los_Angeles` explicitly.
- **Markdown in an email.** Claude returned `**bold**` asterisks. Added an instruction to return HTML (`<b>`, `<ul><li>`), which renders cleanly in every mail client.

## Design notes

- Zapier is the plumbing (moves data). Claude is the judgment (decides what's urgent).
- Weekday-only schedule keeps API cost around a tenth of a cent per run.
- The prospect list is driven by a `Follow-up Date` field. Outbound call lists are scheduled by spreading follow-up dates across days, so the briefing becomes the daily call sheet with no extra build.
