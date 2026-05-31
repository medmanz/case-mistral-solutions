import { Hook } from "@/components/sections/Hook";
import { Note } from "@/components/sections/Note";
import { Inspiration } from "@/components/sections/Inspiration";
import { HeroSection } from "@/components/sections/HeroSection";
import { SystemView } from "@/components/sections/SystemView";
import { Problem } from "@/components/sections/Problem";
import { Flow } from "@/components/sections/Flow";
import { Tradeoffs } from "@/components/sections/Tradeoffs";
import { Scaling } from "@/components/sections/Scaling";
import { SolutionsKit } from "@/components/sections/SolutionsKit";
import { Feasibility } from "@/components/sections/Feasibility";
import { Outro } from "@/components/sections/Outro";

export default function Page() {
  return (
    <main className="bg-[var(--color-surface)] text-[var(--color-ink)]">
      <Hook />
      <Note />
      <Inspiration />
      <HeroSection />
      <SystemView />
      <Problem />
      <Flow />
      <Tradeoffs />
      <Scaling />
      <SolutionsKit />
      <Feasibility />
      <Outro />
    </main>
  );
}
