# Portfolio Website Build Prompt — Karan Jain

Use this prompt with an AI coding tool (Claude Code, Cursor, v0, Lovable, Bolt, etc.) to generate a personal portfolio site. It is modeled on the structure and feel of matejbendik.com, adapted to a cybersecurity-focused CS student.

---

## PROMPT (copy everything below into your AI coding tool)

Build a modern, minimal, single-page personal portfolio website for a computer science / cybersecurity student. Match the structure, pacing, and polish of matejbendik.com — a dark, confident, product-shipper aesthetic — but reskin all content, copy, and sections for a security researcher rather than a SaaS founder.

### Tech stack
- Next.js 14+ (App Router) with TypeScript
- Tailwind CSS for styling
- Framer Motion for scroll-reveal and hover micro-interactions
- Deploy-ready for Vercel
- Fully responsive (mobile-first), fast, accessible (semantic HTML, proper alt text, keyboard nav)

### Visual direction
- Dark theme by default (near-black background, off-white text, one accent color — suggest a terminal/cyber green or electric blue, e.g. `#00FF9C` or `#3B82F6`)
- Generous whitespace, large confident typography (a clean sans-serif like Inter or Geist for body, a slightly heavier weight for headlines)
- Subtle grid/noise texture or a faint animated "matrix"-style or particle background in the hero — nothing distracting
- Numbered section labels (e.g. "01", "02") like a design portfolio
- Rounded cards with soft borders (`border-white/10`), hover states that lift slightly and glow with the accent color
- Monospace font accents for code snippets, tags, and stats (e.g. terminal-style `> whoami`)

### Site structure & content

**1. Nav / Header**
- Logo/name: "Karan Jain"
- Command-palette style search trigger (optional, nice-to-have) or simple nav links: Work, Experience, Projects, About, Contact
- Top-right: current status pill, e.g. "Available for internships · Bengaluru, India"

**2. Hero**
- Eyebrow line: "Cybersecurity Engineer · B.E. CSE (Cybersecurity), DSCE"
- Headline: "I break systems to help build the ones that hold."
  (or similar — something that signals offensive-security curiosity + engineering rigor)
- Subline: "I'm Karan, a computer science student specializing in cybersecurity — researching post-quantum cryptography, building secure tools, and breaking things at hackathons."
- CTA buttons: "View Projects" (scrolls to projects) and "Get In Touch" (mailto or contact form)
- Right side: portrait photo or an abstract terminal/lock/shield illustration
- Small stat strip beneath hero, 3–4 milestones:
  - "9.0 CGPA" — B.E. Computer Science (Cybersecurity)
  - "Top 4%" — TryHackMe global ranking
  - "3rd / 60 teams" — HackSky Pan-India Hackathon (Kaspersky, MIT Bangalore)
  - "10+ PRs merged" — Open source (Flutter Kanpur)

**3. Selected Work / Projects (numbered, 01→0n)**
Feature each project as a card with: number, category tag, title, one-line description, tech stack pills, and a link.

- **01 — DarkDrop**
  Category: Offline secure file transfer tool
  Description: A privacy-first, AES-256 encrypted file transfer tool with a password-protected sharing mechanism and dark-themed GUI — no internet or cloud dependency required.
  Stack: Python, Tkinter, Cryptography
  Link: GitHub (DarkDrop repo)

- **02 — Flutter Kanpur UI Kit**
  Category: Open-source contribution
  Description: Published a reusable Flutter UI package (featuring a `GradientButton()` widget) to pub.dev, and merged 10+ PRs into the official Flutter Kanpur app.
  Stack: Flutter, Dart
  Link: pub.dev package + GitHub

- (Optional 03) Add the GyanX mobile app as a case study if a public link/screenshot exists — cross-platform Flutter app shipped to the Play Store with Firebase auth and Swagger-documented APIs.

**4. Experience (vertical timeline, expandable rows like matejbendik.com's "Employment Type / Period / Duration" rows)**

- **National Centre for Communication Security (NCCS)** — Security Assurance Standards (SAS) Division, Intern
  Researching Post-Quantum Cryptography (PQC) and its role in securing future communication systems; studying ITSAR telecom security standards; analyzing cryptographic protocol implementations.
  Tags: Post-Quantum Cryptography, ITSAR, Telecom Security

- **Indian Institute of Technology Hyderabad (IITH)** — Security Research Intern · Jun 2026 – Jul 2026
  Worked on "application-specific symmetric-key primitives" under Prof. Shibam Ghosh; studied the mathematics behind TLS, key exchange, and encryption algorithms; analyzed cryptographic algorithms in secure boot architectures.
  Tags: Symmetric-Key Cryptography, TLS, Secure Boot

- **GyanX** — Mobile Application Developer (Flutter) · Nov 2025 – Feb 2026
  Built and shipped a cross-platform mobile app to the Play Store; designed a responsive production UI for Android/iOS; integrated Firebase auth and Swagger-documented APIs.
  Tags: Flutter, Firebase, REST APIs

**5. Skills**
Group into pills/tags across categories:
- Languages: C/C++, Python, Java, Go, Dart
- Frameworks & Tools: AWS, Git, Spring Boot, Docker, Kubernetes, AI Agents, Flutter
- Security Concepts: Cryptography, Networking, Reverse Engineering, Steganography
- Security Tools: Kali Linux, Nmap, Burp Suite, Wireshark, Metasploit, Snyk, OWASP Top 10

**6. Achievements (compact stat/award grid)**
- 3rd place / 60 teams — HackSky Pan-India Hackathon, MIT Bangalore (by Kaspersky)
- Selected — ACM India Summer School 2026: Symmetric Key Cryptography, IIT Hyderabad
- Top 4% — TryHackMe global ranking
- 4th rank + Special Mention / 100 teams — Recursive V2 (International Hackathon, DSCE)
- 1st place — JavaVerse (CSE IoT & Cybersecurity Dept, DSCE)
- 1st place — CodeRelay (ISE Dept, DSCE)

**7. Certifications (simple list with issuer)**
- Pre Security — TryHackMe
- AWS for Beginners — Great Learning
- C# and .NET Essential Training — LinkedIn Learning
- C# Unit Testing with xUnit — LinkedIn Learning
- Spring Boot 3 Essential Training — LinkedIn Learning

**8. About**
Short first-person paragraph: CS (Cybersecurity) undergrad at Dayananda Sagar College of Engineering (2023–2027), driven by cryptography research, CTFs, and building tools that respect user privacy. Mention the blend of offensive security curiosity (TryHackMe, hackathons) and formal research (NCCS, IITH) as a differentiator.

**9. Footer / Contact**
- Headline: "Let's build something secure."
- Email: karanjain2527@gmail.com
- Social links: LinkedIn, GitHub, dev.to
- Copyright line: "© 2026 Karan Jain."

### Interaction details
- Smooth scroll between sections, active nav-link highlighting
- Scroll-triggered fade/slide-up animations for each section (Framer Motion `whileInView`)
- Hover states on project/experience cards: subtle lift + accent-colored border glow
- Optional: a small live "GitHub contributions" heatmap component pulling from the GitHub API using the username on the resume
- Optional: a terminal-style animated line in the hero that types out rotating taglines (e.g. "Securing telecom protocols.", "Breaking things at hackathons.", "Researching post-quantum crypto.")

### Content rules
- Use only the real information provided above — do not invent employers, dates, or metrics not present in the source resume content.
- Keep copy confident but factual; avoid generic filler like "passionate about technology."
- Placeholder links (GitHub repo URLs, pub.dev link, portrait image) should be left as clearly marked placeholders (`# TODO: add link`) rather than fabricated URLs.

---

## Notes for Karan
- Swap in your actual GitHub/LinkedIn/dev.to URLs and a headshot before deploying.
- If you want the exact matejbendik.com "command palette" (⌘K search) or live visitor-presence map, call those out explicitly to your AI tool as stretch goals — they're non-trivial and optional.
- Once you have a working version, I can also help you build it directly here (as a React/HTML artifact) if you'd rather see it live than hand this prompt to another tool.
