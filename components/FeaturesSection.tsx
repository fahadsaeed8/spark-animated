"use client";

import Image from "next/image";

const FeaturesSection = () => {
  const features = [
    {
      title: "Learn From the Best in Business",
      description:
        "Learn how the founders of your favorite companies carved their path to success - so you can find your own.",
      image: "/image1.svg",
    },
    {
      title: "Connect With Ambitious Minds",
      description:
        "Engage with fellow students through dynamic in-person meetups and interactive online events.",
      image: "/image4.svg",
    },
    {
      title: "Access Strategic Frameworks",
      description:
        "Access to hundreds of PDFs on top of the video courses that will help you use the best strategy for your own business.",
      image: "/image2.png.svg",
    },
    {
      title: "Anywhere, Anytime, on Any Device",
      description:
        "Watch videos on your own time, wherever you are - available on laptop, tablet and smartphone.",
      image: "/image3.png.svg",
    },
  ];

  return (
    <section className="relative w-full py-24 lg:py-12 overflow-hidden bg-gradient-to-b from-black via-slate-900 to-white/75">
      {/* Background decorative elements - same as hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-sm font-medium text-orange-300 backdrop-blur-sm">
              Your Way to sucess{" "}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-clash">
            <span className="text-white">What is</span>{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              What is Augment?{" "}
            </span>
          </h2>
        </div>

        {/* Features Grid - 2x2 Layout */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-20 lg:mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border hover:border-gray-700/50 rounded-2xl p-6 lg:p-6 border-orange-500/30 transition-all overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-medium text-white mb-3 lg:mb-4 font-clash">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                {/* Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-orange-400/20 to-amber-500/20 border border-orange-500/30 mb-6">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1600}
                    height={1400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
