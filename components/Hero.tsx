"use client";

import { TOKENS, BADGES } from "@/lib/constants";
import ParticleBackground from "@/components/ParticleBackground";

export default function Hero() {
  return (
    <section id="home" style={{ position: "relative", maxWidth: 900, margin: "0 auto", padding: "56px 24px 72px", textAlign: "center", overflow: "hidden" }}>
      <ParticleBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="np-fade" style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
          {BADGES.map((b) => (
            <span key={b} className="np-badge">{b}</span>
          ))}
        </div>

        <h1 className="np-fade" style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.5, margin: "0 0 8px", color: TOKENS.textPrimary, animationDelay: "0.1s" }}>
          Turning Raw Input Into
        </h1>
        <h1 className="np-fade " style={{ fontSize: 45 , fontWeight: 800, lineHeight: 1.5, margin: "0 0 24px", animationDelay: "0.15s" }}>
          Structured Intelligent Output
        </h1>

        <p className="np-fade" style={{ fontSize: 19, color: TOKENS.textMuted, maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.8, animationDelay: "0.2s" }}>
          I'm <strong style={{ color: TOKENS.textPrimary }}>Nimisha Agrawal</strong> — I build intelligent applications that combine {" "}
          <span style={{ color: TOKENS.accentSoft }}>Artificial Intelligence, Machine Learning, and modern web technologies</span> to solve real-world problems{" "}
          <span style={{ color: TOKENS.accentSoft }}> AI-powered chatbots to healthcare solutions ,</span>{" "}
          I enjoy creating products that are practical, scalable, and user-focused.
        </p>

        <div className="np-fade" style={{ display: "flex", gap: 14, justifyContent: "center", animationDelay: "0.3s" }}>
          <a href="#projects" className="np-btn-outline">View Projects →</a>
         <a
  href="https://drive.google.com/file/d/1OFnTIpqVTAFVMn6GzMxfo_bQ8HubeffF/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="np-btn-primary"
>
  Resume ↗
</a>
          <a href="#contact" className="np-btn-outline">Let's Connect</a>
        </div>
      </div>
    </section>
  );
}