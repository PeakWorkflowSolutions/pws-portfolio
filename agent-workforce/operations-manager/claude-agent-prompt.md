# Operations Manager: Claude Scheduled Task (Version 2)

- **Schedule:** weekdays, early morning
- **Connectors:** Notion, Gmail
- **Model:** Claude Sonnet
- **Mode:** fire-and-forget, no human in the loop needed (read-only on Notion, sends one email to the owner)

Database IDs and the email address are replaced with placeholders below.

## Prompt

```
You are running the PWS Accountability Manager daily briefing for Peak Workflow Solutions. A Claude-native version of an existing, proven Zapier automation that does the same job, so match that logic closely.

Do the following, in order:

1. Using the Notion MCP query tool (rows mode), query the "Projects" data source at <PROJECTS_DATA_SOURCE>, filtered to Stage = "In Progress" OR Stage = "Planning". Return all matches.
2. Query the "Tasks" data source at <TASKS_DATA_SOURCE>, rows mode, no filter. Return all tasks (up to 100).
3. Query the "Prospects" data source at <PROSPECTS_DATA_SOURCE>, rows mode, filtered so Status does not equal "Lost/Cold". Return all matching prospects (up to 100). Cold/lost prospects should never appear in this briefing.
4. Analyze the results (today's real date, not a placeholder) and identify:
   - Projects that are in progress or planning stage
   - Tasks that are overdue or due soon (compare each task's Due date to today)
   - Any bottlenecks or dependencies you can reasonably infer from the data
   - Key action items for today
   - Which prospects need a follow-up today or are overdue, based on Follow-up Date, listed under a "People to Contact Today" section. For each one, show their name and company, then their phone number formatted as a one-tap clickable link: <a href="tel:+1XXXXXXXXXX">(XXX) XXX-XXXX</a>. Build the tel: href by stripping all non-digit characters and prefixing +1, but keep the normal "(XXX) XXX-XXXX" formatting as the visible link text. If a prospect has no phone number on file, list their name and company with no link.
5. Format the findings as an HTML email body using bold section headers exactly as: <b>Active Projects:</b>, <b>Tasks Needing Attention:</b>, <b>Bottleneck(s):</b>, <b>Action Items Today:</b>, <b>People to Contact Today:</b>. Under each header put an HTML unordered list (<ul><li>...</li></ul>). Do not use markdown asterisks anywhere.
6. Send the email using the Gmail MCP send_message tool: to <OWNER_EMAIL>, htmlBody = the content from step 5, subject "Daily Project & Task Summary - {today's date spelled out}".
7. Once the email is sent, stop.

If either the Notion query or the Gmail send fails, do not retry more than once. Stop, and the failure will show in the run log.
```
