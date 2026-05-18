# 05. UTM Links

Pre-built UTM links for every channel and variant in the sprint. Base URL: `https://chief.remyndai.com`. Campaign value is `phase2-sprint` everywhere for clean rollups.

Copy each link as-is. Do not edit `utm_source`, `utm_medium`, or `utm_campaign`. Only edit `utm_content` if you spin up a new creative variant inside an existing channel.

The CSV at `docs/utm-links.csv` has the same data formatted for paste into the Candidate sheet's UTM Builder tab.

---

## Snapchat

```
https://chief.remyndai.com/?utm_source=snapchat&utm_medium=paid&utm_campaign=phase2-sprint&utm_content=snap-creative-a-identity
```

```
https://chief.remyndai.com/?utm_source=snapchat&utm_medium=paid&utm_campaign=phase2-sprint&utm_content=snap-creative-b-pain
```

```
https://chief.remyndai.com/?utm_source=snapchat&utm_medium=paid&utm_campaign=phase2-sprint&utm_content=snap-winner
```

(Use `snap-winner` after the Day 3 cut. Reuses whichever creative wins.)

---

## Reddit

```
https://chief.remyndai.com/?utm_source=reddit&utm_medium=organic&utm_campaign=phase2-sprint&utm_content=reddit-entrepreneur-post-01
```

```
https://chief.remyndai.com/?utm_source=reddit&utm_medium=organic&utm_campaign=phase2-sprint&utm_content=reddit-saas-post-01
```

```
https://chief.remyndai.com/?utm_source=reddit&utm_medium=organic&utm_campaign=phase2-sprint&utm_content=reddit-sideproject-post-01
```

```
https://chief.remyndai.com/?utm_source=reddit&utm_medium=organic&utm_campaign=phase2-sprint&utm_content=reddit-smallbusiness-post-01
```

```
https://chief.remyndai.com/?utm_source=reddit&utm_medium=organic&utm_campaign=phase2-sprint&utm_content=reddit-alphabeta-post-01
```

```
https://chief.remyndai.com/?utm_source=reddit&utm_medium=organic&utm_campaign=phase2-sprint&utm_content=reddit-indiehackers-retrospective-01
```

---

## LinkedIn

```
https://chief.remyndai.com/?utm_source=linkedin&utm_medium=dm&utm_campaign=phase2-sprint&utm_content=linkedin-dm-pain
```

```
https://chief.remyndai.com/?utm_source=linkedin&utm_medium=dm&utm_campaign=phase2-sprint&utm_content=linkedin-dm-curiosity
```

```
https://chief.remyndai.com/?utm_source=linkedin&utm_medium=dm&utm_campaign=phase2-sprint&utm_content=linkedin-dm-proof
```

```
https://chief.remyndai.com/?utm_source=linkedin&utm_medium=organic&utm_campaign=phase2-sprint&utm_content=linkedin-post-01
```

---

## X / Twitter

```
https://chief.remyndai.com/?utm_source=x&utm_medium=organic&utm_campaign=phase2-sprint&utm_content=x-post-01
```

```
https://chief.remyndai.com/?utm_source=x&utm_medium=organic&utm_campaign=phase2-sprint&utm_content=x-post-02
```

```
https://chief.remyndai.com/?utm_source=x&utm_medium=organic&utm_campaign=phase2-sprint&utm_content=x-post-03
```

```
https://chief.remyndai.com/?utm_source=x&utm_medium=organic&utm_campaign=phase2-sprint&utm_content=x-post-04-retrospective
```

---

## Founder Discord / Slack

```
https://chief.remyndai.com/?utm_source=discord&utm_medium=community&utm_campaign=phase2-sprint&utm_content=discord-indiehackers
```

```
https://chief.remyndai.com/?utm_source=discord&utm_medium=community&utm_campaign=phase2-sprint&utm_content=discord-founder-cafe
```

```
https://chief.remyndai.com/?utm_source=discord&utm_medium=community&utm_campaign=phase2-sprint&utm_content=discord-hustlecafe
```

```
https://chief.remyndai.com/?utm_source=discord&utm_medium=community&utm_campaign=phase2-sprint&utm_content=discord-lunadio
```

```
https://chief.remyndai.com/?utm_source=slack&utm_medium=community&utm_campaign=phase2-sprint&utm_content=slack-launchclub
```

```
https://chief.remyndai.com/?utm_source=slack&utm_medium=community&utm_campaign=phase2-sprint&utm_content=slack-onlinegeniuses
```

---

## Email and warm intros

```
https://chief.remyndai.com/?utm_source=email&utm_medium=warm-intro&utm_campaign=phase2-sprint&utm_content=email-warm-intro
```

```
https://chief.remyndai.com/?utm_source=sms&utm_medium=direct&utm_campaign=phase2-sprint&utm_content=sms-warm-circle
```

---

## In-person and QR

```
https://chief.remyndai.com/?utm_source=in-person&utm_medium=event&utm_campaign=phase2-sprint&utm_content=in-person-uatx
```

```
https://chief.remyndai.com/?utm_source=in-person&utm_medium=event&utm_campaign=phase2-sprint&utm_content=in-person-ai-hack
```

(QR code for the AI hacking event lives at `/qr/chief-signup.png` and `/qr/chief-signup.svg`. Encodes the `in-person-ai-hack` URL.)

```
https://chief.remyndai.com/?utm_source=qr&utm_medium=print&utm_campaign=phase2-sprint&utm_content=qr-code-conference
```

---

## How to use these in the sheet

1. Open the candidate sheet's UTM Builder tab
2. Paste `utm-links.csv` into the tab (or copy column-by-column)
3. For Snap Ads Manager, paste the full URL into the ad's "URL" field. Snap accepts query strings natively
4. For LinkedIn DMs and emails, paste the full URL inline in the message. Do not shorten through bit.ly during a 5-day sprint, you lose attribution if the shortener strips the query string

## What to never break

- `utm_source` must be lowercase and match the channel exactly
- `utm_medium` is the channel type, not the channel name (paid, organic, dm, community, warm-intro, etc.)
- `utm_campaign` is `phase2-sprint` for the entire sprint. Do not change this midway
- `utm_content` is the only field you customize per creative or variant. Keep it short, kebab-case, descriptive
