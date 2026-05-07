"use client";

import { navTargets, type Language } from "@/content/unhumn";
import { useLanguage } from "./LanguageProvider";

export function SiteHeader() {
  const { language, isSwitching, setLanguage, text } = useLanguage();

  return (
    <header>
      <nav className="top-nav">
        <a className="brand liquid-glass liquid-edge" href="#home">
          UNHUMN
        </a>

        <div className={`nav-links liquid-glass liquid-edge ${isSwitching ? "is-switching" : ""}`}>
          {text.nav.map((item, index) => (
            <a href={navTargets[index]} key={item}>
              {item}
            </a>
          ))}
        </div>

        <div className="language-toggle liquid-glass liquid-edge" aria-label="Language switcher">
          <span className={isSwitching ? "is-visible" : ""}>{text.reconstructing}</span>
          {(["cn", "en"] as Language[]).map((item) => (
            <button className={language === item ? "active" : ""} key={item} onClick={() => setLanguage(item)} type="button">
              {item === "cn" ? "中文" : "EN"}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
