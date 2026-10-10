"use client";

import React, { useState } from "react";
import { contactDetails } from "@/utils/contacts";

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);

  const scrollToContact = () => {
    setChatOpen(false);
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ================= LEFT SIDE: CHAT FLOATING ACTION ================= */}
      <div className="fixed bottom-6 left-5 sm:left-7 z-50 flex flex-col items-start select-none">
        {/* Quick Chat Popover */}
        {chatOpen && (
          <div className="mb-3 w-[290px] sm:w-[320px] rounded-2xl bg-[#0c0d12]/95 border border-white/15 p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(244,114,182,0.15)] backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-orange-500 flex items-center justify-center text-white shadow-sm font-bold text-xs">
                  🌸
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0c0d12]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white leading-none">Sakura Labs</h4>
                  <p className="text-[11px] text-emerald-400 mt-1 font-mono">Usually replies in minutes</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer text-xs"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            <div className="py-3 text-xs text-zinc-300 leading-relaxed">
              Hey there! 👋 How can we help bring your product vision or digital experience to life?
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                type="button"
                onClick={scrollToContact}
                className="w-full flex items-center justify-center gap-2 bg-[#ff5500] hover:bg-[#ff661a] text-white py-2 px-3 rounded-xl text-xs font-semibold shadow-md transition-all cursor-pointer"
              >
                <span>Send Project Inquiry</span>
                <span>↗</span>
              </button>

              <a
                href={contactDetails.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setChatOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer"
              >
                <span>Quick WhatsApp Chat</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        )}

        {/* Chat Toggle Button */}
        <div className="relative group">
          <button
            type="button"
            onClick={() => setChatOpen(!chatOpen)}
            aria-label="Open chat assistance"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#ff5500] via-[#f43f5e] to-[#ec4899] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(244,63,94,0.4)] hover:shadow-[0_12px_30px_rgba(244,63,94,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/20"
          >
            {chatOpen ? (
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z" />
                <circle cx="8" cy="10" r="1.5" />
                <circle cx="12" cy="10" r="1.5" />
                <circle cx="16" cy="10" r="1.5" />
              </svg>
            )}
            {/* Status indicator badge */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#07070a] shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </button>

          {/* Left Hover Tooltip */}
          <div className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-black/90 border border-white/10 text-white text-[11px] font-medium tracking-wide whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden sm:block shadow-lg">
            Chat with us
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE: CALL & WHATSAPP FLOATING ACTIONS ================= */}
      <div className="fixed bottom-6 right-5 sm:right-7 z-50 flex flex-col items-end gap-3 select-none">
        {/* Call Floating Icon (Above WhatsApp) */}
        <div className="relative group">
          <a
            href={`tel:${contactDetails.phone}`}
            aria-label="Direct Phone Call"
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#12131c]/90 hover:bg-[#181a26] text-blue-400 hover:text-blue-300 border border-blue-500/30 hover:border-blue-500/60 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.5),0_0_15px_rgba(59,130,246,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-xl"
          >
            <svg
              className="w-5 h-5 sm:w-5.5 sm:h-5.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          {/* Right Hover Tooltip */}
          <div className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-black/90 border border-white/10 text-white text-[11px] font-medium tracking-wide whitespace-nowrap opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden sm:block shadow-lg">
            Call: {contactDetails.phoneFormatted}
          </div>
        </div>

        {/* WhatsApp Floating Icon (Bottom Right) */}
        <div className="relative group">
          <a
            href={contactDetails.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_14px_30px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20"
          >
            {/* Pulsing subtle ambient halo */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.19-.31a8.21 8.21 0 0 1-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.76-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.01 2.58c.13.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
            </svg>
          </a>

          {/* Right Hover Tooltip */}
          <div className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-black/90 border border-white/10 text-white text-[11px] font-medium tracking-wide whitespace-nowrap opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden sm:block shadow-lg">
            Chat on WhatsApp
          </div>
        </div>
      </div>
    </>
  );
}
