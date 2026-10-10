"use client";

import React, { useState, useRef } from "react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export default function ApplyModal({
  isOpen,
  onClose,
  jobTitle = "Digital Marketing Intern",
}: ApplyModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 15 * 1024 * 1024) {
        setErrorMsg("File size must be under 15MB");
        return;
      }
      setResumeFile(file);
      setErrorMsg("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!resumeFile) {
      setErrorMsg("Please upload your resume (PDF or DOCX).");
      return;
    }

    setLoading(true);

    try {
      const trimmedPhone = phone.trim();
      const formattedPhone = trimmedPhone.startsWith("+")
        ? trimmedPhone
        : `+91 ${trimmedPhone.replace(/^\+?91\s*/, "")}`;

      const formData = new FormData();
      formData.append("name", name || "Applicant");
      formData.append("email", email || "Not provided");
      formData.append("phone", formattedPhone);
      formData.append("role", jobTitle);
      formData.append("about", about);
      formData.append("resume", resumeFile);

      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong while submitting. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAbout("");
    setResumeFile(null);
    setIsSuccess(false);
    setErrorMsg("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none">
      {/* Backdrop */}
      <div
        onClick={handleReset}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0c0d13]/95 border border-white/15 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(244,114,182,0.15)] backdrop-blur-2xl text-white z-10 animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Glow ambient highlight */}
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {isSuccess ? (
          <div className="py-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-3xl mb-4 shadow-[0_0_25px_rgba(52,211,153,0.35)]">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-white">Application Received!</h3>
            <p className="text-zinc-300 text-sm mt-2 max-w-md">
              Thank you for applying for the <span className="text-pink-400 font-semibold">{jobTitle}</span> role at Sakura Labs. Your resume and application have been stored and sent to our hiring team.
            </p>
            <p className="text-zinc-500 text-xs mt-3">
              We review every application thoroughly and will reach out to you via WhatsApp or Email.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-sm font-semibold text-white transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-3 py-1 text-xs font-mono text-pink-400 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                Sakura Labs Careers
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Apply for {jobTitle}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Tell us about your background and submit your resume to join our creative team.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Monkey D. Luffy"
                    className="w-full bg-[#14151e] border border-white/10 focus:border-pink-500/50 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="luffy@grandline.com"
                    className="w-full bg-[#14151e] border border-white/10 focus:border-pink-500/50 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 transition-all"
                  />
                </div>
              </div>

              {/* Mobile Number with simple +91 format */}
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Mobile Number (WhatsApp Preferred) *
                </label>
                <div className="flex items-center bg-[#14151e] border border-white/10 focus-within:border-pink-500/50 rounded-xl overflow-hidden transition-all">
                  <span className="px-3.5 py-2.5 text-xs sm:text-sm text-zinc-400 bg-white/5 border-r border-white/10 font-mono select-none">
                    +91
                  </span>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="87142 44119"
                    className="flex-1 bg-transparent px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Upload Resume (PDF, DOCX) *
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                    resumeFile
                      ? "border-emerald-500/40 bg-emerald-500/5"
                      : "border-white/15 hover:border-pink-500/40 bg-[#14151e]/60 hover:bg-[#14151e]"
                  }`}
                >
                  {resumeFile ? (
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2 truncate text-emerald-400 font-medium">
                        <span>📄</span>
                        <span className="truncate">{resumeFile.name}</span>
                        <span className="text-zinc-500 text-[10px]">
                          ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setResumeFile(null);
                        }}
                        className="text-zinc-400 hover:text-red-400 transition-colors p-1"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-1.5 text-zinc-400">
                      <svg className="w-6 h-6 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <span className="text-xs font-medium text-zinc-300">
                        Click to select resume or drag and drop
                      </span>
                      <span className="text-[10px] text-zinc-500">PDF, DOC, DOCX up to 15MB</span>
                    </div>
                  )}
                </div>
              </div>

              {/* About Yourself */}
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  About Yourself &amp; Why You Want to Join (Cover Note)
                </label>
                <textarea
                  rows={3}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="Share a little bit about your passions, favorite tools (Canva, Meta Ads, Figma, etc.), or past projects..."
                  className="w-full bg-[#14151e] border border-white/10 focus:border-pink-500/50 focus:outline-none rounded-xl p-3 text-xs sm:text-sm text-white placeholder-zinc-500 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 active:scale-[0.99] disabled:opacity-50 text-white font-bold py-3 px-6 rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(244,63,94,0.4)] cursor-pointer mt-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Uploading &amp; Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <span>↗</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
