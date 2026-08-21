"use client";

import { useEffect, useState } from "react";

export default function InteractiveExtras() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Monitor scroll position to show/hide "Back to Top"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen to custom clipboard copy events to show toast
  useEffect(() => {
    const handleToastEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string }>;
      setToastMessage(customEvent.detail.message);
      
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      
      return () => clearTimeout(timer);
    };

    window.addEventListener("show-toast", handleToastEvent);
    return () => window.removeEventListener("show-toast", handleToastEvent);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Toast Notification */}
      <div
        className={`
          fixed bottom-6 right-6 z-[200]
          flex items-center gap-3
          rounded-xl border border-[#00ff66]/30 bg-black/90 px-4 py-3
          text-sm text-white shadow-2xl shadow-[#00ff66]/10 backdrop-blur-md
          transition-all duration-300 ease-out
          ${toastMessage ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95 pointer-events-none"}
        `}
      >
        <span className="flex h-2.5 w-2.5">
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ff66]" />
        </span>
        <span className="font-mono">{toastMessage}</span>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`
          fixed bottom-6 left-6 z-[150]
          flex h-10 w-10 items-center justify-center
          rounded-lg border border-white/10 bg-black/85 text-zinc-400
          shadow-lg backdrop-blur-md transition-all duration-300 ease-out
          hover:scale-105 hover:border-[#00ff66]/40 hover:text-white
          active:scale-95 cursor-pointer
          ${showScrollTop ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}
        `}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}

// Global copy helper
export function copyToClipboard(text: string, message: string) {
  navigator.clipboard.writeText(text).then(() => {
    const event = new CustomEvent("show-toast", {
      detail: { message },
    });
    window.dispatchEvent(event);
  });
}
