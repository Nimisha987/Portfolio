import { TOKENS, ACHIEVEMENTS } from "@/lib/constants";
import Reveal from "@/components/Reveal";
import { Cloud, Brain } from "lucide-react";
// import { TOKENS, ACHIEVEMENTS } from "@/lib/constants";


const ICONS: Record<string, any> = {
  cloud: Cloud,
  brain: Brain,

};

const TAG_COLORS: Record<string, string> = {
  orange: "#FF9900",      // AWS
  purple: "#8B5CF6",      // AI
  green: TOKENS.green,    // Research
  blue: "#3B82F6",        // Coding
};
// const ICONS: Record<string, any> = { cloud: Cloud, brain: Brain };
// const TAG_COLORS: Record<string, string> = { green: TOKENS.green, accent: TOKENS.accentSoft, pink: TOKENS.pink };

export default function Achievements() {
  return (
    <section id="achievements" style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px" }}>
      <Reveal>
        <h2 className="np-section-title">Milestones</h2>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = ICONS[a.icon];
          const color = TAG_COLORS[a.tagColor];
          return (
            <Reveal key={a.title} delay={i * 0.07}>
              <div className="np-card" style={{ padding: "22px 24px", height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div className="np-icon-box" style={{ background: `${color}22` }}>
                    <Icon size={18} color={color} />
                  </div>
                  <span className="np-tag" style={{ color, borderColor: `${color}55` }}>{a.tag}</span>
                </div>
                <h3 style={{ fontSize: 15.5, fontWeight: 700, color: TOKENS.textPrimary, margin: "0 0 8px" }}>{a.title}</h3>
                <p style={{ fontSize: 13.5, color: TOKENS.textMuted, lineHeight: 1.7, margin: 0 }}>{a.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}