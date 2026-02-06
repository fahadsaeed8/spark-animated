"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FaithCommunitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !headingRef.current ||
      !imageRef.current ||
      !descriptionRef.current ||
      !buttonsRef.current
    )
      return;

    // Set initial states
    if (imageRef.current) {
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        x: -50,
      });
    }

    gsap.set(headingRef.current, {
      opacity: 0,
      y: -30,
    });

    gsap.set(descriptionRef.current, {
      opacity: 0,
      y: 20,
    });

    gsap.set(buttonsRef.current, {
      opacity: 0,
      y: 20,
    });

    // Create timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play none none none",
        scrub: false,
      },
    });

    // Animate elements sequentially
    // 1. Image first
    tl.to(imageRef.current, {
      opacity: 1,
      scale: 1,
      x: 0,
      duration: 0.4,
      ease: "back.out(1.7)",
    })
      // 2. Then heading
      .to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "+=0.1",
      )
      // 3. Then description
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "+=0.1",
      )
      // 4. Then buttons
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "+=0.1",
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const islamicGroups = [
    "Dhikr Majlis",
    "Prayer Partners",
    "Quran Challenge",
    "Muslim Sports Club",
    "Weekly Potluck",
    "Quran Study",
  ];

  const christianGroups = [
    "Pottery Circle",
    "Joyful Creators",
    "Family Fun",
    "Faith Fitness",
    "Faith Travels",
    "Worship Night",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 sm:py-16 bg-[#73542A] sm:px-6 md:py-24 md:px-12 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-0 items-center">
          {/* Left Side - White Card with Groups */}
          {/* Image */}
          <div ref={imageRef} className="mb-6 flex items-center justify-center">
            <Image
              src="/Frame 2131326904.png"
              alt="Decoration"
              width={300}
              height={300}
              className="w-full max-w-[450px] h-auto"
              unoptimized
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="text-center md:text-left">
            <h2
              ref={headingRef}
              className="font-clash text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            >
              Communities Built on Faith & Real Life
            </h2>
            <p
              ref={descriptionRef}
              className="text-lg sm:text-xl text-white md:text-2xl mb-8 leading-relaxed"
            >
              Circle Society connects people through faith-based groups, events,
              and shared interests in real life.
            </p>

            {/* Download Buttons */}
            <div ref={buttonsRef} className="max-w-6xl md:mt-10 w-full">
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-start gap-3 sm:gap-4">
                <button
                  className="rounded-full px-6 py-2 sm:px-8 sm:py-2.5 text-xs sm:text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90 w-full sm:w-auto"
                  style={{
                    background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                  }}
                >
                  Download for Android
                </button>
                <button
                  className="rounded-full px-6 py-2 sm:px-8 sm:py-2.5 text-xs sm:text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90 w-full sm:w-auto"
                  style={{
                    background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                  }}
                >
                  Download for iOS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
