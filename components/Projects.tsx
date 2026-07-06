import { TOKENS, PROJECTS } from "@/lib/constants";
import Reveal from "@/components/Reveal";

import { ExternalLinkIcon, GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Projects() {
  return (
    <section id="projects" style={{ maxWidth: 1400, margin: "0 auto", padding: "56px 24px" }}>
      <Reveal>
        <h2 className="np-section-title">Projects</h2>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 22 }}>
      {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}> */}
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="np-card np-project-card" style={{ overflow: "hidden", height: "100%" }}>
              <div style={{ height: 120, background: p.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#0000000", opacity: 0.85 }}>{p.title}</span>
              </div>
              <div style={{ padding: "18px 20px" }}>
                <span className="np-tag np-tag-accent" style={{ marginBottom: 10, display: "inline-block" }}>{p.tag}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: TOKENS.textPrimary, margin: "6px 0 8px" }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: TOKENS.textMuted, lineHeight: 1.65, margin: "0 0 14px" }}>{p.desc}</p>
                
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.stack.map((s) => <span key={s} className="np-stack-pill">{s}</span>)}
                  
                </div>
                <div
  style={{
    display: "flex",
    gap: "16px",
    marginTop: "16px",
    alignItems: "center",
  }}
>
  {p.github && (
    <a
      href={p.github}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        color: TOKENS.textPrimary,
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "14px",
      }}
    >
      <GithubIcon size={18} />
      GitHub
    </a>
  )}

  {p.live && (
    <a
      href={p.live}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        color: TOKENS.accent,
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "14px",
      }}
    >
      <ExternalLinkIcon size={18} />
      Live Demo
    </a>
  )}
</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}