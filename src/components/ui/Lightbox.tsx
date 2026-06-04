"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

/**
 * Lightbox image, click thumbnail to view full-size in an overlay.
 * Esc or click outside to close.
 */
export function Lightbox({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Intrinsic image dimensions, required to reserve layout before the image decodes. */
  width?: number;
  height?: number;
  /** Above-the-fold image: eager + high fetchpriority so paint is not delayed. */
  priority?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // If the image is already in the browser cache, onLoad may have fired
  // before hydration. Catch that case on mount so we don't sit at
  // opacity:0 forever for cached visits.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open image"
        className={`block w-full cursor-zoom-in ${className ?? ""}`}
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          data-loaded={loaded ? "true" : "false"}
          className={`img-fade ${imgClassName ?? "block w-full h-auto"}`}
        />
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6 cursor-zoom-out overlay-fade-in"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Close"
            className="absolute top-4 right-4 size-9 grid place-items-center rounded-md bg-white/10 hover:bg-white/15 text-white transition-colors"
          >
            <X className="size-4" strokeWidth={2} />
          </button>
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[95vw] max-h-[92vh] w-auto h-auto object-contain cursor-default"
            style={{
              animation: "modalCenterEnter 200ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          />
        </div>
      )}
    </>
  );
}
