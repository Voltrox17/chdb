/**
 * Central site configuration — the single source of truth for brand,
 * claims, and CTA content. Change values here, not in components.
 *
 * CLAIM POLICY: any metric or credential must stay `display: false` until it
 * is commercially and legally verified. Components read claims only through
 * `getPublicClaims()`, which filters out anything unverified or hidden.
 */

export const brand = {
  /** Working brand name — rename here and it propagates everywhere. */
  name: "CHDB",
  legalName: "Colombia Health Data Bank",
  /** Shown next to the short name in the header and footer. */
  descriptor: "Colombia Health Data Bank",
  tagline: "Fast Quotes. Reliable Data. Flexible Sourcing.",
  promise: "Your AI Roadmap Moves Fast. Your Data Sourcing Should Too.",
} as const;

export const contact = {
  /** Public business inbox. Leave empty until a real address exists. */
  email: "",
  /** Optional city/region line for the footer. Leave empty to hide. */
  location: "",
  /** Scheduling link (e.g. Calendly) for an introductory call. Empty = hidden. */
  calendarUrl: "",
} as const;

/**
 * Leadership shown in the "Who we are" section. Real people only, with their
 * consent. Section is hidden while empty.
 */
export const leadership: { name: string; role: string; bio: string; linkedinUrl?: string }[] = [];

/**
 * Operating commitments shown to buyers. These are business policies, not
 * facts about inventory — the founder must confirm each before launch.
 * Setting one to false removes every mention of it from the site.
 */
export const policies = {
  /** Requesting a preliminary quote creates no obligation to buy. */
  noObligationQuote: true,
  /** Requester's company and project details are not shared with source institutions without consent. */
  requestConfidentiality: true,
  /** Willing to sign a mutual NDA before detailed scoping. */
  mutualNdaAvailable: true,
  /** Source institution details disclosed to qualified counterparties during feasibility, under NDA and with institutional consent. */
  institutionDisclosureUnderNda: true,
  /** Samples, pilot subsets or data dictionaries may be offered where sources permit. */
  samplesWherePermitted: true,
} as const;

export const quote = {
  turnaroundHours: 36,
  /** Displayed wherever the turnaround promise appears. */
  qualifier:
    "Preliminary quotations for qualified requests. Final pricing and availability subject to feasibility and required approvals.",
} as const;

type Claim = {
  label: string;
  value: string;
  /** Documented, commercially verified (and deduplicated where relevant). */
  verified: boolean;
  /** Explicit opt-in to publish. Both flags must be true to render. */
  display: boolean;
};

export const claims: Record<"institutionCount" | "patientRecords", Claim> = {
  institutionCount: {
    label: "Healthcare institutions in network",
    value: "30",
    verified: false,
    display: false,
  },
  patientRecords: {
    label: "Patient records (deduplicated)",
    value: "50M",
    verified: false,
    display: false,
  },
};

export function getPublicClaims(): Claim[] {
  return Object.values(claims).filter((c) => c.verified && c.display);
}

/**
 * Certifications actually held by the company (e.g. SOC 2 Type II report,
 * ISO 27001 certificate). Must be empty until evidence exists.
 * Technical standards (DICOM, FHIR, OMOP) are NOT certifications.
 */
export const certifications: { name: string; evidenceUrl: string }[] = [];

export const cta = {
  primary: { label: `Get Your ${quote.turnaroundHours}-Hour Quote`, href: "/quote" },
  secondary: { label: "Explore Data Solutions", href: "/#capabilities" },
  customDataset: { label: "Request a Custom Dataset", href: "/quote" },
  governance: { label: "Read Our Governance Approach", href: "/data-governance" },
} as const;

export const nav = [
  { label: "Data Solutions", href: "/#capabilities" },
  { label: "How It Works", href: "/#quote-process" },
  { label: "Data Governance", href: "/data-governance" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const footerLinks = [
  { label: "Data Solutions", href: "/#capabilities" },
  { label: "Data Governance", href: "/data-governance" },
  { label: "FAQ", href: "/#faq" },
  { label: "Request a Quote", href: "/quote" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
] as const;

export const seo = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  title: `${brand.name} — Clinical Data Sourcing for Biotech & AI`,
  description:
    "Custom medical imaging, EHR, and multimodal clinical datasets for biotech, pharma, CROs, and AI teams. Preliminary quotes in 36 hours for qualified requests.",
  keywords: [
    "clinical data licensing",
    "medical imaging datasets",
    "EHR data",
    "multimodal clinical data",
    "AI training data healthcare",
    "real-world data Latin America",
    "custom cohort sourcing",
  ],
} as const;
