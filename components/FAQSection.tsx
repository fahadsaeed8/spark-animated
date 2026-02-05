"use client";

import { useState } from "react";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "WILL THIS ACTUALLY HELP ME GROW MY BUSINESS?",
      answer:
        "Absolutely! Our program is designed by successful entrepreneurs who have built and scaled multiple businesses. You'll get proven frameworks, real-world strategies, and direct access to mentors who've been where you are. Over 5,000+ entrepreneurs have transformed their businesses using our methods.",
    },
    {
      question: "AN MBA FOR $30. WHAT'S THE CATCH?",
      answer:
        "No catch! We believe high-quality business education should be accessible to everyone. Our $30 challenge includes $30 in ad credits, so you essentially get the program for free. We make our money when you succeed—through our platform and community, not through expensive tuition fees.",
    },
    {
      question: "I DON'T HAVE TIME FOR THIS.",
      answer:
        "We understand—entrepreneurs are busy! That's why our program is designed to fit into your schedule. With flexible learning, on-demand content, and bite-sized daily actions, you can learn at your own pace. Most students spend just 30-60 minutes per day, and you can access everything on any device, anywhere.",
    },
    {
      question: "IS THERE A REFUND POLICY?",
      answer:
        "Yes! We offer a 15-day money-back guarantee. If you're not completely satisfied with the program within the first 15 days, we'll refund your full payment—no questions asked. We're confident in the value we provide, and we want you to feel the same.",
    },
    {
      question: "IS THIS JUST VIDEO LESSONS?",
      answer:
        "Not at all! While we do have comprehensive video content, our program includes live sessions with founders, interactive workshops, community access, one-on-one mentorship opportunities, practical templates, and real-time feedback. It's a complete learning ecosystem, not just passive video watching.",
    },
    {
      question: "CAN I EXPENSE THIS THROUGH MY COMPANY?",
      answer:
        "Yes, many of our students expense the program through their companies as professional development or business training. The program qualifies as business education and skill development. We can provide invoices and receipts for your accounting needs.",
    },
    {
      question: "WHAT IF I ALREADY HAVE EXPERIENCE IN BUSINESS?",
      answer:
        "Perfect! Our program is designed for entrepreneurs at all levels. If you're experienced, you'll benefit from advanced strategies, new frameworks, networking opportunities, and fresh perspectives from other successful founders. Many experienced entrepreneurs use our program to scale faster and avoid common pitfalls.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 lg:py-16 overflow-hidden bg-black">
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
              className="group bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question Row */}
              <div className="flex items-center justify-between p-6 lg:p-8">
                <h3 className="text-base lg:text-lg font-medium text-gray-900 pr-8 font-clash">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-transform group-hover:bg-orange-500">
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
