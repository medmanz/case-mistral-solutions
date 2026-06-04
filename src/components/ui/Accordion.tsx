"use client";

import {
  createContext,
  useContext,
  useId,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, type Transition, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

type AccordionContextValue = {
  expandedValue: string | null;
  setExpandedValue: (value: string | null) => void;
  transition: Transition;
  variants: Variants;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

const DEFAULT_TRANSITION: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
};

const DEFAULT_VARIANTS: Variants = {
  expanded: { opacity: 1, scale: 1 },
  collapsed: { opacity: 0, scale: 0.7 },
};

export function Accordion({
  children,
  className,
  defaultValue,
  transition,
  variants,
}: {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
  transition?: Transition;
  variants?: Variants;
}) {
  const [expandedValue, setExpandedValue] = useState<string | null>(
    defaultValue ?? null
  );
  return (
    <AccordionContext.Provider
      value={{
        expandedValue,
        setExpandedValue,
        transition: transition ?? DEFAULT_TRANSITION,
        variants: variants ?? DEFAULT_VARIANTS,
      }}
    >
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

type ItemContextValue = {
  value: string;
  isExpanded: boolean;
  toggle: () => void;
  contentId: string;
  triggerId: string;
};

const ItemContext = createContext<ItemContextValue | null>(null);

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionItem must be inside Accordion");
  const isExpanded = ctx.expandedValue === value;
  const baseId = useId();
  const itemValue: ItemContextValue = {
    value,
    isExpanded,
    toggle: () => ctx.setExpandedValue(isExpanded ? null : value),
    contentId: `${baseId}-content`,
    triggerId: `${baseId}-trigger`,
  };
  return (
    <ItemContext.Provider value={itemValue}>
      <div
        className={className}
        data-state={isExpanded ? "expanded" : "collapsed"}
      >
        {children}
      </div>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const item = useContext(ItemContext);
  if (!item) throw new Error("AccordionTrigger must be inside AccordionItem");
  return (
    <button
      type="button"
      id={item.triggerId}
      aria-expanded={item.isExpanded}
      aria-controls={item.contentId}
      data-state={item.isExpanded ? "expanded" : "collapsed"}
      onClick={item.toggle}
      className={cn(
        "group block w-full cursor-pointer focus-visible:outline-none",
        className
      )}
    >
      {children}
    </button>
  );
}

export function AccordionContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const item = useContext(ItemContext);
  const ctx = useContext(AccordionContext);
  if (!item || !ctx)
    throw new Error("AccordionContent must be inside AccordionItem");
  return (
    <AnimatePresence initial={false}>
      {item.isExpanded && (
        <motion.div
          id={item.contentId}
          role="region"
          aria-labelledby={item.triggerId}
          className={cn("overflow-hidden", className)}
          initial="collapsed"
          animate="expanded"
          exit="collapsed"
          variants={{
            expanded: { height: "auto" },
            collapsed: { height: 0 },
          }}
          transition={ctx.transition}
        >
          <motion.div
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={ctx.variants}
            transition={ctx.transition}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
