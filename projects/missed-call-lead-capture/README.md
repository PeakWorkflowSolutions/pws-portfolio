# AI-Powered Missed-Call Lead Capture

**Status:** Complete. Designed and built first for a wedding venue client, packaged as a reusable system.

## Problem

Small service businesses miss calls while they're on a job, giving a tour, or with family. A missed call usually means the caller tries the next business on the list.

## How it works

```
Missed call ──▶ Voicemail + auto-transcript (OpenPhone)
                     │
                     ▼
             Zapier sends transcript to Claude
                     │
         Is this a genuine inquiry?
           │                    │
          NO                   YES
           │                    │
      chain stops      Claude drafts a short SMS
                       with a link to an intake form
                                │
                                ▼
                  SMS sent back to the caller
                                │
                                ▼
           Caller fills out Google Form ──▶ Google Sheet
                                │
                                ▼
              Owner gets an email notification
```

Three Zaps total. Form → Sheet and the notification are native Google features, so they don't need automation.

## Design decisions

- **Never use the caller's name** in the SMS, even when it's in the voicemail. Garbled transcription makes names risky.
- **Non-inquiries aren't logged.** Spam and wrong numbers just stop. Keeps it simple for the owner.
- **Short, neutral SMS** under 300 characters.
- **Industry adaptation guide.** Each industry gets its own "genuine inquiry" signals and form fields. The venue version, for example, treats "my daughter is getting married" as a real inquiry.
- **Compliance:** automated business SMS in the US requires A2P 10DLC carrier registration, which takes 1 to 3 weeks. It's a prerequisite step in the delivery checklist, not an afterthought.

## Files

- Full system, prompt, adaptation guide, and delivery checklist: [`skills/lead-capture-skill`](../../skills/lead-capture-skill/)
- Client onboarding version that generates the whole package from one intake conversation: [`skills/client-intake-skill`](../../skills/client-intake-skill/)
- Sales tool that shows owners what missed calls cost them: [missed-call-calculator](../missed-call-calculator/)
