import { SocialLink } from "./types";

type FooterProps = {
  socialLinks: SocialLink[];
};

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-12">
      <div className="site-container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="text-sm font-medium text-white">
            Karan Jain <span className="text-[#00ff66] font-mono">(AKA Manware)</span>
          </p>
          <p className="text-xs text-zinc-500 mt-1">
            Cybersecurity Engineer & Researcher • Bengaluru, India
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "Email" ? undefined : "_blank"}
              rel={item.label === "Email" ? undefined : "noopener noreferrer"}
              className="transition hover:text-[#00ff66]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-zinc-600 font-mono">
          © {new Date().getFullYear()} Karan Jain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
