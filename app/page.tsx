"use client";

import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import EasyAndSafeFeaturesSection from "./components/EasyAndSafeFeaturesSection";
import WhereRealConnectionsSection from "./components/WhereRealConnectionsSection";
import StatisticsSection from "./components/StatisticsSection";
import DownloadAppSection from "./components/DownloadAppSection";
import FooterSection from "./components/FooterSection";
import VideoSection from "./components/VideoSection";
import HowCircleSocietyWorksSection from "./components/HowCircleSocietyWorksSection";
import FaithCommunitiesSection from "./components/FaithCommunitiesSection";
import FindYourPeopleSection from "./components/FindYourPeopleSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Image from "next/image";

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
    <main className="w-full overflow-x-hidden max-w-full">
      <HeroSection />
      <StatisticsSection />
      <WhoWeAreSection />
      <EasyAndSafeFeaturesSection />
      <FaithCommunitiesSection />
      <HowCircleSocietyWorksSection />
      <VideoSection />
      <FindYourPeopleSection />
      {/* Image Section - Properly contained to not break other components */}
      <div className="w-full bg-white py-8 sm:py-12 md:py-16 flex justify-center items-center overflow-hidden">
        <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[1000px] px-4">
          <Image
            src={"/Frame 2131326897 (1).svg"}
            alt={"Frame"}
            width={1900}
            height={1900}
            className="w-full h-auto rounded-xl"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      {/* <TestimonialsSection /> */}
      <WhereRealConnectionsSection />
      <DownloadAppSection />
      <FooterSection />
    </main>
  );
}
