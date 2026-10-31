import type { AchievementItem, BlogPost, CertificationItem, ExperienceItem, HeroStat, NavItem, Project, SkillGroup, SocialLink, VolunteeringItem } from "./types";

// All editable portfolio content is centralized here.
// If you want to add or update content, this is the first file to edit.
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blog", href: "#blog" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "http://www.linkedin.com/in/karanjain2527" },
  { label: "GitHub", href: "https://github.com/karan2527" },
  { label: "Twitter", href: "https://x.com/Karanjain2311" },
  { label: "Dev.to", href: "https://dev.to/karanjain2527" },
  { label: "YouTube", href: "https://www.youtube.com/@kaaran-jain" },
  { label: "Email", href: "mailto:karanjain2527@gmail.com" },
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
    category: "Offline secure file transfer tool",
    title: "DarkDrop",
    description:
      "A privacy-first, AES-256 encrypted file transfer tool with a password-protected sharing mechanism and dark-themed GUI - no internet or cloud dependency required.",
    stack: ["Python", "Tkinter", "Cryptography"],
    image: "/images/projects/darkdrop.png",
    link: "https://github.com/karan2527/DarkDrop",
  },
  {
    number: "02",
    category: "Privacy & Security Mobile App",
    title: "Azaadi",
    description:
      "An open-source, privacy-focused application built with Flutter to provide secure tools and digital sovereignty resources for users.",
    stack: ["Flutter", "Dart", "Security", "Open Source"],
    image: "/images/projects/azaadi.png",
    link: "https://github.com/Flutter-Kanpur/azadi-app",
    imagePosition: " center 40%",


  },
  {
    number: "03",
    category: "Open-source mobile app",
    title: "ReadMe",
    description:
      "An open-source mobile application for reading, organizing, and managing content with a clean and modern user experience.",
    stack: ["Flutter", "Dart", "Open Source"],
    image: "/images/projects/readme.png",
    link: "https://github.com/Flutter-Kanpur/readmeApp",
    imagePosition: " center 40%",
  },
  {
    number: "04",
    category: "Open-source contribution & UI Kit",
    title: "Flutter Kanpur UI Kit",
    description:
      "Published a reusable Flutter UI package featuring custom widgets like GradientButton() and merged 10+ PRs into the official Flutter Kanpur app.",
    stack: ["Flutter", "Dart", "UI Package", "pub.dev"],
    image: "/images/projects/gradientbutton.png",
    link: "https://pub.dev/packages/flutter_kanpur_ui_kit",
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

export const certifications: CertificationItem[] = [
  {
    title: "Pre Security",
    issuer: "TryHackMe",
    link: "https://tryhackme.com",
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
