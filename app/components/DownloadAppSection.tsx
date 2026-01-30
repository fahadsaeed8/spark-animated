"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function DownloadAppSection() {
  const downloadSectionRef = useRef<HTMLElement>(null);
  const phoneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const flipTimelines = useRef<(gsap.core.Timeline | null)[]>([]);

  // Hover-based slow card flip animation - right to left
  useEffect(() => {
    const phoneElements = phoneRefs.current.filter(Boolean) as HTMLDivElement[];
    const totalPhones = phoneElements.length;

    if (totalPhones === 0) return;

    // Set initial state - all phones show front initially
    phoneElements.forEach((phoneEl) => {
      const flipCard = phoneEl.querySelector(".phone-flip-card") as HTMLElement;
      if (!flipCard) return;
      gsap.set(flipCard, {
        rotationY: 0,
        transformStyle: "preserve-3d",
        scale: 0.9,
      });
    });

    // Store cleanup functions
    const cleanupFunctions: (() => void)[] = [];

    // Create hover animations for each phone
    phoneElements.forEach((phoneEl, index) => {
      const flipCard = phoneEl.querySelector(".phone-flip-card") as HTMLElement;
      if (!flipCard) return;

      // Create timeline for this phone's flip animation
      const flipTimeline = gsap.timeline({ paused: true });

      // Hover in - subtle 3D tilt effect (right to left) - no full flip
      const handleMouseEnter = () => {
        flipTimeline.clear();
        flipTimeline.to(flipCard, {
          rotationY: -25, // Subtle tilt, not full flip - right to left
          scale: 1.05, // Slight scale up on hover
          duration: 0.8, // Slow animation
          ease: "power2.inOut", // Smooth easing
        });
        flipTimeline.play();
      };

      // Hover out - return to original position
      const handleMouseLeave = () => {
        flipTimeline.clear();
        flipTimeline.to(flipCard, {
          rotationY: 0,
          scale: 0.9,
          duration: 0.8, // Slow animation
          ease: "power2.inOut", // Smooth easing
        });
        flipTimeline.play();
      };

      // Add event listeners
      phoneEl.addEventListener("mouseenter", handleMouseEnter);
      phoneEl.addEventListener("mouseleave", handleMouseLeave);

      // Store timeline for cleanup
      flipTimelines.current[index] = flipTimeline;

      // Store cleanup function
      cleanupFunctions.push(() => {
        phoneEl.removeEventListener("mouseenter", handleMouseEnter);
        phoneEl.removeEventListener("mouseleave", handleMouseLeave);
        if (flipTimeline) {
          flipTimeline.kill();
        }
      });
    });

    // Cleanup all timelines and event listeners on unmount
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
      flipTimelines.current.forEach((timeline) => {
        if (timeline) {
          timeline.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={downloadSectionRef}
      className="bg-[#f5f5f0] py-16 px-6 md:py-38 md:px-0 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circular Lines - Thin abstract circles */}
        <Image
          src="/Group 35887.svg"
          alt="Community Groups"
          width={210}
          height={210}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[900px] md:h-[900px] opacity-30"
        />

        {/* Star-like Elements */}
        {/* <div className="absolute top-[15%] left-[8%] w-2 h-2 bg-[#B8860B] rounded-full opacity-40 blur-[1px]"></div>
        <div className="absolute bottom-[20%] right-[12%] w-1.5 h-1.5 bg-[#B8860B] rounded-full opacity-50 blur-[1px]"></div> */}
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Split Heading with Phones in Middle */}
        <div className="relative mb-16 md:mb-20">
          {/* Text and Phones Container */}
          <div className="relative min-h-[350px] md:min-h-[450px] lg:min-h-[550px] px-4 md:px-8">
            {/* Text: "Download the App Now" - Centered, phones will overlap */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full">
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
            <div className="absolute left-1/2 top-1/2 -ml-32 -mt-42 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
              {/* Left Phone - Top-left position */}
              <div
                ref={(el) => {
                  phoneRefs.current[0] = el;
                }}
                className="relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12 cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="phone-flip-card h-full w-full"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateY(0deg)",
                  }}
                >
                  {/* Front - Phone with Screen */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                    }}
                  >
                    <div className="relative p-1.5 md:p-2 ">
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
                  {/* Back - Phone Back */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(-180deg)",
                    }}
                  >
                    <div className="relative rounded-[2rem] bg-gray-900 p-1.5 md:p-2 ">
                      <div className="aspect-[9/19] rounded-[1.5rem] bg-gradient-to-b from-gray-800 to-gray-900"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Middle */}
              <div
                ref={(el) => {
                  phoneRefs.current[1] = el;
                }}
                className="relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12 cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="phone-flip-card h-full w-full"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateY(0deg)",
                  }}
                >
                  {/* Front - Phone with Screen */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                    }}
                  >
                    <div className="relative p-1.5 md:p-2 ">
                      <div className="aspect-[9/19] w-[650px] h-[650px] overflow-hidden">
                        <Image
                          width={900}
                          height={900}
                          src="/iPhone-13-Pro-Front (1).svg"
                          alt="App Screen 1"
                          className="w-full h-full md:-ml-5"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Back - Phone Back */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(-180deg)",
                    }}
                  >
                    <div className="relative rounded-[2rem] bg-gray-900 p-1.5 md:p-2 ">
                      <div className="aspect-[9/19] rounded-[1.5rem] bg-gradient-to-b from-gray-800 to-gray-900"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Phone */}
              <div
                ref={(el) => {
                  phoneRefs.current[2] = el;
                }}
                className="relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12 cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="phone-flip-card h-full w-full"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateY(0deg)",
                  }}
                >
                  {/* Front - Phone with Screen */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                    }}
                  >
                    <div className="relative p-1.5 md:p-2 ">
                      <div className="aspect-[9/19] w-[650px] h-[650px] overflow-hidden">
                        <Image
                          width={900}
                          height={900}
                          src="/iPhone-13-Pro-Front (2).svg"
                          alt="App Screen 1"
                          className="w-full h-full md:mt-20 md:-ml-15"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Back - Phone Back */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(-180deg)",
                    }}
                  >
                    <div className="relative rounded-[2rem] bg-gray-900 p-1.5 md:p-2 ">
                      <div className="aspect-[9/19] rounded-[1.5rem] bg-gradient-to-b from-gray-800 to-gray-900"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Buttons - Positioned below text, aligned with "Download" and "App Now" */}
          <div className="relative flex flex-wrap justify-between items-start gap-4 mt-8 md:-mt-[180px] px-4 md:px-0">
            {/* Left Button - Below "Download" */}
            <div className="flex-1 min-w-[200px] max-w-[280px]">
              <Image
                src="/Store download button.svg"
                alt="Google Play"
                width={24}
                height={24}
                className="w-full h-full flex-shrink-0 "
              />
            </div>

            {/* Right Button - Below "App Now" */}
            <div className="flex-1 min-w-[200px] max-w-[280px] ml-auto">
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
