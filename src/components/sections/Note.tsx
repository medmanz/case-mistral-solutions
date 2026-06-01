export function Note() {
  return (
    <section className="px-16 py-10">
      <div className="max-w-[760px]">
        <div className="rounded-lg bg-mistral-cream-warm/50 border border-line px-5 py-4">
          <p className="text-[14px] leading-relaxed text-ink-muted">
            <span className="text-ink font-medium">A note on naming.</span>{" "}
            The brief says <span className="text-ink font-medium">Le Chat</span>.
            Mistral shipped that app as{" "}
            <span className="text-ink font-medium">Vibe</span> with Chat Mode
            and Work Mode the same day this brief landed. I composed with the
            Figma kit&rsquo;s visual primitives and adopted Vibe&rsquo;s
            architectural primitives. The vocabulary across this artifact
            reflects the shipped product.
          </p>
        </div>
      </div>
    </section>
  );
}
