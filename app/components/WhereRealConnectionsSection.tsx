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
      className="relative min-h-screen bg-black flex md:pb-[50px] items-center justify-center"
    >
      {/* Title Text */}
      <h2 className="absolute top-5 left-1/2 transform -translate-x-1/2 text-white text-4xl md:text-4xl font-clash font-medium text-center z-30">
        Where real connections come to life
      </h2>

      <div className="relative w-full max-w-6xl md:mt-[80px] h-[80vh]">
        {/* HERO PORTRAIT IMAGE */}
        <div
          ref={heroRef}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="relative w-[387px] h-[480px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Rectangle 40820.svg"
              alt="Hero"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>

        {/* COLLAGE */}
        <div ref={collageRef} className="absolute inset-0 z-10">
          {/* example images – positions simple rakhe */}
          <CollageImage
            src="/Rectangle 40836.svg"
            style={{ top: "0%", left: "2%" }}
          />
          <CollageImage
            src="/Rectangle 40838.svg"
            style={{ top: "37%", left: "0%" }}
          />
          <CollageImage
            src="/Rectangle 40839.svg"
            style={{ top: "75%", left: "2%" }}
          />
          <CollageImage
            src="/Rectangle 40837.svg"
            style={{ top: "5%", left: "16%" }}
          />
          <CollageImage
            src="/Rectangle 40840.svg"
            style={{ top: "65%", left: "16%" }}
          />
          <CollageImage
            src="/Rectangle 40841.svg"
            style={{ top: "15%", left: "30%" }}
          />
          <CollageImage
            src="/Rectangle 40842.svg"
            style={{ top: "55%", left: "30%" }}
          />
          {/* right */}

          <CollageImage
            src="/Rectangle 40847.svg"
            style={{ top: "0%", right: "2%" }}
          />
          <CollageImage
            src="/Rectangle 40848.svg"
            style={{ top: "37%", right: "0%" }}
          />
          <CollageImage
            src="/Rectangle 40849.svg"
            style={{ top: "75%", right: "2%" }}
          />
          <CollageImage
            src="/Rectangle 40843.svg"
            style={{ top: "5%", right: "16%" }}
          />
          <CollageImage
            src="/Rectangle 40846.svg"
            style={{ top: "65%", right: "16%" }}
          />
          <CollageImage
            src="/Rectangle 40844.svg"
            style={{ top: "15%", right: "30%" }}
          />
          <CollageImage
            src="/Rectangle 40845.svg"
            style={{ top: "55%", right: "30%" }}
          />
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
      className="absolute w-[130px] h-[160px] rounded-xl overflow-hidden"
      style={style}
    >
      <Image src={src} alt="" fill className="object-cover" />
    </div>
  );
}
