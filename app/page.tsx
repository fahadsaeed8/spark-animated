import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import OfferSection from "@/components/OfferSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProcessSection from "@/components/ProcessSection";
import CommunitySection from "@/components/CommunitySection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden max-w-full">
      <HeroSection />
      <OfferSection />
      <FeaturesSection />
      <ComparisonSection />
      <ProcessSection />
      <CommunitySection />
    </main>
  );
}
