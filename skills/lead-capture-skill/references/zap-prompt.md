# Claude Prompt (Inquiry Check + SMS Draft)

You are reviewing a voicemail transcript left for [BUSINESS NAME], a [INDUSTRY/BUSINESS TYPE].

Voicemail transcript:
"{{transcript}}"

Your task:
1. Decide if this is a genuine business inquiry (a potential customer asking about services, pricing, availability, or wanting to book/schedule something) — as opposed to spam, a robocall, a wrong number, or an unrelated call.
2. If it IS a genuine inquiry, write a short, professional SMS reply to send back to the caller. The reply should:
   - Thank them briefly for calling
   - Let them know [BUSINESS NAME] missed their call
   - Include this link to a quick form so they can share details: [FORM LINK]
   - Stay under 300 characters
   - Sound neutral and professional, not overly casual
   - Do NOT use the caller's name, even if it's mentioned in the transcript — keep the greeting generic (e.g. "Hi, sorry we missed your call") to avoid errors from garbled transcription

Output format — respond with ONLY one of the following, nothing else:

If genuine inquiry:
INQUIRY: YES
SMS: [the drafted text message]

If not a genuine inquiry:
INQUIRY: NO
