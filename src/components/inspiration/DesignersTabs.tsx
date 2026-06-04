"use client";

import { useState, type ReactNode } from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import {
  InspirationGallery,
  type GalleryItem,
} from "@/components/inspiration/InspirationGallery";

export type DesignersCompany = {
  id: string;
  name: string;
  logo?: string;
  body: ReactNode;
  gallery: GalleryItem[];
};

export function DesignersTabs({ companies }: { companies: DesignersCompany[] }) {
  const [active, setActive] = useState(companies[0]?.id);
  const current = companies.find((c) => c.id === active) ?? companies[0];

  return (
    <div className="mt-12">
      <div className="mx-auto max-w-[634px]">
        <div
          className="relative inline-flex items-center gap-1 rounded-md bg-[#F4F4F5] p-1"
          role="tablist"
        >
          <AnimatedBackground
            value={active}
            onValueChange={setActive}
            className="rounded-md bg-white shadow-[0_1px_2px_rgba(20,17,15,0.06),0_0_0_1px_rgba(20,17,15,0.04)]"
            transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
            enableHover
          >
            {companies.map((c) => (
              <button
                key={c.id}
                data-id={c.id}
                type="button"
                role="tab"
                aria-selected={active === c.id}
                className={`inline-flex items-center whitespace-nowrap rounded-md px-3.5 py-1.5 text-[14px] leading-[20px] font-medium transition-colors duration-150 focus-visible:outline-none ${
                  active === c.id
                    ? "text-[#14110F]"
                    : "text-[#79716B] hover:text-[#14110F]"
                }`}
              >
                {c.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.logo}
                    alt=""
                    width={16}
                    height={16}
                    className="mr-2 h-4 w-4 rounded-[3px] object-contain"
                  />
                )}
                {c.name}
              </button>
            ))}
          </AnimatedBackground>
        </div>
      </div>

      {current && (
        <>
          <article className="mx-auto mt-10 max-w-[634px]">
            <h3
              className="mb-4 text-[20px] leading-[28px] text-[#242529]"
              style={{ fontFamily: "Signifier, serif", fontWeight: 400 }}
            >
              {current.name}
            </h3>
            <div className="text-pretty text-[16px] leading-[24px] text-[#525252]">
              {current.body}
            </div>
          </article>

          <div className="mx-auto mt-12 max-w-[634px]">
            <InspirationGallery items={current.gallery} layout="stack" />
          </div>
        </>
      )}
    </div>
  );
}
