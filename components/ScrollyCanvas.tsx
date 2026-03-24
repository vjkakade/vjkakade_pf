'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

interface ScrollyCanvasProps {
  frameCount: number;
}

export default function ScrollyCanvas({ frameCount }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Load all images sequence
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        // The image paths are sequence/frame_[00...89]_delay-0.067s.webp based on the provided hint.
        // Wait! The user mentioned: "The files are named sequentially (e.g., frame_00_delay-0.067s.webp"
        // Actual files found are frame_000_delay-0.066s.webp
        const indexStr = i.toString().padStart(3, '0');
        img.src = `/sequence/frame_${indexStr}_delay-0.066s.webp`;
        
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
             setImages(loadedImages);
             drawFrame(0, loadedImages);
          }
        };
        loadedImages.push(img);
    }
    
    // Fallback if load is slow
    setImages(loadedImages);
  }, [frameCount]);

  const drawFrame = (frameIndex: number, imgs: HTMLImageElement[]) => {
    if (!imgs[frameIndex] || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ensure canvas is sized correctly based on device pixel ratio
    const img = imgs[frameIndex];
    if (img.width === 0 || img.height === 0) return; // not loaded yet
    
    // Calculate aspect ratio / object-fit cover logic
    const rw = canvas.width / img.width;
    const rh = canvas.height / img.height;
    const ratio = Math.max(rw, rh);

    const newWidth = img.width * ratio;
    const newHeight = img.height * ratio;
    const x = (canvas.width - newWidth) / 2;
    const y = (canvas.height - newHeight) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, newWidth, newHeight);
  };

  // Resize handler for Canvas
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // redraw on resize
      if (images.length > 0) {
        drawFrame(Math.round(scrollYProgress.get() * (frameCount - 1)), images);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup
    
    return () => window.removeEventListener('resize', handleResize);
  }, [images, scrollYProgress, frameCount]);

  // Scrub animation on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    const frameIndex = Math.round(latest * (frameCount - 1));
    requestAnimationFrame(() => drawFrame(frameIndex, images));
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
