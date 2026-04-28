"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Check,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Shield,
  Rocket,
  Building2,
  Star,
  Users,
  Infinity,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PLANS = [
  {
    id: "free",
    name: "Free",
    icon: Zap,
    tagline: "For developers just getting started.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    color: "text-neutral-300",
    accentBg: "bg-neutral-800/60",
    accentBorder: "border-neutral-700",
    badgeColor: "bg-neutral-800 text-neutral-300",
    cta: "Get started free",
    ctaHref: "/sign-up",
    ctaStyle:
      "border border-neutral-700 bg-transparent text-neutral-200 hover:border-neutral-500 hover:text-white",
    popular: false,
    features: [
      "5 AI posts per month",
      "1 connected GitHub account",
      "Basic post templates",
      "LinkedIn export",
      "Community support",
    ],
    missing: [
      "Unlimited posts",
      "Custom tone & voice",
      "Multi-platform posting",
      "Analytics dashboard",
      "Priority support",
      "API access",
      "Team collaboration",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    icon: Sparkles,
    tagline: "For serious developers building their brand.",
    monthlyPrice: 19,
    yearlyPrice: 15,
    color: "text-blue-400",
    accentBg: "bg-blue-500/5",
    accentBorder: "border-blue-500/40",
    badgeColor: "bg-blue-500/20 text-blue-300",
    cta: "Start Pro trial",
    ctaHref: "/sign-up?plan=pro",
    ctaStyle: "bg-white text-black hover:bg-neutral-100",
    popular: true,
    features: [
      "Unlimited AI posts",
      "3 connected GitHub accounts",
      "Advanced post templates",
      "LinkedIn + Twitter posting",
      "Custom tone & voice",
      "Analytics dashboard",
      "Priority email support",
    ],
    missing: ["API access", "Team collaboration"],
  },
  {
    id: "team",
    name: "Team",
    icon: Users,
    tagline: "For engineering teams that want to shine together.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    color: "text-emerald-400",
    accentBg: "bg-emerald-500/5",
    accentBorder: "border-emerald-500/30",
    badgeColor: "bg-emerald-500/20 text-emerald-300",
    cta: "Start team trial",
    ctaHref: "/sign-up?plan=team",
    ctaStyle:
      "border border-emerald-500/50 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20",
    popular: false,
    features: [
      "Everything in Pro",
      "Up to 10 seats",
      "Shared post drafts",
      "Team analytics",
      "API access (10K calls/mo)",
      "Dedicated Slack support",
      "Custom branding",
    ],
    missing: [],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building2,
    tagline: "Custom contracts, SSO, and SLA for large orgs.",
    monthlyPrice: null,
    yearlyPrice: null,
    color: "text-violet-400",
    accentBg: "bg-violet-500/5",
    accentBorder: "border-violet-500/30",
    badgeColor: "bg-violet-500/20 text-violet-300",
    cta: "Talk to sales",
    ctaHref: "/contact",
    ctaStyle:
      "border border-violet-500/50 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20",
    popular: false,
    features: [
      "Everything in Team",
      "Unlimited seats",
      "Unlimited API access",
      "SSO / SAML",
      "Custom data retention",
      "99.9% uptime SLA",
      "Dedicated account manager",
    ],
    missing: [],
  },
];

const COMPARE_FEATURES = [
  { label: "AI posts per month", free: "5", pro: "Unlimited", team: "Unlimited", enterprise: "Unlimited" },
  { label: "GitHub accounts", free: "1", pro: "3", team: "10", enterprise: "Unlimited" },
  { label: "Post templates", free: "Basic", pro: "Advanced", team: "Advanced", enterprise: "Custom" },
  { label: "Platforms", free: "LinkedIn", pro: "LinkedIn + Twitter", team: "All platforms", enterprise: "All platforms" },
  { label: "Custom tone & voice", free: false, pro: true, team: true, enterprise: true },
  { label: "Analytics dashboard", free: false, pro: true, team: true, enterprise: true },
  { label: "API access", free: false, pro: false, team: "10K calls/mo", enterprise: "Unlimited" },
  { label: "Team seats", free: "1", pro: "1", team: "Up to 10", enterprise: "Unlimited" },
  { label: "SSO / SAML", free: false, pro: false, team: false, enterprise: true },
  { label: "SLA", free: false, pro: false, team: false, enterprise: "99.9%" },
  { label: "Support", free: "Community", pro: "Priority email", team: "Slack", enterprise: "Dedicated" },
];

const FAQS = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes — upgrade or downgrade whenever you like. Upgrades take effect immediately and you are charged pro-rata. Downgrades apply at the end of your billing cycle.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Pro and Team plans include a 14-day free trial, no credit card required. Enterprise plans come with a custom pilot period agreed during the sales process.",
  },
  {
    q: "What happens when I hit my post limit on Free?",
    a: "You will be notified and your post generation pauses until the next calendar month or you upgrade. Existing posts are never deleted.",
  },
  {
    q: "Do you offer discounts for students or open-source maintainers?",
    a: "Absolutely — we offer 50% off Pro for verified students and qualifying open-source projects. Reach out via the contact page.",
  },
  {
    q: "How does annual billing work?",
    a: "Annual plans are billed once per year and save you up to 20% compared to monthly. You can cancel within 30 days for a full refund.",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-800 last:border-none">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-neutral-200 transition-colors hover:text-white"
      >
        {q}
        <ChevronDown
          className={`size-4 shrink-0 text-neutral-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-5 text-sm leading-7 text-neutral-400">{a}</p>}
    </div>
  );
}

function CellValue({ val }: { val: string | boolean }) {
  if (val === true)
    return <Check className="mx-auto size-4 text-emerald-400" />;
  if (val === false)
    return <X className="mx-auto size-4 text-neutral-700" />;
  return (
    <span className="text-xs font-medium text-neutral-300">{val}</span>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────

const PricingPage = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8">
        {/* Blobs */}
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl" />
        {/* Grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
            <Rocket className="size-3" /> Pricing
          </span>

          <h1 className="mt-6 bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
            Simple, honest pricing.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
            Start free. Upgrade when your audience grows. No hidden fees, no
            dark patterns — just transparent value at every level.
          </p>

          {/* Billing toggle */}
          <div className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-1.5 backdrop-blur">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-xl px-5 py-2 text-sm font-semibold transition-all ${!annual ? "bg-neutral-700 text-white shadow" : "text-neutral-500 hover:text-neutral-300"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition-all ${annual ? "bg-neutral-700 text-white shadow" : "text-neutral-500 hover:text-neutral-300"}`}
            >
              Annual
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── PLAN CARDS ─────────────────────────────────────────────────────── */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            const price = annual ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border ${plan.accentBorder} ${plan.accentBg} p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500 px-4 py-1 text-xs font-bold text-white shadow-lg shadow-blue-500/30">
                      <Star className="size-3" /> Most popular
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <span className={`inline-flex size-10 items-center justify-center rounded-xl bg-neutral-900/80 ${plan.color} mb-4`}>
                    <Icon className="size-5" />
                  </span>
                  <h2 className={`text-lg font-bold ${plan.color}`}>{plan.name}</h2>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-7 border-b border-neutral-800 pb-7">
                  {price !== null ? (
                    <div className="flex items-end gap-1">
                      <span className="text-5xl font-extrabold tracking-tight text-white">
                        ${price}
                      </span>
                      <span className="mb-2 text-sm text-neutral-500">
                        / mo{annual && price > 0 ? ", billed annually" : ""}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-extrabold tracking-tight text-white">
                        Custom
                      </span>
                    </div>
                  )}
                  {annual && price !== null && price > 0 && (
                    <p className="mt-1 text-xs text-neutral-600">
                      ${plan.monthlyPrice}/mo billed monthly
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="mb-8 flex flex-col gap-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-300">
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                      {f}
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-600 line-through">
                      <X className="mt-0.5 size-4 shrink-0 text-neutral-700" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={plan.ctaHref}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-none py-3 text-sm font-bold transition-all ${plan.ctaStyle}`}
                >
                  {plan.cta} <ArrowRight className="size-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Trust row */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-6 text-xs text-neutral-600">
          {[
            { icon: Shield, label: "No credit card required" },
            { icon: Infinity, label: "Cancel anytime" },
            { icon: Star, label: "14-day free trial on paid plans" },
            { icon: Zap, label: "Instant activation" },
          ].map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-1.5">
              <Icon className="size-3.5 text-neutral-500" /> {label}
            </span>
          ))}
        </div>
      </section>

      {/* ── FEATURE COMPARISON TABLE ───────────────────────────────────────── */}
      <section className="border-t border-neutral-800 bg-neutral-900/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              <Check className="size-3" /> Compare plans
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Everything side-by-side
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-900/80">
                  <th className="py-4 pl-6 pr-4 text-left text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    Feature
                  </th>
                  {PLANS.map((p) => (
                    <th key={p.id} className={`px-4 py-4 text-center text-xs font-bold uppercase tracking-widest ${p.color}`}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_FEATURES.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-neutral-800/60 transition-colors hover:bg-neutral-900/40 ${i % 2 === 0 ? "" : "bg-neutral-900/20"}`}
                  >
                    <td className="py-3.5 pl-6 pr-4 font-medium text-neutral-300">
                      {row.label}
                    </td>
                    <td className="px-4 py-3.5 text-center"><CellValue val={row.free} /></td>
                    <td className="px-4 py-3.5 text-center"><CellValue val={row.pro} /></td>
                    <td className="px-4 py-3.5 text-center"><CellValue val={row.team} /></td>
                    <td className="px-4 py-3.5 text-center"><CellValue val={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ────────────────────────────────────────────────────── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { quote: "Switched from free to Pro and my LinkedIn profile views tripled in a month. Worth every penny.", name: "Karan M.", role: "Senior SWE @ Stripe" },
              { quote: "Our whole engineering team uses GitPost now. The shared drafts feature alone saves us hours every week.", name: "Yuki T.", role: "Eng Manager @ Vercel" },
              { quote: "I was skeptical about AI writing posts for me. Now I can't imagine doing it manually.", name: "Fatima A.", role: "Open-source maintainer" },
            ].map(({ quote, name, role }) => (
              <div key={name} className="flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-7">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-7 text-neutral-300">&ldquo;{quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-bold text-white">{name}</p>
                  <p className="text-xs text-neutral-500">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="border-t border-neutral-800 bg-neutral-900/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
              <Zap className="size-3" /> FAQ
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white">
              Pricing questions, answered
            </h2>
          </div>
          {FAQS.map((item) => (
            <FAQItem key={item.q} {...item} />
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────────────────────────────────── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-black p-12 text-center md:p-20">
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-sm -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
          <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

          <div className="relative z-10">
            <Sparkles className="mx-auto mb-5 size-10 text-blue-400" />
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Start free. Upgrade when
              <br />
              you&apos;re ready.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-neutral-400">
              No credit card required. 5 AI posts included every month —
              forever. Upgrade for unlimited power.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/sign-up" className="inline-flex items-center gap-2 rounded-none bg-white px-8 py-3.5 text-sm font-bold text-black transition-all hover:bg-neutral-100">
                Get started free <ArrowRight className="size-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-none border border-neutral-700 px-8 py-3.5 text-sm font-semibold text-neutral-300 transition-all hover:border-neutral-500 hover:text-white">
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
