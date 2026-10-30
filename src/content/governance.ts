import { brand } from "@/config/site";

export const governancePage = {
  eyebrow: "Data Governance",
  title: "Data You Can Evaluate. Rights You Can Understand.",
  lead: "Clinical data is only valuable when it's scientifically suitable, appropriately documented, and licensed for its intended use. This is how we approach each engagement.",

  role: {
    heading: "Our role",
    title: "A Coordination Partner. Institutions Remain Custodians.",
    body: [
      `${brand.name} coordinates sourcing and licensing opportunities for clinical datasets originating from healthcare institutions in Colombia. We do not claim ownership of patient data. Source institutions remain the custodians of the data they hold.`,
      "Our work is to translate your scientific and commercial requirements into a scoped request, coordinate with appropriate sources, and bring back a transparent picture of what is feasible, under which conditions, and with which rights.",
    ],
  },

  pillarsTitle: "Four Dimensions We Assess Before You Commit.",
  pillars: [
    {
      key: "quality",
      title: "Data Quality",
      summary: "Provenance, completeness, consistency, and clinical relevance.",
      points: [
        "Provenance: where the data originates, how it was captured, and over which period.",
        "Completeness: availability of the variables your study or model actually requires.",
        "Consistency: coding practices, units, and formats across sources and time.",
        "Clinical relevance: fit between the available cohort and your indication and criteria.",
      ],
    },
    {
      key: "standards",
      title: "Recognized Data Standards",
      summary: "DICOM, HL7 FHIR, and OMOP compatibility assessed where applicable.",
      points: [
        "DICOM for medical imaging, including metadata handling during de-identification.",
        "HL7 FHIR for structured clinical data exchange, where sources support it.",
        "OMOP Common Data Model for harmonized observational and longitudinal data, where mapping is feasible.",
        "Compatibility is assessed per project. These are technical standards, not company certifications.",
      ],
    },
    {
      key: "privacy",
      title: "Privacy & Governance",
      summary: "Appropriate de-identification, source permissions, and data protection safeguards.",
      points: [
        "Datasets are pursued only in de-identified form appropriate to the data type and intended use.",
        "Each source's permissions and any required institutional or ethics approvals are confirmed before delivery.",
        "Applicable data protection requirements — which may include Colombian law and requirements relevant to the sponsor's jurisdiction — are reviewed per project with qualified counsel.",
        "Transfer and access safeguards are defined in the project agreement.",
      ],
    },
    {
      key: "licensing",
      title: "Clear Licensing",
      summary: "Defined rights for AI development, research, and permitted commercial use.",
      points: [
        "Permitted uses stated explicitly: AI model training, validation, research, or other agreed purposes.",
        "Clear terms on derivative works, model ownership, and commercial use where permitted.",
        "Defined term, territory, retention, and deletion obligations.",
        "Restrictions disclosed up front, before you commit to a full dataset.",
      ],
    },
  ],

  process: {
    heading: "How Governance Fits the Engagement",
    steps: [
      { title: "Scoping", body: "We clarify cohort definition, variables, modalities, and intended use." },
      { title: "Preliminary quote", body: "Indicative pricing, proposed scope, and key feasibility assumptions." },
      { title: "Feasibility", body: "Source-level review of availability, quality, and permissions." },
      { title: "Approvals & contracting", body: "Required approvals, licensing terms, and data protection safeguards." },
      { title: "Delivery", body: "De-identified data delivered in agreed formats with documentation." },
    ],
  },

  transparency: {
    heading: "What We Do — and Don't — Claim",
    body: "We aim to be precise about what we can and cannot represent. We do not publish source institution names. We do not represent technical standards as certifications. We do not guarantee cohort availability, approvals, or delivery timelines before feasibility is complete. Any formal certification or third-party attestation will be listed only once it is held and documented.",
  },
};
