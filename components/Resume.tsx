import { TOKENS, TECH_SKILLS, SOFT_SKILLS, EXPERIENCE, EDUCATION, WHAT_I_DO } from "@/lib/constants";
import Reveal from "@/components/Reveal";
import SkillBar from "@/components/SkillBar";

export default function Resume() {
  return (
    <section id="resume" style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 72px" }}>
      <Reveal>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 24px", color: TOKENS.textPrimary }}>Resume</h2>
      </Reveal>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 24 }}>
        <Reveal delay={0.05}>
          <div className="pf-card" style={{ padding: "24px 26px", minWidth: 280 }}>
            <h3 style={{ fontSize: 14, letterSpacing: "0.05em", color: TOKENS.accent2, margin: "0 0 18px" }}>TECHNICAL SKILLS</h3>
            {TECH_SKILLS.map((s) => <SkillBar key={s.label} label={s.label} value={s.value} />)}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="pf-card" style={{ padding: "24px 26px", minWidth: 280, flex: 1 }}>
            <h3 style={{ fontSize: 14, letterSpacing: "0.05em", color: TOKENS.accent2, margin: "0 0 18px" }}>SOFT SKILLS</h3>
            {SOFT_SKILLS.map((s) => <SkillBar key={s.label} label={s.label} value={s.value} />)}
          </div>
        </Reveal>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        <Reveal delay={0.1}>
          <div className="pf-card" style={{ padding: "24px 26px", minWidth: 280, flex: "2 1 380px" }}>
            <h3 style={{ fontSize: 14, letterSpacing: "0.05em", color: TOKENS.accent2, margin: "0 0 18px" }}>EXPERIENCE</h3>
            {EXPERIENCE.map((e, i) => (
              <div key={e.role} style={{ marginBottom: i < EXPERIENCE.length - 1 ? 20 : 0, paddingLeft: 16, borderLeft: `2px solid ${TOKENS.panelBorder}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: TOKENS.textPrimary }}>{e.role}</span>
                  <span style={{ fontSize: 12, color: TOKENS.textFaint }}>{e.period}</span>
                </div>
                <div style={{ fontSize: 13, color: TOKENS.accent, marginBottom: 6 }}>{e.org}</div>
                <p style={{ fontSize: 13.5, color: TOKENS.textMuted, lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="pf-card" style={{ padding: "24px 26px", minWidth: 280, flex: "1 1 280px" }}>
            <h3 style={{ fontSize: 14, letterSpacing: "0.05em", color: TOKENS.accent2, margin: "0 0 18px" }}>EDUCATION</h3>
            {EDUCATION.map((e) => (
              <div key={e.degree} style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: TOKENS.textPrimary }}>{e.degree}</div>
                <div style={{ fontSize: 13, color: TOKENS.accent, margin: "2px 0 6px" }}>{e.org} · {e.period}</div>
                <p style={{ fontSize: 13, color: TOKENS.textMuted, lineHeight: 1.6, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
            <h3 style={{ fontSize: 14, letterSpacing: "0.05em", color: TOKENS.accent2, margin: "20px 0 14px" }}>WHAT I DO</h3>
            <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
              {WHAT_I_DO.map((item) => (
                <li key={item} style={{ fontSize: 13, color: TOKENS.textMuted, marginBottom: 8, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}