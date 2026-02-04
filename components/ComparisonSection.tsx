"use client";

const ComparisonSection = () => {
  const traditionalProgram = [
    {
      text: "$100,000+ tuition, on average",
      icon: "✗",
    },
    {
      text: "Inflexible learning schedule",
      icon: "✗",
    },
    {
      text: "No refund policy",
      icon: "✗",
    },
    {
      text: "2+ year time commitment",
      icon: "✗",
    },
    {
      text: "Academic instructors only",
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
      text: "$30 challenge with $30 ad credit back",
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
      text: "30-day intensive program",
      icon: "✓",
    },
    {
      text: "Taught by recognized founders & experts",
      icon: "✓",
    },
    {
      text: "Constantly updated, practical curriculum",
      icon: "✓",
    },
    {
      text: "Open enrollment - start immediately",
      icon: "✓",
    },
  ];

  const scheduleSessions = [
    {
      number: 1,
      title: "Find your product idea",
      description:
        "Discover your most marketable skill and define who you can help.",
    },
    {
      number: 2,
      title: "Build your digital product",
      description:
        "Create your first version, a guide, mini-course, or challenge, and price it right.",
    },
    {
      number: 3,
      title: "Learn how to sell with Paid ads",
      description: "Learn how ads work, then launch one with just $5-$10/day.",
    },
    {
      number: 4,
      title: "Get Expert Feedback (Live)",
      description:
        "Share your offer, get expert feedback, and improve it instantly.",
    },
    {
      number: 5,
      title: "Launch organically",
      description: "Use your content and story to sell organically",
    },
    {
      number: 6,
      title: "Read Data like a Marketer",
      description: "Learn which numbers matter and how to improve fast.",
    },
    {
      number: 7,
      title: "Scale & Automate",
      description: "Set up automations, upsells, and testimonials for growth.",
    },
    {
      number: 8,
      title: "Get Expert Feedback (Live)",
      description:
        "Share your offer, get expert feedback, and improve it instantly.",
    },
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-orange-100/20">
      {/* Background decorative elements - warm orange theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-400/15 to-orange-300/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-300/10 to-yellow-300/10 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle wavy pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
        >
          <path
            d="M0,300 Q300,200 600,300 T1200,300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M0,400 Q300,300 600,400 T1200,400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Mission Statement Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider text-orange-600 font-semibold">
              Our Mission
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-clash text-gray-900">
            High-Quality Business Education
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              at an Unbeatable Price
            </span>
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {/* Traditional Program Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-10 border border-gray-700/50 shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-clash">
              A Traditional Program
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
            <ul className="space-y-4">
              {traditionalProgram.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-400 text-xl font-bold mt-0.5 flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Program Card */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-orange-200 shadow-2xl relative overflow-hidden">
            {/* Accent gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-bl-full"></div>

            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-clash relative z-10">
              The Challenge Program
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent mb-6 relative z-10"></div>
            <ul className="space-y-4 relative z-10">
              {ourProgram.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl font-bold mt-0.5 flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-gray-700 text-base lg:text-lg leading-relaxed font-medium">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-8 relative z-10">
              <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 px-8 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Join the Challenge
              </button>
            </div>
          </div>
        </div>

        {/* Program Journey Section - Unique Card Grid Design */}
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-16">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-semibold text-orange-700 uppercase tracking-wide">
                Your 30-Day Journey
              </span>
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 font-clash">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Program
              </span>{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Roadmap
              </span>
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Step-by-step progression through live interactive sessions with
              industry experts
            </p>
          </div>

          {/* Sessions Grid - Card Based Layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {scheduleSessions.map((session, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
              >
                {/* Number Badge - Top Right */}
                <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 flex items-center justify-center shadow-xl z-10 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">
                    {session.number}
                  </span>
                </div>

                {/* Connecting Line (for visual flow) */}
                {index < scheduleSessions.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-orange-300 to-transparent z-0"></div>
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Placeholder */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center mb-4 group-hover:from-orange-200 group-hover:to-amber-200 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-amber-500"></div>
                  </div>

                  <h4 className="text-lg font-medium text-gray-900 mb-3 font-clash leading-tight group-hover:text-orange-600 transition-colors">
                    {session.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {session.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-400 to-amber-500 rounded-full transition-all duration-1000"
                          style={{
                            width: `${((index + 1) / scheduleSessions.length) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-500">
                        Step {session.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Special Highlight Card for Session 4 (Live Feedback) */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <svg
                    className="w-5 h-5 text-white"
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
                  <span className="text-white font-semibold">
                    Live Session Highlight
                  </span>
                </div>
                <h4 className="text-2xl lg:text-3xl font-medium text-white mb-3 font-clash">
                  {scheduleSessions[3].title}
                </h4>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  {scheduleSessions[3].description}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl border border-gray-700">
              <div className="text-left sm:text-center">
                <h4 className="text-2xl font-medium text-white mb-2 font-clash">
                  Ready to Transform Your Career?
                </h4>
                <p className="text-gray-300">
                  Join thousands of professionals already on their journey
                </p>
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 px-10 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap">
                Start Your Journey Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
