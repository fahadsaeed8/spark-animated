"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhereRealConnectionsSection() {
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

  return (
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
  );
}

