"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      {/* Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-indigo-500/20 rounded-full mb-8">
          <Sparkles size={16} className="text-indigo-400" />
          <span className="text-sm font-medium text-slate-300">
            AI-Powered Content Generation
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Turn Your
          <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            GitHub Story
          </span>
          Into Content
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Automatically generate compelling technical blog posts and LinkedIn
          updates from your GitHub commits. Keep your audience engaged with your
          development journey using AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/sign-up"
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40"
          >
            Start Free Trial
            <ArrowRight size={20} />
          </Link>
          <Link
            href="#features"
            className="px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-900/50 transition-colors"
          >
            Learn More
          </Link>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-slate-700/50">
          <div>
            <p className="text-slate-400 text-sm">Trusted by developers from</p>
            <p className="text-white font-semibold">Top Tech Companies</p>
          </div>
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold"
              >
                {i}
              </div>
            ))}
            <span className="text-slate-400 text-sm">+ 1000s joined</span>
          </div>
        </div>
      </div>
    </section>
  );
};
