"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Cybersecurity Engineer",
  "Security Researcher",
  "Software Developer",
  "PQC & Cryptography Researcher",
  "Flutter Developer",
  "Ethical Hacker & CTF Player",
  "Open Source Contributor",
];

export default function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(ROLES[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = ROLES[roleIndex];

    if (isDeleting) {
      if (displayText.length > 0) {
        // Deleting character by character
        timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, 35);
      } else {
        // Finished deleting: wait briefly, then move to next role
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 250);
      }
    } else {
      if (displayText.length < currentRole.length) {
        // Typing forward next character
        timer = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 70);
      } else {
        // Finished typing role: pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div
      aria-live="polite"
      className="flex min-h-[56px] items-center font-mono text-2xl font-semibold tracking-tight text-[#00ff66] sm:min-h-[48px] sm:text-3xl"
    >
      <span className="drop-shadow-[0_0_12px_rgba(0,255,102,0.45)]">
        {displayText}
      </span>
      <span className="ml-1 inline-block animate-pulse font-bold text-[#00ff66] drop-shadow-[0_0_8px_rgba(0,255,102,0.8)]">
        _
      </span>
    </div>
  );
}
