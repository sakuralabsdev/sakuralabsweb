"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ApplyModal from "@/components/ApplyModal";
import { contactDetails } from "@/utils/contacts";

export default function CareersPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const skillsList = [
    { name: "Instagram Marketing", icon: "📸" },
    { name: "Meta Ads", icon: "♾️" },
    { name: "Google Ads", icon: "📈" },
    { name: "Canva", icon: "🎨" },
    { name: "CapCut", icon: "🎬" },
    { name: "Figma", icon: "✨" },
    { name: "Google Analytics", icon: "📊" },
    { name: "Notion", icon: "📝" },
    { name: "SEO & Content Strategy", icon: "🔍" },
    { name: "Trend Analysis", icon: "#️⃣" },
    { name: "Email Marketing", icon: "✉️" },
  ];

  return (
    <div className="min-h-screen bg-[#07070a] text-white overflow-x-clip relative flex flex-col justify-between selection:bg-rose-500 selection:text-white">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Atmospheric radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 95% 70% at 50% 25%, rgba(244,114,182,0.06), #07070a 95%)",
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Careers Content */}
      <main className="relative z-20 flex-1 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-6 sm:pt-10 pb-24">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 backdrop-blur-md"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#14151a]/90 border border-white/10 rounded-full px-3.5 py-1 text-xs font-mono text-pink-400 tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            <span>(We Are Hiring)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Build the Future of Digital with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-orange-400">
              Sakura Labs.
            </span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
            We are looking for bold, creative minds who live on trends, love high-impact content, and want to turn ambitious ideas into reality.
          </p>
        </div>

        {/* Job Detail Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Official Poster Showcase */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0e0f15] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(244,114,182,0.15)] group">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/posts/post 4.png"
                  alt="Sakura Labs Hiring - Digital Marketing Intern"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                  priority
                />
              </div>

              {/* Poster Footer Pill */}
              <div className="p-4 bg-[#0c0d12]/95 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-pink-400 uppercase tracking-wider block">
                    Active Opening
                  </span>
                  <span className="text-sm font-bold text-white">Digital Marketing Intern</span>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-4 py-1.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Quick Contact Info Pill */}
            <div className="rounded-2xl bg-[#0e0f15]/80 border border-white/10 p-4 text-xs text-zinc-400 flex flex-col gap-2">
              <div className="flex items-center justify-between text-zinc-300 font-medium">
                <span>Questions regarding the role?</span>
                <a
                  href={`https://wa.me/918714244119?text=${encodeURIComponent("Hi Sakura Labs, I have a question about the Digital Marketing Intern opening!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
                >
                  WhatsApp ↗
                </a>
              </div>
              <p className="text-[11px] text-zinc-500">
                You can also email your portfolio directly to{" "}
                <a href={`mailto:${contactDetails.email}`} className="text-zinc-300 underline">
                  {contactDetails.email}
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Job Description & Requirements */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Header info badge */}
            <div className="rounded-3xl bg-[#0d0e14]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full px-3 py-1 text-xs font-mono mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Now Hiring
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Digital Marketing Intern
                  </h2>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 active:scale-95 text-white font-bold py-3 px-6 rounded-full transition-all flex items-center gap-2 shadow-[0_10px_25px_rgba(244,63,94,0.4)] cursor-pointer text-sm shrink-0"
                >
                  <span>Apply Now</span>
                  <span>↗</span>
                </button>
              </div>

              {/* Key metadata pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-zinc-500 font-mono block text-[10px] uppercase">Department</span>
                  <span className="text-white font-semibold mt-0.5 block">Marketing &amp; Growth</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-zinc-500 font-mono block text-[10px] uppercase">Role Type</span>
                  <span className="text-white font-semibold mt-0.5 block">Internship / PPO</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-zinc-500 font-mono block text-[10px] uppercase">Location</span>
                  <span className="text-white font-semibold mt-0.5 block">Remote / Hybrid</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-zinc-500 font-mono block text-[10px] uppercase">Experience</span>
                  <span className="text-white font-semibold mt-0.5 block">Fresher / Student</span>
                </div>
              </div>

              {/* About the Role */}
              <div>
                <h3 className="text-base font-bold text-white mb-2">About the Opportunity</h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  At Sakura Labs, we build and market visionary digital products. If you love discovering viral internet trends, brainstorming captivating hooks, and creating aesthetic content that grabs attention, this role is designed for you. You&apos;ll work side-by-side with our creative directors to launch impactful campaigns for both our in-house brands and global client roster.
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-base font-bold text-white mb-3">What You&apos;ll Do</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-pink-400 font-bold">✓</span>
                    <span>Brainstorm, script, and design scroll-stopping content for Instagram, YouTube, and LinkedIn.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-pink-400 font-bold">✓</span>
                    <span>Assist in setting up, monitoring, and scaling performance ads across Meta Ads (Facebook &amp; Instagram) and Google Ads.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-pink-400 font-bold">✓</span>
                    <span>Leverage design and video tools (Canva, CapCut, Figma) to produce snappy, modern marketing assets.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-pink-400 font-bold">✓</span>
                    <span>Track campaign performance with Google Analytics, analyzing metrics like reach, engagement, and conversion rates.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-pink-400 font-bold">✓</span>
                    <span>Write punchy captions, ad headlines, and newsletters that resonate with modern digital audiences.</span>
                  </li>
                </ul>
              </div>

              {/* Tools & Skills */}
              <div>
                <h3 className="text-base font-bold text-white mb-3">
                  Tools &amp; Skills <span className="text-xs text-zinc-400 font-normal">(Bonus if you know them!)</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsList.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 bg-[#151620] border border-white/10 rounded-full px-3 py-1.5 text-xs text-zinc-300"
                    >
                      <span>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Offer */}
              <div>
                <h3 className="text-base font-bold text-white mb-3">What We Offer</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5">
                    <span className="text-base">🚀</span>
                    <div>
                      <strong className="text-white block">Real World Experience</strong>
                      <span>Hands-on work on live client projects from day one.</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5">
                    <span className="text-base">☕</span>
                    <div>
                      <strong className="text-white block">Direct Mentorship</strong>
                      <span>Guidance directly from founders and senior marketers.</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5">
                    <span className="text-base">💼</span>
                    <div>
                      <strong className="text-white block">Full-Time Opportunity</strong>
                      <span>High performers receive direct Pre-Placement Offers (PPO).</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5">
                    <span className="text-base">🌸</span>
                    <div>
                      <strong className="text-white block">Supportive Culture</strong>
                      <span>Flexible hours, creative freedom, and zero micromanagement.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply CTA banner */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-white">Ready to join our team?</h4>
                  <p className="text-xs text-zinc-400">Applications are reviewed on a rolling basis.</p>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 active:scale-95 text-white font-bold py-3.5 px-8 rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(244,63,94,0.4)] cursor-pointer text-sm"
                >
                  <span>Apply Now</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Interactive Application Modal */}
      <ApplyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        jobTitle="Digital Marketing Intern"
      />
    </div>
  );
}
