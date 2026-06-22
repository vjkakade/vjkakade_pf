'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react';
import { blogs } from '@/utils/blogs';
import { playClickSound } from '@/utils/sound';

export default function LatestBlogs() {
  // Show the latest 3 blogs on the homepage
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-brand font-bold text-white mb-6 tracking-tight flex items-center">
              <BookOpen className="w-10 h-10 mr-4 text-white/50" />
              Latest Writings
            </h2>
            <p className="text-neutral-400 max-w-2xl text-lg leading-relaxed">
              I frequently write about Cloud Architecture, DevOps automation, and AI integrations. Check out my latest thoughts.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all w-max font-medium"
            onClick={playClickSound}
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog) => (
            <Link 
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group flex flex-col justify-between p-8 min-h-[300px] rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              onClick={playClickSound}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    {blog.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 leading-snug transition-colors line-clamp-3 group-hover:text-neutral-200">
                  {blog.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>
              <div className="flex items-center text-xs text-neutral-500 pt-6 border-t border-white/10 mt-6 font-medium">
                <Calendar className="w-3.5 h-3.5 mr-1" />
                <span>{blog.date}</span>
                <span className="mx-2.5 w-1 h-1 rounded-full bg-neutral-600" />
                <Clock className="w-3.5 h-3.5 mr-1" />
                <span>{blog.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
