import Link from "next/link";

export default function SandboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <header className="border-b border-line px-6 py-3 flex items-center gap-4 text-[12.5px]">
        <Link href="/sandbox" className="text-ink-soft hover:text-ink transition-colors">
          ← Sandbox index
        </Link>
        <span className="text-ink-faint">/</span>
        <Link href="/" className="text-ink-soft hover:text-ink transition-colors">
          Case study
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
