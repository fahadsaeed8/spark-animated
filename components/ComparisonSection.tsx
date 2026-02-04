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
      description: "Discover your most marketable skill and define who you can help.",
    },
    {
      number: 2,
      title: "Build your digital product",
      description: "Create your first version, a guide, mini-course, or challenge, and price it right.",
    },
    {
      number: 3,
      title: "Learn how to sell with Paid ads",
      description: "Learn how ads work, then launch one with just $5-$10/day.",
    },
    {
      number: 4,
      title: "Get Expert Feedback (Live)",
      description: "Share your offer, get expert feedback, and improve it instantly.",
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

        {/* Challenge Schedule Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-orange-100 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-clash">
                The Challenge Schedule
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                What you can expect during the live sessions with Alex
              </p>
            </div>

            {/* Sessions List */}
            <div className="space-y-6">
              {scheduleSessions.map((session, index) => (
                <div
                  key={index}
                  className="flex gap-4 lg:gap-6 items-start group hover:bg-orange-50/50 p-4 rounded-xl transition-all duration-300"
                >
                  {/* Orange bullet point */}
                  <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm lg:text-base">
                      {session.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 font-clash">
                      Session {session.number}: {session.title}
                    </h4>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                      {session.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold py-4 px-12 rounded-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg">
                Join the Challenge
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

