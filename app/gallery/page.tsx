'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// INSTRUCTIONS FOR UPDATING PHOTOS:
// 1. Create a "gallery" folder inside the "public" folder of your project (e.g., public/gallery/)
// 2. Add your images there (e.g., my-photo.jpg)
// 3. Update the 'src' in the array below to point to '/gallery/my-photo.jpg'
const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800', alt: 'Gallery Image 1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800', alt: 'Gallery Image 2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800', alt: 'Gallery Image 3' },
  { id: 4, src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800', alt: 'Gallery Image 4' },
  { id: 5, src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800', alt: 'Gallery Image 5' },
  { id: 6, src: 'https://images.unsplash.com/photo-1607799279861-4dddf96da5e4?auto=format&fit=crop&q=80&w=800', alt: 'Gallery Image 6' },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-white/30 font-sans">
      <div className="max-w-7xl mx-auto px-8 py-16 md:py-24">
        
        {/* Header */}
        <div className="mb-16">
          <Link 
            href="/" 
            className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-brand font-extrabold tracking-tight mb-4">
            Gallery.
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            A visual collection of moments, workspace setups, and behind-the-scenes.
          </p>
        </div>

        {/* Gallery Grid - Masonry style approximation using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="break-inside-avoid"
            >
              <div className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </main>
  );
}
