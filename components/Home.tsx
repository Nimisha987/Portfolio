import { TOKENS } from "@/lib/constants";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div style={{ background: TOKENS.bg, color: TOKENS.textPrimary, minHeight: "100vh", fontFamily: "'Inter', sans-serif", position: "relative" }}>
      <AnimatedBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}