# Output Templates

Generate all five outputs below using the intake answers. These mirror the
structure finalized in the `lead-capture-skill` — do not deviate from that
system's design decisions (generic SMS greeting, no logging of non-genuine
inquiries, 3-Zap structure, native Form-to-Sheet linkage) unless the user
explicitly requests a change for this client.

## 1. Zap Configs

Describe the 3 Zaps in plain terms, filled in with the client's specifics:

```
Zap 1 — Trigger: New voicemail/transcription in OpenPhone for [BUSINESS NAME]
Zap 2 — Action: Send transcript to Claude using the prompt below
Zap 3 — Action: Parse Claude's response. If INQUIRY: YES, send the drafted 
        SMS via OpenPhone to the caller. If NO, end (no further action).
```

## 2. Claude Prompt (Zap 2)

Use the exact structure from `lead-capture-skill/references/zap-prompt.md`,
substituting:
- `[BUSINESS NAME]` → client's business name
- `[INDUSTRY/BUSINESS TYPE]` → client's industry
- `[FORM LINK]` → client's form link (or placeholder if not built yet)

Incorporate the client's genuine/non-genuine inquiry signals from intake into
the prompt's decision-making instructions.

## 3. Form Fields

List out the fields the Google Form should collect, based on intake answers.
If the client already has a form, use their existing fields instead of
generating new ones — confirm field names match exactly for consistency with
the Sheet columns below.

## 4. Sheet Columns

Since Google Forms auto-populates a linked Sheet, the Sheet columns should
exactly mirror the Form fields in the same order, plus a timestamp column
(added automatically by Google Forms).

## 5. Owner Guide (One-Pager)

A short, plain-language doc for the business owner covering:
- What the system does (missed calls get a text reply automatically)
- Where leads show up (the linked Google Sheet)
- How they'll be notified of a new lead (email notification, once enabled)
- What they don't need to do (no manual work required — it's automatic)
- Who to contact if something seems broken (PWS contact info)

Keep this non-technical. The owner should not need to understand Zapier,
prompts, or the AI step — just what happens and where to look for leads.

---

After generating all five outputs, add this to the industry adaptation guide
in `lead-capture-skill/references/adaptation-guide.md` as a new entry, so
future clients in the same industry can reuse the signals and fields without
re-deriving them from scratch.
