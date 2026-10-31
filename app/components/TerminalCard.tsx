"use client";

import { useState } from "react";

type TerminalCardProps = {
  title?: string;
  lines?: string[];
  className?: string;
  interactive?: boolean;
};

const DEFAULT_LINES = [
  "$ whoami",
  "karan_jain - b.e. cse (cybersecurity)",
  "$ help",
  "Available commands:",
  "  whoami          who is this guy",
  "  ls              list directory contents",
  "  ls projects     list all github repos (live)",
  "  repos           alias for 'ls projects'",
  "  cat about       read about.md",
  "  cat skills      list tech stack",
  "  social          show social links",
  "  goto <page>     navigate: home | about | experience | skills | achievements | projects | certifications | volunteering",
  "  theme           toggle light/dark theme",
  "  clear           clear terminal (ctrl+l)",
];

export default function TerminalCard({
  title = "karan@dsce:~",
  lines: initialLines = DEFAULT_LINES,
  className = "",
  interactive = true,
}: TerminalCardProps) {
  const [history, setHistory] = useState<string[]>(initialLines);
  const [inputValue, setInputValue] = useState("");

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    // Split command and arguments
    const parts = trimmed.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(" ").toLowerCase();

    const response: string[] = [];

    if (command === "clear") {
      setHistory([]);
      return;
    }

    response.push(`$ ${trimmed}`);

    switch (command) {
      case "help":
        response.push(
          "Available commands:",
          "  whoami          who is this guy",
          "  ls              list directory contents",
          "  ls projects     list all github repos (live)",
          "  repos           alias for 'ls projects'",
          "  cat about       read about.md",
          "  cat skills      list tech stack",
          "  social          show social links",
          "  goto <page>     navigate: home | about | experience | skills | achievements | projects | certifications | volunteering",
          "  theme           toggle light/dark theme",
          "  clear           clear terminal (ctrl+l)"
        );
        break;

      case "whoami":
        response.push(
          "Karan Jain (AKA Manware) - Cybersecurity Undergraduate & Researcher",
          "B.E. Computer Science (Cybersecurity) @ Dayananda Sagar College of Engineering (2023-2027)",
          "Specializing in Cryptography (Symmetric-Key, Post-Quantum) and Secure Systems."
        );
        break;

      case "ls":
        if (args === "projects") {
          response.push(
            "Fetching live github repositories...",
            "  [01] DarkDrop - AES-256 encrypted offline file transfer tool",
            "  [02] Flutter Kanpur UI Kit - Reusable Flutter package",
            "  [03] GyanX - Cross-platform Flutter mobile application"
          );
        } else if (!args) {
          response.push(
            "about.md        skills.txt         experience.txt",
            "achievements.txt certifications.txt volunteering.txt"
          );
        } else {
          response.push(`ls: cannot access '${args}': No such file or directory`);
        }
        break;

      case "repos":
        response.push(
          "Fetching live github repositories...",
          "  [01] DarkDrop - AES-256 encrypted offline file transfer tool",
          "  [02] Flutter Kanpur UI Kit - Reusable Flutter package",
          "  [03] GyanX - Cross-platform Flutter mobile application"
        );
        break;

      case "cat":
        if (args === "about" || args === "about.md") {
          response.push(
            "Driven by cryptography research, CTFs, and building tools that respect user privacy.",
            "My work blends offensive-security curiosity with formal research, studying Post-Quantum Cryptography, ITSAR telecom security standards, and cryptographic protocol implementations."
          );
        } else if (args === "skills" || args === "skills.txt") {
          response.push(
            "Languages: C/C++, Python, Go, Java, Dart, Bash",
            "Frameworks: AWS, Git, Docker, Kubernetes, Spring Boot, Flutter",
            "Security Tools: Kali Linux, Nmap, Burp Suite, Wireshark, Metasploit, Snyk",
            "Concepts: Cryptography, Symmetric-Key Primitives, TLS, Secure Boot, Steganography"
          );
        } else if (args === "experience" || args === "experience.txt") {
          response.push(
            "• NCCS Intern - SAS Division: Studying PQC and ITSAR standards (2026)",
            "• IIT Hyderabad Security Research Intern: Symmetric primitives & TLS under Prof. Shibam Ghosh (2026)",
            "• GyanX Flutter Developer: Built and shipped cross-platform mobile apps (2025-2026)"
          );
        } else if (args === "achievements" || args === "achievements.txt") {
          response.push(
            "• 3rd place / 60 teams - HackSky Pan-India Hackathon (Kaspersky)",
            "• Selected - ACM India Summer School 2026 (Symmetric Key Cryptography)",
            "• Top 4% - TryHackMe global ranking",
            "• 1st place - JavaVerse & CodeRelay coding events"
          );
        } else if (args === "certifications" || args === "certifications.txt") {
          response.push(
            "• Pre Security - TryHackMe",
            "• AWS for Beginners - Great Learning",
            "• Spring Boot 3 & C# Essential Training - LinkedIn Learning"
          );
        } else if (args === "volunteering" || args === "volunteering.txt") {
          response.push(
            "• Google Agentic AI Hackathon: Command Center Team",
            "• DSCE Cybersecurity Club: Peer mentor & CTF problem setter",
            "• Hackathons Volunteer: Technical support & security workshop sharing"
          );
        } else if (!args) {
          response.push("usage: cat <filename>");
        } else {
          response.push(`cat: ${args}: No such file or directory`);
        }
        break;

      case "social":
        response.push(
          "LinkedIn: https://www.linkedin.com/in/karan-jain-5674062a4/",
          "GitHub:   https://github.com/Karan-2527",
          "Twitter:  https://x.com",
          "Dev.to:   https://dev.to",
          "Email:    karanjain2527@gmail.com"
        );
        break;

      case "goto":
        if (!args) {
          response.push("usage: goto <page>. Available: home, about, experience, skills, achievements, projects, blog, volunteering, terminal");
        } else {
          const targetId = args;
          const section = document.getElementById(targetId);
          if (section) {
            response.push(`Navigating to #${targetId}...`);
            setTimeout(() => {
              section.scrollIntoView({ behavior: "smooth" });
            }, 100);
          } else {
            response.push(`goto: section '#${targetId}' not found. Available: home, about, experience, skills, achievements, projects, blog, volunteering, terminal`);
          }
        }
        break;

      case "theme":
        response.push("Toggling theme...", "[SYSTEM WARNING] Theme override blocked. Cyber dark-mode green accent is enforced for maximum security.");
        break;

      case "ping":
        response.push("64 bytes from karanjain2527@gmail.com: icmp_seq=1 ttl=64 time=0.032 ms");
        break;

      default:
        response.push(`command not found: ${command}. type 'help' for options.`);
    }

    setHistory((prev) => [...prev, ...response]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputValue);
      setInputValue("");
    }
  };

  const renderLine = (line: string, index: number) => {
    if (line.startsWith("$ ")) {
      return (
        <p key={`${line}-${index}`} className="font-mono text-sm leading-6">
          <span className="text-[#00ff66] font-semibold">$ </span>
          <span className="text-white font-medium">{line.slice(2)}</span>
        </p>
      );
    }

    // Help command formatting: commands in green, descriptions in white
    const helpMatch = line.match(/^(\s{2,})([a-z0-9<>_ -]+?)(\s{2,})(.*)$/i);
    if (helpMatch) {
      const [, indent, cmdName, spacing, description] = helpMatch;
      return (
        <p key={`${line}-${index}`} className="font-mono text-sm leading-6">
          <span className="text-zinc-600">{indent}</span>
          <span className="text-[#00ff66] font-semibold">{cmdName}</span>
          <span className="text-zinc-600">{spacing}</span>
          <span className="text-white font-normal">{description}</span>
        </p>
      );
    }

    if (line.startsWith("Available commands:")) {
      return (
        <p key={`${line}-${index}`} className="font-mono text-sm text-[#00ff66] font-bold mt-1 mb-1">
          {line}
        </p>
      );
    }

    return (
      <p key={`${line}-${index}`} className="font-mono text-sm text-zinc-100 leading-6">
        {line}
      </p>
    );
  };

  return (
    <div
      className={[
        "overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-white/20",
        className,
      ].join(" ")}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#facc15]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
          <span className="ml-3 font-mono text-zinc-400">{title}</span>
        </div>
        {interactive && (
          <span className="text-[10px] text-[#00ff66]/80 font-mono tracking-wider select-none">
            ● INTERACTIVE CLI
          </span>
        )}
      </div>

      <div className="space-y-1.5 overflow-x-auto p-4 font-mono text-sm leading-7 text-zinc-100 min-h-[180px] max-h-[380px] sm:p-5">
        {history.map((line, index) => renderLine(line, index))}

        {interactive && (
          <div className="flex items-center gap-2 text-zinc-200 pt-2">
            <span className="text-[#00ff66] font-bold select-none">$</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="type help, whoami, ls, goto projects..."
              className="w-full bg-transparent text-sm focus:outline-none text-white placeholder-zinc-600 font-mono"
            />
          </div>
        )}
      </div>

      {interactive && (
        <div className="flex flex-wrap items-center gap-2 border-t border-white/10 bg-black/40 px-3 py-3 sm:px-4">
          <span className="text-[10px] uppercase tracking-wider text-zinc-500 self-center mr-1 font-mono">
            Commands:
          </span>
          {["help", "whoami", "ls", "ls projects", "cat about", "cat skills", "social", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-zinc-300 font-mono hover:text-white hover:border-[#00ff66] hover:bg-[#00ff66]/10 transition duration-150 active:scale-95 cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
