import SectionHeader from "./SectionHeader";
import SkillCard from "./SkillCard";
import type { SkillGroup } from "./types";

type SkillsProps = {
  groups: SkillGroup[];
};

export default function Skills({ groups }: SkillsProps) {
  return (
    <section id="skills" className="section-divider section-spacing">
      <div className="site-container">
        <SectionHeader
          eyebrow="03"
          title="Skills"
          description="The main technologies, frameworks, and concepts I work with across engineering and security research."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-[#00ff66]/30">
              <h3 className="mb-4 text-lg font-semibold text-[#00ff66] font-mono">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillCard key={item} value={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
