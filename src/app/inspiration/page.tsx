import { Sidebar } from "@/components/layout/Sidebar";
import {
  InspirationGallery,
  type GalleryItem,
} from "@/components/inspiration/InspirationGallery";
import {
  DesignerStack,
  type Designer,
} from "@/components/inspiration/DesignerStack";
import {
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
} from "@/components/ui/TabsBase";

type Company = {
  id: string;
  name: string;
  logo?: string;
  body: React.ReactNode;
  gallery: GalleryItem[];
};

const NAV = [
  { id: "inspiration", label: "Inspiration" },
  { id: "designing-in-ai", label: "Designing in AI" },
];

const designers: Designer[] = [
  {
    name: "Emil Kowalski",
    href: "https://x.com/emilkowalski",
    avatarSrc: "/designers/emilkowalski.jpg",
  },
  {
    name: "Rauno Freiberg",
    href: "https://x.com/raunofreiberg",
    avatarSrc: "/designers/raunofreiberg.jpg",
  },
  {
    name: "Jakub Antalík",
    href: "https://x.com/Jakubantalik",
    avatarSrc: "/designers/Jakubantalik.jpg",
  },
  {
    name: "Jakub Krehel",
    href: "https://x.com/jakubkrehel",
    avatarSrc: "/designers/jakubkrehel.jpg",
  },
  {
    name: "Benji Taylor",
    href: "https://x.com/benjitaylor",
    avatarSrc: "/designers/benjitaylor.jpg",
  },
  {
    name: "Alvish Baldha",
    href: "https://x.com/alvishbaldha",
    avatarSrc: "/designers/alvishbaldha.jpg",
  },
  {
    name: "Raphael Salaja",
    href: "https://x.com/raphaelsalaja",
    avatarSrc: "/designers/raphaelsalaja.jpg",
  },
  {
    name: "Dann Petty",
    href: "https://x.com/DannPetty",
    avatarSrc: "/designers/DannPetty.jpg",
  },
  {
    name: "Florian Kiem",
    href: "https://x.com/flornkm",
    avatarSrc: "/designers/flornkm.jpg",
  },
  {
    name: "Mickael Mottet",
    href: "https://x.com/micka_design",
    avatarSrc: "/designers/micka_design.jpg",
  },
  {
    name: "Josh Puckett",
    href: "https://x.com/joshpuckett",
    avatarSrc: "/designers/joshpuckett.jpg",
  },
  {
    name: "Gavin Nelson",
    href: "https://x.com/Gavmn",
    avatarSrc: "/designers/Gavmn.jpg",
  },
];

const rampGallery: GalleryItem[] = [
  {
    kind: "image",
    src: "/designing-in-ai/ramp/01-ramp.webp",
    alt: "Ramp product screenshot",
    caption: "",
  },
  {
    kind: "video",
    src: "/designing-in-ai/ramp/02-ramp.mp4",
    alt: "Ramp interaction recording",
    caption: "",
    width: 1280,
    height: 1026,
  },
  {
    kind: "video",
    src: "/designing-in-ai/ramp/03-ramp.mp4",
    alt: "Ramp interaction recording",
    caption: "",
    width: 1280,
    height: 1092,
  },
];

const cofounderGallery: GalleryItem[] = [
  {
    kind: "video",
    src: "/designing-in-ai/cofounder/01-cofounder.mp4",
    alt: "Cofounder interaction recording",
    caption: "",
    width: 2964,
    height: 1658,
  },
  {
    kind: "video",
    src: "/designing-in-ai/cofounder/02-cofounder.mp4",
    alt: "Cofounder interaction recording",
    caption: "",
    width: 2964,
    height: 1658,
  },
  {
    kind: "video",
    src: "/designing-in-ai/cofounder/03-cofounder.mp4",
    alt: "Cofounder interaction recording",
    caption: "",
    width: 2988,
    height: 1768,
  },
];

const interfereGallery: GalleryItem[] = [
  {
    kind: "video",
    src: "/designing-in-ai/interfere/01-interfere.mp4",
    alt: "Interfere interaction recording",
    caption: "",
    width: 3000,
    height: 1816,
  },
  {
    kind: "video",
    src: "/designing-in-ai/interfere/02-interfere.mp4",
    alt: "Interfere interaction recording",
    caption: "",
    width: 3000,
    height: 1816,
  },
  {
    kind: "video",
    src: "/designing-in-ai/interfere/03-interfere.mp4",
    alt: "Interfere interaction recording",
    caption: "",
    width: 3000,
    height: 1816,
  },
  {
    kind: "image",
    src: "/designing-in-ai/interfere/04-interfere.jpeg",
    alt: "Interfere",
    caption: "",
    width: 1200,
    height: 779,
  },
];

const conductorGallery: GalleryItem[] = [
  {
    kind: "image",
    src: "/designing-in-ai/conductor/03-conductor.png",
    alt: "Conductor",
    caption: "",
    width: 3024,
    height: 1964,
  },
  {
    kind: "video",
    src: "/designing-in-ai/conductor/01-conductor.mp4",
    alt: "Conductor interaction recording",
    caption: "",
    width: 2988,
    height: 1768,
  },
  {
    kind: "video",
    src: "/designing-in-ai/conductor/02-conductor.mp4",
    alt: "Conductor interaction recording",
    caption: "",
    width: 1814,
    height: 1176,
  },
];

const variantGallery: GalleryItem[] = [
  {
    kind: "video",
    src: "/designing-in-ai/variant/01-variant.mp4",
    alt: "Variant interaction recording",
    caption: "",
    width: 2988,
    height: 1768,
  },
  {
    kind: "video",
    src: "/designing-in-ai/variant/02-variant.mp4",
    alt: "Variant interaction recording",
    caption: "",
    width: 2988,
    height: 1768,
  },
];

const companies: Company[] = [
  {
    id: "ramp",
    name: "Ramp",
    logo: "/designing-in-ai/ramp/logo.ico",
    body: (
      <p>
        The one I keep going back to. What I love is how much they sweat the whole thing. The typography, the density, the tiny interactions, the way the AI sits inside the product instead of on top of it. Most products right now are bolting AI features onto whatever they had before. Ramp rebuilt the floor. It feels calm and dense at the same time, which is hard. I think we&apos;re heading toward a place where AI is a commodity, and at that point the only difference is taste. Ramp is already living that.
      </p>
    ),
    gallery: rampGallery,
  },
  {
    id: "cofounder",
    name: "Cofounder",
    logo: "/designing-in-ai/cofounder/logo.ico",
    body: (
      <p>
        Most companies in this space sell agent automation with neon, gradients, and &ldquo;the future is here&rdquo; energy. Cofounder does the opposite move. Pixel art, white UI, agents organized as a calm company structure. I find it beautiful. And they take the human approval part as seriously as the autonomy part, with every task typed at the system level. That&apos;s the kind of confident restraint I&apos;m interested in.
      </p>
    ),
    gallery: cofounderGallery,
  },
  {
    id: "variant",
    name: "Variant",
    logo: "/designing-in-ai/variant/logo.svg",
    body: (
      <p>
        Big fan. The designs that come out are often beautiful, that&apos;s already impressive. What I keep coming back to is how Variant works as a thought partner. You scroll, you explore the design space, you stumble on happy accidents along the way. And the Style Dropper alone is worth the visit. They took the color dropper, something every designer already knows, and pushed it with new tech to do something genuinely magical. Point at a design, the tool absorbs the entire visual DNA. Amazing concept, perfect execution, actually useful. Exactly the kind of AI design I love to see.
      </p>
    ),
    gallery: variantGallery,
  },
  {
    id: "conductor",
    name: "Conductor",
    logo: "/designing-in-ai/conductor/logo.png",
    body: (
      <>
        <p>
          I went from Cursor to Superset to Conductor. Each one taught me something, but Conductor is where things clicked. What got me is the worktree UX: multiple agents running in parallel on isolated branches, each doing its own thing. One is fixing a spacing issue. Another is prototyping an animation. A third is exploring a completely different approach to the same problem. That&apos;s how I think as a designer — I want to explore directions in parallel, not commit to one path upfront.
        </p>
        <p className="mt-4">
          They also made a ton of one-click buttons and commands for the things you&apos;d normally context-switch to a terminal for: spinning up localhost, reviewing a branch, creating and merging PRs. It feels like they productized my whole flow. The stuff that used to break the creative process is just handled.
        </p>
      </>
    ),
    gallery: conductorGallery,
  },
  {
    id: "interfere",
    name: "Interfere",
    logo: "/designing-in-ai/interfere/logo.png",
    body: (
      <p>
        They built a debugging platform where the AI agent watches your app, detects anomalies, suggests fixes, and hands off to humans cleanly.
      </p>
    ),
    gallery: interfereGallery,
  },
];

const items: GalleryItem[] = [
  {
    kind: "image",
    src: "/inspiration/01-quick-actions.jpg",
    alt: "Interfere",
    caption: "",
  },
  {
    kind: "image",
    src: "/inspiration/02-portfolio-chat.jpeg",
    alt: "Vercel",
    caption: "",
  },
  {
    kind: "image",
    src: "/inspiration/03-v0-merge.jpeg",
    alt: "Vercel",
    caption: "",
  },
  {
    kind: "image",
    src: "/inspiration/04-auto-do.webp",
    alt: "Cobolt",
    caption: "",
  },
  {
    kind: "image",
    src: "/inspiration/05-pixel-dancers.jpeg",
    alt: "Art",
    caption: "",
  },
  {
    kind: "image",
    src: "/inspiration/06-explore-mobile.gif",
    alt: "Wabi",
    caption: "",
  },
  {
    kind: "image",
    src: "/inspiration/08-extra.webp",
    alt: "",
    caption: "",
  },
  {
    kind: "image",
    src: "/inspiration/09-laravel.webp",
    alt: "Laravel",
    caption: "",
    width: 1100,
    height: 715,
  },
  {
    kind: "image",
    src: "/inspiration/10-g8os.jpeg",
    alt: "Isometric",
    caption: "",
    width: 4095,
    height: 2025,
  },
];

export default function InspirationPage() {
  return (
    <div className="bg-surface text-ink min-h-screen">
      <div className="flex">
        <Sidebar items={NAV} topId="inspiration" />
        <main className="flex flex-1 min-w-0 flex-col items-center px-8">
          <section
            id="inspiration"
            className="w-full max-w-[1080px] px-4 pt-16"
          >
            <div className="mx-auto max-w-[634px]">
              <h1
                className="mb-6 text-[24px] leading-[32px] text-[#242529]"
                style={{ fontFamily: "Signifier, serif", fontWeight: 400 }}
              >
                Inspiration
              </h1>
              <p className="text-pretty text-[16px] leading-[24px] text-[#525252]">
                My work doesn&apos;t happen in a vacuum. It is the result of being continuously exposed to the work and art of thousands of artists, designers, and creators. They influence my work and contribute to cultivating my own style, taste, and how I approach and solve problems.
              </p>
              <p className="mt-4 text-pretty text-[16px] leading-[24px] text-[#525252]">
                A few designers I follow closely whose craft shapes the way I think about my own.
              </p>

              <div className="mt-6">
                <DesignerStack designers={designers} />
              </div>

              <p className="mt-8 text-pretty text-[16px] leading-[24px] text-[#525252]">
                Below are some of the latest things I&apos;ve bookmarked, screenshotted, or kept around because they stuck with me.
              </p>
            </div>

            <div className="mt-16">
              <InspirationGallery items={items} />
            </div>
          </section>

          <section
            id="designing-in-ai"
            className="w-full max-w-[1080px] px-4 pt-32 pb-24"
          >
            <div className="mx-auto max-w-[634px]">
              <h2
                className="mb-6 text-[24px] leading-[32px] text-[#242529]"
                style={{ fontFamily: "Signifier, serif", fontWeight: 400 }}
              >
                Designing in AI
              </h2>
              <p className="text-pretty text-[16px] leading-[24px] text-[#525252]">
                A short, opinionated list of teams I think are shaping what AI products should feel like. Not the loudest, the ones whose details I keep stealing.
              </p>
            </div>

            <Tabs defaultValue={companies[0].id} className="mt-12">
              <div className="mx-auto max-w-[634px]">
                <TabsList>
                  {companies.map((c) => (
                    <TabsTab key={c.id} value={c.id}>
                      {c.logo && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={c.logo}
                          alt=""
                          width={16}
                          height={16}
                          className="mr-2 h-4 w-4 rounded-[3px] object-contain"
                        />
                      )}
                      {c.name}
                    </TabsTab>
                  ))}
                </TabsList>
              </div>

              {companies.map((c) => (
                <TabsPanel key={c.id} value={c.id}>
                  <article className="mx-auto mt-10 max-w-[634px]">
                    <h3
                      className="mb-4 text-[20px] leading-[28px] text-[#242529]"
                      style={{ fontFamily: "Signifier, serif", fontWeight: 400 }}
                    >
                      {c.name}
                    </h3>
                    <div className="text-pretty text-[16px] leading-[24px] text-[#525252]">
                      {c.body}
                    </div>
                  </article>

                  <div className="mx-auto mt-12 max-w-[634px]">
                    <InspirationGallery items={c.gallery} layout="stack" />
                  </div>
                </TabsPanel>
              ))}
            </Tabs>
          </section>
        </main>
      </div>
    </div>
  );
}
