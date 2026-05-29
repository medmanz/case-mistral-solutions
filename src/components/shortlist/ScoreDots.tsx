import { cn } from "@/lib/utils";
import type { Fit } from "@/lib/candidates";

const FIT_COLOR: Record<Fit, { dot: string; soft: string; ring: string }> = {
  strong: {
    dot: "bg-[#16A34A]",
    soft: "bg-[#16A34A]/15",
    ring: "ring-[#16A34A]/25",
  },
  good: {
    dot: "bg-[#EAB308]",
    soft: "bg-[#EAB308]/15",
    ring: "ring-[#EAB308]/25",
  },
  "worth-exploring": {
    dot: "bg-ink-faint",
    soft: "bg-ink-faint/20",
    ring: "ring-ink-faint/30",
  },
};

export function ScoreDots({ score, fit }: { score: 1 | 2 | 3 | 4 | 5; fit: Fit }) {
  const palette = FIT_COLOR[fit];
  return (
    <div className="inline-flex items-center gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "size-[5px] rounded-full",
            i < score ? palette.dot : "bg-line"
          )}
        />
      ))}
    </div>
  );
}

export const FIT_LABEL: Record<Fit, string> = {
  strong: "Strong fit",
  good: "Good fit",
  "worth-exploring": "Worth exploring",
};

export { FIT_COLOR };
