"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { contactDetails } from "@/utils/contacts";

export default function Footer() {
  const currentYear = "2026";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#050608] text-white pt-20 pb-12 px-5 sm:px-8 lg:px-14 border-t border-white/10 select-none">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Column (Left) */}
          <div className="md:col-span-5 flex flex-col items-start gap-5">
            {/* Dual Logos (Emblem + Named Logo) */}
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
              title="Sakura Labs"
            >
              <div className="relative w-8 h-8 transition-transform group-hover:scale-105 flex items-center justify-center shrink-0">
                <Image
                  src="/logos/logo-main.png"
                  alt="Sakura Labs Emblem"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(244,114,182,0.5)]"
                />
              </div>

              <div className="relative transition-transform duration-200 group-hover:scale-105 flex items-center">
                <Image
                  src="/logos/name-wh-001.png"
                  alt="Sakura Labs"
                  width={140}
                  height={30}
                  className="h-6 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
                />
              </div>
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm mt-1">
              A forward-thinking digital design &amp; technology studio crafting visionary products, design systems, and immersive web experiences.
            </p>

            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 bg-[#0d0e14] border border-white/10 rounded-full px-3.5 py-1 text-xs text-zinc-400 mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span>Operational worldwide • 2026</span>
            </div>
          </div>

          {/* Links Columns (Right) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Navigation */}
            <div>
              <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                Explore
              </span>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToTop();
                    }}
                    className="text-zinc-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-zinc-300 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-zinc-300 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-zinc-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                Services
              </span>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-400">
                <li className="hover:text-zinc-200 transition-colors">Web Development</li>
                <li className="hover:text-zinc-200 transition-colors">App Development</li>
                <li className="hover:text-zinc-200 transition-colors">Performance Ads</li>
                <li className="hover:text-zinc-200 transition-colors">Digital Marketing &amp; SEO</li>
                <li className="hover:text-zinc-200 transition-colors">Brand &amp; UI/UX Design</li>
              </ul>
            </div>

            {/* Social / Connect */}
            <div>
              <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                Connect
              </span>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a
                    href={contactDetails.socials.instagram.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-pink-400 transition-colors flex items-center gap-1.5"
                  >
                    Instagram ({contactDetails.socials.instagram.handle}) ↗
                  </a>
                </li>
                <li>
                  <a
                    href={contactDetails.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-pink-400 transition-colors flex items-center gap-1.5"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href={contactDetails.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    WhatsApp ↗
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-zinc-300 hover:text-pink-400 transition-colors flex items-center gap-1.5"
                  >
                    Email ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {currentYear} Sakura Labs (
            <a
              href="https://www.sakuralabs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors underline decoration-white/20"
            >
              www.sakuralabs.in
            </a>
            ). All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-zinc-600 hidden sm:inline">Built with passion &amp; precision</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
