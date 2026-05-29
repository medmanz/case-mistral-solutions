"use client";

import { motion, useReducedMotion } from "motion/react";

export function Hook() {
  const reduce = useReducedMotion();
  const transition = (delay: number) => ({
    duration: 0.9,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });
  const initial = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="min-h-screen flex items-center">
      <div className="editorial">
        <motion.p
          className="mono-tag mb-8"
          initial={initial}
          animate={animate}
          transition={transition(0)}
        >
          §1 — Thesis
        </motion.p>
        <motion.h1
          className="text-display leading-tight tracking-display font-medium text-ink"
          initial={initial}
          animate={animate}
          transition={transition(0.1)}
        >
          Composing custom AI apps
          <br />
          inside Vibe.
        </motion.h1>
        <motion.p
          className="mt-10 text-lede leading-snug text-ink-muted max-w-[34ch]"
          initial={initial}
          animate={animate}
          transition={transition(0.25)}
        >
          A custom AI app in Vibe isn&rsquo;t a separate product. It&rsquo;s a
          composition of Vibe&rsquo;s primitives with a thin business layer on
          top.
        </motion.p>
        <motion.p
          className="mt-14 text-small text-ink-soft"
          initial={initial}
          animate={animate}
          transition={transition(0.4)}
        >
          Solutions Designer take-home · Médéric Manière · June 2026
        </motion.p>
      </div>
    </section>
  );
}
