# Marcos Gonzales | AI Automation Portfolio

Founder of **Peak Workflow Solutions**, an AI automation consultancy for small and local businesses in the Yakima Valley, WA. I find the repetitive work that eats an owner's week, then build the automations and AI agents that take it off their plate.

I run the business solo with a workforce of AI agents I designed and built. This repo documents that workforce, the client builds, and the reusable systems behind them.

**Website:** [pwslocal.com](https://pwslocal.com) · **Site source:** [pwslocal.com repo](https://github.com/PeakWorkflowSolutions/pwslocal.com)

All builds below are complete. Client names and identifying details are anonymized.

---

## Agent Workforce

A two-tier org: a Project Manager over five Directors (Operations, Sales & Outreach, Builder, Client Relationship, Marketing). → [agent-workforce/](agent-workforce/)

| Agent | What it does | Stack |
|---|---|---|
| [Operations Manager](agent-workforce/operations-manager/) | Weekday briefing: active projects, overdue tasks, bottlenecks, and a click-to-call list of who to contact today | Zapier, Notion, Claude, Gmail. Built twice: Zapier and a Claude scheduled agent |
| [Sales & Outreach Triage](agent-workforce/sales-outreach-triage/) | Reads the inbox, separates sales from noise, drafts replies in my voice using CRM context. Drafts only, never sends | Gmail, Notion, Claude, Zapier |
| [Website Lead Capture](agent-workforce/website-lead-capture/) | Website form → Notion CRM, feeding the next morning's briefing | JavaScript, Zapier webhooks, Notion |
| [Cold Call Prep](agent-workforce/cold-call-prep/) | Researches every lead due today with parallel subagents and writes an honest call script for each | Claude agents, Notion |
| [Weekly Post Ideas](agent-workforce/weekly-post-ideas/) | Six grounded content ideas every Friday | Claude, Notion, Gmail |
| [Job Board Agent](agent-workforce/job-board-agent/) | Searches three job boards every 3 days, dedupes, writes fit and gap notes to a live board | Claude, Indeed, ZipRecruiter, Dice |

## Client Builds

| Project | Summary | Stack |
|---|---|---|
| [Real Estate Automation Suite](projects/real-estate-automation-suite/) | Client #1. Discovery through delivery for a real estate team | Apps Script, Google Workspace |
| [Intake → Calendar Sync](projects/intake-calendar-sync/) | Each transaction intake creates up to 12 deadline events on the team calendar | Google Apps Script |
| [Contractor Bid Generator](projects/bid-generator/) | Bids in the contractor's own template and voice from a job intake | Claude, Zapier, Google Forms |
| [Missed-Call Lead Capture](projects/missed-call-lead-capture/) | Missed call → AI inquiry check → SMS with intake form → Sheet | OpenPhone, Zapier, Claude, Google Forms/Sheets |
| [AI Discoverability Audit](projects/ai-discoverability-audit/) | GEO/AEO audit: can AI assistants find and cite the business correctly? | Research workflow, schema.org |
| [Website: Intake to Demo](projects/website-intake-to-demo/) | Client #2. Questionnaire → demo → 10 concepts → final site with booking form | HTML/CSS/JS |
| [pwslocal.com](projects/pwslocal-website/) | My business site with structured data and a CRM-connected form | HTML/CSS/JS, Netlify |

## Tools

| Tool | Summary | Stack |
|---|---|---|
| [Contract Generator](projects/contract-generator/) | Branded, signable services agreement from a JSON config with auto-numbered sections | Node.js, docx-js |
| [Missed-Call Cost Calculator](projects/missed-call-calculator/) | Interactive sales tool showing what missed calls cost a business | HTML/CSS/JS |
| [Industry Cost Carousel](projects/industry-cost-carousel/) | Template → per-industry social graphics with cited numbers | Python, headless Chromium |

## Claude Skills

Twelve custom skills that package my processes so Claude runs them the same way every time: building, paperwork, meeting intake, bid generation, lead capture, audits, call prep, and content. → [skills/](skills/)

## Systems

- [Notion Operating System](systems/notion-operating-system.md): the CRM and project database every agent reads from
- [Client Delivery Process](systems/client-delivery-process.md): lead to delivered build, and which agent handles each step
- [Discovery Framework](systems/discovery-framework.md): the same questions every meeting
- [Zapier + Notion Field Notes](systems/zapier-notion-field-notes.md): real production issues and fixes
- [Marketing System](marketing/): weekly content pipeline and graphics

---

## Skills

**AI and automation:** Claude (agents, skills, scheduled tasks, MCP connectors), prompt engineering, multi-step agent design, human-in-the-loop design, Zapier, webhooks
**Building:** JavaScript, HTML/CSS, Python, Node.js, scripting, vibe coding, document generation
**Data and systems:** Notion databases, Google Workspace (Forms, Sheets, Calendar, Gmail), CRM design, workflow mapping
**Business:** client discovery, solution design, scoping and pricing, contracts, technical writing, sales, content marketing

## How I work

- **Build for the problem you have.** Start simple, add sophistication only where real use shows it's needed.
- **Anchor on tools the client already uses** before adding anything new.
- **Humans stay in the loop** on anything client-facing. Agents draft, people send.
- **No fabrication.** Agents say "not found" instead of guessing, and every number I publish has a source.
- **Document everything,** including what broke and how it got fixed.
