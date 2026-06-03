"use client";

import { useRef } from "react";

/**
 * Video with native HTML5 controls (incl. fullscreen).
 * Loops seamlessly without exiting fullscreen at the end.
 */
export function VideoLightbox({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      controls
      controlsList="nodownload noremoteplayback"
      onEnded={(e) => {
        // Belt-and-suspenders for browsers that drop fullscreen on loop end.
        const v = e.currentTarget;
        v.currentTime = 0;
        void v.play();
      }}
      onTimeUpdate={(e) => {
        // Pre-rewind just before the end to keep fullscreen state intact.
        const v = e.currentTarget;
        if (v.duration && v.duration - v.currentTime < 0.08) {
          v.currentTime = 0;
        }
      }}
      className={`block w-full h-auto ${className ?? ""}`}
    />
  );
}
