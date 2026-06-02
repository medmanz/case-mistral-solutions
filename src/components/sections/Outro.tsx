export function Outro() {
  return (
    <section className="py-24">
      <div className="max-w-[760px] mx-auto">
        <p className="text-ink-muted">
          <span className="text-ink font-medium">End.</span> Composition over
          construction. Trust as a design layer. One kit deploys to many
          métiers. Thanks for reading.
        </p>
        <div className="mt-10 flex items-center gap-4 text-[13px] text-ink-soft">
          <span>Médéric Manière</span>
          <span aria-hidden>·</span>
          <a
            href="https://medericmaniere.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line decoration-1 underline-offset-4 hover:text-ink hover:decoration-ink transition-colors"
          >
            medericmaniere.com
          </a>
        </div>
      </div>
    </section>
  );
}
