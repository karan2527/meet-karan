"use client";

import TerminalCard from "./TerminalCard";
import { copyToClipboard } from "./InteractiveExtras";

export default function Contact() {
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    copyToClipboard("karanjain2527@gmail.com", "Email copied to clipboard! 📋");
  };

  return (
    <footer id="contact" className="section-divider pt-16">
      <div className="site-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">Contact</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white">Let&apos;s build something secure.</h2>
          </div>

          <div className="space-y-3 text-sm text-zinc-300">
            <p className="flex items-center gap-2 flex-wrap">
              <span>Email:</span>
              <a href="mailto:karanjain2527@gmail.com" className="text-white hover:text-[#00ff66] transition">
                karanjain2527@gmail.com
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy Email"
                className="
                  inline-flex h-6 w-6 items-center justify-center
                  rounded bg-white/5 text-zinc-400 border border-white/10
                  hover:text-white hover:border-[#00ff66]/40 hover:bg-[#00ff66]/10
                  transition active:scale-90 cursor-pointer
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </p>
            <div className="flex flex-wrap gap-5 text-zinc-400">
              <a href="https://www.linkedin.com/in/karan-jain-5674062a4/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
              <a href="https://github.com/Karan-2527" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
              <a href="https://dev.to" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">dev.to</a>
            </div>
          </div>
        </div>

        <TerminalCard
          className="mt-8 max-w-lg"
          lines={["$ ping karanjain2527@gmail.com", "reply: lets build something secure"]}
        />

        <p className="mt-10 pb-8 text-sm text-zinc-500">© 2026 Karan Jain.</p>
      </div>
    </footer>
  );
}
