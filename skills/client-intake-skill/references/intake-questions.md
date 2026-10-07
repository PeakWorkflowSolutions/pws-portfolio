# Client Intake Questionnaire

Ask the user for this information before generating outputs. If some answers
are already known from context (e.g. from a prior conversation or an uploaded
form), confirm rather than re-asking.

1. **Business name**
2. **Industry/business type** (e.g. wedding venue, landscaping, contractor)
3. **Owner's tone preference for SMS replies** — default is short and
   professional/neutral (per PWS standard) unless the client wants
   something different
4. **Genuine inquiry signals** — what words/phrases/context indicate a real
   lead for this business? (Prompt the user to think in terms of keywords and
   caller intent, e.g. "wedding," "quote," "book a tour," or someone calling
   on behalf of another person.)
5. **Non-genuine signals** — what should be filtered out? (spam, wrong numbers,
   vendor solicitations, etc. — usually similar across industries, but confirm)
6. **Form fields needed** — what info should the lead provide? If the client
   already has a Google Form built, ask for the link/field list instead of
   generating new ones.
7. **Form link** — if not yet built, note as [FORM LINK] placeholder in
   generated outputs, to be filled in once the form exists.

Once all answers are collected, proceed to generate the five outputs described
in `output-templates.md`.
