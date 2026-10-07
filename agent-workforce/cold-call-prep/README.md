# Cold Call Prep Agent

**Status:** Complete. Runs every weekday at 6:45 AM Pacific.
**Role in the org:** Part of the Sales & Outreach Director.

## What it does

Before I start my outbound calls, this agent:

1. Pulls everyone in the Notion Prospects database whose follow-up is due today.
2. Runs a **7-point passive research audit** on each lead, using parallel research subagents when there are more than one or two.
3. Builds a call-prep packet per lead:
   - **What's real**: verified findings only
   - **Lead with**: the strongest angle for this person
   - **Call opener**: written in my own voice, built from the real findings
   - **Voicemail fallback**
   - **Honest gaps**: what it couldn't verify. "Not found" is a valid answer.
4. Delivers the packet to me. If nobody is due today, it says so in one line instead of sending an empty packet.

It pulls my voice from a written voice profile and the pain-point checklist and voicemail script from a shared reference doc, so every packet sounds like me and stays consistent.

## Rules it follows

- No fabrication. Openers are built only from what the research actually found.
- Warm and conversational, like I already know the person. Not sales copy.

## Prompt

```
Run the pws-cold-call-prep skill. Pull today's leads due for follow-up from the Notion Prospects database (<PROSPECTS_DATA_SOURCE>; if the ID is stale, look it up via Notion search first). Run the 7-point passive research audit on each lead due today, using parallel research subagents when there's more than one or two leads. Build the call-prep packet per the skill's format (What's real / Lead with / Call opener / Voicemail fallback / honest gaps), writing the call openers in Marcos's voice per the voice profile doc: warm, conversational, sounds like he already knows them, built only from real findings, no fabrication. Pull the pain-points checklist and voicemail script from the marketing pain-points reference doc. Deliver the finished packet to Marcos. If there are zero leads due today, just say so briefly instead of sending an empty packet.
```

Skill: [`skills/pws-cold-call-prep`](../../skills/pws-cold-call-prep/SKILL.md). Companion skill that logs call outcomes back to Notion: [`skills/pws-call-log-update`](../../skills/pws-call-log-update/SKILL.md).
