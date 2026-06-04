import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Textarea component, port of shadcn/Base UI Textarea.
 * Matches the Input shadow + focus ring style.
 */
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex w-full min-w-0 rounded-md bg-white px-3 py-2 text-[14px] text-[#14110F] leading-[1.55]",
        "shadow-[0_0_0_1px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.04)]",
        "placeholder:text-[#A6A09B] selection:bg-[#FA500F22]",
        "transition-[box-shadow,color] duration-150 outline-none resize-none",
        "focus-visible:shadow-[0_0_0_1px_#FA500F,0_0_0_4px_rgba(250,80,15,0.12)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
