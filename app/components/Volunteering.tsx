"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import type { VolunteeringItem } from "./types";

type VolunteeringProps = {
  items: VolunteeringItem[];
};

function VolunteeringCard({ item }: { item: VolunteeringItem }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped((prev) => !prev)}
      className="group h-[280px] w-full cursor-pointer [perspective:1000px] sm:h-[320px]"
    >
      <div
        className={`relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
      >
        {/* FRONT FACE */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c1015]/95 p-6 shadow-xl [backface-visibility:hidden] transition-all group-hover:border-[#00ff66]/40">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] uppercase tracking-[0.24em] text-zinc-500 font-mono">
                {item.period}
              </span>
              <span className="flex items-center gap-1 rounded-full border border-[#00ff66]/30 bg-[#00ff66]/10 px-2.5 py-0.5 text-[10px] font-mono text-[#00ff66]">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
                Flip card
              </span>
            </div>

            <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#00ff66]">
              {item.organization}
            </h3>
            <p className="mt-1 text-xs text-zinc-300 font-medium font-mono">
              {item.role}
            </p>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
              {item.details}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-zinc-300 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BACK FACE (IMAGE REVEAL) */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-[#00ff66]/50 bg-[#0b0f14] shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {item.image ? (
            <img
              src={item.image}
              alt={item.organization}
              style={{ objectPosition: item.imagePosition || "center" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff66]/20 to-black" />
          )}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

          {/* Back Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-[#00ff66]/40 bg-black/70 px-3 py-1 text-[11px] font-mono text-[#00ff66] backdrop-blur-md">
                {item.organization}
              </span>

            </div>

            <div>
              <p className="text-xs font-mono text-[#00ff66]">{item.role}</p>
              <p className="mt-1 text-sm text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                {item.period}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Volunteering({ items }: VolunteeringProps) {
  return (
    <section id="volunteering" className="section-divider section-spacing">
      <div className="site-container">
        <SectionHeader
          eyebrow="07"
          title="Volunteering"
          description="Giving back to the developer and cybersecurity community through open-source contributions, peer mentoring, and hackathons. Click any card to flip and view event photo."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <VolunteeringCard key={item.organization} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
