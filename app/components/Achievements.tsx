import SectionHeader from "./SectionHeader";
import AchievementCard from "./AchievementCard";
import type { AchievementItem } from "./types";

type AchievementsProps = {
  items: AchievementItem[];
};

export default function Achievements({ items }: AchievementsProps) {
  return (
    <section id="achievements" className="section-divider py-20">
      <div className="site-container">
        <SectionHeader
          eyebrow="04"
          title="Achievements"
          description="A snapshot of awards, rankings, and milestones that reflect both performance and curiosity."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((item) => (
            <AchievementCard key={`${item.title}-${item.date}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
