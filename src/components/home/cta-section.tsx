"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 rounded-2xl blur-3xl pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 text-center p-12 md:p-16 rounded-2xl bg-slate-900/50 border border-indigo-500/20 backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Tell Your Story?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join developers worldwide who are sharing their journey and building
            their personal brand. Start for free today. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sign-up"
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20"
            >
              Start Free Trial
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-900/50 transition-colors"
            >
              Contact Sales
            </Link>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-slate-400 mt-8">
            ✓ No credit card required • ✓ Free forever plan • ✓ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
