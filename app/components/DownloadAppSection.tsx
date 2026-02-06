"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DownloadAppSection() {
  const downloadSectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const phone1Ref = useRef<HTMLDivElement>(null);
  const phone2Ref = useRef<HTMLDivElement>(null);
  const phone3Ref = useRef<HTMLDivElement>(null);

  // Animate heading fade-in when section reaches center
  useEffect(() => {
    if (!downloadSectionRef.current || !headingRef.current) return;

    gsap.set(headingRef.current, {
      opacity: 0,
      y: -30,
    });

    ScrollTrigger.create({
      trigger: downloadSectionRef.current,
      start: "center center",
      toggleActions: "play none none none",
      onEnter: () => {
        gsap.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === downloadSectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Pin section and animate phones sequentially
  useEffect(() => {
    if (!downloadSectionRef.current) return;

    const section = downloadSectionRef.current;
    const phone1 = phone1Ref.current;
    const phone2 = phone2Ref.current;
    const phone3 = phone3Ref.current;

    if (!phone1 || !phone2 || !phone3) return;

    // Set initial state - all phones hidden
    gsap.set([phone1, phone2, phone3], {
      opacity: 0,
      scale: 0.8,
    });

    // Scroll distance for animation (each phone gets ~400px)
    const scrollDistance = 1200;

    // Create timeline for phone animations
    const phoneTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center center",
        end: `+=${scrollDistance}`,
        pin: true,
        pinSpacing: true,
        scrub: 1, // Smooth scrubbing tied to scroll
      },
    });

    // Animate phones sequentially
    phoneTimeline
      .to(phone1, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      })
      .to(
        phone2,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2", // Start slightly before phone1 finishes
      )
      .to(
        phone3,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2", // Start slightly before phone2 finishes
      );

    return () => {
      phoneTimeline.kill();
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
      className="bg-[#f5f5f0] py-12 sm:py-16 px-4 sm:px-6 md:pt-38 md:px-0 relative overflow-hidden"
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
              <div
                ref={headingRef}
                className="flex items-center justify-center"
              >
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
            <div className="absolute left-1/2 top-1/2 -ml-32 md:mt-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
              {/* Left Phone - Appears on first scroll */}
              <div
                ref={phone1Ref}
                className="relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12"
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
                ref={phone2Ref}
                className="relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12"
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
                ref={phone3Ref}
                className="relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12"
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
