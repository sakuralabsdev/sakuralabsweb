"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Capabilities",
    question: "What services does Sakura Labs specialize in?",
    answer:
      "We specialize in end-to-end digital experiences—ranging from high-impact UI/UX design, interactive web and mobile applications, bespoke brand identity systems, to strategic creative direction and gaming-inspired digital interfaces that captivate modern audiences.",
  },
  {
    category: "Collaboration",
    question: "How does the project collaboration process work?",
    answer:
      "We operate in close, transparent sprints. From initial discovery and design architecture to interactive prototypes and production-grade development, you have direct access to our team with regular async updates, Figma design files, and live milestone demos.",
  },
  {
    category: "Timeline",
    question: "What are your typical project timelines?",
    answer:
      "Timelines depend on scope. Focused design systems or brand sprints typically take 2–3 weeks, while comprehensive interactive web apps, custom platforms, and full experience builds range from 4 to 8 weeks.",
  },
  {
    category: "Partnership",
    question: "Do you work with startups, established brands, or global clients?",
    answer:
      "Both! We partner with ambitious founders launching groundbreaking products as well as established global brands seeking to elevate their digital aesthetic and capture market attention.",
  },
  {
    category: "Getting Started",
    question: "How do we get started on a project together?",
    answer:
      "Simply send us a message via the Contact form below or email us directly at hello@sakuralabs.in. We'll review your brief and schedule an initial discovery call within 24 hours.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-24 sm:scroll-mt-28 relative w-full bg-[#07070a] text-white py-20 sm:py-28 px-5 sm:px-8 lg:px-14 select-none">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#14151a]/90 border border-white/10 rounded-full px-3.5 py-1 text-xs font-mono text-zinc-400 tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
            <span>(Questions &amp; Answers)</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            Everything you need to know about our process, capabilities, and how we bring visionary ideas to life.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3.5 sm:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#111218]/95 border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
                    : "bg-[#0d0e13]/80 border-white/8 hover:border-white/15 hover:bg-[#111218]/60"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4 pr-4">
                    <span className="text-xs font-mono text-zinc-500 font-semibold hidden sm:inline-block">
                      0{index + 1}
                    </span>
                    <span className="text-base sm:text-lg md:text-xl font-semibold text-zinc-100 tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus / Minus Animated Icon */}
                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#ff5500] text-white rotate-45 border-transparent shadow-[0_0_12px_rgba(255,85,0,0.5)]"
                        : "bg-white/5 text-zinc-400"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`transition-all duration-300 ease-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-zinc-400 text-sm sm:text-base leading-relaxed border-t border-white/5">
                    <div className="pt-3">{faq.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
