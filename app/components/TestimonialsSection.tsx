"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    gsap.set(headingRef.current, { opacity: 0, y: -30 });
    gsap.set(cardsRef.current, { opacity: 0, y: 40 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })
      .to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
      .to(
        cardsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        "-=0.4",
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F5F2ED] py-20 px-4 sm:px-8 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-wide text-[#5A5A5A] mb-2">
            Testimonials
          </p>
          <h2
            ref={headingRef}
            className="font-clash text-4xl md:text-5xl lg:text-6xl text-[#1B1B1B]"
          >
            Real Stories From Real People
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div className="space-y-24">
            {/* Adeel */}
            <div
              ref={(el) => el && cardsRef.current.push(el)}
              className="relative flex items-center gap-10"
            >
              <div className="max-w-md">
                <p className="text-xl text-[#1B1B1B] mb-6">
                  I didn't want another social app. I wanted people who actually
                  show up. Circle Society helped me find a local community that
                  meets weekly. It feels real, not forced.
                </p>
                <p className="font-medium">Adeel, Dubai</p>
                <p className="text-[#5A5A5A]">
                  Joined a Fitness & Community Group
                </p>
              </div>

              <div className="relative">
                <Image
                  src="/Layer 99.svg"
                  alt="arrow"
                  width={120}
                  height={120}
                  className="absolute -left-24 -top-10"
                />
                <div className="w-[220px] h-[280px] rounded-xl overflow-hidden">
                  <Image
                    src="/Rectangle 40853.svg"
                    alt="Adeel"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Noura */}
            <div
              ref={(el) => el && cardsRef.current.push(el)}
              className="relative flex items-center gap-10"
            >
              <div className="max-w-md">
                <p className="text-xl text-[#1B1B1B] mb-6">
                  It feels safe because you meet through shared interests.
                </p>
                <p className="font-medium">Noura, UAE</p>
                <p className="text-[#5A5A5A]">Community Member</p>
              </div>

              <div className="relative">
                <Image
                  src="/Layer 100.svg"
                  alt="arrow"
                  width={120}
                  height={120}
                  className="absolute -left-24 bottom-0"
                />
                <div className="w-[220px] h-[220px] rounded-full overflow-hidden">
                  <Image
                    src="/Rectangle 40854.svg"
                    alt="Noura"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              ref={(el) => el && cardsRef.current.push(el)}
              className="relative"
            >
              <Image
                src="/Layer 101.svg"
                alt="arrow"
                width={120}
                height={120}
                className="absolute -right-24 top-20"
              />

              {/* Top Image */}
              <div className="w-[260px] h-[260px] rounded-xl overflow-hidden mb-12 ml-auto">
                <Image
                  src="/Rectangle 40855.svg"
                  alt="Sara"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="max-w-md text-right">
                <p className="text-xl text-[#1B1B1B] mb-6">
                  The events are what make this different. From art meetups to
                  group dinners, everything is built around real activities. You
                  meet people naturally.
                </p>
                <p className="font-medium">Sara, London</p>
                <p className="text-[#5A5A5A]">Event Host</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
