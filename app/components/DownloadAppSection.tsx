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

  // Mobile refs
  const mobileHeadingRef = useRef<HTMLDivElement>(null);
  const mobilePhone1Ref = useRef<HTMLDivElement>(null);
  const mobilePhone2Ref = useRef<HTMLDivElement>(null);
  const mobilePhone3Ref = useRef<HTMLDivElement>(null);

  // Animate heading fade-in when section reaches center (Desktop)
  useEffect(() => {
    if (!downloadSectionRef.current || !headingRef.current) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return; // Skip desktop animation on mobile

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
      ScrollTrigger.refresh();
    };
  }, []);

  // Animate heading fade-in when section reaches center (Mobile)
  useEffect(() => {
    if (!downloadSectionRef.current || !mobileHeadingRef.current) return;

    const isMobile = window.innerWidth < 768;
    if (!isMobile) return; // Skip mobile animation on desktop

    gsap.set(mobileHeadingRef.current, {
      opacity: 0,
      y: -30,
    });

    ScrollTrigger.create({
      trigger: downloadSectionRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
      onEnter: () => {
        gsap.to(mobileHeadingRef.current, {
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
      ScrollTrigger.refresh();
    };
  }, []);

  // Pin section and animate phones sequentially (Desktop)
  useEffect(() => {
    if (!downloadSectionRef.current) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return; // Skip desktop animation on mobile

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
        anticipatePin: 1,
        invalidateOnRefresh: true,
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
      ScrollTrigger.refresh();
    };
  }, []);

  // Pin section and animate phones sequentially (Mobile)
  useEffect(() => {
    if (!downloadSectionRef.current) return;

    const isMobile = window.innerWidth < 768;
    if (!isMobile) return; // Skip mobile animation on desktop

    const section = downloadSectionRef.current;
    const phone1 = mobilePhone1Ref.current;
    const phone2 = mobilePhone2Ref.current;
    const phone3 = mobilePhone3Ref.current;

    if (!phone1 || !phone2 || !phone3) return;

    // Set initial state - all phones hidden
    gsap.set([phone1, phone2, phone3], {
      opacity: 0,
      scale: 0.8,
    });

    // Scroll distance for animation (shorter for mobile)
    const scrollDistance = 800;

    // Create timeline for phone animations
    const phoneTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: `+=${scrollDistance}`,
        pin: true,
        pinSpacing: true,
        scrub: 1, // Smooth scrubbing tied to scroll
        anticipatePin: 1,
        invalidateOnRefresh: true,
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
      ScrollTrigger.refresh();
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
          className="absolute top-130 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1900px] h-[1900px] md:w-[900px] md:h-[900px] opacity-30"
        />
        <Image
          src="/Ellipse 2.svg"
          alt="Community Groups"
          width={210}
          height={210}
          className="absolute top-[20%] md:top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1900px] h-[1900px] md:w-[800px] md:h-[800px] opacity-100"
        />
        <Image
          src="/Ellipse 2.svg"
          alt="Community Groups"
          width={210}
          height={210}
          className="absolute top-[50%] md:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1900px] h-[1900px] md:w-[800px] md:h-[800px] opacity-100"
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Desktop View - Hidden on mobile */}
        <div className="hidden md:block relative mb-12 sm:mb-16 md:mb-20">
          {/* Text and Phones Container */}
          <div className="relative min-h-[450px] lg:min-h-[550px] px-8">
            {/* Text: "Download the App Now" - Centered, phones will overlap */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4">
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
            <div className="absolute left-[40%] top-1/2 md:mt-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
              {/* Left Phone - Appears on first scroll */}
              <div
                ref={phone1Ref}
                className="relative z-10 w-40 lg:w-48 xl:w-56 transform -rotate-[6deg] -ml-18 -mt-12"
              >
                <div className="relative p-2">
                  <div className="aspect-[9/19] w-[650px] h-[650px] overflow-hidden">
                    <Image
                      width={900}
                      height={900}
                      src="/iPhone-13-Pro-Front.svg"
                      alt="App Screen 1"
                      className="w-full h-full -mt-12"
                    />
                  </div>
                </div>
              </div>
              {/* Middle Phone - Appears on second scroll */}
              <div
                ref={phone2Ref}
                className="relative z-10 w-40 lg:w-48 xl:w-56 transform -rotate-[6deg] -ml-18 -mt-12"
              >
                <div className="relative p-2">
                  <div className="aspect-[9/19] w-[650px] h-[650px] overflow-hidden">
                    <Image
                      width={900}
                      height={900}
                      src="/iPhone-13-Pro-Front (1).svg"
                      alt="App Screen 2"
                      className="w-full h-full -ml-5"
                    />
                  </div>
                </div>
              </div>
              {/* Right Phone - Appears on third scroll */}
              <div
                ref={phone3Ref}
                className="relative z-10 w-40 lg:w-48 xl:w-56 transform -rotate-[6deg] -ml-18 -mt-12"
              >
                <div className="relative p-2">
                  <div className="aspect-[9/19] w-[650px] h-[650px] overflow-hidden">
                    <Image
                      width={900}
                      height={900}
                      src="/iPhone-13-Pro-Front (2).svg"
                      alt="App Screen 3"
                      className="w-full h-full mt-20 -ml-15"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Buttons - Positioned below text */}
          <div className="relative flex flex-row justify-between items-start gap-4 -mt-[180px] px-0">
            {/* Left Button */}
            <div className="flex-1 min-w-[200px] max-w-[280px]">
              <Image
                src="/Store download button.svg"
                alt="Google Play"
                width={24}
                height={24}
                className="w-full h-full flex-shrink-0"
              />
            </div>

            {/* Right Button */}
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

        {/* Mobile View - Hidden on desktop */}
        <div className="block md:hidden relative ">
          {/* Text: "Download the App Now" - Centered */}
          <div className="relative z-10 w-full px-4 mb-8">
            <div
              ref={mobileHeadingRef}
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

          {/* Download Buttons - Stacked vertically on mobile */}
          <div className="relative flex  justify-center items-center gap-4 px-4">
            {/* Google Play Button */}
            <div className="w-full max-w-[280px]">
              <Image
                src="/Store download button.svg"
                alt="Google Play"
                width={24}
                height={24}
                className="w-full h-full flex-shrink-0"
              />
            </div>

            {/* App Store Button */}
            <div className="w-full max-w-[280px]">
              <Image
                src="/Store download button (1).svg"
                alt="App Store"
                width={24}
                height={24}
                className="w-full h-full flex-shrink-0"
              />
            </div>
          </div>
          {/* Phones - Diagonal arrangement for mobile */}
          <div className="relative -ml-70 mt-40 flex items-center justify-center mb-8 min-h-[400px]">
            {/* Left Phone */}
            <div
              ref={mobilePhone1Ref}
              className="relative z-10 w-24 transform -rotate-[5deg] -ml-4 -mt-8"
            >
              <div className="relative p-1.5">
                <div className="aspect-[9/19] w-[450px] h-[450px] md:w-[650px] md:h-[650px] overflow-hidden">
                  <Image
                    width={900}
                    height={900}
                    src="/iPhone-13-Pro-Front.svg"
                    alt="App Screen 1"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            {/* Middle Phone */}
            <div
              ref={mobilePhone2Ref}
              className="relative z-10 w-24 transform -rotate-[5deg] -ml-4 -mt-8"
            >
              <div className="relative p-1.5">
                <div className="aspect-[9/19] w-[450px] h-[450px] md:w-[650px] md:h-[650px] overflow-hidden">
                  <Image
                    width={900}
                    height={900}
                    src="/iPhone-13-Pro-Front (1).svg"
                    alt="App Screen 2"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            {/* Right Phone */}
            <div
              ref={mobilePhone3Ref}
              className="relative z-10 w-24 transform -rotate-[5deg] -ml-4 -mt-8"
            >
              <div className="relative p-1.5">
                <div className="aspect-[9/19] w-[450px] h-[450px] md:w-[650px] md:h-[650px] overflow-hidden">
                  <Image
                    width={900}
                    height={900}
                    src="/iPhone-13-Pro-Front (2).svg"
                    alt="App Screen 3"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
