import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#121212] flex flex-col items-center justify-center p-8 text-center text-white selection:bg-white/30 font-sans">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a]/20 to-[#121212] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter mb-4 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
          Lost in the Cloud
        </h2>
        <p className="text-neutral-400 max-w-md mx-auto mb-10 text-lg leading-relaxed">
          The endpoint you requested could not be resolved. It might have been deleted, moved, or never existed.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
        >
          Return to Hub
        </Link>
      </div>
    </main>
  );
}
