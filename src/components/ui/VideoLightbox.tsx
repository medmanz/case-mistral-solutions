"use client";

/**
 * Video with native HTML5 controls (incl. fullscreen).
 * No autoplay, the user clicks play, and the clip starts from the start.
 */
export function VideoLightbox({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <video
      src={src}
      preload="metadata"
      playsInline
      controls
      controlsList="nodownload noremoteplayback"
      className={`block w-full h-auto ${className ?? ""}`}
    />
  );
}
