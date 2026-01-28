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
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const testimonialsSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
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

  // Stats section animation with counting effect
  useEffect(() => {
    if (statsSectionRef.current) {
      const statNumbers = statsSectionRef.current.querySelectorAll(".stat-number");
      const statCards = statsSectionRef.current.querySelectorAll(".stat-card");
      
      // Enhanced card entrance animation
      gsap.from(statCards, {
        opacity: 0,
        y: 150,
        scale: 0.5,
        rotation: -15,
        stagger: {
          amount: 0.8,
          from: "center",
        },
        scrollTrigger: {
          trigger: statsSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Continuous floating animation for cards
      statCards.forEach((card, i) => {
        gsap.to(card, {
          y: -10,
          duration: 2 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });
      
      // Counting animation with bounce effect
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-target") || "0");
        const duration = 2.5;
        let current = 0;
        const increment = target / (duration * 60);
        
        ScrollTrigger.create({
          trigger: stat,
          start: "top 80%",
          onEnter: () => {
            gsap.to(stat.parentElement, {
              scale: 1.2,
              duration: 0.3,
              yoyo: true,
              repeat: 1,
              ease: "power2.out",
            });
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              stat.textContent = Math.floor(current).toLocaleString();
            }, 1000 / 60);
          },
        });
      });

      // Hover effects for cards
      statCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.1,
            y: -15,
            boxShadow: "0 20px 40px rgba(255,255,255,0.2)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            boxShadow: "0 0 0 rgba(255,255,255,0)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }
  }, []);

  // Testimonials section with card flip animations
  useEffect(() => {
    if (testimonialsSectionRef.current) {
      const heading = testimonialsSectionRef.current.querySelector("h2");
      const cards = testimonialsSectionRef.current.querySelectorAll(".testimonial-card");
      
      // Heading animation
      if (heading) {
        gsap.from(heading, {
          opacity: 0,
          y: -50,
          scale: 0.8,
          scrollTrigger: {
            trigger: testimonialsSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          duration: 1,
          ease: "power3.out",
        });
      }
      
      // Enhanced card entrance with 3D flip
      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          rotationY: 180,
          rotationX: -30,
          x: i % 2 === 0 ? -200 : 200,
          y: 100,
          scale: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          duration: 1.2,
          ease: "power3.out",
          delay: i * 0.15,
        });

        // Continuous subtle rotation
        gsap.to(card, {
          rotationY: 2,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Enhanced hover effects
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            rotationY: 10,
            rotationX: 5,
            scale: 1.08,
            y: -10,
            z: 50,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            y: 0,
            z: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });

      // Animate twinkling stars with more effects
      const stars = testimonialsSectionRef.current.querySelectorAll(".twinkle-star");
      stars.forEach((star, i) => {
        const tl = gsap.timeline({ repeat: -1, delay: i * 0.1 });
        tl.to(star, {
          opacity: 1,
          scale: 2,
          x: (Math.random() - 0.5) * 20,
          y: (Math.random() - 0.5) * 20,
          duration: (2 + Math.random() * 2) / 2,
          ease: "sine.inOut",
        })
        .to(star, {
          opacity: 0.2,
          scale: 0.5,
          x: 0,
          y: 0,
          duration: (2 + Math.random() * 2) / 2,
          ease: "sine.inOut",
        });
      });
    }
  }, []);

  // Services section with wave animations
  useEffect(() => {
    if (servicesSectionRef.current) {
      const heading = servicesSectionRef.current.querySelector("h2");
      const waves = servicesSectionRef.current.querySelectorAll(".wave");
      const serviceItems = servicesSectionRef.current.querySelectorAll(".service-item");
      
      // Heading animation
      if (heading) {
        gsap.from(heading, {
          opacity: 0,
          y: 50,
          scale: 0.9,
          scrollTrigger: {
            trigger: servicesSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          duration: 1,
          ease: "power3.out",
        });
      }

      // Enhanced wave animations
      waves.forEach((wave, i) => {
        gsap.to(wave, {
          x: "100%",
          duration: 4 + i * 2,
          repeat: -1,
          ease: "none",
        });
        gsap.to(wave, {
          y: (i % 2 === 0 ? 1 : -1) * 30,
          duration: 2 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Enhanced service items entrance
      gsap.from(serviceItems, {
        opacity: 0,
        y: 100,
        rotationX: -180,
        rotationZ: 45,
        scale: 0.3,
        stagger: {
          amount: 0.8,
          from: "random",
        },
        scrollTrigger: {
          trigger: servicesSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        duration: 1.2,
        ease: "back.out(1.7)",
      });

      // Continuous floating for service items
      serviceItems.forEach((item, i) => {
        gsap.to(item, {
          y: -15,
          rotationY: 5,
          duration: 2.5 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

      // Enhanced hover effects
      serviceItems.forEach((item) => {
        const icon = item.querySelector(".service-icon");
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            scale: 1.1,
            y: -20,
            rotationY: 15,
            rotationX: 5,
            duration: 0.4,
            ease: "power2.out",
          });
          if (icon) {
            gsap.to(icon, {
              rotation: 360,
              scale: 1.3,
              duration: 0.6,
              ease: "back.out(1.7)",
            });
          }
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            scale: 1,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            duration: 0.4,
            ease: "power2.out",
          });
          if (icon) {
            gsap.to(icon, {
              rotation: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        });
      });
    }
  }, []);

  // Timeline section with reveal animations
  useEffect(() => {
    if (timelineSectionRef.current) {
      const heading = timelineSectionRef.current.querySelector("h2");
      const timelineItems = timelineSectionRef.current.querySelectorAll(".timeline-item");
      const centerLine = timelineSectionRef.current.querySelector(".timeline-center-line");
      
      // Heading animation
      if (heading) {
        gsap.from(heading, {
          opacity: 0,
          scale: 0.8,
          rotation: -5,
          scrollTrigger: {
            trigger: timelineSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          duration: 1,
          ease: "power3.out",
        });
      }

      // Center line animation
      if (centerLine) {
        ScrollTrigger.create({
          trigger: timelineSectionRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(centerLine,
              { scaleY: 0, transformOrigin: "top" },
              { scaleY: 1, duration: 1.5, ease: "power2.out" }
            );
          },
        });
      }
      
      // Enhanced timeline items animation
      timelineItems.forEach((item, index) => {
        const line = item.querySelector(".timeline-line");
        const dot = item.querySelector(".timeline-dot");
        const content = item.querySelector(".timeline-content");

        ScrollTrigger.create({
          trigger: item,
          start: "top 80%",
          onEnter: () => {
            // Line animation
            if (line) {
              gsap.fromTo(line, 
                { scaleY: 0, transformOrigin: "top", opacity: 0 },
                { scaleY: 1, opacity: 1, duration: 0.8, ease: "power2.out" }
              );
            }
            
            // Dot animation with glow
            if (dot) {
              gsap.fromTo(dot,
                { scale: 0, rotation: -180, opacity: 0 },
                { 
                  scale: 1, 
                  rotation: 0,
                  opacity: 1,
                  duration: 0.6, 
                  ease: "back.out(2)",
                  delay: 0.3,
                }
              );
              
              // Continuous pulse for dot
              gsap.to(dot, {
                scale: 1.3,
                opacity: 0.7,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0.9,
              });
            }
            
            // Content animation
            if (content) {
              gsap.from(content, {
                opacity: 0,
                x: item.classList.contains("timeline-left") ? -100 : 100,
                y: 50,
                rotationY: item.classList.contains("timeline-left") ? -30 : 30,
                scale: 0.8,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
              });
            }
          },
        });

        // Hover effects
        if (content) {
          content.addEventListener("mouseenter", () => {
            gsap.to(content, {
              scale: 1.05,
              y: -5,
              rotationY: 0,
              duration: 0.3,
              ease: "power2.out",
            });
            if (dot) {
              gsap.to(dot, {
                scale: 1.5,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });
          content.addEventListener("mouseleave", () => {
            gsap.to(content, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
            if (dot) {
              gsap.to(dot, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });
        }
      });
    }
  }, []);

  // Contact section with form animations
  useEffect(() => {
    if (contactSectionRef.current) {
      const heading = contactSectionRef.current.querySelector("h2");
      const subtitle = contactSectionRef.current.querySelector("p");
      const formInputs = contactSectionRef.current.querySelectorAll("input, textarea");
      const submitButton = contactSectionRef.current.querySelector("button[type='submit']");
      const contactElements = contactSectionRef.current.querySelectorAll(".contact-element");
      
      // Enhanced heading animation
      if (heading) {
        gsap.from(heading, {
          opacity: 0,
          y: -50,
          scale: 0.8,
          rotation: -5,
          scrollTrigger: {
            trigger: contactSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          duration: 1,
          ease: "power3.out",
        });
      }

      // Subtitle animation
      if (subtitle) {
        gsap.from(subtitle, {
          opacity: 0,
          y: 20,
          delay: 0.2,
          scrollTrigger: {
            trigger: contactSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // Enhanced form elements entrance
      gsap.from(contactElements, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotationX: -30,
        stagger: {
          amount: 0.6,
          from: "start",
        },
        scrollTrigger: {
          trigger: contactSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        duration: 0.8,
        ease: "power2.out",
      });
      
      // Enhanced input focus animations
      formInputs.forEach((input, i) => {
        input.addEventListener("focus", () => {
          gsap.to(input, {
            scale: 1.05,
            y: -5,
            borderColor: "rgba(255,255,255,1)",
            boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            duration: 0.4,
            ease: "power2.out",
          });
          
          // Label animation if exists
          const label = input.previousElementSibling;
          if (label && label.tagName === "LABEL") {
            gsap.to(label, {
              y: -10,
              scale: 1.1,
              color: "rgba(255,255,255,1)",
              duration: 0.3,
            });
          }
        });

        input.addEventListener("blur", () => {
          gsap.to(input, {
            scale: 1,
            y: 0,
            borderColor: "rgba(255,255,255,0.3)",
            boxShadow: "0 0 0 rgba(255,255,255,0)",
            duration: 0.4,
            ease: "power2.out",
          });
        });

        // Continuous subtle animation
        gsap.to(input, {
          y: -2,
          duration: 2 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1,
        });
      });

      // Enhanced button animation
      if (submitButton) {
        // Continuous pulse
        gsap.to(submitButton, {
          scale: 1.02,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        submitButton.addEventListener("mouseenter", () => {
          gsap.to(submitButton, {
            scale: 1.1,
            y: -5,
            boxShadow: "0 10px 30px rgba(255,255,255,0.4)",
            rotation: 2,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        submitButton.addEventListener("mouseleave", () => {
          gsap.to(submitButton, {
            scale: 1,
            y: 0,
            boxShadow: "0 0 0 rgba(255,255,255,0)",
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
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
              className="px-20 py-10 border border-white rounded-full text-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
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

        {/* STATS SECTION */}
        <section
          ref={statsSectionRef}
          className="h-screen w-screen flex items-center justify-center relative py-20 px-4"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {[
              { number: 1000, label: "Projects", suffix: "+" },
              { number: 500, label: "Clients", suffix: "+" },
              { number: 50, label: "Awards", suffix: "+" },
              { number: 10, label: "Years", suffix: "+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="stat-card text-center p-8 border border-white/20 rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                <div className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="stat-number" data-target={stat.number}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-xl text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section
          ref={testimonialsSectionRef}
          className="h-screen w-screen flex items-center justify-center relative py-20 px-4 overflow-hidden"
        >
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="twinkle-star absolute w-1 h-1 bg-white rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          <div className="max-w-6xl w-full relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
              What Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Absolutely stunning work! The animations are smooth and engaging.",
                  author: "Sarah Johnson",
                  role: "CEO, TechCorp",
                },
                {
                  quote: "Best digital experience we've ever had. Highly recommended!",
                  author: "Michael Chen",
                  role: "Founder, DesignStudio",
                },
                {
                  quote: "Creative, modern, and professional. Exceeded all expectations.",
                  author: "Emily Davis",
                  role: "Director, InnovationLab",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card p-8 border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  style={{ perspective: "1000px" }}
                >
                  <div className="text-4xl mb-4 opacity-50">"</div>
                  <p className="text-lg mb-6 text-white/90">{testimonial.quote}</p>
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section
          ref={servicesSectionRef}
          className="h-screen w-screen flex items-center justify-center relative py-20 px-4 overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="wave absolute top-0 left-0 w-full h-full opacity-10">
              <svg viewBox="0 0 1200 120" className="w-full h-full">
                <path
                  d="M0,60 Q300,20 600,60 T1200,60"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="wave absolute top-0 left-0 w-full h-full opacity-5" style={{ animationDelay: "1s" }}>
              <svg viewBox="0 0 1200 120" className="w-full h-full">
                <path
                  d="M0,80 Q300,40 600,80 T1200,80"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="max-w-6xl w-full relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "🎨", title: "Design", desc: "Creative and modern design solutions" },
                { icon: "💻", title: "Development", desc: "Cutting-edge web development" },
                { icon: "📱", title: "Mobile Apps", desc: "Native and cross-platform apps" },
                { icon: "🚀", title: "Marketing", desc: "Digital marketing strategies" },
                { icon: "🎯", title: "SEO", desc: "Search engine optimization services" },
                { icon: "📊", title: "Analytics", desc: "Data-driven insights and reporting" },
                { icon: "🔒", title: "Security", desc: "Enterprise-grade security solutions" },
                { icon: "☁️", title: "Cloud", desc: "Cloud infrastructure and migration" },
                { icon: "🤖", title: "AI/ML", desc: "Artificial intelligence integration" },
                { icon: "🎬", title: "Video", desc: "Professional video production" },
                { icon: "📸", title: "Photography", desc: "High-quality photography services" },
                { icon: "✍️", title: "Content", desc: "Engaging content creation" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="service-item p-8 border border-white/20 rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-300 cursor-pointer group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="service-icon text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 group-hover:text-white transition-colors">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section
          ref={timelineSectionRef}
          className="h-screen w-screen flex items-center justify-center relative py-20 px-4"
        >
          <div className="max-w-4xl w-full relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
              Our Journey
            </h2>
            <div className="relative">
              <div className="timeline-center-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/20" />
              {[
                { year: "2024", title: "Global Expansion", desc: "Expanded to 10+ countries" },
                { year: "2023", title: "Award Winner", desc: "Best Design Agency of the Year" },
                { year: "2022", title: "Team Growth", desc: "Reached 100+ team members" },
                { year: "2021", title: "Innovation", desc: "Launched revolutionary platform" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item relative mb-12 ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                      <div className="timeline-content p-6 border border-white/20 rounded-lg bg-white/5">
                        <div className="text-2xl font-bold mb-2">{item.year}</div>
                        <div className="text-xl font-semibold mb-2">{item.title}</div>
                        <div className="text-white/70">{item.desc}</div>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="timeline-dot w-6 h-6 bg-white rounded-full border-4 border-black" />
                      <div className="timeline-line absolute top-1/2 w-8 h-1 bg-white/20" style={{ [index % 2 === 0 ? "right" : "left"]: "-32px" }} />
                    </div>
                    <div className="w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          ref={contactSectionRef}
          className="h-screen w-screen flex items-center justify-center relative py-20 px-4 overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <div className="max-w-2xl w-full relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center contact-element">
              Get In Touch
            </h2>
            <p className="text-xl text-white/70 mb-12 text-center contact-element">
              Let's create something amazing together
            </p>
            <form className="space-y-6">
              <div className="contact-element">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/5 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
              <div className="contact-element">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-white/5 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
              <div className="contact-element">
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-6 py-4 bg-white/5 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                />
              </div>
              <div className="contact-element">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
