"use client";

import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";

/**
 * Tabs for navigating between Task surfaces (Shortlist / Pipeline / ...).
 * Active tab is derived from pathname. Clicking a tab routes to the target.
 */
export function TaskTabs({
  shortlistCount,
  pipelineCount,
}: {
  shortlistCount?: number;
  pipelineCount?: number;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const value = pathname?.includes("/pipeline") ? "pipeline" : "shortlist";

  return (
    <Tabs
      value={value}
      onValueChange={(v) => {
        if (v === "shortlist") router.push("/sandbox/shortlist");
        if (v === "pipeline") router.push("/sandbox/pipeline");
      }}
    >
      <TabsList className="px-3">
        <TabsTrigger value="shortlist">
          Shortlist
          {typeof shortlistCount === "number" && (
            <Count value={shortlistCount} />
          )}
        </TabsTrigger>
        <TabsTrigger value="pipeline">
          Pipeline
          {typeof pipelineCount === "number" && (
            <Count value={pipelineCount} />
          )}
        </TabsTrigger>
        <TabsTrigger value="notes" disabled>
          Notes
        </TabsTrigger>
        <TabsTrigger value="files" disabled>
          Files
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

function Count({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-[#27272A14] text-[11px] font-medium text-[#57534D] tabular-nums">
      {value}
    </span>
  );
}
