"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatisticsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !statsRef.current) return;

    const statItems = statsRef.current.querySelectorAll(".stat-item");
    
    // Set initial states - text starts from above and invisible
    gsap.set(statItems, {
      opacity: 0,
      y: -30,
    });

    // Create timeline for fade-in animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // Animate stats with stagger
    tl.to(statItems, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#2F5D50] py-12 sm:py-14 md:py-14 px-4 sm:px-6 md:px-0">
      <div className="mx-auto max-w-full">
        <div ref={statsRef} className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {/* Stat 1: Downloads */}
          <div className="text-center stat-item">
            <div className="mb-2 text-2xl sm:text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              10,000+
            </div>
            <div className="mb-2 text-2xl sm:text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              downloads
            </div>
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-white opacity-90 md:text-[15px] px-2">
              Growing community across cities and interests.
            </p>
          </div>

          {/* Stat 2: Active Communities */}
          <div className="text-center stat-item">
            <div className="mb-2 text-2xl sm:text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              100+
            </div>
            <div className="mb-2 text-2xl sm:text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              Active communities
            </div>
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-white opacity-90 md:text-[15px] px-2">
              From social meetups to lifestyle-based groups.
            </p>
          </div>

          {/* Stat 3: Daily Posts */}
          <div className="text-center stat-item">
            <div className="mb-2 text-2xl sm:text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              100,000+
            </div>
            <div className="mb-2 text-2xl sm:text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              Daily Posts
            </div>
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-white opacity-90 md:text-[15px] px-2">
              Designed to move beyond screens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


