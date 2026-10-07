# Transaction Intake → Google Calendar Sync

**Status:** Complete. Built and delivered to a real estate team (client #1).

## Problem

A real estate team lead tracked every transaction's deadlines (inspection, appraisal, financing, closing, and so on) by hand. Intake data already lived in a Google Form, but none of it reached her calendar automatically.

## Solution

A Google Apps Script bound to the form's response sheet. On every submission it creates one all-day event per filled-in date field on the team calendar, with the client and notes in the description.

Code: [Code.gs](Code.gs)

## Decisions

- **Apps Script over Zapier.** No monthly subscription and no extra login for the client. It runs inside tools she already pays for.
- **Write by calendar ID**, not under the client's login, so access can be scoped with a consent form.
- **Skip blanks** so a half-filled form doesn't create empty events.

## What broke and how I fixed it

- The real form had **12 date fields, not the 6** the first version assumed. Mapped from the live form instead of the description.
- The first live pass created **8 of 12** events. A leftover trigger from a test account was firing alongside the real one. Fixed by replacing the script and wrapping each event in try/catch with a short pause. The reference code here also clears stale triggers on install so it can't happen again.
- A full 12-field test submission then produced all 12 events.

## Process

1. Tested with dummy data on my own calendar
2. Got scoped access through a signed Client Consent & Access Authorization (form, response sheet, and calendar shared separately)
3. Rebuilt against the real form, tested end to end, delivered with handoff instructions
