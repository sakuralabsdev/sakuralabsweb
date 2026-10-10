"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { contactDetails } from "@/utils/contacts";

export default function Footer() {
  const currentYear = "2026";
  const router = useRouter();
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (sectionId: string) => {
    if (pathname !== "/") {
      router.push(sectionId === "home" ? "/" : `/#${sectionId}`);
      return;
    }
    if (sectionId === "home") {
      scrollToTop();
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
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
                handleNav("home");
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

            {/* Quick Social Icons Row */}
            <div className="flex items-center gap-2.5 mt-2">
              <a
                href={contactDetails.socials.instagram.link}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram (@sakuralabs)"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/40 flex items-center justify-center text-zinc-400 hover:text-pink-400 hover:scale-110 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href={contactDetails.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/40 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:scale-110 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href={contactDetails.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp (+91 87142 44119)"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-zinc-400 hover:text-[#25D366] hover:scale-110 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.19-.31a8.21 8.21 0 0 1-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.76-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.01 2.58c.13.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
                </svg>
              </a>

              <a
                href={`mailto:${contactDetails.email}`}
                title="Email (sakuralabs.dev@gmail.com)"
                aria-label="Email"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/40 flex items-center justify-center text-zinc-400 hover:text-orange-400 hover:scale-110 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>

              <a
                href={`tel:${contactDetails.phone}`}
                title="Phone (+91 87142 44119)"
                aria-label="Phone"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/40 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:scale-110 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
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
                      handleNav("home");
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
                      handleNav("services");
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
                      handleNav("faq");
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
                      handleNav("contact");
                    }}
                    className="text-zinc-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <span>Careers</span>
                    <span className="text-[10px] bg-pink-500/15 border border-pink-500/30 text-pink-300 px-1.5 py-0.5 rounded-full">
                      Hiring!
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                Services
              </span>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-400">
                <li className="hover:text-zinc-200 transition-colors">Web Development (Next.js &amp; React)</li>
                <li className="hover:text-zinc-200 transition-colors">Web Design &amp; UI/UX Systems</li>
                <li className="hover:text-zinc-200 transition-colors">GEO &amp; AEO (AI Search Optimization)</li>
                <li className="hover:text-zinc-200 transition-colors">Mobile App Development (iOS &amp; Android)</li>
                <li className="hover:text-zinc-200 transition-colors">Performance Ads (Meta &amp; Google)</li>
                <li className="hover:text-zinc-200 transition-colors">Brand &amp; Visual Identity Design</li>
              </ul>
            </div>

            {/* Social / Connect */}
            <div>
              <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                Connect
              </span>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm">
                <li>
                  <a
                    href={contactDetails.socials.instagram.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-zinc-300 hover:text-white transition-colors flex items-center gap-2.5"
                  >
                    <span className="w-6 h-6 rounded-md bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all shrink-0">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </span>
                    <span>Instagram</span>
                    <span className="text-[10px] text-zinc-500 font-mono">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contactDetails.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-zinc-300 hover:text-white transition-colors flex items-center gap-2.5"
                  >
                    <span className="w-6 h-6 rounded-md bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </span>
                    <span>LinkedIn</span>
                    <span className="text-[10px] text-zinc-500 font-mono">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contactDetails.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-zinc-300 hover:text-white transition-colors flex items-center gap-2.5"
                  >
                    <span className="w-6 h-6 rounded-md bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-[#25D366] group-hover:text-black transition-all shrink-0">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.19-.31a8.21 8.21 0 0 1-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.76-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.01 2.58c.13.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
                      </svg>
                    </span>
                    <span>WhatsApp</span>
                    <span className="text-[10px] text-zinc-500 font-mono">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="group text-zinc-300 hover:text-white transition-colors flex items-center gap-2.5"
                  >
                    <span className="w-6 h-6 rounded-md bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:bg-[#ff5500] group-hover:text-white transition-all shrink-0">
                      <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <span>Email</span>
                    <span className="text-[10px] text-zinc-500 font-mono">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global & Regional Presence Directory for SEO & GEO */}
        <div className="py-8 border-b border-white/5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
                Target Delivery Locations (Local, National &amp; Global)
              </span>
              <span className="text-[11px] text-zinc-500">
                Web Development • Web Design • GEO &amp; AEO • Mobile Apps
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-zinc-400">
              {/* Kerala Hubs */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
                <p className="text-zinc-200 font-semibold mb-1 flex items-center gap-1.5">
                  <span>🌴</span> Kerala Core
                </p>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Kozhikode (Calicut), Malappuram, Thrissur, Kochi, Ernakulam, Kannur, Thiruvananthapuram, Palakkad.
                </p>
              </div>

              {/* India Metros */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
                <p className="text-zinc-200 font-semibold mb-1 flex items-center gap-1.5">
                  <span>🇮🇳</span> India Metros
                </p>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Bengaluru (Bangalore), Delhi NCR, Indore, Nellore, Mumbai, Hyderabad, Chennai, Pune.
                </p>
              </div>

              {/* UAE & Middle East */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
                <p className="text-zinc-200 font-semibold mb-1 flex items-center gap-1.5">
                  <span>🌍</span> UAE &amp; Saudi Arabia
                </p>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Dubai, Abu Dhabi, Sharjah (UAE), Riyadh, Jeddah, Dammam (Saudi Arabia), GCC region.
                </p>
              </div>

              {/* Europe & International */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
                <p className="text-zinc-200 font-semibold mb-1 flex items-center gap-1.5">
                  <span>🗼</span> Europe &amp; Global
                </p>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Paris (France), London (UK), European Union, North America &amp; Worldwide Remote Delivery.
                </p>
              </div>
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
