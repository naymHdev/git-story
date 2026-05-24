"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Connect GitHub",
    description:
      "Link your GitHub account securely. We read your repositories and commits to generate insights.",
  },
  {
    number: "02",
    title: "AI Generation",
    description:
      "Our AI analyzes your commits and generates compelling blog posts tailored to your work.",
  },
  {
    number: "03",
    title: "Review & Customize",
    description:
      "Edit generated content, adjust tone, and add your personal touch before publishing.",
  },
  {
    number: "04",
    title: "Publish & Share",
    description:
      "Post to multiple platforms simultaneously. Track engagement and grow your audience.",
  },
];

export const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Workflow
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            From GitHub commits to published posts in minutes. Here's how it
            works.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-[60%] w-[calc(100%-60%+1.5rem)] h-px bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
              )}

              <div className="relative z-10">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 mb-6 font-bold text-white text-xl">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20"
          >
            <CheckCircle size={20} />
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};
