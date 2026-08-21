import SectionHeader from "./SectionHeader";
import type { BlogPost } from "./types";

type BlogProps = {
  posts: BlogPost[];
};

export default function Blog({ posts }: BlogProps) {
  return (
    <section id="blog" className="section-divider py-20">
      <div className="site-container">
        <SectionHeader
          eyebrow="06"
          title="Blog"
          description="Articles, research notes, and insights on cryptography, security, and mobile development."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c1015]/90 p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#00ff66]/40 hover:bg-white/[0.04]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-full border border-[#00ff66]/30 bg-[#00ff66]/10 px-3 py-1 text-[11px] font-mono text-[#00ff66]">
                    {post.tag}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white transition duration-200 group-hover:text-[#00ff66]">
                  {post.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {post.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono text-zinc-500">
                <span>{post.date}</span>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans font-medium text-zinc-300 transition hover:text-[#00ff66]"
                >
                  <span>Read article</span>
                  <span>-&gt;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
