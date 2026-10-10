"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Web Development & Design",
    question: "What web development and web design services does Sakura Labs offer?",
    answer:
      "Sakura Labs specializes in custom Web Development (Next.js, React, Node.js, TypeScript, full-stack architectures) and conversion-focused Web Design (UI/UX design systems, bespoke Figma designs, e-commerce storefronts, and landing pages). Every website is engineered for sub-second page loads, mobile responsiveness, seamless interaction, and built-in search engine optimization.",
  },
  {
    category: "Locations & Presence",
    question: "Which locations and cities do you serve?",
    answer:
      "We serve clients across Kerala including Kozhikode, Malappuram, Thrissur, Kochi, Ernakulam, Kannur, and Trivandrum; nationally in major tech hubs such as Bengaluru, Delhi NCR, Indore, Nellore, Mumbai, and Hyderabad; and internationally in the UAE (Dubai, Abu Dhabi, Sharjah), Saudi Arabia (Riyadh, Jeddah), France (Paris), and worldwide. Our modern remote workflow ensures seamless timezone-aligned collaboration.",
  },
  {
    category: "GEO & AEO Focus",
    question: "What is GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization)?",
    answer:
      "GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) are cutting-edge optimization methodologies that prepare your digital footprint for AI search engines like ChatGPT, Perplexity AI, Google Gemini, and Claude. Rather than solely targeting traditional search ranking algorithms, Sakura Labs structures your website's semantic content, Schema.org entities, and factual knowledge graphs so AI engines directly quote, cite, and recommend your business to users.",
  },
  {
    category: "Full-Service Offerings",
    question: "What other digital services does Sakura Labs provide?",
    answer:
      "Beyond web development and web design, Sakura Labs provides end-to-end digital solutions: native & cross-platform Mobile App Development (iOS & Android with Flutter and React Native), high-ROAS Performance Ads (Meta & Google Ads), Full-Funnel Digital Marketing, Technical & Local SEO, and complete Brand & Visual Identity systems.",
  },
  {
    category: "Collaboration & Delivery",
    question: "How does the project collaboration process work for remote or international clients?",
    answer:
      "We operate in transparent, agile sprints. From discovery and technical architecture to design prototypes and production-grade deployment, you have direct access to our engineers and marketing strategists via dedicated WhatsApp/Slack channels, staging preview links, and scheduled milestone video walkthroughs.",
  },
  {
    category: "Timelines & Getting Started",
    question: "What are your typical project timelines and how do we get started?",
    answer:
      "Timelines depend on complexity. High-converting landing pages or specialized ad setups typically launch in 1–2 weeks, while bespoke custom web applications, e-commerce platforms, and mobile apps range between 3 to 6 weeks. To begin, reach out via our contact form, message us on WhatsApp (+91 87142 44119), or email sakuralabs.dev@gmail.com for a free architectural consultation.",
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
