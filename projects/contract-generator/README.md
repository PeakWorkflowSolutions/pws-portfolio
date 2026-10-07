# Client Contract Generator

**Status:** Complete. Used for real client agreements.

A Node.js script (docx-js) that builds a branded, signable services agreement from a JSON config: agreement body, Exhibit A scope and pricing, Exhibit B consent and access authorization, and signature page.

Sample output: [sample-output.pdf](sample-output.pdf)

## Usage

```bash
npm install docx
node build.js example-config.json
```

Edit [example-config.json](example-config.json) per client:

- `lineItems`: one row per deliverable. The total is summed automatically, but only when every line has a real price. Otherwise it stays a blank fill-line.
- `recurring`: include it for a retainer and the agreement gains a Recurring Services, Autopay, and Cancellation section plus a retainer table. Leave it out and both disappear.
- `accessItems`: the systems the build needs access to, for the consent exhibit.

## Problems it solves

- **Section numbers that never drift.** Sections are built from an ordered key list, and every number and cross-reference ("see Section 4.3") is computed from it. Adding or removing the recurring section renumbers everything correctly.
- **Clause numbering per section.** Each numbered clause block gets its own numbering reference, so clauses restart at each section instead of counting through the whole document (a docx-js gotcha I hit twice).
- **No fabricated numbers.** Prices, dates, and hours print only if they're in the config. Everything else is a fill-in blank.
- **No discount math in writing.** Discounts are presented in conversation, never printed.

## Payment structure baked in

- One-time builds: 20% at signing, 80% on completion, referencing Exhibit A's total as the single source of truth
- Retainers: separate section with autopay authorization and 30 days' written notice to cancel

Process documentation: [`skills/pws-client-paperwork`](../../skills/pws-client-paperwork/)

> Templates are not legal advice. Have a licensed attorney in your state review before use.
