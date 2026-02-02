"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function DownloadAppSection() {
  const downloadSectionRef = useRef<HTMLElement>(null);
  const [phone1Visible, setPhone1Visible] = useState(false);
  const [phone2Visible, setPhone2Visible] = useState(false);
  const [phone3Visible, setPhone3Visible] = useState(false);

  // Simple scroll-triggered reveal for phones
  useEffect(() => {
    const handleScroll = () => {
      if (!downloadSectionRef.current) return;

      const section = downloadSectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate how much the section has scrolled into view
        // Start when section top is at 70% of viewport
        const startPoint = windowHeight * 0.7;
        // End when section top is at -20% (scrolled past)
        const endPoint = -windowHeight * 0.2;
        const totalRange = startPoint - endPoint;

        // Current position relative to start
        const currentPosition = startPoint - rect.top;
        const scrollProgress = Math.max(
          0,
          Math.min(1, currentPosition / totalRange),
        );

        // Show first phone when scroll progress > 0.1
        setPhone1Visible(scrollProgress > 0.1);

        // Show second phone when scroll progress > 0.4
        setPhone2Visible(scrollProgress > 0.4);

        // Show third phone when scroll progress > 0.7
        setPhone3Visible(scrollProgress > 0.7);
      } else {
        // Hide phones when section is out of view
        setPhone1Visible(false);
        setPhone2Visible(false);
        setPhone3Visible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={downloadSectionRef}
      className="bg-[#f5f5f0] py-12 sm:py-16 px-4 sm:px-6 md:py-38 md:px-0 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circular Lines - Thin abstract circles */}
        <Image
          src="/Group 35887.svg"
          alt="Community Groups"
          width={210}
          height={210}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[900px] md:h-[900px] opacity-30"
        />
        <Image
          src="/Ellipse 2.svg"
          alt="Community Groups"
          width={210}
          height={210}
          className="absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[800px] md:h-[800px] opacity-100"
        />
        <Image
          src="/Ellipse 2.svg"
          alt="Community Groups"
          width={210}
          height={210}
          className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[800px] md:h-[800px] opacity-100"
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Split Heading with Phones in Middle */}
        <div className="relative mb-12 sm:mb-16 md:mb-20">
          {/* Text and Phones Container */}
          <div className="relative min-h-[250px] sm:min-h-[300px] md:min-h-[450px] lg:min-h-[550px] px-2 sm:px-4 md:px-8">
            {/* Text: "Download the App Now" - Centered, phones will overlap */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-2 sm:px-4">
              <div className="flex items-center justify-center">
                <Image
                  src="/Download The App Now.svg"
                  alt="Download The App Now"
                  width={210}
                  height={210}
                  className="w-full max-w-full h-auto"
                />
              </div>
            </div>

            {/* Phones - Diagonal arrangement from top-left to bottom-right, overlapping text */}
            <div className="absolute mt-14 left-1/2 top-1/2 -ml-32  -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
              {/* Left Phone - Appears on first scroll */}
              <div
                className={`relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12 transition-opacity duration-500 ${
                  phone1Visible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative p-1.5 md:p-2">
                  <div className="aspect-[9/19] w-[650px] h-[650px] overflow-hidden">
                    <Image
                      width={900}
                      height={900}
                      src="/iPhone-13-Pro-Front.svg"
                      alt="App Screen 1"
                      className="w-full h-full md:-mt-12"
                    />
                  </div>
                </div>
              </div>
              {/* Middle Phone - Appears on second scroll */}
              <div
                className={`relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12 transition-opacity duration-500 ${
                  phone2Visible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative p-1.5 md:p-2">
                  <div className="aspect-[9/19] w-[650px] h-[650px] overflow-hidden">
                    <Image
                      width={900}
                      height={900}
                      src="/iPhone-13-Pro-Front (1).svg"
                      alt="App Screen 2"
                      className="w-full h-full md:-ml-5"
                    />
                  </div>
                </div>
              </div>
              {/* Right Phone - Appears on third scroll */}
              <div
                className={`relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12 transition-opacity duration-500 ${
                  phone3Visible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative p-1.5 md:p-2">
                  <div className="aspect-[9/19] w-[650px] h-[650px] overflow-hidden">
                    <Image
                      width={900}
                      height={900}
                      src="/iPhone-13-Pro-Front (2).svg"
                      alt="App Screen 3"
                      className="w-full h-full md:mt-20 md:-ml-15"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Buttons - Positioned below text, aligned with "Download" and "App Now" */}
          <div className="relative flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-center sm:items-start gap-4 mt-12 sm:mt-16 md:-mt-[180px] px-4 md:px-0">
            {/* Left Button - Below "Download" */}
            <div className="flex-1 w-full sm:w-auto min-w-[180px] sm:min-w-[200px] max-w-[280px]">
              <Image
                src="/Store download button.svg"
                alt="Google Play"
                width={24}
                height={24}
                className="w-full h-full flex-shrink-0"
              />
            </div>

            {/* Right Button - Below "App Now" */}
            <div className="flex-1 w-full sm:w-auto min-w-[180px] sm:min-w-[200px] max-w-[280px] sm:ml-auto">
              <Image
                src="/Store download button (1).svg"
                alt="App Store"
                width={24}
                height={24}
                className="w-full h-full flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
