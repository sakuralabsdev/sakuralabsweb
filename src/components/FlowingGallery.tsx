"use client";

import React from "react";
import Image from "next/image";

// Curated rows of images
const row1 = [
  "/gallery/card-1.jpg",
  "/gallery/card-2.jpg",
  "/gallery/card-3.jpg",
  "/gallery/card-4.jpg",
  "/gallery/card-5.jpg",
  "/gallery/card-6.jpg",
  "/gallery/card-7.jpg",
  "/gallery/card-1.jpg",
  "/gallery/card-2.jpg",
  "/gallery/card-3.jpg",
  "/gallery/card-4.jpg",
  "/gallery/card-5.jpg",
  "/gallery/card-6.jpg",
  "/gallery/card-7.jpg",
];

const row2 = [
  "/gallery/card-8.jpg",
  "/gallery/card-9.jpg",
  "/gallery/card-10.jpg",
  "/gallery/card-11.jpg",
  "/gallery/card-12.jpg",
  "/gallery/card-13.jpg",
  "/gallery/card-14.jpg",
  "/gallery/card-8.jpg",
  "/gallery/card-9.jpg",
  "/gallery/card-10.jpg",
  "/gallery/card-11.jpg",
  "/gallery/card-12.jpg",
  "/gallery/card-13.jpg",
  "/gallery/card-14.jpg",
];

const row3 = [
  "/gallery/card-15.jpg",
  "/gallery/card-16.jpg",
  "/gallery/card-17.jpg",
  "/gallery/card-18.jpg",
  "/gallery/card-19.jpg",
  "/gallery/card-20.jpg",
  "/gallery/card-21.jpg",
  "/gallery/card-15.jpg",
  "/gallery/card-16.jpg",
  "/gallery/card-17.jpg",
  "/gallery/card-18.jpg",
  "/gallery/card-19.jpg",
  "/gallery/card-20.jpg",
  "/gallery/card-21.jpg",
];

interface CardProps {
  src: string;
  alt: string;
}

function GalleryCard({ src, alt }: CardProps) {
  return (
    <div className="relative shrink-0 w-[115px] h-[115px] sm:w-[155px] sm:h-[155px] md:w-[195px] md:h-[195px] lg:w-[220px] lg:h-[220px] rounded-[18px] sm:rounded-[26px] md:rounded-[32px] overflow-hidden bg-[#121319] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.85)] group cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-white/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.95)]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 220px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
      />
      {/* Subtle glossy glass ring */}
      <div className="absolute inset-0 rounded-[18px] sm:rounded-[26px] md:rounded-[32px] ring-1 ring-inset ring-white/15 pointer-events-none group-hover:ring-white/35 transition-all" />
      {/* Gentle bottom shadow gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />
    </div>
  );
}

export default function FlowingGallery() {
  return (
    <section id="about" className="scroll-mt-24 sm:scroll-mt-28 relative w-full pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-20 overflow-hidden bg-[#07070a] select-none">
      {/* Inline styles to guarantee continuous animation execution across all environments */}
      <style>{`
        @keyframes flowLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes flowRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .flow-track-left {
          display: flex !important;
          width: max-content !important;
          animation: flowLeft 26s linear infinite !important;
          will-change: transform;
        }
        .flow-track-right {
          display: flex !important;
          width: max-content !important;
          animation: flowRight 26s linear infinite !important;
          will-change: transform;
        }
      `}</style>

      {/* Section Header with generous breathing space */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center mb-10 sm:mb-14 md:mb-16">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 bg-[#14151a]/90 border border-white/10 rounded-full px-3.5 py-1 text-xs font-mono text-zinc-400 tracking-wider mb-4 shadow-sm backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
          <span>(Creative Collective)</span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Crafted for the Visionaries of Tomorrow
        </h2>

        {/* Section Subtitle */}
        <p className="text-zinc-400 text-xs sm:text-base md:text-lg max-w-2xl mx-auto mt-3.5 sm:mt-4 leading-relaxed font-normal">
          A dynamic creative universe celebrating gamers, artists, and digital pioneers across the globe.
        </p>
      </div>

      {/* Left & Right Edge Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-56 bg-gradient-to-r from-[#07070a] via-[#07070a]/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-56 bg-gradient-to-l from-[#07070a] via-[#07070a]/90 to-transparent z-20 pointer-events-none" />

      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full">
        {/* ROW 1: Flows to the RIGHT */}
        <div className="relative overflow-hidden w-full flex">
          <div className="flow-track-right flex gap-3 sm:gap-4 md:gap-5 items-center">
            {row1.map((src, idx) => (
              <GalleryCard key={`r1-a-${idx}`} src={src} alt={`Sakura Labs Digital Design Project ${idx + 1}`} />
            ))}
            {row1.map((src, idx) => (
              <GalleryCard key={`r1-b-${idx}`} src={src} alt={`Sakura Labs Creative Showcase Item ${idx + 1}`} />
            ))}
          </div>
        </div>

        {/* ROW 2 (CENTER): Flows to the LEFT */}
        <div className="relative overflow-hidden w-full flex">
          <div className="flow-track-left flex gap-3 sm:gap-4 md:gap-5 items-center">
            {row2.map((src, idx) => (
              <GalleryCard key={`r2-a-${idx}`} src={src} alt={`Sakura Labs Brand Artwork ${idx + 8}`} />
            ))}
            {row2.map((src, idx) => (
              <GalleryCard key={`r2-b-${idx}`} src={src} alt={`Sakura Labs Digital Creative Exhibit ${idx + 8}`} />
            ))}
          </div>
        </div>

        {/* ROW 3: Flows to the RIGHT */}
        <div className="relative overflow-hidden w-full flex">
          <div className="flow-track-right flex gap-3 sm:gap-4 md:gap-5 items-center">
            {row3.map((src, idx) => (
              <GalleryCard key={`r3-a-${idx}`} src={src} alt={`Sakura Labs Interactive Concept ${idx + 15}`} />
            ))}
            {row3.map((src, idx) => (
              <GalleryCard key={`r3-b-${idx}`} src={src} alt={`Sakura Labs Motion & Design Concept ${idx + 15}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
