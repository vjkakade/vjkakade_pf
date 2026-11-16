'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

interface ScrollyCanvasProps {
  frameCount: number;
}

export default function ScrollyCanvas({ frameCount }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(frameCount).fill(null));
  const currentFrameRef = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const drawFrame = useCallback((frameIndex: number) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find the requested frame, or fallback to the closest loaded frame to avoid blanks
    const imgs = imagesRef.current;
    let img = imgs[frameIndex];
    if (!img || img.width === 0) {
      for (let offset = 1; offset < frameCount; offset++) {
        const prev = frameIndex - offset;
        const next = frameIndex + offset;
        if (prev >= 0 && imgs[prev] && imgs[prev]!.width > 0) {
          img = imgs[prev];
          break;
        }
        if (next < frameCount && imgs[next] && imgs[next]!.width > 0) {
          img = imgs[next];
          break;
        }
      }
    }

    if (!img || img.width === 0 || img.height === 0) return;

    const physicalWidth = canvas.width;
    const physicalHeight = canvas.height;

    // Calculate object-fit: cover in physical pixels
    const rw = physicalWidth / img.width;
    const rh = physicalHeight / img.height;
    const ratio = Math.max(rw, rh);

    // Scale up by 8% to naturally crop out the corner watermark
    const scaleFactor = 1.08;
    const newWidth = img.width * ratio * scaleFactor;
    const newHeight = img.height * ratio * scaleFactor;
    const x = (physicalWidth - newWidth) / 2;
    const y = (physicalHeight - newHeight) / 2;

    ctx.clearRect(0, 0, physicalWidth, physicalHeight);
    ctx.drawImage(img, x, y, newWidth, newHeight);
    currentFrameRef.current = frameIndex;
  }, [frameCount]);

  // Progressive frame loader: prioritized in batches so the network is never saturated
  useEffect(() => {
    let active = true;

    const loadImage = (index: number): Promise<HTMLImageElement | null> => {
      return new Promise((resolve) => {
        const img = new Image();
        const indexStr = index.toString().padStart(3, '0');
        img.src = `/sequence/frame_${indexStr}_delay-0.066s.webp`;
        img.onload = () => {
          if (!active) {
            resolve(null);
            return;
          }
          imagesRef.current[index] = img;
          resolve(img);
        };
        img.onerror = () => resolve(null);
      });
    };

    const loadSequence = async () => {
      // 1. Load frame 0 immediately and paint
      const firstFrame = await loadImage(0);
      if (!active) return;
      if (firstFrame) {
        drawFrame(0);
      }

      // 2. Load the initial scroll zone (frames 1-20)
      const priorityFrames: Promise<HTMLImageElement | null>[] = [];
      const priorityLimit = Math.min(20, frameCount);
      for (let i = 1; i < priorityLimit; i++) {
        priorityFrames.push(loadImage(i));
      }
      await Promise.all(priorityFrames);
      if (!active) return;

      // 3. Stagger remaining frames in chunks of 15 during idle intervals
      // to keep the main thread and network pipeline completely responsive
      const chunkSize = 15;
      for (let start = priorityLimit; start < frameCount; start += chunkSize) {
        if (!active) break;
        const end = Math.min(start + chunkSize, frameCount);
        const chunkPromises: Promise<HTMLImageElement | null>[] = [];
        for (let i = start; i < end; i++) {
          chunkPromises.push(loadImage(i));
        }
        await Promise.all(chunkPromises);

        // Yield execution to the browser between chunks
        await new Promise((r) => {
          if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            window.requestIdleCallback(r, { timeout: 100 });
          } else {
            setTimeout(r, 20);
          }
        });
      }
    };

    loadSequence();

    return () => {
      active = false;
    };
  }, [frameCount, drawFrame]);

  // Resize handler for Canvas
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        drawFrame(Math.round(scrollYProgress.get() * (frameCount - 1)));
      }, 50);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [drawFrame, scrollYProgress, frameCount]);

  // Scrub animation on scroll
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const frameIndex = Math.round(latest * (frameCount - 1));
    requestAnimationFrame(() => drawFrame(frameIndex));
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
