"use client";

import { useEffect, useRef, useState } from "react";
import { TOKENS } from "@/lib/constants";

export default function SkillBar({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 13.5, color: TOKENS.textPrimary }}>{label}</span>
        <span style={{ fontSize: 12, color: TOKENS.textFaint }}>{visible ? value : 0}%</span>
      </div>
      <div style={{ height: 6, background: TOKENS.panelBorder, borderRadius: 4, overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: visible ? `${value}%` : "0%",
            background: `linear-gradient(90deg, ${TOKENS.accent}, ${TOKENS.accent2})`,
            borderRadius: 4,
            transition: "width 1.1s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </div>
    </div>
  );
}