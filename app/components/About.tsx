import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="section-divider py-20">
      <div className="site-container">
        <SectionHeader
          eyebrow="01"
          title="About"
          description="Security Researcher | Flutter Developer | Software Developer"
        />

        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-3">
            <img
              src="/images/about.jpg"
              alt="Karan Jain working desk"
              className="h-[360px] sm:h-[420px] w-full rounded-[1.5rem] object-cover object-[center_35%]"
            />
          </div>

          <div>
            {/* Info Box */}
            <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Degree</p>
                  <p className="mt-0.5 text-sm font-medium text-white">Bachelor of Engineering</p>
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">City</p>
                  <p className="mt-0.5 text-sm font-medium text-white">Bengaluru, India</p>
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Specialisation</p>
                  <p className="mt-0.5 text-sm font-medium text-[#00ff66]">Computer Science And Engineering (Cybersecurity)</p>
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Email</p>
                  <a
                    href="mailto:karanjain2527@gmail.com"
                    className="mt-0.5 text-sm font-medium text-white hover:text-[#00ff66] transition-colors"
                  >
                    karanjain2527@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Paragraph with Green Highlighted Keywords */}
            <p className="text-base leading-8 text-zinc-400">
              Over the past few years, I&apos;ve gained experience across{" "}
              <span className="text-[#00ff66] font-medium">cybersecurity and software development</span>, building mobile applications with Flutter and exploring security research. I currently work at{" "}
              <span className="text-[#00ff66] font-medium">NCCS, Government of India</span>, in the{" "}
              <span className="text-[#00ff66] font-medium">Security Assurance Standards (SAS) Division</span>. Previously, I worked as a{" "}
              <span className="text-[#00ff66] font-medium">Security Researcher at IIT Hyderabad</span>, focusing on{" "}
              <span className="text-[#00ff66] font-medium">cryptanalysis and secure booting</span>, and interned at{" "}
              <span className="text-[#00ff66] font-medium">GyanX as a Mobile Application Developer</span>. I&apos;ve participated in and won multiple offline hackathons, including the{" "}
              <span className="text-[#00ff66] font-medium">Kaspersky National Cybersecurity Hackathon at MIT Bengaluru</span>, and I&apos;m currently among the{" "}
              <span className="text-[#00ff66] font-medium">top 4% on TryHackMe</span>. I&apos;m also active in{" "}
              <span className="text-[#00ff66] font-medium">open source</span>, contributing to{" "}
              <span className="text-[#00ff66] font-medium">Flutter Kanpur</span> and apps like{" "}
              <span className="text-[#00ff66] font-medium">ReadMe</span> and{" "}
              <span className="text-[#00ff66] font-medium">Azaadi</span>, while being involved with the{" "}
              <span className="text-[#00ff66] font-medium">Aegis Club</span>, where we organize cybersecurity hackathons, CTFs, and training sessions. I&apos;ve attended the{" "}
              <span className="text-[#00ff66] font-medium">ACM Summer School 2026</span> on Key Symmetric Cryptography at{" "}
              <span className="text-[#00ff66] font-medium">IIT Hyderabad</span>, and I&apos;m also building a startup with two friends, which is currently incubated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
