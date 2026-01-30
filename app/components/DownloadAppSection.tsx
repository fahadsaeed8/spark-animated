"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DownloadAppSection() {
  const downloadSectionRef = useRef<HTMLElement>(null);
  const phoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Professional slow card flip animation - starts before section, sequential: 1, then 2, then 3
  useEffect(() => {
    if (!downloadSectionRef.current) return;

    const section = downloadSectionRef.current;
    const phoneElements = phoneRefs.current.filter(Boolean) as HTMLDivElement[];
    const totalPhones = phoneElements.length;

    if (totalPhones === 0) return;

    // Set initial state - all phones show back initially (like cards)
    phoneElements.forEach((phoneEl) => {
      const flipCard = phoneEl.querySelector(".phone-flip-card") as HTMLElement;
      if (!flipCard) return;
      gsap.set(flipCard, {
        rotationY: 180,
        transformStyle: "preserve-3d",
        scale: 0.9,
      });
    });

    // Calculate longer scroll distance for slow, smooth animation
    const scrollDistance = totalPhones * 800; // 800px per phone for slow flip

    // Create scroll triggers for sequential phone flip animations (like cards)
    phoneElements.forEach((phoneEl, index) => {
      const flipCard = phoneEl.querySelector(".phone-flip-card") as HTMLElement;
      if (!flipCard) return;

      // Calculate when this phone should flip
      const startProgress = index / totalPhones; // 0, 0.33, 0.66
      const endProgress = (index + 1) / totalPhones; // 0.33, 0.66, 1.0

      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        end: "top 15%",
        scrub: 1, // Smooth scrubbing
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress >= startProgress && progress <= endProgress) {
            // During flip - calculate rotation with smooth easing
            const localProgress =
              (progress - startProgress) / (endProgress - startProgress);

            // Smooth easing function for professional look (ease-in-out)
            const easedProgress =
              localProgress < 0.5
                ? 2 * localProgress * localProgress
                : 1 - Math.pow(-2 * localProgress + 2, 2) / 2;

            // Rotate from back (180deg) to front (0deg)
            const rotation = 180 - easedProgress * 180;

            // Add subtle scale effect during flip for depth
            const scale = 0.9 + easedProgress * 0.1; // Scale from 0.9 to 1.0

            gsap.set(flipCard, {
              rotationY: rotation,
              scale: scale,
            });
          } else if (progress < startProgress) {
            // Before this phone's turn - show back
            gsap.set(flipCard, {
              rotationY: 180,
              scale: 0.9,
            });
          } else if (progress > endProgress) {
            // After this phone's turn - show front
            gsap.set(flipCard, {
              rotationY: 0,
              scale: 1,
            });
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
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
                className="relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12"
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
                      transform: "rotateY(180deg)",
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
                  phoneRefs.current[0] = el;
                }}
                className="relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12"
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
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="relative rounded-[2rem] bg-gray-900 p-1.5 md:p-2 ">
                      <div className="aspect-[9/19] rounded-[1.5rem] bg-gradient-to-b from-gray-800 to-gray-900"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div
                ref={(el) => {
                  phoneRefs.current[0] = el;
                }}
                className="relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12"
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
                      transform: "rotateY(180deg)",
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
