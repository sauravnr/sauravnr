"use client";

import React, { useState, useEffect } from "react";

const codeLines = [
  "$ initializing portfolio...",
  "import { saurav } from '@/developer';",
  "loading modules ████████░░ 80%",
  "compiling components...",
  "const skills = await fetch('/api/skills');",
  "building UI ██████████ 100%",
  "> ready.",
];

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const delay = visibleLines === codeLines.length - 1 ? 400 : 120 + Math.random() * 180;
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 500);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.4s",
        opacity: visibleLines >= codeLines.length ? 0 : 1,
      }}
    >
      <div style={{ maxWidth: "440px", width: "90%" }}>
        <div
          className="font-mono"
          style={{
            fontSize: "0.75rem",
            color: "var(--accent)",
            marginBottom: "1.5rem",
            letterSpacing: "0.05em",
          }}
        >
          saurav.nr
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              className="font-mono"
              style={{
                fontSize: "0.7rem",
                color:
                  i === visibleLines - 1
                    ? "var(--text)"
                    : "var(--text-secondary)",
                opacity: i === visibleLines - 1 ? 1 : 0.5,
                lineHeight: "1.8",
              }}
            >
              {line}
              {i === visibleLines - 1 && i < codeLines.length - 1 && (
                <span className="blink" style={{ color: "var(--accent)" }}>
                  _
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
