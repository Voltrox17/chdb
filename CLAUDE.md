@AGENTS.md

# CHDB website — project context

## Business
- **CHDB — Colombia Health Data Bank** (working brand; rename only via `src/config/site.ts` → `brand`).
- CHDB **coordinates sourcing and licensing opportunities** for clinical datasets originating from healthcare institutions in Colombia. It does **not** own patient data; institutions remain custodians.
- Buyers: US biotech, pharma sponsors, medical AI companies, CROs, AI model developers, life-sciences research orgs.
- Offer: CT / MRI / X-ray / digital pathology, EHR, longitudinal data, multimodal imaging+EHR, custom cohort sourcing, feasibility & quality assessments.
- **Not** offered/advertised: clinical trial management, SMO services, patient recruitment.
- Core promise: "Your AI Roadmap Moves Fast. Your Data Sourcing Should Too."
- Conversion offer: **"Get Your 36-Hour Quote"** = a *preliminary commercial quotation* for qualified, sufficiently specified requests. It never means guaranteed availability, approvals, final contract, or delivery in 36 hours. Keep the qualifier (`quote.qualifier`) next to the promise.
- Differentiators: speed, data quality, customization, coordinated institutional access, transparent licensing.

## Content restrictions (hard rules)
- Never name or show logos of source institutions.
- Never invent clients, partners, testimonials, case studies, certifications, outcomes, dataset inventories, or volumes.
- Institution count (~30) and the 50M patient figure live in `claims` in `src/config/site.ts` with `verified:false, display:false`. Render claims only via `getPublicClaims()`. Do not hard-code these numbers anywhere.
- Never state HIPAA / GDPR / FDA / ISO 27001 / SOC 2 certification or compliance. `certifications` must stay empty until evidence exists.
- DICOM, HL7 FHIR, OMOP are **technical standards "assessed where applicable"**, never certifications.
- Present capabilities as **project-specific sourcing opportunities**, not existing inventory.
- The quote form must never request patient identifiers or medical records.
- Never display a success message unless the email provider actually accepted the submission.
- Professional American English. No stock hospital photos, neon, heavy gradients, DNA motifs, fake dashboards, fake logos.

## Buyer-trust content
- `src/content/buyer.ts` holds Why Colombia, the post-quote engagement path, pricing drivers (no prices), the buyer FAQ (also emitted as FAQPage JSON-LD), and "Who we are / are not".
- `policies` in `site.ts` (no-obligation quote, request confidentiality, mutual NDA, institution disclosure under NDA, samples where permitted) are founder commitments. Setting a flag to `false` removes every mention. Never add a new commitment without a flag.
- `leadership` and `contact.calendarUrl` stay empty (hidden) until real data exists. Never invent people.
- Homepage section order/indices: 01 Difference, 02 Why Colombia, 03 Capabilities, 04 Governance, 05 36-Hour Quote, 06 After the Quote, 07 FAQ, 08 Who We Are.

## Where things live
- `src/config/site.ts` — brand, contact, quote turnaround/qualifier, claims, certifications, CTAs, nav, SEO. Single source of truth.
- `src/content/home.ts`, `src/content/governance.ts` — page copy (exact brief copy for the homepage).
- `src/components/sections/*` — homepage sections; `components/ui/primitives.tsx` — Container, ButtonLink, Button, Eyebrow, SectionHeading, BrandMark, `cx`.
- `src/components/forms/*` + `src/lib/quote-schema.ts` (zod, shared client/server) + `src/app/actions/submit-quote.ts` (Server Action).
- `src/lib/rate-limit.ts` — in-memory limiter; replace with a shared store for serverless/multi-instance hosting.

## Technical decisions
- Next.js 16 App Router with `cacheComponents: true` — avoid `Date.now()`/`new Date()` in server render paths (see `CopyrightYear.tsx` using `"use cache"`). Read `node_modules/next/dist/docs/` before using unfamiliar APIs.
- Tailwind CSS v4 via `@theme` tokens in `src/app/globals.css` (navy, paper, slate, teal; `text-display`, `text-headline`, `text-title`, `text-lead`; `.label`, `.grain`, `.figure-frame`). Use tokens, not ad-hoc hex values.
- Fonts: Newsreader (display serif, light weight, optical sizing), IBM Plex Sans (UI/body), IBM Plex Mono (labels) via `next/font`.

## Visual language (editorial / datasheet)
- Every section opens with `SectionHeader` (§ index + label in a left rail, headline + lead on the right). Body content aligns to the same 3/9 column split.
- Primary buttons are neutral solids (paper on navy, navy on paper). **Teal is a signal color only** — data lines, indices, focus, thin rules. Never a large fill or primary button.
- Prefer hairline-ruled lists/tables over boxed cards. Figures get a frame and a mono `Fig. n` caption.
- Capability visuals are bespoke line glyphs (`graphics/ModalityGlyph.tsx`), not icon-in-a-box.
- Contrast (WCAG AA): on light surfaces use `slate-500` or darker for text; on dark surfaces use `slate-400` or lighter. Never `slate-400` text on paper, never `slate-500` text on navy.
- Headings are Title Case. Never say anything is "delivered" within 36 hours — only the preliminary quote is.
- Generous vertical rhythm: sections use `py-28 sm:py-36 lg:py-44`.
- Icons: `lucide-react`, strokeWidth ~1.5, used sparingly. No animation library; `data-reveal` + `RevealObserver` for scroll reveal; honor reduced motion.
- Form spam protection: honeypot (`website`), minimum fill time (`_elapsed` appended client-side), IP rate limit. Email via Resend only when `RESEND_API_KEY`, `QUOTE_TO_EMAIL`, `QUOTE_FROM_EMAIL` are set; otherwise status `not_configured`.
- The form submits via `onSubmit` + `startTransition(formAction)` so fields are not reset on errors.

## Conventions
- Run `npx tsc --noEmit`, `npm run lint`, `npm run build` before declaring work done.
- No public deployment without explicit owner authorization.
- `.env*` is git-ignored except `.env.example`; never commit secrets.
