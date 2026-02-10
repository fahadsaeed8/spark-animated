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
    }).to(backgroundRef.current, {
      opacity: 1,
      duration: 3,
    });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !h2Ref1.current ||
      !h2Ref2.current ||
      !featureCardsRef.current
    )
      return;

    // Set initial states - text starts from above and invisible
    gsap.set([h2Ref1.current, h2Ref2.current], {
      opacity: 0,
      y: -30,
    });

    const featureItems =
      featureCardsRef.current.querySelectorAll(".feature-item");
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
    <section
      ref={sectionRef}
      className="py-12 px-4 sm:py-16 -mt-1 md:-mt-0 sm:px-6 bg-[#F4EDE2] md:py-24 md:px-12 relative overflow-hidden"
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
      <div className="mx-auto max-w-6xl relative z-10">
        <h2
          ref={h2Ref1}
          className="mb-2 sm:mb-4 text-center font-clash text-4xl font-medium text-[#1B1B1B] md:text-5xl"
        >
          What You Can Do on
        </h2>
        <h2
          ref={h2Ref2}
          className="mb-6 sm:mb-4 text-center font-clash text-4xl font-medium text-[#1B1B1B] md:text-5xl md:mb-4"
        >
          The Circle Society{" "}
        </h2>

        {/* Feature Cards */}
        <div
          ref={featureCardsRef}
          className="grid gap-6 sm:gap-8 md:grid-cols-3 md:gap-6 md:mt-20 lg:gap-8"
        >
          {/* Feature 1: Community Groups */}
          <div className="text-center feature-item">
            <div className="mb-4 sm:mb-6 flex justify-center md:justify-start">
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px]">
                <Image
                  src="/community groups.jpg.jpeg"
                  alt="Community Groups"
                  width={340}
                  height={340}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <h4 className="mb-2 sm:mb-3 font-clash text-2xl md:text-3xl text-center md:text-start font-medium text-[#1B1B1B]">
              Join Communities{" "}
            </h4>
            <p className="text-lg leading-relaxed w-[60%] sm:w-[80%] text-center md:text-start text-[#5A5A5A] md:text-[22px] mx-auto md:mx-0">
              Discover groups around shared interests, passions, and lifestyles.
            </p>
          </div>

          {/* Feature 2: Events You'll Love */}
          <div className="text-center feature-item">
            <div className="mb-4 sm:mb-6 flex justify-center md:justify-start">
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px]">
                <Image
                  src="/events.jpg.jpeg"
                  alt="Events You'll Love"
                  width={340}
                  height={340}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <h4 className="mb-2 sm:mb-3 font-clash text-2xl md:text-3xl text-center md:text-start font-medium text-[#1B1B1B]">
              Attend Events{" "}
            </h4>
            <p className="text-lg leading-relaxed w-[60%] sm:w-[80%] text-center md:text-start text-[#5A5A5A] md:text-[22px] mx-auto md:mx-0">
              From small meetups to large gatherings — online discovery,
              real-life fun.{" "}
            </p>
          </div>

          {/* Feature 3: Match & Connect */}
          <div className="text-center feature-item">
            <div className="mb-4 sm:mb-6 flex justify-center md:justify-start">
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px]">
                <Image
                  src="/match & connect.jpg.jpeg"
                  alt="Match & Connect"
                  width={340}
                  height={340}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <h4 className="mb-2 sm:mb-3 font-clash text-2xl md:text-3xl text-center md:text-start font-medium text-[#1B1B1B]">
              Meet Naturally{" "}
            </h4>
            <p className="text-lg leading-relaxed w-[60%] sm:w-[80%] text-center md:text-start text-[#5A5A5A] md:text-[22px] mx-auto md:mx-0">
              Connections happen through shared moments, not forced
              matching.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
