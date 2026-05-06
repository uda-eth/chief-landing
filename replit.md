# Chief — WhatsApp-native AI Chief of Staff

A static marketing landing page for "Chief", a WhatsApp-native AI chief of staff product.

## Run & Operate

- **Dev server:** `python3 -m http.server 5000 --bind 0.0.0.0` (served via workflow on port 5000)
- No build step, no environment variables required.

## Stack

- Plain HTML (single file: `index.html`)
- Tailwind CSS via CDN
- Inline CSS for custom styles and animations
- No framework, no package manager

## Where things live

- `index.html` — entire site (markup, styles, content)

## Architecture decisions

- Single-file static site; no build pipeline needed.
- Tailwind loaded via CDN script for zero-config styling.
- Deployed as a static site (no server-side processing).

## Product

Marketing landing page showcasing Chief's WhatsApp-based AI assistant features, pricing, and call-to-action.

## User preferences

_Populate as you build_

## Gotchas

- Dev server is `python3 -m http.server` — not a production server. Deployment uses static hosting.

## Pointers

- Deployment skill: `.local/skills/deployment/SKILL.md`
- Workflows skill: `.local/skills/workflows/SKILL.md`
