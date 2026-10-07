# Discovery Framework

The same core questions in every prospect meeting, so answers are comparable across businesses and actually inform what to build.

1. How does your core process (bids, intake, booking, follow-up) work right now?
2. What takes the most time in it?
3. What's the volume? How many bids, jobs, or calls a month?
4. What would change if that took 15 minutes instead of hours?
5. How would faster turnaround affect your win rate or customer experience?

Adapted lightly to each business, never replaced.

## After the meeting: the 5-item close-out

Every client meeting has to produce these before paperwork can be drafted:

| Item | Example |
|---|---|
| Scope of work | Which automations, in what priority order |
| Estimated timeline | Per deliverable |
| Pricing | One-time and/or recurring |
| Payment method | How they'll pay, autopay for retainers |
| Access needed | Exact systems and accounts |

The [`pws-meeting-intake`](../skills/pws-meeting-intake/) skill reads the meeting transcript, checks it against this list, and shows what's answered vs. still open so gaps get filled before everyone hangs up. The completed set feeds straight into the [contract generator](../projects/contract-generator/).
