"use client";

import Image from "next/image";
import { useState } from "react";

const ProcessSection = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const processSteps = [
    {
      step: 1,
      title: "Why One-Time LTD?",
      description: "Because we believe:",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      details: [
        "You should focus on building, not paying monthly",
        "Dubai is a transient city — subscriptions don’t fit lifestyle",
        "A one-time deal gives you permission to commit",
        "You get lifetime ROI from a single investment",
        "You get everything you need without worrying about canceling later",
      ],
    },
    {
      step: 2,
      title: "Limited Launch Deal",
      description:
        "We’re releasing only 200 Lifetime Access spots to build the first inner circle of Dubai founders After that:",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      details: [
        "Price increases",
        "Subscription model returns",
        "LTD disappears forever",
        "You’re early",
      ],
    },
  ];

  const curriculumModules = [
    {
      id: 1,
      title: "Strategy & Innovation",
      duration: "20 min",
      views: "100+",
      likes: "200+",
      comments: "1200+",
      description:
        "BUILDING YOUR OWN INNOVATION FRAMEWORK FROM THE GROUND UP IN 120 MINUTES OR LESS",
      topics: [
        "STRATEGIC & INNOVATIVE THINKING",
        "DESIGN THINKING & BUSINESS MODELS",
        "BUILDING YOUR INNOVATION FRAMEWORK",
        "MEASURING & OPTIMIZING BUSINESS MODELS",
      ],
      isNew: false,
    },
    {
      id: 2,
      title: "Entrepreneurship",
      duration: "25 min",
      views: "150+",
      likes: "180+",
      comments: "950+",
      description:
        "MASTER THE FUNDAMENTALS OF BUILDING AND SCALING YOUR BUSINESS",
      topics: [
        "BUSINESS FOUNDATIONS",
        "MARKET ANALYSIS",
        "COMPETITIVE STRATEGY",
      ],
      isNew: false,
    },
    {
      id: 3,
      title: "AI for Business",
      duration: "30 min",
      views: "200+",
      likes: "250+",
      comments: "1400+",
      description:
        "LEVERAGE ARTIFICIAL INTELLIGENCE TO TRANSFORM YOUR BUSINESS OPERATIONS",
      topics: [
        "AI IMPLEMENTATION STRATEGIES",
        "AUTOMATION TOOLS",
        "DATA-DRIVEN DECISIONS",
      ],
      isNew: true,
    },
    {
      id: 4,
      title: "AI Prompt Engineering",
      duration: "18 min",
      views: "180+",
      likes: "220+",
      comments: "1100+",
      description:
        "MASTER THE ART OF CRAFTING EFFECTIVE AI PROMPTS FOR BUSINESS SUCCESS",
      topics: [
        "PROMPT DESIGN PRINCIPLES",
        "ADVANCED TECHNIQUES",
        "BUSINESS APPLICATIONS",
      ],
      isNew: true,
    },
    {
      id: 5,
      title: "Leadership",
      duration: "22 min",
      views: "140+",
      likes: "190+",
      comments: "800+",
      description: "DEVELOP LEADERSHIP SKILLS THAT INSPIRE AND DRIVE RESULTS",
      topics: ["LEADERSHIP STYLES", "TEAM MANAGEMENT", "DECISION MAKING"],
      isNew: false,
    },
    {
      id: 6,
      title: "Sales & Negotiation",
      duration: "28 min",
      views: "160+",
      likes: "210+",
      comments: "1000+",
      description: "CLOSE DEALS AND NEGOTIATE LIKE A PRO",
      topics: [
        "SALES TECHNIQUES",
        "NEGOTIATION STRATEGIES",
        "CLIENT RELATIONSHIPS",
      ],
      isNew: false,
    },
  ];

  const stats = [
    { value: "800+", label: "HOURS" },
    { value: "5,000+", label: "STUDENTS" },
    { value: "150+", label: "MENTORS" },
  ];

  return (
    <section className="relative w-full py-14 lg:py-16 overflow-hidden bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(214, 253, 58, 0.1), rgba(214, 253, 58, 0.1))",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(214, 253, 58, 0.1), rgba(214, 253, 58, 0.1))",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-20">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: "#D6FD3A" }}
              >
                Your ROI, simplified{" "}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-3 font-clash">
              If you launch even a{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(to right, #D6FD3A, #E8FF60, #D6FD3A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                micro business
              </span>
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-200 mb-4 font-clash">
              that makes AED 2,500/month.
            </h3>
            <p className="text-base sm:text-lg md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              You break even in one month. If you close just one client from our
              scripts… You profit for life. If you launch an AI automation
              agency charging AED 3,000 per client… One sale covers your entire
              LTD.
            </p>
          </div>
        </div>

        {/* Two Column Layout - Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover-border-lime"
            >
              {/* Step Badge */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{
                      background:
                        "linear-gradient(to bottom right, rgba(214, 253, 58, 0.2), rgba(214, 253, 58, 0.2))",
                      border: "1px solid rgba(214, 253, 58, 0.3)",
                      color: "#D6FD3A",
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="px-3 py-1 text-black text-xs font-medium rounded-lg"
                      style={{
                        background:
                          "linear-gradient(to right, #D6FD3A, #B8E030)",
                      }}
                    >
                      Step {step.step}
                    </span>
                  </div>
                  <h4 className="text-xl font-medium text-white mb-2 font-clash">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <ul className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-gray-400"
                      >
                        <svg
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: "#D6FD3A" }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl transition-opacity pointer-events-none hover-bg-lime-glow"></div>
            </div>
          ))}
        </div>

        {/* <div className="relative z-10 mt-8 flex justify-center">
          <button
            className="group relative w-full md:w-[30%] text-black font-bold py-4 px-8 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(to right, #D6FD3A, #E8FF60, #D6FD3A)",
            }}
          >
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
        </div> */}
      </div>
    </section>
  );
};

export default ProcessSection;
