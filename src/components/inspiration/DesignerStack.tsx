"use client";

import { Tooltip } from "@base-ui-components/react/tooltip";
import styles from "./DesignerStack.module.css";

export type Designer = {
  name: string;
  href: string;
  avatarSrc?: string;
  initials?: string;
};

export function DesignerStack({ designers }: { designers: Designer[] }) {
  return (
    <Tooltip.Provider delay={100}>
      <ul className={styles.stack}>
        {designers.map((d, i) => (
          <li key={`${d.name}-${i}`} className={styles.item}>
            <Tooltip.Root>
              <Tooltip.Trigger
                render={
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    aria-label={d.name}
                  >
                    {d.avatarSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={d.avatarSrc}
                        alt=""
                        className={styles.avatar}
                      />
                    ) : (
                      <span>{d.initials ?? d.name.slice(0, 2).toUpperCase()}</span>
                    )}
                  </a>
                }
              />
              <Tooltip.Portal>
                <Tooltip.Positioner side="top" sideOffset={10}>
                  <Tooltip.Popup
                    className={[
                      "z-50 rounded-md bg-[#14110F] px-2.5 py-1.5 text-[12px] leading-[16px] font-medium text-white shadow-md",
                      "origin-[var(--transform-origin)]",
                      "transition-[transform,opacity] duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
                      "data-[starting-style]:opacity-0 data-[starting-style]:scale-[0.97]",
                      "data-[ending-style]:opacity-0 data-[ending-style]:scale-[0.97] data-[ending-style]:duration-[120ms]",
                      "data-[instant]:duration-0",
                    ].join(" ")}
                  >
                    {d.name}
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>
          </li>
        ))}
      </ul>
    </Tooltip.Provider>
  );
}
