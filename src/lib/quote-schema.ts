import { z } from "zod";

export const dataTypeOptions = [
  "Medical imaging (CT, MRI, X-ray)",
  "Digital pathology",
  "EHR / structured clinical data",
  "Longitudinal clinical data",
  "Multimodal (imaging + clinical)",
  "Not sure yet",
] as const;

export const datasetSizeOptions = [
  "Under 500 patients",
  "500 – 2,000 patients",
  "2,000 – 10,000 patients",
  "10,000 – 50,000 patients",
  "More than 50,000 patients",
  "To be determined",
] as const;

export const intendedUseOptions = [
  "AI / ML model training",
  "AI model validation or benchmarking",
  "Clinical or translational research",
  "Real-world evidence / outcomes research",
  "Regulatory support",
  "Other",
] as const;

export const timelineOptions = ["Within 1 month", "1 – 3 months", "3 – 6 months", "6+ months", "Exploratory"] as const;

export const formatOptions = ["DICOM", "HL7 FHIR", "OMOP CDM", "CSV / Parquet", "No preference"] as const;

const required = (label: string, max = 200) =>
  z.string().trim().min(1, `${label} is required.`).max(max, `${label} must be ${max} characters or fewer.`);

const optionalSelect = <T extends readonly [string, ...string[]]>(opts: T) =>
  z.union([z.enum(opts), z.literal("")]).optional();

export const quoteSchema = z.object({
  fullName: required("Full name", 120),
  workEmail: z.string().trim().min(1, "Work email is required.").pipe(z.email("Enter a valid email address.")),
  company: required("Company", 160),
  jobTitle: required("Job title", 120),
  dataType: z.enum(dataTypeOptions, "Select a data type."),
  indication: required("Target indication / cohort", 300),
  datasetSize: z.enum(datasetSizeOptions, "Select an estimated dataset size."),
  intendedUse: z.enum(intendedUseOptions, "Select an intended use."),
  description: z
    .string()
    .trim()
    .min(30, "Please describe your project in at least 30 characters.")
    .max(4000, "Project description must be 4,000 characters or fewer."),
  timeline: optionalSelect(timelineOptions),
  dataFormat: optionalSelect(formatOptions),
  consent: z.literal("on", "Consent is required to process your request."),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
export type QuoteField = keyof QuoteInput;

export type QuoteFormState =
  | { status: "idle" }
  | { status: "invalid"; errors: Partial<Record<QuoteField, string>>; message: string }
  | { status: "not_configured"; message: string }
  | { status: "rate_limited"; message: string }
  | { status: "error"; message: string }
  | { status: "success"; message: string };

/** Flatten zod issues to the first message per field. */
export function fieldErrors(error: z.ZodError): Partial<Record<QuoteField, string>> {
  const out: Partial<Record<QuoteField, string>> = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as QuoteField | undefined;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
