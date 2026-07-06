import { TECH_STACK_ROW1, TECH_STACK_ROW2 } from "@/lib/constants";
import Reveal from "@/components/Reveal";

function MarqueeRow({
  items,
  direction,
}: {
  items: { name: string; slug: string; color: string }[];
  direction: "left" | "right";
}) {
  const looped = [...items, ...items];
  return (
    <div className="np-marquee-track">
      <div className={`np-marquee-content ${direction === "right" ? "np-marquee-reverse" : ""}`}>
        {looped.map((t, i) => (
          <div key={`${t.slug}-${i}`} className="np-tech-chip-inline">
            <img
              src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
              alt={t.name}
              width={26}
              height={26}
              loading="lazy"
            />
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ maxWidth: 1400, margin: "0 auto", padding: "56px 24px" }}>
      <Reveal>
        <h2 className="np-section-title">Tech Stack</h2>
      </Reveal>
      <Reveal delay={0.05}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <MarqueeRow items={TECH_STACK_ROW1} direction="left" />
          <MarqueeRow items={TECH_STACK_ROW2} direction="right" />
        </div>
      </Reveal>
    </section>
  );
}