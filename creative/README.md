# Chief creative (Remotion)

Two 9-second 1080x1920 vertical Snap ads, built in Remotion. No paid asset generation. Pure code.

## Compositions

| ID | File | Theme | Output |
|---|---|---|---|
| `IdentityMirror` | `src/IdentityMirror.tsx` | Stylized iMessage thread of founder texting Chief | `out/identity-mirror.mp4` |
| `PainPoint` | `src/PainPoint.tsx` | Chaos cuts (calendar, inbox, Notion, Slack) into serif statement into resolution | `out/pain-point.mp4` |

Spec for both: 1080x1920, 30fps, 9s (270 frames), H.264 MP4, Snap-compliant.

## Setup

```bash
cd creative
npm install
```

First install pulls Remotion plus its bundled Chromium-headless. About 200 MB on disk, takes 2 to 3 minutes.

## Preview in browser

```bash
npm run start
```

Opens Remotion Studio at http://localhost:3000. Scrub the timeline, tweak text, save and reload. Edit in `src/IdentityMirror.tsx`, `src/PainPoint.tsx`, or the shared `src/Bubble.tsx`.

## Render to MP4

```bash
npm run render:identity   # writes out/identity-mirror.mp4
npm run render:pain       # writes out/pain-point.mp4
npm run render:all        # both
```

Render time: 1 to 3 minutes per composition on an M-series Mac. Output is Snap-spec-compliant on first render.

## Editing the copy

Edit the strings inline in each composition file. Then re-render.

- Identity Mirror bubble text: `src/IdentityMirror.tsx`, search for `<Bubble`
- Pain Point serif statement: `src/PainPoint.tsx`, search for `SerifStatement`
- Tagline (both): the `TaglineOverlay` and `Resolution` components

## Brand tokens

| Token | Value | Use |
|---|---|---|
| Page background | `#000000` | All compositions |
| iOS blue (outgoing bubble) | `#0B84FF` | Outgoing iMessage, tagline accent |
| iOS gray (incoming bubble) | `#3A3A3C` | Incoming iMessage in dark mode |
| Alert red | `#FF3B30` | Inbox unread badge, Slack pings, "stale" warnings |
| Font stack | SF Pro / Inter / system | Defined in component files |

## Snap upload

Once `out/*.mp4` exist:

1. Open Snap Ads Manager, Creative Library
2. Upload both files
3. Confirm spec checker shows green (1080x1920, MP4 H.264, under 32 MB)
4. Attach each to its Ad Set as defined in `/docs/02-snap-campaign-plan.md`
5. Paste UTM URL from `/docs/05-utm-links.md` into the ad's URL field

If Snap rejects either creative for policy, the most likely reason is the iMessage UI mock resembling Apple branding. Fix by changing the blue from `#0B84FF` to a non-Apple shade and softening the bubble corners.

## Adding a third creative for Day 5 retest

1. Copy `src/IdentityMirror.tsx` to `src/RetestV3.tsx`
2. Register it in `src/Root.tsx` with id `RetestV3`
3. Add a render script in `package.json`: `"render:retest": "remotion render RetestV3 out/retest-v3.mp4 --codec h264"`
4. Render and upload as the Day 5 swap creative

## What this does not do

- No motion-tracked footage, no real iPhone photo render
- No voiceover, no audio bed (Snap auto-plays without sound; caption is the headline)
- No paid asset APIs (no Runway, no Pika, no Sora). Everything is code

If you want a more polished version after the sprint, swap the Tailwind-like inline styling for an actual component library and add subtle motion (parallax, blurred edges, etc.). For a 5-day sprint, the current version is correct.
