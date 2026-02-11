import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import OfferSection from "@/components/OfferSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProcessSection from "@/components/ProcessSection";
import CommunitySection from "@/components/CommunitySection";
import FAQSection from "@/components/FAQSection";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden max-w-full">
      <HeroSection />
      <OfferSection />
      <FeaturesSection />
      <ComparisonSection />
      <ProcessSection />
      <CommunitySection />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
