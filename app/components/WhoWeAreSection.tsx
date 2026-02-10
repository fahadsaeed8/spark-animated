"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const h3Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !h2Ref.current ||
      !h3Ref.current ||
      !pRef.current
    )
      return;

    // Set initial states - text starts from above and invisible
    gsap.set([h2Ref.current, h3Ref.current, pRef.current], {
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

    // Animate headings and text with stagger - coming from top
    tl.to(h2Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        h3Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .to(
        pRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
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
      className="bg-[#f5f5f0] py-12 sm:py-14 md:py-18 px-4 sm:px-6 md:px-12"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          ref={h2Ref}
          className="mb-3 sm:mb-4 text-xl sm:text-2xl font-medium text-[#2F5D50] md:text-3xl"
        >
          Who we are
        </h2>
        <h3
          ref={h3Ref}
          className="mb-4 sm:mb-6 font-clash text-4xl font-medium text-[#1B1B1B] md:text-4xl lg:text-5xl"
        >
          A Social Hub for Everyday Life{" "}
        </h3>
        <p
          ref={pRef}
          className="text-md leading-relaxed text-[#5A5A5A] md:text-xl px-2 sm:px-0"
        >
          Circle Society helps people discover communities, attend local events,
          and build meaningful social connections. Whether you’re new to a city,
          exploring interests, or looking for real-world activities — this is
          where social life begins.
        </p>
      </div>
    </section>
  );
}
