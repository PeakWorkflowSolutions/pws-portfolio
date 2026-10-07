---
name: pws-motion-a-content
description: "Turns a new PWS video script/transcript into a ready-to-post batch of platform-specific social copy — the established priority channel set, brand voice, and per-platform formatting rules baked in."
---

# PWS Motion A — Content Batch Generator

Motion A's design (locked Aug 29): record a video weekly → use its script/transcript as raw material → draft platform-specific post copy — not native platform drafts, not auto-posted. Marcos copy-pastes each one in himself. Human-in-the-loop by design, same philosophy as Sales & Outreach: one bad automated post in a small, relationship-driven local market costs more than it saves.

**Sept 8 update:** Post #1 (the launch post) pivoted from video to a headshot + caption after Marcos got feedback that intro-style videos get skipped. The full video script is still on file if he goes back to it, but until he says otherwise, treat static photo + caption as a valid, equally-first-class format alongside video — not just a fallback.

## Trigger

Marcos has a new video script, transcript, photo + topic, or recording ready and wants that batch of social posts.

## Core decisions (don't re-derive these each time)

1. **Source the actual script/transcript/topic** — read the real file, don't paraphrase from memory of a prior conversation. If nothing's written down yet, ask for it rather than inventing content.
2. **Priority channel set for every batch:** Facebook (native post, then shared into 2–3 relevant Yakima-area community/business groups), Google Business Profile, Instagram (Reel caption, or a photo caption for a static post), LinkedIn. If there's a video, also get it onto **YouTube** — not as a promotional push, just so it has a permanent, search-indexable home the other posts can point to.
3. **TikTok is conditional, not default.** Only draft a TikTok caption if there's (or will be) a separately-cut short clip (~30–45s) that opens on a hook/problem beat — the full-length video underperforms there. If no short cut exists yet, say so explicitly rather than quietly reusing the long-form caption. Not applicable to static-photo posts.
4. **Nextdoor is optional**, worth mentioning as an add-on, not a required part of every batch.
5. **Every batch should be a genuinely new topic**, not a repost of a prior week's content — vary it against the quarterly marketing goals (local Yakima awareness, accuracy over volume, double down on what's working, find fresh angles on the same core message, keep branding/voice consistent). The introduction post only runs once; don't regenerate it.
6. **Open item to flag once, not every batch:** the "Facebook is primary channel" read is still a hypothesis (based on watching one local contact run his business off Facebook), not yet confirmed against other clients and prospects. Don't silently treat it as settled fact — mention it's still open until Marcos says it's been confirmed one way or another.

## Brand voice rules (apply to every platform)

- **No em dashes, ever.** Split into separate sentences or use a comma instead. This was a direct, repeated correction from Marcos — treat it as a hard rule, not a style preference to weigh.
- No hype, no overselling, no black-box vendor energy — plain, direct, first-person, like explaining it to a neighbor.
- Grounded in respect for local business owners: not just "chasing their dream for their family," but pursuing their own success and real business aspirations. Family time is one real cost of repetitive work, but it's not the only one — say explicitly that it also costs the business growth/success they're working toward. Preferred phrasing: "I respect that chase" (not "I respect the go-for-it mindset" — Marcos corrected this once already, don't revert to it).
- **Human-creativity framing, include this idea somewhere in every batch:** PWS is not about replacing a business owner's own skill or judgment with a computer — it's about giving them room to actually use it, on work that matters, instead of losing it to repetitive tasks. Don't let the post read as "AI replaces you."
- **Do NOT include a personal proof-of-use line** (e.g. "I built this for my own business first and use it daily") unless Marcos specifically asks for it in that batch — he had this removed from the launch post as of Sept 8. Don't treat it as a default beat anymore.
- **CTA/pitch language is contextual, not universal:** a pure story/positioning post (like the launch post) should carry NO CTA and no "no pitch, just a conversation" line at all — let it stand as story. A post whose actual job is to generate a lead or start a conversation (an offer post, a soft mention of a specific service) can carry a CTA — just keep it low-pressure, conversational, never urgency-based ("first 5 this month" is opt-in, not default).
- Minimal to no emojis — the brand is deliberately "rooted in the basics," and heavy emoji use reads against that. At most one, only where a platform convention genuinely expects it (e.g., an Instagram link-in-bio pointer).

## Marcos's personal grounding details (reuse verbatim, don't paraphrase loosely)

- Born and raised in the Yakima Valley; currently lives in Selah (not "lives in Selah now" — say "currently lives in").
- Proud father. Works a normal job (not "full-time job" — Marcos specifically swapped this phrasing out).
- Roughly the last year spent working toward PWS.
- Open-automation positioning still applies: never list a fixed menu of named services as the business's definition — specific builds (bid generation, missed-call capture, calendar sync, AI-discoverability audits) are hook examples only.

## Per-platform formatting

- **Facebook:** longest, full paragraphs, story-forward. Post the video natively (not a link-out) when there is one. No hashtags needed.
- **Instagram:** shorter, hook in the first line (it's what shows before "more"), short paragraph breaks, post as a Reel (or as a static photo post when that's the format). End with ~8–9 relevant hashtags (mix of local: #YakimaWA #YakimaBusiness #Selah, and topical: #SmallBusinessAutomation #AIforSmallBusiness, adjusted to that week's topic).
- **LinkedIn:** professional register but still first-person and authentic, slightly more focused on the business-owner-to-business-owner angle. Sign off with name/title ("Marcos Gonzales, Founder, Peak Workflow Solutions | Yakima, WA"). ~3–5 hashtags, not 8–9.
- **TikTok (when applicable):** short, hook-first caption matched to the short cut, not the full video. Note in the deliverable which beat of the script the short clip should open on. ~5–6 hashtags, TikTok-native style (e.g. #SmallBusinessTok).

## Reference example

The project doc `claude/pws-voice-reference-post1.md` holds the fully-iterated, Marcos-approved launch post (Facebook/Instagram/LinkedIn) as of Sept 8 — read it when in doubt about tone or sentence-level style, not just the rules above. The Instagram version in that doc is Marcos's own hand-edit; treat its exact phrasing as the clearest signal of his real voice.

## Delivery

1. Draft all applicable platform posts in one markdown file, clearly headed by platform, with any platform-specific production notes (e.g. "cut a 30-45s clip opening on X" for TikTok) called out inline.
2. Deliver via SendUserFile — never auto-post, never draft directly into a platform's own composer.
3. Log the batch (topic, channels used, any open items) to the project build-log doc.

## Verification

- [ ] Every post is sourced from a real script/transcript/topic, not invented from memory
- [ ] No em dashes anywhere in the drafted copy
- [ ] No personal proof-of-use line unless specifically requested
- [ ] CTA presence matches the post's actual job (none for pure story posts, low-pressure conversational CTA for offer/lead posts)
- [ ] Human-creativity framing (not replacing skill, giving room to use it) included somewhere in the batch
- [ ] TikTok caption only included if a short-clip cut is specified alongside it
- [ ] No channel outside the established set was added without calling it out as new
- [ ] Voice check: no hype/oversell language, no urgency CTAs, minimal emoji
- [ ] This batch's topic is genuinely new, not a rerun of a prior week's post
- [ ] The Facebook-primary-channel open item is still flagged if it hasn't been confirmed yet