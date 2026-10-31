import type { Project } from "./types";
import Link from "next/link";
import HighlightedText from "./HighlightedText";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`View details for ${project.title}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-[#00ff66]/40 hover:bg-white/[0.03]"
    >
      <div>
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            style={{ objectPosition: project.imagePosition || "top" }}
            className="aspect-[16/7] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          {project.imageBadge && (
            <span className="absolute left-3 top-3 rounded-full border border-[#00ff66]/50 bg-black/75 px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-[#00ff66]">
              {project.imageBadge}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent px-3 pb-2.5 pt-10">
            <h3 className="text-sm font-semibold tracking-tight text-white transition-colors group-hover:text-[#00ff66]">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="p-2.5">
          <div className="mb-1.5 flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono text-[#00ff66]">{project.number}</span>
            {!/open-source|package/i.test(project.category) && (
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono truncate">
                {project.category}
              </span>
            )}
          </div>

          <p className="line-clamp-2 text-[11px] leading-relaxed text-zinc-400">
            <HighlightedText text={project.description} highlights={project.descriptionHighlights} />
          </p>

          <div className="mt-2 flex flex-wrap gap-1">
            {project.stack.map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-black/60 px-2 py-0.5 text-[9px] font-mono text-zinc-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto px-2.5 pb-2.5 pt-0 text-[10px] font-mono font-medium text-zinc-300 transition group-hover:text-[#00ff66]">
        View details -&gt;
      </div>
    </Link>
  );
}
