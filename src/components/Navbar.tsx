"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export type NavSection = "home" | "about" | "services" | "faq" | "contact";

interface NavbarProps {
  activeLink?: NavSection;
  onLinkChange?: (link: NavSection) => void;
}

export default function Navbar({
  activeLink: controlledActiveLink,
  onLinkChange,
}: NavbarProps) {
  const [internalLink, setInternalLink] = useState<NavSection>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeLink = controlledActiveLink !== undefined ? controlledActiveLink : internalLink;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll Spy: dynamically highlight active nav item as user scrolls
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 180;

      if (window.scrollY < 250) {
        if (activeLink !== "home") {
          if (onLinkChange) onLinkChange("home");
          else setInternalLink("home");
        }
        return;
      }

      const sections: NavSection[] = ["contact", "faq", "services", "about"];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            if (activeLink !== sec) {
              if (onLinkChange) onLinkChange(sec);
              else setInternalLink(sec);
            }
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [activeLink, onLinkChange]);

  const handleLinkClick = (link: NavSection) => {
    if (onLinkChange) {
      onLinkChange(link);
    } else {
      setInternalLink(link);
    }
    setMobileMenuOpen(false);

    if (link === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(link);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems: Array<{ id: NavSection; label: string }> = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      {/* Document spacer to maintain exact hero layout and prevent layout shift */}
      <div className="w-full h-[76px] sm:h-[84px] pointer-events-none select-none" />

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden transition-opacity duration-300"
        />
      )}

      {/* Viewport Fixed Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none transition-all duration-300">
        <header
          className={`pointer-events-auto transition-all duration-300 ease-out flex items-center justify-between ${
            isScrolled
              ? "mt-2.5 sm:mt-4 w-[94%] max-w-6xl px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#111218]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_20px_rgba(255,255,255,0.03)]"
              : "mt-0 w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-4 sm:py-5 bg-transparent border-transparent rounded-none"
          }`}
        >
          {/* Left: Sakura Labs Logo & Named Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("home");
            }}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
            title="Sakura Labs (www.sakuralabs.in)"
          >
            {/* Emblem / Icon Logo */}
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-200 group-hover:scale-105 flex items-center justify-center shrink-0">
              <Image
                src="/logos/logo-main.png"
                alt="Sakura Labs Emblem"
                width={32}
                height={32}
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(244,114,182,0.5)]"
                priority
              />
            </div>

            {/* Named Logo */}
            <div className="relative transition-transform duration-200 group-hover:scale-105 flex items-center">
              <Image
                src="/logos/name-wh-001.png"
                alt="Sakura Labs"
                width={140}
                height={30}
                className="h-5 sm:h-6 md:h-7 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
                priority
              />
            </div>
          </Link>

          {/* Center: Navlinks (Home, About, Services, FAQ) in Capsule Pill - Desktop */}
          <nav className="hidden md:flex items-center bg-[#14151a] border border-white/10 rounded-full p-1 shadow-lg backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeLink === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-white/15 text-white shadow-inner"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Contact Button - Desktop */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleLinkClick("contact")}
              className={`flex items-center gap-2.5 bg-[#14151a] border border-white/10 rounded-full pl-3.5 sm:pl-4 pr-1.5 py-1.5 shadow-lg backdrop-blur-md hover:border-white/25 hover:bg-[#191a21] transition-all group cursor-pointer ${
                activeLink === "contact" ? "ring-1 ring-white/30 bg-white/10" : ""
              }`}
            >
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                Contact
              </span>
              <div className="w-6 h-6 rounded-full bg-[#0070f3] group-hover:bg-blue-500 flex items-center justify-center text-white text-xs font-bold transition-all shadow-md group-hover:scale-105">
                <svg
                  className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Right: Mobile Hamburger Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#14151a] border border-white/10 flex items-center justify-center text-white shadow-lg backdrop-blur-md hover:border-white/25 hover:bg-[#191a21] transition-all active:scale-95 cursor-pointer"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-5 h-5 text-zinc-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-zinc-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu Card */}
        <div
          className={`pointer-events-auto md:hidden w-[94%] max-w-md transition-all duration-300 ease-out overflow-hidden ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 mt-2.5 translate-y-0"
              : "max-h-0 opacity-0 mt-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-[#111218]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(255,255,255,0.03)] flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeLink === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-white/15 text-white shadow-inner"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                  )}
                </button>
              );
            })}

            <div className="h-px bg-white/10 my-1" />

            {/* Mobile Contact Action */}
            <button
              onClick={() => handleLinkClick("contact")}
              className={`flex items-center justify-between w-full bg-[#14151a] border border-white/10 rounded-xl px-4 py-2.5 shadow-lg hover:border-white/25 hover:bg-[#191a21] transition-all group cursor-pointer ${
                activeLink === "contact" ? "ring-1 ring-white/25 bg-white/10" : ""
              }`}
            >
              <span className="text-white text-sm font-semibold tracking-wide">
                Contact
              </span>
              <div className="w-6 h-6 rounded-full bg-[#0070f3] group-hover:bg-blue-500 flex items-center justify-center text-white text-xs font-bold transition-all shadow-md group-hover:scale-105">
                <svg
                  className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
