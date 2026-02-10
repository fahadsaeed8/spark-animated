"use client";

const ComparisonSection = () => {
  const traditionalProgram = [
    {
      text: "$100,000+ tuition, on average",
      icon: "✗",
    },
    {
      text: "Inflexible learning ",
      icon: "✗",
    },
    {
      text: "No refund policy",
      icon: "✗",
    },
    {
      text: "2 year time commitment",
      icon: "✗",
    },
    {
      text: "Academic instructors ",
      icon: "✗",
    },
    {
      text: "Outdated, rigid curriculum",
      icon: "✗",
    },
    {
      text: "Tedious admission process",
      icon: "✗",
    },
  ];

  const ourProgram = [
    {
      text: "$2,450 tuition with payment plan options",
      icon: "✓",
    },
    {
      text: "Anywhere, anytime, on any device",
      icon: "✓",
    },
    {
      text: "15-day money-back guarantee",
      icon: "✓",
    },
    {
      text: "2-6 month commitment",
      icon: "✓",
    },
    {
      text: "Taught by recognized founders",
      icon: "✓",
    },
    {
      text: "Constantly updated curriculum",
      icon: "✓",
    },
    {
      text: "Open Education",
      icon: "✓",
    },
  ];

  return (
    <section className="relative w-full py-14 lg:py-2 overflow-hidden  bg-black">
      {/* Background decorative elements - warm orange theme */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Mission Statement Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="text-sm uppercase tracking-wider font-semibold"
              style={{ color: "#D6FD3A" }}
            >
              Our Mission
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-clash text-white">
            High-Quality Business Education
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(to right, #D6FD3A, #E8FF60, #D6FD3A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              at an Unbeatable Price
            </span>
          </h2>
        </div>

        {/* Comparison Cards - Unique Split Design */}
        <div className="relative mb-20">
          {/* VS Divider - Centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-4 border-gray-300"
              style={{
                background:
                  "linear-gradient(to bottom right, #D6FD3A, #E8FF60, #D6FD3A)",
              }}
            >
              <span className="text-black font-bold text-xl font-clash">
                VS
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 lg:gap-0 ">
            {/* Traditional Program Card - Left Side with Diagonal Cut */}
            <div className="relative bg-gradient-to-br from-gray-800 rounded-l-2xl via-gray-850 to-gray-900 p-8 lg:p-10 lg:pr-16 shadow-2xl overflow-hidden">
              {/* Diagonal Edge Effect */}
              <div className="hidden lg:block absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-900/50 to-transparent"></div>
              <div className="hidden lg:block absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>

              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-40 h-40 border-2 border-gray-600 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-gray-600 rounded-full"></div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-clash relative z-10">
                A Traditional MBA
              </h3>

              {/* Unique Divider */}
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="h-0.5 flex-1 bg-gradient-to-r from-gray-700 via-red-500/50 to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="h-0.5 flex-1 bg-gradient-to-l from-gray-700 via-red-500/50 to-transparent"></div>
              </div>

              <ul className="space-y-5 relative z-10">
                {traditionalProgram.map((item, index) => (
                  <li
                    key={index}
                    className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:bg-red-500/20 transition-colors border border-gray-600/50">
                      <span className="text-red-400 text-lg font-bold">
                        {item.icon}
                      </span>
                    </div>
                    <span className="text-gray-300 text-base lg:text-lg leading-relaxed pt-1 group-hover:text-gray-200 transition-colors">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Program Card - Right Side with Premium Design */}
            <div
              className="relative bg-white p-8 lg:p-10 lg:pl-16 shadow-2xl rounded-r-2xl overflow-hidden"
              style={{ borderLeft: "4px solid #D6FD3A" }}
            >
              {/* Animated Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div
                  className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl"
                  style={{
                    background:
                      "linear-gradient(to bottom right, rgba(214, 253, 58, 0.1), rgba(214, 253, 58, 0.1))",
                  }}
                ></div>
                <div
                  className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl"
                  style={{
                    background:
                      "linear-gradient(to top left, rgba(214, 253, 58, 0.1), rgba(214, 253, 58, 0.1))",
                  }}
                ></div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-clash relative z-10">
                The Augment MBA
              </h3>

              {/* Unique Divider with Gradient */}
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div
                  className="h-1 flex-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, #D6FD3A, #D6FD3A)",
                  }}
                ></div>
                <div
                  className="w-3 h-3 rounded-full shadow-lg"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #D6FD3A, #B8E030)",
                  }}
                ></div>
                <div
                  className="h-1 flex-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to left, transparent, #E8FF60, #D6FD3A)",
                  }}
                ></div>
              </div>

              <ul className="space-y-5 relative z-10 mb-8">
                {ourProgram.map((item, index) => (
                  <li
                    key={index}
                    className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300"
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all border-2 group-hover:scale-110 hover-icon-bg-lime"
                      style={{
                        background:
                          "linear-gradient(to bottom right, rgba(214, 253, 58, 0.2), rgba(214, 253, 58, 0.2))",
                        borderColor: "rgba(214, 253, 58, 0.3)",
                      }}
                    >
                      <span className="text-lg font-bold text-[#b6d634]">
                        {item.icon}
                      </span>
                    </div>
                    <span className="text-gray-700 text-base lg:text-lg leading-relaxed pt-1 font-medium group-hover:text-gray-900 transition-colors">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Enhanced CTA Button */}
              <div className="relative z-10 mt-8">
                <button
                  className="group relative w-full text-black font-bold py-4 px-8 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(to right, #D6FD3A, #E8FF60, #D6FD3A)",
                  }}
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Enroll now{" "}
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
