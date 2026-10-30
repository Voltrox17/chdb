import type { Metadata } from "next";
import { brand } from "@/config/site";
import { LegalPlaceholder } from "@/components/ui/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for the ${brand.name} website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPlaceholder title="Privacy Policy">
      <div>
        <h2>Scope</h2>
        <p>
          This policy will describe how {brand.legalName} ({brand.name}) handles business contact information submitted
          through this website. It does not govern clinical data, which is handled under separate project agreements.
        </p>
      </div>
      <div>
        <h2>Information we collect</h2>
        <p>
          Business contact details (name, work email, company, job title) and a description of your data requirements
          submitted through the quotation form. The form is not intended for patient information.
        </p>
      </div>
      <div>
        <h2>How we use it</h2>
        <p>To respond to your request, prepare a preliminary quotation, and follow up about related services.</p>
      </div>
      <div>
        <h2>Retention, sharing, and your rights</h2>
        <p>To be completed by counsel, including applicable jurisdictions, processors, and contact details for requests.</p>
      </div>
    </LegalPlaceholder>
  );
}
