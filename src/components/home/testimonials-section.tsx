"use client";

import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Chen",
    role: "Full-Stack Engineer",
    company: "Tech Startup",
    content:
      "GitPost AI saved me hours every week. Now I can share my projects with the world without the writing overhead.",
    rating: 5,
  },
  {
    name: "Sarah Martinez",
    role: "Product Manager",
    company: "SaaS Company",
    content:
      "The quality of generated content is impressive. It captures the essence of our work perfectly.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "DevOps Engineer",
    company: "Enterprise",
    content:
      "Finally, a tool that understands technical content. Our team uses it daily to stay visible on LinkedIn.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by Developers
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Join hundreds of developers who are building their personal brand
            with GitPost AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="border-t border-slate-700/50 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
