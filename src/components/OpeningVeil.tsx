"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function OpeningVeil() {
  const { text } = useLanguage();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  if (done) {
    return null;
  }

  return (
    <div className="opening-veil" aria-hidden="true">
      <div className="opening-light" />
      <div className="opening-lines">
        {text.intro.map((line, index) => (
          <p key={line} style={{ animationDelay: `${index * 160}ms` }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
