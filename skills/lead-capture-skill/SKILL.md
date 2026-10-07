---
name: lead-capture-skill
description: Documents PWS's AI-Powered Missed Call Lead Capture System — an OpenPhone + Zapier + Claude + Google Forms/Sheets workflow that turns missed calls into captured leads automatically. Use this skill whenever building, adapting, explaining, or troubleshooting a missed-call lead capture system for a client, whenever the user mentions OpenPhone, Zapier lead capture, missed call automation, or a new client onboarding for PWS's flagship offer.
---

# Lead Capture Skill — AI-Powered Missed Call Lead Capture System

## System Overview

This system automatically captures leads from missed business calls, without the
owner lifting a finger:

1. **OpenPhone** receives a call. If missed, a voicemail is captured with automatic
   transcription.
2. **Zapier (Zap 1)** triggers on the new voicemail/transcription.
3. **Zapier (Zap 2)** sends the transcript to Claude using the inquiry-check prompt
   (see `references/zap-prompt.md`).
4. Claude decides if it's a genuine business inquiry:
   - If YES, Claude drafts a short SMS reply containing a link to the client's
     Google Form.
   - If NO, the chain stops. No further action, no SMS, no log.
5. **Zapier (Zap 3)** parses Claude's output and, if genuine, sends the drafted SMS
   back to the caller through OpenPhone.
6. The caller fills out the **Google Form**, which is natively linked to a
   **Google Sheet** — no Zap needed for this leg. The response auto-populates
   the Sheet.
7. **Notifications**: the client should enable "Get email notifications for new
   responses" under the Form's Responses tab (three-dot menu), so they're alerted
   the moment a lead comes in, without checking the Sheet manually.

Only 3 Zaps are needed. Google Forms → Sheets and notifications are native
Google features requiring no Zapier automation.

## When Building a New Client's System

1. Read `references/zap-prompt.md` for the Claude prompt template used in Zap 2.
   Fill in `[BUSINESS NAME]`, `[INDUSTRY/BUSINESS TYPE]`, and `[FORM LINK]` with
   the client's specifics.
2. Read `references/adaptation-guide.md` to determine genuine-inquiry signals
   and form fields for the client's industry. If the industry isn't covered yet,
   work with the user to define new signals and add them as a new entry.
3. Read `references/delivery-checklist.md` and walk through it step by step
   during setup and handoff.

## Key Design Decisions (do not deviate without user confirmation)

- SMS replies are generic — **never use the caller's name**, even if mentioned
  in the transcript, to avoid errors from garbled voicemail transcription.
- Non-genuine inquiries are **not logged anywhere** — the chain simply stops.
  This was a deliberate simplicity choice by the user.
- SMS tone is short and professional/neutral — not warm/casual, unless a
  specific client requests otherwise.
- Google Forms → Sheets linkage is native; do not build a Zap for this step.
