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

  const scheduleSessions = [
    {
      number: 1,
      title: "Jon-David Hague",
      description: `Whether you want to start your own 
business, grow in your current role, or 
embark on new career, you won’t find 
better instructors than those at 
Augment.org, who have done and 
continue to do all these things.`,
    },
    {
      number: 2,
      title: "Faye Ana-Corpuz",
      description: `Balancing fintech, motherhood and 
entrepreneurship felt hard, but 
Augment’s self-phased MBA made 
learning flexible and energizing. Will 
definitely recommend their program!`,
    },
    {
      number: 3,
      title: "Andy Bacciardi",
      description: `Being part of Augment is amazing! You 
don't just get just education, but you 
enter a community that is growing 
rapidly and internationally, and this 
creates enormous opportunities for 
those that want to build their 
business!`,
    },
    {
      number: 4,
      title: "Andy Smith",
      description: `Augment transforms how you 
approach business, with lessons 
from experts at Google and 
Amazon, a must for business 
leaders.`,
    },
    {
      number: 5,
      title: "Greg Lande",
      description: `Outstanding content provided by the 
world’s top CEOs delivered in a 
digestible, engaging platform. 
Couldn’t be happier with my decision!`,
    },
    {
      number: 6,
      title: "Gellan Watt",
      description: `These guys and this product are 
absolutely brilliant. If you're not doing 
the Augment MBA program, you're 
missing out on an incredible 
opportunity.`,
    },
    {
      number: 7,
      title: "Greg Lande",
      description: `Outstanding content provided by the 
world’s top CEOs delivered in a 
digestible, engaging platform. 
Couldn’t be happier with my decision!`,
    },
    {
      number: 8,
      title: "Andy Bacciardi",
      description: `Being part of Augment is amazing! You 
don't just get just education, but you 
enter a community that is growing 
rapidly and internationally, and this 
creates enormous opportunities for 
those that want to build their 
business!`,
    },
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden  bg-gradient-to-b from-white via-orange-50/30 to-black">
      {/* Background decorative elements - warm orange theme */}

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

        {/* Comparison Cards - Unique Split Design */}
        <div className="relative mb-20">
          {/* VS Divider - Centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 flex items-center justify-center shadow-2xl border-4 border-white">
              <span className="text-white font-bold text-xl font-clash">
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

              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gray-700/50 rounded-full backdrop-blur-sm border border-gray-600/50">
                <span className="text-red-400 text-sm font-bold">✗</span>
                <span className="text-gray-300 text-sm font-semibold uppercase tracking-wide">
                  Traditional
                </span>
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
            <div className="relative bg-white p-8 lg:p-10 lg:pl-16 shadow-2xl rounded-r-2xl overflow-hidden border-l-4 border-orange-500">
              {/* Animated Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-amber-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
              </div>

              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full border border-orange-200 relative z-10">
                <span className="text-orange-600 text-sm font-bold">✓</span>
                <span className="text-orange-700 text-sm font-bold uppercase tracking-wide">
                  Premium
                </span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-clash relative z-10">
                The Augment MBA
              </h3>

              {/* Unique Divider with Gradient */}
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-orange-400 to-orange-500 rounded-full"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg"></div>
                <div className="h-1 flex-1 bg-gradient-to-l from-transparent via-amber-400 to-amber-500 rounded-full"></div>
              </div>

              <ul className="space-y-5 relative z-10 mb-8">
                {ourProgram.map((item, index) => (
                  <li
                    key={index}
                    className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center group-hover:from-orange-200 group-hover:to-amber-200 transition-all border-2 border-orange-200 group-hover:border-orange-400 group-hover:scale-110">
                      <span className="text-orange-600 text-lg font-bold">
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
                <button className="group relative w-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
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
                OUR COMMUNITY{" "}
              </span>
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 font-clash">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                What Our Students
              </span>{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Say About Us{" "}
              </span>
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Excellent Trustpilot
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
