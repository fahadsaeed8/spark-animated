"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const [hasEntered, setHasEntered] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const currentSceneRef = useRef(0);
  const isRotatingRef = useRef(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const circleContainerRef = useRef<HTMLDivElement>(null);

  // Drag/Swipe variables
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const dragThreshold = 50;

  // Handle "Enter the Circle" CTA click - Fixed animation
  const handleEnterCircle = () => {
    if (hasEntered) return;

    const portal = portalRef.current;
    const hero = heroRef.current;
    const character = characterRef.current;
    const characterCircle = character?.querySelector(".character-circle");
    const ctaButton = hero?.querySelector("button");

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
          document.body.style.overflow = "hidden";
          initializeInteractions();
        },
      },
      "start+=2.2",
    );
  };

  // Initialize both wheel and drag interactions - SCROLL BASED
  const initializeInteractions = () => {
    if (!circleContainerRef.current) return;

    const totalScenes = 4;
    const rotationPerScene = 360 / totalScenes;

    gsap.set(circleContainerRef.current, {
      rotationY: -currentSceneRef.current * rotationPerScene,
      transformStyle: "preserve-3d",
    });

    // WHEEL EVENT - for mouse wheel (SCROLL DOWN = NEXT, SCROLL UP = PREVIOUS)
    let scrollDelta = 0;
    let wheelRotationTimeout: NodeJS.Timeout;
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isRotatingRef.current || isScrolling) return;
      isScrolling = true;

      scrollDelta += e.deltaY;
      const threshold = 50; // Lower threshold for faster response

      if (Math.abs(scrollDelta) >= threshold) {
        if (scrollDelta > 0) {
          // Scroll DOWN = NEXT scene
          let nextScene = currentSceneRef.current + 1;
          if (nextScene >= totalScenes) nextScene = 0; // Loop back to first
          setCurrentScene(nextScene);
        } else {
          // Scroll UP = PREVIOUS scene
          let prevScene = currentSceneRef.current - 1;
          if (prevScene < 0) prevScene = totalScenes - 1; // Loop to last
          setCurrentScene(prevScene);
        }
        scrollDelta = 0;

        // Set rotating state
        setIsRotating(true);
        clearTimeout(wheelRotationTimeout);
        wheelRotationTimeout = setTimeout(() => {
          setIsRotating(false);
          isScrolling = false;
        }, 800);
      } else {
        setTimeout(() => {
          isScrolling = false;
        }, 100);
      }
    };

    // MOUSE DRAG EVENTS - for click and drag
    const handleMouseDown = (e: MouseEvent) => {
      if (isRotatingRef.current) return;

      setIsDragging(true);
      dragStartX.current = e.clientX;
      dragStartY.current = e.clientY;
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || isRotatingRef.current) return;

      const deltaX = e.clientX - dragStartX.current;
      const deltaY = e.clientY - dragStartY.current;

      if (
        Math.abs(deltaX) > Math.abs(deltaY) &&
        Math.abs(deltaX) > dragThreshold
      ) {
        if (deltaX > 0) {
          // Drag right - previous scene
          let prevScene = currentSceneRef.current - 1;
          if (prevScene < 0) prevScene = totalScenes - 1; // Loop to last
          setCurrentScene(prevScene);
        } else {
          // Drag left - next scene
          let nextScene = currentSceneRef.current + 1;
          if (nextScene >= totalScenes) nextScene = 0; // Loop back to first
          setCurrentScene(nextScene);
        }

        setIsDragging(false);
        setIsRotating(true);

        setTimeout(() => {
          setIsRotating(false);
        }, 800);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // TOUCH EVENTS - for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (isRotatingRef.current || e.touches.length !== 1) return;

      setIsDragging(true);
      dragStartX.current = e.touches[0].clientX;
      dragStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || isRotatingRef.current || e.touches.length !== 1)
        return;

      const deltaX = e.touches[0].clientX - dragStartX.current;
      const deltaY = e.touches[0].clientY - dragStartY.current;

      if (
        Math.abs(deltaX) > Math.abs(deltaY) &&
        Math.abs(deltaX) > dragThreshold
      ) {
        if (deltaX > 0) {
          // Swipe right - previous scene
          let prevScene = currentSceneRef.current - 1;
          if (prevScene < 0) prevScene = totalScenes - 1; // Loop to last
          setCurrentScene(prevScene);
        } else {
          // Swipe left - next scene
          let nextScene = currentSceneRef.current + 1;
          if (nextScene >= totalScenes) nextScene = 0; // Loop back to first
          setCurrentScene(nextScene);
        }

        setIsDragging(false);
        setIsRotating(true);

        setTimeout(() => {
          setIsRotating(false);
        }, 800);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    // KEYBOARD EVENTS - for arrow keys
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isRotatingRef.current) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        // Next scene
        let nextScene = currentSceneRef.current + 1;
        if (nextScene >= totalScenes) nextScene = 0;
        setCurrentScene(nextScene);
        setIsRotating(true);
        setTimeout(() => setIsRotating(false), 800);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        // Previous scene
        let prevScene = currentSceneRef.current - 1;
        if (prevScene < 0) prevScene = totalScenes - 1;
        setCurrentScene(prevScene);
        setIsRotating(true);
        setTimeout(() => setIsRotating(false), 800);
      }
    };

    // Add all event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(wheelRotationTimeout);
    };
  };

  // Update rotation when scene changes - INFINITE LOOP
  useEffect(() => {
    if (!hasEntered || !circleContainerRef.current) return;

    const totalScenes = 4;
    const rotationPerScene = 360 / totalScenes;
    const rotation = -currentScene * rotationPerScene;

    // Smooth rotation animation
    gsap.to(circleContainerRef.current, {
      rotationY: rotation,
      duration: 1.0, // Faster rotation
      ease: "power3.inOut",
      onComplete: () => {
        // Set rotating state to false after animation
        setTimeout(() => {
          setIsRotating(false);
        }, 100);
      },
    });
  }, [currentScene, hasEntered]);

  // keep refs in sync with state for interactions
  useEffect(() => {
    currentSceneRef.current = currentScene;
  }, [currentScene]);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  // Subtle world tilt with mouse move - like rotating globe
  useEffect(() => {
    if (!hasEntered || !worldRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      // vertical tilt band kar diya, sirf left-right par subtle rotate
      const rotateY = x * 10; // left-right tilt
      const rotateX = 0;

      gsap.to(worldRef.current, {
        rotationY: rotateY,
        rotationX: rotateX,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hasEntered]);

  // Prevent scrolling before entering
  useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "hidden"; // Keep hidden for wheel scrolling
    }
  }, [hasEntered]);

  // Hero Section Entrance Animation
  useEffect(() => {
    if (hasEntered) return;

    const character = characterRef.current;
    const hero = heroRef.current;
    const ctaButton = hero?.querySelector("button");

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

  // Add cursor style when dragging
  useEffect(() => {
    if (hasEntered && isDragging) {
      document.body.style.cursor = "grabbing";
    } else if (hasEntered) {
      document.body.style.cursor = "grab";
    } else {
      document.body.style.cursor = "pointer";
    }
  }, [hasEntered, isDragging]);

  // Auto-rotate infinite loop (after last scene, go back to first)
  useEffect(() => {
    if (!hasEntered) return;

    const autoRotateInterval = setInterval(() => {
      if (!isRotating) {
        setCurrentScene((prev) => {
          const next = prev + 1;
          return next >= 4 ? 0 : next;
        });
        setIsRotating(true);
        setTimeout(() => setIsRotating(false), 1000);
      }
    }, 10000); // Auto rotate every 10 seconds

    return () => clearInterval(autoRotateInterval);
  }, [hasEntered, isRotating]);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white relative min-h-screen w-full"
      style={{
        cursor: hasEntered ? (isDragging ? "grabbing" : "grab") : "default",
      }}
    >
      {/* Hero Section (Scene 1) - FIXED BACKGROUND */}
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
          className="relative z-20 flex flex-col items-center justify-center"
        >
          {/* Single Character - Premium Design */}
          <div className="relative mb-16">
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
            className="group relative px-12 py-5 md:px-16 md:py-6 bg-white text-black rounded-full font-medium text-lg md:text-xl tracking-wide hover:bg-white/95 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-100 cursor-pointer z-20"
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
        {/* Background for story section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

        {/* Subtle rotating background effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        {/* Circular World Wrapper - tilts with mouse like Earth */}
        <div
          ref={worldRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Circular Container - Rotates like Earth (scroll/drag) */}
          <div
            ref={circleContainerRef}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Scene 1: Community - Position 0° */}
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
                    {/* Background Image - ONLY for this section */}
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
                      Connect with
                      <br />
                      Like-Minded People
                    </h2>

                    <p className="text-xl text-white/70 leading-relaxed max-w-xl font-light">
                      Join a vibrant community where meaningful connections are
                      made. Share experiences, build friendships, and grow
                      together.
                    </p>

                    {/* Professional UI Cards */}
                    <div className="grid grid-cols-3 gap-4 mt-10">
                      <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                          <svg
                            className="w-6 h-6 text-white/90"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-white/80">
                          Groups
                        </p>
                      </div>
                      <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                          <svg
                            className="w-6 h-6 text-white/90"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-white/80">
                          Chat
                        </p>
                      </div>
                      <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                          <svg
                            className="w-6 h-6 text-white/90"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-white/80">
                          Support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Scene 2: Events - Position 90° */}
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
                      Join Exciting
                      <br />
                      Gatherings
                    </h2>

                    <p className="text-xl text-white/70 leading-relaxed max-w-xl font-light">
                      Discover and attend curated events that bring people
                      together. From casual meetups to special occasions, there's
                      always something happening.
                    </p>

                    {/* Professional UI Cards */}
                    <div className="grid grid-cols-3 gap-4 mt-10">
                      <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                          <svg
                            className="w-6 h-6 text-white/90"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-white/80">
                          Calendar
                        </p>
                      </div>
                      <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                          <svg
                            className="w-6 h-6 text-white/90"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-white/80">
                          Locations
                        </p>
                      </div>
                      <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                          <svg
                            className="w-6 h-6 text-white/90"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-white/80">
                          RSVP
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Scene 3: Matchmaking - Position 180° */}
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
                      Find Your
                      <br />
                      Perfect Match
                    </h2>

                    <p className="text-xl text-white/70 leading-relaxed max-w-xl font-light">
                      Our intelligent matching system connects you with people who
                      share your interests, values, and goals. Start meaningful
                      conversations today.
                    </p>

                    {/* Professional UI Cards */}
                    <div className="grid grid-cols-3 gap-4 mt-10">
                      <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                          <svg
                            className="w-6 h-6 text-white/90"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-white/80">
                          Smart AI
                        </p>
                      </div>
                      <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                          <svg
                            className="w-6 h-6 text-white/90"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-white/80">
                          Compatibility
                        </p>
                      </div>
                      <div className="content-card p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                          <svg
                            className="w-6 h-6 text-white/90"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-white/80">
                          Messages
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Scene 4: Final - Position 270° */}
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
                        <div
                          className="w-full h-full bg-cover bg-center bg-no-repeat"
                          style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80')`,
                            backgroundPosition: "center",
                          }}
                        >
                          {/* Overlay for better contrast */}
                          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                        </div>

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
                                <svg
                                  className="w-6 h-6 md:w-8 md:h-8 text-white/80"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
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
                    Experience the joy of genuine connections. Join Circle Society
                    and start your journey toward meaningful relationships today.
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

                {/* Navigation Indicator */}
                <div className="flex justify-center items-center gap-3 mt-16">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${currentScene === 0 ? "w-8 bg-white" : "w-2 bg-white/30"}`}
                  />
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${currentScene === 1 ? "w-8 bg-white" : "w-2 bg-white/30"}`}
                  />
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${currentScene === 2 ? "w-8 bg-white" : "w-2 bg-white/30"}`}
                  />
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${currentScene === 3 ? "w-8 bg-white" : "w-2 bg-white/30"}`}
                  />
                </div>

                {/* Instruction text */}
                <p className="text-center mt-8 text-white/50 text-sm font-light tracking-wide">
                  Scroll down for next • Scroll up for previous • Last scene loops
                  back to first
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Scroll instruction */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <svg
              className="w-6 h-6 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <p className="text-white/50 text-sm font-light">
              Scroll to navigate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
