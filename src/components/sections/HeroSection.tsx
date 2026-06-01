import { Shortlist } from "@/components/shortlist/Shortlist";

export function HeroSection() {
  return (
    <section id="hero" className="px-16 py-20 border-t border-line">
      <div className="max-w-[760px]">
        <h2 className="text-[26px] leading-tight tracking-tight font-semibold text-ink">
          The hero
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-muted max-w-[64ch]">
          The agent sourced for 31 minutes across 847 profiles. Here is what
          it proposes, and how it hands control back to you.
        </p>
      </div>

      <div className="mt-10 -mx-16 px-16">
        <div className="max-w-[1180px]">
          <Shortlist />
        </div>
      </div>

      <div className="max-w-[760px] mt-10">
        <p className="text-[15px] leading-relaxed text-ink-muted">
          <span className="text-ink font-medium">Three things to notice.</span>{" "}
          The agent proposes one action. Every score shows a reason, one click
          away. No message reaches a candidate until you commit. Sophie gets
          nothing until you hit Send. That&rsquo;s the trust contract.
        </p>
      </div>
    </section>
  );
}
