"use client";

import { Children, type ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

/**
 * Coverflow-style carousel — one card prominent, neighbors peek at the
 * sides with a subtle 3D rotation. Skiper47-inspired.
 */
export function PerspectiveCarousel({
  children,
  slideWidth = 560,
}: {
  children: ReactNode;
  slideWidth?: number;
}) {
  const items = Children.toArray(children);
  return (
    <div className="perspective-carousel">
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        loopAdditionalSlides={2}
        spaceBetween={-40}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="!pb-10 !pt-2"
      >
        {items.map((child, i) => (
          <SwiperSlide
            key={i}
            style={{ width: `${slideWidth}px`, height: "auto" }}
            className="!h-auto"
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
