'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-brand font-bold text-white mb-8 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-neutral-400 max-w-xl mb-12 text-lg leading-relaxed">
            I specialize in architecting highly available multi-cloud systems, automating infrastructure, and deploying cutting-edge Generative AI solutions.
          </p>
          
          <div className="space-y-6">
             <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#4285F4]/50 hover:bg-[#4285F4]/5 transition-all duration-300">
               <h3 className="text-[#4285F4] font-semibold mb-2 group-hover:-translate-y-0.5 transition-transform">Cloud Architecture</h3>
               <p className="text-neutral-300 text-sm leading-relaxed">Azure, AWS, Google Cloud, High Availability, Disaster Recovery, Landing Zones</p>
             </div>
             <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F4B400]/50 hover:bg-[#F4B400]/5 transition-all duration-300">
               <h3 className="text-[#F4B400] font-semibold mb-2 group-hover:-translate-y-0.5 transition-transform">DevOps & IAC</h3>
               <p className="text-neutral-300 text-sm leading-relaxed">Terraform, Kubernetes, Docker, Azure DevOps, CI/CD Pipelines, Bash/PowerShell</p>
             </div>
             <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0F9D58]/50 hover:bg-[#0F9D58]/5 transition-all duration-300">
               <h3 className="text-[#0F9D58] font-semibold mb-2 group-hover:-translate-y-0.5 transition-transform">AI & Data</h3>
               <p className="text-neutral-300 text-sm leading-relaxed">GenAI, Oracle AI Vector Search, GitHub Copilot, Prompt Engineering, RAG Architectures</p>
             </div>
          </div>
        </div>

        <div className="flex-1 relative w-full h-[400px] md:h-[600px] flex items-center justify-center">
          {/* Orbital Visualization */}
          <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
            {/* Center Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-brand font-extrabold text-xl z-10 shadow-[0_0_40px_rgba(255,255,255,0.6)]">
              VK
            </div>

            {/* Orbit 1: Cloud */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] border border-[#4285F4]/20 rounded-full"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#4285F4] rounded-full shadow-[0_0_20px_#4285F4]" />
            </motion.div>

            {/* Orbit 2: DevOps */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-[#F4B400]/20 rounded-full"
            >
               <div className="absolute bottom-1/4 right-0 w-3 h-3 bg-[#F4B400] rounded-full shadow-[0_0_15px_#F4B400]" />
               <div className="absolute top-1/4 left-0 w-5 h-5 bg-[#F4B400] rounded-full shadow-[0_0_20px_#F4B400]" />
            </motion.div>

            {/* Orbit 3: AI */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] border border-[#0F9D58]/20 rounded-full hidden md:block"
            >
               <div className="absolute top-0 right-1/4 w-4 h-4 bg-[#0F9D58] rounded-full shadow-[0_0_20px_#0F9D58]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
