import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { TOKENS, SOCIALS } from "@/lib/constants";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" style={{ maxWidth: 1400, margin: "0 auto", padding: "56px 32px 80px" }}>
      <Reveal>
        <div className="np-card" style={{ padding: "40px 32px", textAlign: "center" }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: TOKENS.textPrimary, margin: "0 0 10px" }}>Let's build something.</h2>
          <p style={{ fontSize: 14.5, color: TOKENS.textMuted, margin: "0 0 26px" }}>Open to AI/ML internships and collaborations.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <p className="np-btn-primary">
              <Mail size={15} style={{ marginRight: 8 }} />{SOCIALS.email}
            </p>
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="np-btn-outline">
              <GithubIcon /> <span style={{ marginLeft: 8 }}>GitHub</span>
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="np-btn-outline">
              <LinkedinIcon /> <span style={{ marginLeft: 8 }}>LinkedIn</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}