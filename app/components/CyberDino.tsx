"use client";

import { useState } from "react";

const QUOTES = [
  "Rawr! [PQC Guard]",
  "System: 100% Secure",
  "0 Vulnerabilities Found",
  "Offline Dino Activated",
  "Click me to Jump! 🦖",
  "Status: Cryptography verified",
];

export default function CyberDino() {
  const [isJumping, setIsJumping] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(false);

  const handleJump = () => {
    if (isJumping) return;
    setIsJumping(true);
    setShowBubble(true);
    setQuoteIndex((prev) => (prev + 1) % QUOTES.length);

    setTimeout(() => {
      setIsJumping(false);
    }, 450);

    setTimeout(() => {
      setShowBubble(false);
    }, 2800);
  };

  return (
    <div className="relative inline-block select-none group">
      {/* Speech Bubble */}
      {showBubble && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-[#00ff66]/40 bg-black/95 px-2.5 py-1 text-[11px] font-mono text-[#00ff66] shadow-[0_0_12px_rgba(0,255,102,0.3)] animate-fadeIn z-30">
          {QUOTES[quoteIndex]}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 border-b border-r border-[#00ff66]/40 bg-black/95" />
        </div>
      )}

      {/* Interactive Dino Button */}
      <button
        onClick={handleJump}
        title="Cyber T-Rex (Click to jump!)"
        className={`
          relative flex items-center justify-center p-2 rounded-xl
          border border-white/10 bg-black/60 backdrop-blur-md
          transition-all duration-300 hover:border-[#00ff66]/50 hover:bg-[#00ff66]/5
          cursor-pointer
          ${isJumping ? "-translate-y-4 scale-110" : "translate-y-0 hover:scale-105"}
        `}
      >
        {/* Pixel Art SVG of the Chrome Dino */}
        <svg
          viewBox="0 0 44 48"
          className="h-9 w-9 text-zinc-300 hover:text-[#00ff66] transition-colors drop-shadow-[0_0_6px_rgba(0,255,102,0.4)]"
          fill="currentColor"
          shapeRendering="crispEdges"
        >
          {/* Dino Pixel Body */}
          {/* Head */}
          <rect x="22" y="4" width="16" height="12" />
          <rect x="38" y="8" width="4" height="8" />
          {/* Eye */}
          <rect x="26" y="6" width="3" height="3" fill="#000" />
          <rect x="27" y="7" width="1" height="1" fill="#00ff66" />
          {/* Snout open / teeth */}
          <rect x="32" y="12" width="8" height="2" fill="#000" />
          {/* Neck & Chest */}
          <rect x="20" y="16" width="12" height="14" />
          {/* Back & Tail */}
          <rect x="6" y="18" width="14" height="10" />
          <rect x="2" y="20" width="4" height="6" />
          <rect x="0" y="22" width="2" height="4" />
          {/* Tiny Arms */}
          <rect x="32" y="20" width="4" height="2" />
          <rect x="34" y="22" width="2" height="3" />
          {/* Legs */}
          <rect x="14" y="30" width="6" height="8" />
          <rect x="14" y="38" width="4" height="4" />
          <rect x="12" y="42" width="6" height="2" />

          <rect x="24" y="30" width="6" height="6" />
          <rect x="26" y="36" width="4" height="6" />
          <rect x="26" y="42" width="6" height="2" />
          {/* Ground dashes */}
          <rect x="2" y="46" width="40" height="1" fill="#00ff66" opacity="0.4" />
        </svg>

        {/* Small Label */}
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-zinc-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          cyber_dino
        </span>
      </button>
    </div>
  );
}
