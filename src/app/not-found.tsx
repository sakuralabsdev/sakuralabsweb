import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function NotFound() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Creative Work", href: "/#about" },
    { label: "Careers", href: "/careers", badge: "Hiring" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#07070a] text-white overflow-x-clip relative flex flex-col justify-between selection:bg-rose-500 selection:text-white">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Atmospheric radial vignette with soft Sakura pink glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 95% 75% at 50% 35%, rgba(244,114,182,0.08), #07070a 95%)",
        }}
      />

      {/* Drifting Petals Ambient Glow Lights */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Navbar */}
      <Navbar />

      {/* Main 404 Hero Section */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-8 py-12 sm:py-16 max-w-4xl mx-auto">
        {/* Giant Watermark 404 in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none font-black text-[130px] sm:text-[230px] md:text-[320px] text-white/[0.03] tracking-tighter leading-none z-0">
          404
        </div>

        {/* Floating Sakura Tree Hero Visual */}
        <div className="relative z-10 w-64 sm:w-80 md:w-96 lg:w-[420px] aspect-square mb-6 sm:mb-8 animate-float-gentle group">
          {/* Subtle Ambient Grounding Shadow & Halo Glow */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

          <Image
            src="/pngs/sakura.png"
            alt="Sakura Labs Blooming Cherry Blossom Tree - 404 Not Found"
            fill
            sizes="(max-width: 640px) 260px, (max-width: 768px) 340px, 420px"
            className="object-contain filter drop-shadow-[0_20px_45px_rgba(244,114,182,0.35)] transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-xl flex flex-col items-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-[#14151a]/90 border border-pink-500/25 rounded-full px-4 py-1 text-xs font-mono text-pink-400 tracking-wider mb-4 shadow-[0_0_20px_rgba(244,114,182,0.15)] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            <span>(Error 404 • Page Not Found)</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Lost in the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-orange-400">
              Cherry Blossoms.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base mt-3 sm:mt-4 leading-relaxed max-w-lg">
            The page you&apos;re looking for might have drifted away like fallen petals, or never existed in the first place. Let&apos;s guide you back to familiar grounds.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-8 w-full">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 active:scale-95 text-white font-bold py-3 px-6 sm:px-7 rounded-full transition-all text-xs sm:text-sm shadow-[0_10px_25px_rgba(244,63,94,0.35)] cursor-pointer"
            >
              <span>←</span>
              <span>Back to Home</span>
            </Link>

            <Link
              href="/#services"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 hover:border-white/20 text-white font-semibold py-3 px-6 sm:px-7 rounded-full transition-all text-xs sm:text-sm backdrop-blur-md cursor-pointer"
            >
              <span>Explore Services</span>
              <span>↗</span>
            </Link>

            <Link
              href="/careers"
              className="inline-flex items-center gap-2 bg-[#14151a] hover:bg-pink-500/10 border border-pink-500/30 hover:border-pink-500/60 text-pink-300 font-semibold py-3 px-6 rounded-full transition-all text-xs sm:text-sm backdrop-blur-md cursor-pointer"
            >
              <span>We&apos;re Hiring</span>
              <span className="text-[10px] bg-pink-500/20 text-pink-300 border border-pink-500/30 px-2 py-0.5 rounded-full font-mono">
                PPO
              </span>
            </Link>
          </div>

          {/* Quick Links Capsule Bar */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 w-full flex flex-col items-center">
            <span className="text-[11px] font-mono uppercase text-zinc-500 tracking-wider mb-3">
              Helpful Destinations
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 px-3 py-1.5 rounded-full"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] bg-pink-500/20 text-pink-400 px-1.5 py-0.2 rounded-full font-mono">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
