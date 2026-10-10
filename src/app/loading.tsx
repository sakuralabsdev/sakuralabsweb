import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07070a] text-white selection:bg-rose-500 selection:text-white">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Atmospheric radial vignette with soft Sakura pink glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(244,114,182,0.1), #07070a 90%)",
        }}
      />

      {/* Center Brand Emblem & Spinner */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Glowing Emblem Container */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
          {/* Outer Pulsing Glow */}
          <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-2xl animate-pulse pointer-events-none" />

          {/* Rotating Spinner Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/10 border-t-pink-400 border-r-rose-400 animate-spin" />

          {/* Sakura Labs Emblem Logo */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300">
            <Image
              src="/logos/logo-main.png"
              alt="Sakura Labs Emblem"
              fill
              className="object-contain filter drop-shadow-[0_0_15px_rgba(244,114,182,0.6)]"
              priority
            />
          </div>
        </div>

        {/* Wordmark Logo */}
        <div className="mt-6 flex flex-col items-center">
          <div className="relative h-6 w-36 sm:w-40">
            <Image
              src="/logos/name-wh-001.png"
              alt="Sakura Labs"
              fill
              className="object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
              priority
            />
          </div>

          {/* Minimalist Shimmer Bar */}
          <div className="mt-4 w-32 sm:w-36 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full animate-[shimmer_1.4s_infinite]" />
          </div>

          {/* Subtext */}
          <span className="mt-3 text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
            Loading...
          </span>
        </div>
      </div>

      {/* Keyframe animation for the progress shimmer bar */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </div>
  );
}
