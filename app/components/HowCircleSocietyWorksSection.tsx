"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowCircleSocietyWorksSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backgroundRef.current) return;

    // Continuous automatic animation - pulse/breathing effect
    const tl = gsap.timeline({ repeat: -1, ease: "power1.inOut" });

    tl.to(backgroundRef.current, {
      opacity: 0.6,
      duration: 3,
    }).to(backgroundRef.current, {
      opacity: 1,
      duration: 3,
    });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !stepsRef.current) return;

    // Set initial states - text starts from above and invisible
    gsap.set(headingRef.current, {
      opacity: 0,
      y: -30,
    });

    const stepItems = stepsRef.current.querySelectorAll(".step-item");
    gsap.set(stepItems, {
      opacity: 0,
      y: 30,
    });

    // Create timeline for fade-in animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // Animate heading
    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    }).to(
      stepItems,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      },
      "-=0.4",
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 sm:py-16 sm:px-6 bg-[#fbead0] md:py-24 md:px-12 relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/Background-grey.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Main Heading */}
        <h2
          ref={headingRef}
          className="mb-12 sm:mb-16 text-center font-clash text-3xl sm:text-4xl font-medium text-[#1B1B1B] md:text-5xl lg:text-6xl"
        >
          How Circle Society Works
        </h2>

        {/* Steps Grid */}
        <div
          ref={stepsRef}
          className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-6 lg:gap-8"
        >
          {/* Step 1: Discover Activities */}
          <div className="text-center bg-white p-5 rounded-2xl step-item">
            <div className="relative mb-6 flex items-start justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] overflow-visible">
              {/* Golden Number */}
              <div className="absolute left-0 sm:left-2 md:left-4 top-0 z-10">
                <span className="text-6xl sm:text-7xl md:text-[140px] lg:text-[180px] font-clash font-bold text-[#D4AF37] leading-none">
                  1
                </span>
              </div>

              {/* iPhone Mockup */}
              <div className="relative  w-full max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] mt-10 sm:mt-14 md:mt-20 ml-6 sm:ml-10 md:ml-14 lg:ml-16 transform rotate-[8deg]">
                <Image
                  src="/iPhone-13-Pro-Front.svg"
                  alt="Discover Activities"
                  width={280}
                  height={560}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            <h3 className="mb-3 sm:mb-4 font-clash text-xl sm:text-2xl md:text-3xl font-medium text-[#1B1B1B]">
              Discover Activities
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#5A5A5A] md:text-lg max-w-md mx-auto">
              Take our fun quiz, no boring questions. Just tell us what lights
              you up: Travel? Dogs? Memes?
            </p>
          </div>

          {/* Step 2: Join a Community or Event */}
          <div className="text-center bg-white p-5 rounded-2xl step-item">
            <div className="relative mb-6 flex items-start justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] overflow-visible">
              {/* Golden Number */}
              <div className="absolute left-0 sm:left-2 md:left-4 top-0 z-10">
                <span className="text-6xl sm:text-7xl md:text-[140px] lg:text-[180px] font-clash font-bold text-[#D4AF37] leading-none">
                  2
                </span>
              </div>

              {/* iPhone Mockup */}
              <div className="relative w-full max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] mt-10 sm:mt-14 md:mt-20 ml-6 sm:ml-10 md:ml-14 lg:ml-16 transform rotate-[8deg]">
                <Image
                  src="/iPhone-13-Pro-Front (1).svg"
                  alt="Join a Community or Event"
                  width={280}
                  height={560}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            <h3 className="mb-3 sm:mb-4 font-clash text-xl sm:text-2xl md:text-3xl font-medium text-[#1B1B1B]">
              Join a Community or Event
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#5A5A5A] md:text-lg max-w-md mx-auto">
              Our matching engine compares your vibe with everyone else's to
              find the strongest spark.
            </p>
          </div>

          {/* Step 3: Build Real Connections */}
          <div className="text-center bg-white p-5 rounded-2xl step-item">
            <div className="relative mb-6 flex items-start justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] overflow-visible">
              {/* Golden Number */}
              <div className="absolute left-0 sm:left-2 md:left-4 top-0 z-10">
                <span className="text-6xl sm:text-7xl md:text-[140px] lg:text-[180px] font-clash font-bold text-[#D4AF37] leading-none">
                  3
                </span>
              </div>

              {/* iPhone Mockup */}
              <div className="relative w-full max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] mt-10 sm:mt-14 md:mt-20 ml-6 sm:ml-10 md:ml-14 lg:ml-16 transform rotate-[8deg]">
                <Image
                  src="/iPhone-13-Pro-Front (2).svg"
                  alt="Build Real Connections"
                  width={280}
                  height={560}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            <h3 className="mb-3 sm:mb-4 font-clash text-xl sm:text-2xl md:text-3xl font-medium text-[#1B1B1B]">
              Build Real Connections
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#5A5A5A] md:text-lg max-w-md mx-auto">
              No swiping. No awkward intros. Just show up and see who you
              matched with instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
