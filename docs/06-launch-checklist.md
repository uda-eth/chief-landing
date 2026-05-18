# 06. Launch Checklist

Run this the moment DNS propagates on `chief.remyndai.com`. Do not skip steps. Each one takes under 5 minutes.

---

## Pre-flight (5 min)

- [ ] Open Terminal and run: `dig +short chief.remyndai.com`. Confirm it resolves to the Replit IP, not NXDOMAIN
- [ ] Open `https://chief.remyndai.com` in a private browser tab. Confirm the page renders, not a Replit 404
- [ ] Open `https://chief.remyndai.com/thank-you` directly. Confirm it renders

If any of the above fails, stop. DNS is not actually propagated yet. Wait or check with your DNS provider.

---

## End-to-end lead test (10 min)

- [ ] Submit the form on `https://chief.remyndai.com` with a real email (use a `+launchtest@` alias)
- [ ] Confirm you land on the thank-you page
- [ ] Open the candidate sheet, Leads tab. Confirm the row appeared inside 30 seconds
- [ ] Open Chrome DevTools, Network tab, reload the page. Confirm the GA4 request to `google-analytics.com/g/collect` with `tid=G-WXVVB2ETRN` fires
- [ ] (After pixel install) Confirm the Snap pixel fires the base event on landing page and the SIGN_UP event on thank-you page

---

## Clean the sheet (5 min)

- [ ] Open the Leads tab
- [ ] Delete every row where `lead_email` contains `test+curl` or `+launchtest` (use a column filter)
- [ ] Confirm only real leads remain (should be zero at sprint start)

---

## Snap pixel install (15 min, once Eric sends pixel ID)

- [ ] Get pixel ID from Eric Fettner (847-204-5833). If not in hand by Day 1 morning, see fallback in `02-snap-campaign-plan.md`
- [ ] Open `/snippets/snap-pixel.html`. Find every instance of `PIXEL_ID_PENDING` and replace with the real ID
- [ ] Paste the base pixel block into `index.html` directly before `</head>`
- [ ] Paste the SIGN_UP pixel block into `thank-you/index.html` directly before `</head>`
- [ ] Deploy (push to Replit or your hosting provider)
- [ ] Verify the pixel fires using Snap Pixel Helper Chrome extension on both pages
- [ ] In Snap Ads Manager, Events Manager, confirm the pixel status shows "Receiving Events"

---

## Render and upload Snap creatives (20 min)

- [ ] `cd creative && npm install` (first time only)
- [ ] `npm run render:identity` writes `creative/out/identity-mirror.mp4`
- [ ] `npm run render:pain` writes `creative/out/pain-point.mp4`
- [ ] In Snap Ads Manager, Creative Library, upload both MP4s
- [ ] Verify both auto-pass the spec checker (1080x1920, 9s, MP4, H.264, under 32MB)

---

## Build the campaign (20 min)

- [ ] Create campaign: "Phase 2 - Chief - Sprint"
- [ ] Objective: Website Conversions (SIGN_UP). If pixel not yet verified, use Swipe Ups as fallback and switch on Day 2
- [ ] Lifetime budget cap: $250
- [ ] Create Ad Set A: "Identity Mirror, iOS 25-34"
  - Audience config per `02-snap-campaign-plan.md`
  - Daily budget: $20
  - Creative: identity-mirror.mp4
  - URL: paste UTM from `05-utm-links.md` for `snap-creative-a-identity`
- [ ] Create Ad Set B: "Pain Point, iOS 25-34"
  - Same audience
  - Daily budget: $20
  - Creative: pain-point.mp4
  - URL: paste UTM for `snap-creative-b-pain`
- [ ] Both ad sets: schedule start = today, end = today + 2 days for the learning phase. Day 3 cut handled manually
- [ ] Submit for review

---

## Fill the Candidate Setup tab (10 min)

Paste these values exactly into the Setup tab of the candidate sheet:

| Field | Value |
|---|---|
| Candidate Name | Tony Udotong |
| Product Name | Chief |
| Product Slug | chief |
| Subdomain | https://chief.remyndai.com |
| Webhook URL | https://script.google.com/macros/s/AKfycbyxuWxWeaaXQPNzqBByPpDTheRpKAhd05Tro3Hgw56hLEKrnH6k-mu6VjXh-12VSM7N/exec |
| GA4 Measurement ID | G-WXVVB2ETRN |
| Snap Pixel ID | (paste once Eric sends it) |
| Snap Ad Account | Remynd Phase 2 - Chief (under "meta" org) |
| Snap Budget Total | $250 |
| Primary Target User Hypothesis | (paste from `00-hypotheses.md`) |
| Primary Channel Hypothesis | (paste from `00-hypotheses.md`) |
| Primary Message Hypothesis | (paste from `00-hypotheses.md`) |
| Final Ready To Start | **Yes** (flip last, after everything above is checked) |

---

## Day 1 schedule (15 min)

- [ ] Draft and queue Reddit post for r/Entrepreneur. Use template R1 from `04-outreach-templates.md`
- [ ] Draft Indie Hackers Discord post. Use template D1
- [ ] Draft X launch post. Use template X1
- [ ] Identify the first 5 LinkedIn DM targets. Open each profile in a tab. Personalize template L1 or L3 for each
- [ ] Text Sam, Emmanuel, Isaiah with template E1

---

## Final check before flipping Ready

- [ ] All UTM links in `05-utm-links.md` resolve to a 200 page (spot-check 3)
- [ ] The webhook still passes a real lead test (you tested above, this is the redundancy check)
- [ ] You have screenshots of the live landing page saved somewhere outside Replit (in case of incident)
- [ ] The Snap campaign is built but not yet submitted for review (or is in review, not approved). Submit only when you are ready to start Day 1

---

## After flipping Ready

- [ ] Open `03-daily-schedule.md`
- [ ] Run Day 1 morning block
- [ ] Set a 24-hour reminder for Day 2 morning block
- [ ] Breathe. The sprint is live.
