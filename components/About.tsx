import { TOKENS } from "@/lib/constants";
import Reveal from "@/components/Reveal";
import { MapPin, GraduationCap, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px" }}>
      <Reveal>
        <h2 className="np-section-title">About Me</h2>
      </Reveal>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "flex-start" }}>
        {/* Photo */}
        <Reveal delay={0.05}>
          <div className="np-photo-frame">
            <img src="/NIMISHA.jpg" alt="Nimisha" />
          </div>
        </Reveal>

        {/* Text cards */}
        <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 16 }}>
          <Reveal delay={0.1}>
            <div className="np-card" style={{ padding: "22px 24px" }}>
              <div className="np-card-label"> ABOUT ME</div>
              <p style={{ fontSize: 17, color: TOKENS.textMuted, lineHeight: 1.8, margin: 0 }}>
                I'm an Information Technology undergraduate at KIET Group of Institutions
                 with a strong interest in Artificial Intelligence, Machine Learning, Full Stack Development, and Generative AI.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="np-card" style={{ padding: "22px 24px" }}>
              <div className="np-card-label">
                <Terminal size={14} style={{ marginRight: 6, verticalAlign: -2 }} />WHAT I DO
              </div>
              <p style={{ fontSize: 17, color: TOKENS.textMuted, lineHeight: 1.8, margin: 0 }}>
                I specialize in building AI-powered applications and full-stack web solutions that combine Machine Learning, and modern web technologies to solve real-world problems. I'm passionate about exploring Generative AI, intelligent automation, and scalable AI systems that enhance user experiences. Currently, I work as an AI/ML Intern at MakeWithUs and a Research Intern under the CSIR SPARK Program, where I contribute to AI-driven solutions while continuously expanding my expertise in Machine Learning and intelligent software development.
              </p>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <Reveal delay={0.2}>
              <div className="np-card" style={{ padding: "20px 22px", minWidth: 220 }}>
                <div className="np-card-label">
                  <MapPin size={14} style={{ marginRight: 6, verticalAlign: -2 }} />WHERE I'M BASED
                </div>
                <p style={{ fontSize: 17, color: TOKENS.textMuted,lineHeight: 1.5, margin: 0 }}>Mathura, Uttar Pradesh</p>
                <p style={{ fontSize: 15, color: TOKENS.textMuted, lineHeight: 1.8,margin: 0 }}>Studying in Ghaziabad, Uttar Pradesh</p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="np-card" style={{ padding: "20px 22px", minWidth: 220, flex: 1 }}>
                <div className="np-card-label">
                  <GraduationCap size={14} style={{ marginRight: 6, verticalAlign: -2 }} />EDUCATION
                </div>
                <p style={{ fontSize: 17, color: TOKENS.textMuted, lineHeight: 1.5,margin: 0 }}>
                  B.Tech/B.E. IT — KIET Group of Institutions
                </p>
                <p style={{ fontSize: 15, color: TOKENS.textMuted, lineHeight: 1.7,margin: 0 }}>
                  Data Structures & Algorithms

Artificial Intelligence

Machine Learning

Web Technologies

Generative AI
                </p>
                
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}