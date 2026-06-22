'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Check, Tag } from 'lucide-react';
import { BlogPost } from '@/utils/blogs';
import { playClickSound } from '@/utils/sound';

interface BlogDetailClientProps {
  blog: BlogPost;
  relatedBlogs: BlogPost[];
}

export default function BlogDetailClient({ blog, relatedBlogs }: BlogDetailClientProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window === 'undefined') return;
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    playClickSound();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-white/30 font-sans">
      
      {/* Cover Image Header */}
      <div className="relative w-full h-[40vh] md:h-[50vh] bg-neutral-900 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={blog.coverImage} 
          alt={blog.title} 
          className="w-full h-full object-cover"
        />
        {/* Ambient Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#121212]" />
        
        {/* Back navigation over image */}
        <div className="absolute top-8 left-8 z-30">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-4 py-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white transition-all backdrop-blur-md group"
            onClick={playClickSound}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Writings
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 pb-24 relative -mt-20 md:-mt-32 z-10">
        
        <motion.article 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-12 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Category Badging */}
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-300 bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-full">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-brand font-extrabold tracking-tight text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8 text-neutral-400">
            <div className="flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-2 text-neutral-500" />
              <span>{blog.date}</span>
              <span className="mx-3 w-1 h-1 rounded-full bg-neutral-700" />
              <Clock className="w-4 h-4 mr-2 text-neutral-500" />
              <span>{blog.readTime}</span>
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="inline-flex items-center text-xs font-semibold px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 mr-1.5 text-green-400" />
                  Link Copied!
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 mr-1.5" />
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
                className="text-xs font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-neutral-400 hover:text-white transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

        </motion.article>

        {/* Related Blogs Section */}
        {relatedBlogs.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-brand font-bold text-white mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((relBlog) => (
                <Link 
                  key={relBlog.slug}
                  href={`/blog/${relBlog.slug}`}
                  className="group flex flex-col h-full rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                  onClick={playClickSound}
                >
                  <div className="relative aspect-video overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={relBlog.coverImage} 
                      alt={relBlog.title} 
                      className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                        {relBlog.category}
                      </span>
                      <h4 className="text-lg font-bold text-white mb-2 leading-snug line-clamp-2 group-hover:text-neutral-200 transition-colors">
                        {relBlog.title}
                      </h4>
                    </div>
                    <div className="flex items-center text-xs text-neutral-500 mt-4 pt-4 border-t border-white/5">
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
