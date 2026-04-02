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
    let active = true;
    const loadedImages: HTMLImageElement[] = new Array(frameCount);
    
    // 1. Immediately load and draw the first frame to avoid a blank screen
    const firstImg = new Image();
    firstImg.src = `/sequence/frame_000_delay-0.066s.webp`;
    firstImg.onload = () => {
      if (!active) return;
      loadedImages[0] = firstImg;
      // We trigger a manual draw just for this first frame to get pixels on screen
      setImages([...loadedImages]);
      drawFrame(0, loadedImages);
      
      // 2. Schedule the rest of the images to load asynchronously
      if (typeof window !== 'undefined' && window.requestIdleCallback) {
        window.requestIdleCallback(() => loadRemainingFrames(loadedImages, active));
      } else {
        setTimeout(() => loadRemainingFrames(loadedImages, active), 0);
      }
    };

    const loadRemainingFrames = (imgsArr: HTMLImageElement[], isActive: boolean) => {
      let loadedCount = 1; // 0th is already loaded
      for (let i = 1; i < frameCount; i++) {
          const img = new Image();
          const indexStr = i.toString().padStart(3, '0');
          img.src = `/sequence/frame_${indexStr}_delay-0.066s.webp`;
          
          img.onload = () => {
            if (!isActive) return;
            imgsArr[i] = img;
            loadedCount++;
            if (loadedCount === frameCount) {
               // Update state when all are completely loaded
               setImages([...imgsArr]);
            }
          };
      }
    };

    return () => { active = false; };
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
    // We use the canvas "logical" size in layout here rather than pure pixel resolution, 
    // but drawing should scale based on the internal pixel buffer dimensions.
    const logicalWidth = canvas.clientWidth;
    const logicalHeight = canvas.clientHeight;
    
    const rw = logicalWidth / img.width;
    const rh = logicalHeight / img.height;
    const ratio = Math.max(rw, rh);

    // Scale up by 8% to naturally crop out the Veo watermark (which usually sits in the corner)
    const scaleFactor = 1.08;
    const newWidth = img.width * ratio * scaleFactor;
    const newHeight = img.height * ratio * scaleFactor;
    const x = (logicalWidth - newWidth) / 2;
    const y = (logicalHeight - newHeight) / 2;

    // We scale the context by dpr so operations use logical units
    const dpr = window.devicePixelRatio || 1;
    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, logicalWidth, logicalHeight);
    ctx.drawImage(img, x, y, newWidth, newHeight);
    ctx.restore();
  };

  // Resize handler for Canvas
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      // Debounce the resize event to limit expensive recalculations
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        // Setup High-DPI Canvas
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        
        // redraw on resize
        if (images.length > 0) {
          drawFrame(Math.round(scrollYProgress.get() * (frameCount - 1)), images);
        }
      }, 50);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
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
