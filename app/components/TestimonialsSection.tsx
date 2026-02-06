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
      className="bg-[#F5F2ED] py-20"
    >
      <div className="w-full">
        <div className="w-full h-full">
          <Image
            src={"/Frame 2131326897 (1).svg"}
            alt={"Frame"}
            width={1900}
            height={1900}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
