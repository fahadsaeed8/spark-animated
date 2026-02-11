"use client";

const TestimonialsSection = () => {
  const scheduleSessions = [
    {
      number: 1,
      title: "Jon-David Hague",
      description: `Whether you want to start your own 
business, grow in your current role, or 
embark on new career, you won't find 
better instructors than those at 
Augment.org, who have done and 
continue to do all these things.`,
    },
    {
      number: 2,
      title: "Faye Ana-Corpuz",
      description: `Balancing fintech, motherhood and 
entrepreneurship felt hard, but 
Augment's self-phased MBA made 
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
world's top CEOs delivered in a 
digestible, engaging platform. 
Couldn't be happier with my decision!`,
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
world's top CEOs delivered in a 
digestible, engaging platform. 
Couldn't be happier with my decision!`,
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
    <section className="relative w-full py-14 lg:py-32 overflow-hidden bg-black">
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
        {/* Program Journey Section - Unique Card Grid Design */}
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, rgba(214, 253, 58, 0.2), rgba(214, 253, 58, 0.2))",
              }}
            >
              <svg
                className="w-5 h-5"
                style={{ color: "#D6FD3A" }}
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
              <span
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ color: "#D6FD3A" }}
              >
                OUR COMMUNITY{" "}
              </span>
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-clash">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                What Our Students
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(to right, #D6FD3A, #E8FF60, #D6FD3A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
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
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-gray-200 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:border-[#D6FD3A]"
              >
                {/* Number Badge - Top Right */}
                <div
                  className="absolute -top-4 -right-4 w-14 h-14 rounded-full flex items-center justify-center shadow-xl z-10 group-hover:scale-110 transition-transform"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #D6FD3A, #E8FF60, #D6FD3A)",
                  }}
                >
                  <span className="text-black font-bold text-lg">
                    {session.number}
                  </span>
                </div>

                {/* Connecting Line (for visual flow) */}
                {index < scheduleSessions.length - 1 && (
                  <div
                    className="hidden xl:block absolute top-1/2 -right-3 w-6 h-0.5 z-0"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(214, 253, 58, 0.5), transparent)",
                    }}
                  ></div>
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Placeholder */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors hover-icon-bg-lime"
                    style={{
                      background:
                        "linear-gradient(to bottom right, rgba(214, 253, 58, 0.2), rgba(214, 253, 58, 0.2))",
                      border: "1px solid rgba(214, 253, 58, 0.3)",
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{
                        background:
                          "linear-gradient(to bottom right, #D6FD3A, #B8E030)",
                      }}
                    ></div>
                  </div>

                  <h4 className="text-lg font-medium text-gray-900 mb-3 font-clash leading-tight transition-colors hover-text-lime">
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
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            background:
                              "linear-gradient(to right, #D6FD3A, #B8E030)",
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
                <div className="absolute inset-0 rounded-2xl transition-opacity pointer-events-none hover-bg-lime-glow"></div>
              </div>
            ))}
          </div>

          {/* Special Highlight Card for Session 4 (Live Feedback) */}
          <div className="mb-12">
            <div
              className="max-w-4xl mx-auto rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom right, #D6FD3A, #E8FF60, #D6FD3A)",
              }}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 text-center">
                <h4 className="text-2xl lg:text-3xl font-medium text-black mb-3 font-clash">
                  {scheduleSessions[3].title}
                </h4>
                <p className="text-lg text-black/90 max-w-2xl mx-auto">
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
              <button className="text-black font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap btn-gradient-lime">
                Start Your Journey Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
