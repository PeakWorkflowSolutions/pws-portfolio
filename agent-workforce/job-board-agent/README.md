# Job Board Agent

**Status:** Complete. Runs every three days.

## What it does

A personal agent that keeps a job board up to date without me searching. Every three days it:

1. Reads every job already on the board so it never adds a duplicate (company match plus same or near-same title, ignoring punctuation, "Sr.", location suffixes, and requisition numbers).
2. Searches **Indeed**, **ZipRecruiter**, and **Dice** for postings from roughly the last three days, across two tracks:
   - **Accessible:** roles I can land now
   - **Trajectory:** where I'm heading (analyst, AI automation, operations, process improvement), including remote
3. Filters on a pay floor, location, and hard disqualifiers (licenses I don't have, senior engineering roles, etc.).
4. Writes each new match to the board's database with a plain-language **fit** note and an honest **gap** note.
5. Ends with one line: how many were added and the single best pick.

It never applies, never writes resumes, never sends email, and never edits or re-statuses existing rows.

## How it's built

- Claude scheduled task, cron every 3 days
- Connectors: Indeed, ZipRecruiter, Dice
- Storage: a published Claude artifact (the job board UI) with its own shared document database. The agent writes rows with batched `set` operations; the board renders them.
- Each row: title, company, location, pay, job type, posted date, closing date, source, URL, track, status, found-on date, fit, gap
- Doc IDs are deterministic (`company-title`, lowercased, non-alphanumerics replaced), which is a second layer of duplicate protection.

## Resilience

If a job board's connector errors, it retries once, then skips that board for the run and continues with the others.
