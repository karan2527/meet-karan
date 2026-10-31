import SectionHeader from "./SectionHeader";
import CertificationCard from "./CertificationCard";
import type { CertificationItem } from "./types";

type CertificationsProps = {
  items: CertificationItem[];
};

export default function Certifications({ items }: CertificationsProps) {
  return (
    <section id="certifications" className="section-divider section-spacing">
      <div className="site-container">
        <SectionHeader
          eyebrow="06"
          title="Certifications"
          description="The formal learning pieces that support my background in security, cloud, and software engineering."
        />

        <ul className="space-y-3">
          {items.map((item) => (
            <CertificationCard key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
