"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// All available images for the carousel
const carouselImages = [
  "/Rectangle 40836.svg",
  "/Rectangle 40837.svg",
  "/Rectangle 40838.svg",
  "/Rectangle 40839.svg",
  "/Rectangle 40840.svg",
  "/Rectangle 40841.svg",
  "/Rectangle 40842.svg",
  "/Rectangle 40843.svg",
  "/Rectangle 40846.svg",
  "/Rectangle 40847.svg",
  "/Rectangle 40848.svg",
  "/Rectangle 40849.svg",
  "/Rectangle 40820.svg",
];

export default function WhereRealConnectionsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Auto-scroll carousel every 4 seconds for smoother professional feel
    const interval = setInterval(() => {
      setIsTransitioning(true);
      // Smooth slide animation like arrow button carousel
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        // Reset transition after animation completes
        setTimeout(() => {
          setIsTransitioning(false);
        }, 1600); // Match transition duration
      }, 100);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Get the 3 visible images (previous, current, next)
  const getVisibleImages = () => {
    const prevIndex =
      (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    const nextIndex = (currentIndex + 1) % carouselImages.length;
    return [
      { src: carouselImages[prevIndex], isCenter: false, position: "left" },
      { src: carouselImages[currentIndex], isCenter: true, position: "center" },
      { src: carouselImages[nextIndex], isCenter: false, position: "right" },
    ];
  };

  return (
    <section className="relative md:min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 py-30 md:py-20">
      {/* Title Text */}
      <h2 className="absolute top-4 sm:top-15 left-1/2 transform -translate-x-1/2 text-white w-[80%] md:w-full text-2xl md:text-4xl font-clash font-medium text-center z-30 md:px-4">
        Where real connections come to life
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl md:mt-20 overflow-hidden">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 relative">
          {getVisibleImages().map((item, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className={`flex-shrink-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                item.isCenter
                  ? "w-[200px] h-[280px] sm:w-[280px] sm:h-[400px] md:w-[350px] md:h-[500px] z-10 scale-100"
                  : "w-[120px] h-[160px] sm:w-[160px] sm:h-[220px] md:w-[200px] md:h-[280px] opacity-70 z-0 scale-90"
              } ${
                isTransitioning
                  ? item.position === "left"
                    ? "-translate-x-8 opacity-30 scale-85"
                    : item.position === "right"
                      ? "translate-x-8 opacity-30 scale-85"
                      : "scale-105"
                  : ""
              }`}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={item.src}
                  alt={`Connection ${index + 1}`}
                  fill
                  className="object-cover rounded-xl transition-opacity duration-1000 ease-in-out"
                  priority={item.isCenter}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
