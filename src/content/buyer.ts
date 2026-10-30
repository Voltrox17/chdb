/*
 * Buyer due-diligence content. Every statement here must stay true without
 * verified metrics; policy-dependent items read `policies` from site config.
 */
import { brand, policies, quote } from "@/config/site";

const h = quote.turnaroundHours;

type QA = { q: string; a: string };

export const trustSignals = [
  policies.noObligationQuote && "No obligation",
  policies.requestConfidentiality && "Your request stays confidential",
  `Preliminary response within ${h} hours`,
].filter((s): s is string => Boolean(s));

export const whyColombia = {
  eyebrow: "Why Colombia",
  headline: "Broaden the Populations Your Models Learn From.",
  lead: "Many widely used medical imaging and clinical datasets underrepresent Latin American and admixed populations. Sourcing through Colombian healthcare institutions can add clinical diversity to your training and validation data — with practical advantages for US teams.",
  points: [
    {
      title: "Population diversity",
      body: "Patient populations that are often underrepresented in commonly used datasets, to support model training and evaluation of generalization.",
    },
    {
      title: "Your business hours",
      body: "Colombia runs on UTC−5 year-round — the same as US Eastern Standard Time — so coordination happens during your working day.",
    },
    {
      title: "English-language coordination",
      body: "Scoping, commercial discussions, and project documentation are handled in English.",
    },
    {
      title: "Spanish-language sources, handled openly",
      body: "Source records are typically in Spanish. Translation, terminology mapping, or structured extraction can be scoped into your project.",
    },
  ],
  footnote:
    "Suitability for any specific regulatory pathway depends on your strategy and the specific data, and is assessed per project.",
};

const sampleStage = {
  title: "Sample or pilot",
  get: "Where sources permit, a representative subset or data dictionary to validate fit.",
  decide: "Confirm the full dataset.",
};

export const engagement = {
  eyebrow: "After the Quote",
  headline: "Know What You're Committing To — at Every Stage.",
  lead: `${policies.noObligationQuote ? "Requesting a quote carries no obligation. " : ""}Each stage ends with a decision point, so you move forward only when the evidence supports it.`,
  stages: [
    {
      title: "Preliminary quote",
      get: "Indicative pricing, proposed scope, and key assumptions.",
      decide: "Proceed to feasibility, refine the request, or stop.",
    },
    {
      title: "Feasibility review",
      get: "Source-level confirmation of availability, variables, quality, and permissions.",
      decide: "Approve scope and terms, or stop.",
    },
    ...(policies.samplesWherePermitted ? [sampleStage] : []),
    {
      title: "License & approvals",
      get: "A written agreement defining permitted use, term, and safeguards; required approvals completed.",
      decide: "Execute the agreement.",
    },
    {
      title: "Delivery",
      get: "De-identified data in agreed formats, with documentation and provenance notes.",
      decide: "Accept against the agreed specification.",
    },
  ],
  timingNote:
    "Timelines after the preliminary quote depend on scope, sources, and required approvals, and are estimated in your quote.",
  pricingHeading: "What drives price",
  pricingDrivers: [
    "Modality and data type",
    "Cohort size and rarity of the indication",
    "Number and depth of required variables",
    "Length of longitudinal follow-up",
    "Linkage between imaging and clinical data",
    "Annotation or curation requirements",
    "License scope, term, and exclusivity",
  ],
};

const faqItems: (QA | false)[] = [
  {
    q: `Does ${brand.name} own the data?`,
    a: `No. ${brand.name} coordinates sourcing and licensing. Source institutions remain the custodians of their data, and licenses are granted only with the permissions those sources provide.`,
  },
  {
    q: "Why don't you name your source institutions?",
    a: policies.institutionDisclosureUnderNda
      ? "We protect the confidentiality of our source institutions publicly. Relevant source details are shared with qualified counterparties during feasibility, subject to a confidentiality agreement and each institution's consent."
      : "We protect the confidentiality of our source institutions. Provenance documentation for your dataset is addressed during feasibility.",
  },
  {
    q: "Can licensed data be used to train commercial AI models?",
    a: "When the source permits it and the license states it. Permitted uses — including commercial model training, derivative works, and ownership of resulting models — are defined explicitly in writing before delivery.",
  },
  {
    q: "How is patient privacy protected?",
    a: "Data is pursued only in de-identified form appropriate to the data type and intended use, including handling of imaging metadata. Applicable data protection requirements — which may include Colombia's Law 1581 of 2012 and requirements relevant to your jurisdiction — are reviewed per project with qualified counsel.",
  },
  {
    q: "Can the data support a regulatory submission?",
    a: "That depends on your regulatory strategy and the specific data. We document provenance, collection context, and processing so your regulatory team can assess suitability. We don't make regulatory determinations on your behalf.",
  },
  policies.samplesWherePermitted && {
    q: "Can we evaluate data before committing to a full dataset?",
    a: "Where sources permit, we can propose a sample, pilot subset, or data dictionary during feasibility, so you can validate fit before a full commitment.",
  },
  {
    q: `What do you need from us to deliver a ${h}-hour quote?`,
    a: `A sufficiently specified request: data type, indication or cohort, approximate size, intended use, and project context. If key details are missing, we'll follow up to clarify — the ${h}-hour window applies once the request is qualified.`,
  },
  policies.requestConfidentiality && {
    q: "Will our project details stay confidential?",
    a: `Your request is used to prepare your quote. We don't share your company name or project details with source institutions without your agreement.${policies.mutualNdaAvailable ? " We're also willing to sign a mutual NDA before detailed scoping." : ""}`,
  },
  {
    q: "In what formats can data be delivered?",
    a: "Imaging is typically delivered in DICOM. Structured clinical data is delivered in agreed formats such as CSV or Parquet, with HL7 FHIR or OMOP mapping assessed where applicable.",
  },
];

export const faq = {
  eyebrow: "Buyer Questions",
  headline: "The Questions Your Legal, Data, and Procurement Teams Will Ask.",
  items: faqItems.filter((i): i is QA => Boolean(i)),
};

export const about = {
  eyebrow: "Who We Are",
  headline: "Clear About What We Are — and What We Aren't.",
  lead: `${brand.name} is a clinical data sourcing and licensing partner focused on Colombian healthcare institutions, built around the procurement standards of US biotech, pharma, and AI teams.`,
  are: [
    "A sourcing and licensing coordination partner for clinical datasets",
    "A single commercial counterpart across multiple sources",
    "Accountable for transparent scope, provenance documentation, and licensing terms",
  ],
  areNot: [
    "The owner of patient data — institutions remain custodians",
    "A CRO, SMO, or clinical trial services provider",
    "A patient recruitment service",
    "A catalog of pre-packaged datasets",
  ],
};
