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
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-black-900 to-black">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center justify-center mb-6">
            <span className="px-5 py-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-sm font-medium text-orange-300 backdrop-blur-sm shadow-lg shadow-orange-500/20">
              Your Way to sucess
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-clash">
            <span className="text-white">What is</span>{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Augment?
            </span>
          </h2>
        </div>

        {/* Features - Alternating Layout */}
        <div className="space-y-16 lg:space-y-24 mb-20 lg:mb-24">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`group relative flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-12`}
              >
                {/* Number Badge */}
                <div className="absolute -top-4 left-0 lg:left-8 z-20">
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-full blur-xl"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 border-2 border-orange-500/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image Section - Enhanced */}
                <div
                  className={`relative w-full lg:w-1/2 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group-hover:rounded-3xl transition-all duration-500">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-amber-500/30 to-yellow-500/20 rounded-2xl p-[2px] group-hover:p-[3px] transition-all duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-2xl backdrop-blur-xl"></div>
                    </div>

                    {/* Image Container */}
                    <div className="absolute inset-[2px] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-400/10 to-amber-500/10">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={1600}
                        height={1400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Floating glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>

                {/* Content Section - Enhanced */}
                <div
                  className={`relative w-full lg:w-1/2 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-orange-500/20 rounded-3xl p-8 lg:p-10 group-hover:border-orange-500/40 transition-all duration-500 shadow-2xl shadow-black/50">
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-br-full"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-amber-500/10 to-transparent rounded-tl-full"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4 lg:mb-6 font-clash group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 transition-all duration-500">
                        {feature.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed lg:leading-loose">
                        {feature.description}
                      </p>

                      {/* Decorative line */}
                      <div className="mt-6 lg:mt-8 h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full group-hover:w-32 transition-all duration-500"></div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
