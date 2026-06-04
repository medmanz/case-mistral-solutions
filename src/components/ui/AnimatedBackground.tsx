"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { motion, type Transition } from "motion/react";

/**
 * Motion-primitives-style AnimatedBackground. Wraps a list of buttons
 * (each with a `data-id` attribute) and renders a single shared
 * background that slides between them on hover / active state using a
 * shared `layoutId`.
 *
 * Two modes:
 *  - Controlled: pass `value` + `onValueChange` to drive the active id
 *    from outside (useful when the background also drives a tab panel).
 *  - Uncontrolled: pass `defaultValue` and let the component own state.
 *
 * `enableHover` makes the background follow the pointer; when the
 * pointer leaves, it snaps back to the active id (or vanishes if none).
 */
export function AnimatedBackground({
  children,
  defaultValue,
  value,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: {
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (id: string) => void;
  /** Tailwind / CSS classes applied to the sliding background. */
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
}) {
  const isControlled = value !== undefined;
  const [activeId, setActiveId] = useState<string | undefined>(defaultValue);
  const [hoverId, setHoverId] = useState<string | null>(null);

  const current = isControlled ? value : activeId;
  const highlightId = enableHover ? (hoverId ?? current) : current;

  const handleSelect = (id: string) => {
    if (!isControlled) setActiveId(id);
    onValueChange?.(id);
  };

  return (
    <>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        const element = child as ReactElement<{
          "data-id"?: string;
          children?: ReactNode;
          onClick?: (e: React.MouseEvent) => void;
          onMouseEnter?: () => void;
          onMouseLeave?: () => void;
          style?: React.CSSProperties;
        }>;
        const id = element.props["data-id"];
        if (!id) return element;

        const existingStyle = element.props.style ?? {};
        const existingOnClick = element.props.onClick;

        return cloneElement(element, {
          onClick: (e: React.MouseEvent) => {
            existingOnClick?.(e);
            handleSelect(id);
          },
          onMouseEnter: enableHover ? () => setHoverId(id) : undefined,
          onMouseLeave: enableHover ? () => setHoverId(null) : undefined,
          style: { position: "relative", ...existingStyle },
          children: (
            <>
              {highlightId === id && (
                <motion.div
                  layoutId="animated-background-bg"
                  className={className}
                  transition={transition}
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                  }}
                />
              )}
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {element.props.children}
              </span>
            </>
          ),
        });
      })}
    </>
  );
}
