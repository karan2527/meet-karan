import type { AchievementItem, BlogPost, ExperienceItem, HeroStat, NavItem, Project, SkillGroup, SocialLink, VolunteeringItem } from "./types";

// All editable portfolio content is centralized here.
// If you want to add or update content, this is the first file to edit.
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Volunteering", href: "#volunteering" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "http://www.linkedin.com/in/karanjain2527" },
  { label: "GitHub", href: "https://github.com/karan2527" },
  { label: "Twitter", href: "https://x.com/Karanjain2311" },
  { label: "Dev.to", href: "https://dev.to/karanjain2527" },
  { label: "YouTube", href: "https://www.youtube.com/@kaaran-jain" },
  { label: "Email", href: "mailto:karanjain252727@gmail.com" },
];

export const heroStats: HeroStat[] = [
  { value: "9.0 CGPA", label: "B.E. CSE (Cybersecurity)" },
  { value: "Top 4%", label: "TryHackMe global ranking" },
  { value: "3rd / 60 teams", label: "HackSky Pan-India Hackathon" },
  { value: "10+ PRs merged", label: "Open source contributions" },
];

export const projects: Project[] = [
  {
    number: "01",
    slug: "darkdrop",
    category: "Offline secure file transfer tool",
    title: "DarkDrop",
    description:
      "A secure file transfer tool for sending files over a network with AES-256 encryption, password protection, and a dark Tkinter GUI.",
    descriptionHighlights: ["secure file transfer", "AES-256 encryption", "password protection", "Tkinter"],
    details: [
      {
        text: "Transfers files between sender and receiver modes over TCP/IP without sending plaintext data.",
        highlights: ["sender and receiver modes", "TCP/IP", "plaintext"],
      },
      {
        text: "Uses AES-256 in CBC mode with PBKDF2-SHA256 key derivation and 100,000 iterations.",
        highlights: ["AES-256", "CBC", "PBKDF2-SHA256", "100,000 iterations"],
      },
      {
        text: "Provides a dark-themed Tkinter interface with password-protected transfers.",
        highlights: ["dark-themed Tkinter", "password-protected transfers"],
      },
      {
        text: "Supports local-network or internet transfers with a combined send and receive workflow.",
        highlights: ["local-network", "internet transfers", "send and receive"],
      },
      {
        text: "Documents production hardening opportunities including dynamic salts, HMAC authentication, TLS, and integrity checks.",
        highlights: ["dynamic salts", "HMAC authentication", "TLS", "integrity checks"],
      },
    ],
    stack: ["Python", "Tkinter", "AES-256", "PBKDF2", "TCP/IP"],
    image: "/images/projects/darkdrop/DarkDrop Secure File Transfer.png",
    screenshots: [
      "/images/projects/darkdrop/s1.png",
      "/images/projects/darkdrop/s2.png",
    ],
    link: "https://github.com/karan2527/DarkDrop",
  },
  {
    number: "02",
    slug: "crackproof",
    category: "Password security analysis tool",
    title: "CrackProof",
    description:
      "A password security analyzer that combines entropy scoring, weak-pattern detection, and breach checking to help users create stronger passwords.",
    descriptionHighlights: ["password security analyzer", "entropy scoring", "weak-pattern detection", "breach checking"],
    details: [
      {
        text: "Estimates password entropy and analyzes character classes to provide a security score.",
        highlights: ["password entropy", "character classes", "security score"],
      },
      {
        text: "Detects sequences, repeated characters, keyboard runs, dates, and dictionary words.",
        highlights: ["sequences", "keyboard runs", "dates", "dictionary words"],
      },
      {
        text: "Supports optional Have I Been Pwned range queries using k-anonymity for breach checks.",
        highlights: ["Have I Been Pwned", "range queries", "k-anonymity"],
      },
      {
        text: "Presents live scoring and actionable password tips in a dark-themed Tkinter interface.",
        highlights: ["live scoring", "password tips", "Tkinter"],
      },
    ],
    stack: ["Python", "Tkinter", "Entropy Analysis", "Pattern Detection", "HIBP"],
    image: "/images/projects/crackproof/CrackProof Terminal Security Banner.png",
    screenshots: ["/images/projects/crackproof/s1.png"],
    link: "https://github.com/karan2527/CrackProof",
  },
  {
    number: "03",
    slug: "gqlx",
    category: "GraphQL security testing framework",
    title: "gqlx",
    description:
      "A Python GraphQL security scanner that discovers schemas, generates type-aware operations, runs bounded security modules, and produces reviewable reports.",
    descriptionHighlights: ["Python GraphQL security scanner", "discovers schemas", "type-aware operations", "security modules"],
    details: [
      {
        text: "Discovers GraphQL schemas through full, bypass, partial, or wordlist-based introspection methods.",
        highlights: ["GraphQL schemas", "full", "bypass", "partial", "wordlist-based introspection"],
      },
      {
        text: "Maps queries, mutations, fields, arguments, types, and relationships before building valid operations.",
        highlights: ["queries", "mutations", "fields", "valid operations"],
      },
      {
        text: "Runs security modules for information disclosure, injection, BOLA, authentication, SSRF, tenant isolation, and DoS.",
        highlights: ["information disclosure", "injection", "BOLA", "SSRF", "tenant isolation", "DoS"],
      },
      {
        text: "Uses response, timing, and cross-identity oracles to separate confirmed findings from tentative signals.",
        highlights: ["timing", "cross-identity", "confirmed findings", "tentative signals"],
      },
      {
        text: "Exports HTML, JSON, or Markdown reports with evidence, confidence, severity, and remediation guidance.",
        highlights: ["HTML", "JSON", "Markdown", "confidence", "severity"],
      },
    ],
    stack: ["Python", "GraphQL", "Security Testing", "CLI", "HTML/JSON/Markdown"],
    image: "/images/gqlx_banner.png",
    screenshots: [],
    link: "https://github.com/karan2527/gqlx",
  },
  {
    number: "04",
    slug: "stegx",
    category: "Image steganography CLI",
    title: "StegX",
    description:
      "A lightweight Python CLI for hiding and extracting text in images with LSB steganography and minimal visible pixel changes.",
    descriptionHighlights: ["Python CLI", "hiding and extracting text", "LSB steganography", "minimal visible pixel changes"],
    details: [
      {
        text: "Embeds UTF-8 message bits into the least significant bits of RGB pixel channels.",
        highlights: ["UTF-8", "least significant bits", "RGB pixel channels"],
      },
      {
        text: "Supports PNG, BMP, JPG, and JPEG image inputs through a simple command-line interface.",
        highlights: ["PNG", "BMP", "JPG", "JPEG", "command-line interface"],
      },
      {
        text: "Checks image capacity before embedding a message.",
        highlights: ["image capacity"],
      },
      {
        text: "Provides separate capacity, embed, and extract commands for the core workflow.",
        highlights: ["capacity", "embed", "extract"],
      },
      {
        text: "Automatically saves extracted text to decoded_message.txt and recommends lossless formats for reliability.",
        highlights: ["decoded_message.txt", "lossless formats"],
      },
    ],
    stack: ["Python", "LSB", "Steganography", "CLI", "Pillow"],
    image: "/images/stegx_banner.png",
    screenshots: [],
    link: "https://github.com/karan2527/stegx",
  },
  {
    number: "05",
    slug: "readme",
    category: "Flutter blog app",
    title: "ReadMe",
    description:
      "A Flutter blog app that runs standalone or inside the Flutter Kanpur app, with Supabase-backed content, OAuth setup, deep links, and Shorebird updates.",
    descriptionHighlights: ["Flutter blog app", "standalone", "Supabase", "deep links", "Shorebird"],
    details: [
      {
        text: "Runs as a standalone Flutter application or as an embedded feature inside the Flutter Kanpur main app.",
        highlights: ["standalone Flutter application", "embedded", "Flutter Kanpur"],
      },
      {
        text: "Uses Supabase and OAuth configuration through an environment file that stays out of the committed package.",
        highlights: ["Supabase", "OAuth", "environment file"],
      },
      {
        text: "Supports shared article deep links that open content inside the app when platform verification is configured.",
        highlights: ["article deep links", "platform verification"],
      },
      {
        text: "Uses Shorebird for Dart code patches on the standalone app while native changes still require a store release.",
        highlights: ["Shorebird", "Dart code patches", "native changes", "store release"],
      },
    ],
    stack: ["Flutter", "Dart", "Supabase", "OAuth", "Shorebird"],
    image: "/images/projects/readme/readme_banner.png",
    screenshots: [
      "/images/projects/readme/readme.png",
      "/images/projects/readme/s1.png",
      "/images/projects/readme/s2.png",
      "/images/projects/readme/s3.png",
      "/images/projects/readme/s4.png",
    ],
    link: "https://github.com/Flutter-Kanpur/readmeApp",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.drishtant.readme&hl=en_IN",
  },
  {
    number: "06",
    slug: "azaadi",
    category: "Flutter music player app",
    title: "Azaadi",
    description:
      "A Flutter music player application and open-source mobile project built as a foundation for a cross-platform app experience.",
    descriptionHighlights: ["Flutter music player", "open-source", "cross-platform app"],
    details: [
      {
        text: "Built with Flutter as a mobile music player application.",
        highlights: ["Flutter", "music player application"],
      },
      {
        text: "Uses the standard Flutter project structure as a foundation for continued application development.",
        highlights: ["standard Flutter project structure"],
      },
      {
        text: "Can be run and extended using the Flutter development workflow and official Flutter resources.",
        highlights: ["Flutter development workflow", "official Flutter resources"],
      },
    ],
    stack: ["Flutter", "Dart", "Mobile", "Music Player"],
    image: "/images/projects/azaadi/azaadi.png",
    screenshots: [
      "/images/projects/azaadi/s1.png",
      "/images/projects/azaadi/s2.png",
      "/images/projects/azaadi/s3.png",
    ],
    link: "https://github.com/Flutter-Kanpur/azadi-app",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.flutterkanpur.azaadi&hl=en_IN",
    imageBadge: "Maintainer",
    imagePosition: "center 40%",
  },
  {
    number: "07",
    slug: "flutter-kanpur-ui-kit",
    category: "Flutter UI component library",
    title: "Flutter Kanpur UI Kit",
    description:
      "An open-source Flutter component library from the Flutter Kanpur Community with reusable widgets, animations, and UI patterns for production-ready interfaces.",
    descriptionHighlights: ["open-source Flutter component library", "reusable widgets", "animations", "production-ready interfaces"],
    details: [
      {
        text: "Contributed the Gradient Button, a custom Flutter button with a gradient effect designed to create a 3D visual appearance.",
        highlights: ["Gradient Button", "custom Flutter button", "gradient effect", "3D visual appearance"],
      },
      {
        text: "The package also provides Custom Navigation Bar and Glass Navigation Bar components with reveal-text and glass effects.",
        highlights: ["Custom Navigation Bar", "Glass Navigation Bar", "reveal-text", "glass effects"],
      },
      {
        text: "Published as flutter_kanpur_ui_kit, with the latest documented package version 0.0.13 on pub.dev.",
        highlights: ["flutter_kanpur_ui_kit", "0.0.13", "pub.dev"],
      },
      {
        text: "Designed to grow through community contributions and provide consistent UI building blocks for Flutter applications.",
        highlights: ["community contributions", "consistent UI building blocks", "Flutter applications"],
      },
    ],
    stack: ["Flutter", "Dart", "UI Components", "GradientButton", "Open Source"],
    image: "/images/projects/gradientbutton.png",
    screenshots: ["/images/projects/gradientbutton.png"],
    link: "https://github.com/Flutter-Kanpur/Flutter-Kanpur-Ui-Kit",
    packageLink: "https://pub.dev/packages/flutter_kanpur_ui_kit",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "National Centre for Communication Security (NCCS)",
    role: "Security Assurance Standards (SAS) Division, Intern",
    period: "2026",
    details: [
      {
        text: "Designed and implemented virtual enterprise networks using EVE-NG, pfSense, and Cisco devices, configuring VLANs, Layer-3 routing, firewall policies, and NAT for network segmentation and access control.",
        highlights: ["EVE-NG", "pfSense", "Cisco", "VLANs", "Layer-3 routing", "firewall policies", "NAT"],
      },
      {
        text: "Performed protocol fuzzing on Netgear and Cisco routers using Synopsys Defensics, executing 200K+ test cases on ARP and ICMP protocols to evaluate protocol robustness and identify potential vulnerabilities.",
        highlights: ["protocol fuzzing", "Netgear", "Cisco", "Synopsys Defensics", "200K+ test cases", "ARP", "ICMP"],
      },
      {
        text: "Conducted vulnerability assessments using Tenable Nessus, analyzing 80+ security findings related to weak protocols, cryptographic algorithms, SSH/Telnet, SSL/TLS, and certificate configurations.",
        highlights: ["vulnerability assessments", "Tenable Nessus", "80+ security findings", "cryptographic algorithms", "SSH/Telnet", "SSL/TLS"],
      },
      {
        text: "Explored post-quantum cryptographic algorithms and quantum-safe migration strategies to understand emerging cybersecurity challenges and quantum-resistant security solutions.",
        highlights: ["post-quantum cryptographic algorithms", "quantum-safe migration strategies", "quantum-resistant security solutions"],
      },
      {
        text: "Worked under the guidance and mentorship of Sh. Umakant (ADET, SAS) and Sh. Ashish Vyas (ADG, SAS), gaining valuable insights into communication security, security assurance standards, and industry-level security assessment practices.",
        highlights: ["Sh. Umakant", "Sh. Ashish Vyas", "communication security", "security assurance standards", "security assessment practices"],
      },
    ],
    tags: [
      "EVE-NG",
      "pfSense",
      "Cisco",
      "VLANs",
      "Layer-3 Routing",
      "Protocol Fuzzing",
      "Synopsys Defensics",
      "Tenable Nessus",
      "SSL/TLS",
      "Post-Quantum Cryptography",
    ],
  },
  {
    company: "Indian Institute of Technology Hyderabad (IITH)",
    role: "Security Research Intern",
    period: "Jun 2026 - Jul 2026",
    details: [
      {
        text: "Implemented application-specific symmetric-key cryptographic primitives under the guidance of Prof. Shibam Ghosh, focusing on cryptographic design, implementation, and security analysis.",
        highlights: ["symmetric-key cryptographic primitives", "Prof. Shibam Ghosh", "cryptographic design", "security analysis"],
      },
      {
        text: "Analyzed the mathematical foundations of TLS, key exchange mechanisms, and modern encryption algorithms to understand their underlying security properties.",
        highlights: ["mathematical foundations of TLS", "key exchange mechanisms", "modern encryption algorithms"],
      },
      {
        text: "Evaluated cryptographic algorithms used in secure boot architectures, studying their design, implementation, and resistance to various cryptanalytic attacks.",
        highlights: ["cryptographic algorithms", "secure boot architectures", "cryptanalytic attacks"],
      },
    ],
    tags: [
      "Symmetric-Key Cryptography",
      "Cryptographic Design",
      "TLS",
      "Key Exchange",
      "Encryption Algorithms",
      "Secure Boot",
      "Cryptanalysis",
    ],
  },
  {
    company: "GyanX",
    role: "Mobile Application Developer (Flutter)",
    period: "Nov 2025 - Feb 2026",
    details: [
      {
        text: "Developed and deployed a cross-platform Flutter application from development to Google Play Store, implementing 20+ user-facing screens and end-to-end application workflows.",
        highlights: ["cross-platform Flutter application", "Google Play Store", "20+ user-facing screens", "end-to-end application workflows"],
      },
      {
        text: "Designed and implemented responsive, production-ready UI components for Android and iOS, ensuring consistent layouts and seamless user experiences across multiple application modules.",
        highlights: ["responsive", "production-ready UI components", "Android and iOS", "seamless user experiences"],
      },
      {
        text: "Integrated Firebase Authentication and Cloud Firestore for secure user authentication and real-time data management, along with Swagger-documented REST APIs for backend communication and data integration.",
        highlights: ["Firebase Authentication", "Cloud Firestore", "secure user authentication", "real-time data management", "Swagger-documented REST APIs"],
      },
    ],
    tags: [
      "Flutter",
      "Google Play Store",
      "Responsive UI",
      "Android",
      "iOS",
      "Firebase Authentication",
      "Cloud Firestore",
      "REST APIs",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["C/C++", "Python", "Java", "Go", "Dart"],
  },
  {
    title: "Frameworks & Tools",
    items: ["AWS", "Git", "Spring Boot", "Docker", "Kubernetes", "AI Agents", "Flutter"],
  },
  {
    title: "Security Concepts",
    items: ["Cryptography", "Networking", "Reverse Engineering", "Steganography"],
  },
  {
    title: "Security Tools",
    items: ["Kali Linux", "Nmap", "Burp Suite", "Wireshark", "Metasploit", "Snyk", "OWASP Top 10"],
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "Winners at Hacksky 2025 - Pan-India Cybersecurity Hackathon",
    organization: "Kaspersky, MIT Bengaluru",
    date: "Aug 2025",
    image: "/images/achivements/kaspersky.png",
    imagePosition: "center 30%",
  },
  {
    title: "2nd place in security track and 4th overall at Recurzive V2 International Hackathon",
    organization: "DSCE,Bangalore",
    date: "Sept 2025",
    image: "/images/achivements/recursive.png",
    imagePosition: "center 60%",
  },
  {
    title: "Special mention and Top 5 at we Srijan 2025",
    organization: "Welingkar Institute of management, bangaluru",
    date: "Apr 2025",
    image: "/images/achivements/weschool.png",
    imagePosition: "left 40%",
  },
  {
    title: "1st place in Coding Relay 2025",
    organization: "DSCE,Bangalore",
    date: "Mar 2025",
    image: "/images/achivements/codingrelay.png",
    imagePosition: "left ",
  },
  {
    title: "1st place in JavaVerse 2024",
    organization: "DSCE,Bangalore",
    date: "Nov 2024",
    image: "/images/achivements/javaverse.png",
    imagePosition: "center 30%",
  }
];

export const invitationAchievements: AchievementItem[] = [
  {
    title: "Invited as Mentor & Judge - Farlands-48 hr",
    organization: "Cambridge Institute of Technology",
    date: "Oct 2026",
    image: "/images/achivements/farlands.jpg",
    imagePosition: "center 45%",
  },
  {
    title: "Invited as Mentor & Judge - Cypher 4.0",
    organization: "Atria Institute of Technology",
    date: "Oct 2026",
    image: "/images/achivements/cypher_4.JPG",
    imagePosition: "center",
  },
  {
    title: "Invited as Chief Guest - Sustainathon-26",
    organization: "VIT Vellore",
    date: "Oct 2026",
    image: "/images/achivements/vit_vellore.jpeg",
    imagePosition: "center 55%",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "What Really Happens When You Move Your Mouse?",
    description: "Explore the technology behind mouse movement and how sensors track every tiny motion.",
    date: "May 2026",
    readTime: "6 min read",
    tag: "Technology",
    link: "https://dev.to/karanjain2527/what-really-happens-when-you-move-your-mouse-4nj2",
    image: "/images/projects/darkdrop.png",
    imagePosition: "center 30%",
  },
  {
    title: "Hacking the Network: Spying on Devices with Bettercap in Kali Linux ",
    description: "Learn how Bettercap can analyze network traffic and demonstrate ARP spoofing in a controlled lab environment.",
    date: "Dec 2024",
    readTime: "4 min read",
    tag: "Cybersecurity",
    link: "https://dev.to/karanjain2527/hacking-the-network-spying-on-devices-with-bettercap-in-kali-linux-22l4",
    image: "/images/projects/gradientbutton.png",
    imagePosition: "center 30%",
  },
  {
    title: "Simplify Your Workflow: Effortless File Transfer Between VM and Windows ",
    description: "Deconstructing real-world CTF problem sets, symmetric cipher attacks, and secure boot hardware analysis from national hackathons.",
    date: "Dec 2024",
    readTime: "4 min read",
    tag: "Linux",
    link: "https://dev.to/karanjain2527/simplify-your-workflow-effortless-file-transfer-between-vm-and-windows-2mi0",
    image: "/images/achivements/kaspersky.png",
    imagePosition: "center 30%",
  },
];

export const volunteering: VolunteeringItem[] = [
  {
    organization: "Google Agentic AI Hackathon 2025 ",
    role: "Command Center Team",
    period: "Google",
    details:
      "As part of a Guinness World Record event, I managed participant data, handled evaluations across multiple rounds, and ensured smooth, real-time operations throughout the event. ",
    tags: ["Teamwork", "Event Coordination"],
    image: "/images/Vlunteering/google_ai_hackathon.png",
    imagePosition: "center 25%",
  },
  {
    organization: "Sandbox V2 Hackathon & GlitchCraft",
    role: "Organiser and Tech support",
    period: "Aegis Club",
    details:
      "Managed the technical operations for Sandbox V2 & GlitchCraft, designed CTF challenges, and mentored juniors throughout the event.",
    tags: ["Tech support", "Event management", "CTF design", "Mentorship"],
    image: "/images/Vlunteering/sandboxV2.jpeg",
    imagePosition: "center 30%",
  },
  {
    organization: "Paytm AI Hackathon",
    role: "Technical Volunteer",
    period: "Paytm",
    details:
      "Served as a Technical Volunteer at the Paytm AI Hackathon, assisting participants with technical issues, supporting event infrastructure, and ensuring the smooth execution of hackathon activities.",
    tags: ["Teamwork", "Leadership"],
    image: "/images/Vlunteering/paytm.jpeg",
    imagePosition: "center 40%",
  },
];
