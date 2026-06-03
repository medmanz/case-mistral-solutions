import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Input component — port of shadcn/Base UI Input.
 * Subtle inset shadow + clean focus ring. Uses raw classes (no CVA) to keep deps light.
 */
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-9 w-full min-w-0 rounded-md bg-white px-3 py-1 text-[14px] text-[#14110F]",
          "shadow-[0_0_0_1px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.04)]",
          "placeholder:text-[#A6A09B] selection:bg-[#FA500F22]",
          "transition-[box-shadow,color] duration-150 outline-none",
          "focus-visible:shadow-[0_0_0_1px_#FA500F,0_0_0_4px_rgba(250,80,15,0.12)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-[13px] file:font-medium file:text-[#14110F]",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
