"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type Screen = {
  src: string;
  alt: string;
  caption?: string;
};

/**
 * Trung Vo-style slider (one screen visible at a time, slide track
 * translates on index change with an ease-in-out cubic), with prev /
 * next arrows on hover and dot pagination. Click the active screen
 * to open it full-size in a Lightbox-style overlay.
 */
export function MoreScreensSlider({ screens }: { screens: Screen[] }) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const total = screens.length;

  const go = (i: number) => setActive((i + total) % total);
  const prev = () => go(active - 1);
  const next = () => go(active + 1);

  // Keyboard nav when zoomed
  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoomed, active]);

  return (
    <div className="w-full">
      {/* Slider frame */}
      <div className="group relative w-full overflow-hidden rounded-md bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_0_0_1px_rgba(15,23,42,0.05)]">
        <div
          className="flex"
          style={{
            width: `${total * 100}%`,
            transform: `translateX(-${(active * 100) / total}%)`,
            transition:
              "transform 700ms cubic-bezier(0.77, 0, 0.175, 1)",
            willChange: "transform",
          }}
        >
          {screens.map((s, i) => (
            <div
              key={i}
              style={{ width: `${100 / total}%` }}
              className="shrink-0"
            >
              <button
                type="button"
                onClick={() => setZoomed(true)}
                aria-label={`Zoom ${s.alt}`}
                className="block w-full cursor-zoom-in"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.alt}
                  className="block h-auto w-full"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Prev / next arrows: visible on hover, hidden on touch */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-[#14110F] opacity-0 shadow-sm backdrop-blur transition-[opacity,transform,background] duration-200 hover:bg-white active:scale-95 group-hover:opacity-100"
        >
          <ChevronLeft className="size-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next"
          className="absolute right-3 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-[#14110F] opacity-0 shadow-sm backdrop-blur transition-[opacity,transform,background] duration-200 hover:bg-white active:scale-95 group-hover:opacity-100"
        >
          <ChevronRight className="size-5" strokeWidth={2} />
        </button>
      </div>

      {/* Dot pagination */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {screens.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            className={`size-[8px] rounded-full transition-colors duration-200 ${
              i === active ? "bg-[#14110F]" : "bg-[#D4D4D8] hover:bg-[#A1A1AA]"
            }`}
          />
        ))}
      </div>

      {/* Zoom overlay (Lightbox parity) */}
      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setZoomed(false)}
          className="overlay-fade-in fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-6"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setZoomed(false);
            }}
            aria-label="Close"
            className="absolute right-4 top-4 grid size-9 place-items-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/15"
          >
            <X className="size-4" strokeWidth={2} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screens[active].src}
            alt={screens[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] max-w-[95vw] cursor-default object-contain"
            style={{
              animation:
                "modalCenterEnter 200ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          />
          {/* Zoomed arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-6 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="size-5" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-6 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight className="size-5" strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}
