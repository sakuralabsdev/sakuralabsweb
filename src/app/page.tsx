"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"games" | "store">("games");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      title: "Fortnite",
      subtitle: "Battle Royale",
      rating: "8,9",
      bgGradient: "from-[#8b5cf6] via-[#7c3aed] to-[#5b21b6]",
      glowColor: "rgba(139, 92, 246, 0.4)",
      image: "/hero/fortnite.png",
      imageClass: "w-[105%] h-[82%] -bottom-3 -left-2",
      rotation: "-rotate-[12deg]",
      translate: "translate-y-10 md:translate-y-14",
      zIndex: 10,
      width: "w-[225px] sm:w-[250px] md:w-[275px] lg:w-[290px]",
      height: "h-[330px] sm:h-[370px] md:h-[415px] lg:h-[435px]",
      badgeType: "rating",
    },
    {
      id: 2,
      title: "Mario",
      subtitle: "Kingdom Battle",
      rating: "4,8",
      bgGradient: "from-[#ff5b65] via-[#ef3346] to-[#c71e32]",
      glowColor: "rgba(255, 91, 101, 0.45)",
      image: "/hero/mario_3d.png",
      imageClass: "w-[125%] h-[86%] -bottom-4 -left-4",
      rotation: "-rotate-[6deg]",
      translate: "translate-y-4 md:translate-y-6",
      zIndex: 20,
      width: "w-[235px] sm:w-[260px] md:w-[285px] lg:w-[305px]",
      height: "h-[355px] sm:h-[395px] md:h-[445px] lg:h-[465px]",
      badgeType: "mario-circle",
    },
    {
      id: 3,
      title: "Kirby",
      subtitle: "Star Allies",
      rating: "4,7",
      bgGradient: "from-[#38bdf8] via-[#0ea5e9] to-[#0284c7]",
      glowColor: "rgba(14, 165, 233, 0.5)",
      image: "/hero/kirby.png",
      imageClass: "w-[122%] h-[82%] -bottom-5 left-1/2 -translate-x-[48%]",
      rotation: "rotate-0",
      translate: "translate-y-0",
      zIndex: 30,
      width: "w-[250px] sm:w-[280px] md:w-[310px] lg:w-[335px]",
      height: "h-[385px] sm:h-[430px] md:h-[485px] lg:h-[515px]",
      badgeType: "rating",
      isCenter: true,
    },
    {
      id: 4,
      title: "Pokemon",
      subtitle: "Legends: Arceus",
      rating: "4,2",
      bgGradient: "from-[#34d399] via-[#10b981] to-[#059669]",
      glowColor: "rgba(16, 185, 129, 0.45)",
      image: "/hero/bulbasaur.png",
      imageClass: "w-[112%] h-[78%] -bottom-3 left-1/2 -translate-x-[48%]",
      rotation: "rotate-[6deg]",
      translate: "translate-y-4 md:translate-y-6",
      zIndex: 20,
      width: "w-[235px] sm:w-[260px] md:w-[285px] lg:w-[305px]",
      height: "h-[355px] sm:h-[395px] md:h-[445px] lg:h-[465px]",
      badgeType: "rating",
    },
    {
      id: 5,
      title: "Splatoon 3",
      subtitle: "Multiplayer",
      rating: "3,9",
      bgGradient: "from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]",
      glowColor: "rgba(37, 99, 235, 0.4)",
      image: "/hero/splatoon.png",
      imageClass: "w-[122%] h-[88%] -bottom-8 left-1/2 -translate-x-[46%]",
      rotation: "rotate-[12deg]",
      translate: "translate-y-10 md:translate-y-14",
      zIndex: 10,
      width: "w-[225px] sm:w-[250px] md:w-[275px] lg:w-[290px]",
      height: "h-[330px] sm:h-[370px] md:h-[415px] lg:h-[435px]",
      badgeType: "rating",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07070a] text-white overflow-hidden relative flex flex-col justify-between selection:bg-rose-500 selection:text-white">
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
      {/* Left Cannon with Floating Red Bullets */}
      <div className="absolute left-6 md:left-16 lg:left-24 top-28 md:top-36 w-24 md:w-32 lg:w-36 aspect-square pointer-events-none select-none z-10 animate-float-slow">
        <Image
          src="/hero/cannon.png"
          alt="Golden Cannon"
          width={160}
          height={160}
          className="object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
          priority
        />
      </div>

      {/* Nintendo Switch Angled Console Behind Mario & Fortnite */}
      <div className="absolute left-[14%] sm:left-[18%] md:left-[22%] bottom-[120px] sm:bottom-[150px] md:bottom-[170px] w-52 sm:w-64 md:w-76 aspect-square pointer-events-none select-none -rotate-12 opacity-65 z-0">
        <Image
          src="/hero/switch-console.png"
          alt="Nintendo Switch Handheld Console"
          width={300}
          height={300}
          className="object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)]"
          priority
        />
      </div>

      {/* Right Charizard 3D Flying Render */}
      <div className="absolute right-6 md:right-16 lg:right-24 top-32 md:top-40 w-28 md:w-36 lg:w-40 aspect-square pointer-events-none select-none z-10 animate-float-reverse">
        <Image
          src="/hero/charizard.png"
          alt="Charizard"
          width={180}
          height={180}
          className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
          priority
        />
      </div>

      {/* TOP NAVBAR */}
      <header className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-4 sm:py-5 flex items-center justify-between relative z-50">
        {/* Left Section: Tabs & Search */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Navigation Pill */}
          <div className="flex items-center bg-[#14151a] border border-white/10 rounded-full p-1 shadow-lg backdrop-blur-md">
            {/* Games Tab */}
            <button
              onClick={() => setActiveTab("games")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "games"
                  ? "bg-white/15 text-white shadow-inner"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
              Games
            </button>

            {/* Store Tab */}
            <button
              onClick={() => setActiveTab("store")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "store"
                  ? "bg-white/15 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <svg
                className="w-3.5 h-3.5 opacity-75"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Store
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2.5 bg-[#14151a] border border-white/10 rounded-full px-3.5 py-2 w-40 sm:w-52 md:w-60 shadow-lg backdrop-blur-md focus-within:border-white/30 transition-all">
            <svg
              className="w-3.5 h-3.5 text-zinc-500 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search Games ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-white placeholder-zinc-500 outline-none w-full text-xs sm:text-sm font-normal"
            />
            {/* Filter Sliders Icon */}
            <button className="text-zinc-400 hover:text-white transition-colors shrink-0">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Center Section: Pure White Nintendo Switch Emblem */}
        <div className="flex items-center justify-center cursor-pointer group">
          <div className="w-8 h-8 md:w-9 md:h-9 text-white transition-transform group-hover:scale-105 flex items-center justify-center">
            {/* Crisp Pure White Nintendo Switch Vector Emblem */}
            <svg
              className="w-8 h-8 md:w-9 md:h-9 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]"
              viewBox="0 0 550 550"
              fill="white"
            >
              <g transform="translate(0,550) scale(0.1,-0.1)">
                <path d="M1365 5154 c-481 -86 -868 -442 -990 -910 -44 -169 -47 -268 -42 -1579 3 -1204 4 -1232 24 -1325 111 -501 467 -858 973 -976 66 -15 150 -18 691 -21 560 -4 618 -3 633 12 15 15 16 208 16 2396 0 1622 -3 2386 -10 2400 -10 18 -27 19 -613 18 -476 -1 -619 -4 -682 -15z m905 -2400 l0 -2026 -407 5 c-375 4 -415 6 -490 25 -322 83 -561 331 -628 654 -22 101 -22 2589 -1 2688 60 281 255 514 518 619 132 53 193 59 621 60 l387 1 0 -2026z" />
                <path d="M1451 4169 c-63 -12 -159 -60 -210 -105 -105 -91 -157 -220 -149 -372 4 -79 9 -100 41 -164 47 -97 118 -168 215 -216 67 -33 84 -37 171 -40 79 -3 107 0 160 18 217 73 348 284 311 500 -43 257 -287 429 -539 379z" />
                <path d="M3157 5163 c-4 -3 -7 -1087 -7 -2409 0 -2181 1 -2402 16 -2408 27 -10 803 -6 899 4 406 46 764 293 959 660 25 47 58 126 75 175 63 188 61 138 61 1575 0 1147 -2 1318 -16 1391 -99 521 -496 914 -1018 1004 -70 12 -178 15 -526 15 -240 0 -440 -3 -443 -7z m1068 -2178 c156 -41 284 -160 336 -312 33 -94 32 -232 -1 -318 -61 -158 -181 -269 -335 -310 -250 -65 -516 86 -589 334 -22 76 -21 204 4 282 75 245 335 389 585 324z" />
              </g>
            </svg>
          </div>
        </div>

        {/* Right Section: Bag, Coin Balance & Avatar */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Shopping Bag Button */}
          <button className="relative p-2.5 rounded-full bg-[#14151a] border border-white/10 text-zinc-300 hover:text-white transition-all shadow-lg hover:border-white/20">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {/* Notification Badge Dot */}
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_white]" />
          </button>

          {/* Currency / Coin Wallet Pill */}
          <div className="flex items-center gap-2 bg-[#14151a] border border-white/10 rounded-full pl-2.5 pr-1.5 py-1.5 shadow-lg backdrop-blur-md">
            {/* 3D Gold Coin Icon */}
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 flex items-center justify-center shadow-[0_0_10px_rgba(245,197,24,0.6)] border border-yellow-300/60">
              <div className="w-3.5 h-3.5 rounded-full border border-amber-600/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-200/90" />
              </div>
            </div>

            {/* Coin Amount */}
            <span className="text-white text-xs sm:text-sm font-bold tracking-tight">
              1 290<span className="text-zinc-400 text-[11px] font-normal">.0000</span>
            </span>

            {/* Blue Plus Button */}
            <button className="w-5 h-5 rounded-full bg-[#0070f3] hover:bg-blue-500 flex items-center justify-center text-white text-xs font-bold transition-all shadow-md ml-0.5">
              +
            </button>
          </div>

          {/* User Profile Avatar */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/20 cursor-pointer shadow-lg hover:border-white/40 transition-all">
            <Image
              src="/hero/avatar.jpg"
              alt="User Avatar"
              fill
              className="object-cover"
            />
            {/* Small status badge in corner */}
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#18181b] border border-zinc-700 flex items-center justify-center text-[7px] text-zinc-300 font-bold">
              v
            </span>
          </div>
        </div>
      </header>

      {/* HERO CENTER HEADLINE & SUBTITLE */}
      <section className="relative z-30 flex flex-col items-center justify-center text-center px-4 pt-4 sm:pt-6 md:pt-8">
        {/* Top Feature Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-[#14151a]/90 border border-white/10 rounded-full px-3.5 py-1 shadow-md backdrop-blur-md mb-4 cursor-pointer hover:border-white/20 transition-all">
          {/* Gold Gift / Crown Icon */}
          <span className="text-base leading-none">🎁</span>
          <span className="text-[#f5c518] font-bold text-xs tracking-tight">5 Months</span>
          <span className="text-zinc-400 text-xs font-normal">— Free Access</span>
        </div>

        {/* Big Bold Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-[66px] lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.08] select-none">
          Fun Games
          <br />
          Nintendo Switch
        </h1>

        {/* Subtitle with exact line breaks */}
        <p className="text-[#8e8e93] text-xs sm:text-[14px] md:text-[15px] max-w-xl mx-auto mt-4 leading-relaxed font-normal select-none">
          Be sure to try our selection of games, we have carefully chosen them. There are
          <br className="hidden sm:inline" /> games for all tastes.
        </p>
      </section>

      {/* THE 5 FANNED HERO CARDS (TIGHT FAN DECK) */}
      <div className="relative w-full max-w-7xl mx-auto h-[380px] sm:h-[450px] md:h-[510px] flex items-end justify-center px-2 sm:px-4 overflow-visible z-20 pb-0">
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
                  relative shrink-0 rounded-[30px] sm:rounded-[34px] md:rounded-[38px] p-5 sm:p-6 flex flex-col justify-between
                  bg-gradient-to-b ${card.bgGradient}
                  border border-white/25
                  transition-all duration-300 ease-out cursor-pointer
                  -mx-5 sm:-mx-8 md:-mx-10 lg:-mx-12
                  ${card.width} ${card.height}
                  ${card.rotation} ${card.translate}
                  ${
                    isHovered
                      ? "!scale-108 !-translate-y-8 shadow-[0_35px_70px_rgba(0,0,0,0.85)] ring-2 ring-white/40"
                      : "shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
                  }
                `}
              >
                {/* Subtle Card Inner Glass Sheen */}
                <div className="absolute inset-0 rounded-[30px] sm:rounded-[34px] md:rounded-[38px] bg-gradient-to-b from-white/20 via-transparent to-black/20 pointer-events-none" />

                {/* Top Card Info: Game Title, Subtitle & Badge */}
                <div className="relative z-20 flex items-start justify-between w-full">
                  <div>
                    <h3 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight drop-shadow-sm whitespace-nowrap">
                      {card.title}
                    </h3>
                    <p className="text-white/85 text-xs sm:text-sm font-medium drop-shadow-sm whitespace-nowrap mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Badge: either Mario circle or Rating pill */}
                  {card.badgeType === "mario-circle" ? (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#ef3346] flex items-center justify-center">
                        <span className="text-white font-black text-[9px] sm:text-[10px] leading-none">M</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 bg-white/25 backdrop-blur-md border border-white/35 rounded-full px-2.5 py-1 shadow-sm shrink-0">
                      {/* Controller Icon */}
                      <svg
                        className="w-3.5 h-3.5 text-white opacity-95"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="6" y1="12" x2="10" y2="12" />
                        <line x1="8" y1="10" x2="8" y2="14" />
                        <line x1="15" y1="13" x2="15.01" y2="13" strokeWidth="3" />
                        <line x1="18" y1="11" x2="18.01" y2="11" strokeWidth="3" />
                        <rect x="2" y="6" width="20" height="12" rx="6" />
                      </svg>
                      <span className="text-white font-bold text-xs sm:text-sm tracking-wide">
                        {card.rating}
                      </span>
                    </div>
                  )}
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
    </div>
  );
}
