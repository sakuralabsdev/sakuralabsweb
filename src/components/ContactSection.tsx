"use client";

import React, { useState } from "react";
import { contactDetails } from "@/utils/contacts";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Digital Design",
    budget: "$5k - $10k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const servicesList = [
    "Digital Design",
    "Branding",
    "Web App Development",
    "Complete Experience",
  ];

  const budgetList = ["<$5k", "$5k - $15k", "$15k - $30k", "$30k+"];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full bg-[#07070a] text-white py-24 sm:py-32 px-5 sm:px-8 lg:px-14 select-none">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />

      {/* Atmospheric radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255, 85, 0, 0.05), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#14151a]/90 border border-white/10 rounded-full px-3.5 py-1 text-xs font-mono text-zinc-400 tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>(Start a Conversation)</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Let&apos;s build something <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-orange-400">
              extraordinary together.
            </span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-4 leading-relaxed max-w-xl">
            Have an ambitious concept or looking to redefine your digital presence? We&apos;d love to hear from you.
          </p>
        </div>

        {/* 2-Column Grid: Contact Info (Left) + Inquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Direct Info & Accents */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct Email Card */}
            <div className="rounded-3xl bg-[#0e0f15]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Direct Inquiries
                </span>
                <h4 className="text-xl sm:text-2xl md:text-[26px] font-bold text-white mt-1 break-all">
                  {contactDetails.email}
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm mt-2">
                  Drop us a line for project proposals, partnerships, or press inquiries.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full px-4 py-2 text-xs font-semibold text-white transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-400">✓</span> Copied to clipboard
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      Copy Email
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${contactDetails.email}`}
                  className="inline-flex items-center gap-2 bg-[#ff5500] hover:bg-[#ff661a] rounded-full px-4 py-2 text-xs font-bold text-white transition-all shadow-[0_0_15px_rgba(255,85,0,0.4)]"
                >
                  Send Email ↗
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="rounded-3xl bg-[#0e0f15]/90 border border-white/10 p-6 sm:p-7 backdrop-blur-xl flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Call &amp; WhatsApp
                  </span>
                  <div className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    {contactDetails.phoneFormatted}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2 border-t border-white/5">
                <a
                  href={contactDetails.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] rounded-full px-4 py-1.5 text-xs font-semibold transition-all"
                >
                  <span>Chat on WhatsApp</span>
                  <span>↗</span>
                </a>

                <a
                  href={`tel:${contactDetails.phone}`}
                  className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white rounded-full px-4 py-1.5 text-xs font-medium transition-all"
                >
                  Direct Call
                </a>
              </div>
            </div>

            {/* Socials & Location Card */}
            <div className="rounded-3xl bg-[#0e0f15]/80 border border-white/10 p-6 sm:p-7 backdrop-blur-xl flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Social Channels
                </span>
                <span className="text-xs text-zinc-500 font-mono">
                  {contactDetails.location}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href={contactDetails.socials.instagram.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-pink-500/15 border border-white/10 hover:border-pink-500/30 text-zinc-300 hover:text-pink-300 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all"
                >
                  <span>Instagram</span>
                  <span className="text-zinc-500 text-[10px]">{contactDetails.socials.instagram.handle}</span>
                  <span>↗</span>
                </a>

                <a
                  href={contactDetails.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-blue-500/15 border border-white/10 hover:border-blue-500/30 text-zinc-300 hover:text-blue-300 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
                <span className="text-xs font-semibold text-zinc-300">
                  Accepting select projects for Q2 / Q3 2026
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl sm:rounded-[36px] bg-[#0d0e14]/95 border border-white/10 p-7 sm:p-10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-3xl mb-4 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                    ✓
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Thank you, {formData.name}!
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-md">
                    We&apos;ve received your inquiry. Our team will review your project details and get back to you shortly at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        service: "Digital Design",
                        budget: "$5k - $10k",
                        message: "",
                      });
                    }}
                    className="mt-6 px-6 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name & Email inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full bg-[#15161f] border border-white/10 focus:border-white/30 focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-[#15161f] border border-white/10 focus:border-white/30 focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-2.5">
                      Service of Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: srv })}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            formData.service === srv
                              ? "bg-[#ff5500] text-white shadow-[0_0_12px_rgba(255,85,0,0.5)] border border-transparent"
                              : "bg-[#15161f] text-zinc-300 border border-white/10 hover:border-white/20"
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-2.5">
                      Estimated Budget (USD)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetList.map((bgt) => (
                        <button
                          key={bgt}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: bgt })}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            formData.budget === bgt
                              ? "bg-white text-black font-bold shadow-md"
                              : "bg-[#15161f] text-zinc-400 border border-white/10 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {bgt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                      Project Details &amp; Vision
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project goals, target launch timeline, or any specific requirements..."
                      className="w-full bg-[#15161f] border border-white/10 focus:border-white/30 focus:outline-none rounded-xl p-4 text-sm text-white placeholder-zinc-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#0070f3] hover:bg-blue-600 active:scale-[0.99] text-white font-bold py-3.5 px-6 rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,112,243,0.35)] cursor-pointer mt-2"
                  >
                    <span>Send Project Inquiry</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
