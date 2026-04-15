'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], [100, -100]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.85], [100, -100]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none h-[500vh]">
      {/* Sticky container for text */}
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute flex flex-col items-center text-center justify-center p-8"
        >
          <h1 className="text-5xl md:text-7xl font-brand font-extrabold tracking-tight text-white drop-shadow-lg">
            Vijay Kakade.
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-neutral-300">
            AI, Cloud & DevOps Engineer.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-8 md:left-24 max-w-lg p-8"
        >
          <h2 className="text-4xl md:text-6xl font-brand font-bold tracking-tight text-white drop-shadow-lg">
            I build digital experiences.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-neutral-300">
            Crafting seamless, interactive interfaces with a focus on performance and aesthetics.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-8 md:right-24 max-w-lg text-right p-8"
        >
          <h2 className="text-4xl md:text-6xl font-brand font-bold tracking-tight text-white drop-shadow-lg">
            Bridging design and engineering.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-neutral-300">
            Every pixel is considered. Every animation is purposeful.
          </p>
        </motion.div>
        
      </div>
    </div>
  );
}
