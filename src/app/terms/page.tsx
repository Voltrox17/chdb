import type { Metadata } from "next";
import { brand, quote } from "@/config/site";
import { LegalPlaceholder } from "@/components/ui/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for the ${brand.name} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPlaceholder title="Terms of Use">
      <div>
        <h2>Use of this website</h2>
        <p>
          This website provides general information about {brand.name}&apos;s clinical data sourcing and licensing
          coordination services. Nothing on this site constitutes an offer, a guarantee of data availability, or a
          license to any data.
        </p>
      </div>
      <div>
        <h2>Preliminary quotations</h2>
        <p>
          {quote.qualifier} A preliminary quotation is not a binding commitment by either party; any engagement is
          governed by a separate written agreement.
        </p>
      </div>
      <div>
        <h2>Limitation of liability, governing law, and changes</h2>
        <p>To be completed by counsel.</p>
      </div>
    </LegalPlaceholder>
  );
}
