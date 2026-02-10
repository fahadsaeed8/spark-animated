"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowCircleSocietyWorksSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backgroundRef.current) return;

    // Continuous automatic animation - pulse/breathing effect
    const tl = gsap.timeline({ repeat: -1, ease: "power1.inOut" });

    tl.to(backgroundRef.current, {
      opacity: 0.6,
      duration: 3,
    }).to(backgroundRef.current, {
      opacity: 1,
      duration: 3,
    });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !stepsRef.current) return;

    // Set initial states - text starts from above and invisible
    gsap.set(headingRef.current, {
      opacity: 0,
      y: -30,
    });

    const stepItems = stepsRef.current.querySelectorAll(".step-item");
    gsap.set(stepItems, {
      opacity: 0,
      y: 30,
    });

    // Set initial states for images - scale down and slightly rotated
    if (image1Ref.current) {
      gsap.set(image1Ref.current, {
        opacity: 0,
        scale: 0.7,
        rotation: -15,
      });
    }
    if (image2Ref.current) {
      gsap.set(image2Ref.current, {
        opacity: 0,
        scale: 0.7,
        rotation: 0,
      });
    }
    if (image3Ref.current) {
      gsap.set(image3Ref.current, {
        opacity: 0,
        scale: 0.7,
        rotation: 15,
      });
    }

    // Create timeline for fade-in animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // Animate heading
    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        stepItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.4",
      )
      // Animate images with scale and rotation
      .to(
        image1Ref.current,
        {
          opacity: 1,
          scale: 1,
          rotation: -5,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.6",
      )
      .to(
        image2Ref.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.8",
      )
      .to(
        image3Ref.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 5,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.8",
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
      className="py-12 px-4 sm:py-16 sm:px-6 bg-[#F5F2ED] md:py-24 md:px-12 relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/Background-grey.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Main Heading */}
        <h2
          ref={headingRef}
          className="mb-12 sm:mb-40 text-center font-clash text-3xl sm:text-4xl font-medium text-[#1B1B1B] md:text-5xl lg:text-6xl"
        >
          How Circle Society Works
        </h2>

        {/* Steps Grid */}
        <div
          ref={stepsRef}
          className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-6 lg:gap-8"
        >
          {/* Step 1: Discover Activities */}
          <div className="text-center bg-white p-4 sm:p-5 mb-20 md:mb-0 rounded-2xl step-item">
            <div className="relative mb-4 sm:mb-5 flex items-start justify-center h-[220px] md:h-[280px] overflow-visible">
              {/* Golden Number */}
              <div className="absolute -left-2 sm:-left-4 md:-left-6 lg:-left-20 md:-top-22 z-10">
                <Image
                  src="/1.svg"
                  alt="1"
                  width={180}
                  height={180}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 -mt-10 md:-mt-0 md:h-32 lg:w-[200px] lg:h-34 drop-shadow-lg"
                />
              </div>

              {/* iPhone Mockup - Left turn */}
              <div
                ref={image1Ref}
                className="relative mt-8 sm:mt-10 md:-mt-30 ml-8 sm:ml-12 md:ml-16 lg:ml-0 transform rotate-[0deg] sm:rotate-[0deg]"
              >
                <div className="overflow-hidden w-[350px] h-[350px] -mt-28 md:-mt-0 -ml-24 md:-ml-0 md:w-[500px] md:h-[500px]">
                  <Image
                    src="/iPhone-13-Pro-Front.svg"
                    alt="Discover Activities"
                    width={900}
                    height={900}
                    className="w-full h-full drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <h3 className="mb-2 sm:mb-3 font-clash text-lg sm:text-xl md:text-3xl font-medium text-[#1B1B1B]">
              Discover Activities
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#5A5A5A] md:text-base max-w-md mx-auto">
              Take our fun quiz, no boring questions. Just tell us what lights
              you up: Travel? Dogs? Memes?
            </p>
          </div>

          {/* Step 2: Join a Community or Event */}
          <div className="text-center bg-white p-4 sm:p-5 mb-20 md:mb-0 rounded-2xl step-item">
            <div className="relative mb-4 sm:mb-5 flex items-start justify-center h-[220px] md:h-[280px] md:h-[280px] overflow-visible">
              {/* Golden Number */}
              <div className="absolute -left-2 sm:-left-4 md:-left-6 lg:-left-20 md:-top-22 z-10">
                <Image
                  src="/2.svg"
                  alt="2"
                  width={180}
                  height={180}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 -mt-10 md:-mt-0 md:h-32 lg:w-[200px] lg:h-34 drop-shadow-lg"
                />
              </div>

              {/* iPhone Mockup - Center, slight right turn */}
              <div
                ref={image2Ref}
                className="relative mt-8 sm:mt-10 md:-mt-30 ml-8 sm:ml-12 md:ml-16 lg:ml-20 transform rotate-[0deg] sm:rotate-[0deg]"
              >
                <div className="overflow-hidden w-[350px] h-[350px] -mt-28 md:-mt-0 -ml-24 md:-ml-0 md:w-[500px] md:h-[500px]">
                  <Image
                    src="/iPhone-13-Pro-Front-new.svg"
                    alt="Join a Community or Event"
                    width={173.6595458984375}
                    height={375.7525634765625}
                    className="w-full h-full drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <h3 className="mb-2 sm:mb-3 font-clash text-lg sm:text-xl md:text-[27px] font-medium text-[#1B1B1B]">
              Join a Community or Event
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#5A5A5A] md:text-base max-w-md mx-auto">
              Our matching engine compares your vibe with everyone else's to
              find the strongest spark.
            </p>
          </div>

          {/* Step 3: Build Real Connections */}
          <div className="text-center bg-white p-4 sm:p-5 rounded-2xl step-item">
            <div className="relative mb-4 sm:mb-5 flex items-start justify-center h-[220px] md:h-[280px] md:h-[280px] overflow-visible">
              {/* Golden Number */}
              <div className="absolute -left-2 sm:-left-4 md:-left-6 lg:-left-20 md:-top-22 z-10">
                <Image
                  src="/3.svg"
                  alt="3"
                  width={180}
                  height={180}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 -mt-10 md:-mt-0 md:h-32 lg:w-[200px] lg:h-34 drop-shadow-lg"
                />
              </div>

              {/* iPhone Mockup - Right turn */}
              <div
                ref={image3Ref}
                className="relative mt-8 sm:mt-10 md:-mt-30 ml-8 sm:ml-12 md:ml-16 lg:ml-20 transform rotate-[0deg] sm:rotate-[30deg]"
              >
                <div className="overflow-hidden w-[350px] h-[350px] -mt-28 md:-mt-0 -ml-24 md:-ml-0 md:w-[500px] md:h-[500px]">
                  <Image
                    src="/iPhone-13-Pro-Front (2).svg"
                    alt="Build Real Connections"
                    width={173.6595458984375}
                    height={375.7525634765625}
                    className="w-full h-full drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <h3 className="mb-2 sm:mb-3 font-clash text-lg sm:text-xl md:text-3xl font-medium text-[#1B1B1B]">
              Build Real Connections
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#5A5A5A] md:text-base max-w-md mx-auto">
              No swiping. No awkward intros. Just show up and see who you
              matched with instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
