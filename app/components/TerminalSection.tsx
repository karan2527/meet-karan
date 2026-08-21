import SectionHeader from "./SectionHeader";
import TerminalCard from "./TerminalCard";

export default function TerminalSection() {
  return (
    <section id="terminal" className="section-divider py-20">
      <div className="site-container">
        <SectionHeader
          eyebrow="08"
          title="Interactive Terminal"
          description="Explore my background, tools, and projects through an interactive command line interface. Try running 'help'."
        />

        <div className="mx-auto max-w-4xl">
          <TerminalCard
            title="karan@dsce-cybersec:~"
            className="w-full"
            interactive={true}
          />
        </div>
      </div>
    </section>
  );
}
