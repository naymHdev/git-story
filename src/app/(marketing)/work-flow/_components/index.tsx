"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Github,
  Zap,
  Sparkles,
  Send,
  BarChart3,
  ArrowRight,
  Check,
  Play,
  GitBranch,
  MessageSquare,
  TrendingUp,
  RefreshCw,
  Lock,
  Globe,
  ChevronRight,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    step: "01",
    icon: Github,
    color: "text-neutral-300",
    bg: "bg-neutral-800/60",
    border: "border-neutral-700",
    glow: "shadow-neutral-500/10",
    title: "Connect your GitHub",
    description:
      "Link your GitHub account in one click using OAuth. We only request read access — your code stays yours. We scan commits, PRs, releases, and repo metadata.",
    visual: {
      label: "Repositories synced",
      items: [
        { name: "my-saas-app", commits: 142, lang: "TypeScript" },
        { name: "open-ui-kit", commits: 87, lang: "React" },
        { name: "cli-tools", commits: 56, lang: "Go" },
      ],
    },
  },
  {
    step: "02",
    icon: Sparkles,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/10",
    title: "AI reads your work",
    description:
      "Our fine-tuned model analyses your commit history, PR descriptions, and changelogs. It understands what you actually built — not just the file names — and extracts meaningful impact.",
    visual: {
      label: "AI understanding",
      bullets: [
        "Shipped OAuth2 refresh-token flow",
        "Reduced bundle size by 38%",
        "Merged 14 community PRs",
        "Launched v2.0 with breaking changes",
      ],
    },
  },
  {
    step: "03",
    icon: MessageSquare,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/10",
    title: "Generate polished posts",
    description:
      "GitPost AI writes platform-native content — LinkedIn articles, Twitter threads, dev.to posts. Every post matches your chosen tone: professional, casual, or technical.",
    visual: {
      label: "Post preview · LinkedIn",
      post: "🚀 Just shipped OAuth2 refresh-token support in my-saas-app after a week of deep-diving into RFC 6749. Here's what I learned about token rotation, silent refresh, and why most implementations get it subtly wrong…",
    },
  },
  {
    step: "04",
    icon: Send,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    glow: "shadow-violet-500/10",
    title: "Publish or schedule",
    description:
      "Post immediately or schedule for peak engagement times. We auto-detect optimal posting windows based on your audience's timezone and activity data.",
    visual: {
      label: "Scheduled queue",
      schedule: [
        { time: "Today, 9:00 AM", platform: "LinkedIn", status: "Queued" },
        { time: "Wed, 11:30 AM", platform: "Twitter", status: "Queued" },
        { time: "Fri, 2:00 PM", platform: "dev.to", status: "Draft" },
      ],
    },
  },
  {
    step: "05",
    icon: BarChart3,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    glow: "shadow-amber-500/10",
    title: "Track your growth",
    description:
      "A unified analytics dashboard shows impressions, profile views, follows, and engagement rate across all platforms — so you always know what content resonates.",
    visual: {
      label: "This week's performance",
      stats: [
        { label: "Impressions", value: "12,400", delta: "+34%" },
        { label: "Profile views", value: "820", delta: "+18%" },
        { label: "New followers", value: "94", delta: "+61%" },
      ],
    },
  },
];

const INTEGRATIONS = [
  { name: "GitHub", icon: Github, color: "text-neutral-200" },
  { name: "LinkedIn", icon: Globe, color: "text-blue-400" },
  { name: "Twitter / X", icon: Send, color: "text-sky-400" },
  { name: "dev.to", icon: MessageSquare, color: "text-emerald-400" },
  { name: "GitLab", icon: GitBranch, color: "text-orange-400" },
  { name: "Hashnode", icon: Zap, color: "text-violet-400" },
];

const BENEFITS = [
  { icon: RefreshCw, label: "Fully automated", desc: "Set it once, get posts every time you push." },
  { icon: Lock, label: "Read-only access", desc: "We never write to or store your source code." },
  { icon: TrendingUp, label: "SEO-aware content", desc: "Posts are structured for platform algorithms." },
  { icon: Sparkles, label: "Your voice, not ours", desc: "Fine-tune tone, length, and style per post." },
];

// ─── Visual Panels ─────────────────────────────────────────────────────────────

function StepVisual({ step }: { step: (typeof STEPS)[number] }) {
  const { visual, color, border } = step;

  if ("items" in visual) {
    return (
      <div className={`rounded-2xl border ${border} bg-neutral-900 p-5`}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
          {visual.label}
        </p>
        <div className="space-y-2">
          {visual.items.map((r) => (
            <div key={r.name} className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3">
              <div className="flex items-center gap-2">
                <Github className="size-4 text-neutral-500" />
                <span className="text-sm font-medium text-neutral-200">{r.name}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-500">
                <span>{r.commits} commits</span>
                <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-neutral-400">{r.lang}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if ("bullets" in visual) {
    return (
      <div className={`rounded-2xl border ${border} bg-neutral-900 p-5`}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">{visual.label}</p>
        <ul className="space-y-2.5">
          {visual.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-neutral-300">
              <Check className={`mt-0.5 size-4 shrink-0 ${color}`} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if ("post" in visual) {
    return (
      <div className={`rounded-2xl border ${border} bg-neutral-900 p-5`}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">{visual.label}</p>
        <p className="text-sm leading-7 text-neutral-300">{visual.post}</p>
        <div className="mt-4 flex gap-2">
          <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-400">#OpenSource</span>
          <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-400">#Security</span>
          <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-400">#SaaS</span>
        </div>
      </div>
    );
  }

  if ("schedule" in visual) {
    return (
      <div className={`rounded-2xl border ${border} bg-neutral-900 p-5`}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">{visual.label}</p>
        <div className="space-y-2">
          {visual.schedule.map((s) => (
            <div key={s.time} className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3">
              <div>
                <p className="text-xs font-semibold text-neutral-200">{s.time}</p>
                <p className="text-xs text-neutral-500">{s.platform}</p>
              </div>
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${s.status === "Queued" ? "bg-emerald-500/20 text-emerald-400" : "bg-neutral-800 text-neutral-500"}`}>{s.status}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if ("stats" in visual) {
    return (
      <div className={`rounded-2xl border ${border} bg-neutral-900 p-5`}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">{visual.label}</p>
        <div className="grid grid-cols-3 gap-3">
          {visual.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-center">
              <p className="text-xl font-extrabold text-white">{s.value}</p>
              <p className={`text-xs font-semibold ${color}`}>{s.delta}</p>
              <p className="mt-1 text-[10px] text-neutral-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

// ─── Main ──────────────────────────────────────────────────────────────────────

const WorkflowP = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
            <Zap className="size-3" /> How it works
          </span>
          <h1 className="mt-6 bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
            From commit to
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              viral post.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
            A fully automated pipeline that turns your daily engineering work
            into professional content — no copywriting skills needed.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/sign-up" className="inline-flex items-center gap-2 rounded-none bg-white px-8 py-3.5 text-sm font-bold text-black transition-all hover:bg-neutral-100">
              Try it free <ArrowRight className="size-4" />
            </Link>
            <button className="inline-flex items-center gap-2 rounded-none border border-neutral-700 px-8 py-3.5 text-sm font-semibold text-neutral-300 transition-all hover:border-neutral-500 hover:text-white">
              <Play className="size-4" /> Watch demo
            </button>
          </div>
        </div>
      </section>

      {/* ── STEP NAVIGATOR (desktop tabs) ────────────────────────────────── */}
      <section className="border-y border-neutral-800 bg-neutral-900/50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex overflow-x-auto">
            {STEPS.map((s, i) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(i)}
                className={`flex shrink-0 items-center gap-3 border-b-2 px-6 py-5 text-sm font-semibold transition-all ${
                  activeStep === i
                    ? `border-blue-500 ${s.color}`
                    : "border-transparent text-neutral-600 hover:text-neutral-400"
                }`}
              >
                <s.icon className="size-4" />
                <span className="hidden sm:inline">{s.title}</span>
                <span className="sm:hidden">{s.step}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIVE STEP DETAIL ───────────────────────────────────────────── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {STEPS.map((s, i) =>
            i === activeStep ? (
              <div key={s.step} className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div>
                  <span className={`inline-flex size-12 items-center justify-center rounded-2xl border ${s.border} ${s.bg} text-xl font-extrabold ${s.color}`}>
                    {s.step}
                  </span>
                  <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-neutral-400">{s.description}</p>
                  <div className="mt-8 flex items-center gap-3">
                    <button
                      disabled={i === 0}
                      onClick={() => setActiveStep(i - 1)}
                      className="flex size-9 items-center justify-center rounded-xl border border-neutral-800 text-neutral-500 transition hover:border-neutral-600 hover:text-white disabled:opacity-30"
                    >
                      <ChevronRight className="size-4 rotate-180" />
                    </button>
                    <span className="text-xs text-neutral-600">{i + 1} / {STEPS.length}</span>
                    <button
                      disabled={i === STEPS.length - 1}
                      onClick={() => setActiveStep(i + 1)}
                      className="flex size-9 items-center justify-center rounded-xl border border-neutral-800 text-neutral-500 transition hover:border-neutral-600 hover:text-white disabled:opacity-30"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
                <StepVisual step={s} />
              </div>
            ) : null
          )}
        </div>
      </section>

      {/* ── FULL STEPS LIST (scroll view) ────────────────────────────────── */}
      <section className="border-t border-neutral-800 bg-neutral-900/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              <RefreshCw className="size-3" /> Full pipeline
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              The complete journey
            </h2>
          </div>

          <ol className="relative border-l border-neutral-800">
            {STEPS.map((s, i) => (
              <li key={s.step} className="mb-14 ml-8 last:mb-0">
                <span className={`absolute -left-4 flex size-8 items-center justify-center rounded-full border ${s.border} ${s.bg} text-xs font-bold ${s.color} ring-4 ring-neutral-950`}>
                  {s.step}
                </span>
                <button onClick={() => { setActiveStep(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="group text-left">
                  <h3 className={`flex items-center gap-2 text-lg font-bold text-neutral-100 group-hover:${s.color} transition-colors`}>
                    <s.icon className={`size-5 ${s.color}`} />
                    {s.title}
                    <ChevronRight className={`size-4 ${s.color} opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1`} />
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-neutral-500">{s.description}</p>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── INTEGRATIONS ─────────────────────────────────────────────────── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
            <Globe className="size-3" /> Integrations
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white">
            Works with your whole stack
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-neutral-400">
            Connect every platform you already use. More integrations ship every sprint.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {INTEGRATIONS.map(({ name, icon: Icon, color }) => (
              <div key={name} className="flex items-center gap-2.5 rounded-2xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-semibold text-neutral-300 transition hover:border-neutral-700">
                <Icon className={`size-4 ${color}`} />
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ────────────────────────────────────────────────── */}
      <section className="border-t border-neutral-800 bg-neutral-900/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Why developers love it</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-7 transition hover:border-neutral-700 hover:-translate-y-1 hover:shadow-xl">
                <Icon className="mb-4 size-7 text-blue-400" />
                <h3 className="mb-2 text-sm font-bold text-white">{label}</h3>
                <p className="text-xs leading-6 text-neutral-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-black p-12 text-center md:p-20">
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-sm -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
          <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="relative z-10">
            <Zap className="mx-auto mb-5 size-10 text-blue-400" />
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Ready to put your work
              <br />
              on the map?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-neutral-400">
              Connect your GitHub, generate your first post in under 60 seconds,
              and start building the audience your work deserves.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/sign-up" className="inline-flex items-center gap-2 rounded-none bg-white px-8 py-3.5 text-sm font-bold text-black transition-all hover:bg-neutral-100">
                Get started free <ArrowRight className="size-4" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 rounded-none border border-neutral-700 px-8 py-3.5 text-sm font-semibold text-neutral-300 transition-all hover:border-neutral-500 hover:text-white">
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkflowP;
