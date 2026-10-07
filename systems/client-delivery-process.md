# Client Delivery Process (End to End)

How a client goes from first contact to a delivered build, and which agent or skill handles each step.

| Step | What happens | Handled by |
|---|---|---|
| 1. Lead comes in | Website form, inbox, referral, or outbound call | [Website Lead Capture](../agent-workforce/website-lead-capture/), [Sales & Outreach Triage](../agent-workforce/sales-outreach-triage/), [Cold Call Prep](../agent-workforce/cold-call-prep/) |
| 2. Follow-up tracked | Lands in the Notion CRM with a follow-up date | [Notion OS](notion-operating-system.md), [Operations Manager](../agent-workforce/operations-manager/) |
| 3. Consultation | One meeting with a fixed question set, recorded | [Discovery framework](discovery-framework.md), [`pws-meeting-intake`](../skills/pws-meeting-intake/) |
| 4. Build strategy | Diagnose the real problem, map the manual process, split automation from judgment, pick tools the client already uses, design before building | [`pws-builder`](../skills/pws-builder/) |
| 5. Paperwork | Services agreement, scope and pricing exhibit, consent and access form | [`pws-client-paperwork`](../skills/pws-client-paperwork/), [contract generator](../projects/contract-generator/) |
| 6. Access | Client grants only the systems listed in the consent form | Consent & Access Authorization |
| 7. Build and test | Test with dummy data, then with real data, before calling it live | [`pws-builder`](../skills/pws-builder/) |
| 8. Deliver and document | Handoff instructions, build log, reusable pieces flagged as future skills | Build log per client |
| 9. Keep the client | Monitoring, fixes when connected platforms change, small monthly adjustments, renewals | Retainer terms in the agreement |

## Principles

- Build only what has enough real detail to build. Everything else gets a written solution design and waits.
- Anchor on tools the client already pays for (Google Workspace, their phone system, their CRM) before adding anything new.
- Be honest in the documentation about what's built, what's designed, and what's waiting on the client.
- Every engagement should leave behind something reusable: a skill, a template, or a pattern.
