"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/Rectangle 40856.svg",
  "/Rectangle 40857.svg",
  "/Rectangle 40858.svg",
  "/Rectangle 40859.svg",
  "/Rectangle 40860.svg",
  "/Rectangle 40862.svg",
  "/Rectangle 40864.svg",
  "/Rectangle 40865.svg",
  "/Rectangle 40866.svg",
  "/Rectangle 40867.svg",
  "/Rectangle 40868.svg",
  "/Rectangle 40820.svg",
];

export default function WhereRealConnectionsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1200);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const getPosition = (index: number) => {
    const diff = index - current;

    if (diff === 0) return "center";
    if (diff === -1 || diff === images.length - 1) return "left";
    if (diff === 1 || diff === -images.length + 1) return "right";

    return "hidden";
  };

  return (
    <section className="relative py-0 md:py-20 min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden">
      <h2 className="absolute top-10 left-1/2 -translate-x-1/2 text-white text-3xl md:text-5xl font-clash text-center">
        Where real <span className="text-[#BF822E]">connections</span> come to
        life
      </h2>

      <div className="relative w-full mt-0 md:mt-40 max-w-6xl h-[500px] flex items-center justify-center">
        {images.map((src, index) => {
          const position = getPosition(index);

          return (
            <div
              key={index}
              onClick={() =>
                position === "left"
                  ? prevSlide()
                  : position === "right"
                    ? nextSlide()
                    : null
              }
              className={`
                absolute transition-all duration-700 ease-in-out
                ${position === "center" && "z-30 scale-100 translate-x-0 opacity-100"}
                ${position === "left" && "-translate-x-[360px] scale-90 opacity-70 z-20 cursor-pointer"}
                ${position === "right" && "translate-x-[360px] scale-90 opacity-70 z-20 cursor-pointer"}
                ${position === "hidden" && "opacity-0 scale-50 z-0"}
              `}
            >
              {/* 👇 Height difference applied here */}
              <div
                className={`
                  relative transition-all duration-700
                  ${
                    position === "center"
                      ? "w-[250px] h-[350px] md:w-[350px] md:h-[500px]"
                      : "w-[220px] h-[300px] md:w-[320px] md:h-[380px]"
                  }
                `}
              >
                <Image
                  src={src}
                  alt="carousel"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
