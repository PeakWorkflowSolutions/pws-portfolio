# Website Lead Capture → Notion CRM

**Status:** Complete. Live on pwslocal.com.

## What it does

The contact form on the business website posts straight into the Notion Prospects database, the same database the Operations Manager reads every morning. A new web lead shows up in the next day's briefing with no extra place to check.

## Build

**Trigger:** Webhooks by Zapier, Catch Hook
**Action:** Notion, Create Data Source Item (Prospects)

| Notion field | Value |
|---|---|
| Name | form Name |
| Company | form Business Name |
| Phone / Email | form Phone / Email (structured fields) |
| Status | `Lead` (hardcoded) |
| Source | `Website` (hardcoded) |
| Next Step | `Website inquiry. Type of business: {Industry}. Phone: {Phone}. {Message}` |
| Follow-up Date | submission date |

Front-end handler: [form-handler.js](form-handler.js)

## The bug worth knowing about

POSTing to a Zapier Catch Hook from the browser with `mode: 'no-cors'` and `Content-Type: application/json` **looks** like it works. The promise resolves, no errors. The data just doesn't reliably arrive.

Under `no-cors`, the browser only allows CORS-safelisted content types. `application/json` isn't one of them. Switching to `Content-Type: text/plain` (same JSON body) fixed it, and Zapier still parses the JSON.

I root-caused it by testing three variants from a real browser:

| Variant | Result |
|---|---|
| `cors` | CORS error |
| `no-cors` + `application/json` | silently dropped |
| `no-cors` + `text/plain` | works |

## Other lesson

Re-testing a Notion "Create Item" step in the Zap editor writes a **real row** to the live database. There's no sandbox. Once the field mapping is confirmed, skip Retest and publish.

## Fallback

If the webhook URL is missing or the request fails, the visitor gets a direct email link (pre-filled with what they typed) instead of a silent failure.
