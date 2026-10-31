type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.32em] text-zinc-500">{eyebrow}</p>
      <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-[-0.04em] text-white">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">{description}</p>
    </div>
  );
}
