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
    const ctaButton = hero?.querySelector("button[data-enter-circle]");
    const instructionText = hero?.querySelector("p");

    if (!hero || !character || !characterCircle) return;

    // Disable button during animation
    const button = ctaButton as HTMLButtonElement;
    if (button) button.disabled = true;

    const tl = gsap.timeline();

    // Step 1: Hide CTA button and instruction text
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

    if (instructionText) {
      tl.to(
        instructionText,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        },
        "start",
      );
    }

    // Step 2: Morning Flower Bloom Animation - Multi-layered, soft glow, gradual expansion
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
        "start+=0.1",
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
        "start+=0.3",
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
        "start+=0.3",
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
        "start+=0.5",
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
        "start+=0.5",
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
        "start+=0.7",
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
        "start+=0.7",
      );
    }

    // All layers fade out together - balanced completion
    if (portalLayer1 && portalLayer2 && portalLayer3) {
      tl.to(
        [portalLayer1, portalLayer2, portalLayer3],
        {
          opacity: 0,
          duration: 0.8,
          ease: "power2.in",
        },
        "start+=1.8",
      );
    }

    // Step 3: Character circle zooms IN (picture bhari ho) - smooth and gentle
    // Ensure starting scale is small, transform origin is center
    gsap.set(characterCircle, {
      scale: 0.8,
      opacity: 0.9,
      transformOrigin: "center center",
    });

    // Character zooms IN smoothly - picture bhari hoti hai, flower bloom ke saath
    tl.to(
      characterCircle,
      {
        scale: 1.8, // Bari hoti jati hai
        opacity: 1,
        duration: 1.8,
        ease: "power2.out", // Smooth zoom in
        transformOrigin: "center center",
      },
      "start+=0.3", // Start with flower bloom animation
    );

    // Fade out after zoom in completes
    tl.to(
      characterCircle,
      {
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
      },
      "start+=2.0",
    );

    // Step 4: Hero overlay fades out after animations complete
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
      "start+=1.8", // After character zoom out completes
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
            <div className="character-circle w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent border-2 border-white/15 flex items-center justify-center backdrop-blur-[4px] shadow-2xl overflow-hidden">
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
            onClick={handleEnterCircle}
            data-enter-circle
            className="group relative px-8 py-3 sm:px-10 sm:py-4 md:px-16 md:py-4 font-clash my-6 sm:my-8 md:my-10 bg-white text-black rounded-full font-medium text-base sm:text-lg md:text-xl tracking-wide hover:bg-white/95 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-100 cursor-pointer z-20"
          >
            <span className="relative z-10">Enter the Circle</span>

            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          {/* Instruction text */}
          <p className="mt-6 sm:mt-8 md:mt-10 text-white/50 font-clash text-xs sm:text-sm tracking-wide z-20 px-4 text-center">
            Click to begin your journey
          </p>
        </div>
      </div>

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
        <header className="flex items-center md:mt-5 justify-between px-4 sm:px-6 py-4 md:py-5 md:px-24">
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
        <div className="flex flex-1 items-center justify-center px-4 sm:px-6 text-start">
          <div className="max-w-6xl md:mt-10 w-full">
            <h1
              ref={heroTitleRef}
              className="mb-6 sm:mb-8 md:mb-10 font-clash text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-medium leading-tight text-[#F5F2ED]"
            >
              The most welcoming way to date
            </h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-start gap-3 sm:gap-4">
              <button
                className="rounded-full px-6 py-2 sm:px-8 sm:py-2.5 text-xs sm:text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90 w-full sm:w-auto"
                style={{
                  background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                }}
              >
                Download for iOS
              </button>

              <button
                className="rounded-full px-6 py-2 sm:px-8 sm:py-2.5 text-xs sm:text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90 w-full sm:w-auto"
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
        <div
          ref={footnoteRef}
          className="px-4 sm:px-6 pb-4 sm:pb-6 text-center text-xs sm:text-sm md:text-[16px] md:-mb-4 text-white opacity-70 md:px-12"
        >
          Names are altered, images are illustrative and depict models: Persons
          in videos are influencers, compensated by Hily.
        </div>
      </div>
    </section>
  );
}
