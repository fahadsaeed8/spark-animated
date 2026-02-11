"use client";

import { useEffect, useState, useRef } from "react";
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
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [hasMoved, setHasMoved] = useState(false);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Swipe/Drag handlers
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setDragStart(clientX);
    setDragOffset(0);
    setHasMoved(false);
    setAutoPlayEnabled(false);
    if (autoPlayTimeoutRef.current) {
      clearInterval(autoPlayTimeoutRef.current);
      autoPlayTimeoutRef.current = null;
    }
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - dragStart;
    if (Math.abs(offset) > 5) {
      setHasMoved(true);
    }
    const maxOffset = 300;
    const dampedOffset = Math.max(-maxOffset, Math.min(maxOffset, offset));
    setDragOffset(dampedOffset);
  };

  const handleEnd = () => {
    if (!isDragging) return;

    const threshold = 50;
    const swipeThreshold = 80;

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset < -swipeThreshold) {
        // Swipe left (next image)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      } else if (dragOffset > swipeThreshold) {
        // Swipe right (previous image)
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - 1 + carouselImages.length) % carouselImages.length,
        );
      }
    }

    setDragOffset(0);
    setIsDragging(false);
    setHasMoved(false);

    // Resume auto-play after 2 seconds
    setTimeout(() => {
      setAutoPlayEnabled(true);
    }, 1500);
  };

  // Handle click on side images to bring them to center
  const handleImageClick = (position: string) => {
    // Only handle clicks on side images, not center
    if (position === "left") {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + carouselImages.length) % carouselImages.length,
      );
      setAutoPlayEnabled(false);
      if (autoPlayTimeoutRef.current) {
        clearInterval(autoPlayTimeoutRef.current);
        autoPlayTimeoutRef.current = null;
      }
      // Resume auto-play after 2 seconds
      setTimeout(() => {
        setAutoPlayEnabled(true);
      }, 2000);
    } else if (position === "right") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      setAutoPlayEnabled(false);
      if (autoPlayTimeoutRef.current) {
        clearInterval(autoPlayTimeoutRef.current);
        autoPlayTimeoutRef.current = null;
      }
      // Resume auto-play after 2 seconds
      setTimeout(() => {
        setAutoPlayEnabled(true);
      }, 2000);
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
    }
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  // Global mouse events for better drag experience
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        handleMove(e.clientX);
      };

      const handleGlobalMouseUp = () => {
        handleEnd();
      };

      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleGlobalMouseMove);
        window.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  useEffect(() => {
    // Very fast continuous auto-scroll carousel every 1 second
    if (autoPlayEnabled) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      }, 1000);

      autoPlayTimeoutRef.current = interval as unknown as NodeJS.Timeout;
    } else {
      if (autoPlayTimeoutRef.current) {
        clearInterval(autoPlayTimeoutRef.current);
        autoPlayTimeoutRef.current = null;
      }
    }

    return () => {
      if (autoPlayTimeoutRef.current) {
        clearInterval(autoPlayTimeoutRef.current);
      }
    };
  }, [autoPlayEnabled]);

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
        Where real <span className="text-[#BF822E]">connections </span>come to
        lifes
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl md:mt-20 overflow-hidden">
        <div
          className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 relative cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
        >
          {getVisibleImages().map((item, index) => {
            // Calculate transform based on drag offset - simple sliding only
            let transformX = 0;
            if (isDragging && dragOffset !== 0) {
              if (item.position === "center") {
                transformX = dragOffset;
              } else if (item.position === "left") {
                transformX =
                  dragOffset > 0 ? dragOffset * 0.6 : dragOffset * 0.3;
              } else if (item.position === "right") {
                transformX =
                  dragOffset < 0 ? dragOffset * 0.6 : dragOffset * 0.3;
              }
            }

            return (
              <div
                key={`${currentIndex}-${index}`}
                className={`flex-shrink-0 transition-all duration-300 ease-out ${
                  item.isCenter
                    ? "w-[200px] h-[280px] sm:w-[280px] sm:h-[400px] md:w-[350px] md:h-[500px] z-10"
                    : "w-[120px] h-[160px] sm:w-[160px] sm:h-[220px] md:w-[200px] md:h-[280px] opacity-70 z-0 cursor-pointer"
                }`}
                style={{
                  transform: isDragging
                    ? `translateX(${transformX}px)`
                    : undefined,
                }}
                onClick={(e) => {
                  // Only handle click if it's not a drag (no movement detected)
                  if (!hasMoved && Math.abs(dragOffset) < 10) {
                    handleImageClick(item.position);
                  }
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={item.src}
                    alt={`Connection ${index + 1}`}
                    fill
                    className="object-cover rounded-xl pointer-events-none"
                    priority={item.isCenter}
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
