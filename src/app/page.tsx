import { Hook } from "@/components/sections/Hook";
import { Inspiration } from "@/components/sections/Inspiration";
import { Problem } from "@/components/sections/Problem";
import { SystemView } from "@/components/sections/SystemView";
import { HeroSection } from "@/components/sections/HeroSection";
import { Flow } from "@/components/sections/Flow";
import { Tradeoffs } from "@/components/sections/Tradeoffs";
import { Scaling } from "@/components/sections/Scaling";
import { Feasibility } from "@/components/sections/Feasibility";
import { Outro } from "@/components/sections/Outro";

export default function Page() {
  return (
    <main className="bg-[var(--color-surface)] text-[var(--color-ink)]">
      <Hook />
      <Inspiration />
      <Problem />
      <SystemView />
      <HeroSection />
      <Flow />
      <Tradeoffs />
      <Scaling />
      <Feasibility />
      <Outro />
    </main>
  );
}
