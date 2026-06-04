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

// Custom 4-anchor palette.
const PALETTE = {
  a: [0.53, 0.59, 0.81] as [number, number, number],
  b: [0.58, 0.31, 0.21] as [number, number, number],
  c: [0.50, 0.50, 0.50] as [number, number, number],
  d: [0.41, 0.06, 0.76] as [number, number, number],
};

export function Signature({ onNavigate, height = 26 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playedRef = useRef(false);

  const WIDTH = Math.round(height * ASPECT);
  const HEIGHT = height;

  useEffect(() => {
    if (playedRef.current) return;
    playedRef.current = true;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Match canvas intrinsic resolution to its display size (× DPR for
    // sharpness). Without this, the default 300×150 canvas gets stretched
    // to the CSS box, which both blurs the sweep and makes glimm
    // calculate its left→right band on the wrong width, so the sweep
    // appears to cover the wrong slice of the signature.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = WIDTH * dpr;
    canvas.height = HEIGHT * dpr;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctrl = createShader({
      canvas,
      bandTight: 0.3,
      direction: "ltr",
    });
    if (!ctrl) return;

    const DELAY_MS = 1000;
    const timer = window.setTimeout(() => {
      playSweep(ctrl, {
        palette: PALETTE,
        direction: "ltr",
        sweepMs: 1300,
        outroMs: 700,
        easing: "easeOutQuart",
        peakAlpha: 1,
        brightness: 1.05,
        onComplete: () => ctrl.destroy(),
      });
    }, DELAY_MS);

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
