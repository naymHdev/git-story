"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Github,
  Loader2,
  Mail,
  Lock,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── tiny animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    // TODO: wire up next-auth signIn("credentials", ...)
    await new Promise((r) => setTimeout(r, 1800)); // demo delay
    setLoading(false);
  };

  const handleGithub = async () => {
    setGithubLoading(true);
    // TODO: wire up next-auth signIn("github")
    await new Promise((r) => setTimeout(r, 1500));
    setGithubLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-md"
    >
      {/* Card */}
      <div className="rounded-2xl border border-[#334155]/60 bg-[#1e293b]/70 backdrop-blur-xl shadow-2xl shadow-black/40 p-8 space-y-7">

        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="space-y-1.5">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Welcome back
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Sign in to continue automating your GitHub → LinkedIn workflow.
          </p>
        </motion.div>

        {/* GitHub OAuth */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="show">
          <button
            id="github-signin-btn"
            onClick={handleGithub}
            disabled={githubLoading || loading}
            className={cn(
              "w-full flex items-center justify-center gap-3 h-11 px-4",
              "rounded-xl border border-[#334155] bg-[#0f172a] text-white text-sm font-medium",
              "hover:border-indigo-500/60 hover:bg-[#1e293b] transition-all duration-200",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
            )}
          >
            {githubLoading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Github className="size-4" />
            )}
            {githubLoading ? "Connecting to GitHub…" : "Continue with GitHub"}
          </button>
        </motion.div>

        {/* Divider */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show" className="flex items-center gap-3">
          <div className="flex-1 h-px bg-[#334155]" />
          <span className="text-xs text-[#475569] font-medium">or sign in with email</span>
          <div className="flex-1 h-px bg-[#334155]" />
        </motion.div>

        {/* Form */}
        <motion.form
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          onSubmit={handleSubmit}
          className="space-y-4"
          noValidate
        >
          {/* Error banner */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
            >
              <AlertCircle className="size-4 shrink-0" />
              {error}
            </motion.div>
          )}

          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="signin-email" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wide">
              Email address
            </label>
            <div className="relative group">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#475569] group-focus-within:text-indigo-400 transition-colors duration-200" />
              <input
                id="signin-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                disabled={loading || githubLoading}
                className={cn(
                  "w-full h-11 pl-10 pr-4 rounded-xl text-sm",
                  "bg-[#0f172a] border border-[#334155] text-white placeholder:text-[#475569]",
                  "focus:outline-none focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/20",
                  "hover:border-[#475569] transition-all duration-200",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="signin-password" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wide">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors duration-150"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative group">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#475569] group-focus-within:text-indigo-400 transition-colors duration-200" />
              <input
                id="signin-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                disabled={loading || githubLoading}
                className={cn(
                  "w-full h-11 pl-10 pr-11 rounded-xl text-sm",
                  "bg-[#0f172a] border border-[#334155] text-white placeholder:text-[#475569]",
                  "focus:outline-none focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/20",
                  "hover:border-[#475569] transition-all duration-200",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#475569] hover:text-[#94a3b8] transition-colors duration-150"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            id="signin-submit-btn"
            type="submit"
            disabled={loading || githubLoading}
            className={cn(
              "w-full h-11 rounded-xl font-semibold text-sm text-white",
              "bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700",
              "flex items-center justify-center gap-2",
              "transition-all duration-200 shadow-lg shadow-indigo-500/25",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e293b]",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Signing in…
              </>
            ) : (
              <>
                Sign in
                <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </motion.form>

        {/* Footer link */}
        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="show" className="text-center text-sm text-[#64748b]">
          Don&rsquo;t have an account?{" "}
          <Link
            href="/sign-up"
            className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors duration-150"
          >
            Create one free
          </Link>
        </motion.p>
      </div>

      {/* Bottom note */}
      <motion.p custom={5} variants={fadeUp} initial="hidden" animate="show" className="mt-5 text-center text-xs text-[#475569] leading-relaxed">
        By continuing, you agree to our{" "}
        <Link href="/terms" className="underline underline-offset-2 hover:text-[#94a3b8] transition-colors">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-[#94a3b8] transition-colors">
          Privacy Policy
        </Link>
        .
      </motion.p>
    </motion.div>
  );
}
