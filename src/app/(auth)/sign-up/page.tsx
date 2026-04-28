"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  EyeOff,
  Github,
  Loader2,
  Mail,
  Lock,
  User,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ─── password strength helper ─── */
function getStrength(pw: string): { score: number; label: string; color: string } {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  const levels = [
    { label: "Too short", color: "#ef4444" },
    { label: "Weak", color: "#f59e0b" },
    { label: "Fair", color: "#eab308" },
    { label: "Good", color: "#22c55e" },
    { label: "Strong", color: "#06b6d4" },
  ];
  return { score, ...levels[score] };
}

const passwordRules = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /[0-9]/.test(v) },
  { label: "One special character", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
];

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const strength = useMemo(() => getStrength(form.password), [form.password]);
  const passwordsMatch = form.confirm.length > 0 && form.password === form.confirm;
  const passwordsMismatch = form.confirm.length > 0 && form.password !== form.confirm;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (strength.score < 2) {
      setError("Please choose a stronger password.");
      return;
    }
    setLoading(true);
    // TODO: wire up registration API / next-auth
    await new Promise((r) => setTimeout(r, 2000)); // demo delay
    setLoading(false);
    setSuccess(true);
  };

  const handleGithub = async () => {
    setGithubLoading(true);
    // TODO: wire up next-auth signIn("github")
    await new Promise((r) => setTimeout(r, 1500));
    setGithubLoading(false);
  };

  /* ── Success screen ── */
  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md"
      >
        <div className="rounded-2xl border border-[#334155]/60 bg-[#1e293b]/70 backdrop-blur-xl shadow-2xl shadow-black/40 p-10 flex flex-col items-center text-center space-y-5">
          <div className="size-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
            <CheckCircle2 className="size-8 text-green-400" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Account created!</h2>
            <p className="text-sm text-[#94a3b8]">
              We&rsquo;ve sent a verification email to{" "}
              <span className="text-indigo-400 font-medium">{form.email}</span>.
              Check your inbox to activate your account.
            </p>
          </div>
          <Link
            href="/sign-in"
            className={cn(
              "inline-flex items-center gap-2 h-11 px-6 rounded-xl",
              "bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold",
              "transition-all duration-200 shadow-lg shadow-indigo-500/25"
            )}
          >
            Go to Sign In <ArrowRight className="size-4" />
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-md"
    >
      {/* Card */}
      <div className="rounded-2xl border border-[#334155]/60 bg-[#1e293b]/70 backdrop-blur-xl shadow-2xl shadow-black/40 p-8 space-y-6">

        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="space-y-1.5">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Create your account
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Start automating your developer brand — free forever on the Starter plan.
          </p>
        </motion.div>

        {/* GitHub OAuth */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="show">
          <button
            id="github-signup-btn"
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
            {githubLoading ? "Connecting to GitHub…" : "Sign up with GitHub"}
          </button>
        </motion.div>

        {/* Divider */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show" className="flex items-center gap-3">
          <div className="flex-1 h-px bg-[#334155]" />
          <span className="text-xs text-[#475569] font-medium">or register with email</span>
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
          <AnimatePresence>
            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm overflow-hidden"
              >
                <AlertCircle className="size-4 shrink-0" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="signup-name" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wide">
              Full name
            </label>
            <div className="relative group">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#475569] group-focus-within:text-indigo-400 transition-colors duration-200" />
              <input
                id="signup-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Jane Doe"
                value={form.name}
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

          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="signup-email" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wide">
              Email address
            </label>
            <div className="relative group">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#475569] group-focus-within:text-indigo-400 transition-colors duration-200" />
              <input
                id="signup-email"
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
            <label htmlFor="signup-password" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wide">
              Password
            </label>
            <div className="relative group">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#475569] group-focus-within:text-indigo-400 transition-colors duration-200" />
              <input
                id="signup-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
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

            {/* Strength meter */}
            <AnimatePresence>
              {form.password.length > 0 && (
                <motion.div
                  key="strength"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2 overflow-hidden pt-1"
                >
                  {/* Bar segments */}
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex-1 h-1 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: i < strength.score ? strength.color : "#1e293b",
                          boxShadow: i < strength.score ? `0 0 6px ${strength.color}60` : "none",
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-medium transition-colors duration-200" style={{ color: strength.color }}>
                    {strength.label}
                  </p>

                  {/* Rule checklist */}
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                    {passwordRules.map((rule) => {
                      const passed = rule.test(form.password);
                      return (
                        <li key={rule.label} className="flex items-center gap-1.5 text-xs">
                          <Check
                            className={cn(
                              "size-3 shrink-0 transition-colors duration-200",
                              passed ? "text-green-400" : "text-[#334155]"
                            )}
                          />
                          <span className={passed ? "text-[#94a3b8]" : "text-[#475569]"}>
                            {rule.label}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label htmlFor="signup-confirm" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wide">
              Confirm password
            </label>
            <div className="relative group">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#475569] group-focus-within:text-indigo-400 transition-colors duration-200" />
              <input
                id="signup-confirm"
                name="confirm"
                type={showConfirm ? "text" : "password"}
                autoComplete="new-password"
                placeholder="••••••••"
                value={form.confirm}
                onChange={handleChange}
                disabled={loading || githubLoading}
                className={cn(
                  "w-full h-11 pl-10 pr-11 rounded-xl text-sm",
                  "bg-[#0f172a] border text-white placeholder:text-[#475569]",
                  "focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
                  "hover:border-[#475569] transition-all duration-200",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  passwordsMatch
                    ? "border-green-500/60 focus:border-green-500/70"
                    : passwordsMismatch
                    ? "border-red-500/60 focus:border-red-500/70"
                    : "border-[#334155] focus:border-indigo-500/70"
                )}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#475569] hover:text-[#94a3b8] transition-colors duration-150"
              >
                {showConfirm ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
            <AnimatePresence>
              {passwordsMismatch && (
                <motion.p
                  key="mismatch"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-xs text-red-400 flex items-center gap-1"
                >
                  <AlertCircle className="size-3" /> Passwords don&rsquo;t match
                </motion.p>
              )}
              {passwordsMatch && (
                <motion.p
                  key="match"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-xs text-green-400 flex items-center gap-1"
                >
                  <CheckCircle2 className="size-3" /> Passwords match
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Submit */}
          <button
            id="signup-submit-btn"
            type="submit"
            disabled={loading || githubLoading}
            className={cn(
              "w-full h-11 rounded-xl font-semibold text-sm text-white",
              "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500",
              "flex items-center justify-center gap-2",
              "transition-all duration-300 shadow-lg shadow-indigo-500/25",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e293b]",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Creating account…
              </>
            ) : (
              <>
                Create free account
                <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </motion.form>

        {/* Footer link */}
        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="show" className="text-center text-sm text-[#64748b]">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors duration-150"
          >
            Sign in
          </Link>
        </motion.p>
      </div>

      {/* Bottom note */}
      <motion.p custom={5} variants={fadeUp} initial="hidden" animate="show" className="mt-5 text-center text-xs text-[#475569] leading-relaxed">
        By signing up, you agree to our{" "}
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
