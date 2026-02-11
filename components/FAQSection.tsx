"use client";

import { useState } from "react";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this beginner-friendly?",
      answer:
        "Yes. Designed for people starting from zero.",
    },
    {
      question: "Do I need to be technical?",
      answer:
        "No. Everything includes no-code & AI-based steps.",
    },
    {
      question: "Is this only for Dubai?",
      answer:
        "It's optimized for Dubai & GCC, but ideas work globally.",
    },
    {
      question: "Will I get future updates?",
      answer:
        "Yes — every update for life.",
    },
    {
      question: "Are IRL events included?",
      answer:
        "Many are free, some premium events are discounted.",
    },
    {
      question: "Who is this for?",
      answer:
        "Ambitious individuals who want to build, learn, connect, and launch businesses with AI.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-14 lg:py-16 overflow-hidden bg-black">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-clash">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about the challenge
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border-2 border-transparent transition-all duration-300 cursor-pointer hover-border-lime"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question Row */}
              <div className="flex items-center justify-between p-6 lg:p-8">
                <h3 className="text-base lg:text-lg font-medium text-gray-900 pr-8 font-clash">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-transform hover-bg-lime-button">
                    <svg
                      className={`w-5 h-5 text-white transition-transform duration-300 ${
                        expandedIndex === index ? "rotate-180" : ""
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
                  </div>
                </div>
              </div>

              {/* Answer (Expanded) */}
              {expandedIndex === index && (
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-gray-100">
                  <p className="text-base text-gray-600 leading-relaxed pt-6">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
