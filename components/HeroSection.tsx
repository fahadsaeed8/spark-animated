"use client";

import Image from "next/image";
import { useRef } from "react";

const HeroSection = () => {
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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/Background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content Section */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="px-4 py-1.5 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-sm font-medium text-orange-300 backdrop-blur-sm">
                Premium Program
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white font-clash">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent font-clash">
                  Career in 30 Days
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Master the skills that matter. Join industry leaders and build
              your future with our comprehensive program designed for ambitious
              professionals.
            </p>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
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
                <span className="text-sm text-gray-400 ml-2">
                  10,000+ Students
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
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg overflow-hidden w-full sm:w-auto min-w-[200px]">
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100"></div>
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 w-full sm:w-auto min-w-[200px]">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br md:-mt-40 from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                {/* Profile Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 p-0.5">
                      <Image
                        src="/hero.png"
                        alt="Instructor"
                        width={900}
                        height={900}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Alex Johnson
                      </h3>
                      <p className="text-sm text-gray-400">Senior Instructor</p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="text-2xl font-bold text-orange-400">
                        30+
                      </div>
                      <div className="text-sm text-gray-400">Courses</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="text-2xl font-bold text-amber-400">
                        50K+
                      </div>
                      <div className="text-sm text-gray-400">Students</div>
                    </div>
                  </div>

                  {/* Video Thumbnail */}
                  <div
                    className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg overflow-hidden border border-gray-700/50 group cursor-pointer"
                    onClick={() => handleVideoClick(videoRef.current)}
                  >
                    <video
                      ref={videoRef}
                      className="absolute inset-0 w-full h-full object-cover"
                      poster="/hero.png"
                      muted
                      loop
                      playsInline
                    >
                      <source src="/hero-video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Course Progress</span>
                      <span>65%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-13 h-13 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl border border-orange-500/30 backdrop-blur-sm flex items-center justify-center">
                <span className="text-md font-bold text-orange-300">30%</span>
              </div>
              <div className="absolute -bottom-5 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 backdrop-blur-sm flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Visual Section */}
          <div className="relative lg:hidden block mt-8">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 p-0.5">
                    <Image
                      src="/hero.png"
                      alt="Instructor"
                      width={48}
                      height={48}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Alex Johnson
                    </h3>
                    <p className="text-xs text-gray-400">Senior Instructor</p>
                  </div>
                </div>
                <div
                  className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg overflow-hidden border border-gray-700/50 group cursor-pointer"
                  onClick={() => handleVideoClick(mobileVideoRef.current)}
                >
                  <video
                    ref={mobileVideoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/hero.png"
                    muted
                    loop
                    playsInline
                  >
                    <source src="/hero-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all">
                      <svg
                        className="w-6 h-6 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
