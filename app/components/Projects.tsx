"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import type { Project } from "./types";

type ProjectsProps = {
  projects: Project[];
};

type FilterCategory = "All" | "Security" | "Mobile" | "Open Source";

export default function Projects({ projects }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Security") {
      return (
        project.category.toLowerCase().includes("security") ||
        project.category.toLowerCase().includes("secure") ||
        project.stack.some((s) => ["Cryptography", "Security"].includes(s))
      );
    }
    if (activeFilter === "Mobile") {
      return (
        project.category.toLowerCase().includes("mobile") ||
        project.stack.some((s) => ["Flutter", "Dart"].includes(s))
      );
    }
    if (activeFilter === "Open Source") {
      return (
        project.category.toLowerCase().includes("open-source") ||
        project.category.toLowerCase().includes("contribution") ||
        project.stack.some((s) => s.toLowerCase().includes("open source"))
      );
    }
    return true;
  });

  const categories: FilterCategory[] = ["All", "Security", "Mobile", "Open Source"];

  return (
    <section id="projects" className="section-divider section-spacing">
      <div className="site-container">
        <SectionHeader
          eyebrow="05"
          title="Projects"
          description="A few projects and contributions that reflect how I work: useful, practical, and security-minded."
        />

        {/* Dynamic Filter Tabs */}
        <div className="mb-10 flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`
                  rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition duration-300 cursor-pointer
                  ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-lg shadow-white/5"
                      : "bg-white/5 text-zinc-400 border border-white/10 hover:border-white/20 hover:text-white"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500">
          {filteredProjects.map((project) => (
            <div key={project.title} className="transition-all duration-300">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center text-zinc-500 font-mono">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
