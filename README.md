# CHDB — Website

Marketing website for **CHDB — Colombia Health Data Bank**: clinical dataset sourcing and licensing coordination for US biotech, pharma, CRO, and medical AI teams.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, lucide-react, zod and Resend.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional — needed only for live form delivery
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type check |

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, CHDB Difference, Data Capabilities, Trust & Governance, 36-Hour Quotation, Final CTA |
| `/data-governance` | Quality, standards, privacy, licensing, process, claims transparency |
| `/quote` | Quotation request form (`/contact` redirects here) |
| `/privacy`, `/terms` | Clearly marked placeholders awaiting counsel |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | SEO |

## Configuration

Everything brand- or claim-related lives in **`src/config/site.ts`**:

- `brand` — name, legal name, tagline. Change `brand.name` to rename the site everywhere.
- `contact` — public email/location (empty = hidden).
- `quote` — turnaround hours and the qualifier shown beside every 36-hour promise.
- `claims` — institution count and patient figure. Hidden until **both** `verified` and `display` are `true`.
- `certifications` — must stay empty until a certificate/attestation is actually held.
- `cta`, `nav`, `footerLinks`, `seo`.

Homepage and governance copy: `src/content/home.ts`, `src/content/governance.ts`.

## Quote form

`src/components/forms/QuoteForm.tsx` → Server Action `src/app/actions/submit-quote.ts`.

- Validation: shared zod schema (`src/lib/quote-schema.ts`) on client and server.
- Spam: honeypot field, minimum fill time, per-IP rate limit (in memory — replace with Redis/KV for serverless).
- Delivery: Resend, when these env vars are set:

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `QUOTE_TO_EMAIL` | Inbox(es) receiving requests, comma-separated |
| `QUOTE_FROM_EMAIL` | Sender on a domain verified in Resend |
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL (sitemap, OG, metadata) |

If any Resend variable is missing, the form tells the visitor that online submission is not yet enabled. It never shows a false success.

## Launch checklist

- [ ] Confirm final brand name in `src/config/site.ts`.
- [ ] Confirm or disable each commitment in `policies` (no-obligation quote, request confidentiality, mutual NDA, institution disclosure under NDA, samples where permitted).
- [ ] Add real `leadership` entries (with consent) and a `contact.calendarUrl` — the biggest remaining trust gap for buyers.
- [ ] Have counsel review the buyer FAQ (privacy, Law 1581 reference, regulatory-use answer).
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- [ ] Create Resend account, verify sending domain (SPF/DKIM), set the three Resend env vars, send a real test request.
- [ ] Set `contact.email` once a monitored business inbox exists.
- [ ] Replace `/privacy` and `/terms` placeholders with counsel-approved text (incl. Colombian Law 1581 of 2012 and US considerations as advised).
- [ ] Legal/commercial review of all public claims, especially the 36-hour quotation wording.
- [ ] Only enable `claims.*.display` after documented verification (patient figure must be deduplicated).
- [ ] Replace in-memory rate limiter with a shared store if hosting on serverless.
- [ ] Add analytics only with an appropriate consent mechanism.
- [ ] Add a favicon/brand mark file set for the final brand.
- [ ] Check OG image rendering in LinkedIn/Slack previews.
- [ ] Run `npm run lint`, `npx tsc --noEmit`, `npm run build`.
- [ ] Deployment — requires explicit owner authorization.
