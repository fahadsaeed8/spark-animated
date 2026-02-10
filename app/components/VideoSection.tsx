"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VideoSection() {
  const heartBackgroundRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const footnoteRef = useRef<HTMLDivElement>(null);

  const headingText = "Your social life, all in one place";
  const words = headingText.split(" ");

  useEffect(() => {
    if (!heartBackgroundRef.current) return;

    // Continuous automatic animation - pulse/breathing effect
    // Using opacity only to avoid overflow/scroll issues
    const tl = gsap.timeline({ repeat: -1, ease: "power1.inOut" });

    tl.to(heartBackgroundRef.current, {
      opacity: 0.6,
      duration: 3,
    }).to(heartBackgroundRef.current, {
      opacity: 1,
      duration: 3,
    });

    return () => {
      tl.kill();
    };
  }, []);

  // Animate hero title word by word on mount
  useEffect(() => {
    if (!heroTitleRef.current) return;

    // Get all word spans
    const wordSpans = heroTitleRef.current.querySelectorAll(".word");

    // Set initial state - words start small and invisible
    gsap.set(wordSpans, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center",
    });

    // Animate words one by one with stagger effect
    gsap.to(wordSpans, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15, // Delay between each word
      delay: 0.3,
    });
  }, []);

  // Animate footnote zoom in on mount
  useEffect(() => {
    if (!footnoteRef.current) return;

    // Set initial state - text starts small and invisible
    gsap.set(footnoteRef.current, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center",
    });

    // Animate footnote zoom in with slow speed
    gsap.to(footnoteRef.current, {
      opacity: 0.7,
      scale: 1,
      duration: 2.0,
      ease: "power2.out",
      delay: 0.3,
    });
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{ overflow: "hidden" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Background Overlay (Heart/Decorative Pattern) */}
      {/* <div
        ref={heartBackgroundRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Background.png')",
        }}
      /> */}

      {/* Black Gradient Overlay at Top (for Navbar area) */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-[5]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* HERO CENTER */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-6 text-center">
          <div className="max-w-6xl md:mt-10 w-full">
            <h1
              ref={heroTitleRef}
              className="mb-6 sm:mb-8 md:mb-0 font-clash text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-[#F5F2ED]"
            >
              {words.map((word, index) => (
                <span key={index} className="word inline-block">
                  {word}
                  {index < words.length - 1 && "\u00A0"}
                </span>
              ))}
            </h1>
            <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-center text-lg md:text-[16px] md:-mb-4 text-white opacity-70 md:px-12">
              Discover events, communities, and people around you — all through
              shared activities.
            </p>

            {/* Buttons */}
            <div className="flex flex-row mt-5 md:mt-10 flex-wrap justify-center gap-3 sm:gap-4">
              <button
                className="rounded-full px-6 py-2 sm:px-8 sm:py-2.5 text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90"
                style={{
                  background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                }}
              >
                Download for iOS
              </button>

              <button
                className="rounded-full px-6 py-2 sm:px-8 sm:py-2.5 text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90"
                style={{
                  background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                }}
              >
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
