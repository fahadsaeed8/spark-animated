"use client";

import Image from "next/image";

const OfferSection = () => {
  const benefits = [
    {
      title: "Recorded Session",
      subtitle: "With Alex Dwek",
      value: "Valued at $800+ Each",
      image: "/hero.png",
    },
    {
      title: "Challenge Community",
      subtitle: "Exclusive Network",
      value: "Valued at $205",
      image: "/hero.png",
    },
    {
      title: "1 Month of Nas.io Pro",
      subtitle: "Premium Platform",
      value: "Valued at $23",
      image: "/hero.png",
    },
    {
      title: "$30 Ad Credit",
      subtitle: "To Run Ads on Meta",
      value: "Marketing Budget",
      image: "/hero.png",
    },
  ];

  const instructors = [
    {
      name: "Alex Dwek",
      role: "COO, Nas.io",
      image: "/hero.png",
      company: "Nas.io",
    },
    {
      name: "Sarah Chen",
      role: "Product Lead",
      image: "/hero.png",
      company: "Tech Corp",
    },
    {
      name: "Michael Torres",
      role: "Growth Expert",
      image: "/hero.png",
      company: "ScaleUp",
    },
    {
      name: "Emily Johnson",
      role: "Strategy Director",
      image: "/hero.png",
      company: "Innovate Labs",
    },
    {
      name: "David Kim",
      role: "Founder & CEO",
      image: "/hero.png",
      company: "NextGen",
    },
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Background decorative elements - same as hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay - same as hero */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* What You'll Get Section */}
        <div className="mb-24 lg:mb-32">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <span className="px-4 py-1.5 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-sm font-medium text-orange-300 backdrop-blur-sm">
                What you'll get?
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-clash">
              <span className="text-white">A </span>
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                $1000+ Challenge
              </span>
              <span className="text-white">, Yours for </span>
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Net $0
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              You pay $30, and we give you $30 back in ad credit to run your
              first Meta ad campaign, that means the challenge pays for itself
              and every dollar goes into your business.
            </p>
            <p className="text-base text-gray-400 font-medium">
              Join the challenge for just $30 and get:
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

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
                  <h3 className="text-lg font-bold text-white mb-1 font-clash">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {benefit.subtitle}
                  </p>
                  <p className="text-xs text-orange-400 font-semibold">
                    {benefit.value}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-2xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Instructors Section */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-xs font-medium text-orange-300 backdrop-blur-sm uppercase tracking-wider">
                The Faculty
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-clash">
              <span className="text-white">Meet Your</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Instructors
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Learn directly from the founder of Wikipedia, Waze, Youtube,
              Shazam and more.
            </p>
          </div>

          {/* Instructors Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 sm:p-6 hover:border-orange-500/50 transition-all"
              >
                {/* Profile Image */}
                <div className="relative mb-4">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-orange-400/20 to-amber-500/20 border border-orange-500/30">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  {/* Company badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-900 border border-gray-700 rounded text-xs text-gray-300">
                    {instructor.company}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-xs text-gray-400">{instructor.role}</p>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-lg overflow-hidden min-w-[280px]">
            <span className="relative z-10">Join the Challenge</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
