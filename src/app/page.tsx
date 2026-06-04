import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white antialiased">
      <div className="mx-auto max-w-[634px] px-6 pt-32 pb-24">
        <header className="mb-32 flex flex-col">
          <span
            className="text-[16px] leading-[24px] text-[#14110F]"
            style={{ fontFamily: "var(--font-geist)", fontWeight: 500 }}
          >
            Médéric Manière
          </span>
          <span
            className="text-[16px] leading-[24px] text-[#8B827B]"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Designer
          </span>
        </header>

        <section className="mb-32">
          <h2
            className="mb-6 text-[24px] leading-[32px] text-[#242529]"
            style={{ fontFamily: "Signifier, serif", fontWeight: 400 }}
          >
            Intro
          </h2>
          <p className="text-pretty text-[16px] leading-[24px] text-[#525252]">
            I built this page for my Solutions Designer take-home at Mistral. Rather than a clean deck, I wanted to show how I think on the way to the answer.
          </p>
          <p className="mt-4 text-pretty text-[16px] leading-[24px] text-[#525252]">
            On a normal day, I design product interfaces. I like sitting close to engineering, sweating the small interactions, and turning fuzzy problems into something you can click.
          </p>
        </section>

        <section>
          <h2
            className="mb-6 text-[24px] leading-[32px] text-[#242529]"
            style={{ fontFamily: "Signifier, serif", fontWeight: 400 }}
          >
            Projects
          </h2>
          <ul className="-mx-3 flex flex-col">
            <li>
              <Link
                href="/inspiration"
                className="group flex flex-col rounded-md p-3 transition-colors hover:bg-[#FAFAF9]"
              >
                <span
                  className="text-[16px] leading-[24px] text-[#242529]"
                  style={{ fontFamily: "var(--font-geist)", fontWeight: 500 }}
                >
                  Inspiration
                </span>
                <span className="text-[16px] leading-[24px] text-[#525252]">
                  References and explorations behind the work.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/case-study"
                className="group flex flex-col rounded-md p-3 transition-colors hover:bg-[#FAFAF9]"
              >
                <span
                  className="text-[16px] leading-[24px] text-[#242529]"
                  style={{ fontFamily: "var(--font-geist)", fontWeight: 500 }}
                >
                  Design challenge
                </span>
                <span className="text-[16px] leading-[24px] text-[#525252]">
                  Composing custom AI apps inside Vibe.
                </span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
