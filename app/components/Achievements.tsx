import SectionHeader from "./SectionHeader";
import AchievementCard from "./AchievementCard";
import type { AchievementItem } from "./types";

type AchievementsProps = {
  items: AchievementItem[];
  invitations: AchievementItem[];
};

export default function Achievements({ items, invitations }: AchievementsProps) {
  return (
    <section id="achievements" className="section-divider section-spacing">
      <div className="site-container">
        <SectionHeader
          eyebrow="04"
          title="Achievements"
          description="A snapshot of awards, rankings, and milestones that reflect both performance and curiosity."
        />

        <p className="mb-4 mt-10 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
          01. Awards &amp; Competitions
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((item) => (
            <AchievementCard key={`${item.title}-${item.date}`} item={item} />
          ))}
        </div>

        <p className="mb-4 mt-10 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
          02. Invitations &amp; Recognition
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {invitations.map((item) => (
            <AchievementCard key={`${item.title}-${item.date}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
