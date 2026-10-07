---
name: client-intake-skill
description: Turns a new client's intake answers into a complete, ready-to-deploy PWS lead capture system package — Zap configs, the customized Claude prompt, Google Form fields, Sheet columns, and an owner's one-pager guide, all generated together from one intake conversation. Use this skill whenever onboarding a new client for PWS's missed-call lead capture system, whenever the user mentions "new client," "onboarding," "intake," or wants to set up the lead capture system for a specific business. This skill builds directly on top of lead-capture-skill — read that skill first if it's available, since this skill reuses its finalized prompt structure and system design.
---

# Client Intake to Full System Output

## Purpose

Instead of manually rebuilding the lead capture system's prompt, form, sheet,
and guide for every new client, this skill takes one round of intake answers
and generates all five deliverables together, consistent with each other and
with the finalized system design in `lead-capture-skill`.

## Workflow

1. **Check for `lead-capture-skill`.** If it's available in this project or
   conversation, read its `SKILL.md` and reference files first — this skill
   depends on that system's finalized prompt structure and design decisions
   (e.g. generic SMS greeting, no logging of filtered-out calls, 3-Zap
   structure). If it's not available, ask the user for it before proceeding.

2. **Run intake.** Read `references/intake-questions.md` and ask the user for
   any answers not already known from context. Don't re-ask for information
   already provided earlier in the conversation.

3. **Check the adaptation guide for a matching industry.** If the client's
   industry already has an entry in `lead-capture-skill/references/
   adaptation-guide.md` (e.g. wedding venue), reuse those genuine/non-genuine
   signals and form fields as a starting point rather than starting from zero
   — confirm with the user whether it fits or needs adjustment.

4. **Generate all five outputs together**, per `references/output-templates.md`:
   - Zap configs
   - Claude prompt (Zap 2)
   - Form fields
   - Sheet columns
   - Owner guide (one-pager)

5. **Update the adaptation guide.** If this is a new industry, add a new entry
   to `lead-capture-skill/references/adaptation-guide.md` with the signals and
   fields derived during intake, so future clients in the same industry can
   skip re-deriving them.

6. **Hand off using the delivery checklist.** Point the user to
   `lead-capture-skill/references/delivery-checklist.md` for setup and
   testing steps once the outputs are generated.

## Key Principle

All five outputs must stay internally consistent — the Form fields, Sheet
columns, and Claude prompt should all reference the same information using
the same terms. Do not generate them independently without cross-checking
against each other.
