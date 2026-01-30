"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function HeroSection() {
  const heartBackgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heartBackgroundRef.current) return;

    // Continuous automatic animation - pulse/breathing effect
    const tl = gsap.timeline({ repeat: -1, ease: "power1.inOut" });
    
    tl.to(heartBackgroundRef.current, {
      opacity: 0.6,
      scale: 1.05,
      duration: 3,
    })
    .to(heartBackgroundRef.current, {
      opacity: 1,
      scale: 1,
      duration: 3,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
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
        ref={heartBackgroundRef}
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
            <div 
              className="animate-rotate"
              style={{
                animation: 'rotate 10s linear infinite',
                display: 'inline-block',
                transformOrigin: 'center center'
              }}
            >
              <Image 
                src={"/Layer_1.svg"} 
                width={70} 
                height={70} 
                alt="logo"
              />
            </div>
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
  );
}

