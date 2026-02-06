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
      {/* <div className="w-full h-full bg-white flex justify-center items-center">
        <Image
          src={"/Frame 2131326897 (1).svg"}
          alt={"Frame"}
          width={1900}
          height={1900}
          className="w-full h-auto rounded-xl max-w-[1900px] md:max-w-[1000px]"
        />
      </div> */}
      {/* <TestimonialsSection /> */}
      <WhereRealConnectionsSection />
      <DownloadAppSection />
      <FooterSection />
    </main>
  );
}
