"use client";

import { useLanguage } from "./LanguageProvider";

type SignalItem = {
  label: string;
  value: string;
  href?: string;
};

function signalKind(label: string) {
  const key = label.toLowerCase();

  if (key.includes("email") || label.includes("邮箱")) return "email";
  if (key.includes("wechat") || label.includes("微信")) return "wechat";
  if (key.includes("douyin") || label.includes("抖音")) return "douyin";
  return "xhs";
}

function SignalIcon({ label }: { label: string }) {
  const kind = signalKind(label);

  if (kind === "email") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.8 7.2h14.4v9.6H4.8z" />
        <path d="m5.2 7.6 6.8 5.1 6.8-5.1" />
      </svg>
    );
  }

  if (kind === "wechat") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M9.7 7.1c-3.2 0-5.8 2-5.8 4.5 0 1.4.8 2.6 2 3.4l-.4 2 2.2-1.1c.6.1 1.2.2 2 .2 3.2 0 5.8-2 5.8-4.5s-2.6-4.5-5.8-4.5Z" />
        <path d="M14.6 10.3c2.9.2 5.1 2 5.1 4.2 0 1.2-.7 2.3-1.8 3.1l.3 1.7-1.9-.9c-.5.1-1.1.2-1.7.2-2.2 0-4.1-1.1-4.9-2.7" />
        <path d="M7.6 11h.1M11.8 11h.1" />
      </svg>
    );
  }

  if (kind === "douyin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M11 5.4v9.4a3.2 3.2 0 1 1-2.4-3.1" />
        <path d="M11 5.4c1 3.3 3 5.1 6.1 5.4" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 5.4h10c.9 0 1.6.7 1.6 1.6v10c0 .9-.7 1.6-1.6 1.6H7c-.9 0-1.6-.7-1.6-1.6V7c0-.9.7-1.6 1.6-1.6Z" />
      <path d="M8.4 9h7.2M8.4 12h4.8M8.4 15h6.2" />
    </svg>
  );
}

function sortSignals(items: readonly SignalItem[]) {
  const order = ["email", "wechat", "xhs", "douyin"];

  return [...items].sort((a, b) => order.indexOf(signalKind(a.label)) - order.indexOf(signalKind(b.label)));
}

export function SignalFooter() {
  const { text } = useLanguage();
  const items = sortSignals(text.signals.items);

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

      <div className="signal-dock" aria-label={text.signals.title}>
        {items.map((item) => {
          const content = (
            <>
              <span className="signal-icon">
                <SignalIcon label={item.label} />
              </span>
              <span className="signal-meta">
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </span>
            </>
          );

          return item.href ? (
            <a className="signal-card liquid-glass liquid-hover" href={item.href} key={item.label} rel="noreferrer" target="_blank">
              {content}
            </a>
          ) : (
            <div className="signal-card liquid-glass liquid-hover" key={item.label}>
              {content}
            </div>
          );
        })}
      </div>
    </footer>
  );
}
