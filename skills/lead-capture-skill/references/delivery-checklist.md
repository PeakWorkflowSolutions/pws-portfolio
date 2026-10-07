# Client Delivery Checklist — AI-Powered Missed Call Lead Capture System

## 1. Intake
- [ ] Confirm business name, industry, and owner's preferred tone
- [ ] Identify genuine inquiry signals for this industry (keywords/context)
- [ ] Identify non-genuine call signals to filter out

## 2. Google Form Setup
- [ ] Build/confirm Google Form with industry-specific fields
- [ ] Link Form to a new Google Sheet (Responses tab → link to Sheets)
- [ ] Turn on "Get email notifications for new responses" (Responses tab, 
      three-dot menu)
- [ ] (Optional) Set Sheet-level notification rules for daily digest if 
      owner prefers a summary over instant alerts

## 3. OpenPhone Setup
- [ ] Set up/confirm OpenPhone number and call forwarding
- [ ] Confirm voicemail transcription is enabled

## 4. Zapier Build (3 Zaps)
- [ ] Zap 1: Trigger on new OpenPhone voicemail/transcription
- [ ] Zap 2: Send transcript to Claude with client's customized prompt 
      (business name, industry, form link filled in)
- [ ] Zap 3: Parse Claude's response — if INQUIRY: YES, send SMS via 
      OpenPhone with the drafted text; if NO, chain stops

## 5. Testing
- [ ] Call the business number and leave a genuine test voicemail — 
      confirm SMS reply is sent correctly
- [ ] Call and leave a non-genuine/spam-style voicemail — confirm no 
      SMS is sent
- [ ] Submit a test form response — confirm it lands in the Sheet and 
      triggers the notification

## 6. Handoff
- [ ] Walk the owner through: where leads show up (the Sheet), how 
      notifications work, what to do with a new lead
- [ ] Leave owner with a one-page quick reference (optional add-on)
- [ ] Confirm consent for testimonial/case study use, if applicable
