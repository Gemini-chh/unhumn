"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function DreamHero() {
  const { text, isSwitching } = useLanguage();
  const [near, setNear] = useState(0);
  const aOpacity = useMemo(() => 0.08 + near * 0.36, [near]);

  return (
    <section className="dream-hero" id="home">
      <div className="hero-copy-block">
        <p className="eyebrow">UNFINISHED HUMAN / SOFT ARCHIVE</p>

        <div
          className={`dream-word ${isSwitching ? "is-reforming" : ""}`}
          onPointerLeave={() => setNear(0)}
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = rect.left + rect.width * 0.82;
            const y = rect.top + rect.height * 0.45;
            const distance = Math.hypot(event.clientX - x, event.clientY - y);
            setNear(Math.max(0, 1 - distance / Math.max(rect.width * 0.34, 220)));
          }}
        >
          <h1 className="sr-only">{text.hero.title}</h1>
          <div className="dream-letters" style={{ "--missing-space": near } as CSSProperties}>
            {["U", "N", "H", "U", "M"].map((letter, index) => (
              <span key={`${letter}-${index}`} style={{ animationDelay: `${index * 120}ms` }}>
                {letter}
              </span>
            ))}
            <span
              className="absence-slot"
              onPointerEnter={() => setNear(1)}
              style={{ animationDelay: "600ms" }}
            >
              <i className="broken-a left" />
              <i className="broken-a right" />
              <i className="broken-a cross" />
              <i className="broken-a dust dust-one" />
              <i className="broken-a dust dust-two" />
            </span>
            <span className="after-absence" style={{ animationDelay: "720ms" }}>
              N
            </span>
          </div>
          <span className="absence-a" style={{ opacity: aOpacity }} aria-hidden="true" />
        </div>

        <div className={`hero-poem ${isSwitching ? "is-reforming" : ""}`}>
          {text.hero.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <a className="archive-door" href="#archive">
          {text.enterArchive}
        </a>
      </div>

    </section>
  );
}
