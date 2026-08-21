import type { HeroStat } from "./types";

type StatsProps = {
  stats: HeroStat[];
};

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <p className="text-xl font-medium text-white">{stat.value}</p>
          <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
