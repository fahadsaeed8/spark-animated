const CtaSection = () => {
  return (
    <div className="mb-10 p-5 md:mb-20">
      {/* CTA Section - Gradient Background */}
      <div className="relative bg-white rounded-3xl p-12 lg:p-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
        </div>

        {/* Icon */}
        <div className="relative z-10 flex justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-200/50 to-amber-200/50 backdrop-blur-sm border border-orange-300/30 flex items-center justify-center shadow-lg">
            <svg
              className="w-10 h-10 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center mb-8">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-clash">
            Are you ready to{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              learn
            </span>{" "}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The best entrepreneurs in the world?{" "}
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative z-10 flex justify-center">
          <button className="group bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-gray-900 font-bold py-5 px-12 rounded-xl hover:from-yellow-500 hover:via-amber-600 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 text-lg">
            <span className="relative z-10 flex items-center gap-2">
              Join Challenge
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
  );
};

export default CtaSection;
