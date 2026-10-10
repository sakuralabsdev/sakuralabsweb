"use client";

import React from "react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tags: string[];
  description: string;
  accentColor: string;
  cubeRotation?: string;
}

const services: ServiceItem[] = [
  {
    id: "01",
    number: "01",
    title: "Web Development",
    tags: [
      "Custom Next.js & React Apps",
      "Full-Stack Web Engineering",
      "E-Commerce & High-Speed CMS",
      "API & Database Architecture",
    ],
    description:
      "Engineering ultra-fast, robust web applications and modern websites built with Next.js, React, Node.js, and scalable cloud architectures. Optimized for sub-second load times, technical SEO, bulletproof security, and peak conversion rates across Kerala, India, UAE, and international markets.",
    accentColor: "#ff5500",
  },
  {
    id: "02",
    number: "02",
    title: "Web Designing & UI/UX",
    tags: [
      "Bespoke UI/UX Design",
      "Figma Design Systems",
      "High-Converting Landing Pages",
      "Responsive Interactive Aesthetics",
    ],
    description:
      "Crafting visually captivating, conversion-obsessed web designs and responsive digital interfaces. We merge modern aesthetic hierarchy with effortless usability, micro-interactions, and psychological design patterns that turn visitors into brand advocates.",
    accentColor: "#ff5500",
  },
  {
    id: "03",
    number: "03",
    title: "GEO, AEO & Advanced SEO",
    tags: [
      "Generative Engine Optimization",
      "Answer Engine Optimization",
      "AI Search (ChatGPT & Perplexity)",
      "Technical & Local SEO",
    ],
    description:
      "Positioning your brand at the absolute forefront of modern AI search. We engineer semantic content, entity schemas, and authoritative citation architecture so your business is prominently recommended by ChatGPT, Perplexity, Google Gemini, and top Google rankings.",
    accentColor: "#ff5500",
  },
  {
    id: "04",
    number: "04",
    title: "App Development",
    tags: [
      "iOS & Android Native",
      "Cross-Platform Flutter & React Native",
      "Fluid Mobile UX",
      "Scalable Cloud Backends",
    ],
    description:
      "Building sleek, intuitive mobile applications engineered for peak performance, high retention, and effortless offline capabilities. From rapid MVP launches for ambitious startups to scaling enterprise mobile ecosystems.",
    accentColor: "#ff5500",
  },
  {
    id: "05",
    number: "05",
    title: "Performance Ads",
    tags: [
      "Meta Ads (Instagram & FB)",
      "Google Search & Performance Max",
      "High-ROAS Media Buying",
      "Full-Funnel CRO",
    ],
    description:
      "Laser-targeted advertising campaigns designed to acquire high-value customers with optimal cost per acquisition (CPA) and maximized returns on ad spend (ROAS) across domestic and international markets.",
    accentColor: "#ff5500",
  },
  {
    id: "06",
    number: "06",
    title: "Brand & Visual Identity",
    tags: [
      "Visual Identity Systems",
      "Logo Design & Typography",
      "Brand Guidelines & Strategy",
      "Motion & Graphic Direction",
    ],
    description:
      "Formulating unforgettable brand identities and intuitive design systems that elevate your perceived market value, instill instant trust, and make your business an unmistakable industry benchmark.",
    accentColor: "#ff5500",
  },
];

export default function ServicesStack() {
  return (
    <section id="services" className="scroll-mt-24 sm:scroll-mt-28 relative w-full bg-[#07070a] text-white pt-24 sm:pt-32 pb-36 px-5 sm:px-8 lg:px-14 select-none">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Top Section Statement matching the design */}
      <div className="max-w-6xl mx-auto mb-20 sm:mb-28">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 sm:gap-12">
          {/* Label Tag */}
          <div className="text-zinc-400 text-xs sm:text-sm font-mono tracking-wider pt-2 shrink-0">
            (Our services)
          </div>

          {/* Statement Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-normal tracking-tight text-[#f2f2f4] leading-[1.14] max-w-4xl">
            We&apos;re the digital lab that builds{" "}
            <span className="text-zinc-400 italic font-light">(exceptional)</span>{" "}
            products, driving{" "}
            <span className="text-zinc-400 italic font-light">(growth)</span>{" "}
            in every detail.
          </h2>
        </div>
      </div>

      {/* STACKING CARDS CONTAINER */}
      <div className="max-w-5xl mx-auto relative flex flex-col">
        {services.map((service, index) => {
          // Sequential sticky top offsets for card stacking effect
          const stickyTop = 130 + index * 28; // 130px, 158px, 186px, 214px
          const zIndex = 10 + index * 10; // 10, 20, 30, 40

          return (
            <div
              key={service.id}
              style={{
                top: `${stickyTop}px`,
                zIndex: zIndex,
              }}
              className="sticky mb-16 sm:mb-24 transition-all duration-300"
            >
              <div className="relative rounded-[28px] sm:rounded-[36px] md:rounded-[42px] bg-[#0d0e13]/95 backdrop-blur-2xl border border-white/10 p-7 sm:p-11 md:p-14 shadow-[0_-15px_45px_rgba(0,0,0,0.9),0_20px_50px_rgba(0,0,0,0.85)] hover:border-white/20 transition-all duration-300 group overflow-hidden">
                {/* Subtle top inner edge highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                {/* Subtle orange accent glow behind number */}
                <div className="absolute -left-12 -top-12 w-48 h-48 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#ff5500]/15 transition-all" />

                <div className="relative z-10 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] md:min-h-[280px]">
                  {/* Top Row: Orange Number + Title */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-7 md:gap-9">
                    <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#ff5500] tracking-tight leading-none">
                      {service.number}
                    </span>
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-normal text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Middle Row: Pill Tags with lateral dots */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 my-6 sm:my-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 hidden sm:inline-block" />
                    {service.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-flex items-center gap-2 bg-[#171822]/90 border border-white/10 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm text-zinc-300 font-medium shadow-sm backdrop-blur-md hover:border-white/25 hover:text-white transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 hidden sm:inline-block" />
                  </div>

                  {/* Bottom Row: Description + Geometric 3D Accent */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4 border-t border-white/5">
                    <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
                      {service.description}
                    </p>

                    {/* 3D Isometric Orange Cube (as shown at the bottom of the design) */}
                    <div className="shrink-0 flex items-center justify-end">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                        <svg
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full drop-shadow-[0_10px_20px_rgba(255,85,0,0.35)]"
                        >
                          {/* Top Facet (Illuminated Orange) */}
                          <polygon
                            points="50,15 85,35 50,55 15,35"
                            fill="#ff5500"
                          />
                          {/* Left Facet (Dark Obsidian) */}
                          <polygon
                            points="15,35 50,55 50,90 15,70"
                            fill="#16171f"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="0.5"
                          />
                          {/* Right Facet (Deep Burnished Orange / Dark) */}
                          <polygon
                            points="50,55 85,35 85,70 50,90"
                            fill="#b33600"
                          />
                          {/* Inner Subtle Neon Highlight */}
                          <line
                            x1="50"
                            y1="55"
                            x2="50"
                            y2="90"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="1"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
