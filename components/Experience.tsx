import { TOKENS, EXPERIENCE } from "@/lib/constants";
import Reveal from "@/components/Reveal";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px" }}>
      <Reveal>
        <h2 className="np-section-title">Experience</h2>
      </Reveal>
      <div style={{ position: "relative" }}>
        <div className="np-timeline-line" />
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.role} delay={i * 0.1}>
            <div style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", position: "relative", marginBottom: 28 }}>
              <div className="np-timeline-dot" />
              <div className="np-card" style={{ padding: "22px 24px", maxWidth: 420, width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: TOKENS.textPrimary, margin: 0 }}>{e.role}</h3>
                  <span className="np-tag np-tag-accent">{e.type}</span>
                </div>
                <div style={{ fontSize: 15, color: TOKENS.accentSoft, marginBottom: 6 }}>{e.org}</div>
                <div style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 12, color: TOKENS.textFaint, marginBottom: 12 }}>
                  <Calendar size={12} /> {e.period}
                </div>
                <p style={{ fontSize: 15, color: TOKENS.textMuted, lineHeight: 1.7, margin: "0 0 14px" }}>{e.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {e.tags.map((t) => <span key={t} className="np-stack-pill">{t}</span>)}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}