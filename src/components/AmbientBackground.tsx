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

      const glass = (event.target as Element | null)?.closest?.(".liquid-glass, .absence-slot");
      if (glass instanceof HTMLElement) {
        const rect = glass.getBoundingClientRect();
        const localX = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        const localY = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
        const bendX = (localX - 0.5) * 18;
        const bendY = (localY - 0.5) * 14;

        glass.style.setProperty("--local-x", `${localX * 100}%`);
        glass.style.setProperty("--local-y", `${localY * 100}%`);
        glass.style.setProperty("--bend-x", `${bendX}px`);
        glass.style.setProperty("--bend-y", `${bendY}px`);
        glass.style.setProperty("--tilt-x", `${(0.5 - localY) * 3.5}deg`);
        glass.style.setProperty("--tilt-y", `${(localX - 0.5) * 3.5}deg`);
      }
    };

    const resetGlass = (event: PointerEvent) => {
      const glass = (event.target as Element | null)?.closest?.(".liquid-glass, .absence-slot");
      if (glass instanceof HTMLElement) {
        glass.style.setProperty("--local-x", "50%");
        glass.style.setProperty("--local-y", "50%");
        glass.style.setProperty("--bend-x", "0px");
        glass.style.setProperty("--bend-y", "0px");
        glass.style.setProperty("--tilt-x", "0deg");
        glass.style.setProperty("--tilt-y", "0deg");
      }
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      document.documentElement.style.setProperty("--cursor-x", `${currentX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${currentY}px`);
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerout", resetGlass);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerout", resetGlass);
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
