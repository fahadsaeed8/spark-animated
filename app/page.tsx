"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const [hasEntered, setHasEntered] = useState(false);
  const [currentScene, setCurrentScene] = useState(0); // 0: Community, 1: Events, 2: Matchmaking, 3: Final
  const heroRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const circleContainerRef = useRef<HTMLDivElement>(null);

  // Handle "Enter the Circle" CTA click - Portal Transition with Round Circle Animation
  const handleEnterCircle = () => {
    if (hasEntered) return;
    
    const portal = portalRef.current;
    const hero = heroRef.current;
    const character = characterRef.current;
    const ctaButton = hero?.querySelector("button");

    if (!portal || !hero || !character) return;

    // Portal Transition - Round Circle Animation
    const tl = gsap.timeline();

    // Step 1: Show portal ring - round circle appears
    tl.to(portal, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    // Step 2: Hide CTA button
    if (ctaButton) {
      tl.to(
        ctaButton,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          ease: "power2.in",
        },
        "-=0.2"
      );
    }

    // Step 3: Character moves forward into circle
    tl.to(
      character,
      {
        opacity: 0,
        scale: 0.3,
        y: -100,
        duration: 1,
        ease: "power2.in",
      },
      "-=0.3"
    );

    // Step 4: Portal ring expands as character enters
    tl.to(
      portal,
      {
        scale: 1.2,
        opacity: 0.7,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "-=0.5"
    );

    // Step 5: Fade out hero and enable story flow
    tl.to(
      hero,
      {
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          setHasEntered(true);
          // NO scrolling - circular rotation instead
          document.body.style.overflow = "hidden";
          // Initialize circular rotation
          initializeCircularRotation();
        },
      },
      "-=0.2"
    );
  };

  // Circular Rotation System - Slow & Smooth Like Earth
  const initializeCircularRotation = () => {
    if (!circleContainerRef.current) return;

    const totalScenes = 4; // Community, Events, Matchmaking, Final
    const rotationPerScene = 360 / totalScenes; // 90 degrees per scene

    // Initial rotation based on current scene
    gsap.set(circleContainerRef.current, {
      rotationY: -currentScene * rotationPerScene,
      transformStyle: "preserve-3d",
    });

    // Wheel event for rotation - Slow & Smooth
    let scrollDelta = 0;
    let isRotating = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isRotating) return;
      isRotating = true;

      scrollDelta += e.deltaY;
      const threshold = 80; // Higher threshold for slower response

      if (Math.abs(scrollDelta) >= threshold) {
        if (scrollDelta > 0) {
          // Scroll down - next scene
          setCurrentScene((prev) => Math.min(prev + 1, totalScenes - 1));
        } else {
          // Scroll up - previous scene
          setCurrentScene((prev) => Math.max(prev - 1, 0));
        }
        scrollDelta = 0;
      }

      setTimeout(() => {
        isRotating = false;
      }, 500); // Longer delay for smoother feel
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  };

  // Update rotation when scene changes - Slow & Smooth Animation
  useEffect(() => {
    if (!hasEntered || !circleContainerRef.current) return;

    const totalScenes = 4;
    const rotationPerScene = 360 / totalScenes;
    const rotation = -currentScene * rotationPerScene;

    // Slow, smooth rotation animation
    gsap.to(circleContainerRef.current, {
      rotationY: rotation,
      duration: 1.5, // Slower duration
      ease: "power3.inOut", // Smooth easing
    });
  }, [currentScene, hasEntered]);

  // Prevent scrolling before entering - No scroll until portal animation completes
  useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "relative";
    }
  }, [hasEntered]);

  // Hero Section Entrance Animation - Minimal CSS Transforms
  useEffect(() => {
    if (hasEntered) return;

    const character = characterRef.current;
    const hero = heroRef.current;
    const ctaButton = hero?.querySelector("button");

    if (!character || !hero) return;

    // Set initial state - CSS transforms only
    gsap.set(character, { opacity: 0, y: 20 });
    if (ctaButton) {
      gsap.set(ctaButton, { opacity: 0, y: 15 });
    }

    // Simple fade + translate - minimal animation
    gsap.to(character, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "none", // Linear
      delay: 0.2,
    });

    // CTA button - simple fade + translate
    if (ctaButton) {
      gsap.to(ctaButton, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "none", // Linear
        delay: 0.5,
      });
    }
  }, [hasEntered]);

  return (
    <div ref={containerRef} className="bg-black text-white relative min-h-screen w-full">
      {/* Hero Section (Scene 1) */}
      <div
        ref={heroRef}
        className={`fixed inset-0 z-50 flex items-center justify-center ${
          hasEntered ? "pointer-events-none opacity-0" : ""
        }`}
      >
        {/* Minimal Background - Premium & Calm */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-black" />
        
        {/* Subtle ambient light */}
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-50" />

        {/* Character - Centered, Prominent */}
        <div
          ref={characterRef}
          className="relative z-10 flex flex-col items-center justify-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
            </div>
          </div>

          {/* Single Character - Premium Design */}
          <div className="relative mb-16 z-10">
            {/* Character Circle - Minimal & Elegant */}
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 flex items-center justify-center backdrop-blur-[2px] shadow-2xl animate-float">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent" />
              
              {/* Character Icon */}
              <svg
                className="w-32 h-32 md:w-40 md:h-40 text-white/90 relative z-10"
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

            {/* Portal Ring - Round Circle Animation */}
            <div
              ref={portalRef}
              className="absolute rounded-full border-2 border-white/50 pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                width: "120%",
                height: "120%",
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
            className="group relative px-10 py-4 md:px-14 md:py-5 bg-white text-black rounded-full font-medium text-base md:text-lg tracking-wide hover:bg-white/95 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100"
          >
            <span className="relative z-10">Enter the Circle</span>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>

      {/* Story Flow Section - Circular Rotation System */}
      <div
        ref={storyRef}
        className={`fixed inset-0 z-10 ${hasEntered ? "block" : "hidden"}`}
        style={{ 
          display: hasEntered ? "block" : "none",
          overflow: "hidden",
          perspective: "2000px",
        }}
      >
        {/* Circular Container - Rotates like Earth */}
        <div
          ref={circleContainerRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Scene 2: Community - Position 0° */}
          <section 
            className="story-section absolute w-full h-full flex items-center justify-center"
            style={{
              transform: "rotateY(0deg) translateZ(600px)",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="container mx-auto px-6 py-20 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Character on left with Background Image */}
                <div className="relative flex justify-center lg:justify-end">
                  {/* Background Image */}
                  <div className="absolute inset-0 -z-10 opacity-20">
                    <div 
                      className="w-full h-full bg-cover bg-center rounded-2xl"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent rounded-2xl" />
                  </div>
                  
                  <div className="story-character relative z-10">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white/15 via-white/8 to-transparent border-2 border-white/20 flex items-center justify-center backdrop-blur-md shadow-2xl">
                      <svg
                        className="w-36 h-36 md:w-44 md:h-44 text-white/95"
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
                  </div>
                </div>

                {/* Content Block on right - Professional Design */}
                <div className="content-block space-y-8">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md border border-white/20">
                    <div className="w-2 h-2 bg-white/60 rounded-full" />
                    Community
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                    Connect with<br />Like-Minded People
                  </h2>
                  
                  <p className="text-xl text-white/70 leading-relaxed max-w-xl font-light">
                    Join a vibrant community where meaningful connections are made. Share experiences, 
                    build friendships, and grow together.
                  </p>
                  
                  {/* Professional UI Cards */}
                  <div className="grid grid-cols-3 gap-4 mt-10">
                    <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white/80">Groups</p>
                    </div>
                    <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white/80">Chat</p>
                    </div>
                    <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white/80">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Scene 3: Events - Position 90° */}
          <section 
            className="story-section absolute w-full h-full flex items-center justify-center"
            style={{
              transform: "rotateY(90deg) translateZ(600px)",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="container mx-auto px-6 py-20 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Character on left with Background Image */}
                <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
                  <div className="absolute inset-0 -z-10 opacity-20">
                    <div 
                      className="w-full h-full bg-cover bg-center rounded-2xl"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent rounded-2xl" />
                  </div>
                  
                  <div className="story-character relative z-10">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white/15 via-white/8 to-transparent border-2 border-white/20 flex items-center justify-center backdrop-blur-md shadow-2xl">
                      <svg
                        className="w-36 h-36 md:w-44 md:h-44 text-white/95"
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
                  </div>
                </div>

                {/* Content Block on right */}
                <div className="content-block space-y-8 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md border border-white/20">
                    <div className="w-2 h-2 bg-white/60 rounded-full" />
                    Events
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                    Join Exciting<br />Gatherings
                  </h2>
                  
                  <p className="text-xl text-white/70 leading-relaxed max-w-xl font-light">
                    Discover and attend curated events that bring people together. From casual meetups 
                    to special occasions, there's always something happening.
                  </p>
                  
                  {/* Professional UI Cards */}
                  <div className="grid grid-cols-3 gap-4 mt-10">
                    <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white/80">Calendar</p>
                    </div>
                    <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white/80">Locations</p>
                    </div>
                    <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white/80">RSVP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Scene 4: Matchmaking - Position 180° */}
          <section 
            className="story-section absolute w-full h-full flex items-center justify-center"
            style={{
              transform: "rotateY(180deg) translateZ(600px)",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="container mx-auto px-6 py-20 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Character on left with Background Image */}
                <div className="relative flex justify-center lg:justify-end">
                  <div className="absolute inset-0 -z-10 opacity-20">
                    <div 
                      className="w-full h-full bg-cover bg-center rounded-2xl"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent rounded-2xl" />
                  </div>
                  
                  <div className="story-character relative z-10">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white/15 via-white/8 to-transparent border-2 border-white/20 flex items-center justify-center backdrop-blur-md shadow-2xl">
                      <svg
                        className="w-36 h-36 md:w-44 md:h-44 text-white/95"
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
                  </div>
                </div>

                {/* Content Block on right */}
                <div className="content-block space-y-8">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md border border-white/20">
                    <div className="w-2 h-2 bg-white/60 rounded-full" />
                    Matchmaking
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                    Find Your<br />Perfect Match
                  </h2>
                  
                  <p className="text-xl text-white/70 leading-relaxed max-w-xl font-light">
                    Our intelligent matching system connects you with people who share your interests, 
                    values, and goals. Start meaningful conversations today.
                  </p>
                  
                  {/* Professional UI Cards */}
                  <div className="grid grid-cols-3 gap-4 mt-10">
                    <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white/80">Smart AI</p>
                    </div>
                    <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white/80">Compatibility</p>
                    </div>
                    <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white/80">Messages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Scene 5: Final - Position 270° */}
          <section 
            className="story-section absolute w-full h-full flex items-center justify-center"
            style={{
              transform: "rotateY(270deg) translateZ(600px)",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="container mx-auto px-6 py-20 max-w-6xl">
              {/* Badge - Top Right */}
              <div className="flex justify-end mb-12">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md border border-white/20">
                  <div className="w-2 h-2 bg-white/60 rounded-full" />
                  Real Connections
                </div>
              </div>

              {/* Video Call Interface Style */}
              <div className="relative mb-16">
                {/* Main Video Area - Large Rectangle */}
                <div className="relative w-full aspect-video bg-neutral-900 rounded-xl border border-white/10 overflow-hidden shadow-2xl mb-12">
                  {/* Video Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />
                  
                  {/* Dummy Image - Connection Scene */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    {/* Background Image - Dummy/Placeholder */}
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      {/* Dummy Image - Using gradient as placeholder, can replace with actual image */}
                      <div 
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80')`,
                          backgroundPosition: 'center',
                        }}
                      >
                        {/* Overlay for better contrast */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                      </div>
                      
                      {/* Alternative: If you want to use a local image, uncomment below */}
                      {/* <img 
                        src="/images/connection-scene.jpg" 
                        alt="Real Connections" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" /> */}
                      
                      {/* Center Content - Two People Connecting */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="flex items-center gap-8 md:gap-16">
                          {/* Person 1 - Same Character */}
                          <div className="relative">
                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-black/80 border-2 border-white/40 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                              <svg
                                className="w-16 h-16 md:w-20 md:h-20 text-white/90"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Connection Heart/Icon */}
                          <div className="relative">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                              <svg className="w-6 h-6 md:w-8 md:h-8 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Person 2 - Girl */}
                          <div className="relative">
                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-radial from-purple-600/90 via-purple-800/80 to-black/90 border-2 border-white/40 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                              <svg
                                className="w-16 h-16 md:w-20 md:h-20 text-white/90"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Block */}
              <div className="content-block text-center space-y-10">
                <h2 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight">
                  Real Connections
                </h2>
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto font-light">
                  Experience the joy of genuine connections. Join Circle Society and start your journey 
                  toward meaningful relationships today.
                </p>

                {/* Professional Final CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-12">
                  <button className="px-14 py-5 md:px-20 md:py-6 bg-white text-black rounded-full font-semibold text-lg md:text-xl tracking-wide hover:bg-white/95 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-[1.02] active:scale-100 min-w-[180px]">
                    Join
                  </button>
                  
                  <button className="px-14 py-5 md:px-20 md:py-6 bg-transparent text-white border-2 border-white/40 rounded-full font-semibold text-lg md:text-xl tracking-wide hover:bg-white/10 hover:border-white/60 transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm min-w-[180px]">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
