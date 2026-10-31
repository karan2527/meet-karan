"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import type { NavItem, SocialLink } from "./types";

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

type NavbarProps = {
  navItems: NavItem[];
  socialLinks: SocialLink[];
};

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

function DevToIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M2 5.5A1.5 1.5 0 013.5 4h17A1.5 1.5 0 0122 5.5v13a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 18.5v-13zm5.3 10.6V8.9H5.9v7.2h1.4zm3.2 0h2.2c2.3 0 3.7-1.5 3.7-3.6S15 8.9 12.7 8.9h-2.2v7.2zm1.4-1.2v-4.8h.8c1.4 0 2.3.8 2.3 2.4s-.9 2.4-2.3 2.4h-.8zm9.5 1.2v-1.2h-3.1V13h2.7v-1.2h-2.7v-1.7h3.1V8.9h-4.5v7.2h4.5z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.016 3.016 0 0 0 .502 6.186C0 8.057 0 12 0 12s0 3.943.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.943 24 12 24 12s0-3.943-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") return <LinkedInIcon />;
  if (label === "GitHub") return <GitHubIcon />;
  if (label === "Twitter") return <TwitterIcon />;
  if (label === "Dev.to") return <DevToIcon />;
  if (label === "YouTube") return <YouTubeIcon />;
  if (label === "Portfolio" || label === "TryHackMe") return <PortfolioIcon />;
  return <EmailIcon />;
}

export default function Navbar({ navItems, socialLinks }: NavbarProps) {
  const isClient = useIsClient();
  const [now, setNow] = useState(() => new Date());
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Update clock every second
  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  // ScrollSpy - Track visible section
  useEffect(() => {
    const sections = navItems.map((item) => item.href.replace("#", ""));

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navItems]);

  // Prevent scroll when either mobile menu is open
  useEffect(() => {
    if (isNavOpen || isSocialOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen, isSocialOpen]);

  // Close menus on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsNavOpen(false);
        setIsSocialOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Bangalore / IST time
  const bangaloreTime = useMemo(() => {
    return new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(now);
  }, [now]);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
    setIsSocialOpen(false);
  };

  const toggleSocial = () => {
    setIsSocialOpen((prev) => !prev);
    setIsNavOpen(false);
  };

  const closeAll = () => {
    setIsNavOpen(false);
    setIsSocialOpen(false);
  };

  return (
    <header
      className="
        sticky top-0 z-[100]
        border-b border-white/10
        bg-black/90
        py-3.5
        backdrop-blur-xl
      "
    >
      <div className="site-container flex items-center justify-between">
        
        {/* ================================================= */}
        {/* DESKTOP LEFT: Social Logos (Rounded Rectangles)   */}
        {/* ================================================= */}
        <div className="hidden xl:flex items-center gap-2">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              target={item.label === "Email" ? undefined : "_blank"}
              rel={item.label === "Email" ? undefined : "noopener noreferrer"}
              className="
                inline-flex h-9 w-9 items-center justify-center
                rounded-lg
                border border-white/15
                bg-white/[0.03]
                text-zinc-300
                transition-all duration-300
                hover:scale-105 hover:border-[#00ff66]/50 hover:bg-[#00ff66]/10 hover:text-[#00ff66]
                active:scale-95
              "
            >
              <SocialIcon label={item.label} />
            </a>
          ))}
        </div>

        {/* ================================================= */}
        {/* MOBILE LEFT: Hamburger for Socials                */}
        {/* ================================================= */}
        <div className="flex xl:hidden items-center">
          <button
            onClick={toggleSocial}
            aria-label="Toggle Social Links Menu"
            aria-expanded={isSocialOpen}
            className={`
              flex h-9 items-center gap-1.5 px-2.5
              rounded-lg border bg-white/[0.03] text-xs font-mono
              transition-all duration-300 active:scale-95 cursor-pointer
              ${isSocialOpen ? "border-[#00ff66] text-[#00ff66] bg-[#00ff66]/10" : "border-white/15 text-zinc-300 hover:text-white"}
            `}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            <span>Socials</span>
          </button>
        </div>

        {/* ================================================= */}
        {/* MOBILE MIDDLE: Bangalore / IST Clock              */}
        {/* ================================================= */}
        <div className="flex xl:hidden items-center">
          <div
            className="
              flex items-center gap-2
              rounded-full
              border border-white/15
              bg-white/5
              px-3 py-1
              text-[11px]
              text-zinc-200
              tabular-nums
              font-mono
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff66]"></span>
            </span>
            <span suppressHydrationWarning>{isClient ? bangaloreTime : ""}</span>
          </div>
        </div>

        {/* ================================================= */}
        {/* DESKTOP RIGHT: Nav Tabs + Clock                   */}
        {/* ================================================= */}
        <div className="hidden xl:flex items-center gap-4 lg:gap-6 ml-auto pl-4">
          
          <nav className="flex items-center gap-2 lg:gap-3.5 text-sm text-zinc-400">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    relative px-1.5 py-1 text-xs lg:text-[13px] transition-all duration-300 hover:text-white whitespace-nowrap
                    ${isActive ? "text-[#00ff66] font-medium" : ""}
                  `}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#00ff66] shadow-[0_0_8px_#00ff66]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Live Clock / Status Badge */}
          <div
            className="
              flex items-center gap-2
              rounded-full
              border border-white/15
              bg-white/5
              px-3 py-1.5
              text-xs
              text-zinc-200
              tabular-nums
              font-mono
              whitespace-nowrap
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff66]"></span>
            </span>
            <span suppressHydrationWarning>{isClient ? bangaloreTime : ""}</span>
          </div>

        </div>

        {/* ================================================= */}
        {/* MOBILE RIGHT: Hamburger for Navigation Tabs       */}
        {/* ================================================= */}
        <div className="flex xl:hidden items-center">
          <button
            onClick={toggleNav}
            aria-label="Toggle Navigation Tabs Menu"
            aria-expanded={isNavOpen}
            className={`
              flex h-9 w-9 flex-col items-center justify-center gap-1.5
              rounded-lg border bg-white/[0.03] text-zinc-300
              transition-all duration-300 active:scale-95 cursor-pointer
              ${isNavOpen ? "border-[#00ff66] text-[#00ff66] bg-[#00ff66]/10" : "border-white/15 hover:text-white"}
            `}
          >
            <span
              className={`h-0.5 w-5 bg-current transition-all duration-300 ${
                isNavOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-all duration-300 ${
                isNavOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-all duration-300 ${
                isNavOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

      </div>

      {/* ================================================= */}
      {/* MOBILE DRAWER 1: Social Links (Left Hamburger)    */}
      {/* ================================================= */}
      <div
        className={`
          absolute left-0 top-full w-full border-b border-white/10
          bg-[#070b10]/98 backdrop-blur-2xl transition-all duration-300 ease-in-out xl:hidden shadow-2xl
          ${isSocialOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#00ff66]">
            Connect & Social Channels
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel={item.label === "Email" ? undefined : "noopener noreferrer"}
                onClick={closeAll}
                className="
                  flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03]
                  px-3.5 py-3 text-sm text-zinc-300 transition duration-200
                  hover:border-[#00ff66]/50 hover:bg-[#00ff66]/10 hover:text-white
                "
              >
                <span className="text-[#00ff66]">
                  <SocialIcon label={item.label} />
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* MOBILE DRAWER 2: Navigation Tabs (Right Hamburger)*/}
      {/* ================================================= */}
      <div
        className={`
          absolute left-0 top-full w-full border-b border-white/10
          bg-[#070b10]/98 backdrop-blur-2xl transition-all duration-300 ease-in-out xl:hidden shadow-2xl
          ${isNavOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <div className="flex flex-col gap-6 px-6 py-6 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-2.5">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeAll}
                  className={`
                    flex items-center justify-between py-2 text-base text-zinc-300 transition duration-200
                    ${isActive ? "text-[#00ff66] font-medium" : "hover:text-white"}
                  `}
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <span className="font-mono">{item.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66]" />}
                </a>
              );
            })}
          </nav>

          <div className="h-px bg-white/10" />

          {/* Quick Info / Call to Actions */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-xs text-zinc-400 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff66]"></span>
              </span>
              <span>Available for internships • Bengaluru, IN</span>
            </div>

            <div className="flex gap-3">
              <a
                href="#projects"
                onClick={closeAll}
                className="flex-1 rounded-full bg-white px-4 py-2.5 text-center text-xs font-semibold text-black transition hover:bg-zinc-200"
              >
                Projects
              </a>
              <a
                href="mailto:karanjain252727@gmail.com"
                onClick={closeAll}
                className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-center text-xs font-semibold text-white transition hover:border-[#00ff66]/40 hover:text-[#00ff66]"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}