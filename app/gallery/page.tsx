'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';

// INSTRUCTIONS FOR UPDATING PHOTOS:
// 1. Create a "gallery" folder inside the "public" folder of your project (e.g., public/gallery/)
// 2. Add your images there (e.g., my-photo.jpg)
// 3. Update the 'src' in the array below to point to '/gallery/my-photo.jpg'
const photos = [
  { id: 1, src: '/gallery/InShot_20250914_024957240.jpg', alt: 'Gallery Image 1' },
  { id: 2, src: '/gallery/InShot_20250914_025726314.jpg', alt: 'Gallery Image 2' },
  { id: 3, src: '/gallery/InShot_20250914_035247627.jpg', alt: 'Gallery Image 3' },
  { id: 4, src: '/gallery/InShot_20250914_035402871.jpg', alt: 'Gallery Image 4' },
  { id: 5, src: '/gallery/InShot_20250914_200103703.jpg', alt: 'Gallery Image 5' },
  { id: 6, src: '/gallery/InShot_20250914_200214719.jpg', alt: 'Gallery Image 6' },
  { id: 7, src: '/gallery/InShot_20250914_200456125.jpg', alt: 'Gallery Image 7' },
  { id: 8, src: '/gallery/InShot_20250914_200636977.jpg', alt: 'Gallery Image 8' },
  { id: 9, src: '/gallery/InShot_20250914_200749626.jpg', alt: 'Gallery Image 9' },
  { id: 10, src: '/gallery/InShot_20250914_211934135.jpg', alt: 'Gallery Image 10' },
  { id: 11, src: '/gallery/InShot_20250914_214447338.jpg', alt: 'Gallery Image 11' },
  { id: 12, src: '/gallery/InShot_20250918_213123555.jpg', alt: 'Gallery Image 12' },
  { id: 13, src: '/gallery/InShot_20250918_215909513.jpg', alt: 'Gallery Image 13' },
  { id: 14, src: '/gallery/InShot_20250918_233211318.jpg', alt: 'Gallery Image 14' },
  { id: 15, src: '/gallery/InShot_20250919_054029027.jpg', alt: 'Gallery Image 15' },
  { id: 16, src: '/gallery/InShot_20250919_060435468.jpg', alt: 'Gallery Image 16' },
  { id: 17, src: '/gallery/InShot_20250919_212216210.jpg', alt: 'Gallery Image 17' },
  { id: 18, src: '/gallery/InShot_20250919_212323666.jpg', alt: 'Gallery Image 18' },
  { id: 19, src: '/gallery/InShot_20250920_180102882.jpg', alt: 'Gallery Image 19' },
  { id: 20, src: '/gallery/InShot_20250920_212020571.jpg', alt: 'Gallery Image 20' },
  { id: 21, src: '/gallery/InShot_20250920_233144326.jpg', alt: 'Gallery Image 21' },
  { id: 22, src: '/gallery/InShot_20250922_151519056.jpg', alt: 'Gallery Image 22' },
  { id: 23, src: '/gallery/InShot_20250922_153553395.jpg', alt: 'Gallery Image 23' },
  { id: 24, src: '/gallery/InShot_20250922_201702211.jpg', alt: 'Gallery Image 24' },
  { id: 25, src: '/gallery/InShot_20250922_235558945.jpg', alt: 'Gallery Image 25' },
  { id: 26, src: '/gallery/InShot_20250924_202752268.jpg', alt: 'Gallery Image 26' },
  { id: 27, src: '/gallery/InShot_20250925_194732764.jpg', alt: 'Gallery Image 27' },
  { id: 28, src: '/gallery/InShot_20250926_010257740.jpg', alt: 'Gallery Image 28' },
  { id: 29, src: '/gallery/InShot_20250926_193044108.jpg', alt: 'Gallery Image 29' },
  { id: 30, src: '/gallery/InShot_20250927_215525527.jpg', alt: 'Gallery Image 30' },
  { id: 31, src: '/gallery/InShot_20250928_215120115.jpg', alt: 'Gallery Image 31' },
  { id: 32, src: '/gallery/InShot_20250929_085602584.jpg', alt: 'Gallery Image 32' },
  { id: 33, src: '/gallery/InShot_20250929_230556921.jpg', alt: 'Gallery Image 33' },
  { id: 34, src: '/gallery/InShot_20251001_121032007.jpg', alt: 'Gallery Image 34' },
  { id: 35, src: '/gallery/InShot_20251002_212035130.jpg', alt: 'Gallery Image 35' },
  { id: 36, src: '/gallery/InShot_20251003_192656233.jpg', alt: 'Gallery Image 36' },
  { id: 37, src: '/gallery/InShot_20251003_202315181.jpg', alt: 'Gallery Image 37' },
  { id: 38, src: '/gallery/InShot_20251004_191017470.jpg', alt: 'Gallery Image 38' },
  { id: 39, src: '/gallery/InShot_20251005_185715263.jpg', alt: 'Gallery Image 39' },
  { id: 40, src: '/gallery/InShot_20251006_211218521.jpg', alt: 'Gallery Image 40' },
  { id: 41, src: '/gallery/InShot_20251008_221440460.jpg', alt: 'Gallery Image 41' },
  { id: 42, src: '/gallery/InShot_20251012_195953330.jpg', alt: 'Gallery Image 42' },
  { id: 43, src: '/gallery/InShot_20251015_083318199.jpg', alt: 'Gallery Image 43' },
  { id: 44, src: '/gallery/InShot_20251017_075629606.jpg', alt: 'Gallery Image 44' },
  { id: 45, src: '/gallery/InShot_20251018_085114767.jpg', alt: 'Gallery Image 45' },
  { id: 46, src: '/gallery/InShot_20251020_173613752.jpg', alt: 'Gallery Image 46' },
  { id: 47, src: '/gallery/InShot_20251022_120038237.jpg', alt: 'Gallery Image 47' },
  { id: 48, src: '/gallery/InShot_20251023_130006970.jpg', alt: 'Gallery Image 48' },
  { id: 49, src: '/gallery/InShot_20251024_170745935.jpg', alt: 'Gallery Image 49' },
  { id: 50, src: '/gallery/InShot_20251028_185653890.jpg', alt: 'Gallery Image 50' },
  { id: 51, src: '/gallery/InShot_20251031_234337630.jpg', alt: 'Gallery Image 51' },
  { id: 52, src: '/gallery/InShot_20251101_103802585.jpg', alt: 'Gallery Image 52' },
  { id: 53, src: '/gallery/InShot_20251104_095117196.jpg', alt: 'Gallery Image 53' },
  { id: 54, src: '/gallery/InShot_20251106_004224749.jpg', alt: 'Gallery Image 54' },
  { id: 55, src: '/gallery/InShot_20251110_220258257.jpg', alt: 'Gallery Image 55' },
  { id: 56, src: '/gallery/InShot_20251112_201554289.jpg', alt: 'Gallery Image 56' },
  { id: 57, src: '/gallery/InShot_20251126_092915789.jpg', alt: 'Gallery Image 57' },
  { id: 58, src: '/gallery/InShot_20251126_194826424.jpg', alt: 'Gallery Image 58' },
  { id: 59, src: '/gallery/InShot_20251210_190151662.jpg', alt: 'Gallery Image 59' },
  { id: 60, src: '/gallery/InShot_20251212_005857733.jpg', alt: 'Gallery Image 60' },
  { id: 61, src: '/gallery/InShot_20251212_095618451.jpg', alt: 'Gallery Image 61' },
  { id: 62, src: '/gallery/InShot_20251212_202317840.jpg', alt: 'Gallery Image 62' },
  { id: 63, src: '/gallery/InShot_20251220_181325756.jpg', alt: 'Gallery Image 63' },
  { id: 64, src: '/gallery/InShot_20251227_154809552.jpg', alt: 'Gallery Image 64' },
  { id: 65, src: '/gallery/InShot_20251228_212117929.jpg', alt: 'Gallery Image 65' },
  { id: 66, src: '/gallery/InShot_20260128_001636755.jpg', alt: 'Gallery Image 66' },
  { id: 67, src: '/gallery/InShot_20260414_160159186.jpg', alt: 'Gallery Image 67' },
  { id: 68, src: '/gallery/InShot_20260416_195033189.jpg', alt: 'Gallery Image 68' }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
              className="break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage(photo.src)}
              layoutId={`photo-${photo.src}`}
            >
              <div className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                   <p className="text-white font-medium tracking-wide drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">View Image</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12 backdrop-blur-md cursor-zoom-out"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              layoutId={`photo-${selectedImage}`}
              src={selectedImage}
              alt="Expanded Gallery Image"
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
