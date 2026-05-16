# Chief — iMessage-native AI Chief of Staff

A marketing landing page for "Chief", an iMessage-native AI chief of staff product targeted at solo operators and small services businesses.

## Run & Operate

- **Dev server:** `npm run dev` (Vite, port 5000)
- **Production build:** `npm run build` (outputs to `dist/`)
- **Deployment:** Static site — Replit publishes `dist/` via `npm run build`

## Stack

- Vite + React + TypeScript
- Tailwind-free — pure inline CSS with CSS custom properties
- React Router v6 for SPA routing (`/` and `/thank-you`)
- No backend — form POSTs directly to Google Apps Script webhook (no-cors mode)

## Where things live

- `index.html` — entry point (includes GA4 script + Google Fonts)
- `src/main.tsx` — React root mount
- `src/App.tsx` — Router + GA4 page_view tracking on route change
- `src/index.css` — Global CSS variables, grain texture, animations
- `src/pages/Landing.tsx` — Full landing page
- `src/pages/ThankYou.tsx` — Confirmation page (`/thank-you`)
- `src/components/Nav.tsx` — Fixed nav bar
- `src/components/Footer.tsx` — Minimal footer
- `src/components/IMessageThread.tsx` — Animated fake iMessage thread
- `src/components/SignupForm.tsx` — Lead capture form with webhook + UTM tracking

## Architecture decisions

- Single-page app with React Router; `/thank-you` reachable via direct URL in dev (Vite SPA fallback) and production (static host handles it).
- Google Apps Script webhook called with `mode: 'no-cors'` — response is opaque, treat fetch resolution as success.
- UTM params captured on mount via `useEffect`, stored in a ref, submitted with the form payload.
- GA4 page_view fired on every route change via `useLocation` effect in `App.tsx`.
- iMessage thread animation auto-cycles on a ~7s loop.

## Product

Chief is positioned as an iMessage-native AI teammate for non-technical operators (solo consultants, brokers, agencies, founders). The landing page captures private beta leads.

## Live domain

https://chief.remyndai.com (CNAME to Replit deployment URL — configured externally)

## GA4

Tracking ID: `G-WXVVB2ETRN`

## Form webhook

`https://script.google.com/macros/s/AKfycbyxuWxWeaaXQPNzqBByPpDTheRpKAhd05Tro3Hgw56hLEKrnH6k-mu6VjXh-12VSM7N/exec`

## User preferences

- Dark mode default (#0A0A0A bg, off-white text)
- Warm metallic gold accent (#C9A961) used sparingly
- Serif headlines (Fraunces), sans body (Inter)
- No em dashes in copy
- No cookie banners, popups, or anti-pattern conversion tactics
- No emoji, no "AI sparkle" gradients, no stock illustrations

## Gotchas

- Do not use em dashes anywhere in copy
- The phone number on the thank-you page is a placeholder — swap when Tony provides it
- The webhook uses `no-cors` — the browser never sees the response body; this is expected
