"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type App = {
  id: "recruiting" | "alert" | "support";
  label: string;
  accent: string;
  accentRing: string;
  headline: string;
  subtitle: string;
  primaryCta: string;
  items: { name: string; meta: string; reason: string }[];
};

const APPS: App[] = [
  {
    id: "recruiting",
    label: "AI Recruiting",
    accent: "bg-mistral-orange",
    accentRing: "ring-mistral-orange/20",
    headline: "12 candidates ready for your review.",
    subtitle: "Sourced from 847 profiles · LinkedIn, GitHub, Greenhouse",
    primaryCta: "Contact top 5",
    items: [
      {
        name: "Sophie Martin",
        meta: "Sr. Backend · Stripe",
        reason: "8+ yrs Python · open to Paris move",
      },
      {
        name: "Marc Dubois",
        meta: "Staff · Datadog",
        reason: "Observability backbone · tweet about Mistral in March",
      },
      {
        name: "Sara Kim",
        meta: "Sr. SWE · Vercel",
        reason: "Edge runtime · shipped AI features in 2026",
      },
    ],
  },
  {
    id: "alert",
    label: "AI Alert Monitoring",
    accent: "bg-[#2563EB]",
    accentRing: "ring-[#2563EB]/20",
    headline: "12 alerts clustered for your review.",
    subtitle: "Triaged from 847 incidents · Datadog, PagerDuty, Sentry",
    primaryCta: "Open top 5",
    items: [
      {
        name: "DB connection pool saturation",
        meta: "prod-eu-west · severity 2",
        reason: "Cluster of 47 alerts · same root cause as 11 Apr incident",
      },
      {
        name: "Payment webhook timeout spike",
        meta: "payments-svc · severity 1",
        reason: "Started 6 min ago · matches deploy window",
      },
      {
        name: "Search index lag",
        meta: "search-svc · severity 3",
        reason: "Slow drift since 02:14 UTC · upstream throttle suspected",
      },
    ],
  },
  {
    id: "support",
    label: "AI Customer Support",
    accent: "bg-[#16A34A]",
    accentRing: "ring-[#16A34A]/20",
    headline: "12 tickets pre-triaged for your review.",
    subtitle: "Sorted from 847 inbound tickets · Zendesk, Front, email",
    primaryCta: "Reply to top 5",
    items: [
      {
        name: "Refund request · Order #48201",
        meta: "Tier 1 · 4h SLA",
        reason: "Draft ready · policy applies · customer eligible",
      },
      {
        name: "Subscription cancel · Acme Corp",
        meta: "Tier 2 · churn risk",
        reason: "Account value €18k/yr · suggest retention call",
      },
      {
        name: "Integration error · API key rotation",
        meta: "Tier 1 · 24h SLA",
        reason: "Known issue · linked KB article ready to send",
      },
    ],
  },
];

export function Scaling() {
  const [active, setActive] = useState<App["id"]>("recruiting");
  const current = APPS.find((a) => a.id === active)!;

  return (
    <section className="py-32 border-t border-line bg-mistral-cream">
      <div className="wide">
        <div className="editorial !max-w-[720px] !px-0">
          <p className="mono-tag mb-8">§9 — Proof of the system</p>
          <h2 className="text-h2 leading-tight tracking-tight font-medium text-ink">
            Three apps. One kit. Same screen.
          </h2>
          <p className="mt-6 text-lede leading-snug text-ink-muted max-w-[44ch]">
            Swap the business layer and the shortlist screen becomes a
            triage screen. Same structure, same trust contract, different
            métier.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-16 flex items-center gap-2">
          {APPS.map((a) => (
            <button
              key={a.id}
              onClick={() => setActive(a.id)}
              className={cn(
                "inline-flex items-center gap-2.5 px-4 py-2 rounded-lg text-[13px] font-medium transition-colors border",
                active === a.id
                  ? "bg-surface border-ink text-ink shadow-[0_1px_3px_rgba(26,22,20,0.06)]"
                  : "bg-transparent border-line text-ink-muted hover:bg-surface/60"
              )}
            >
              <span className={cn("size-2 rounded-full", a.accent)} />
              {a.label}
            </button>
          ))}
        </div>

        {/* Mock screen */}
        <div className="mt-8 rounded-2xl border border-line bg-surface shadow-[0_1px_3px_rgba(26,22,20,0.04),0_24px_60px_-30px_rgba(26,22,20,0.18)] overflow-hidden">
          <div className="px-8 py-7 border-b border-line">
            <div className="flex items-start justify-between gap-12">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium",
                      active === "recruiting" &&
                        "bg-[#E8F7EE] text-[#16734A]",
                      active === "alert" && "bg-[#E5EEFD] text-[#1E40AF]",
                      active === "support" && "bg-[#E8F7EE] text-[#16734A]"
                    )}
                  >
                    <span className={cn("size-1.5 rounded-full", current.accent)} />
                    Ready
                  </span>
                  <span className="text-[11px] text-ink-soft">
                    {active === "alert" ? "just now" : "31 min ago"}
                  </span>
                </div>
                <h3 className="text-[24px] leading-tight tracking-tight font-medium text-ink">
                  {current.headline}
                </h3>
                <p className="mt-2 text-[13.5px] text-ink-muted leading-snug">
                  {current.subtitle}
                </p>
              </div>
              <button className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-ink text-white text-[13px] font-medium hover:bg-[#2A2420] transition-colors">
                <span className={cn("size-1.5 rounded-full", current.accent)} />
                {current.primaryCta}
              </button>
            </div>
          </div>
          <div className="px-8 py-6 bg-surface-subtle">
            <ul className="space-y-3">
              {current.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 px-4 py-3 rounded-lg bg-surface border border-line"
                >
                  <span
                    className={cn(
                      "mt-1 size-2 rounded-full shrink-0",
                      current.accent
                    )}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-[13.5px] font-medium text-ink truncate">
                        {item.name}
                      </h4>
                      <span className="text-[11px] text-ink-soft shrink-0">
                        {item.meta}
                      </span>
                    </div>
                    <p className="mt-1 text-[12.5px] text-ink-muted leading-snug">
                      {item.reason}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="editorial !max-w-[720px] !px-0 mt-12">
          <p className="text-body leading-relaxed text-ink-muted">
            The investment is in{" "}
            <span className="text-ink font-medium">the kit</span>, not in each
            app. Solutions builds the kit once, deploys it a hundred times.
            That is the answer to the scaling question.
          </p>
        </div>
      </div>
    </section>
  );
}
