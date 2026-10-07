# Claude Skills

Twelve custom Claude skills I wrote. Each one is a packaged, repeatable procedure (a `SKILL.md` plus reference files) that Claude loads when the task comes up, so the same process runs the same way every time.

Each skill came from doing the work by hand first, then capturing what worked.

## Client delivery (Builder)

| Skill | What it does |
|---|---|
| [pws-builder](pws-builder/SKILL.md) | Technical co-builder for a client project: diagnose, map the manual process, split automation from judgment, pick the stack, design, build step by step, test with real data, document |
| [pws-client-paperwork](pws-client-paperwork/SKILL.md) | Branded, print-ready services agreements, retainer terms, and consent/access forms from a client's real scope |
| [pws-meeting-intake](pws-meeting-intake/SKILL.md) | Turns a recorded client meeting into a structured intake (scope, timeline, pricing, payment, access) and an interactive checklist to fill gaps live |
| [pws-website-intake-demo](pws-website-intake-demo/SKILL.md) | Website-build intake: fixed questionnaire, completeness check, and an auto-drafted first demo from the client's own answers |

## Client products

| Skill | What it does |
|---|---|
| [bid-generator-skill](bid-generator-skill/SKILL.md) | Contractor bids that reproduce the business's own template and voice exactly. Includes researched bid anatomy, style extraction, legal guardrail, review checkpoint, and versioning |
| [lead-capture-skill](lead-capture-skill/SKILL.md) | AI missed-call lead capture: phone system + Zapier + Claude + Google Forms/Sheets |
| [client-intake-skill](client-intake-skill/SKILL.md) | Generates a full lead-capture deployment package (Zap configs, custom prompt, form fields, sheet columns, owner one-pager) from one intake conversation |
| [ai-discoverability-audit](ai-discoverability-audit/SKILL.md) | AI search (GEO/AEO) audit for local businesses: crawler access, llms.txt, schema, NAP consistency, live citation testing |

## Sales

| Skill | What it does |
|---|---|
| [pws-cold-call-prep](pws-cold-call-prep/SKILL.md) | Pulls today's due leads from Notion and builds a researched, honest call script for each |
| [pws-call-log-update](pws-call-log-update/SKILL.md) | Takes a plain-language recap of a call and updates the lead's CRM record |

## Marketing

| Skill | What it does |
|---|---|
| [pws-motion-a-content](pws-motion-a-content/SKILL.md) | Turns one video script or transcript into platform-specific posts with channel rules and brand voice built in |
| [content-lead-gen-playbook](content-lead-gen-playbook/SKILL.md) | Scans top-performing content in a person's industry and local market, then builds a content playbook and post ideas |

Note: Notion data source IDs are replaced with placeholders like `<PROSPECTS_DATA_SOURCE_ID>`.
