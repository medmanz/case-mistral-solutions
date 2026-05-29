import { Shortlist } from "@/components/shortlist/Shortlist";

export function HeroSection() {
  return (
    <section className="py-32 border-t border-line bg-surface-subtle">
      <div className="wide">
        <div className="editorial !max-w-[720px] !px-0 mb-14">
          <p className="mono-tag mb-8">§6 · The hero · live</p>
          <h2 className="text-h2 leading-tight tracking-tight font-medium text-ink">
            The Recruiting Tool in action.
          </h2>
          <p className="mt-6 text-lede leading-snug text-ink-muted max-w-[44ch]">
            The agent sourced for 31 minutes across 847 profiles. This is what
            it proposes, and how it hands control back to you.
          </p>
        </div>
      </div>

      <div className="full-bleed">
        <Shortlist />
      </div>

      <div className="wide mt-14">
        <div className="editorial !max-w-[720px] !px-0">
          <p className="text-body leading-relaxed text-ink-muted">
            <span className="text-ink font-medium">Three things to notice.</span>{" "}
            The agent proposes one action. Every score shows a reason, one click
            away. No message reaches a candidate until you commit. Sophie gets
            nothing until you hit Send. That&rsquo;s the trust contract.
          </p>
        </div>
      </div>
    </section>
  );
}
