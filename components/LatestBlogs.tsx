'use client';

import React from 'react';
import { BookOpen, ExternalLink, ArrowRight } from 'lucide-react';

// You can update these placeholders with your actual KnowledgeHut articles!
const placeholderBlogs = [
  {
    title: 'Architecting Scalable Multi-Cloud Infrastructure with Terraform',
    date: 'Dec 12, 2025',
    readTime: '6 min read',
    url: 'https://www.knowledgehut.com/blog/author/vijay-kakade',
    category: 'Cloud Engineering'
  },
  {
    title: 'Deploying Generative AI Models with Azure and GitHub Copilot',
    date: 'Nov 24, 2025',
    readTime: '8 min read',
    url: 'https://www.knowledgehut.com/blog/author/vijay-kakade',
    category: 'AI & Data'
  },
  {
    title: 'Building CI/CD Pipelines for Zero-Downtime Kubernetes Deployments',
    date: 'Oct 05, 2025',
    readTime: '5 min read',
    url: 'https://www.knowledgehut.com/blog/author/vijay-kakade',
    category: 'DevOps'
  }
];

export default function LatestBlogs() {
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
          <a 
            href="https://www.knowledgehut.com/blog/author/vijay-kakade" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all w-max font-medium"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderBlogs.map((blog, idx) => (
            <a 
              key={idx}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-8 min-h-[300px] rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                   <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{blog.category}</span>
                   <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 leading-snug transition-colors line-clamp-3">
                  {blog.title}
                </h3>
              </div>
              <div className="flex items-center text-sm text-neutral-400 font-medium pt-6 border-t border-white/10 mt-6">
                <span>{blog.date}</span>
                <span className="mx-3 w-1 h-1 rounded-full bg-neutral-600" />
                <span>{blog.readTime}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
