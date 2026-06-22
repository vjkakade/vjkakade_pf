'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogs } from '@/utils/blogs';
import { playClickSound } from '@/utils/sound';

export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories list
  const categories = useMemo(() => {
    const list = new Set(blogs.map(b => b.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Featured blog (latest one)
  const featuredBlog = useMemo(() => {
    return blogs[0] || null;
  }, []);

  // Remaining blogs after excluding featured if viewing "All"
  const gridBlogs = useMemo(() => {
    if (selectedCategory !== 'All' || searchQuery !== '') {
      return filteredBlogs;
    }
    return filteredBlogs.slice(1);
  }, [filteredBlogs, selectedCategory, searchQuery]);

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as const
      } 
    }
  };

  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-white/30 font-sans relative overflow-hidden">
      
      {/* Background Radial Glow Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[40vh] left-[50%] -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-24 relative z-10">
        
        {/* Header Back Navigation */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-8 group"
            onClick={playClickSound}
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-brand font-extrabold tracking-tight mb-4 bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                Writings.
              </h1>
              <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                Insights, tutorials, and latest trends on AI, Cloud Native architectures, and DevOps automation.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Categories Bar */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-16 pb-8 border-b border-white/5">
          {/* Categories */}
          <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  playClickSound();
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.25)] border border-white'
                    : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-4 h-4 text-neutral-500" />
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 text-white rounded-full py-3 pl-11 pr-4 text-sm focus:outline-none transition-all placeholder:text-neutral-500 focus:bg-white/[0.08] focus:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            />
          </div>
        </div>

        {/* Featured Post (Only when viewing "All" and no search query) */}
        {featuredBlog && selectedCategory === 'All' && searchQuery === '' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <Link 
              href={`/blog/${featuredBlog.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] to-transparent border border-white/10 hover:border-white/25 hover:bg-white/[0.09] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] block relative overflow-hidden"
              onClick={playClickSound}
            >
              {/* Image Section */}
              <div className="lg:col-span-7 overflow-hidden rounded-2xl relative aspect-video lg:aspect-auto min-h-[300px] md:min-h-[400px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={featuredBlog.coverImage} 
                  alt={featuredBlog.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Text Section */}
              <div className="lg:col-span-5 flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-300 bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-full">
                      {featuredBlog.category}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                      Featured Post
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-brand font-bold text-white mb-4 leading-tight group-hover:text-neutral-200 transition-colors">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-neutral-400 text-lg mb-6 leading-relaxed line-clamp-4">
                    {featuredBlog.excerpt}
                  </p>
                </div>
                <div>
                  <div className="flex items-center text-sm text-neutral-500 font-medium mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{featuredBlog.date}</span>
                    <span className="mx-3 w-1.5 h-1.5 rounded-full bg-neutral-700" />
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{featuredBlog.readTime}</span>
                  </div>
                  <span className="inline-flex items-center text-white font-medium group-hover:text-purple-400 transition-colors">
                    Read Article 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Filtered Grid */}
        {filteredBlogs.length > 0 ? (
          <div>
            {/* Grid Header */}
            {gridBlogs.length > 0 && (selectedCategory !== 'All' || searchQuery !== '') && (
              <h3 className="text-xl font-brand font-semibold text-neutral-400 mb-8">
                Search Results ({filteredBlogs.length})
              </h3>
            )}
            {gridBlogs.length > 0 && selectedCategory === 'All' && searchQuery === '' && (
              <h3 className="text-2xl font-brand font-bold text-white mb-8">
                More Articles
              </h3>
            )}
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {gridBlogs.map((blog) => (
                <motion.div
                  key={blog.slug}
                  variants={cardVariants}
                  className="h-full"
                >
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="group flex flex-col h-full rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                    onClick={playClickSound}
                  >
                    {/* Card Cover Image */}
                    <div className="relative aspect-video overflow-hidden bg-neutral-900 border-b border-white/5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={blog.coverImage} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    </div>
                    {/* Card Content */}
                    <div className="flex flex-col justify-between p-6 flex-grow">
                      <div>
                        <div className="mb-4">
                          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                            {blog.category}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 leading-snug line-clamp-2 group-hover:text-purple-400 transition-colors">
                          {blog.title}
                        </h4>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
                          {blog.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center text-xs text-neutral-500 pt-4 border-t border-white/5 mt-auto">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        <span>{blog.date}</span>
                        <span className="mx-2.5 w-1 h-1 rounded-full bg-neutral-800" />
                        <Clock className="w-3.5 h-3.5 mr-1.5" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-24 rounded-3xl bg-white/5 border border-white/10">
            <p className="text-neutral-500 text-lg">No articles found matching your criteria.</p>
            <button 
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); playClickSound(); }}
              className="mt-4 px-6 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
