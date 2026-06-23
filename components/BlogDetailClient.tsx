'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Check, Tag } from 'lucide-react';
import { BlogPost } from '@/utils/blogs';
import { playClickSound } from '@/utils/sound';

interface BlogDetailClientProps {
  blog: BlogPost;
  relatedBlogs: BlogPost[];
}

export default function BlogDetailClient({ blog, relatedBlogs }: BlogDetailClientProps) {
  const [copied, setCopied] = useState(false);

  // Dynamic Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleShare = () => {
    if (typeof window === 'undefined') return;
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    playClickSound();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-white/30 font-sans relative overflow-hidden">
      
      {/* Scroll Progress Indicator with glow */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 origin-left z-[100] shadow-[0_1px_10px_rgba(168,85,247,0.5)]"
        style={{ scaleX }}
      />

      {/* Ambient Backdrops */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[30vh] right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none z-0" />
      
      {/* Cyber Grid Pattern Background Overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0 pointer-events-none" />

      {/* Cover Image Header */}
      <div className="relative w-full h-[45vh] md:h-[55vh] bg-neutral-900 overflow-hidden z-10 border-b border-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={blog.coverImage} 
          alt={blog.title} 
          className="w-full h-full object-cover transform scale-102 filter brightness-[0.85]"
        />
        {/* Ambient Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#121212]" />
        
        {/* Back navigation over image */}
        <div className="absolute top-8 left-8 z-30">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-4.5 py-2.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white transition-all backdrop-blur-md group shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            onClick={playClickSound}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Writings
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 pb-24 relative -mt-36 md:-mt-44 z-20">
        
        <motion.article 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.01] border border-white/10 p-6 sm:p-10 md:p-14 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden"
        >
          {/* Accent border highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Category Badging */}
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-300 bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-brand font-extrabold tracking-tight text-white mb-6 leading-tight bg-gradient-to-b from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8 text-neutral-400">
            <div className="flex items-center text-sm font-medium">
              <Calendar className="w-4 h-4 mr-2 text-neutral-500" />
              <span>{blog.date}</span>
              <span className="mx-3 w-1 h-1 rounded-full bg-neutral-700" />
              <Clock className="w-4 h-4 mr-2 text-neutral-500" />
              <span>{blog.readTime}</span>
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="inline-flex items-center text-xs font-bold px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 hover:text-white transition-all cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 mr-1.5 text-green-400" />
                  Link Copied!
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 mr-1.5 text-neutral-400 group-hover:text-white" />
                  Copy Link
                </>
              )}
            </button>
          </div>

          {/* HTML Rendered Content */}
          <div 
            className="prose-content text-neutral-300 font-sans leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-3">
            <Tag className="w-4 h-4 text-neutral-500 mr-1" />
            {blog.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-neutral-400 hover:text-white transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Profile Section */}
          <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center gap-6 text-left relative z-10">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-0.5 flex-shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <div className="w-full h-full rounded-full bg-[#18181b] flex items-center justify-center font-brand font-bold text-xl text-white">
                VK
              </div>
            </div>
            <div className="flex-grow">
              <h4 className="text-xl font-brand font-bold text-white mb-2">Vijay Kakade</h4>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Cloud, AI & DevOps Engineer with 12+ years of experience building secure, scalable, and automated cloud systems. Specialized in Multi-Cloud architectures and Generative AI workflows.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/vjkakade/" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                  LinkedIn
                </a>
                <span className="text-neutral-600">•</span>
                <a href="https://github.com/vjkakade" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                  GitHub
                </a>
                <span className="text-neutral-600">•</span>
                <a href="mailto:vijaykakade@live.com" className="text-xs text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

        </motion.article>

        {/* Related Blogs Section */}
        {relatedBlogs.length > 0 && (
          <div className="mt-24 relative">
            <h3 className="text-2xl font-brand font-bold text-white mb-8 border-b border-white/5 pb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((relBlog) => (
                <Link 
                  key={relBlog.slug}
                  href={`/blog/${relBlog.slug}`}
                  className="group flex flex-col h-full rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 hover:border-purple-500/20 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(168,85,247,0.08)] backdrop-blur-md"
                  onClick={playClickSound}
                >
                  <div className="relative aspect-video overflow-hidden border-b border-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={relBlog.coverImage} 
                      alt={relBlog.title} 
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow relative">
                    <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-full bg-purple-500/0 blur-[50px] pointer-events-none group-hover:bg-purple-500/5 transition-colors duration-500" />
                    <div className="relative z-10">
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 block">
                        {relBlog.category}
                      </span>
                      <h4 className="text-lg font-bold text-white mb-2 leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">
                        {relBlog.title}
                      </h4>
                    </div>
                    <div className="flex items-center text-xs text-neutral-500 mt-4 pt-4 border-t border-white/5 relative z-10">
                      <span>{relBlog.date}</span>
                      <span className="mx-2 w-1 h-1 rounded-full bg-neutral-800" />
                      <span>{relBlog.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
