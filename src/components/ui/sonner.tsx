"use client";

import { Toaster as SonnerToaster, type ToasterProps } from "sonner";

export function Toaster(props: ToasterProps) {
  return (
    <SonnerToaster
      theme="light"
      position="bottom-right"
      richColors
      closeButton={false}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-[#14110F] group-[.toaster]:border-[#27272A14] group-[.toaster]:shadow-[0_8px_24px_rgba(15,23,42,0.12)]",
          description: "group-[.toast]:text-[#79716B]",
          actionButton:
            "group-[.toast]:bg-[#14110F] group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-[#27272A0F] group-[.toast]:text-[#57534D]",
        },
      }}
      {...props}
    />
  );
}
