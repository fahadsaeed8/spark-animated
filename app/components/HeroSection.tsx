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
  const portalLayer1Ref = useRef<HTMLDivElement>(null);
  const portalLayer2Ref = useRef<HTMLDivElement>(null);
  const portalLayer3Ref = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const footnoteRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLButtonElement>(null);
  const instructionTextRef = useRef<HTMLParagraphElement>(null);
  const phoneLeftRef = useRef<HTMLDivElement>(null);
  const phoneMiddleRef = useRef<HTMLDivElement>(null);
  const phoneRightRef = useRef<HTMLDivElement>(null);

  // Handle "Enter the Circle" CTA click - Character zooms in and next page appears
  const handleEnterCircle = () => {
    if (hasEntered) return;

    const hero = heroRef.current;
    const character = characterRef.current;
    const characterCircle = character?.querySelector(".character-circle");
    const portal = portalRef.current;
    const portalLayer1 = portalLayer1Ref.current;
    const portalLayer2 = portalLayer2Ref.current;
    const portalLayer3 = portalLayer3Ref.current;
    const ctaButton = ctaButtonRef.current;
    const instructionText = instructionTextRef.current;

    if (!hero || !character || !characterCircle || !ctaButton) return;

    // Disable button during animation
    ctaButton.disabled = true;

    // Get button's position and center point
    const buttonRect = ctaButton.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    // Get viewport center for calculations
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;

    // Calculate offset to move everything towards button center
    const offsetX = buttonCenterX - viewportCenterX;
    const offsetY = buttonCenterY - viewportCenterY;

    const tl = gsap.timeline();

    // Step 1: Button press effect - button scales down like being pressed
    tl.to(
      ctaButton,
      {
        scale: 0.95,
        duration: 0.15,
        ease: "power2.in",
      },
      "start",
    );

    // Step 2: Everything moves towards button center and zooms in
    // Character moves towards button and scales up (going into button)
    tl.to(
      characterCircle,
      {
        x: offsetX * 0.3, // Move towards button
        y: offsetY * 0.3,
        scale: 1.5, // Zoom in as if going into button
        duration: 0.8,
        ease: "power2.in",
      },
      "start+=0.1",
    );

    // Character circle continues zooming in more dramatically
    tl.to(
      characterCircle,
      {
        scale: 2.5, // Even bigger zoom - going deep into button
        opacity: 0.7,
        duration: 0.6,
        ease: "power2.in",
      },
      "start+=0.5",
    );

    // Instruction text also moves towards button
    if (instructionText) {
      tl.to(
        instructionText,
        {
          x: offsetX * 0.2,
          y: offsetY * 0.2,
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "start+=0.1",
      );
    }

    // Step 3: Button expands/glows as content goes into it
    tl.to(
      ctaButton,
      {
        scale: 1.1,
        boxShadow:
          "0 0 60px rgba(255, 255, 255, 0.8), 0 0 120px rgba(255, 255, 255, 0.5)",
        duration: 0.4,
        ease: "power2.out",
      },
      "start+=0.3",
    );

    // Step 4: Hide button and instruction text after animation
    if (ctaButton) {
      tl.to(
        ctaButton,
        {
          opacity: 0,
          scale: 0,
          duration: 0.3,
          ease: "power2.in",
        },
        "start+=0.9",
      );
    }

    if (instructionText) {
      tl.set(
        instructionText,
        {
          display: "none",
        },
        "start+=0.6",
      );
    }

    // Step 5: Morning Flower Bloom Animation - Multi-layered, soft glow, gradual expansion
    // Layer 1: Innermost - Soft, calm, focused glow (starts first)
    if (portalLayer1) {
      gsap.set(portalLayer1, {
        width: "60px",
        height: "60px",
        opacity: 0.3,
        transformOrigin: "center center",
      });

      // Soft glow starts - calm and focused
      tl.to(
        portalLayer1,
        {
          opacity: 0.8,
          duration: 0.6,
          ease: "power1.out",
        },
        "start+=0.7",
      );

      // First layer expands gently
      tl.to(
        portalLayer1,
        {
          width: "200px",
          height: "200px",
          duration: 1.2,
          ease: "power2.out",
        },
        "start+=0.9",
      );

      // Glow intensifies as it expands
      tl.to(
        portalLayer1,
        {
          boxShadow:
            "0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2)",
          duration: 1.2,
          ease: "power2.out",
        },
        "start+=0.9",
      );
    }

    // Layer 2: Middle layer - Opens after first layer
    if (portalLayer2) {
      gsap.set(portalLayer2, {
        width: "80px",
        height: "80px",
        opacity: 0,
        transformOrigin: "center center",
      });

      // Second layer starts expanding
      tl.to(
        portalLayer2,
        {
          opacity: 0.6,
          width: "400px",
          height: "400px",
          duration: 1.4,
          ease: "power2.out",
        },
        "start+=1.1",
      );

      // Glow builds up
      tl.to(
        portalLayer2,
        {
          boxShadow:
            "0 0 50px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.3), 0 0 150px rgba(255, 255, 255, 0.15)",
          duration: 1.4,
          ease: "power2.out",
        },
        "start+=1.1",
      );
    }

    // Layer 3: Outer layer - Full balanced form
    if (portalLayer3) {
      gsap.set(portalLayer3, {
        width: "100px",
        height: "100px",
        opacity: 0,
        transformOrigin: "center center",
      });

      // Third layer opens - full balanced form
      tl.to(
        portalLayer3,
        {
          opacity: 0.5,
          width: "700px",
          height: "700px",
          duration: 1.6,
          ease: "power2.out",
        },
        "start+=1.3",
      );

      // Full glow effect - balanced and complete
      tl.to(
        portalLayer3,
        {
          boxShadow:
            "0 0 80px rgba(255, 255, 255, 0.6), 0 0 150px rgba(255, 255, 255, 0.4), 0 0 220px rgba(255, 255, 255, 0.25), 0 0 300px rgba(255, 255, 255, 0.1)",
          duration: 1.6,
          ease: "power2.out",
        },
        "start+=1.3",
      );
    }

    // Character continues zooming into button - final push
    tl.to(
      characterCircle,
      {
        scale: 3.5, // Maximum zoom - fully going into button
        opacity: 0,
        x: offsetX * 0.5,
        y: offsetY * 0.5,
        duration: 0.8,
        ease: "power2.in",
      },
      "start+=0.9",
    );

    // All layers fade out together - balanced completion
    if (portalLayer1 && portalLayer2 && portalLayer3) {
      tl.to(
        [portalLayer1, portalLayer2, portalLayer3],
        {
          opacity: 0,
          duration: 0.8,
          ease: "power2.in",
        },
        "start+=2.2",
      );
    }

    // Step 6: Hero overlay fades out after animations complete
    tl.to(
      hero,
      {
        opacity: 0,
        pointerEvents: "none",
        duration: 1.2,
        ease: "power2.in",
        onComplete: () => {
          setHasEntered(true);
          document.body.style.overflow = "auto";
        },
      },
      "start+=2.0", // After character zoom out completes
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

  // Scroll to top on page refresh to show "Enter the Circle" section
  useEffect(() => {
    // Scroll to top when component mounts (page refresh)
    window.scrollTo({ top: 0, behavior: "instant" });
    document.body.style.overflow = hasEntered ? "auto" : "hidden";
  }, []);

  // Hero Section Entrance Animation
  useEffect(() => {
    if (hasEntered) return;

    const character = characterRef.current;
    const hero = heroRef.current;
    const ctaButton = ctaButtonRef.current;
    const instructionText = instructionTextRef.current;

    if (!character || !hero) return;

    gsap.set(character, { opacity: 0, y: 20 });
    if (ctaButton) {
      gsap.set(ctaButton, {
        opacity: 0,
        y: 15,
        x: 0,
        scale: 1,
        transformOrigin: "center center",
        force3D: true,
      });
    }
    if (instructionText) {
      gsap.set(instructionText, {
        opacity: 0,
        y: 15,
        x: 0,
        scale: 1,
        transformOrigin: "center center",
        force3D: true,
      });
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

    if (instructionText) {
      gsap.to(instructionText, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "none",
        delay: 0.7,
      });
    }
  }, [hasEntered]);

  // Animate hero title zoom in when overlay disappears
  useEffect(() => {
    if (!hasEntered || !heroTitleRef.current) return;

    // Set initial state - text starts small and invisible
    gsap.set(heroTitleRef.current, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center",
    });

    // Animate title zoom in with slow speed
    gsap.to(heroTitleRef.current, {
      opacity: 1,
      scale: 1,
      duration: 2.0,
      ease: "power2.out",
      delay: 0.3,
    });
  }, [hasEntered]);

  // Animate footnote zoom in when overlay disappears
  useEffect(() => {
    if (!hasEntered || !footnoteRef.current) return;

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
  }, [hasEntered]);

  // Animate iPhone images entrance when overlay disappears
  useEffect(() => {
    if (!hasEntered) return;

    const phones = [
      phoneLeftRef.current,
      phoneMiddleRef.current,
      phoneRightRef.current,
    ].filter(Boolean);

    if (phones.length === 0) return;

    // Set initial state - phones start invisible, scaled down, and slightly offset
    phones.forEach((phone, index) => {
      if (phone) {
        gsap.set(phone, {
          opacity: 0,
          scale: 0.6,
          y: 50,
          transformOrigin: "center center",
        });
      }
    });

    // Staggered entrance animation - phones appear one by one
    const tl = gsap.timeline();

    phones.forEach((phone, index) => {
      if (phone) {
        tl.to(
          phone,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          index * 0.15, // Stagger delay of 0.15s between each phone
        );
      }
    });
  }, [hasEntered]);

  return (
    <section
      className="relative min-h-screen h-screen w-full overflow-hidden"
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
          </div>
        </div>

        {/* Subtle ambient light */}
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-30" />

        {/* Character Container - Centered */}
        <div
          ref={characterRef}
          className="relative z-20  flex flex-col items-center justify-center"
        >
          {/* Single Character - Premium Design */}
          <div className="relative">
            {/* Character Circle - Minimal & Elegant */}
            <div className="character-circle w-52 h-52 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent border-2 border-white/15 flex items-center justify-center backdrop-blur-[4px] shadow-2xl overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent z-10" />

              {/* Character Image */}
              <div className="relative z-0 w-full h-full">
                <Image
                  src="/hero.png"
                  alt="Character"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>

            {/* Morning Flower Bloom - Multi-layered Portal Rings */}
            {/* Layer 1: Innermost - Soft, calm, focused glow */}
            <div
              ref={portalLayer1Ref}
              className="absolute rounded-full border border-white/40 pointer-events-none z-30"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                transformOrigin: "center center",
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 80%)",
              }}
            />

            {/* Layer 2: Middle layer - Gradual expansion */}
            <div
              ref={portalLayer2Ref}
              className="absolute rounded-full border border-white/50 pointer-events-none z-30"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                transformOrigin: "center center",
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 50%, transparent 85%)",
              }}
            />

            {/* Layer 3: Outer layer - Full balanced form */}
            <div
              ref={portalLayer3Ref}
              className="absolute rounded-full border border-white/60 pointer-events-none z-30"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                transformOrigin: "center center",
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 50%, transparent 90%)",
              }}
            />
          </div>

          {/* CTA Button - Clear & Premium */}
          <button
            ref={ctaButtonRef}
            onClick={handleEnterCircle}
            data-enter-circle
            className="group relative px-6 py-2 lg:px-16 lg:py-4 font-clash my-8 lg:my-10 bg-white text-black rounded-full font-medium text-sm sm:text-base md:text-lg lg:text-xl tracking-wide hover:bg-white/95 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-100 cursor-pointer z-20"
          >
            <span className="relative z-10">Enter the Circle</span>

            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          {/* Instruction text */}
          <p
            ref={instructionTextRef}
            className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-white/50 font-clash text-sm tracking-wide z-20 px-4 text-center"
          >
            Click to begin your journey
          </p>
        </div>
      </div>

      {/* Light Background */}
      <div className="absolute inset-0 bg-[#F5F2ED]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* NAVBAR */}
        <header className="flex items-center bg-white justify-between px-4 sm:px-6 py-4 md:py-5 md:px-24">
          {/* Logo - White circle with line through it */}
          <Link href={"/"} className="flex items-center ml-0 md:ml-20">
            <div
              className="animate-rotate"
              style={{
                animation: "rotate 10s linear infinite",
                display: "inline-block",
                transformOrigin: "center center",
              }}
            >
              <Image
                src={"/Layer_1.svg"}
                width={50}
                height={50}
                alt="logo"
                className="md:w-[70px] md:h-[70px]"
              />
            </div>
          </Link>

          {/* Hamburger Menu - Mobile Only */}
          <button className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center">
            <span className="w-full h-0.5 bg-black"></span>
            <span className="w-full h-0.5 bg-black"></span>
            <span className="w-full h-0.5 bg-black"></span>
          </button>

          {/* Nav Links - Desktop Only */}
          <nav className="hidden gap-6 md:text-[16px] font-semibold uppercase tracking-wide text-black md:flex lg:gap-8">
            <a className="hover:opacity-80 transition-opacity" href="#">
              ABOUT
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              Stories{" "}
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              STORE{" "}
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              Contact Us{" "}
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              Download{" "}
            </a>
          </nav>
        </header>

        {/* HERO CENTER */}
        <div className="flex flex-1 items-center  justify-start md:justify-center px-4 sm:px-6 md:px-8 lg:px-24 py-0 md:py-0">
          <div className="max-w-8xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Section - Text and CTA */}
            <div
              ref={heroTitleRef}
              className="text-center md:text-left md:-mt-20 lg:-mt-20 order-1 lg:order-1"
            >
              <h1 className="mb-4 sm:mb-6 font-clash text-4xl lg:text-6xl xl:text-[58px] font-bold leading-tight">
                <span className="block text-[#2d2d2d] md:text-[#1a1a1a]">
                  YOUR SOCIAL LIFE
                </span>
                <span className="block text-[#D99F4F] md:text-[#BF822E]">
                  ALL IN ONE APP
                </span>
              </h1>
              <div className="flex md:block justify-center md:justify-start items-center md:items-start">
                <p className="mb-6 sm:mb-8 text-base lg:text-lg text-[#5A5A5A] max-w-xs md:max-w-md">
                  Discover events, communities, and people around you, through
                  shared experiences.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-row gap-3 sm:gap-4">
                <button
                  className="rounded-full px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 text-sm md:text-base font-semibold text-white transition hover:opacity-90 flex-1 sm:flex-initial"
                  style={{
                    background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                  }}
                >
                  Download for iOS
                </button>

                <button
                  className="rounded-full px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 text-sm md:text-base font-semibold text-white transition hover:opacity-90 flex-1 sm:flex-initial"
                  style={{
                    background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                  }}
                >
                  Download for Android
                </button>
              </div>
            </div>

            {/* Right Section - Three Phones - Desktop Only */}
            <div className="relative flex items-center justify-center mt-10 h-[500px] md:h-[600px] order-2 lg:order-2">
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Circular Lines - Thin abstract circles */}
                <Image
                  src="/Group 35887.svg"
                  alt="Decorative Circles"
                  width={210}
                  height={210}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[900px] h-[900px] opacity-30"
                />
                <Image
                  src="/Ellipse 2.svg"
                  alt="Decorative Ellipse"
                  width={210}
                  height={210}
                  className="absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-100"
                />
                <Image
                  src="/Ellipse 2.svg"
                  alt="Decorative Ellipse"
                  width={210}
                  height={210}
                  className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-100"
                />
              </div>

              <div className="absolute left-10 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
                {/* Left Phone */}
                <div
                  ref={phoneLeftRef}
                  className="relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:mt-10"
                >
                  <div className="relative p-1.5 md:p-2">
                    <div className="aspect-[9/19] w-[480px] md:w-[570px] h-[480px] md:h-[570px] overflow-hidden">
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
                {/* Middle Phone */}
                <div
                  ref={phoneMiddleRef}
                  className="relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12"
                >
                  <div className="relative p-1.5 md:p-2">
                    <div className="aspect-[9/19] w-[480px] md:w-[570px] h-[480px] md:h-[570px] overflow-hidden">
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
                {/* Right Phone */}
                <div
                  ref={phoneRightRef}
                  className="relative z-10 w-24 md:w-40 lg:w-48 xl:w-56 transform -rotate-[5deg] md:-rotate-[6deg] -ml-4 md:-ml-18 -mt-8 md:-mt-12"
                >
                  <div className="relative p-1.5 md:p-2">
                    <div className="aspect-[9/19] w-[480px] md:w-[570px] h-[480px] md:h-[570px] overflow-hidden">
                      <Image
                        width={900}
                        height={900}
                        src="/iPhone-13-Pro-Front (2).svg"
                        alt="App Screen 3"
                        className="w-full h-full md:mt-10 md:-ml-15"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
