"use client";

const CtaSection = () => {
  return (
    <div className="mb-10 p-5 md:mb-20">
      {/* CTA Section - Gradient Background */}
      <div className="relative bg-white rounded-3xl p-12 lg:p-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl"
            style={{ background: "#D6FD3A" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl"
            style={{ background: "#D6FD3A" }}
          ></div>
        </div>

        {/* Icon */}
        <div className="relative z-10 flex justify-center mb-8">
          <div
            className="w-20 h-20 rounded-2xl backdrop-blur-sm flex items-center justify-center shadow-lg"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(214, 253, 58, 0.5), rgba(214, 253, 58, 0.5))",
              border: "1px solid rgba(214, 253, 58, 0.3)",
            }}
          >
            <svg
              className="w-10 h-10"
              style={{ color: "#D6FD3A" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                style={{ color: "#000000" }}
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
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(to right, #D6FD3A, #E8FF60, #D6FD3A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              learn
            </span>{" "}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The best entrepreneurs in the world?{" "}
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative z-10 flex justify-center">
          <button
            className="group text-black font-bold py-5 px-12 rounded-xl transition-all duration-300 shadow-2xl transform hover:scale-105 text-lg btn-gradient-lime-reverse"
            style={{ boxShadow: "0 25px 50px -12px rgba(214, 253, 58, 0.5)" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Enroll Now{" "}
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
