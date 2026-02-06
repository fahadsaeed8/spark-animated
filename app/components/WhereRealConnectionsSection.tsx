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
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !heroRef.current || !collageRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center",
        end: "+=1600",
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // initial states - collage starts much smaller for dramatic shrink effect on scroll up
    gsap.set(collageRef.current, {
      opacity: 0,
      scale: 0.4,
    });

    // Set initial margin-top to 0 for hero
    gsap.set(heroRef.current, {
      marginTop: "0px",
    });

    // Animate heading fade-in from top when section enters view
    if (headingRef.current) {
      gsap.set(headingRef.current, {
        opacity: 0,
        y: -30,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.to(headingRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        },
      });
    }

    // HERO → shrink & move center with margin-top during animation
    tl.to(heroRef.current, {
      scale: 0.35,
      y: "-10%",
      marginTop: "110px",
      ease: "none",
    });

    // COLLAGE → fade & expand (shrinks back to 0.6 when scrolling up)
    tl.to(
      collageRef.current,
      {
        opacity: 1,
        scale: 1,
        ease: "none",
      },
      "<+=0.2",
    );

    return () => {
      if (tl) {
        tl.kill();
      }
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === sectionRef.current) {
          t.kill();
        }
      });
      // Refresh ScrollTrigger after cleanup
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black flex md:pb-[50px] items-center justify-center px-4 sm:px-6"
    >
      {/* Title Text */}
      <h2
        ref={headingRef}
        className="absolute top-4 sm:top-5 left-1/2 transform -translate-x-1/2 text-white text-xl sm:text-2xl md:text-4xl font-clash font-medium text-center z-30 px-4"
      >
        Where real connections come to life
      </h2>

      <div className="relative w-full max-w-6xl md:mt-[80px] h-[60vh] sm:h-[70vh] md:h-[80vh]">
        {/* HERO PORTRAIT IMAGE */}
        <div
          ref={heroRef}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="relative w-[200px] h-[230px] sm:w-[280px] sm:h-[320px] md:w-[417px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl">
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
            style={{ top: "0%", left: "0%" }}
          />
          <CollageImage
            src="/Rectangle 40838.svg"
            style={{ top: "37%", left: "0%" }}
          />
          <CollageImage
            src="/Rectangle 40839.svg"
            style={{ top: "75%", left: "0%" }}
          />
          <CollageImage
            src="/Rectangle 40837.svg"
            style={{ top: "0%", left: "20%" }}
          />
          <CollageImage
            src="/Rectangle 40843.svg"
            style={{ top: "37%", left: "20%" }}
          />

          <CollageImage
            src="/Rectangle 40840.svg"
            style={{ top: "75%", left: "20%" }}
          />
          <CollageImage
            src="/Rectangle 40841.svg"
            style={{ top: "0%", left: "43.5%" }}
          />
          <CollageImage
            src="/Rectangle 40842.svg"
            style={{ top: "75%", left: "43.5%" }}
          />
          {/* right */}
          <CollageImage
            src="/Rectangle 40847.svg"
            style={{ top: "0%", right: "0%" }}
          />
          <CollageImage
            src="/Rectangle 40848.svg"
            style={{ top: "37%", right: "0%" }}
          />
          <CollageImage
            src="/Rectangle 40849.svg"
            style={{ top: "75%", right: "0%" }}
          />
          <CollageImage
            src="/Rectangle 40843.svg"
            style={{ top: "0%", right: "20%" }}
          />
          <CollageImage
            src="/Rectangle 40836.svg"
            style={{ top: "37%", right: "20%" }}
          />
          <CollageImage
            src="/Rectangle 40846.svg"
            style={{ top: "75%", right: "20%" }}
          />
          {/* <CollageImage
            src="/Rectangle 40844.svg"
            style={{ top: "15%", right: "30%" }}
          />
          <CollageImage
            src="/Rectangle 40845.svg"
            style={{ top: "55%", right: "30%" }}
          /> */}
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
      className="absolute w-[60px] h-[65px] sm:w-[90px] sm:h-[100px] md:w-[120px] md:h-[130px] lg:w-[150px] lg:h-[160px] rounded-xl overflow-hidden"
      style={style}
    >
      <Image src={src} alt="" fill className="object-cover" />
    </div>
  );
}
