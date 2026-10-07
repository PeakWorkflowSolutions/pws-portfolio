---
name: "pws-client-paperwork"
description: "Generates branded, print-ready PWS service agreements, retainer terms, and consent/access forms from a client's real scope — one agreement per build, 20/80 payment, fillable Automation Builds table with auto-totaled price, black-and-white tables, no baked-in discount math."
---

# PWS Client Paperwork Generator

This is the Builder Director's onboarding-paperwork process. It turns a scoped engagement into signable, branded documents from the PWS master template — not templates full of instructions-to-self. Use this from a client's own project (not the general PWS project) when building that client's actual paperwork, so their real scope, pricing, and notes are on hand while you fill it in.

## Trigger

- A new client is ready for a services agreement (any engagement, one-time or recurring).
- An existing client is starting a new, distinct build (a new SOW) beyond what they already signed.
- A client's engagement needs a matching Client Consent & Access Authorization (any time PWS needs access to the client's own accounts/files/systems).

## Core decisions (make these before writing anything — never assume)

1. **One agreement per build, not one giant contract.** Bundle deliverables into one agreement only when they're being scoped/delivered together on roughly the same timeline. Split into separate agreements when timelines or readiness diverge — a single agreement's "80% due on completion" only works cleanly when everything in its Exhibit A finishes around the same time. Each standalone agreement can be labeled as its own "Phase" (Phase 1, Phase 2, ...) via the fillable field near the top of the agreement, ideally in the client's own stated priority order — that's a label on a complete, separately-priced document, never a way to split one document's scope into a priced part and an unpriced pending part.
2. **Payment structure:** one-time work is a flat total fee, 20% due at signing / 80% due on completion. The Fees and Payment section does NOT print its own dollar figures — it references Exhibit A's Total Initial Build Price as the single source of truth ("the total fee for the Scope of Work is the Total Initial Build Price stated in Exhibit A"). Recurring/retainer work is never folded into that 20/80 split — it lives in its own "Recurring Services, Autopay, and Cancellation" section with autopay authorization and a required 30 days' written cancellation notice, billed monthly.
3. **Never print discount math.** No standard-rate comparisons, no "you're saving X%," no "first-client rate" framing in the document itself. Marcos presents any discount verbally when he presents the deal. The document just states the fee. Testimonial/resale-rights asks (if used) stand on their own, not framed as an exchange for a discount.
4. **Never fabricate numbers.** Fee amounts, target dates, included-hours-per-month, response times — if Marcos hasn't given a real number, leave it as a blank fill-line, never a guess. Pull real scope language from the client's own email/notes when available — don't paraphrase from memory if the original is reachable (check Gmail/Notion for it).
5. **Retainer content, when applicable:** what's included (monitoring, fixes for breakage caused by connected-platform changes, a capped monthly hours/tuning allowance), a response-time commitment, autopay authorization, and the 30-day cancellation notice. Suggested starter pricing to advise Marcos with (not to print): ~$150–250/mo for monitoring-only, up to ~$350–500/mo if it includes active work like lead-gen channel tuning — always well under whatever price-sensitivity signal the client has already given.

## Build process

1. **Gather real inputs.** Client legal/trade name, effective date (or blank), the actual scope items (from their email/notes, not paraphrased from memory), whether each item is one-time or recurring, and any pricing Marcos has actually decided. Ask him directly for anything not yet decided rather than guessing.
2. **Use the shared brand module** (rebuild if this environment doesn't have it — it's short, reproduce it from the snippet below into `brand.js` alongside a cropped copy of the PWS logo):

```js
const BRAND = {
 navy: "001E47", blue: "2F8DD2", orange: "FE6701", gray: "5A6472",
 bodyFont: "Times New Roman", // universal professional/legal-document serif
 headingFont: "Poppins", // bold geometric sans, echoes the PEAK wordmark
};
function docStyles() {
 return { default: { document: { run: { font: BRAND.bodyFont } } } };
}
// letterhead(titleText): logo image + bold navy title (font: BRAND.headingFont) under an orange rule
// footer(): centered "Peak Workflow Solutions, LLC | Selah, WA | pwslocal.com", small, gray, blue top rule
// h1(text) / h2(text): bold navy headings, font: BRAND.headingFont
```

Spread `...docStyles()` into every `new Document({...})` call so body text defaults to Times New Roman; headings/letterhead explicitly override to Poppins Bold.

3. **Table headers are black-and-white, never color-shaded.** An earlier version shaded header cells navy — the header text had no explicit color set, so it rendered as black-on-navy, genuinely low contrast on some screens. Table headers are just bold black text on white with plain grid-line borders. Don't reintroduce a `shade`/fill color on header cells.

4. **Blank fill-lines: use a short blank inside table cells.** The standard blank-fill line (`U = "________________"`, 16 underscores) is for body text and wide cells. Inside narrower table cells (a Timeline column, a Total-row price cell) it wraps onto a second line and looks broken — use a shorter blank there instead (`US = "__________"`, 10 underscores).

5. **Standard section flow** (docx-js via the `docx` skill): opening/parties block, then a fillable "Phase ___ — ___ (engagement name)" line; Services & Scope of Work; Term; Fees and Payment (numbered clauses: Fee [references Exhibit A's Total, no separate dollar blank], Payment schedule [20/80, no separate dollar blanks], Additional-scope-goes-to-a-new-agreement, Invoicing, Late payment); **[Recurring Services, Autopay, and Cancellation — only if this engagement has a retainer component]**; Client Responsibilities; Access to Client Systems and Data; Intellectual Property and Resale Rights (Client-specific outputs, Provider tools, Testimonial, Resale rights); Confidentiality; Warranty and Disclaimer; Limitation of Liability; Independent Contractor; Termination; Governing Law; Entire Agreement and Amendments; page break; Exhibit A; Signatures.

6. **Exhibit A structure — always use this shape:**
   - **"Automation Builds" table**: columns Automation | Description | Timeline | Initial Build Price. One row per distinct automation/deliverable in this engagement — a 20-line project gets 20 rows, a 2-line project gets 2. When Marcos gives real line items (name, description, timeline, price), fill each row directly rather than leaving it blank. End with a bottom row, first three columns merged (`columnSpan: 3`) reading "Total Initial Build Price", last column holding the dollar total — **sum the entered per-line prices yourself** rather than leaving it blank when every line item has a real price; leave it as a blank fill-line only if one or more line items still lack a decided price.
   - **"Monthly Retainer / Maintenance" section immediately below**, its own small table with just three columns — Frequency | Fee | Autopay (no "Service" column; Marcos found it unclear what would go there when the engagement only has one retainer line) — "Monthly" pre-filled in Frequency, an `☐ Authorized (Section 4.3)` checkbox in Autopay. Include this table only if the engagement has a recurring component; otherwise state plainly “No recurring maintenance or retainer service applies to this engagement.” rather than deleting the section (keeps every Exhibit A the same shape).

7. **Numbering gotchas (docx-js specific, hit twice already — don't repeat):**
   - A `numbering.reference` string counts continuously across the WHOLE document if reused across sections. Give each logical numbered-clause block (Fees, Recurring, IP) its **own** reference name (e.g. `clausesFees`, `clausesRecurring`, `clausesIP`), never one shared `"clauses"` reference.
   - When a document's section list varies (e.g. Recurring section present or absent), don't hand-type "Section 4" / "Section 12" text — it drifts the moment sections get added or removed. Precompute an ordered array of section keys, map each to its number once, and interpolate that number into cross-references. See the pattern: build `sectionOrder` (conditionally including "recurring"), then `secNum = {}; sectionOrder.forEach((k,i) => secNum[k]=i+1)`, then reference `secNum.termination` etc. wherever a section number is mentioned in body text.
   - `TableCell` needs a `columnSpan` option threaded through your `cell()` helper to build the merged Total row — don't forget to add it if reusing an older `cell()` helper that only handles `width`/`shade`.

8. **Build the matching Consent & Access Authorization** for any engagement that touches new systems — don't reuse an old engagement's access-table rows for a different build. Same branding, same black-and-white blank-fillable table pattern (System/Account, Specific Item, Access Granted, Purpose).

9. **Verify before delivering — every time:** convert to PDF (the `docx` skill's `soffice.py --headless --convert-to pdf` script), render to JPG (`pdftoppm -jpeg -r 100`), and actually `Read` each page image to confirm: correct branding, section numbers are sequential and cross-references match, no discount/standard-rate language snuck in, blanks are genuinely blank (not stale numbers from a prior client), no ugly line-wrap on short blanks, and the Automation Builds total actually equals the sum of its rows. Never ship a rebuild without re-verifying.

10. **Deliver via SendUserFile**, and log what was built + any pricing/structure decisions to that client's own project/build-log, not the general PWS project.

## Verification

- [ ] No dollar figure, date, or hours number appears in the document unless Marcos explicitly gave it
- [ ] No discount math, savings percentage, or "first-client rate" language anywhere
- [ ] Every recurring service is under its own Section (autopay + 30-day cancellation), never inside the one-time 20/80 split
- [ ] Section numbers were read off the actual rendered PDF, not assumed from the code
- [ ] Exhibit A's Total Initial Build Price equals the sum of its filled-in line items
- [ ] Fees and Payment section references Exhibit A's total rather than printing its own separate dollar blank
- [ ] Table headers are bold black text on white — no color shading anywhere
- [ ] Retainer table has exactly three columns (Frequency | Fee | Autopay), no Service column
- [ ] Branding (logo, navy/blue/orange, Times New Roman body / Poppins Bold headings, footer) matches on every page
- [ ] A reminder was given that a licensed WA attorney should review before any client actually signs