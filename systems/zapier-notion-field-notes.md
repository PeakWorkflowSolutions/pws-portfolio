# Zapier + Notion Field Notes

Real issues hit while building production automations, and the fix for each.

## Zapier editor

1. **Stale test data blocks field-reference insertion.** Retest the upstream step before inserting its output elsewhere.
2. **The corner "+" inserts at the start of a field**, ignoring cursor position. Use the inline "/" trigger at the cursor instead.
3. **The inline "/" trigger is inconsistent.** Occasionally it types a literal "/" instead of opening the picker. Backspace and use "+".
4. **Never hand-type `Object.to_json(`.** Inserting the pill already generates the wrapper; typing it creates duplicate or empty wrappers.
5. **Safe select-all inside a field:** `Ctrl+Home`, then `Ctrl+Shift+End`. Plain `Ctrl+A` can select the whole page.
6. **Cut/paste of a pill doesn't reliably work.** Delete and re-insert from the picker.
7. **The Zap canvas can fail to render steps** even when the Zap is fine. Use "Zoom to fit"; off-screen steps can be missing from the accessibility tree at default zoom.
8. **No Zapier action can test, retest, or publish a Zap.** That only happens in the visual editor. Notion's own API, on the other hand, can query real data and schema directly, which is how I root-caused two filter bugs while the editor was unreachable.

## Notion via Zapier

9. **Advanced Query (JSON) filters don't validate property names.** A filter on a nonexistent property fails silently. Cross-check name and type against the live schema.
10. **"Successful if no search results are found?"** If False, an empty query halts the entire Zap. Set True unless an empty result really should stop the run.
11. **Retesting a "Create Data Source Item" step writes a real row** to the live database. There is no sandbox. Once mapping is confirmed, skip Retest and publish.
12. **Add select options from the column header**, not a row's cell dropdown, so you don't assign the option to that row by accident.
13. **Notion can have multiple spaces.** Check the space switcher before assuming data is gone.

## Webhooks

14. **Browser `fetch()` with `mode: 'no-cors'` and `Content-Type: application/json` silently drops data at a Catch Hook.** Use `text/plain`; Zapier still parses the JSON.

## Scheduling

15. **Schedule triggers need an explicit timezone override.** Without it, the time runs in the account default timezone, which shifted a 7 AM email to midnight with the previous day's date.

## Gmail via MCP

16. **`label:<custom label ID>` search doesn't reliably return labeled threads.** Verify labels by reading the thread directly.

## Prompting for email output

17. **Ask for HTML, not markdown.** `<b>` headers and `<ul><li>` lists render in every mail client; `**asterisks**` don't.
18. **Insert an output field exactly once.** A body that had the same field inserted four times sent the summary four times.
