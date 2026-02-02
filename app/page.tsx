"use client";

import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import EasyAndSafeFeaturesSection from "./components/EasyAndSafeFeaturesSection";
import WhereRealConnectionsSection from "./components/WhereRealConnectionsSection";
import StatisticsSection from "./components/StatisticsSection";
import DownloadAppSection from "./components/DownloadAppSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  // Ensure page scrolls to top on refresh to show "Enter the Circle" section
  useEffect(() => {
    // Scroll to top immediately on page load/refresh
    window.scrollTo({ top: 0, behavior: "instant" });

    // Prevent scroll restoration
    if (
      typeof window !== "undefined" &&
      "scrollRestoration" in window.history
    ) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

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
