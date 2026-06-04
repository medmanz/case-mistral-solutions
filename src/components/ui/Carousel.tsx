"use client";

import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselContextValue = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  canPrev: boolean;
  canNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
};

const CarouselContext = createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error("Carousel parts must be used inside <Carousel>");
  return ctx;
}

export function Carousel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    const ro = new ResizeObserver(updateButtons);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      ro.disconnect();
    };
  }, [updateButtons]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll by the width of one visible item, snapping into place.
    const firstChild = el.querySelector("[data-carousel-item]") as HTMLElement | null;
    const step = firstChild
      ? firstChild.getBoundingClientRect().width + 16
      : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <CarouselContext.Provider
      value={{
        scrollRef,
        canPrev,
        canNext,
        scrollPrev: () => scrollByPage(-1),
        scrollNext: () => scrollByPage(1),
      }}
    >
      <div className={cn("relative", className)}>{children}</div>
    </CarouselContext.Provider>
  );
}

export const CarouselContent = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className?: string }
>(function CarouselContent({ children, className }, _ref) {
  const { scrollRef } = useCarousel();
  return (
    <div
      ref={scrollRef}
      className={cn(
        "flex overflow-x-auto snap-x snap-mandatory scroll-smooth",
        "scrollbar-none [&::-webkit-scrollbar]:hidden",
        className
      )}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {children}
    </div>
  );
});

export function CarouselItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      data-carousel-item
      className={cn("snap-start shrink-0", className)}
    >
      {children}
    </div>
  );
}

export function CarouselNavigation({
  className,
  classNameButton,
  alwaysShow,
}: {
  className?: string;
  classNameButton?: string;
  alwaysShow?: boolean;
}) {
  const { canPrev, canNext, scrollPrev, scrollNext } = useCarousel();
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button
        type="button"
        onClick={scrollPrev}
        disabled={!alwaysShow && !canPrev}
        aria-label="Previous"
        className={cn(
          "size-9 grid place-items-center rounded-full border border-[#27272A19] bg-white text-[#14110F]",
          "hover:bg-[#FAFAF9] active:scale-[0.97] transition-[colors,transform] duration-150",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:active:scale-100",
          classNameButton
        )}
      >
        <ChevronLeft className="size-4" strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        disabled={!alwaysShow && !canNext}
        aria-label="Next"
        className={cn(
          "size-9 grid place-items-center rounded-full border border-[#27272A19] bg-white text-[#14110F]",
          "hover:bg-[#FAFAF9] active:scale-[0.97] transition-[colors,transform] duration-150",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:active:scale-100",
          classNameButton
        )}
      >
        <ChevronRight className="size-4" strokeWidth={2} />
      </button>
    </div>
  );
}
