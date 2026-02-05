"use client";

import Image from "next/image";
import { useState } from "react";

const ProcessSection = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const processSteps = [
    {
      step: 1,
      title: "Sign Up For the Challenge",
      description:
        "Commit to preparing your business for success and learn directly from industry experts",
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
        "Instant access to challenge materials",
        "Join exclusive community network",
        "Get personalized onboarding support",
      ],
    },
    {
      step: 2,
      title: "Set up your Business Platform",
      description:
        "Launch your business in minutes with our AI-powered platform with no code and zero stress",
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
        "AI-powered business setup",
        "Zero coding required",
        "Customizable templates",
      ],
    },
    {
      step: 3,
      title: "Commit to 7 Days of Action",
      description:
        "Get clear, simple action steps each day to build your digital product, price it, launch it and bring in your customers",
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      details: [
        "Daily actionable tasks",
        "Step-by-step guidance",
        "Progress tracking system",
      ],
    },
    {
      step: 4,
      title: "Launch your Digital Product",
      description:
        "With expert coaching and our platform, you'll be ready to scale like never before",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      details: [
        "Launch with confidence",
        "Scale your business",
        "Ongoing support & mentorship",
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
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div className="mb-8 lg:mb-0">
              <div className="inline-block mb-4">
                <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">
                  Complete Learning Experience
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-clash">
                A CURRICULUM MADE FOR
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  ENTREPRENEURS
                </span>
              </h2>
            </div>

            {/* Stats */}
            <div className="flex gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-medium text-white mb-1 font-clash">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left: Process Steps */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-medium text-white mb-2 font-clash">
                How The Challenge Works
              </h3>
              <p className="text-gray-400">
                Your journey to success in four simple steps
              </p>
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300"
                >
                  {/* Step Badge */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-medium rounded-lg">
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
                              className="w-4 h-4 text-orange-500 flex-shrink-0"
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
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 transition-opacity pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Curriculum Modules */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-medium text-white mb-2 font-clash">
                Learning Modules
              </h3>
              <p className="text-gray-400">
                Expandable curriculum with expert insights
              </p>
            </div>

            <div className="space-y-3">
              {curriculumModules.map((module, index) => (
                <div
                  key={module.id}
                  className="bg-white/40 rounded-xl overflow-hidden border border-transparent hover:border-orange-500/50 transition-all cursor-pointer"
                  onClick={() =>
                    setExpandedModule(
                      expandedModule === module.id ? null : module.id,
                    )
                  }
                >
                  {/* Module Header */}
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-medium text-lg">
                        {String(module.id).padStart(2, "0")}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="text-base font-medium text-white uppercase font-clash">
                            {module.title}
                          </h4>
                          {module.isNew && (
                            <span className="px-2 py-0.5 bg-gradient-to-r from-lime-400 to-green-500 text-black text-xs font-medium rounded">
                              New Module
                            </span>
                          )}
                        </div>
                        {expandedModule === module.id && (
                          <div className="flex items-center gap-4 text-xs text-gray-400 mt-1">
                            <span>{module.duration}</span>
                            <span>•</span>
                            <span>{module.views} views</span>
                            <span>•</span>
                            <span>{module.likes} likes</span>
                            <span>•</span>
                            <span>{module.comments} comments</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg
                        className={`w-5 h-5 transition-transform ${
                          expandedModule === module.id ? "rotate-180" : ""
                        }`}
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
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedModule === module.id && (
                    <div className="bg-white p-6 border-t-2 border-gray-100">
                      <p className="text-sm text-gray-700 mb-4 font-medium uppercase tracking-wide">
                        {module.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {module.topics.map((topic, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs font-semibold text-gray-800 uppercase">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="group relative bg-gradient-to-r from-lime-400 via-green-500 to-emerald-500 text-black font-medium py-5 px-12 rounded-xl hover:from-lime-500 hover:via-green-600 hover:to-emerald-600 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 text-lg uppercase tracking-wide">
            <span className="relative z-10 flex items-center gap-2">
              Enroll Now
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
            <div className="absolute inset-0 bg-gradient-to-r from-lime-300 to-green-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

