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

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 sm:py-16 bg-[#73542A] sm:px-6 md:py-24 md:px-12 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-0 items-center">
          {/* Mobile: Content First, Desktop: Images First (Left) */}
          <div
            ref={imageRef}
            className="mb-6 flex w-full items-center justify-center order-2 md:order-1"
          >
            <div className="w-full max-w-[900px] space-y-4">
              {/* Top Image */}
              <div className="overflow-hidden rounded-2xl [&>span]:block [&>span]:w-full [&>span]:h-full [&>span>img]:block">
                <Image
                  src="/Rectangle 40914.png"
                  alt="Top Group"
                  width={900}
                  height={500}
                  className="w-full h-auto object-cover"
                  style={{ border: "none", outline: "none", display: "block" }}
                  unoptimized
                />
              </div>

              {/* Bottom Two Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl [&>span]:block [&>span]:w-full [&>span]:h-full [&>span>img]:block">
                  <Image
                    src="/Rectangle 40915.png"
                    alt="Bottom Left"
                    width={350}
                    height={200}
                    className="w-[200px] md:w-[350px] h-[140px] md:h-[220px] object-cover"
                    style={{
                      border: "none",
                      outline: "none",
                      display: "block",
                    }}
                  />
                </div>

                <div className="overflow-hidden rounded-2xl [&>span]:block [&>span]:w-full [&>span]:h-full [&>span>img]:block">
                  <Image
                    src="/Rectangle 40916.png"
                    alt="Bottom Right"
                    width={450}
                    height={300}
                    className="w-full h-auto object-cover"
                    style={{
                      border: "none",
                      outline: "none",
                      display: "block",
                    }}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Content Second, Desktop: Content Second (Right) */}
          <div className="text-center md:ml-10 md:text-left order-1 md:order-2">
            <h2
              ref={headingRef}
              className="font-clash text-white text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
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
              <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                <button
                  className="rounded-full px-6 py-2 sm:px-8 sm:py-2.5 text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90"
                  style={{
                    background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                  }}
                >
                  Download for Android
                </button>
                <button
                  className="rounded-full px-6 py-2 sm:px-8 sm:py-2.5 text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90"
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
