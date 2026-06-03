"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type TextShimmerProps = {
  children: string;
  className?: string;
  duration?: number;
  spread?: number;
};

/**
 * Animated text shimmer (port of prompt-kit's TextShimmer).
 * Renders a moving highlight across the text using a gradient mask.
 */
export function TextShimmer({
  children,
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  const dynamicSpread = children.length * spread;

  return (
    <motion.span
      className={cn(
        "relative inline-block bg-clip-text text-transparent [--base-color:#79716B] [--base-gradient-color:#14110F]",
        "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-image:var(--bg),linear-gradient(var(--base-color),var(--base-color))]",
        className,
      )}
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
      style={
        {
          "--spread": `${dynamicSpread}px`,
          backgroundSize: `250% 100%, auto`,
        } as React.CSSProperties
      }
    >
      {children}
    </motion.span>
  );
}
