"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const OfferSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4); // lg
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2); // sm
      } else {
        setCardsPerView(1); // mobile
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const benefits = [
    {
      title: "LinkedIn",
      subtitle: "Tobi Oluwole",
      value: "LINKEDIN CREATOR & LINKEDIN",
      image: "/link.jpg",
    },
    {
      title: "Microsoft & Meta",
      subtitle: "Georgia Lewis Anderson",
      value: "AI CONSULTANT",
      image: "/geo.jpg",
    },
    {
      title: "OpenAI",
      subtitle: "Zack Kass",
      value: "EX-GTM AT OPENAI (CHATGPT)",
      image: "/zack.jpg",
    },
    {
      title: "Wikipedia",
      subtitle: "Jimmy Wales",
      value: "FOUNDER OF WIKIPEDIA",
      image: "/wiki.jpg",
    },
    {
      title: "YouTube",
      subtitle: "Steve Chen",
      value: "FOUNDER OF YOUTUBE",
      image: "/steve.jpg",
    },
  ];

  const totalSlides = Math.ceil(benefits.length / cardsPerView);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      setCurrentSlide(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    } else {
      setCurrentSlide(totalSlides - 1); // Loop to end
    }
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = (video: HTMLVideoElement | null) => {
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <section className="relative w-full py-24 lg:py-12 overflow-hidden bg-black">
      {/* Grid pattern overlay - same as hero */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* What You'll Get Section */}
        <div className="mb-24 lg:mb-2">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <span className="px-4 py-1.5 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-sm font-medium text-orange-300 backdrop-blur-sm">
                The Faculty{" "}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-clash">
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Meet Your Instructors{" "}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Learn directly from the founder of Wikipedia, Waze, Youtube,
              Shazam and more.
            </p>
          </div>

          {/* Benefits Slider */}
          <div className="relative mb-16">
            {/* Slider Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                style={{
                  transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
                  willChange: "transform",
                }}
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] px-3"
                  >
                    <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all">
                      <div className="relative z-10">
                        {/* Image */}
                        <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-orange-400/20 to-amber-500/20 border border-orange-500/30 mb-4">
                          <Image
                            src={benefit.image}
                            alt={benefit.title}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-medium text-white mb-1 font-clash">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-2">
                          {benefit.subtitle}
                        </p>
                        <p className="text-xs text-orange-400 font-semibold">
                          {benefit.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {benefits.length > cardsPerView && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-gray-700/50 flex items-center justify-center hover:border-orange-500/50 hover:scale-110 transition-all duration-300 z-20 shadow-lg"
                  aria-label="Previous slide"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-gray-700/50 flex items-center justify-center hover:border-orange-500/50 hover:scale-110 transition-all duration-300 z-20 shadow-lg"
                  aria-label="Next slide"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {benefits.length > cardsPerView && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                      currentSlide === index
                        ? "bg-orange-500 w-8"
                        : "bg-gray-600 hover:bg-gray-500 w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
