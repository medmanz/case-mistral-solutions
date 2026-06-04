"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export type GalleryItem = {
  kind: "image" | "video";
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

export function InspirationGallery({
  items,
  layout = "grid",
}: {
  items: GalleryItem[];
  layout?: "grid" | "stack";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex]);

  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className={layout === "stack" ? "gallery gallery--stack" : "gallery"}>
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open ${item.alt}`}
            className="gallery__link cursor-zoom-in"
          >
            <figure className="gallery__thumb">
              {item.kind === "video" ? (
                <GalleryVideo item={item} />
              ) : (
                <GalleryImage item={item} />
              )}
              {item.caption && (
                <figcaption className="gallery__caption">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-6 overlay-fade-in"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex(null);
            }}
            aria-label="Close"
            className="absolute right-4 top-4 grid size-9 place-items-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/15"
          >
            <X className="size-4" strokeWidth={2} />
          </button>
          {active.kind === "video" ? (
            <video
              src={active.src}
              onClick={(e) => e.stopPropagation()}
              autoPlay
              loop
              playsInline
              controls
              controlsList="nodownload noremoteplayback"
              className="max-h-[92vh] max-w-[95vw] cursor-default object-contain"
              style={{
                animation:
                  "modalCenterEnter 200ms cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={active.src}
              alt={active.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] max-w-[95vw] cursor-default object-contain"
              style={{
                animation:
                  "modalCenterEnter 200ms cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            />
          )}
        </div>
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Thumbs fade in once their media is actually ready, avoids the "blank
// box → pop" effect on arrival. Layout space is already reserved by
// .gallery__link's aspect-ratio, so the fade carries no layout shift.

function GalleryImage({ item }: { item: GalleryItem }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      ref={ref}
      src={item.src}
      alt={item.alt}
      className="gallery__image img-fade"
      width={item.width}
      height={item.height}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      data-loaded={loaded ? "true" : "false"}
    />
  );
}

function GalleryVideo({ item }: { item: GalleryItem }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (ref.current && ref.current.readyState >= 2) setLoaded(true);
  }, []);

  return (
    <video
      ref={ref}
      src={item.src}
      className="gallery__image img-fade"
      width={item.width}
      height={item.height}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      onLoadedData={() => setLoaded(true)}
      data-loaded={loaded ? "true" : "false"}
    />
  );
}
