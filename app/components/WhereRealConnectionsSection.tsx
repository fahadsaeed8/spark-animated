"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhereRealConnectionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !heroRef.current || !collageRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1600",
        scrub: true,
        pin: true,
      },
    });

    // initial states
    gsap.set(collageRef.current, {
      opacity: 0,
      scale: 0.9,
    });

    // HERO → shrink & move center
    tl.to(heroRef.current, {
      scale: 0.35,
      y: "-10%",
      ease: "none",
    });

    // COLLAGE → fade & open
    tl.to(
      collageRef.current,
      {
        opacity: 1,
        scale: 1,
        ease: "none",
      },
      "<+=0.2",
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black flex items-center justify-center"
    >
      {/* Title Text */}
      <h2 className="absolute top-15 left-1/2 transform -translate-x-1/2 text-white text-4xl md:text-4xl font-clash font-medium text-center z-30">
        Where real connections come to life
      </h2>

      <div className="relative w-full max-w-6xl md:mt-[80px] h-[80vh]">
        {/* HERO PORTRAIT IMAGE */}
        <div
          ref={heroRef}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="relative w-[320px] h-[480px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/hero.png"
              alt="Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* COLLAGE */}
        <div ref={collageRef} className="absolute inset-0 z-10 ">
          {/* example images – positions simple rakhe */}
          <CollageImage src="/hero.png" style={{ top: "0%", left: "0%" }} />
          <CollageImage src="/hero.png" style={{ top: "0%", right: "0%" }} />
          <CollageImage src="/hero.png" style={{ bottom: "0%", left: "5%" }} />
          <CollageImage src="/hero.png" style={{ bottom: "0%", right: "5%" }} />
          <CollageImage src="/hero.png" style={{ top: "35%", left: "20%" }} />
          <CollageImage src="/hero.png" style={{ top: "35%", right: "20%" }} />
          <CollageImage src="/hero.png" style={{ top: "35%", right: "30%" }} />
          <CollageImage src="/hero.png" style={{ top: "35%", right: "40%" }} />
          <CollageImage src="/hero.png" style={{ top: "35%", right: "50%" }} />
          <CollageImage src="/hero.png" style={{ top: "35%", left: "30%" }} />
          <CollageImage src="/hero.png" style={{ top: "35%", left: "40%" }} />
          <CollageImage src="/hero.png" style={{ top: "35%", left: "50%" }} />
          <CollageImage src="/hero.png" style={{ top: "35%", left: "60%" }} />
        </div>
      </div>
    </section>
  );
}

/* helper component */
function CollageImage({
  src,
  style,
}: {
  src: string;
  style: React.CSSProperties;
}) {
  return (
    <div
      className="absolute w-[220px] h-[160px] rounded-xl overflow-hidden"
      style={style}
    >
      <Image src={src} alt="" fill className="object-cover" />
    </div>
  );
}
