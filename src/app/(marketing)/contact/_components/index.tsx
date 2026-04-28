"use client";

import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  Zap,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CHANNELS = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@gitpost.ai",
    description: "For general enquiries & partnerships",
    href: "mailto:hello@gitpost.ai",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: MessageSquare,
    label: "Live Chat",
    value: "Available in-app",
    description: "Fastest response — usually under 5 min",
    href: "/sign-in",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Github,
    label: "GitHub Issues",
    value: "github.com/gitpost-ai",
    description: "Bug reports & feature requests",
    href: "https://github.com",
    color: "text-neutral-300",
    bg: "bg-neutral-500/10",
    border: "border-neutral-500/20",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@gitpostai",
    description: "Quick questions & community",
    href: "https://twitter.com",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
];

const FAQS = [
  {
    q: "How quickly will I get a reply?",
    a: "Email replies within 24 hours on business days. Live chat (available to signed-in users) typically responds in under 5 minutes.",
  },
  {
    q: "Do you offer enterprise or team plans?",
    a: "Yes — we offer custom plans for teams of 5+. Reach out via the form and select 'Enterprise' as your topic.",
  },
  {
    q: "Can I report a bug or request a feature?",
    a: "Absolutely. Use our GitHub Issues tracker for bugs. For feature ideas, drop them in the form below or via Twitter/X.",
  },
  {
    q: "Where is your team based?",
    a: "We are fully remote, with team members across North America, Europe, and Asia. Support hours run 8 am–8 pm UTC.",
  },
];

const TOPICS = [
  "General enquiry",
  "Feature request",
  "Bug report",
  "Enterprise / team plan",
  "Partnership",
  "Press & media",
  "Other",
];

// ─── FAQ Item ──────────────────────────────────────────────────────────────────

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
      {open && (
        <p className="pb-5 text-sm leading-7 text-neutral-400">{a}</p>
      )}
    </div>
  );
}

// ─── Contact Form ──────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: TOPICS[0],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[460px] flex-col items-center justify-center gap-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-12 text-center">
        <CheckCircle2 className="size-14 text-emerald-400" />
        <h3 className="text-2xl font-bold text-white">Message received!</h3>
        <p className="max-w-xs text-sm leading-6 text-neutral-400">
          Thanks for reaching out. We will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", topic: TOPICS[0], message: "" });
          }}
          className="mt-2 text-sm font-medium text-emerald-400 underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 transition focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Full name
          </label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Alex Rivera"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-neutral-500">
          Topic
        </label>
        <select
          name="topic"
          value={form.topic}
          onChange={handleChange}
          className={inputClass}
        >
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-neutral-500">
          Message
        </label>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          placeholder="Tell us what's on your mind..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="size-4 shrink-0" />
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-white py-3.5 text-sm font-bold text-black transition-all hover:bg-neutral-100 disabled:opacity-50"
      >
        {status === "sending" ? (
          <>
            <span className="size-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
            Sending…
          </>
        ) : (
          <>
            Send message <ArrowRight className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl"
        />

        {/* Grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
            <Zap className="size-3" />
            Contact us
          </span>

          <h1 className="mt-6 bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
            Let&apos;s talk.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
            Whether you have a question, a bug, a bold idea, or just want to say
            hi — we read every single message.
          </p>

          {/* Availability badge */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-5 py-2.5 text-sm text-neutral-400">
            <Clock className="size-4 text-emerald-400" />
            Support hours&nbsp;·&nbsp;
            <span className="font-semibold text-white">8 am – 8 pm UTC</span>
            <span className="mx-1">·</span>
            <MapPin className="size-4 text-neutral-500" />
            Fully remote
          </div>
        </div>
      </section>

      {/* ── CHANNEL CARDS ────────────────────────────────────────────────── */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map(
            ({ icon: Icon, label, value, description, href, color, bg, border }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`group flex flex-col gap-3 rounded-2xl border ${border} ${bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <span
                  className={`inline-flex size-10 items-center justify-center rounded-xl bg-neutral-900/60 ${color}`}
                >
                  <Icon className="size-5" />
                </span>
                <p className="text-sm font-bold text-neutral-100">{label}</p>
                <p className={`text-xs font-semibold ${color} break-all`}>
                  {value}
                </p>
                <p className="text-xs leading-5 text-neutral-500">
                  {description}
                </p>
                <div
                  className={`mt-auto flex items-center gap-1 text-xs font-medium ${color} opacity-0 transition-opacity group-hover:opacity-100`}
                >
                  Open <ArrowRight className="size-3" />
                </div>
              </a>
            )
          )}
        </div>
      </section>

      {/* ── FORM + FAQ ────────────────────────────────────────────────────── */}
      <section className="border-t border-neutral-800 bg-neutral-900/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_480px]">

            {/* Left — FAQ */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                <MessageSquare className="size-3" />
                FAQ
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Common questions
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Can&apos;t find your answer here? Send us a message on the
                right →
              </p>

              <div className="mt-10">
                {FAQS.map((item) => (
                  <FAQItem key={item.q} {...item} />
                ))}
              </div>

              {/* Social row */}
              <div className="mt-12 flex items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600">
                  Follow us
                </p>
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  {
                    icon: Twitter,
                    href: "https://twitter.com",
                    label: "Twitter",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-xl border border-neutral-800 text-neutral-500 transition-colors hover:border-neutral-600 hover:text-neutral-200"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="relative">
              {/* Decorative top border line */}
              <div
                aria-hidden
                className="absolute -top-px left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
              />
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-2xl shadow-black/40">
                <h3 className="mb-1 text-xl font-bold text-white">
                  Send us a message
                </h3>
                <p className="mb-7 text-sm text-neutral-500">
                  We&apos;ll reply within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA STRIP ─────────────────────────────────────────────── */}
      <section className="border-t border-neutral-800 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <Zap className="size-8 text-blue-400" />
          <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Ready to make your work visible?
          </h2>
          <p className="max-w-md text-sm text-neutral-400">
            Join 50,000+ developers using GitPost AI to turn their GitHub
            activity into a professional presence — automatically.
          </p>
          <a
            href="/sign-up"
            className="inline-flex items-center gap-2 rounded-none bg-white px-8 py-3.5 text-sm font-bold text-black transition-all hover:bg-neutral-100"
          >
            Get started free <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
