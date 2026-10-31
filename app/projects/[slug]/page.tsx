import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../components/portfolioData";
import HighlightedText from "../../components/HighlightedText";
import BackToProjectsOnBack from "./BackToProjectsOnBack";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const screenshots = project.screenshots ?? [];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <BackToProjectsOnBack />
      <div className="site-container py-8 sm:py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-4 py-2.5 text-xs font-mono text-zinc-300"
        >
          <span className="text-sm">&lt;-</span>
          <span>Back to all projects</span>
        </Link>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
          <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/[0.02] p-2">
            <img
              src={project.image}
              alt={project.title}
              style={{ objectPosition: project.imagePosition || "top" }}
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            {project.imageBadge && (
              <span className="absolute left-5 top-5 rounded-full border border-[#00ff66]/50 bg-black/75 px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-[#00ff66]">
                {project.imageBadge}
              </span>
            )}
          </div>

          <div className="pt-1">
            <p className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#00ff66]">
              {project.number} / {project.category}
            </p>
            <h1 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              <HighlightedText text={project.description} highlights={project.descriptionHighlights} />
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/[0.04] px-3 py-1.5 text-[10px] font-mono text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition hover:bg-zinc-200"
              >
                GitHub
              </a>
              {project.playStoreLink && (
                <a
                  href={project.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-[#00ff66]/60 bg-[#00ff66]/10 px-5 py-2.5 text-xs font-semibold text-[#00ff66] transition hover:bg-[#00ff66]/20"
                >
                  Play Store
                </a>
              )}
              {project.packageLink && (
                <a
                  href={project.packageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-[#00ff66]/60 bg-[#00ff66]/10 px-5 py-2.5 text-xs font-semibold text-[#00ff66] transition hover:bg-[#00ff66]/20"
                >
                  Package
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="mt-12 border-t border-white/10 pt-8">
          <p className="text-[11px] font-mono uppercase tracking-[0.28em] text-zinc-500">
            Project details
          </p>
          <ul className="mt-5 grid gap-4">
            {project.details.map((detail) => (
              <li
                key={detail.text}
                className="border-l border-[#00ff66]/50 pl-4 text-sm leading-7 text-zinc-400"
              >
                <HighlightedText text={detail.text} highlights={detail.highlights} />
              </li>
            ))}
          </ul>
        </section>

        {screenshots.length > 0 && (
          <section className="mt-12 border-t border-white/10 pt-8">
          <p className="text-[11px] font-mono uppercase tracking-[0.28em] text-zinc-500">
            Screenshots
          </p>
          <div className="mt-4 grid grid-cols-2 items-start gap-3 sm:max-w-xl sm:gap-4">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot}
                className="aspect-[9/16] overflow-hidden rounded-xl border border-white/60 bg-white/[0.02]"
              >
                <img
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          </section>
        )}
      </div>
    </main>
  );
}
