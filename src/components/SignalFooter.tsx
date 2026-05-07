"use client";

import { useLanguage } from "./LanguageProvider";

export function SignalFooter() {
  const { text } = useLanguage();

  return (
    <footer className="signal-footer" id="signals">
      <div className="section-intro">
        <span>04</span>
        <h2>{text.signals.title}</h2>
        <div>
          {text.signals.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className="signal-table">
        {text.signals.items.map((item) => {
          const row = (
            <>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </>
          );

          return "href" in item ? (
            <a className="signal-line" href={item.href} key={item.label} rel="noreferrer" target="_blank">
              {row}
            </a>
          ) : (
            <div className="signal-line" key={item.label}>
              {row}
            </div>
          );
        })}
      </div>
    </footer>
  );
}
