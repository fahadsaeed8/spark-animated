import HeroSection from "@/components/HeroSection";
import OfferSection from "@/components/OfferSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden max-w-full">
      <HeroSection />
      <OfferSection />
    </main>
  );
}
