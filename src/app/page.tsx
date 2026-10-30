import { Hero } from "@/components/sections/Hero";
import { Difference } from "@/components/sections/Difference";
import { WhyColombia } from "@/components/sections/WhyColombia";
import { Capabilities } from "@/components/sections/Capabilities";
import { Governance } from "@/components/sections/Governance";
import { QuoteExperience } from "@/components/sections/QuoteExperience";
import { Engagement } from "@/components/sections/Engagement";
import { Faq } from "@/components/sections/Faq";
import { About } from "@/components/sections/About";
import { FinalCta } from "@/components/sections/FinalCta";
import { MobileQuoteBar } from "@/components/layout/MobileQuoteBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Difference />
      <WhyColombia />
      <Capabilities />
      <Governance />
      <QuoteExperience />
      <Engagement />
      <Faq />
      <About />
      <FinalCta />
      <MobileQuoteBar />
    </>
  );
}
