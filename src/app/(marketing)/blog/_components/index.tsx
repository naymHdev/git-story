"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, ChevronRight, ArrowRight } from "lucide-react";

// Sample blog data
const FEATURED_POST = {
  id: "1",
  title: "Introducing GitPost AI: The Future of Developer Portfolios",
  excerpt:
    "Discover how GitPost AI leverages artificial intelligence to automatically generate stunning portfolios from your GitHub repositories and commit history.",
  date: "Apr 28, 2026",
  readTime: "5 min read",
  category: "Product Updates",
  imageUrl:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
  slug: "introducing-gitpost-ai",
};

const BLOG_POSTS = [
  {
    id: "2",
    title: "10 Secrets to Writing Better Git Commit Messages",
    excerpt:
      "A clean commit history is the hallmark of a professional developer. Learn the top 10 secrets to writing commit messages that your team will love.",
    date: "Apr 25, 2026",
    readTime: "4 min read",
    category: "Best Practices",
    imageUrl:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=2088",
    slug: "10-secrets-to-writing-better-git-commit-messages",
  },
  {
    id: "3",
    title: "How to Showcase Your Open Source Contributions",
    excerpt:
      "Contributing to open source is great, but getting recognized for it is harder. Here is a guide on how to effectively showcase your open source work.",
    date: "Apr 20, 2026",
    readTime: "6 min read",
    category: "Career",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
    slug: "how-to-showcase-your-open-source-contributions",
  },
  {
    id: "4",
    title: "The Rise of AI-Assisted Coding Tools",
    excerpt:
      "From GitHub Copilot to ChatGPT, AI is changing how we write code. Explore the landscape of AI coding assistants and how to leverage them.",
    date: "Apr 15, 2026",
    readTime: "8 min read",
    category: "Technology",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
    slug: "the-rise-of-ai-assisted-coding-tools",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
            Our Blog
          </h1>
          <p className="text-lg md:text-xl text-neutral-400">
            Insights, tutorials, and product updates from the GitPost AI team.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-8 text-neutral-200 border-b border-neutral-800 pb-4">
            Featured Article
          </h2>
          <Link href={`/blog/${FEATURED_POST.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl hover:shadow-blue-900/20">
              <div className="h-64 lg:h-full w-full relative overflow-hidden">
                <img
                  src={FEATURED_POST.imageUrl}
                  alt={FEATURED_POST.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                  {FEATURED_POST.category}
                </span>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {FEATURED_POST.title}
                </h3>
                <p className="text-neutral-400 mb-8 text-lg leading-relaxed">
                  {FEATURED_POST.excerpt}
                </p>
                <div className="flex items-center text-neutral-500 text-sm space-x-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {FEATURED_POST.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {FEATURED_POST.readTime}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Posts Grid */}
        <div>
          <div className="flex justify-between items-end mb-8 border-b border-neutral-800 pb-4">
            <h2 className="text-2xl font-bold text-neutral-200">
              Recent Articles
            </h2>
            <Link
              href="/blog/archive"
              className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium transition-colors"
            >
              View all <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 transition-all duration-300 hover:border-neutral-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/10"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="py-1 px-3 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-400 mb-6 text-sm line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-neutral-500 text-xs space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <div className="text-emerald-500 group-hover:translate-x-1 transition-transform">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-32 bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-blue-500/5 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-neutral-400 mb-8">
              Get the latest articles, product updates, and developer tips
              delivered straight to your inbox once a month.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-white text-black font-semibold rounded-lg px-6 py-3 hover:bg-neutral-200 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
