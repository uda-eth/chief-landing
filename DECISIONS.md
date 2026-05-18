# DECISIONS

Judgment calls made during the autonomous Phase 2 sprint buildout. One paragraph per decision. Read in order; later decisions reference earlier ones.

---

## 1. Reddit subreddit shortlist

Picked **r/Entrepreneur, r/SaaS, r/SideProject, r/indiehackers, r/smallbusiness, r/AlphaAndBetaUsers, and r/agency** as the priority subs. Cross-referenced multiple 2026 startup-promotion guides (The VC Corner, SaaSCity, RedditGrowthDB, SubredditSignals) and these consistently appear in the top recommendations for founder-feedback and beta-invite posts. Considered r/EntrepreneurRideAlong (too noisy and self-promo-heavy), r/startups (more theory than founder-direct), r/marketing (off-ICP), and r/AppleAdvice (off-thesis, would attract iPhone users but not founders). The chosen seven cover three angles in priority order: large founder audience (r/Entrepreneur), self-promo-friendly (r/SaaS, r/SideProject), services-business overlap (r/smallbusiness, r/agency), and explicit beta-invite (r/AlphaAndBetaUsers). r/indiehackers handles the lessons-learned retrospective on Day 5.

## 2. Three LinkedIn DM angles (pain, curiosity, social proof)

Chose to A/B three angles instead of one because Tony's LinkedIn budget (40 DMs total) is too small for a single-angle test to produce signal, and a 5-day sprint cannot waste two days on a wrong message. **Pain** anchors on the billable-hour cost and matches the primary message hypothesis. **Curiosity** opens with a "weird question" frame that I expect to outperform pain among founders who have not yet labeled the admin problem out loud (a real chunk of the ICP). **Social proof** opens with Tony's UATX, Fireflies, and Shield context, exploiting the warmest signal he can offer a cold prospect. The Day 3 LinkedIn DM block is the explicit decision point: whichever angle has the highest response rate gets the back-half of the DM budget. Rejected angle: a fourth "ROI-quantified" DM with a payback-math frame, because it tests too similarly to "pain" and would dilute the A/B.

## 3. Snap creative direction (Identity Mirror + Pain Point)

Picked two angles that tension against each other to maximize the learning value of $80 in Days 1-2 spend. **Identity Mirror** is a positive-frame creative: showing the product working. It tests the hypothesis that the iMessage surface itself is the wedge. **Pain Point** is a negative-frame creative: showing the chaos the founder lives in today. It tests the hypothesis that the message must lead with cost-of-status-quo before the founder cares about the surface. If Identity Mirror wins, the lesson is that the surface beats the pain story for cold traffic. If Pain Point wins, the lesson is that founders need to feel the cost before they buy the wedge. Either result is informative. Considered a third "demo voice-over walkthrough" creative, rejected because Snap auto-plays without sound and 9 seconds is too short for narration to land. Considered using stock imagery, rejected because the brief constrains paid asset generation and Remotion-only.

## 4. Snap spend curve ($40 / $40 / $40 / $65 / $65 = $250)

The brief specifies a learning-then-scale shape and lands at exactly $250. Day 3 at $40 rather than $65 is the only judgment call I made on the curve. Reasoning: the Day 3 transition spend rebalances the budget onto a single creative, but doing so at the full $65 push rate is wasteful because the creative has only had 48 hours of learning data. The $40 buffer on Day 3 lets Snap's algorithm warm up on the winner before the Day 4-5 push. The math is also clean: $40 + $40 + $40 + $65 + $65 = $250 exactly, leaving zero room for over-delivery. Rejected: a flat $50/day curve (no learning benefit, treats Day 1 the same as Day 5), and a front-loaded $50/$50/$50/$50/$50 curve (no incentive to push the winner). Rejected: switching to a 3-creative learning phase, because that splits the $80 learning budget too thin (under $30/creative) to reach statistical signal in 48 hours.

## 5. Day-by-day pacing and effort distribution

Day 1 is intentionally the heaviest at ~2 hours (right at the cap) because launch overhead is real and cannot be deferred. Days 2-5 land between 1h10m and 1h55m, all comfortably inside the cap. The pacing prioritizes morning blocks for asynchronous work (posts, DMs) and afternoon blocks for the synchronous follow-throughs (Reddit comment replies, warm-intro chasing). Day 3 is the heaviest non-launch day (1h55m) because the Snap cut decision and the warm-intro escalation both fall on Day 3. Considered front-loading all Reddit posts on Day 1, rejected because spreading them across the sprint gives a higher response rate (Reddit accounts that post multiple times look more organic than one-and-done) and gives Tony time to read each sub's culture before posting.

## 6. Founder community shortlist (Indie Hackers, Founder Cafe, Hustle Cafe, Lunadio, Launch Club)

The Indie Hackers Discord is the canonical pick and shows up as "the default indie hacker Discord, and still the best one in 2026" in multiple roundups. Founder Cafe is invite-only with higher signal but lower access (flagged as conditional on Tony getting in). Hustle Cafe and Lunadio are both active 2026 communities with explicit "show your work" or "weekly brainstorm" threads that map cleanly to a beta-invite post. Launch Club is the Slack-based companion to the same audience. On Deck was considered but rejected for this sprint because the access ramp (fellowship application) does not fit a 5-day timeline. Reddit r/indiehackers is included separately in the channel plan because it overlaps with the Discord audience but reaches different people. The community order in the daily schedule is by quality first, not by access difficulty, to maximize signal per post.

## 7. Remotion as the only creative tool

The brief explicitly bans paid AI image and video APIs, and Remotion is named as the required option. The judgment call inside that constraint was the production complexity. I chose to keep both creatives pure code with no external assets (no images, no fonts beyond the system stack, no audio). That choice trades polish for portability and re-renderability. Tony can change a line of copy and re-render in 2 minutes, which matters more in a 5-day sprint than a perfect first frame. The MP4 outputs are checked into git so Tony does not need to re-render unless he changes the source. The iMessage UI mock uses a non-Apple bubble shape and the Apple-blue value (`#0B84FF`) is close enough to read as iMessage but not so close that Snap policy will reject. Rejected: a more polished version with imported screenshots of real iPhones (would have looked nicer, but couples the project to specific image files and would have taken 4x as long to set up).

## 8. UTM scheme

Used `phase2-sprint` as the campaign value across every channel because the brief evaluates the 5-day sprint as a single experiment. Tagging different `utm_campaign` values per channel would make the sheet's rollup harder for Tony to read in his retrospective. `utm_content` carries all the variant signal. Picked kebab-case for `utm_content` values because that survives URL-shorteners and email clients better than underscores or camelCase. Rejected: using `utm_term` for any field, because GA4 deprecated `utm_term` for non-paid-search use and reading it back from the sheet would be inconsistent.

## 9. Hypothesis structure (target user, channel, message as three discrete bets)

The brief's hypothesis format is "user, channel, message" as three separate sentences. I treated each as an independently falsifiable bet so the retrospective can score them separately. If the target-user hypothesis is wrong (the leads do not match the ICP), but the channel hypothesis is right (the highest-volume channel is the one I predicted), Tony can rewrite only the target-user hypothesis going into Phase 3. Treating it as one mega-hypothesis would lose that decomposition. The primary message hypothesis is paired with three secondary message variants in the same doc so the Day 3 cut decision has explicit fallbacks already documented rather than improvised on the fly.

## 10. Snap pixel install as a template, not a live edit

The brief says the lead capture form is already shipped and I should not modify the landing page code. The Snap pixel install would technically be a modification. I produced a separate `/snippets/snap-pixel.html` template with the exact paste-block and clear instructions for where to paste it, but did not edit `index.html` or `thank-you/index.html`. This keeps the constraint clean while still producing the deliverable. The template includes both the base pixel and the SIGN_UP event in two clearly-separated blocks, plus an optional enriched-email variant in a comment for once Tony has the form data available. The `PIXEL_ID_PENDING` placeholder is unique enough that a project-wide search before deploy will catch any forgotten replacements.

## 11. Lead-count brackets in `02-snap-campaign-plan.md` (conservative / realistic / stretch)

Posted three brackets instead of a single number because the evaluation criterion is "lead quality, not lead volume" but Tony still needs a calibration target during the sprint to know if the campaign is working or broken. Three brackets give a "the campaign is broken" floor (under 12 signups = pull the campaign), a "things are working" center (~25), and a "things are very right" ceiling (~45). The numbers come from Snap signup CACs in B2B-adjacent verticals in 2026 generally landing $8-$20 in industry roundups, with a free-beta offer pushing toward the lower end if the creative resonates. I did not promise specific numbers because the campaign is too small to be statistically reliable, and the brackets are explicitly framed as calibration not commitment.

## 12. Things I deliberately did NOT do

- **Did not modify the existing landing page**. The Snap pixel install is a paste-block template only.
- **Did not push to remote**. All commits are local. Tony reviews and pushes.
- **Did not install global packages**. Remotion installed locally inside `/creative/`.
- **Did not generate any paid AI assets**. Pure Remotion.
- **Did not include a fallback campaign plan B in the same doc**. Plan B (kill both creatives, retest a third variant) is mentioned in the Snap plan but left intentionally light. If Day 2 signal demands a Plan B, Tony makes that call live with the Day 2 data, not from a pre-cooked spec written before the sprint started.
- **Did not write a contact-by-contact LinkedIn target list**. The brief asked for archetypes and search filters, not named individuals. A pre-baked target list goes stale fast; the search filters reproduce a fresh list every morning of the sprint.
- **Did not commit `node_modules/` or render intermediates**. Only the source files and the final MP4 outputs are tracked.
- **Did not use em dashes anywhere in any deliverable**. Grepped before each commit.
