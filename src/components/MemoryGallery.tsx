"use client";

import { useLanguage } from "./LanguageProvider";

export function MemoryGallery() {
  const { text } = useLanguage();

  return (
    <section className="memory-section" id="archive">
      <div className="section-intro">
        <span>01</span>
        <h2>{text.archive.title}</h2>
        <div>
          {text.archive.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className="memory-river">
        {text.archive.items.map((item, index) => (
          <article className="memory-piece" key={item.title}>
            <div className="memory-surface" data-tone={index} />
            <span>{item.year}</span>
            <h3>{item.title}</h3>
            <small>{item.type}</small>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
