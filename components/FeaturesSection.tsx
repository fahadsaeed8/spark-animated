"use client";

import Image from "next/image";
import React from "react";

const FeaturesSection = () => {
  // Helper function to create bullet list items
  const BulletList = ({ items }: { items: string[] }) => (
    <ul className="space-y-2 list-none pl-0">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start">
          <span
            className="mr-3 mt-1.5 flex-shrink-0"
            style={{ color: "#D6FD3A" }}
          >
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  const features = [
    {
      title: "The Validated Startup Ideas Vault (500+ ideas)",
      description: (
        <>
          <p className="mb-4">
            Dubai-specific, GCC-ready, AI-powered business ideas.
          </p>
          <p className="mb-3 font-semibold text-white">Every idea includes:</p>
          <BulletList
            items={[
              "Problem + pain analysis",
              "Market sizing",
              "Competitor map",
              "Monetization models",
              "GTM plan",
              "30-day execution roadmap",
              "Tools, AI prompts & SOPs",
              "Real benchmarks",
            ]}
          />
          <p className="mt-4 text-sm italic">
            Built on 1,000+ hours of research. Updated monthly.
          </p>
        </>
      ),
      image: "/image1.svg",
    },
    {
      title: "The AI Founder Toolkit",
      description: (
        <>
          <p className="mb-3">
            Cheat-sheets, templates & frameworks for every stage:
          </p>
          <BulletList
            items={[
              "Idea validation (48-hour test)",
              "Customer research scripts",
              "No-code MVP builder templates",
              "AI automation templates",
              "Marketing & content playbooks",
              "Sales scripts",
              "Launch checklists",
              "Pitch deck & investor templates",
              "Pricing frameworks",
              "Growth models",
            ]}
          />
          <p className="mt-4 text-sm italic">
            Everything done-for-you. Just follow the checklist.
          </p>
        </>
      ),
      image: "/image2.png.svg",
    },
    {
      title: "20+ Mini Courses",
      description: (
        <>
          <p className="mb-3">Short, actionable, fast.</p>
          <p className="mb-3">Each 5–20 minutes, no fluff.</p>
          <BulletList
            items={[
              "Validate Any Idea in 2 Days",
              "Build AI MVPs Without Developers",
              "0→1 Launch Sprint Training",
              "How to Make Your First AED 5,000 Online",
              "How to Automate Your Business With AI",
              "Freelancing → Agency in 30 Days",
              "Customer Acquisition 101",
              "Market Gap Hunting (Dubai Edition)",
            ]}
          />
          <p className="mt-4 text-sm italic">
            More added every month — always free for LTD holders.
          </p>
        </>
      ),
      image: "/image3.png.svg",
    },
    {
      title: "Founder Community (Dubai + Online)",
      description: (
        <>
          <p className="mb-3">Your new entrepreneurial tribe.</p>
          <BulletList
            items={[
              "WhatsApp & Circle groups",
              "Daily conversations",
              "Idea feedback",
              "Collaboration & founder matching",
              "Accountability circles",
              "Weekly coworking days",
              "Peer support & reviews",
            ]}
          />
          <p className="mt-4 text-sm italic">
            You're not building alone anymore.
          </p>
        </>
      ),
      image: "/image4.svg",
    },
    {
      title: "Monthly Live Workshops & Webinars",
      description: (
        <>
          <BulletList
            items={[
              "AI automation workshops",
              "Business idea breakdowns",
              "Live Q&A",
              "Founder AMA sessions",
              "Market insights",
            ]}
          />
          <p className="mt-4 text-sm italic">Replay vault included.</p>
        </>
      ),
      image: "/image1.svg",
    },
    {
      title: "IRL Events in Dubai",
      description: (
        <>
          <p className="mb-3">Premium, curated, real-life connections:</p>
          <BulletList
            items={[
              "Founder meetups",
              "Hackathons",
              "Networking dinners",
              "Build weekends",
              "Demo days",
            ]}
          />
          <p className="mt-4 text-sm italic">
            Meet real people. Build real partnerships.
          </p>
        </>
      ),
      image: "/image2.png.svg",
    },
    {
      title: "Bonus: The AI Idea Generator (Personalized for YOU)",
      description: (
        <>
          <p className="mb-3">
            Answer 12 questions → receive 5–12 startup ideas customized to your
            skills, lifestyle, and budget— with full roadmaps.
          </p>
          <p className="mt-4 font-semibold text-white">
            This is your personal business blueprint
          </p>
        </>
      ),
      image: "/image3.png.svg",
    },
  ];

  return (
    <section className="relative w-full py-14 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-black-900 to-black">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(214, 253, 58, 0.1), rgba(214, 253, 58, 0.1))",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(214, 253, 58, 0.1), rgba(214, 253, 58, 0.1))",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(214, 253, 58, 0.05), rgba(214, 253, 58, 0.05))",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center justify-center mb-6">
            <span
              className="px-5 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-lg"
              style={{
                background:
                  "linear-gradient(to right, rgba(214, 253, 58, 0.2), rgba(214, 253, 58, 0.2))",
                border: "1px solid rgba(214, 253, 58, 0.3)",
                color: "#D6FD3A",
                boxShadow: "0 10px 15px -3px rgba(214, 253, 58, 0.2)",
              }}
            >
              Lifetime Access{" "}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[85px] font-bold mb-6 font-clash">
            <span className="text-white">What You </span>{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(to right, #D6FD3A, #E8FF60, #D6FD3A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get Inside (Lifetime Access){" "}
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
                {/* Image Section - Enhanced */}
                <div
                  className={`relative w-full lg:w-1/2 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Number Badge - Fixed to Image Section */}
                  <div className="absolute -top-4 left-0 lg:left-8 z-20">
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                      <div
                        className="absolute inset-0 rounded-full blur-xl"
                        style={{
                          background:
                            "linear-gradient(to bottom right, rgba(214, 253, 58, 0.3), rgba(214, 253, 58, 0.3))",
                        }}
                      ></div>
                      <div
                        className="relative w-full h-full rounded-full flex items-center justify-center backdrop-blur-sm"
                        style={{
                          background:
                            "linear-gradient(to bottom right, rgba(214, 253, 58, 0.2), rgba(214, 253, 58, 0.2))",
                          border: "2px solid rgba(214, 253, 58, 0.4)",
                        }}
                      >
                        <span
                          className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text"
                          style={{
                            background:
                              "linear-gradient(to right, #D6FD3A, #E8FF60)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group-hover:rounded-3xl transition-all duration-500">
                    {/* Animated gradient border */}
                    <div
                      className="absolute inset-0 rounded-2xl p-[2px] group-hover:p-[3px] transition-all duration-500"
                      style={{
                        background:
                          "linear-gradient(to bottom right, rgba(214, 253, 58, 0.4), rgba(214, 253, 58, 0.3), rgba(214, 253, 58, 0.2))",
                      }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-2xl backdrop-blur-xl"></div>
                    </div>

                    {/* Image Container */}
                    <div
                      className="absolute inset-[2px] rounded-2xl overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(to bottom right, rgba(214, 253, 58, 0.1), rgba(214, 253, 58, 0.1))",
                      }}
                    >
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
                    <div
                      className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                      style={{
                        background:
                          "linear-gradient(to bottom right, rgba(214, 253, 58, 0.2), rgba(214, 253, 58, 0.2))",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Content Section - Enhanced */}
                <div
                  className={`relative w-full lg:w-1/2 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div
                    className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 transition-all duration-500 shadow-2xl shadow-black/50 hover-border-lime-strong"
                    style={{ border: "1px solid rgba(214, 253, 58, 0.2)" }}
                  >
                    {/* Decorative corner elements */}
                    <div
                      className="absolute top-0 left-0 w-20 h-20 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(to bottom right, rgba(214, 253, 58, 0.1), transparent)",
                      }}
                    ></div>
                    <div
                      className="absolute bottom-0 right-0 w-20 h-20 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(to top left, rgba(214, 253, 58, 0.1), transparent)",
                      }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4 lg:mb-6 font-clash transition-all duration-500 hover-text-gradient-lime">
                        {feature.title}
                      </h3>
                      {typeof feature.description === "string" ? (
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed lg:leading-loose">
                          {feature.description}
                        </p>
                      ) : (
                        <div className="text-base sm:text-lg text-gray-300 leading-relaxed lg:leading-loose">
                          {feature.description}
                        </div>
                      )}

                      {/* Decorative line */}
                      <div
                        className="mt-6 lg:mt-8 h-1 w-20 rounded-full group-hover:w-32 transition-all duration-500"
                        style={{
                          background:
                            "linear-gradient(to right, #D6FD3A, #B8E030)",
                        }}
                      ></div>
                    </div>

                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                      style={{
                        background:
                          "linear-gradient(to bottom right, rgba(214, 253, 58, 0.05), rgba(214, 253, 58, 0.05))",
                      }}
                    ></div>
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
