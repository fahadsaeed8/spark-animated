"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500/10 to-yellow-500/10 ">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-yellow-500/10  rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 to-yellow-500/10  rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative z-10 max-w-7xl  mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-18">
        <div className="flex flex-col items-center justify-center">
          {/* Content Section */}
          <div className="text-center space-y-6 sm:space-y-8 w-full max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center justify-center">
              <span className="px-4 py-1.5 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-sm font-medium text-orange-300 backdrop-blur-sm">
                The AUGMENT MBA{" "}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold leading-tight px-2">
                <span className="text-white font-clash">
                  Learn From the Best{" "}
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent font-clash">
                  Entrepreneurs in the World{" "}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto px-4">
              Join the best alternative to traditional MBAs taught by the
              founders of Wikipedia, Youtube, Shazam, and more.
            </p>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2 sm:pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Image
                      key={i}
                      src="/hero.png"
                      alt={`Student ${i}`}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-slate-900 object-cover"
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-400 ml-2">
                  From 5,000+ Entrepreneurs{" "}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-400 ml-2">4.9 Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 px-4">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg overflow-hidden w-full sm:w-auto min-w-[200px] text-sm sm:text-base">
                <span className="relative z-10">Enroll Now & Get 50% Off</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button 
                onClick={() => {
                  const videoSection = document.getElementById('video-section');
                  if (videoSection) {
                    videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 transition-colors w-full sm:w-auto min-w-[200px] text-sm sm:text-base"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
