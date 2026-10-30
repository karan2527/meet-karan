import About from "./components/About";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Volunteering from "./components/Volunteering";
import TerminalSection from "./components/TerminalSection";
import Footer from "./components/Footer";
import InteractiveExtras from "./components/InteractiveExtras";
import {
  achievements,
  blogPosts,
  experiences,
  invitationAchievements,
  navItems,
  projects,
  skillGroups,
  socialLinks,
  volunteering,
} from "./components/portfolioData";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar navItems={navItems} socialLinks={socialLinks} />

      {/* Home section */}
      <section id="home" className="site-container flex min-h-[calc(100vh-70px)] flex-col justify-center py-10 sm:py-16">
        <Hero />
      </section>

      {/* Structured Sections */}
      <About />
      <Experience experiences={experiences} />
      <Skills groups={skillGroups} />
      <Achievements items={achievements} invitations={invitationAchievements} />
      <Projects projects={projects} />
      <Blog posts={blogPosts} />
      <Volunteering items={volunteering} />

      {/* Single Interactive Terminal at the end */}
      <TerminalSection />

      {/* Footer */}
      <Footer socialLinks={socialLinks} />

      {/* Dynamic utilities: Back to top, copy toast */}
      <InteractiveExtras />
    </main>
  );
}
