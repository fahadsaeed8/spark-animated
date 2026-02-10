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

  const testimonials = [
    {
      name: "Adeel",
      location: "Dubai",
      role: "Joined a Fitness & Community Group",
      quote:
        "I didn't want another social app. I wanted people who actually show up. Circle Society helped me find a local community that meets weekly. It feels real, not fanced.",
      image: "/Rectangle 40853 (1).svg", // Update with correct testimonial image path
    },
    {
      name: "Noura",
      location: "Abu Dhabi",
      role: "Community Member",
      quote: "It feels safe because you meet through shared interests.",
      image: "/Rectangle 40853 (2).svg", // Update with correct testimonial image path
    },
    {
      name: "Sara",
      location: "London",
      role: "Event Host",
      quote:
        "The events are what make this different. From art meetups to group dinners, everything is built around real activities. You meet people naturally.",
      image: "/Rectangle 40853 (3).svg", // Update with correct testimonial image path
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#F5F2ED] py-20 px-4 sm:px-8 lg:px-24"
    >
      {/* Heading */}
      <div className="text-center mb-12 md:mb-20">
        <p className="text-lg tracking-wide font-medium text-[#5A5A5A] mb-2">
          Testimonials
        </p>
        <h2
          ref={headingRef}
          className="font-clash font-medium text-4xl md:text-5xl lg:text-6xl text-[#1B1B1B]"
        >
          Real Stories From Real People
        </h2>
      </div>

      {/* Mobile View - Single Column Testimonials */}
      <div className="md:hidden space-y-8 max-w-2xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="flex flex-col items-center text-center"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-2xl mb-4 w-full max-w-[280px] [&>span]:block [&>span]:w-full [&>span]:h-full [&>span>img]:block">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={280}
                height={280}
                className="w-full h-auto object-cover"
                style={{
                  border: "none",
                  outline: "none",
                  display: "block",
                }}
              />
            </div>
            {/* Name and Location */}
            <h3 className="font-semibold text-lg text-[#1B1B1B] mb-1">
              {testimonial.name}, {testimonial.location}
            </h3>
            {/* Role */}
            <p className="text-sm text-[#1B1B1B] mb-3">{testimonial.role}</p>
            {/* Quote */}
            <p className="text-base text-[#1B1B1B] leading-relaxed">
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop View - Hidden on Mobile */}
      <div className="hidden md:block">
        <div className="max-w-7xl flex mx-auto">
          <Image
            src={"/text.svg"}
            alt={"Frame"}
            width={400}
            height={400}
            className="w-full h-auto -mt-50 rounded-xl max-w-[400px] md:max-w-[400px]"
          />
          <Image
            src={"/Layer 99.svg"}
            alt={"Frame"}
            width={300}
            height={300}
            className="w-full -ml-10 h-auto rounded-xl max-w-[100px] md:max-w-[100px]"
          />
          <Image
            src={"/Rectangle 40853.svg"}
            alt={"Frame"}
            width={300}
            height={300}
            className="w-full ml-5 h-auto rounded-xl max-w-[300] md:max-w-[300]"
          />
          <Image
            src={"/Frame 2131326919 (1).svg"}
            alt={"Frame"}
            width={300}
            height={300}
            className="w-full h-auto ml-10 mt-10 rounded-xl max-w-[400px] md:max-w-[400px]"
          />
        </div>
        {/* next */}
        <div className="max-w-7xl flex mx-auto">
          <Image
            src={"/save.svg"}
            alt={"Frame"}
            width={250}
            height={250}
            className="w-full h-auto mt-30 rounded-xl max-w-[250px] md:max-w-[250px]"
          />
          <Image
            src={"/Layer 101.svg"}
            alt={"Frame"}
            width={300}
            height={300}
            className="w-full -ml-20 -mt-30 h-auto rounded-xl max-w-[100px] md:max-w-[100px]"
          />
          <Image
            src={"/Rectangle 40854 (1).svg"}
            alt={"Frame"}
            width={900}
            height={900}
            className="w-full ml-5 -mt-65 h-auto max-w-[350px] md:max-w-[350px]"
          />
          <Image
            src={"/Rectangle 40855 (1).svg"}
            alt={"Frame"}
            width={300}
            height={300}
            className="w-full h-auto ml-10 -mt-10 rounded-xl max-w-[400px] md:max-w-[400px]"
          />
          <Image
            src={"/Layer 100.svg"}
            alt={"Frame"}
            width={300}
            height={300}
            className="w-full -ml-5 -mt-160 h-auto rounded-xl max-w-[100px] md:max-w-[100px]"
          />
        </div>
      </div>
    </section>
  );
}
