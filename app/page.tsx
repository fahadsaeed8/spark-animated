"use client";

import HeroSection from "./components/HeroSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import EasyAndSafeFeaturesSection from "./components/EasyAndSafeFeaturesSection";
import WhereRealConnectionsSection from "./components/WhereRealConnectionsSection";
import StatisticsSection from "./components/StatisticsSection";
import DownloadAppSection from "./components/DownloadAppSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <WhoWeAreSection />
      <EasyAndSafeFeaturesSection />

      <WhereRealConnectionsSection />
      <StatisticsSection />
      <DownloadAppSection />
      <FooterSection />
    </main>
  );
}
