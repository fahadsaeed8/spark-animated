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

  useEffect(() => {
    // Auto-scroll carousel every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Get the 3 visible images (previous, current, next)
  const getVisibleImages = () => {
    const prevIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    const nextIndex = (currentIndex + 1) % carouselImages.length;
    return [
      { src: carouselImages[prevIndex], isCenter: false },
      { src: carouselImages[currentIndex], isCenter: true },
      { src: carouselImages[nextIndex], isCenter: false },
    ];
  };

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 py-20">
      {/* Title Text */}
      <h2 className="absolute top-4 sm:top-5 left-1/2 transform -translate-x-1/2 text-white text-xl sm:text-2xl md:text-4xl font-clash font-medium text-center z-30 px-4">
        Where real connections come to life
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mt-20">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {getVisibleImages().map((item, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className={`flex-shrink-0 transition-all duration-1000 ease-in-out ${
                item.isCenter
                  ? "w-[200px] h-[280px] sm:w-[280px] sm:h-[400px] md:w-[350px] md:h-[500px] z-10"
                  : "w-[120px] h-[160px] sm:w-[160px] sm:h-[220px] md:w-[200px] md:h-[280px] opacity-70 z-0"
              }`}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-blue-500">
                <Image
                  src={item.src}
                  alt={`Connection ${index + 1}`}
                  fill
                  className="object-cover rounded-xl"
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
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
