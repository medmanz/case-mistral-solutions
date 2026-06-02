import { Shortlist } from "@/components/shortlist/Shortlist";

export function HeroSection() {
  return (
    <section id="hero" className="py-20">
      <div className="max-w-[760px] mx-auto">
        <h2 className="text-[26px] leading-tight tracking-tight font-semibold text-ink text-balance">
          The hero
        </h2>
        <p className="mt-4 text-ink-muted text-pretty">
          The agent sourced for 31 minutes across 847 profiles. It proposes 12.
          Control comes back to you on the actions that leave the workspace.
        </p>
      </div>

      <div className="mt-10 max-w-[760px] mx-auto">
        <Shortlist />
      </div>

      <div className="max-w-[760px] mx-auto mt-10">
        <p className="text-ink-muted">
          <span className="text-ink font-medium">Three things to notice.</span>{" "}
          The agent proposes one action. Every score shows a reason, one click
          away. No message reaches a candidate until you commit. That&rsquo;s
          the trust contract.
        </p>
      </div>
    </section>
  );
}
