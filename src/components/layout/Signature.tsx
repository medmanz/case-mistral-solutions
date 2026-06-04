"use client";

import { useEffect, useRef } from "react";
import { createShader, playSweep } from "glimm";

type Props = {
  onNavigate?: () => void;
};

const FONT_FAMILY = "Loranthus, cursive";
const FONT_SIZE = 24;
const WIDTH = 120;
const HEIGHT = 32;
const BASELINE_Y = 24;
const CLIP_ID = "signature-text-clip";

export function Signature({ onNavigate }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playedRef = useRef(false);

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
      aria-label="Top"
      style={{ width: `${WIDTH}px`, height: `${HEIGHT}px`, lineHeight: 1 }}
    >
      <svg
        width={WIDTH}
        height={HEIGHT}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        style={{ display: "block", overflow: "visible" }}
        aria-label="Mederic"
        role="img"
      >
        <defs>
          <clipPath id={CLIP_ID}>
            <text
              x="0"
              y={BASELINE_Y}
              fontFamily={FONT_FAMILY}
              fontSize={FONT_SIZE}
              fontWeight={400}
            >
              Mederic
            </text>
          </clipPath>
        </defs>

        {/* Always-visible dark text */}
        <text
          x="0"
          y={BASELINE_Y}
          fontFamily={FONT_FAMILY}
          fontSize={FONT_SIZE}
          fontWeight={400}
          fill="#242529"
        >
          Mederic
        </text>

        {/* Canvas clipped to text shape, sweep paints only inside letters */}
        <foreignObject
          x="0"
          y="0"
          width={WIDTH}
          height={HEIGHT}
          clipPath={`url(#${CLIP_ID})`}
        >
          <canvas
            ref={canvasRef}
            aria-hidden
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          />
        </foreignObject>
      </svg>
    </a>
  );
}
