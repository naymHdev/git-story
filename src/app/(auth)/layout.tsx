import type { Metadata } from "next";
import Link from "next/link";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Auth – GitPost AI",
  description: "Sign in or create your GitPost AI account.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex bg-[#0f172a] overflow-hidden">
      {/* ── Animated grid background ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Radial glow blobs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl z-0"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl z-0"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
        }}
      />

      {/* ── Left panel (branding) – hidden on mobile ── */}
      <aside className="hidden lg:flex flex-col justify-between w-[46%] min-h-screen relative z-10 p-12 border-r border-[#334155]/60">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group w-fit">
          <span className="flex items-center justify-center size-8 rounded-lg bg-indigo-600 text-white shadow-lg group-hover:scale-105 transition-transform duration-200">
            <Zap className="size-4" strokeWidth={2.5} />
          </span>
          <span className="font-bold text-xl tracking-tight text-white">
            GitPost<span className="text-indigo-400">Ai</span>
          </span>
        </Link>

        {/* Central copy */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-wide">
              <span className="size-1.5 rounded-full bg-indigo-400 animate-pulse" />
              AI-Powered LinkedIn Posting
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white">
              Automate your{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                GitHub → LinkedIn
              </span>{" "}
              workflow
            </h1>
            <p className="text-[#94a3b8] text-base leading-relaxed max-w-sm">
              Turn every commit, PR, and release into a polished LinkedIn post
              — automatically, with zero extra effort.
            </p>
          </div>

          {/* Feature list */}
          <ul className="space-y-3">
            {[
              { icon: "⚡", text: "Instant AI post generation from GitHub events" },
              { icon: "🎯", text: "Smart scheduling for maximum engagement" },
              { icon: "📊", text: "Analytics to track your developer brand" },
              { icon: "🔒", text: "Secure OAuth — no passwords stored" },
            ].map(({ icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                <span className="text-base leading-none mt-0.5">{icon}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonial */}
        <div className="rounded-2xl border border-[#334155]/70 bg-[#1e293b]/60 backdrop-blur-sm p-5 space-y-3">
          <p className="text-sm text-[#cbd5e1] italic leading-relaxed">
            &ldquo;GitPost AI saved me 3 hours a week. My LinkedIn engagement
            went up 4× in the first month — and I didn&rsquo;t change a
            thing.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
              AK
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Alex Kim</p>
              <p className="text-xs text-[#64748b]">Senior Engineer · Vercel</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Right panel (form) ── */}
      <main className="flex-1 flex items-center justify-center relative z-10 p-6 lg:p-12">
        {children}
      </main>
    </div>
  );
}
