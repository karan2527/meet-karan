type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.32em] text-zinc-500">{eyebrow}</p>
      <h2 className="text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">{description}</p>
    </div>
  );
}
