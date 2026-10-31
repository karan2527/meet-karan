import SectionHeader from "./SectionHeader";
import type { ExperienceItem } from "./types";

type ExperienceProps = {
  experiences: ExperienceItem[];
};

function renderHighlightedText(text: string, highlights: string[]) {
  if (highlights.length === 0) return text;

  const pattern = highlights
    .sort((a, b) => b.length - a.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const parts = text.split(new RegExp(`(${pattern})`, "gi"));

  return parts.map((part, index) =>
    highlights.some((term) => term.toLowerCase() === part.toLowerCase()) ? (
      <span key={`${part}-${index}`} className="font-medium text-[#00ff66]">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="section-divider section-spacing">
      <div className="site-container">
        <SectionHeader
          eyebrow="02"
          title="Experience"
          description="A timeline of the roles and research work that shaped my approach to security, engineering, and product building."
        />

        <div className="relative ml-0 md:ml-8">
          {/* Left timeline rail */}
          <div className="absolute bottom-2 left-2 top-2 hidden w-px bg-white/10 md:block" />

          <div className="space-y-4 sm:space-y-5">
            {experiences.map((item) => (
              <article key={item.company} className="relative pl-0 md:pl-12">
                <div className="absolute left-0 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border border-[#00ff66]/40 bg-[#00ff66] shadow-[0_0_8px_#00ff66] md:block" />

                <details className="group rounded-[1.4rem] border border-white/60 bg-white/[0.02] transition duration-300 hover:border-white hover:bg-white/[0.03]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 sm:p-5 [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0">
                      <span className="block text-[10px] uppercase tracking-[0.26em] text-zinc-500 font-mono">{item.period}</span>
                      <span className="mt-1.5 block text-lg font-semibold tracking-tight text-[#00ff66] sm:text-xl">{item.company}</span>
                      <span className="mt-1 block text-sm font-medium text-white">{item.role}</span>
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition-transform group-open:rotate-180">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </summary>

                  <div className="border-t border-white/15 px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
                    <ul className="max-w-3xl space-y-3 text-sm leading-7 text-zinc-400">
                      {item.details.map((detail) => (
                        <li key={detail.text} className="flex gap-2.5">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff66]" />
                          <span>{renderHighlightedText(detail.text, detail.highlights)}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-black px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-zinc-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
