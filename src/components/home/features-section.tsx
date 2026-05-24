"use client";

import { Zap, Github, Sparkles, Clock, Share2, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Github,
    title: "Git-Powered Insights",
    description:
      "Connect your GitHub repos and automatically track your development milestones and achievements.",
  },
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description:
      "Let AI transform your commits into engaging technical stories that resonate with your audience.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description:
      "No more hours spent writing. Focus on building while GitPost handles your technical storytelling.",
  },
  {
    icon: Share2,
    title: "Multi-Platform Publishing",
    description:
      "Publish generated content directly to your blog, LinkedIn, Twitter, and more with one click.",
  },
  {
    icon: TrendingUp,
    title: "Audience Growth",
    description:
      "Build your personal brand by consistently sharing your journey and insights with your network.",
  },
  {
    icon: Zap,
    title: "Smart Scheduling",
    description:
      "Schedule posts for optimal engagement times and maintain consistent presence without effort.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Powerful features designed to help you share your development
            journey effortlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10 group"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  <Icon size={24} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
