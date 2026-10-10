"use client";

import React, { useState } from "react";

interface RegionGroup {
  id: string;
  name: string;
  flag: string;
  tagline: string;
  cities: {
    name: string;
    focus: string;
    badge: string;
  }[];
  servicesOffered: string[];
}

const regionData: RegionGroup[] = [
  {
    id: "kerala",
    name: "Kerala Hubs",
    flag: "🌴",
    tagline: "Local Engineering Roots & Rapid On-Demand Collaboration",
    cities: [
      {
        name: "Kozhikode (Calicut)",
        focus: "Next.js Web Development, Modern Web Design & Local SEO",
        badge: "Core Tech Hub",
      },
      {
        name: "Malappuram",
        focus: "Bespoke Corporate Websites, E-Commerce & UI/UX Systems",
        badge: "Headquarters",
      },
      {
        name: "Kochi & Ernakulam",
        focus: "High-Scale Full-Stack Web Apps, Mobile Apps & Brand Strategy",
        badge: "Commercial Center",
      },
      {
        name: "Thrissur",
        focus: "Responsive Website Redesigns, High-Converting Landing Pages",
        badge: "Cultural & Retail Hub",
      },
      {
        name: "Kannur & Trivandrum",
        focus: "Startup Web Platforms, Government & Enterprise Web Solutions",
        badge: "Regional Coverage",
      },
    ],
    servicesOffered: [
      "Custom Next.js & React Web Development",
      "Conversion-Obsessed Web Design & UI/UX",
      "Local SEO & Malayalam/English Localization",
      "Mobile App Development (iOS & Android)",
      "High-ROAS Meta & Google Performance Ads",
    ],
  },
  {
    id: "india",
    name: "India Metros",
    flag: "🇮🇳",
    tagline: "High-Growth Scaleups, Startups & Enterprise Platforms",
    cities: [
      {
        name: "Bengaluru (Bangalore)",
        focus: "SaaS Platforms, Fast Web MVPs, Scalable Cloud Architectures",
        badge: "Tech Capital",
      },
      {
        name: "Delhi NCR",
        focus: "Corporate Portals, High-Traffic E-Commerce, GEO & AEO Search",
        badge: "Capital Metro",
      },
      {
        name: "Indore",
        focus: "Custom Business Web Design, Web Application Engineering",
        badge: "Fast-Growing Hub",
      },
      {
        name: "Nellore & Andhra",
        focus: "Modern Web Presence, Digital Transformation & Lead Gen",
        badge: "Regional Hub",
      },
      {
        name: "Mumbai & Hyderabad",
        focus: "Fintech Web Platforms, Design Systems, Full-Funnel Growth",
        badge: "Enterprise Markets",
      },
    ],
    servicesOffered: [
      "Enterprise Full-Stack Web Development",
      "Design Systems & Figma Prototyping",
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "Performance Media Buying & Search Domination",
    ],
  },
  {
    id: "middle-east",
    name: "UAE & Saudi Arabia",
    flag: "🌍",
    tagline: "GCC Expansion, Bilingual Portals & Premium Digital Brands",
    cities: [
      {
        name: "Dubai (UAE)",
        focus: "Luxury UI/UX Design, High-Converting Web Portals, Headless CMS",
        badge: "GCC Global Center",
      },
      {
        name: "Abu Dhabi & Sharjah",
        focus: "Corporate Website Engineering, Performance Marketing",
        badge: "UAE Regional",
      },
      {
        name: "Riyadh (Saudi Arabia)",
        focus: "Vision 2030 Digital Platforms, Custom Web Apps & Arabic UI",
        badge: "KSA Capital Hub",
      },
      {
        name: "Jeddah & Dammam",
        focus: "E-Commerce Engines, Mobile Apps, Search Domination",
        badge: "Commercial Coastal",
      },
    ],
    servicesOffered: [
      "Bilingual English / Arabic Web Development",
      "Ultra-Premium Luxury UI/UX Aesthetics",
      "GCC Timezone Synchronized Agile Sprints",
      "Middle East Targeted Performance Ads",
      "GEO Optimization for AI Discovery in the Gulf",
    ],
  },
  {
    id: "international",
    name: "Paris & Global",
    flag: "🗼",
    tagline: "European Design Finesse & Worldwide Remote Delivery",
    cities: [
      {
        name: "Paris (France)",
        focus: "Bespoke Web Design, Brand Identity, GDPR-Compliant Web Apps",
        badge: "European Creative Hub",
      },
      {
        name: "London (UK) & Western Europe",
        focus: "Global SaaS Web Design, High-Performance Full-Stack Builds",
        badge: "Fintech & Startups",
      },
      {
        name: "North America & Worldwide",
        focus: "Async Development Sprints, Sub-Second Global CDNs, AI SEO",
        badge: "24/7 Global Reach",
      },
    ],
    servicesOffered: [
      "World-Class Minimalist Aesthetic Web Design",
      "GDPR & International Accessibility Standards",
      "Multi-Currency E-Commerce & Global Edge CDNs",
      "Answer Engine Optimization (AEO) for Global Queries",
      "AI Knowledge Graph Schema & Semantic SEO",
    ],
  },
];

export default function GlobalReach() {
  const [activeTab, setActiveTab] = useState<string>("kerala");

  const currentRegion =
    regionData.find((r) => r.id === activeTab) || regionData[0];

  return (
    <section
      id="locations"
      className="scroll-mt-24 sm:scroll-mt-28 relative w-full bg-[#07070a] text-white py-24 sm:py-32 px-5 sm:px-8 lg:px-14 select-none border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(255, 85, 0, 0.06), transparent 75%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#14151a]/90 border border-white/10 rounded-full px-3.5 py-1 text-xs font-mono text-zinc-400 tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
            <span>(Geographic &amp; AI Search Coverage)</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Local Heart. Global Velocity.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
            We engineer flagship Web Development, Web Design, and GEO/AEO search dominance for forward-thinking clients across Kerala, metropolitan India, the Gulf, and Europe.
          </p>
        </div>

        {/* GEO & AEO Deep-Dive Explainer Banner */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-[#12131b] via-[#161722] to-[#12131b] border border-white/10 p-6 sm:p-9 shadow-[0_15px_40px_rgba(0,0,0,0.7)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#ff5500] bg-[#ff5500]/10 border border-[#ff5500]/20 px-3 py-1 rounded-full mb-3">
                Next-Gen Search Engine AI
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Mastering GEO &amp; AEO
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Search is no longer just ten blue links. Modern buyers discover services through AI chatbots and direct answer engines.
              </p>
            </div>

            <div className="md:col-span-4 bg-[#0a0a0f]/80 rounded-2xl p-5 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">🤖</span>
                <h4 className="text-sm font-semibold text-zinc-100">
                  GEO (Generative Engine Optimization)
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We structure your brand content, technical triples, and citations so AI models (ChatGPT Search, Perplexity AI, Google Gemini) authoritatively recommend and cite your services.
              </p>
            </div>

            <div className="md:col-span-4 bg-[#0a0a0f]/80 rounded-2xl p-5 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">⚡</span>
                <h4 className="text-sm font-semibold text-zinc-100">
                  AEO (Answer Engine Optimization)
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We craft high-density, conversational question-answer schemas and entity definitions so search engines provide your brand as the definitive direct answer for high-intent queries.
              </p>
            </div>
          </div>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {regionData.map((region) => {
            const isActive = activeTab === region.id;
            return (
              <button
                key={region.id}
                onClick={() => setActiveTab(region.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#ff5500] text-white shadow-[0_0_25px_rgba(255,85,0,0.5)] scale-105 border border-transparent"
                    : "bg-[#111218] text-zinc-400 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                <span>{region.flag}</span>
                <span>{region.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Region Display Card */}
        <div className="rounded-3xl bg-[#0c0d12]/95 border border-white/10 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentRegion.flag}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {currentRegion.name}
                </h3>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 font-normal">
                {currentRegion.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Full-Service SLA
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                Active Deployment
              </span>
            </div>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {currentRegion.cities.map((city, idx) => (
              <div
                key={idx}
                className="bg-[#13141c]/90 rounded-2xl p-5 border border-white/5 hover:border-white/15 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                      {city.name}
                    </h4>
                    <span className="text-[10px] font-mono uppercase bg-white/5 text-zinc-400 px-2 py-0.5 rounded-md shrink-0 border border-white/5">
                      {city.badge}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                    {city.focus}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#ff5500]">
                  <span>Web Dev &amp; Web Design</span>
                  <span>↗</span>
                </div>
              </div>
            ))}
          </div>

          {/* Localized Capabilities Strip */}
          <div className="bg-[#101118] rounded-2xl p-4 sm:p-5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider shrink-0">
              Core Capabilities in {currentRegion.name}:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {currentRegion.servicesOffered.map((svc, sIdx) => (
                <span
                  key={sIdx}
                  className="bg-white/5 border border-white/10 text-zinc-300 text-xs px-3 py-1 rounded-full"
                >
                  {svc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
