import SectionHeader from "./SectionHeader";
import type { ExperienceItem } from "./types";

type ExperienceProps = {
  experiences: ExperienceItem[];
};

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

          <div className="space-y-8">
            {experiences.map((item) => (
              <article key={item.company} className="relative pl-0 md:pl-12">
                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border border-[#00ff66]/40 bg-[#00ff66] shadow-[0_0_8px_#00ff66] md:block" />

                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.02] p-5 sm:p-6 md:p-8 transition duration-300 hover:border-[#00ff66]/30 hover:bg-white/[0.03]">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-zinc-500 font-mono">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#00ff66]">{item.company}</h3>
                  <p className="mt-1.5 text-base font-medium text-white">{item.role}</p>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">{item.details}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-black px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
