"use client";

import type { CSSProperties } from "react";
import { useLanguage } from "./LanguageProvider";

export function ExperimentDrift() {
  const { text } = useLanguage();

  return (
    <section className="experiment-section" id="experiments">
      <div className="section-intro">
        <span>02</span>
        <h2>{text.experiments.title}</h2>
        <div>
          {text.experiments.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className="drift-field">
        {text.experiments.items.map((item, index) => (
          <div className="drift-cell" key={item} style={{ "--delay": index } as CSSProperties}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
