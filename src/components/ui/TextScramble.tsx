"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

/**
 * Motion-primitives-style text scramble. Renders the final text on
 * SSR (so SEO + no-JS see the real content), then on mount scrambles
 * the unsettled characters and progressively reveals them left to
 * right. Fires once per page arrival.
 *
 * Spaces and existing punctuation pass through unscrambled so word
 * shapes stay intact during the animation.
 */
export function TextScramble({
  children,
  duration = 0.7,
  speed = 0.035,
  characterSet = DEFAULT_CHARS,
  className,
  as: Tag = "span",
}: {
  children: string;
  /** Total seconds for the scramble to fully resolve. */
  duration?: number;
  /** Seconds between each scramble tick. */
  speed?: number;
  characterSet?: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const [text, setText] = useState(children);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const target = children;
    const targetLen = target.length;
    const totalSteps = Math.max(1, Math.ceil(duration / speed));
    let step = 0;

    const id = window.setInterval(() => {
      step++;
      const progress = step / totalSteps;
      const settledCount = Math.floor(progress * targetLen);

      let out = "";
      for (let i = 0; i < targetLen; i++) {
        const ch = target[i];
        if (i < settledCount || ch === " " || /[.,!?]/.test(ch)) {
          out += ch;
        } else {
          out += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }
      setText(out);

      if (step >= totalSteps) {
        setText(target);
        window.clearInterval(id);
      }
    }, speed * 1000);

    return () => window.clearInterval(id);
  }, [children, duration, speed, characterSet]);

  return <Tag className={className}>{text}</Tag>;
}
