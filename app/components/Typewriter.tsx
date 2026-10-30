"use client";

import { useEffect, useState } from "react";

const roles = [
  "Security Researcher",
  "Flutter Developer",
  "Software Engineer",
];

export default function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let delay = 100;

    // Typing
    if (!isDeleting) {
      delay = 100;

      // Full word ke baad pause
      if (text === currentRole) {
        delay = 1500;
      }
    }

    // Deleting
    if (isDeleting) {
      delay = 60;

      // Empty hone ke baad short pause
      if (text === "") {
        delay = 400;
      }
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // One character add
        const nextText = currentRole.substring(
          0,
          text.length + 1
        );

        setText(nextText);

        // Full word typed
        if (nextText === currentRole) {
          setIsDeleting(true);
        }
      } else {
        // One character remove
        const nextText = currentRole.substring(
          0,
          text.length - 1
        );

        setText(nextText);

        // Word completely deleted
        if (nextText === "") {
          setIsDeleting(false);

          setRoleIndex(
            (prevIndex) => (prevIndex + 1) % roles.length
          );
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="min-h-[45px] font-mono text-2xl font-semibold text-[#00ff66] sm:text-3xl">
      {text}
      <span className="ml-1 animate-pulse">_</span>
    </div>
  );
}