"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function HeroSection() {
  const heartBackgroundRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);

  // Handle "Enter the Circle" CTA click - Fixed animation
  const handleEnterCircle = () => {
    if (hasEntered) return;

    const portal = portalRef.current;
    const hero = heroRef.current;
    const character = characterRef.current;
    const characterCircle = character?.querySelector(".character-circle");
    const ctaButton = hero?.querySelector("button[data-enter-circle]");

    if (!portal || !hero || !character || !characterCircle) return;

    // Disable button during animation
    const button = ctaButton as HTMLButtonElement;
    if (button) button.disabled = true;

    const tl = gsap.timeline();

    // Step 1: Hide CTA button
    if (ctaButton) {
      tl.to(
        ctaButton,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.4,
          ease: "power2.in",
        },
        "start",
      );
    }

    // Step 2: Create portal ring FROM character circle (center me aayega)
    // Get character circle position and dimensions
    const charRect = characterCircle.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Set portal at character center (character circle ke exact center mein)
    gsap.set(portal, {
      left: "50%",
      top: "50%",
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      scale: 0.3,
      borderWidth: "3px",
    });

    tl.to(
      portal,
      {
        opacity: 1,
        scale: 1.2, // Character circle se thoda bada
        duration: 0.8,
        ease: "power2.out",
      },
      "start+=0.2",
    );

    // Step 3: Character shrinks and disappears INTO the portal
    tl.to(
      characterCircle,
      {
        scale: 0.2,
        opacity: 0,
        duration: 1.2,
        ease: "power3.in",
      },
      "start+=0.4",
    );

    // Step 4: Portal expands and glows
    tl.to(
      portal,
      {
        scale: 3, // Zyada expand hoga
        opacity: 0.8,
        borderWidth: "6px",
        boxShadow: "0 0 100px rgba(255, 255, 255, 0.7)",
        duration: 1.2,
        ease: "power2.inOut",
      },
      "start+=0.8",
    );

    // Step 5: Portal contracts and disappears
    tl.to(
      portal,
      {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power3.in",
      },
      "start+=1.8",
    );

    // Step 6: Fade out hero and enable story flow
    tl.to(
      hero,
      {
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          setHasEntered(true);
          document.body.style.overflow = "auto";
        },
      },
      "start+=2.2",
    );
  };

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

  // Hero Section Entrance Animation
  useEffect(() => {
    if (hasEntered) return;

    const character = characterRef.current;
    const hero = heroRef.current;
    const ctaButton = hero?.querySelector("button[data-enter-circle]");

    if (!character || !hero) return;

    gsap.set(character, { opacity: 0, y: 20 });
    if (ctaButton) {
      gsap.set(ctaButton, { opacity: 0, y: 15 });
    }

    gsap.to(character, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "none",
      delay: 0.2,
    });

    if (ctaButton) {
      gsap.to(ctaButton, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "none",
        delay: 0.5,
      });
    }
  }, [hasEntered]);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{ overflow: "hidden" }}
    >
      {/* Character Hero Overlay - Fixed on top */}
      <div
        ref={heroRef}
        className={`fixed inset-0 z-50 flex items-center justify-center ${
          hasEntered ? "pointer-events-none opacity-0" : ""
        }`}
      >
        {/* Main Background - For entire hero section */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-black" />

        {/* Background Image - ONLY for character section (not entire hero) */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>
        </div>

        {/* Subtle ambient light */}
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-30" />

        {/* Character Container - Centered */}
        <div
          ref={characterRef}
          className="relative z-20 mt-34 flex flex-col items-center justify-center"
        >
          {/* Single Character - Premium Design */}
          <div className="relative">
            {/* Character Circle - Minimal & Elegant */}
            <div className="character-circle w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent border-2 border-white/15 flex items-center justify-center backdrop-blur-[4px] shadow-2xl">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />

              {/* Character Icon */}
              <svg
                className="w-36 h-36 md:w-44 md:h-44 text-white/95 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            {/* Portal Ring - Will appear from center */}
            <div
              ref={portalRef}
              className="absolute rounded-full border-2 border-white/60 pointer-events-none z-30"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "300px",
                height: "300px",
                transform: "translate(-50%, -50%)",
                opacity: 0,
                scale: 0,
                transformOrigin: "center center",
                boxShadow: "0 0 40px rgba(255, 255, 255, 0.3)",
              }}
            />
          </div>

          {/* CTA Button - Clear & Premium */}
          <button
            onClick={handleEnterCircle}
            data-enter-circle
            className="group relative px-12 py-5 md:px-16 md:py-6 my-10 bg-white text-black rounded-full font-medium text-lg md:text-xl tracking-wide hover:bg-white/95 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-100 cursor-pointer z-20"
          >
            <span className="relative z-10">Enter the Circle</span>

            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          {/* Instruction text */}
          <p className="mt-10 text-white/50 text-sm font-light tracking-wide z-20">
            Click to begin your journey
          </p>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      />

      {/* Background Overlay (Heart/Decorative Pattern) */}
      <div
        ref={heartBackgroundRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Background.png')",
        }}
      />

      {/* Black Gradient Overlay at Top (for Navbar area) */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-[5]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* NAVBAR */}
        <header className="flex items-center md:mt-5 justify-between px-6 py-5 md:px-24">
          {/* Logo - White circle with line through it */}
          <Link href={"/"} className="flex items-center ml-20">
            <div
              className="animate-rotate"
              style={{
                animation: "rotate 10s linear infinite",
                display: "inline-block",
                transformOrigin: "center center",
              }}
            >
              <Image src={"/Layer_1.svg"} width={70} height={70} alt="logo" />
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden gap-6 md:text-[14px] font-semibold uppercase tracking-wide text-[#F5F2ED] md:flex lg:gap-8">
            <a className="hover:opacity-80 transition-opacity" href="#">
              ABOUT
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              ABOUT COMMUNITY
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              ABOUT EVENT
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              ABOUT MATCH MAKING
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              CONTACT US
            </a>
          </nav>
        </header>

        {/* HERO CENTER */}
        <div className="flex flex-1 items-center justify-center px-6 text-start">
          <div className="max-w-6xl md:mt-10">
            <h1 className="mb-10 font-clash text-4xl font-medium leading-tight text-[#F5F2ED] md:text-6xl lg:text-8xl">
              The most welcoming way to date
            </h1>

            {/* Buttons */}
            <div className="flex flex-wrap justify-start gap-4">
              <button
                className="rounded-full px-8 py-2.5 text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90"
                style={{
                  background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                }}
              >
                Download for iOS
              </button>

              <button
                className="rounded-full px-8 py-2.5 text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90"
                style={{
                  background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                }}
              >
                Download for Android
              </button>
            </div>
          </div>
        </div>

        {/* FOOTNOTE */}
        <div className="px-6 pb-6 text-center md:text-[16px] md:-mb-4 text-white opacity-70 md:px-12">
          Names are altered, images are illustrative and depict models: Persons
          in videos are influencers, compensated by Hily.
        </div>
      </div>
    </section>
  );
}
