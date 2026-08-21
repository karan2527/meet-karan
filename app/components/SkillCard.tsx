type SkillCardProps = {
  value: string;
};

export default function SkillCard({ value }: SkillCardProps) {
  return (
    <span className="rounded-full border border-white/10 bg-black px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-zinc-300">
      {value}
    </span>
  );
}
