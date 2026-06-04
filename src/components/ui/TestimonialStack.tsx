"use client";

import { Children, useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

/**
 * Skiper34-style sticky card stack. Each child becomes a card that sticks
 * to the top of the viewport on scroll. As the next card enters, the
 * earlier cards scale down behind it, creating a "stack of paper" effect.
 */
export function TestimonialStack({
  children,
  cardHeightVh = 45,
  topOffset = 120,
  staggerPx = 0,
}: {
  children: ReactNode;
  /** Vertical scroll length per card, in viewport heights. */
  cardHeightVh?: number;
  /** Distance from the top of the viewport when the first card sticks. */
  topOffset?: number;
  /** How much each subsequent card sticks below the previous (visual gap). */
  staggerPx?: number;
}) {
  const items = Children.toArray(children);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Total scroll = N cards * cardHeightVh, MINUS one slot for the last
  // card. The last card doesn't need a full scroll slot of its own: there
  // is nothing landing on top of it, so it just scrolls away with the
  // section instead of leaving a long stretch of empty space below.
  const totalVh = Math.max(1, items.length - 1) * cardHeightVh + cardHeightVh * 0.5;
  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${totalVh}vh` }}
    >
      {items.map((child, i) => (
        <StackedCard
          key={i}
          index={i}
          total={items.length}
          progress={scrollYProgress}
          cardHeightVh={
            i === items.length - 1 ? cardHeightVh * 0.5 : cardHeightVh
          }
          topOffset={topOffset}
          staggerPx={staggerPx}
        >
          {child}
        </StackedCard>
      ))}
    </section>
  );
}

function StackedCard({
  index,
  total,
  progress,
  cardHeightVh,
  topOffset,
  staggerPx,
  children,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  cardHeightVh: number;
  topOffset: number;
  staggerPx: number;
  children: ReactNode;
}) {
  // Each card occupies a fraction of the scroll range.
  const cardStart = index / total;
  // The earlier the card, the smaller it ends up — earlier cards sit
  // behind newer ones in the stack.
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [cardStart, 1], [1, targetScale]);

  return (
    <div
      className="sticky flex justify-center"
      style={{
        top: `${topOffset + index * staggerPx}px`,
        height: `${cardHeightVh}vh`,
      }}
    >
      <motion.div
        style={{ scale, transformOrigin: "top center" }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
