"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "Save 5+ Hours Weekly",
    description:
      "Stop spending time writing blog posts and let AI handle the heavy lifting.",
  },
  {
    title: "Consistent Content",
    description:
      "Maintain a strong online presence with regular, quality posts.",
  },
  {
    title: "Grow Your Network",
    description:
      "Engage with the community and build meaningful professional relationships.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              More than just content generation
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              GitPost AI is your partner in building a personal brand. We handle
              the technical storytelling so you can focus on what matters:
              building amazing things and connecting with your audience.
            </p>

            {/* Benefits List */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/50">
                    <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-4">
                {[
                  { label: "GitHub Commits", value: "2,847", change: "+12%" },
                  { label: "Posts Generated", value: "156", change: "+34%" },
                  { label: "Audience Reached", value: "45.2K", change: "+89%" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50"
                  >
                    <p className="text-sm text-slate-400 mb-1">{stat.label}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                      <span className="text-sm font-semibold text-emerald-400">
                        {stat.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
