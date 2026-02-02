"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DownloadAppSection() {
  const downloadSectionRef = useRef<HTMLElement>(null);
  const phoneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  // Scroll-triggered flip animation for phones
  useEffect(() => {
    if (!downloadSectionRef.current) return;

    const section = downloadSectionRef.current;
    const phoneElements = phoneRefs.current.filter(Boolean) as HTMLDivElement[];
    const totalPhones = phoneElements.length;

    if (totalPhones === 0) return;

    // Calculate scroll distance - each phone gets 400px of scroll
    const scrollDistance = totalPhones * 400;

    // Track if phones have been shown
    let phonesShown = false;

    // Pin the section during scroll animation
    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "center center",
      end: `+=${scrollDistance}`,
      pin: true,
      pinSpacing: true,
      onEnter: () => {
        // Show all phones when scroll animation starts
        if (!phonesShown) {
          phonesShown = true;
          phoneElements.forEach((phoneEl) => {
            gsap.to(phoneEl, {
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
            });
          });
        }
      },
      onUpdate: (self) => {
        // Show phones when animation starts (any progress > 0)
        if (self.progress > 0 && !phonesShown) {
          phonesShown = true;
          phoneElements.forEach((phoneEl) => {
            gsap.to(phoneEl, {
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
            });
          });
        }
      },
      onLeaveBack: () => {
        // Hide phones when scrolling back up before animation
        phonesShown = false;
        phoneElements.forEach((phoneEl) => {
          gsap.to(phoneEl, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          });
        });
      },
    });

    // Set initial state - all phones hidden initially, show front when visible
    phoneElements.forEach((phoneEl) => {
      const flipCard = phoneEl.querySelector(".phone-flip-card") as HTMLElement;
      if (!flipCard) return;
      gsap.set(phoneEl, {
        opacity: 0,
      });
      gsap.set(flipCard, {
        rotationY: 0,
        transformStyle: "preserve-3d",
        scale: 0.9,
      });
    });

    // Create scroll-triggered flip animations for each phone
    phoneElements.forEach((phoneEl, index) => {
      const flipCard = phoneEl.querySelector(".phone-flip-card") as HTMLElement;
      if (!flipCard) return;

      // Calculate when this phone should flip (sequential: 1, 2, 3)
      const startProgress = index / totalPhones;
      const endProgress = (index + 1) / totalPhones;

      // Create scroll trigger for this phone's flip animation
      ScrollTrigger.create({
        trigger: section,
        start: "center center",
        end: `+=${scrollDistance}`,
        scrub: 1, // Smooth scrubbing tied to scroll
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress >= startProgress && progress <= endProgress) {
            // Calculate rotation based on progress within this phone's range
            const localProgress =
              (progress - startProgress) / (endProgress - startProgress);
            // Flip from 0 to 180 degrees (front to back)
            const rotation = localProgress * 180;
            gsap.set(flipCard, {
              rotationY: rotation,
              scale: 0.9 + localProgress * 0.1, // Slight scale up during flip
            });
          } else if (progress < startProgress) {
            // Before this phone's turn - show front
            gsap.set(flipCard, {
              rotationY: 0,
              scale: 0.9,
            });
          } else if (progress > endProgress) {
            // After this phone's turn - show back (flipped)
            gsap.set(flipCard, {
              rotationY: 180,
              scale: 1.0,
            });
          }
        },
      });
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Animate heading fade-in from top
  useEffect(() => {
    if (!downloadSectionRef.current || !headingRef.current) return;

    gsap.set(headingRef.current, {
      opacity: 0,
      y: -30,
    });

    ScrollTrigger.create({
      trigger: downloadSectionRef.current,
      start: "top 80%",
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[900px] md:h-[900px] opacity-30"
        />
        <Image
          src="/Ellipse 2.svg"
          alt="Community Groups"
          width={210}
          height={210}
          className="absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] opacity-100"
        />
        <Image
          src="/Ellipse 2.svg"
          alt="Community Groups"
          width={210}
          height={210}
          className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] opacity-100"
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Split Heading with Phones in Middle */}
        <div className="relative mb-12 sm:mb-16 md:mb-20">
          {/* Text and Phones Container */}
          <div className="relative min-h-[250px] sm:min-h-[300px] md:min-h-[450px] lg:min-h-[550px] px-2 sm:px-4 md:px-8">
            {/* Text: "Download the App Now" - Centered, phones will overlap */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4">
              <div ref={headingRef} className="flex items-center justify-center">
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
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20 -ml-16 sm:-ml-24 md:-ml-32 -mt-20 sm:-mt-32 md:-mt-42">
              {/* Left Phone - Top-left position */}
              <div
                ref={(el) => {
                  phoneRefs.current[0] = el;
                }}
                className="relative z-10 w-16 h-auto sm:w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-2 sm:-ml-4 md:-ml-18 -mt-4 sm:-mt-8 md:-mt-12 cursor-pointer opacity-0"
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
                    <div className="relative p-1 sm:p-1.5 md:p-2">
                      <div className="aspect-[9/19] w-full overflow-hidden">
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
                    <div className="relative p-1 sm:p-1.5 md:p-2">
                      <div className="aspect-[9/19] w-full overflow-hidden">
                        <Image
                          width={900}
                          height={900}
                          src="/iPhone-13-Pro-Front (2).svg"
                          alt="App Screen 1 Back"
                          className="w-full h-full md:-mt-12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Middle */}
              <div
                ref={(el) => {
                  phoneRefs.current[1] = el;
                }}
                className="relative z-10 w-16 h-auto sm:w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-2 sm:-ml-4 md:-ml-18 -mt-4 sm:-mt-8 md:-mt-12 cursor-pointer opacity-0"
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
                    <div className="relative p-1 sm:p-1.5 md:p-2">
                      <div className="aspect-[9/19] w-full overflow-hidden">
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
                    <div className="relative p-1 sm:p-1.5 md:p-2">
                      <div className="aspect-[9/19] w-full overflow-hidden">
                        <Image
                          width={900}
                          height={900}
                          src="/iPhone-13-Pro-Front (1).svg"
                          alt="App Screen 2 Back"
                          className="w-full h-full md:-ml-5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Phone */}
              <div
                ref={(el) => {
                  phoneRefs.current[2] = el;
                }}
                className="relative z-10 w-16 h-auto sm:w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-2 sm:-ml-4 md:-ml-18 -mt-4 sm:-mt-8 md:-mt-12 cursor-pointer opacity-0"
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
                    <div className="relative p-1 sm:p-1.5 md:p-2">
                      <div className="aspect-[9/19] w-full overflow-hidden">
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
                    <div className="relative p-1 sm:p-1.5 md:p-2">
                      <div className="aspect-[9/19] w-full overflow-hidden">
                        <Image
                          width={900}
                          height={900}
                          src="/iPhone-13-Pro-Front.svg"
                          alt="App Screen 3 Back"
                          className="w-full h-full md:mt-20 md:-ml-15"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Buttons - Positioned below text, aligned with "Download" and "App Now" */}
          <div className="relative flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start gap-4 mt-12 sm:mt-16 md:-mt-[180px] px-4 md:px-0">
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
