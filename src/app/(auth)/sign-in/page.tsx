"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45 },
  }),
};

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);

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
      transition={{ duration: 0.4 }}
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
            onClick={handleGithub}
            disabled={githubLoading}
            className="w-full px-4 py-2.5 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            {githubLoading ? "Loading..." : "Continue with GitHub"}
          </button>
        </motion.div>

        {/* Divider */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show" className="flex items-center gap-3">
          <div className="flex-1 h-px bg-[#334155]"></div>
          <span className="text-xs text-[#64748b]">Or continue with email</span>
          <div className="flex-1 h-px bg-[#334155]"></div>
        </motion.div>

        {/* Email Form */}
        <motion.form custom={3} variants={fadeUp} initial="hidden" animate="show" className="space-y-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 rounded-lg bg-[#0f172a] border border-[#334155] text-white placeholder-[#64748b] focus:border-[#6366f1] focus:outline-none transition-colors"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2.5 rounded-lg bg-[#0f172a] border border-[#334155] text-white placeholder-[#64748b] focus:border-[#6366f1] focus:outline-none transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <button
            type="submit"
            disabled={emailLoading}
            className="w-full px-4 py-2.5 rounded-lg bg-[#6366f1] text-white font-semibold hover:bg-[#4f46e5] transition-colors disabled:opacity-50"
          >
            {emailLoading ? "Signing in..." : "Sign In"}
          </button>
        </motion.form>

        {/* Footer */}
        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="show" className="text-center text-sm text-[#64748b]">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-[#6366f1] hover:text-[#818cf8] transition-colors font-semibold">
            Sign up
          </Link>
        </motion.p>
      </div>
    </motion.div>
  );
}
