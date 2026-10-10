"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar, { NavSection } from "@/components/Navbar";
import FlowingGallery from "@/components/FlowingGallery";
import ServicesStack from "@/components/ServicesStack";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  const [activeLink, setActiveLink] = useState<NavSection>("home");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      title: "Marketing",
      subtitle: "SEO & Growth",
      bgGradient: "from-[#8b5cf6] via-[#7c3aed] to-[#5b21b6]",
      glowColor: "rgba(139, 92, 246, 0.4)",
      image: "/hero/fortnite.png",
      imageClass: "w-[105%] h-[82%] -bottom-1.5 sm:-bottom-2 md:-bottom-3 -left-1 sm:-left-2",
      rotation: "-rotate-[12deg]",
      translate: "translate-y-2.5 sm:translate-y-6 md:translate-y-14",
      zIndex: 10,
      width: "w-[76px] sm:w-[170px] md:w-[275px] lg:w-[290px]",
      height: "h-[118px] sm:h-[260px] md:h-[415px] lg:h-[435px]",
      badgeType: "none",
    },
    {
      id: 2,
      title: "App Dev",
      subtitle: "iOS & Android",
      bgGradient: "from-[#ff5b65] via-[#ef3346] to-[#c71e32]",
      glowColor: "rgba(255, 91, 101, 0.45)",
      image: "/hero/mario_3d.png",
      imageClass: "w-[125%] h-[86%] -bottom-1.5 sm:-bottom-3 md:-bottom-4 -left-1 sm:-left-3 md:-left-4",
      rotation: "-rotate-[6deg]",
      translate: "translate-y-1 sm:translate-y-3 md:translate-y-6",
      zIndex: 20,
      width: "w-[84px] sm:w-[185px] md:w-[285px] lg:w-[305px]",
      height: "h-[130px] sm:h-[285px] md:h-[445px] lg:h-[465px]",
      badgeType: "none",
    },
    {
      id: 3,
      title: "Web Development",
      subtitle: "Fast & Scalable",
      bgGradient: "from-[#38bdf8] via-[#0ea5e9] to-[#0284c7]",
      glowColor: "rgba(14, 165, 233, 0.5)",
      image: "/hero/kirby.png",
      imageClass: "w-[122%] h-[82%] -bottom-1.5 sm:-bottom-3 md:-bottom-5 left-1/2 -translate-x-[48%]",
      rotation: "rotate-0",
      translate: "translate-y-0",
      zIndex: 30,
      width: "w-[92px] sm:w-[205px] md:w-[310px] lg:w-[335px]",
      height: "h-[142px] sm:h-[310px] md:h-[485px] lg:h-[515px]",
      badgeType: "none",
      isCenter: true,
    },
    {
      id: 4,
      title: "Performance Ads",
      subtitle: "Meta & Google",
      bgGradient: "from-[#34d399] via-[#10b981] to-[#059669]",
      glowColor: "rgba(16, 185, 129, 0.45)",
      image: "/hero/bulbasaur.png",
      imageClass: "w-[112%] h-[78%] -bottom-1 sm:-bottom-2 md:-bottom-3 left-1/2 -translate-x-[48%]",
      rotation: "rotate-[6deg]",
      translate: "translate-y-1 sm:translate-y-3 md:translate-y-6",
      zIndex: 20,
      width: "w-[84px] sm:w-[185px] md:w-[285px] lg:w-[305px]",
      height: "h-[130px] sm:h-[285px] md:h-[445px] lg:h-[465px]",
      badgeType: "none",
    },
    {
      id: 5,
      title: "Brand Design",
      subtitle: "UI/UX & Identity",
      bgGradient: "from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]",
      glowColor: "rgba(37, 99, 235, 0.4)",
      image: "/hero/splatoon.png",
      imageClass: "w-[122%] h-[88%] -bottom-2 sm:-bottom-4 md:-bottom-8 left-1/2 -translate-x-[46%]",
      rotation: "rotate-[12deg]",
      translate: "translate-y-2.5 sm:translate-y-6 md:translate-y-14",
      zIndex: 10,
      width: "w-[76px] sm:w-[170px] md:w-[275px] lg:w-[290px]",
      height: "h-[118px] sm:h-[260px] md:h-[415px] lg:h-[435px]",
      badgeType: "none",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07070a] text-white overflow-x-clip relative flex flex-col justify-between selection:bg-rose-500 selection:text-white">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />

      {/* Atmospheric radial vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 95% 70% at 50% 30%, transparent 25%, #07070a 95%)"
        }}
      />

      {/* FLOATING DECORATIONS */}
      {/* Nintendo Switch Angled Console Behind Mario & Fortnite */}
      <div className="absolute left-[6%] sm:left-[16%] md:left-[22%] bottom-[45px] sm:bottom-[110px] md:bottom-[170px] w-24 sm:w-52 md:w-76 aspect-square pointer-events-none select-none -rotate-12 opacity-65 z-0">
        <Image
          src="/hero/switch-console.png"
          alt="Nintendo Switch Handheld Console"
          width={300}
          height={300}
          className="object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)]"
          priority
        />
      </div>

      {/* TOP NAVBAR COMPONENT */}
      <Navbar
        activeLink={activeLink}
        onLinkChange={setActiveLink}
      />

      {/* HERO CENTER HEADLINE & SUBTITLE */}
      <section id="home" className="scroll-mt-24 sm:scroll-mt-28 relative z-30 flex flex-col items-center justify-center text-center px-4 pt-3 sm:pt-6 md:pt-8">
        {/* Top Feature Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-[#14151a]/90 border border-white/10 rounded-full px-3 py-0.5 sm:px-3.5 sm:py-1 shadow-md backdrop-blur-md mb-2.5 sm:mb-4 cursor-pointer hover:border-white/20 transition-all">
          <span className="text-sm sm:text-base leading-none">✨</span>
          <span className="text-[#ff5500] font-bold text-[11px] sm:text-xs tracking-tight">Full-Service Digital Agency</span>
          <span className="text-zinc-400 text-[11px] sm:text-xs font-normal">• sakuralabs.in</span>
        </div>

        {/* Big Bold Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-[66px] lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.1] select-none">
          Digital Services &amp;
          <br />
          Accelerated Growth
        </h1>

        {/* Subtitle with exact line breaks */}
        <p className="text-[#8e8e93] text-xs sm:text-[14px] md:text-[15px] max-w-xl mx-auto mt-2 sm:mt-4 leading-relaxed font-normal select-none">
          We engineer high-performance web applications, mobile apps, and data-driven marketing campaigns
          <br className="hidden sm:inline" /> that scale brands and generate measurable results.
        </p>
      </section>

      {/* THE 5 FANNED HERO CARDS (TIGHT FAN DECK) */}
      <div className="relative w-full max-w-7xl mx-auto h-[160px] sm:h-[330px] md:h-[510px] flex items-end justify-center px-2 sm:px-4 overflow-visible z-20 pb-0 mt-2 sm:mt-0">
        <div className="relative flex items-end justify-center w-full">
          {cards.map((card) => {
            const isHovered = hoveredCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  zIndex: isHovered ? 45 : card.zIndex,
                }}
                className={`
                  relative shrink-0 rounded-[14px] sm:rounded-[24px] md:rounded-[38px] p-2 sm:p-4 md:p-6 flex flex-col justify-between
                  bg-gradient-to-b ${card.bgGradient}
                  border border-white/25
                  transition-all duration-300 ease-out cursor-pointer
                  -mx-2 sm:-mx-5 md:-mx-10 lg:-mx-12
                  ${card.width} ${card.height}
                  ${card.rotation} ${card.translate}
                  ${
                    isHovered
                      ? "!scale-105 sm:!scale-108 !-translate-y-3 sm:!-translate-y-8 shadow-[0_35px_70px_rgba(0,0,0,0.85)] ring-2 ring-white/40"
                      : "shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
                  }
                `}
              >
                {/* Subtle Card Inner Glass Sheen */}
                <div className="absolute inset-0 rounded-[14px] sm:rounded-[24px] md:rounded-[38px] bg-gradient-to-b from-white/20 via-transparent to-black/20 pointer-events-none" />

                {/* Top Card Info: Service Title & Subtitle */}
                <div className="relative z-20 flex items-start justify-between w-full">
                  <div className="max-w-full">
                    <h3 className="text-white font-extrabold text-[8px] sm:text-base md:text-2xl lg:text-3xl tracking-tight drop-shadow-sm whitespace-nowrap leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-white/85 text-[6px] sm:text-[11px] md:text-sm font-medium drop-shadow-sm whitespace-nowrap mt-0.5 leading-none">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                {/* Pop-Out Character Asset */}
                <div className={`absolute ${card.imageClass} pointer-events-none select-none z-10 transition-transform duration-300 ${isHovered ? "scale-105" : ""}`}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                    priority
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECOND SECTION: 3-ROW CONTINUOUS FLOWING GALLERY */}
      <FlowingGallery />

      {/* THIRD SECTION: SERVICES STACKING LAYERS (OVERLAPPING ON SCROLL) */}
      <ServicesStack />

      {/* FOURTH SECTION: FAQ ACCORDION */}
      <FAQSection />

      {/* FIFTH SECTION: CONTACT & INQUIRY */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />

      {/* FLOATING ACTION BUTTONS (WHATSAPP, CALL, CHAT) */}
      <FloatingActions />
    </div>
  );
}
