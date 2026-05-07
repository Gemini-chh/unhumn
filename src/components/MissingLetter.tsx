"use client";

import { useLanguage } from "./LanguageProvider";

export function MissingLetter() {
  const { text } = useLanguage();

  return (
    <section className="missing-section" id="about">
      <div className="large-absence">A</div>
      <div>
        <p className="eyebrow">03 / {text.about.eyebrow}</p>
        <h2>{text.about.title}</h2>
        <div className="soft-prose">
          {text.about.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
