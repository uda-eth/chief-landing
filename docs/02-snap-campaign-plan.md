# 02. Snap Campaign Plan

$250 budget, 5 days, two-creative learning phase into single-winner scale.

---

## Campaign-level setup

| Field | Value |
|---|---|
| Account | Remynd Phase 2 - Chief (under "meta" org) |
| Campaign objective | App Installs disabled. Use **Website Conversions** with SIGN_UP event |
| Conversion event | SIGN_UP (fired on /thank-you via Snap pixel) |
| Pixel ID | PENDING from Eric Fettner (847-204-5833). Blocks ad launch |
| Attribution window | 7-day swipe, 1-day view (default) |
| Bid strategy | Auto-bid for the learning phase. Switch to target-cost on Day 3 if the winner is clear |
| Placement | Snap Ads (single video) only. No Story Ads, no Collection, no AR |
| Brand safety | Standard. No exclusions needed |

---

## Audience

| Field | Value |
|---|---|
| Country | United States |
| Age | 25 to 34 |
| Gender | All |
| Device | iOS only (iMessage gating) |
| Languages | English |
| Interest stack | Entrepreneurs + Business & Finance + Technology Enthusiasts |
| Custom audiences | None on Day 1. Build a website-visitors retargeting audience by Day 3 if pixel data is clean |
| Lookalikes | None in this sprint (not enough seed data) |

Hard exclusions: none. Snap targeting is wider than Meta. Trust the interest stack to do the filtering.

---

## Creative spec (matches Snap 2026 specs)

| Field | Value |
|---|---|
| Aspect ratio | 9:16 |
| Resolution | 1080 x 1920 |
| Frame rate | 30 fps |
| Codec | H.264, MP4 |
| Duration | 9 seconds (under the 10s recommended max) |
| File size | Under 32 MB |
| Captions | Required (Snap auto-plays without sound). See `/creative/captions.md` |
| Brand name | "Chief" |
| Headline | "Your chief of staff. In iMessage." |
| CTA button | Sign Up |
| URL | `https://chief.remyndai.com/?utm_source=snapchat&utm_medium=paid&utm_campaign=phase2-sprint&utm_content=snap-creative-a-identity` (Creative A) or `=snap-creative-b-pain` (Creative B) |

Both creatives produced via Remotion at `/creative/out/identity-mirror.mp4` and `/creative/out/pain-point.mp4`.

---

## Ad set structure

### Days 1 and 2: Learning phase

| Ad Set | Creative | Daily budget | Duration | Notes |
|---|---|---|---|---|
| ASET-A: Identity Mirror | identity-mirror.mp4 | $20 | 2 days | iMessage thread storytelling |
| ASET-B: Pain Point | pain-point.mp4 | $20 | 2 days | Chaos to clarity cut |

Total spend Days 1 to 2: $80.

### Day 3: Cut and scale

Read the data at end of Day 2 (after 48 hours of run time). Decision criteria, in priority order:

1. **Cost per SIGN_UP**. Whichever ad set is lower wins, if both are below $25.
2. If neither has a SIGN_UP yet, use **CTR**. Winner is the ad set with the higher swipe-up rate.
3. If both are below 0.5 percent CTR, **kill both** and reload with a third creative iteration. Do not throw good money after bad.

On Day 3, pause the loser. Rebalance budget on the winner ad set to $40 for Day 3 only. This gives 24 hours of warmer learning before the push.

Day 3 spend: $40.

### Days 4 and 5: Push

Winner ad set at $65/day for 2 days. Total push spend: $130.

If Day 4 morning shows the winner is now under-performing its Day 2 numbers (CAC up >50 percent), do not push the full $65. Cap at $40 and reserve the difference for a Day 5 retest creative.

---

## Spend curve

| Day | ASET-A | ASET-B | Winner | Total | Cumulative |
|---|---|---|---|---|---|
| 1 | $20 | $20 | n/a | $40 | $40 |
| 2 | $20 | $20 | n/a | $40 | $80 |
| 3 | (winner only) | | $40 | $40 | $120 |
| 4 | | | $65 | $65 | $185 |
| 5 | | | $65 | $65 | $250 |

Cap on Snap account: $250 lifetime. Set this at the campaign level so an attribution glitch does not drain the budget.

---

## Expected outcomes

| Metric | Conservative | Realistic | Stretch |
|---|---|---|---|
| Impressions | 75k | 120k | 180k |
| Swipe-ups | 750 | 1,500 | 2,700 |
| Site signups | 12 | 25 | 45 |
| Cost per signup | $20 | $10 | $5.50 |

These are bracket estimates. Snap signup CACs in B2B-adjacent verticals run $8 to $20 in 2026; a free beta with a focused ICP lands at the lower end if the creative resonates. Treat $10 to $15 as the expected center.

---

## Tracking and UTMs

Every ad has a unique UTM `content` tag (full list in `05-utm-links.md`):

- `snap-creative-a-identity`
- `snap-creative-b-pain`
- `snap-winner` (use after Day 3 cut; reuses the winning creative URL)

Snap's URL field supports query strings natively. Paste the full UTM URL when setting the ad's destination.

---

## Things that can kill the campaign

1. **Pixel not installed in time.** Snap cannot optimize for SIGN_UP without a verified pixel event. If Eric's pixel ID is not in hand by Day 1 morning, launch on "Swipe Up" objective instead and switch to SIGN_UP on Day 2 once installed.
2. **iOS-only filter accidentally off.** This is the single most expensive mistake possible. If the audience accidentally includes Android, the swipe traffic will hit a page that gates them out and waste 100 percent of that spend.
3. **Daily caps not set.** Snap can occasionally over-deliver. Set both daily and lifetime caps.
4. **Creative rejected for policy.** Both creatives use stylized text on a black background and an iMessage UI. Snap usually approves this within 30 minutes. If a creative is rejected, the most likely reason is the Apple iMessage UI mock looking like a real product endorsement. The fix is to soften the bubble shape and change the blue.
5. **No leads after Day 2.** Pull the campaign and shift the $170 remaining to a second creative round (see Decisions log for Plan B copy).
