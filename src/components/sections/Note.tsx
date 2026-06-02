export function Note() {
  return (
    <section className="py-10">
      <div className="max-w-[760px] mx-auto">
        <div className="rounded-lg bg-mistral-cream-warm/50 border border-line px-5 py-4">
          <p className="text-ink-muted">
            <span className="text-ink font-medium">A note on naming.</span>{" "}
            The brief says <span className="text-ink font-medium">Le Chat</span>.
            Mistral shipped it as{" "}
            <span className="text-ink font-medium">Vibe</span> the same day
            this brief landed, with Chat Mode and Work Mode. I kept the Figma
            kit&rsquo;s visual primitives and adopted Vibe&rsquo;s
            architectural ones. The vocabulary across this artifact reflects
            what shipped.
          </p>
        </div>
      </div>
    </section>
  );
}
