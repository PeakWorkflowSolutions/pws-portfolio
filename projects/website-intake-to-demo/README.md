# Website Build: Intake to Demo (Client #2)

**Status:** Complete.
**Client:** A mobile yoga and Reiki instructor with no fixed studio location (anonymized). Referral.

A design-heavy engagement, the opposite of the automation-heavy first client. It proved the Builder process holds up on a completely different kind of project.

## What I built

1. **Discovery questionnaire** in six sections (About You, Business, Classes & Services, Look & Feel, Trust & Extras, Wrap-Up), offered as a written doc, an interactive web version, and a Google Form linked to a Sheet.
2. **First draft site** built straight from the client's own answers, with every unknown (logo, colors, booking platform) marked as a placeholder on the page instead of invented.
3. **Ten visual concepts.** Ten distinct font, palette, and motif systems on identical content, so only the visual treatment varied. Every major change was snapshotted before being overwritten.
4. **Comparison deck and link hub** to present all concepts on one call. The deck was script-generated. Caught a bug where the template hardcoded "Concept X of 9" with 10 concepts; fixed to compute the total.
5. **Narrowed to five finalists, then the client chose one.** Deletions were confirmed before acting since they're irreversible.
6. **Service additions and layout refinements** on the chosen concept, including a new Reiki offering and a card grid.
7. **Business-model correction.** Every draft had framed her as having a physical studio. She travels to clients. Rewrote every "studio" and "address" reference without touching her own words.
8. **Request-to-book form.** A modal reachable from three places on the site, collecting session, date, time, group size, location, and details.
9. **Contract** generated with the [contract generator](../contract-generator/).

## Lessons that became process

- **Completeness check on intake.** Building a Google Form through browser automation silently stopped partway through. Now every intake gets verified complete before it goes to the client. Built into the [`pws-website-intake-demo`](../../skills/pws-website-intake-demo/) skill.
- **Baseline before creative.** Confirm the plain draft is factually right before exploring visuals.
- **Lock scope explicitly.** After the client chose a concept, all others were frozen as reference.
