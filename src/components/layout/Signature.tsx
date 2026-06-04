"use client";

import { useEffect, useRef } from "react";
import { createShader, playSweep } from "glimm";

type Props = {
  onNavigate?: () => void;
  /** Display size in pixels. Aspect ratio is locked to the source PNG. */
  height?: number;
};

const SRC = "/signature.png";
const NATURAL_W = 346;
const NATURAL_H = 100;
const ASPECT = NATURAL_W / NATURAL_H;

export function Signature({ onNavigate, height = 56 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playedRef = useRef(false);

  const WIDTH = Math.round(height * ASPECT);
  const HEIGHT = height;

  useEffect(() => {
    if (playedRef.current) return;
    playedRef.current = true;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctrl = createShader({
      canvas,
      bandTight: 0.55,
      direction: "ltr",
    });
    if (!ctrl) return;

    const timer = window.setTimeout(() => {
      playSweep(ctrl, {
        palette: "prism",
        direction: "ltr",
        sweepMs: 1300,
        outroMs: 700,
        easing: "easeOutQuart",
        peakAlpha: 1,
        brightness: 1.05,
        onComplete: () => ctrl.destroy(),
      });
    }, 280);

    return () => {
      window.clearTimeout(timer);
      ctrl.destroy();
    };
  }, []);

  return (
    <a
      href="#hero"
      onClick={(e) => {
        e.preventDefault();
        onNavigate?.();
      }}
      className="relative inline-block hover:opacity-80 transition-opacity"
      aria-label="Médéric"
      style={{
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        lineHeight: 1,
      }}
    >
      {/* Base dark signature */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SRC}
        alt=""
        width={WIDTH}
        height={HEIGHT}
        draggable={false}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          userSelect: "none",
        }}
      />

      {/* Canvas masked by signature alpha — sweep paints only inside letter shapes */}
      <canvas
        ref={canvasRef}
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          maskImage: `url(${SRC})`,
          WebkitMaskImage: `url(${SRC})`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
    </a>
  );
}
