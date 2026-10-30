import { brand, quote } from "@/config/site";

const h = quote.turnaroundHours;

export const hero = {
  eyebrow: "Clinical Data for Biotech & AI",
  headline: ["Your AI Roadmap Moves Fast.", "Your Data Sourcing Should Too."],
  subheadline: `Get a preliminary quote in ${h} hours for custom medical imaging, EHR, and multimodal clinical datasets sourced through our Colombian healthcare network.`,
  supporting: brand.tagline,
  hook: {
    label: `The ${h}-Hour Preliminary Quote`,
    title: "Preliminary Quotation",
    /** Concrete weekday example of the turnaround (calendar hours). */
    example: "Submit Monday morning. Review a preliminary quote by Tuesday evening.",
    executiveLine: "Know whether a dataset fits your scope and budget before your next program review.",
  },
};

/** The five competitive advantages, as stated in the positioning brief. */
export const advantages = [
  { title: "Speed", body: `Preliminary quotes in ${h} hours for qualified requests` },
  { title: "Data Quality", body: "Suitability assessed before you commit" },
  { title: "Customization", body: "Cohorts built around your requirements" },
  { title: "Coordinated Access", body: "Multiple sources, one partner" },
  { title: "Transparent Licensing", body: "Rights defined up front" },
];

export const difference = {
  eyebrow: `The ${brand.name} Difference`,
  headline: "Stop Losing Time on Data You Can't Use.",
  subheadline:
    "Your team shouldn't spend months sourcing data only to discover missing variables, incomplete records, or licensing restrictions.",
  problems: [
    "Long procurement cycles",
    "Paying for unsuitable datasets",
    "Missing clinical variables",
    "Incomplete records",
    "Unclear provenance",
    "Imaging and EHR that won't link",
    "Ambiguous AI training rights",
    "Negotiating with every institution",
    "Inconsistent formats",
    "Unpredictable project costs",
  ],
  items: [
    {
      n: "01",
      title: "Know Before You Buy.",
      body: "Evaluate cohort suitability, available variables, data quality, and key limitations before committing to a full dataset.",
    },
    {
      n: "02",
      title: "Fast Answers, Clear Next Steps.",
      body: `Get preliminary pricing within ${h} hours for qualified requests, with a defined path to feasibility.`,
    },
    {
      n: "03",
      title: "Your Cohort. Your Requirements.",
      body: "Custom imaging, EHR, and multimodal data sourcing built around your research objectives — not a rigid catalog.",
    },
    {
      n: "04",
      title: "Multiple Sources. One Partner.",
      body: "We coordinate institutional sourcing and commercial requirements so you don't have to navigate every provider independently.",
    },
  ],
};

export const capabilities = {
  eyebrow: "Data Capabilities",
  headline: "The Right Data for the Right Science.",
  note: "Every engagement is scoped to your project. Capabilities describe sourcing opportunities, not a fixed, pre-existing inventory.",
  items: [
    {
      key: "imaging",
      title: "Medical Imaging",
      body: "CT, MRI, X-ray, digital pathology, and other clinical imaging opportunities.",
      tags: ["CT", "MRI", "X-ray", "Digital pathology"],
    },
    {
      key: "ehr",
      title: "EHR & Longitudinal Data",
      body: "Diagnoses, medications, laboratory results, treatment history, and clinical outcomes.",
      tags: ["Diagnoses", "Medications", "Labs", "Outcomes"],
    },
    {
      key: "multimodal",
      title: "Multimodal Data",
      body: "Imaging combined with relevant clinical context, where available and permitted.",
      tags: ["Imaging + EHR", "Linked context"],
    },
    {
      key: "cohorts",
      title: "Custom Cohorts",
      body: "Tell us your indication, inclusion criteria, required variables, and intended use.",
      tags: ["Indication", "Criteria", "Variables", "Use"],
    },
  ],
};

export const governance = {
  eyebrow: "Trust & Data Governance",
  headline: "Data You Can Evaluate. Rights You Can Understand.",
  supporting:
    "Clinical data is only valuable when it's scientifically suitable, appropriately documented, and licensed for its intended use.",
  modules: [
    { key: "quality", title: "Data Quality", body: "Provenance, completeness, consistency, and clinical relevance." },
    {
      key: "standards",
      title: "Recognized Data Standards",
      body: "DICOM, HL7 FHIR, and OMOP compatibility assessed where applicable.",
    },
    {
      key: "privacy",
      title: "Privacy & Governance",
      body: "Appropriate de-identification, source permissions, and data protection safeguards.",
    },
    {
      key: "licensing",
      title: "Clear Licensing",
      body: "Defined rights for AI development, research, and permitted commercial use.",
    },
  ],
  footnote:
    "Data standards refer to formats and models assessed on a project basis. They are not company certifications.",
};

export const quoteProcess = {
  eyebrow: `The ${h}-Hour Quotation`,
  headline: `From Data Request to Preliminary Quote in ${h} Hours.`,
  supporting:
    "Qualified, sufficiently specified requests receive a structured preliminary response — so your team can decide quickly whether to move into formal feasibility.",
  steps: [
    { hour: "0h", title: "Submit your request", body: "Data type, indication, cohort size, intended use, and timeline." },
    { hour: "Review", title: "Scoping review", body: "We confirm the request is qualified and clarify any gaps with your team." },
    { hour: `≤ ${h}h`, title: "Preliminary quote", body: "A written commercial response with scope, assumptions, and next steps." },
  ],
  includes: [
    { title: "Preliminary pricing", body: "Indicative commercial terms for the proposed scope." },
    { title: "Proposed dataset scope", body: "Modalities, variables, and cohort parameters we propose to pursue." },
    { title: "Key feasibility assumptions", body: "What the estimate depends on, and what still needs confirmation." },
    { title: "Next steps & review process", body: "The expected path through feasibility, approvals, and contracting." },
  ],
  notIncluded: [
    "Guaranteed cohort availability",
    "Legal, ethics, or institutional approval",
    "Final contract terms",
    `Data delivery within ${h} hours`,
  ],
};

export const finalCta = {
  headline: ["Tell Us the Cohort.", "We'll Map the Way Forward."],
  supporting: `Stop letting data sourcing delay your next milestone. Share your requirements and get a preliminary commercial response within ${h} hours.`,
};
