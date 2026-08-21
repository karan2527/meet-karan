"use client";

export default function HangingSpider() {
  return (
    <div className="absolute -top-6 right-8 sm:right-14 z-20 pointer-events-auto group">
      <div className="relative flex flex-col items-center">
        {/* Bouncing container wrapping spider & attached thread */}
        <div className="relative animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer flex flex-col items-center">
          
          {/* Glowing white silk thread extending straight into spider head and up to header */}
          <div className="absolute top-[-200vh] bottom-[14px] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-white/10 via-white/60 to-white shadow-[0_0_4px_rgba(255,255,255,0.8)] pointer-events-none" />

          <svg
            viewBox="0 0 32 32"
            className="h-6 w-6 sm:h-7 sm:w-7 text-zinc-300 drop-shadow-[0_0_8px_rgba(0,255,102,0.6)] relative z-10"
            fill="currentColor"
          >
            {/* Silk attachment line directly into spider head */}
            <line x1="16" y1="0" x2="16" y2="11.5" stroke="white" strokeWidth="1.2" />

            {/* Spider Legs */}
            <path
              d="M16 10 C12 6, 6 8, 4 12 M16 10 C20 6, 26 8, 28 12"
              fill="none"
              stroke="#00ff66"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M16 14 C10 11, 4 15, 2 20 M16 14 C22 11, 28 15, 30 20"
              fill="none"
              stroke="#00ff66"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M16 18 C11 18, 5 22, 4 27 M16 18 C21 18, 27 22, 28 27"
              fill="none"
              stroke="#00ff66"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Abdomen / Head */}
            <ellipse cx="16" cy="19" rx="4.5" ry="6" fill="#0f1720" stroke="#00ff66" strokeWidth="1.2" />
            <circle cx="16" cy="11.5" r="3.2" fill="#182230" stroke="#00ff66" strokeWidth="1.2" />

            {/* Glowing Green Cyber Eyes */}
            <circle cx="14.6" cy="11" r="0.9" fill="#00ff66" />
            <circle cx="17.4" cy="11" r="0.9" fill="#00ff66" />
          </svg>

          {/* Tooltip on hover */}
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap rounded bg-black/90 px-2 py-0.5 text-[10px] font-mono text-[#00ff66] border border-[#00ff66]/30 shadow-lg pointer-events-none">
            web crawler v1.0
          </span>
        </div>
      </div>
    </div>
  );
}
