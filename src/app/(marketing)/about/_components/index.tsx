import React from "react";
import Link from "next/link";
import {
  Zap,
  Users,
  Target,
  Rocket,
  Globe,
  Shield,
  Heart,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Star,
  Code2,
  TrendingUp,
  Award,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "50K+", label: "Developers", icon: Users },
  { value: "2M+", label: "Posts Generated", icon: Zap },
  { value: "120+", label: "Countries", icon: Globe },
  { value: "4.9★", label: "Avg. Rating", icon: Star },
];

const VALUES = [
  {
    icon: Rocket,
    title: "Move at Developer Speed",
    description:
      "We ship fast, iterate constantly, and never let process slow down innovation. If it takes more than 30 seconds, we automate it.",
  },
  {
    icon: Shield,
    title: "Privacy First, Always",
    description:
      "Your data is yours. We never sell, share, or misuse user information. Full transparency in everything we build.",
  },
  {
    icon: Heart,
    title: "Built for the Community",
    description:
      "Open-source at heart. We give back by sponsoring maintainers, publishing tools, and keeping core features free forever.",
  },
  {
    icon: Target,
    title: "Precision Over Noise",
    description:
      "We obsess over signal-to-noise ratio. Every feature must make your professional story clearer, not noisier.",
  },
  {
    icon: Code2,
    title: "Developer Experience",
    description:
      "We are developers building for developers. Every design decision starts with the question: would we want to use this?",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "Our AI models are retrained weekly. Your portfolio is always improving, even when you are not actively using the app.",
  },
];

const TEAM = [
  {
    name: "Alex Rivera",
    role: "Co-founder & CEO",
    bio: "Former Staff Engineer at GitHub. Passionate about developer tooling and making great work visible.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Alex",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Priya Nair",
    role: "Co-founder & CTO",
    bio: "Ex-Google Brain researcher. Turned her ML PhD into an AI that reads your commits better than your manager does.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Priya",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Jordan Lee",
    role: "Head of Design",
    bio: "Designed products at Figma and Linear. Obsessed with the kind of UI that makes you forget there is UI.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Jordan",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Sam Okafor",
    role: "Lead AI Engineer",
    bio: "Built NLP pipelines at OpenAI and Anthropic. Now teaching machines to write better LinkedIn posts than humans.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sam",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Mei Zhang",
    role: "Head of Growth",
    bio: "Scaled dev-tools startups from 0 → 100K users. Believes the best marketing is a product people genuinely love.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mei",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Luca Moretti",
    role: "Senior Full-Stack Engineer",
    bio: "Open-source maintainer with 40+ npm packages. Thinks boring infrastructure is secretly the most exciting work.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Luca",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
];

const MILESTONES = [
  {
    year: "2023",
    title: "The Idea",
    description:
      "Two engineers frustrated by how hard it was to showcase their open-source work decided to build the tool they always wanted.",
  },
  {
    year: "2024 Q1",
    title: "Beta Launch",
    description:
      "Launched private beta to 500 developers. Onboarded our first 1,000 users in the first week — completely organically.",
  },
  {
    year: "2024 Q3",
    title: "Seed Round",
    description:
      "Raised $3.2M seed from Index Ventures and a group of angel investors including engineering leaders from Stripe and Vercel.",
  },
  {
    year: "2025",
    title: "50K Developers",
    description:
      "Crossed 50,000 active users across 120 countries. Generated over 2 million posts with an average rating of 4.9 stars.",
  },
  {
    year: "2026",
    title: "GitPost AI v2",
    description:
      "Launched our second-generation AI engine, multi-platform posting, and the GitPost API for enterprise integrations.",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
      {children}
    </span>
  );
}

function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl font-extrabold tracking-tight text-neutral-50 md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8">
        {/* Gradient blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <SectionLabel>
            <Award className="size-3" />
            Our Story
          </SectionLabel>

          <h1 className="mt-6 bg-gradient-to-br from-white via-neutral-200 to-neutral-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
            Built by developers,
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              for developers.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            GitPost AI was born from a simple frustration: great engineers doing
            great work, invisible to the world. We built the tool we always
            wished existed — one that turns your GitHub activity into a
            professional presence, automatically.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 rounded-none bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all duration-150 hover:bg-neutral-100"
            >
              Get started free <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-none border border-neutral-700 bg-transparent px-8 py-3.5 text-sm font-semibold text-neutral-300 transition-all duration-150 hover:border-neutral-500 hover:text-white"
            >
              Read our blog
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────────── */}
      <section className="border-y border-neutral-800 bg-neutral-900/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto mb-3 size-6 text-blue-400" />
              <p className="text-4xl font-extrabold tracking-tight text-white">
                {value}
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ────────────────────────────────────────────────────────── */}
      <section className="px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Text */}
            <div>
              <SectionLabel>
                <Target className="size-3" />
                Mission
              </SectionLabel>
              <SectionHeading className="mt-4">
                Your code deserves
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  to be seen.
                </span>
              </SectionHeading>
              <p className="mt-6 text-base leading-8 text-neutral-400">
                Millions of developers contribute incredible work every day —
                shipping features, fixing bugs, reviewing PRs, writing docs.
                Yet most of that effort never makes it to a résumé or LinkedIn
                profile, because translating code into compelling narratives is
                hard and time-consuming.
              </p>
              <p className="mt-4 text-base leading-8 text-neutral-400">
                Our mission is to close that gap. GitPost AI reads your
                repositories, understands what you built, and writes
                professional posts that accurately represent your impact —
                so recruiters, peers, and the world can see the engineer
                you truly are.
              </p>
            </div>

            {/* Visual card */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
              <div
                aria-hidden
                className="absolute -right-12 -top-12 size-48 rounded-full bg-blue-500/10 blur-2xl"
              />
              <blockquote className="relative z-10">
                <p className="text-2xl font-bold leading-snug text-neutral-100">
                  &ldquo;The best engineers I know are the ones nobody outside
                  their company has ever heard of. We are here to change
                  that.&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <img
                    src="https://api.dicebear.com/9.x/avataaars/svg?seed=Alex"
                    alt="Alex Rivera"
                    className="size-10 rounded-full border border-neutral-700 bg-neutral-800"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Alex Rivera
                    </p>
                    <p className="text-xs text-neutral-500">
                      Co-founder & CEO, GitPost AI
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ─────────────────────────────────────────────────────────── */}
      <section className="border-t border-neutral-800 bg-neutral-900/40 px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <SectionLabel>
              <Heart className="size-3" />
              What we believe
            </SectionLabel>
            <SectionHeading className="mt-4">Our core values</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              These aren&apos;t wall decorations — they are the principles that
              drive every product decision, every hire, and every line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-neutral-800 bg-neutral-900 p-8 transition-all duration-300 hover:border-neutral-700 hover:shadow-xl hover:shadow-blue-900/10"
              >
                <span className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                  <Icon className="size-5" />
                </span>
                <h3 className="mb-2 text-lg font-bold text-neutral-100">
                  {title}
                </h3>
                <p className="text-sm leading-7 text-neutral-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ───────────────────────────────────────────────────────── */}
      <section className="px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <SectionLabel>
              <TrendingUp className="size-3" />
              Journey
            </SectionLabel>
            <SectionHeading className="mt-4">How we got here</SectionHeading>
          </div>

          <ol className="relative border-l border-neutral-800">
            {MILESTONES.map(({ year, title, description }, i) => (
              <li
                key={i}
                className="mb-12 ml-8 last:mb-0"
              >
                <span className="absolute -left-3.5 flex size-7 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 ring-4 ring-neutral-950">
                  <span className="size-2.5 rounded-full bg-blue-500" />
                </span>
                <span className="mb-1 inline-block rounded-full bg-blue-500/10 px-3 py-0.5 text-xs font-semibold text-blue-400">
                  {year}
                </span>
                <h3 className="mt-1 text-lg font-bold text-neutral-100">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── TEAM ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-neutral-800 bg-neutral-900/40 px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <SectionLabel>
              <Users className="size-3" />
              The team
            </SectionLabel>
            <SectionHeading className="mt-4">
              Meet the people behind GitPost AI
            </SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              A small, fully-remote team of engineers, designers, and
              researchers obsessed with making developer talent visible.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map(({ name, role, bio, avatar, github, linkedin, twitter }) => (
              <div
                key={name}
                className="group relative rounded-2xl border border-neutral-800 bg-neutral-900 p-8 transition-all duration-300 hover:border-neutral-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/10"
              >
                <img
                  src={avatar}
                  alt={name}
                  className="mb-5 size-16 rounded-2xl border border-neutral-700 bg-neutral-800"
                />
                <h3 className="text-base font-bold text-neutral-100">{name}</h3>
                <p className="mb-3 text-sm font-medium text-blue-400">{role}</p>
                <p className="text-sm leading-6 text-neutral-400">{bio}</p>

                {/* Social links */}
                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} GitHub`}
                    className="flex size-8 items-center justify-center rounded-lg border border-neutral-700 text-neutral-500 transition-colors hover:border-neutral-500 hover:text-neutral-200"
                  >
                    <Github className="size-4" />
                  </Link>
                  <Link
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} LinkedIn`}
                    className="flex size-8 items-center justify-center rounded-lg border border-neutral-700 text-neutral-500 transition-colors hover:border-neutral-500 hover:text-neutral-200"
                  >
                    <Linkedin className="size-4" />
                  </Link>
                  <Link
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} Twitter`}
                    className="flex size-8 items-center justify-center rounded-lg border border-neutral-700 text-neutral-500 transition-colors hover:border-neutral-500 hover:text-neutral-200"
                  >
                    <Twitter className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN US CTA ────────────────────────────────────────────────────── */}
      <section className="px-4 py-28 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-black p-12 text-center md:p-20">
          {/* Decorative glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-sm -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"
          />

          <div className="relative z-10">
            <SectionLabel>
              <Rocket className="size-3" />
              We are hiring
            </SectionLabel>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Help us build the future
              <br />
              of developer branding.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-neutral-400">
              We are a small team tackling a big problem. If you love developer
              tooling, AI, and making great work visible — we want to hear from
              you.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-none bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-neutral-100"
              >
                View open roles <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-none border border-neutral-700 px-8 py-3.5 text-sm font-semibold text-neutral-300 transition-all hover:border-neutral-500 hover:text-white"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
