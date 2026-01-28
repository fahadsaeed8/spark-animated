"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const circleContainerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState(0); // 0: Home, 1: About, 2: Contact
  
  // Pages with different background images
  const pages = [
    {
      id: 0,
      title: "Home",
      bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80",
    },
    {
      id: 1,
      title: "About",
      bgImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80",
    },
    {
      id: 2,
      title: "Contact",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    },
  ];

  // Navigation System - Button + Scroll
  useEffect(() => {
    const rotationPerPage = 360 / pages.length; // 120 degrees per page
    const rotation = currentPage * rotationPerPage;
    
    if (circleContainerRef.current) {
      gsap.to(circleContainerRef.current, {
        rotationY: -rotation,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [currentPage]);

  // Scroll-based Navigation
  useEffect(() => {
    let scrollDelta = 0;
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    const scrollThreshold = 50; // Minimum scroll to change page

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      isScrolling = true;
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        scrollDelta = 0; // Reset after pause
      }, 300);

      scrollDelta += e.deltaY;
      
      // Change page on scroll threshold
      if (Math.abs(scrollDelta) >= scrollThreshold) {
        if (scrollDelta > 0) {
          // Scroll down - next page
          setCurrentPage((prev) => (prev + 1) % pages.length);
        } else {
          // Scroll up - previous page
          setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
        }
        scrollDelta = 0; // Reset after page change
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [pages.length]);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  // Cursor effect (desktop only)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          duration: 0.2,
        });
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.2,
        });
      }
    };

    const interactiveElements = document.querySelectorAll("button, a");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white relative min-h-screen w-screen overflow-hidden">
      {/* Dynamic Background Image */}
      <div 
        key={currentPage}
        className="fixed inset-0 z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url('${pages[currentPage].bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Navigation Buttons */}
      <div className="fixed top-8 left-8 z-50 flex flex-col gap-3">
        {pages.map((page, index) => (
          <button
            key={page.id}
            onClick={() => handlePageChange(index)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              currentPage === index
                ? "bg-white text-black shadow-lg scale-105"
                : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20"
            }`}
          >
            {page.title}
          </button>
        ))}
      </div>

      {/* Custom Cursor - Desktop Only */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed w-8 h-8 rounded-full border-2 border-white pointer-events-none z-50 mix-blend-difference"
        style={{
          left: "-16px",
          top: "-16px",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Circular Navigation Container */}
      <div 
        ref={circleContainerRef}
        className="fixed inset-0 flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          perspective: "2000px",
        }}
      >
        {/* Circle Background Indicator */}
        <div className="absolute w-[600px] h-[600px] border border-white/10 rounded-full pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
        </div>

        {/* Home Page - Position 0° */}
        <div 
          className="absolute w-screen h-screen flex items-center justify-center"
          style={{
            transform: "rotateY(0deg) translateZ(400px)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="max-w-6xl w-full px-4">
            <h1 className="text-7xl md:text-9xl font-bold mb-8 text-center">
              Digital Experiences
            </h1>
            <p className="text-2xl text-center text-white/70 mb-12">
              Welcome to our creative world
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Interactive", desc: "Engaging experiences" },
                { title: "Smooth", desc: "Fluid animations" },
                { title: "Modern", desc: "Cutting-edge design" },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/20 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Us Page - Position 120° */}
        <div 
          className="absolute w-screen h-screen flex items-center justify-center"
          style={{
            transform: "rotateY(120deg) translateZ(400px)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="max-w-4xl w-full px-4 text-center">
            <h2 className="text-7xl md:text-9xl font-bold mb-8">About Us</h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
              We are a creative agency dedicated to crafting exceptional digital experiences. 
              Our team combines innovation with expertise to deliver solutions that inspire and engage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="p-8 border border-white/20 rounded-lg">
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/70">
                  To create digital experiences that connect, inspire, and transform businesses.
                </p>
              </div>
              <div className="p-8 border border-white/20 rounded-lg">
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/70">
                  To be the leading creative force in digital innovation and design.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Page - Position 240° */}
        <div 
          className="absolute w-screen h-screen flex items-center justify-center"
          style={{
            transform: "rotateY(240deg) translateZ(400px)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="max-w-2xl w-full px-4">
            <h2 className="text-7xl md:text-9xl font-bold mb-8 text-center">Contact</h2>
            <p className="text-xl text-center text-white/70 mb-12">
              Let's create something amazing together
            </p>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-white/5 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-white/5 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-6 py-4 bg-white/5 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Page Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
        {pages.map((page, index) => (
          <button
            key={page.id}
            onClick={() => handlePageChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${
              currentPage === index ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 text-white/50 text-sm animate-bounce">
        Scroll to navigate
      </div>
    </div>
  );
}
