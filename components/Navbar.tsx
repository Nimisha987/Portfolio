// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { TOKENS, NAV_LINKS } from "@/lib/constants";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [active, setActive] = useState("home");

//   const scrollTo = (id: string) => {
//     setActive(id);
//     setMenuOpen(false);
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div style={{ position: "sticky", top: 16, zIndex: 30, display: "flex", justifyContent: "center" }}>
//       <div className="np-nav-shell">
//         <div className="np-desktop-nav" style={{ display: "flex", gap: 6 }}>
//           {NAV_LINKS.map((l) => (
//             <button
//               key={l.id}
//               className={`np-pill ${active === l.id ? "np-pill-active" : ""}`}
//               onClick={() => scrollTo(l.id)}
//             >
//               {l.label}
//             </button>
//           ))}
//         </div>
//         <button
//           className="np-mobile-toggle"
//           onClick={() => setMenuOpen(!menuOpen)}
//           style={{ display: "none", background: "none", border: "none", color: TOKENS.textPrimary, cursor: "pointer" }}
//         >
//           {menuOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>
//       {menuOpen && (
//         <div className="np-mobile-menu">
//           {NAV_LINKS.map((l) => (
//             <button key={l.id} className="np-pill" style={{ width: "100%" }} onClick={() => scrollTo(l.id)}>
//               {l.label}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { TOKENS, NAV_LINKS, SOCIALS } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const scrollTo = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ position: "sticky", top: 16, zIndex: 30, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 32px" }}>
      <div style={{ width: 90 }} />

      <div className="np-nav-shell">
        <div className="np-desktop-nav" style={{ display: "flex", gap: 6 }}>
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              className={`np-pill ${active === l.id ? "np-pill-active" : ""}`}
              onClick={() => scrollTo(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>
        <button
          className="np-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", color: TOKENS.textPrimary, cursor: "pointer" }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="np-desktop-nav" style={{ display: "flex", gap: 10, width: 90, justifyContent: "flex-end" }}>
        <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="np-social-icon">
          <GithubIcon size={17} />
        </a>
        <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="np-social-icon">
          <LinkedinIcon size={17} />
        </a>
      </div>

      {menuOpen && (
        <div className="np-mobile-menu">
          {NAV_LINKS.map((l) => (
            <button key={l.id} className="np-pill" style={{ width: "100%" }} onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 8 }}>
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="np-social-icon">
              <GithubIcon size={17} />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="np-social-icon">
              <LinkedinIcon size={17} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}