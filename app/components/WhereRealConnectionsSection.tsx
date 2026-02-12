"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// All available images for the carousel
const carouselImages = [
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [hasMoved, setHasMoved] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideOffset, setSlideOffset] = useState(0);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(currentIndex);

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
        const nextIndex = (currentIndex + 1) % carouselImages.length;
        smoothTransition(nextIndex);
      } else if (dragOffset > swipeThreshold) {
        // Swipe right (previous image)
        const prevIndex =
          (currentIndex - 1 + carouselImages.length) % carouselImages.length;
        smoothTransition(prevIndex);
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
      const prevIndex =
        (currentIndex - 1 + carouselImages.length) % carouselImages.length;
      smoothTransition(prevIndex);
      // Temporarily pause auto-play
      setAutoPlayEnabled(false);
      if (autoPlayTimeoutRef.current) {
        clearInterval(autoPlayTimeoutRef.current);
        autoPlayTimeoutRef.current = null;
      }
      // Resume auto-play after 1.5 seconds
      setTimeout(() => {
        setAutoPlayEnabled(true);
      }, 1500);
    } else if (position === "right") {
      const nextIndex = (currentIndex + 1) % carouselImages.length;
      smoothTransition(nextIndex);
      // Temporarily pause auto-play
      setAutoPlayEnabled(false);
      if (autoPlayTimeoutRef.current) {
        clearInterval(autoPlayTimeoutRef.current);
        autoPlayTimeoutRef.current = null;
      }
      // Resume auto-play after 1.5 seconds
      setTimeout(() => {
        setAutoPlayEnabled(true);
      }, 1500);
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

  // Smooth transition function
  const smoothTransition = (newIndex: number) => {
    if (isAnimating) return; // Prevent multiple animations

    // Set animation state first
    setIsAnimating(true);
    setSlideOffset(450); // Start from right

    // Update index after a tiny delay to ensure animation state is set
    setTimeout(() => {
      setCurrentIndex(newIndex);

      // Animate to center position
      setTimeout(() => {
        setSlideOffset(0);
      }, 20);
    }, 10);

    // Reset animation after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  // Update ref whenever currentIndex changes
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    // Very fast continuous auto-scroll carousel every 1 second
    if (autoPlayEnabled) {
      const interval = setInterval(() => {
        const nextIndex = (currentIndexRef.current + 1) % carouselImages.length;
        smoothTransition(nextIndex);
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
            // Calculate transform based on drag offset - only for dragging
            let transformX = 0;
            let imageTransformX = 0;
            let imageOpacity = 1;

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
            } else if (isAnimating && !isDragging) {
              // Smooth slide animation - only center image slides, frames stay static
              if (item.position === "center") {
                // Center image slides in from right (450px to 0px)
                imageTransformX = slideOffset;
              }
              // Left and right images stay static (no animation)
            }

            return (
              <div
                key={`${item.position}-${item.src}`}
                className={`flex-shrink-0 ${
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
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl transition-transform duration-700 ease-in-out"
                  style={{
                    transform:
                      imageTransformX !== 0
                        ? `translateX(${imageTransformX}px)`
                        : undefined,
                    opacity: imageOpacity,
                  }}
                >
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
