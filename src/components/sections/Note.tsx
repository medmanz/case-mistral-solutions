export function Note() {
  return (
    <section className="py-20 border-t border-line bg-mistral-cream/40">
      <div className="editorial">
        <p className="mono-tag mb-4">Note on framing</p>
        <p className="text-body leading-relaxed text-ink-muted">
          The brief says{" "}
          <span className="text-ink font-medium">Le Chat</span>. Mistral
          shipped that app as{" "}
          <span className="text-ink font-medium">Vibe</span> with Chat Mode and
          Work Mode the same day this brief landed. I composed with the Figma
          kit&rsquo;s visual primitives and adopted Vibe&rsquo;s architectural
          primitives. The vocabulary across this artifact reflects the shipped
          product.
        </p>
      </div>
    </section>
  );
}
