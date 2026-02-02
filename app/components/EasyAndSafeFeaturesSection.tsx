"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EasyAndSafeFeaturesSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref1 = useRef<HTMLHeadingElement>(null);
  const h2Ref2 = useRef<HTMLHeadingElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backgroundRef.current) return;

    // Continuous automatic animation - pulse/breathing effect
    // Using opacity only to avoid overflow/scroll issues
    const tl = gsap.timeline({ repeat: -1, ease: "power1.inOut" });
    
    tl.to(backgroundRef.current, {
      opacity: 0.6,
      duration: 3,
    })
    .to(backgroundRef.current, {
      opacity: 1,
      duration: 3,
    });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !h2Ref1.current || !h2Ref2.current || !featureCardsRef.current) return;

    // Set initial states - text starts from above and invisible
    gsap.set([h2Ref1.current, h2Ref2.current], {
      opacity: 0,
      y: -30,
    });

    const featureItems = featureCardsRef.current.querySelectorAll(".feature-item");
    gsap.set(featureItems, {
      opacity: 0,
      y: -30,
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

    // Animate headings
    tl.to(h2Ref1.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        h2Ref2.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .to(
        featureItems,
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
    <section ref={sectionRef} className="py-12 sm:py-16 px-4 sm:px-6 bg-[#fbead0] md:py-24 md:px-12 relative overflow-hidden">
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
      <div className="mx-auto max-w-6xl relative z-10">
        <h2
          ref={h2Ref1}
          className="mb-2 sm:mb-4 text-center font-clash text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium text-[#1B1B1B]"
        >
          Easy and safe features
        </h2>
        <h2
          ref={h2Ref2}
          className="mb-6 sm:mb-8 md:mb-4 text-center font-clash text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium text-[#1B1B1B]"
        >
          of The Circle Society app
        </h2>

        {/* Feature Cards */}
        <div ref={featureCardsRef} className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-6 md:mt-20 lg:gap-8">
          {/* Feature 1: Community Groups */}
          <div className="text-center feature-item">
            <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
              <div>
                <Image
                  src="/Dating on POF.svg"
                  alt="Community Groups"
                  width={210}
                  height={210}
                  className="mx-auto w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[210px] md:h-[210px]"
                />
              </div>
            </div>
            <h4 className="mb-2 sm:mb-3 font-clash text-lg sm:text-xl md:text-3xl text-center sm:text-start font-medium text-[#1B1B1B]">
              Community Groups
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed w-full sm:w-[80%] text-center sm:text-start text-[#5A5A5A] md:text-[22px]">
              Join groups based on your passions — from fitness to faith, food
              to family.
            </p>
          </div>

          {/* Feature 2: Events You'll Love */}
          <div className="text-center feature-item">
            <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
              <div>
                <Image
                  src="/For our anniversary, this fool got me a card that read, 'You're the best thing I've ever found on the Internet._'.svg"
                  alt="Events You'll Love"
                  width={290}
                  height={290}
                  className="mx-auto w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[290px] md:h-[290px]"
                />
              </div>
            </div>
            <h4 className="mb-2 sm:mb-3 font-clash text-lg sm:text-xl md:text-3xl text-center sm:text-start font-medium text-[#1B1B1B]">
              Events You'll Love
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed w-full sm:w-[80%] text-center sm:text-start text-[#5A5A5A] md:text-[22px]">
              Find and create local meetups and experiences that matter.
            </p>
          </div>

          {/* Feature 3: Match & Connect */}
          <div className="text-center feature-item">
            <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
              <div>
                <Image
                  src="/pof_illustration_heart_hi.webp.svg"
                  alt="Match & Connect"
                  width={340}
                  height={340}
                  className="mx-auto w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[340px] md:h-[340px]"
                />
              </div>
            </div>
            <h4 className="mb-2 sm:mb-3 font-clash text-lg sm:text-xl md:text-3xl text-center sm:text-start font-medium text-[#1B1B1B]">
              Match & Connect
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed w-full sm:w-[80%] text-center sm:text-start text-[#5A5A5A] md:text-[22px]">
              Discover people based on shared interests, not superficial swipes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
