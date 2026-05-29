export function Outro() {
  return (
    <section className="py-40 border-t border-line">
      <div className="editorial">
        <p className="mono-tag mb-8">— End.</p>
        <h2 className="text-h2 leading-tight tracking-tight font-medium text-ink max-w-[28ch]">
          Composition over construction. Trust as a design layer. One kit for
          many métiers.
        </h2>
        <p className="mt-10 text-body leading-relaxed text-ink-muted max-w-[44ch]">
          Thanks for going through this. Happy to take questions.
        </p>
        <div className="mt-16 flex items-center gap-6 text-small text-ink-soft">
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
