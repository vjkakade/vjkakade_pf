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
  { id: 1, src: '/gallery/1760132818570.jpg', alt: 'Gallery Image 1' },
  { id: 2, src: '/gallery/1760132937105.jpg', alt: 'Gallery Image 2' },
  { id: 3, src: '/gallery/1760133108717.jpg', alt: 'Gallery Image 3' },
  { id: 4, src: '/gallery/1760133218465.jpg', alt: 'Gallery Image 4' },
  { id: 5, src: '/gallery/1760134252069.jpg', alt: 'Gallery Image 5' },
  { id: 6, src: '/gallery/1760134340239.jpg', alt: 'Gallery Image 6' },
  { id: 7, src: '/gallery/1760134852105.jpg', alt: 'Gallery Image 7' },
  { id: 8, src: '/gallery/1760135544533.jpg', alt: 'Gallery Image 8' },
  { id: 9, src: '/gallery/1760135649708.jpg', alt: 'Gallery Image 9' },
  { id: 10, src: '/gallery/1760136037942.jpg', alt: 'Gallery Image 10' },
  { id: 11, src: '/gallery/1760136165451.jpg', alt: 'Gallery Image 11' },
  { id: 12, src: '/gallery/1760147028661.jpg', alt: 'Gallery Image 12' },
  { id: 13, src: '/gallery/1760159671403.jpg', alt: 'Gallery Image 13' },
  { id: 14, src: '/gallery/1760194197207.jpg', alt: 'Gallery Image 14' },
  { id: 15, src: '/gallery/1760194329738.jpg', alt: 'Gallery Image 15' },
  { id: 16, src: '/gallery/1760194449360.jpg', alt: 'Gallery Image 16' },
  { id: 17, src: '/gallery/1760194568751.jpg', alt: 'Gallery Image 17' },
  { id: 18, src: '/gallery/1760194699246.jpg', alt: 'Gallery Image 18' },
  { id: 19, src: '/gallery/1760198365403.jpg', alt: 'Gallery Image 19' },
  { id: 20, src: '/gallery/1760207668067.jpg', alt: 'Gallery Image 20' },
  { id: 21, src: '/gallery/1760458892620.jpg', alt: 'Gallery Image 21' },
  { id: 22, src: '/gallery/1760498041785.jpg', alt: 'Gallery Image 22' },
  { id: 23, src: '/gallery/1760522802603.jpg', alt: 'Gallery Image 23' },
  { id: 24, src: '/gallery/1760525971707.jpg', alt: 'Gallery Image 24' },
  { id: 25, src: '/gallery/1760670085941.jpg', alt: 'Gallery Image 25' },
  { id: 26, src: '/gallery/1760670164547.jpg', alt: 'Gallery Image 26' },
  { id: 27, src: '/gallery/1760670324882.jpg', alt: 'Gallery Image 27' },
  { id: 28, src: '/gallery/1760682399041.jpg', alt: 'Gallery Image 28' },
  { id: 29, src: '/gallery/1760684218705.jpg', alt: 'Gallery Image 29' },
  { id: 30, src: '/gallery/1760710978724.jpg', alt: 'Gallery Image 30' },
  { id: 31, src: '/gallery/1760711198064.jpg', alt: 'Gallery Image 31' },
  { id: 32, src: '/gallery/1760711654236.jpg', alt: 'Gallery Image 32' },
  { id: 33, src: '/gallery/1760725189884.jpg', alt: 'Gallery Image 33' },
  { id: 34, src: '/gallery/1760757598383.jpg', alt: 'Gallery Image 34' },
  { id: 35, src: '/gallery/1760763981763.jpg', alt: 'Gallery Image 35' },
  { id: 36, src: '/gallery/1760888638350.jpg', alt: 'Gallery Image 36' },
  { id: 37, src: '/gallery/1760888749536.jpg', alt: 'Gallery Image 37' },
  { id: 38, src: '/gallery/1760889002264.jpg', alt: 'Gallery Image 38' },
  { id: 39, src: '/gallery/1760889230121.jpg', alt: 'Gallery Image 39' },
  { id: 40, src: '/gallery/1760890150251.jpg', alt: 'Gallery Image 40' },
  { id: 41, src: '/gallery/1760890375685.jpg', alt: 'Gallery Image 41' },
  { id: 42, src: '/gallery/1760890523808.jpg', alt: 'Gallery Image 42' },
  { id: 43, src: '/gallery/1760913030820.jpg', alt: 'Gallery Image 43' },
  { id: 44, src: '/gallery/1760913437109.jpg', alt: 'Gallery Image 44' },
  { id: 45, src: '/gallery/1760941179549.jpg', alt: 'Gallery Image 45' },
  { id: 46, src: '/gallery/1760941398390.jpg', alt: 'Gallery Image 46' },
  { id: 47, src: '/gallery/1760949545782.jpg', alt: 'Gallery Image 47' },
  { id: 48, src: '/gallery/1761031863658.jpg', alt: 'Gallery Image 48' },
  { id: 49, src: '/gallery/1761032127462.jpg', alt: 'Gallery Image 49' },
  { id: 50, src: '/gallery/1761032897647.jpg', alt: 'Gallery Image 50' },
  { id: 51, src: '/gallery/1761033628967.jpg', alt: 'Gallery Image 51' },
  { id: 52, src: '/gallery/1761108882799.jpg', alt: 'Gallery Image 52' },
  { id: 53, src: '/gallery/1761109224370.jpg', alt: 'Gallery Image 53' },
  { id: 54, src: '/gallery/1761109656798.jpg', alt: 'Gallery Image 54' },
  { id: 55, src: '/gallery/1761112680584.jpg', alt: 'Gallery Image 55' },
  { id: 56, src: '/gallery/1761146957499.jpg', alt: 'Gallery Image 56' },
  { id: 57, src: '/gallery/1761225866996.jpg', alt: 'Gallery Image 57' },
  { id: 58, src: '/gallery/1761411074224.jpg', alt: 'Gallery Image 58' },
  { id: 59, src: '/gallery/1761484916952.jpg', alt: 'Gallery Image 59' },
  { id: 60, src: '/gallery/1761486556399.jpg', alt: 'Gallery Image 60' },
  { id: 61, src: '/gallery/1761486756718.jpg', alt: 'Gallery Image 61' },
  { id: 62, src: '/gallery/1761544515983.jpg', alt: 'Gallery Image 62' },
  { id: 63, src: '/gallery/1761568967741.jpg', alt: 'Gallery Image 63' },
  { id: 64, src: '/gallery/1761573858195.jpg', alt: 'Gallery Image 64' },
  { id: 65, src: '/gallery/1761574639520.jpg', alt: 'Gallery Image 65' },
  { id: 66, src: '/gallery/1761657181783.jpg', alt: 'Gallery Image 66' },
  { id: 67, src: '/gallery/1761665320309.jpg', alt: 'Gallery Image 67' },
  { id: 68, src: '/gallery/1761730437517.jpg', alt: 'Gallery Image 68' },
  { id: 69, src: '/gallery/1761730596884.jpg', alt: 'Gallery Image 69' },
  { id: 70, src: '/gallery/1761827922176.jpg', alt: 'Gallery Image 70' },
  { id: 71, src: '/gallery/1761838933750.jpg', alt: 'Gallery Image 71' },
  { id: 72, src: '/gallery/1761915264629.jpg', alt: 'Gallery Image 72' },
  { id: 73, src: '/gallery/1761916429243.jpg', alt: 'Gallery Image 73' },
  { id: 74, src: '/gallery/1761974290876.jpg', alt: 'Gallery Image 74' },
  { id: 75, src: '/gallery/1762143040892.jpg', alt: 'Gallery Image 75' },
  { id: 76, src: '/gallery/1762143211351.jpg', alt: 'Gallery Image 76' },
  { id: 77, src: '/gallery/1762150295784.jpg', alt: 'Gallery Image 77' },
  { id: 78, src: '/gallery/1762317717517.jpg', alt: 'Gallery Image 78' },
  { id: 79, src: '/gallery/1762340431303.jpg', alt: 'Gallery Image 79' },
  { id: 80, src: '/gallery/1762347331801.jpg', alt: 'Gallery Image 80' },
  { id: 81, src: '/gallery/1762413919770.jpg', alt: 'Gallery Image 81' },
  { id: 82, src: '/gallery/1762446662478.jpg', alt: 'Gallery Image 82' },
  { id: 83, src: '/gallery/1762489185217.jpg', alt: 'Gallery Image 83' },
  { id: 84, src: '/gallery/1762610877362.jpg', alt: 'Gallery Image 84' },
  { id: 85, src: '/gallery/1762611028240.jpg', alt: 'Gallery Image 85' },
  { id: 86, src: '/gallery/1762611520191.jpg', alt: 'Gallery Image 86' },
  { id: 87, src: '/gallery/1762620702888.jpg', alt: 'Gallery Image 87' },
  { id: 88, src: '/gallery/1762788350222.jpg', alt: 'Gallery Image 88' },
  { id: 89, src: '/gallery/1763013748960.jpg', alt: 'Gallery Image 89' },
  { id: 90, src: '/gallery/1763016751927.jpg', alt: 'Gallery Image 90' },
  { id: 91, src: '/gallery/1763016840112.jpg', alt: 'Gallery Image 91' },
  { id: 92, src: '/gallery/1763016902765.jpg', alt: 'Gallery Image 92' },
  { id: 93, src: '/gallery/1763017039637.jpg', alt: 'Gallery Image 93' },
  { id: 94, src: '/gallery/1763017174614.jpg', alt: 'Gallery Image 94' },
  { id: 95, src: '/gallery/1763017235309.jpg', alt: 'Gallery Image 95' },
  { id: 96, src: '/gallery/1763017296416.jpg', alt: 'Gallery Image 96' },
  { id: 97, src: '/gallery/1763017329586.jpg', alt: 'Gallery Image 97' },
  { id: 98, src: '/gallery/1763365493883.jpg', alt: 'Gallery Image 98' },
  { id: 99, src: '/gallery/1763536341954.jpg', alt: 'Gallery Image 99' },
  { id: 100, src: '/gallery/1763637608990.jpg', alt: 'Gallery Image 100' },
  { id: 101, src: '/gallery/1763708498734.jpg', alt: 'Gallery Image 101' },
  { id: 102, src: '/gallery/1763708596832.jpg', alt: 'Gallery Image 102' },
  { id: 103, src: '/gallery/1763977206538.jpg', alt: 'Gallery Image 103' },
  { id: 104, src: '/gallery/1764166610807.jpg', alt: 'Gallery Image 104' },
  { id: 105, src: '/gallery/1764597406229.jpg', alt: 'Gallery Image 105' },
  { id: 106, src: '/gallery/1766228229298.jpg', alt: 'Gallery Image 106' },
  { id: 107, src: '/gallery/1766582387410.jpg', alt: 'Gallery Image 107' },
  { id: 108, src: '/gallery/1769406403017.png', alt: 'Gallery Image 108' },
  { id: 109, src: '/gallery/1769406782282.png', alt: 'Gallery Image 109' },
  { id: 110, src: '/gallery/1774111596726.png', alt: 'Gallery Image 110' },
  { id: 111, src: '/gallery/1775199172823.png', alt: 'Gallery Image 111' },
  { id: 112, src: '/gallery/1775401758329.png', alt: 'Gallery Image 112' },
  { id: 113, src: '/gallery/1775417240460.png', alt: 'Gallery Image 113' },
  { id: 114, src: '/gallery/1775872214394.png', alt: 'Gallery Image 114' },
  { id: 115, src: '/gallery/1776162068745.png', alt: 'Gallery Image 115' },
  { id: 116, src: '/gallery/1776162237914.png', alt: 'Gallery Image 116' },
  { id: 117, src: '/gallery/1776163066884.png', alt: 'Gallery Image 117' }
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
