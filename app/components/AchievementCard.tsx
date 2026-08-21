import type { AchievementItem } from "./types";

type AchievementCardProps = {
  item: AchievementItem;
};

export default function AchievementCard({ item }: AchievementCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-white/15 bg-[#0b0f14] min-h-[260px] flex flex-col justify-between p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00ff66]/50 hover:shadow-[0_14px_35px_rgba(0,255,102,0.18)]">

      {/* Background Event Image */}
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          style={{ objectPosition: item.imagePosition || "center" }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Dark / Grey Gradient Overlay from top to bottom (softer for clearer image visibility) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/85 transition-all duration-300 group-hover:from-black/65 group-hover:via-black/45 group-hover:to-black/80" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-sm sm:text-base font-semibold leading-snug text-[#00ff66] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            {item.title}
          </h3>
          <p className="mt-2.5 text-xs sm:text-sm font-medium text-zinc-200 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
            {item.organization}
          </p>
        </div>

        <div className="mt-4 pt-2">
          <span className="inline-block rounded-full border border-white/20 bg-black/65 px-3 py-1 text-[11px] font-mono text-zinc-300 backdrop-blur-md">
            {item.date}
          </span>
        </div>
      </div>

    </div>
  );
}
