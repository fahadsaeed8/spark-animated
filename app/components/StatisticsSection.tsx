"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatisticsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString("en-US");
  };

  // Animate counter function
  const animateCounter = (
    element: HTMLElement,
    target: number,
    duration: number = 2,
  ) => {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: target,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        element.textContent = formatNumber(Math.floor(obj.value)) + "+";
      },
    });
  };

  useEffect(() => {
    if (!sectionRef.current || !statsRef.current || hasAnimated) return;

    const number1Ref = statsRef.current.querySelector(".number-1");
    const number2Ref = statsRef.current.querySelector(".number-2");
    const number3Ref = statsRef.current.querySelector(".number-3");

    // Create scroll trigger only for number animations
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
      onEnter: () => {
        if (!hasAnimated) {
          setHasAnimated(true);
          // Start counter animations
          if (number1Ref) animateCounter(number1Ref as HTMLElement, 10000, 2);
          if (number2Ref) animateCounter(number2Ref as HTMLElement, 100, 2);
          if (number3Ref)
            animateCounter(number3Ref as HTMLElement, 100000, 2.5);
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#73542A] py-14 md:py-18 px-4 sm:px-6 md:px-0"
    >
      <div className="mx-auto max-w-full">
        <div
          ref={statsRef}
          className="grid gap-20 md:grid-cols-3 md:gap-6 lg:gap-8"
        >
          {/* Stat 1: Downloads */}
          <div className="text-center stat-item">
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              <span className="number-1">0+</span> Active
            </div>
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              Members
            </div>
            <div className="flex justify-center">
              <p className="text-lg font-normal w-[80%] md:w-[60%] leading-relaxed text-white opacity-90 md:text-[15px] px-2">
                Active across cities and interest-based communities.{" "}
              </p>
            </div>
          </div>

          {/* Stat 2: Active Communities */}
          <div className="text-center stat-item">
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              <span className="number-2">0+</span>
            </div>
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              communities
            </div>
            <div className="flex justify-center">
              <p className="text-lg font-normal w-[80%] md:w-[65%] leading-relaxed text-white opacity-90 md:text-[15px] px-2">
                From fitness and food to faith, family, and business.{" "}
              </p>
            </div>
          </div>

          {/* Stat 3: Daily Posts */}
          <div className="text-center stat-item">
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              <span className="number-3">0+</span>
            </div>
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              Events Hosted{" "}
            </div>
            <div className="flex justify-center">
              <p className="text-lg font-normal w-[80%] md:w-[65%] leading-relaxed text-white opacity-90 md:text-[15px] px-2">
                Events, meetups, and experiences happening every day.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
