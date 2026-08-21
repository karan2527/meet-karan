import type { CertificationItem } from "./types";

type CertificationCardProps = {
  item: CertificationItem;
};

export default function CertificationCard({ item }: CertificationCardProps) {
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-zinc-200 transition duration-300 hover:border-[#00ff66]/40 hover:bg-white/[0.04]">
      <div className="flex items-center gap-3.5">
        <span className="flex h-2 w-2 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66] shrink-0" />
        <div>
          <span className="font-semibold text-white tracking-tight">{item.title}</span>
          <span className="text-zinc-500 text-xs ml-2 font-mono">• {item.issuer}</span>
        </div>
      </div>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00ff66] hover:text-white transition-colors duration-200 self-start sm:self-center ml-5 sm:ml-0"
      >
        <span>View Credential</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </a>
    </li>
  );
}
