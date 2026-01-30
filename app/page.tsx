"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const collageSectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Image paths - using hero.png as placeholder for now, user can change later
  const images = [
    { src: "/hero.png", isCentral: true },
    { src: "/hero.png", isCentral: false, position: "top-left" },
    { src: "/hero.png", isCentral: false, position: "top-middle-left" },
    { src: "/hero.png", isCentral: false, position: "top-middle-right" },
    { src: "/hero.png", isCentral: false, position: "top-right" },
    { src: "/hero.png", isCentral: false, position: "middle-left-1" },
    { src: "/hero.png", isCentral: false, position: "middle-left-2" },
    { src: "/hero.png", isCentral: false, position: "middle-right-1" },
    { src: "/hero.png", isCentral: false, position: "middle-right-2" },
    { src: "/hero.png", isCentral: false, position: "bottom-left-1" },
    { src: "/hero.png", isCentral: false, position: "bottom-left-2" },
    { src: "/hero.png", isCentral: false, position: "bottom-middle" },
    { src: "/hero.png", isCentral: false, position: "bottom-right-1" },
    { src: "/hero.png", isCentral: false, position: "bottom-right-2" },
  ];

  useEffect(() => {
    if (!collageSectionRef.current) return;

    const section = collageSectionRef.current;
    const imageElements = imageRefs.current.filter(Boolean) as HTMLDivElement[];
    const totalImages = imageElements.length;

    if (totalImages === 0) return;

    // Calculate scroll distance - each image gets 300px of scroll
    const scrollDistance = totalImages * 300;

    // Pin the section
    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${scrollDistance}`,
      pin: true,
      pinSpacing: true,
    });

    // Create flip animations for each image
    imageElements.forEach((imgEl, index) => {
      // Find the flip-card element inside
      const flipCard = imgEl.querySelector(".flip-card") as HTMLElement;
      if (!flipCard) return;

      // Set initial state - first image shows front, others show back
      const initialRotation = index === 0 ? 0 : 180;
      gsap.set(flipCard, {
        rotationY: initialRotation,
        transformStyle: "preserve-3d",
      });

      // Calculate when this image should flip
      const startProgress = index / totalImages;
      const endProgress = (index + 1) / totalImages;

      // Create scroll trigger for this image flip
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress >= startProgress && progress <= endProgress) {
            // Calculate rotation based on progress within this image's range
            const localProgress =
              (progress - startProgress) / (endProgress - startProgress);
            const rotation = 180 - localProgress * 180;
            gsap.set(flipCard, { rotationY: rotation });
          } else if (progress < startProgress) {
            // Before this image's turn - show back (except first image)
            gsap.set(flipCard, { rotationY: index === 0 ? 0 : 180 });
          } else if (progress > endProgress) {
            // After this image's turn - show front
            gsap.set(flipCard, { rotationY: 0 });
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.png')",
          }}
        />

        {/* Background Overlay (Heart/Decorative Pattern) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Background.png')",
          }}
        />

        {/* Black Gradient Overlay at Top (for Navbar area) */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-[5]" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          {/* NAVBAR */}
          <header className="flex items-center md:mt-5 justify-between px-6 py-5 md:px-24">
            {/* Logo - White circle with line through it */}
            <Link href={"/"} className="flex items-center ml-20">
              <Image src={"/Layer_1.svg"} width={70} height={70} alt="logo" />
            </Link>

            {/* Nav Links */}
            <nav className="hidden gap-6 md:text-[14px] font-semibold uppercase tracking-wide text-[#F5F2ED] md:flex lg:gap-8">
              <a className="hover:opacity-80 transition-opacity" href="#">
                ABOUT
              </a>
              <a className="hover:opacity-80 transition-opacity" href="#">
                ABOUT COMMUNITY
              </a>
              <a className="hover:opacity-80 transition-opacity" href="#">
                ABOUT EVENT
              </a>
              <a className="hover:opacity-80 transition-opacity" href="#">
                ABOUT MATCH MAKING
              </a>
              <a className="hover:opacity-80 transition-opacity" href="#">
                CONTACT US
              </a>
            </nav>
          </header>

          {/* HERO CENTER */}
          <div className="flex flex-1 items-center justify-center px-6 text-start">
            <div className="max-w-6xl md:mt-10">
              <h1 className="mb-10 font-clash text-4xl font-medium leading-tight text-[#F5F2ED] md:text-6xl lg:text-8xl">
                The most welcoming way to date
              </h1>

              {/* Buttons */}
              <div className="flex flex-wrap justify-start gap-4">
                <button
                  className="rounded-full px-8 py-2.5 text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90"
                  style={{
                    background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                  }}
                >
                  Download for iOS
                </button>

                <button
                  className="rounded-full px-8 py-2.5 text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90"
                  style={{
                    background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                  }}
                >
                  Download for Android
                </button>
              </div>
            </div>
          </div>

          {/* FOOTNOTE */}
          <div className="px-6 pb-6 text-center md:text-[16px] md:-mb-4 text-white opacity-70 md:px-12">
            Names are altered, images are illustrative and depict models:
            Persons in videos are influencers, compensated by Hily.
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="bg-[#f5f5f0] py-16 px-6 md:py-18 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-medium text-[#2F5D50] md:text-3xl">
            Who we are
          </h2>
          <h3 className="mb-6 font-clash text-3xl font-medium text-[#1B1B1B] md:text-4xl lg:text-5xl">
            A Social App for Real People
          </h3>
          <p className="text-base leading-relaxed text-[#5A5A5A] md:text-xl">
            Circle Society is designed to help you build meaningful connections
            — through interest-based communities, local events, and thoughtful
            interactions. No pretense, no pressure — just authentic social
            experiences.
          </p>
        </div>
      </section>

      {/* EASY AND SAFE FEATURES SECTION */}
      <section className="py-16 px-6 bg-[#fbead0] md:py-24 md:px-12 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Background-grey.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="mx-auto max-w-6xl relative z-10">
          <h2 className="mb-4 text-center font-clash text-2xl font-medium text-[#1B1B1B] md:text-5xl">
            Easy and safe features
          </h2>
          <h2 className="mb-4 text-center font-clash text-2xl font-medium text-[#1B1B1B] md:text-5xl">
            of The Circle Society app
          </h2>

          {/* Feature Cards */}
          <div className="grid gap-8 md:grid-cols-3 md:gap-6 md:mt-20 lg:gap-8">
            {/* Feature 1: Community Groups */}
            <div className="text-center">
              <div className="mb-6 flex justify-start">
                <div>
                  <Image
                    src="/Dating on POF.svg"
                    alt="Community Groups"
                    width={210}
                    height={210}
                    className="mx-auto"
                  />
                </div>
              </div>
              <h4 className="mb-3 font-clash text-xl md:text-3xl text-start font-medium text-[#1B1B1B]">
                Community Groups
              </h4>
              <p className="text-sm leading-relaxed w-[80%] text-start text-[#5A5A5A] md:text-[22px]">
                Join groups based on your passions — from fitness to faith, food
                to family.
              </p>
            </div>

            {/* Feature 2: Events You'll Love */}
            <div className="text-center">
              <div className="mb-6 flex justify-start">
                <div>
                  <Image
                    src="/For our anniversary, this fool got me a card that read, 'You're the best thing I've ever found on the Internet._'.svg"
                    alt="Events You'll Love"
                    width={290}
                    height={290}
                    className="mx-auto"
                  />
                </div>
              </div>
              <h4 className="mb-3 font-clash text-xl md:text-3xl text-start font-medium text-[#1B1B1B]">
                Events You'll Love
              </h4>
              <p className="text-sm leading-relaxed w-[80%] text-start text-[#5A5A5A] md:text-[22px]">
                Find and create local meetups and experiences that matter.
              </p>
            </div>

            {/* Feature 3: Match & Connect */}
            <div className="text-center">
              <div className="mb-6 flex justify-start">
                <div>
                  <Image
                    src="/pof_illustration_heart_hi.webp.svg"
                    alt="Match & Connect"
                    width={340}
                    height={340}
                    className="mx-auto "
                  />
                </div>
              </div>
              <h4 className="mb-3 font-clash text-xl md:text-3xl text-start font-medium text-[#1B1B1B]">
                Match & Connect
              </h4>
              <p className="text-sm leading-relaxed w-[80%] text-start text-[#5A5A5A] md:text-[22px]">
                Discover people based on shared interests, not superficial
                swipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE REAL CONNECTIONS COME TO LIFE SECTION */}
      <section
        ref={collageSectionRef}
        className="bg-gray-800 py-16 px-6 md:py-24 md:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-normal text-white md:text-4xl lg:text-5xl">
            Where real connections come to life
          </h2>

          {/* Image Collage with Flip Animation */}
          <div className="relative mx-auto max-w-5xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              {/* Central Image */}
              {images
                .filter((img) => img.isCentral)
                .map((img, idx) => (
                  <div
                    key={idx}
                    ref={(el) => {
                      imageRefs.current[0] = el;
                    }}
                    className="absolute inset-0"
                    style={{ perspective: "1000px" }}
                  >
                    <div
                      className="flip-card h-full w-full"
                      style={{
                        transformStyle: "preserve-3d",
                        position: "relative",
                      }}
                    >
                      {/* Front of card (image) */}
                      <div
                        className="absolute inset-0 rounded-lg overflow-hidden"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(0deg)",
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={img.src}
                            alt="Central"
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      </div>
                      {/* Back of card (placeholder) */}
                      <div
                        className="absolute inset-0 rounded-lg"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                          background:
                            "linear-gradient(to bottom right, #4b5563, #1f2937)",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}

              {/* Surrounding Images */}
              <div className="absolute inset-0 p-4 md:p-6">
                <div className="relative h-full w-full">
                  {images
                    .filter((img) => !img.isCentral)
                    .map((img, idx) => {
                      const positions: Record<
                        string,
                        {
                          top?: string;
                          left?: string;
                          right?: string;
                          bottom?: string;
                          width: string;
                          height: string;
                        }
                      > = {
                        "top-left": {
                          top: "0%",
                          left: "0%",
                          width: "20%",
                          height: "25%",
                        },
                        "top-middle-left": {
                          top: "0%",
                          left: "25%",
                          width: "18%",
                          height: "22%",
                        },
                        "top-middle-right": {
                          top: "5%",
                          right: "25%",
                          width: "15%",
                          height: "20%",
                        },
                        "top-right": {
                          top: "0%",
                          right: "0%",
                          width: "18%",
                          height: "25%",
                        },
                        "middle-left-1": {
                          top: "30%",
                          left: "0%",
                          width: "20%",
                          height: "22%",
                        },
                        "middle-left-2": {
                          top: "55%",
                          left: "5%",
                          width: "18%",
                          height: "20%",
                        },
                        "middle-right-1": {
                          top: "35%",
                          right: "5%",
                          width: "15%",
                          height: "18%",
                        },
                        "middle-right-2": {
                          top: "25%",
                          right: "20%",
                          width: "18%",
                          height: "25%",
                        },
                        "bottom-left-1": {
                          top: "75%",
                          left: "0%",
                          width: "22%",
                          height: "25%",
                        },
                        "bottom-left-2": {
                          top: "70%",
                          left: "25%",
                          width: "18%",
                          height: "20%",
                        },
                        "bottom-middle": {
                          top: "80%",
                          left: "45%",
                          width: "15%",
                          height: "20%",
                        },
                        "bottom-right-1": {
                          top: "75%",
                          right: "20%",
                          width: "18%",
                          height: "22%",
                        },
                        "bottom-right-2": {
                          top: "70%",
                          right: "0%",
                          width: "20%",
                          height: "25%",
                        },
                      };

                      const pos = positions[img.position || ""] || {};

                      return (
                        <div
                          key={idx}
                          ref={(el) => {
                            imageRefs.current[idx + 1] = el;
                          }}
                          className="absolute"
                          style={{
                            ...pos,
                            perspective: "1000px",
                          }}
                        >
                          <div
                            className="flip-card h-full w-full rounded-lg overflow-hidden"
                            style={{
                              transformStyle: "preserve-3d",
                              position: "relative",
                            }}
                          >
                            {/* Front of card (image) */}
                            <div
                              className="absolute inset-0 rounded-lg overflow-hidden"
                              style={{
                                backfaceVisibility: "hidden",
                                transform: "rotateY(0deg)",
                              }}
                            >
                              <div className="relative w-full h-full">
                                <Image
                                  src={img.src}
                                  alt={`Image ${idx + 1}`}
                                  fill
                                  className="object-cover"
                                  unoptimized
                                />
                              </div>
                            </div>
                            {/* Back of card (placeholder) */}
                            <div
                              className="absolute inset-0 rounded-lg"
                              style={{
                                backfaceVisibility: "hidden",
                                transform: "rotateY(180deg)",
                                background:
                                  "linear-gradient(to bottom right, #4b5563, #1f2937)",
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="bg-[#2F5D50] py-16 px-6 md:py-14 md:px-0">
        <div className="mx-auto max-w-full">
          <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {/* Stat 1: Downloads */}
            <div className="text-center">
              <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-5xl">
                10,000+
              </div>
              <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-5xl">
                downloads
              </div>
              <p className="text-sm font-normal leading-relaxed text-white opacity-90 md:text-base">
                Growing community across cities and interests.
              </p>
            </div>

            {/* Stat 2: Active Communities */}
            <div className="text-center">
              <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-5xl">
                100+
              </div>
              <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-5xl">
                Active communities
              </div>
              <p className="text-sm font-normal leading-relaxed text-white opacity-90 md:text-base">
                From social meetups to lifestyle-based groups.
              </p>
            </div>

            {/* Stat 3: Daily Posts */}
            <div className="text-center">
              <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-5xl">
                100,000+
              </div>
              <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-5xl">
                Daily Posts
              </div>
              <p className="text-sm font-normal leading-relaxed text-white opacity-90 md:text-base">
                Designed to move beyond screens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD APP SECTION */}
      <section className="bg-[#f5f5f0] py-16 px-6 md:py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-normal text-gray-900 md:text-4xl lg:text-5xl">
            Download the App Now
          </h2>

          {/* Phone Mockups */}
          <div className="relative mb-12 flex justify-center">
            <div className="relative flex items-center justify-center gap-4 md:gap-8">
              {/* Left Phone */}
              <div className="relative z-10 w-32 transform md:w-48 lg:w-56">
                <div className="relative rounded-[2rem] bg-gray-900 p-2 shadow-2xl">
                  <div className="aspect-[9/19] rounded-[1.5rem] bg-white overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-b from-gray-100 to-gray-200"></div>
                  </div>
                </div>
              </div>

              {/* Middle Phone */}
              <div className="relative z-20 w-36 transform md:w-56 lg:w-64">
                <div className="relative rounded-[2rem] bg-gray-900 p-2 shadow-2xl">
                  <div className="aspect-[9/19] rounded-[1.5rem] bg-gray-800 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-b from-gray-700 to-gray-900"></div>
                  </div>
                </div>
              </div>

              {/* Right Phone */}
              <div className="relative z-10 w-32 transform md:w-48 lg:w-56">
                <div className="relative rounded-[2rem] bg-gray-900 p-2 shadow-2xl">
                  <div className="aspect-[9/19] rounded-[1.5rem] bg-white overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-b from-gray-50 to-gray-100"></div>
                  </div>
                </div>
              </div>

              {/* Golden Glow Effect */}
              <div
                className="absolute inset-0 -z-10 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, rgba(253, 224, 71, 0.1) 50%, transparent 100%)",
                }}
              ></div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-3 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 md:px-8 md:py-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm4.12-6.01c.19-.2.19-.52 0-.72l-4.24-4.24c-.2-.2-.52-.2-.72 0L5.57 11.72c-.19.2-.19.52 0 .72l4.24 4.24c.2.2.52.2.72 0l6.4-6.4zm-1.06 7.98l-2.27-2.27-8.49 8.49 10.76-6.22z" />
              </svg>
              Get it on Google Play
            </button>

            <button className="flex items-center gap-3 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 md:px-8 md:py-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.18 8.13 9.5 7.9c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.9c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Download on the App Store
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-[#f5f5f0] py-12 px-6 md:py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Social Media Icons - Row */}
          <div className="mb-8 flex flex-row gap-4">
            <a
              href="#"
              className="text-gray-700 transition hover:text-gray-900"
              aria-label="Instagram"
            >
              <Image
                src="/Item → Link → SVG.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
            <a
              href="#"
              className="text-gray-700 transition hover:text-gray-900"
              aria-label="Facebook"
            >
              <Image
                src="/Item → Link → SVG (1).svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </a>
            <a
              href="#"
              className="text-gray-700 transition hover:text-gray-900"
              aria-label="Twitter"
            >
              <Image
                src="/Item → Link → SVG (2).svg"
                alt="Twitter"
                width={20}
                height={20}
              />
            </a>
            <a
              href="#"
              className="text-gray-700 transition hover:text-gray-900"
              aria-label="LinkedIn"
            >
              <Image
                src="/Item → Link → SVG (3).svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
            <a
              href="#"
              className="text-gray-700 transition hover:text-gray-900"
              aria-label="YouTube"
            >
              <Image
                src="/Item → Link → SVG (4).svg"
                alt="YouTube"
                width={20}
                height={20}
              />
            </a>
          </div>
          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Legal Column */}
            <div>
              <h5 className="mb-3 text-sm font-medium text-gray-900">
                Legal
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Content Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Intellectual Property
                  </a>
                </li>
              </ul>
            </div>
            {/* Community Column */}
            <div>
              <h5 className="mb-3 text-sm font-medium text-gray-900">
                Community
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Downloads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Creators
                  </a>
                </li>
              </ul>
            </div>
            {/* Help Column */}
            <div>
              <h5 className="mb-3 text-sm font-medium text-gray-900">Help</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            {/* Company Column */}
            <div>
              <h5 className="mb-3 text-sm font-medium text-gray-900">
                Company
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
