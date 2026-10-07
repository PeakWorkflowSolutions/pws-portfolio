# pwslocal.com: Business Website

**Status:** Complete. Live at [pwslocal.com](https://pwslocal.com).
**Source:** [PeakWorkflowSolutions/pwslocal.com](https://github.com/PeakWorkflowSolutions/pwslocal.com)

A single-file static site (HTML, CSS, vanilla JS, no framework, no build step) deployed on Netlify.

## Highlights

- Responsive layout with a hamburger nav below 780px
- Light and dark mode with CSS custom properties
- JSON-LD `ProfessionalService` and `FAQPage` schema for search and AI assistants
- Open Graph and Twitter card tags, canonical URL, favicon built from the logo mark
- Inline SVG icon sprite and an animated SVG hero background
- Touch and swipe carousel written from scratch
- Accessible FAQ accordions using native `<details>` / `<summary>`
- Contact form wired to a Zapier webhook that writes leads into my Notion CRM ([how](../../agent-workforce/website-lead-capture/))

## Fixes worth noting

- **Side padding that wouldn't apply.** A `padding: 40px 0 30px` shorthand on the hero was silently zeroing out a shared left/right spacing value. Split into `padding-top` / `padding-bottom`. Lesson: a shorthand with a literal `0` overrides inherited side values.
- **Heading font matched to the logo** by rendering candidate Google Fonts side by side against the wordmark. Montserrat 900 matched the letterforms.
- **Webhook data silently dropped** under `no-cors` with a JSON content type. Fixed with `text/plain` (details in the lead capture writeup).
