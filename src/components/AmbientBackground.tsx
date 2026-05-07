"use client";

import { useEffect } from "react";

export function AmbientBackground() {
  useEffect(() => {
    let frame = 0;
    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.5;
    let currentX = targetX;
    let currentY = targetY;

    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      document.documentElement.style.setProperty("--cursor-x", `${currentX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${currentY}px`);
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="ambient-wash" aria-hidden="true" />
      <div className="ambient-grain" aria-hidden="true" />
      <div className="ambient-cursor" aria-hidden="true" />
    </>
  );
}
