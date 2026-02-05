"use client";

import Image from "next/image";

const CommunitySection = () => {
  const communityFeatures = [
    {
      title: "Live Sessions With Founders",
      description:
        "Join interactive sessions with industry leaders and get real-time insights",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      visual: "video-call",
    },
    {
      title: "In-Person Events",
      description:
        "Network with fellow entrepreneurs at exclusive meetups and workshops",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      visual: "networking",
    },
  ];

  const platformFeatures = [
    {
      title: "AI-Powered Marketing",
      description: "Automated campaigns that drive real results",
      color: "from-green-400 to-emerald-500",
      icon: "📊",
    },
    {
      title: "Content Creation Tools",
      description: "Create stunning content in minutes",
      color: "from-yellow-400 to-orange-500",
      icon: "✨",
    },
    {
      title: "Magic Ads",
      description: "AI-generated ads that convert",
      color: "from-orange-500 to-red-500",
      icon: "🎯",
    },
    {
      title: "Analytics Dashboard",
      description: "Track your growth with real-time insights",
      color: "from-pink-400 to-purple-500",
      icon: "📈",
    },
  ];

  const communityStats = [
    { value: "245-USD", label: "The Augment MBA Program" },
    { value: "1225-USD", label: "The Augment MBA Program" },
    { value: "2450-USD", label: "The Augment MBA Program" },
  ];

  // Mock profile avatars with images
  const profileImages = [
    "/link.jpg",
    "/geo.jpg",
    "/zack.jpg",
    "/wiki.jpg",
    "/steve.jpg",
    "/geo.jpg",
    "/wiki.jpg",
  ];

  const profiles = Array.from({ length: 7 }, (_, i) => ({
    id: i,
    name: `Member ${i + 1}`,
    image: profileImages[i],
  }));

  return (
    <section className="relative w-full py-14 lg:py-32 overflow-hidden bg-white rounded-[35px]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-200/15 to-orange-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section - Community Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full">
            <svg
              className="w-5 h-5 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm font-semibold text-orange-700 uppercase tracking-wide">
              SUMMER OFFER{" "}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-clash">
            Get 50% Off & <br />
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Lifetime Access{" "}
            </span>
          </h2>
        </div>

        {/* Pricing Options - Unique Split Design */}
        <div className="relative mb-20">
          {/* Background Container with Dark Theme */}
          <div className="relative bg-black rounded-3xl p-8 lg:p-12 overflow-hidden border border-gray-700/30">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Top Orange Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-clash">
                  The Augment MBA Program
                </h3>
                <p className="text-gray-400 text-sm">
                  Choose Your Payment Plan
                </p>
              </div>

              {/* Pricing Options - Horizontal Layout */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                {communityStats.slice(0, 2).map((stat, index) => {
                  const priceMatch = stat.value.match(/(\d+)-USD/);
                  const price = priceMatch ? priceMatch[1] : "0";
                  const isPaymentPlan = index === 0;
                  const isOneTime = index === 1;
                  const isOriginal = false;

                  return (
                    <div key={index} className="group relative">
                      {/* Pricing Box */}
                      <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500">
                        {/* Pricing Display */}
                        <div className="mb-6">
                          {isOriginal && (
                            <div className="text-sm text-red-400 line-through mb-2 font-medium">
                              $2,450
                            </div>
                          )}
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-4xl lg:text-5xl font-bold text-orange-500 font-clash">
                              ${price}
                            </span>
                            {isPaymentPlan && (
                              <span className="text-base text-gray-400 font-medium">
                                x 5 months
                              </span>
                            )}
                            {isOneTime && (
                              <span className="text-sm text-orange-500 font-semibold bg-orange-500/10 px-2 py-1 rounded">
                                One-time
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Features - Compact List */}
                        <ul className="space-y-2.5 mb-6">
                          {[
                            "Lifetime access & course updates",
                            "Self-paced course",
                            "700+ Masterclasses",
                            "1 on 1 Office Hours",
                            "Event & Community Access",
                            "In-Person events",
                            "Case studies from famous companies",
                          ].map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-orange-500 text-base font-bold mt-0.5 flex-shrink-0">
                                ✓
                              </span>
                              <span className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA Button */}
                        <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3.5 px-6 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/50 transform hover:scale-[1.02] flex items-center justify-center gap-2 group/btn">
                          <span>Enroll Now</span>
                          <svg
                            className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </button>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 transition-opacity pointer-events-none"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Platform Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-clash">
              Join a Community of <br />
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                +5,000 Entrepreneurs {" "}
              </span>
            </h3>
          </div>

          {/* Community Features - Two Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {communityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Device Mockup Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-32 h-24 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-lg border border-orange-500/30"></div>
                  <div className="absolute top-8 left-8 w-32 h-24 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg border border-orange-500/30 -z-10"></div>
                  <div className="absolute top-12 left-12 w-32 h-24 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-lg border border-orange-500/30 -z-20"></div>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-medium text-white mb-3 font-clash">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Private Platform Connection Section */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 border border-gray-700/50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            {/* Profile Avatars */}
            <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
              {profiles.map((profile, index) => (
                <div
                  key={profile.id}
                  className="relative group"
                  style={{
                    marginLeft: index > 0 ? "-12px" : "0",
                  }}
                >
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 p-0.5 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-900">
                      <Image
                        src={profile.image}
                        alt={profile.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {index === profiles.length - 1 && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-lime-400 to-green-500 rounded-full border-2 border-slate-900 flex items-center justify-center z-10">
                      <svg
                        className="w-3 h-3 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-clash">
                Connect on our{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Private Platform
                </span>
              </h4>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join exclusive discussions, share insights, and collaborate with
                like-minded entrepreneurs in a secure, private environment
              </p>

              {/* CTA Button */}
              <button className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white font-bold py-4 px-10 rounded-xl hover:from-yellow-500 hover:via-amber-600 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 text-lg">
                Join the Challenge
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
