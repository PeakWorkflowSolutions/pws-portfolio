# Operations Manager: Zapier Build (Version 1)

Zap name: **Daily Prospect & Project Summary Analysis**. Six steps.

## Step 1: Trigger, Schedule by Zapier
- Every day, weekdays only
- Time of day: 3:00 AM
- Timezone override: `America/Los_Angeles` (required; without it the schedule runs in the account default timezone)

## Step 2: Notion, Query Data Source (Advanced): Projects
```json
{ "filter": { "or": [
  { "property": "Stage", "select": { "equals": "In Progress" } },
  { "property": "Stage", "select": { "equals": "Planning" } }
] } }
```
Return all results as line items.

## Step 3: Notion, Query Data Source (Advanced): Tasks
No filter. Return all results as line items.

## Step 4: Notion, Query Data Source (Advanced): Prospects
```json
{ "filter": { "property": "Status", "select": { "does_not_equal": "Lost/Cold" } } }
```
Return all results as line items. **Successful if no search results are found: True.** (If this is False and nothing matches, every run stops here.)

## Step 5: Anthropic (Claude), Send Message
```
Please analyze the following Projects and Tasks data from my Notion workspace and provide a summary of what needs immediate attention:

PROJECTS:
{{Step 2 raw output, as JSON}}

TASKS:
{{Step 3 raw output, as JSON}}

PROSPECTS (people to follow up with):
{{Step 4 raw output, as JSON}}

Please identify:
1. Projects that are in progress or planning stages
2. Tasks that are overdue or due soon
3. Any bottlenecks or dependencies
4. Key action items for today
5. Which prospects need a follow-up today or are overdue (based on Follow-up Date), listed under a "People to Contact Today" section

Format your entire response as HTML for an email (not markdown). Use <b>Active Projects:</b>, <b>Tasks Needing Attention:</b>, <b>Bottleneck(s):</b>, <b>Action Items Today:</b>, and <b>People to Contact Today:</b> as bold section headers. Under each header, list the relevant items as an HTML unordered list using <ul><li>...</li></ul>. Do not use markdown asterisks (**) anywhere in the response.
```
Output field used downstream: **Response Content Text**.

## Step 6: Email by Zapier, Send Outbound Email
- To: the business inbox
- Subject: `Daily Project & Task Summary - {Pretty Date}`
- Body: Step 5's Response Content Text, inserted exactly once

## Integrations used
Schedule by Zapier, Notion, Anthropic (Claude), Email by Zapier.
