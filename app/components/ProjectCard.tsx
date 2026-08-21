import type { Project } from "./types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-[#00ff66]/40 hover:bg-white/[0.03]">
      <div>
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            style={{ objectPosition: project.imagePosition || "top" }}
            className="aspect-[11/6] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="p-3.5 sm:p-4">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono text-[#00ff66]">{project.number}</span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono truncate">{project.category}</span>
          </div>

          <h3 className="text-base font-semibold tracking-tight text-white group-hover:text-[#00ff66] transition-colors">{project.title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{project.description}</p>

          <div className="mt-3 flex flex-wrap gap-1">
            {project.stack.map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-black/60 px-2 py-0.5 text-[9px] font-mono text-zinc-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-0">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-zinc-300 transition hover:text-[#00ff66]">
          <span>View project</span>
          <span>-&gt;</span>
        </a>
      </div>
    </article>
  );
}
