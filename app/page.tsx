"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const circleRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const finalSectionRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const scrollRotationRef = useRef(0);

  // Rotation phase (first 5 scrolls) then normal scroll
  useEffect(() => {
    let scrollCount = 0;
    let rotation = 0;
    const rotationSpeed = 0.8;
    const maxRotationScrolls = 5;
    let isRotationPhase = true;

    // Initially disable scrolling
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const resetRotations = () => {
      // Reset all rotations smoothly
      gsap.to([heroTextRef.current, circleRef.current, section2Ref.current, section3Ref.current, parallaxRef.current, finalSectionRef.current].filter(Boolean), {
        rotation: 0,
        duration: 1,
        ease: "power2.out",
      });

      if (heroTextRef.current) {
        const chars = heroTextRef.current.querySelectorAll("[class^='char-']");
        gsap.to(chars, {
          rotation: 0,
          duration: 1,
          ease: "power2.out",
        });
      }

      if (section3Ref.current) {
        const elements = section3Ref.current.querySelectorAll("h2, .feature-item");
        gsap.to(elements, {
          rotation: 0,
          duration: 1,
          ease: "power2.out",
        });
      }

      if (parallaxRef.current) {
        const heading = parallaxRef.current.querySelector("h2");
        if (heading) {
          gsap.to(heading, {
            rotation: 0,
            duration: 1,
            ease: "power2.out",
          });
        }
      }

      if (finalSectionRef.current) {
        const elements = finalSectionRef.current.querySelectorAll("h2, button");
        gsap.to(elements, {
          rotation: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Only count down scrolls
      if (e.deltaY > 0 && isRotationPhase) {
        scrollCount++;
        
        if (scrollCount >= maxRotationScrolls) {
          // Switch to normal scroll
          isRotationPhase = false;
          e.preventDefault();
          
          // Reset rotations
          resetRotations();
          
          // Enable normal scrolling
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";
          
          // Smooth scroll to next section
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          });
          
          return;
        }
      }

      if (isRotationPhase && e.deltaY > 0) {
        e.preventDefault();
        
        // Calculate rotation based on scroll
        rotation += e.deltaY * rotationSpeed;
        scrollRotationRef.current = rotation;

        // Rotate hero text
        if (heroTextRef.current) {
          gsap.to(heroTextRef.current, {
            rotation: rotation,
            duration: 0.1,
            ease: "none",
          });
          
          // Rotate individual characters
          const chars = heroTextRef.current.querySelectorAll("[class^='char-']");
          chars.forEach((char, i) => {
            gsap.to(char, {
              rotation: rotation * (i % 2 === 0 ? 1 : -1) * 1.2,
              duration: 0.1,
              ease: "none",
            });
          });
        }

        // Rotate circle (faster)
        if (circleRef.current) {
          gsap.to(circleRef.current, {
            rotation: rotation * 2,
            duration: 0.1,
            ease: "none",
          });
        }

        // Rotate section 2 (reverse direction)
        if (section2Ref.current) {
          gsap.to(section2Ref.current, {
            rotation: -rotation * 0.8,
            duration: 0.1,
            ease: "none",
          });
        }

        // Rotate section 3 elements individually
        if (section3Ref.current) {
          const h2 = section3Ref.current.querySelector("h2");
          if (h2) {
            gsap.to(h2, {
              rotation: rotation * 0.7,
              duration: 0.1,
              ease: "none",
            });
          }
          
          const featureItems = section3Ref.current.querySelectorAll(".feature-item");
          featureItems.forEach((item, i) => {
            gsap.to(item, {
              rotation: rotation * (i % 2 === 0 ? 1 : -1) * 0.8,
              duration: 0.1,
              ease: "none",
            });
          });
        }

        // Rotate parallax section
        if (parallaxRef.current) {
          gsap.to(parallaxRef.current, {
            rotation: rotation * 0.6,
            duration: 0.1,
            ease: "none",
          });
          
          const heading = parallaxRef.current.querySelector("h2");
          if (heading) {
            gsap.to(heading, {
              rotation: -rotation * 0.4,
              duration: 0.1,
              ease: "none",
            });
          }
        }

        // Rotate final section (reverse)
        if (finalSectionRef.current) {
          gsap.to(finalSectionRef.current, {
            rotation: -rotation * 0.9,
            duration: 0.1,
            ease: "none",
          });
          
          const elements = finalSectionRef.current.querySelectorAll("h2, button");
          elements.forEach((el, i) => {
            gsap.to(el, {
              rotation: rotation * (i % 2 === 0 ? 1 : -1) * 0.5,
              duration: 0.1,
              ease: "none",
            });
          });
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  // Cursor effect (desktop only)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          duration: 0.2,
        });
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.2,
        });
      }
    };

    const interactiveElements = document.querySelectorAll("button, a, .feature-item");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Hero animations
  useEffect(() => {
    if (heroTextRef.current) {
      const chars = heroTextRef.current.textContent?.split("") || [];
      heroTextRef.current.innerHTML = chars
        .map((char, i) => `<span class="char-${i}" style="display: inline-block;">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      const charElements = heroTextRef.current.querySelectorAll("[class^='char-']");
      
      gsap.from(charElements, {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.03,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
    }
  }, []);

  // Circle hover effect only (rotation handled by scroll)
  useEffect(() => {
    if (circleRef.current) {
      const circle = circleRef.current;
      const handleMouseEnter = () => {
        gsap.to(circle, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      };
      const handleMouseLeave = () => {
        gsap.to(circle, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      circle.addEventListener("mouseenter", handleMouseEnter);
      circle.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        circle.removeEventListener("mouseenter", handleMouseEnter);
        circle.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  // Section 2 scroll animation (after rotation phase)
  useEffect(() => {
    if (section2Ref.current) {
      gsap.from(section2Ref.current, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  // Section 3 scroll animations (after rotation phase)
  useEffect(() => {
    if (section3Ref.current) {
      const elements = section3Ref.current.querySelectorAll("h2, .feature-item");
      
      gsap.from(elements, {
        opacity: 0,
        x: -100,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Hover animations for feature items
      const featureItems = section3Ref.current.querySelectorAll(".feature-item");
      featureItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }
  }, []);

  // Parallax section scroll animation (after rotation phase)
  useEffect(() => {
    if (parallaxRef.current) {
      const stars = parallaxRef.current.querySelectorAll(".star");
      stars.forEach((star, i) => {
        gsap.to(star, {
          y: -100,
          opacity: 0.8,
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      const heading = parallaxRef.current.querySelector("h2");
      if (heading) {
        gsap.from(heading, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }
  }, []);

  // Final section scroll animation (after rotation phase)
  useEffect(() => {
    if (finalSectionRef.current) {
      const elements = finalSectionRef.current.querySelectorAll("h2, button");
      gsap.from(elements, {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        scrollTrigger: {
          trigger: finalSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate background particles
      const particles = finalSectionRef.current.querySelectorAll(".bg-particle");
      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: -100,
          x: (i % 2 === 0 ? 1 : -1) * 50,
          opacity: 0.6,
          scale: 1.2,
          duration: 3 + (i % 3),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

      // Continuous floating animation for heading
      const heading = finalSectionRef.current.querySelector("h2");
      if (heading) {
        gsap.to(heading, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Pulse animation for button
      const button = finalSectionRef.current.querySelector("button");
      if (button) {
        gsap.to(button, {
          scale: 1.02,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Animate gradient background
      const gradientBg = finalSectionRef.current.querySelector(".gradient-bg");
      if (gradientBg) {
        gsap.to(gradientBg, {
          backgroundPosition: "200% 200%",
          duration: 10,
          repeat: -1,
          ease: "none",
        });
      }
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white relative min-h-screen w-screen">
      {/* Custom Cursor - Desktop Only */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed w-8 h-8 rounded-full border-2 border-white pointer-events-none z-50 mix-blend-difference"
        style={{
          left: "-16px",
          top: "-16px",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* All sections - normal scroll after rotation phase */}
      <div className="relative">
        {/* HERO */}
        <section
          ref={heroRef}
          className="h-screen w-screen flex items-center justify-center relative"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <h1
            ref={heroTextRef}
            className="text-6xl md:text-8xl font-bold relative z-10 text-center px-4"
          >
            Digital Experiences
          </h1>
        </section>

        {/* ROTATING TEXT */}
        <section
          ref={section2Ref}
          className="h-screen w-screen flex items-center justify-center relative"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div
            ref={circleRef}
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full flex items-center justify-center cursor-pointer group transition-all duration-300"
          >
            <svg
              viewBox="0 0 300 300"
              className="absolute w-full h-full"
              style={{ filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))" }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="
                    M 150, 150
                    m -120, 0
                    a 120,120 0 1,1 240,0
                    a 120,120 0 1,1 -240,0
                  "
                />
              </defs>
              <text fill="white" fontSize="16" letterSpacing="4" className="group-hover:fill-yellow-400 transition-colors">
                <textPath href="#circlePath">
                  SCROLL • INTERACT • EXPERIENCE • ANIMATE • CREATE •
                </textPath>
              </text>
            </svg>

            <span className="text-xl md:text-2xl font-semibold relative z-10 group-hover:scale-110 transition-transform duration-300">
              ALCHE STYLE
            </span>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section
          ref={section3Ref}
          className="h-screen w-screen flex flex-col items-center justify-center py-20 px-4 relative"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center">
            Smooth Scroll Animation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {[
              { title: "Interactive", desc: "Engaging user experiences" },
              { title: "Smooth", desc: "Fluid animations & transitions" },
              { title: "Modern", desc: "Cutting-edge design patterns" },
            ].map((item, index) => (
              <div
                key={index}
                className="feature-item p-8 border border-white/20 rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-300 cursor-pointer group"
              >
                <h3 className="text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform">
                  {item.title}
                </h3>
                <p className="text-white/70 group-hover:text-white transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PARALLAX SECTION */}
        <section
          ref={parallaxRef}
          className="h-screen w-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="star absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                }}
              />
            ))}
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-center relative z-10">
            Immersive
            <br />
            <span className="text-white/50">Experiences</span>
          </h2>
        </section>

        {/* FINAL CTA SECTION */}
        <section
          ref={finalSectionRef}
          className="h-screen w-screen flex items-center justify-center relative overflow-hidden"
        >
          {/* Animated gradient background */}
          <div 
            className="gradient-bg absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)",
              backgroundSize: "200% 200%",
            }}
          />
          
          {/* Background particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="bg-particle absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0s" }} />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: "0.75s" }} />
          
          <div className="text-center relative z-10 px-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Ready to Create?
            </h2>
            <button
              className="px-14! py-2! m-10! border border-white rounded-full text-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.05,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
