'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'cloud' | 'devops' | 'ai' | null>(null);

  const cloudNodes = [
    { name: 'Amazon Web Services', shortName: 'AWS' },
    { name: 'Microsoft Azure', shortName: 'AZ' },
    { name: 'Google Cloud Platform', shortName: 'GCP' },
    { name: 'Oracle Cloud (OCI)', shortName: 'OCI' },
  ];

  const devopsNodes = [
    { name: 'Terraform', shortName: 'Tf' },
    { name: 'Kubernetes', shortName: 'K8s' },
    { name: 'Docker', shortName: 'Dkr' },
    { name: 'Ansible', shortName: 'Ans' },
    { name: 'Jenkins CI/CD', shortName: 'Jnk' },
  ];

  const aiNodes = [
    { name: 'Claude (Anthropic)', shortName: 'Cld' },
    { name: 'OpenAI API', shortName: 'OAI' },
    { name: 'Vector Databases', shortName: 'Vdb' },
    { name: 'Agentic AI Workflows', shortName: 'Agt' },
  ];

  return (
    <section className="relative z-20 bg-[#121212]/60 py-24 px-8 md:px-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Section: Interactive Cards */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-brand font-bold text-white mb-8 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-neutral-400 max-w-xl mb-12 text-lg leading-relaxed">
            I specialize in architecting highly available multi-cloud systems, automating infrastructure, and deploying cutting-edge Generative AI solutions.
          </p>
          
          <div className="space-y-6">
            {/* Cloud Architecture & Systems */}
            <div 
              onMouseEnter={() => setActiveCategory('cloud')}
              onMouseLeave={() => setActiveCategory(null)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeCategory === 'cloud'
                  ? 'border-[#4285F4]/80 bg-[#4285F4]/10 shadow-[0_0_20px_rgba(66,133,244,0.15)] scale-[1.02]'
                  : 'bg-white/5 border-white/10 hover:border-[#4285F4]/50 hover:bg-[#4285F4]/5'
              }`}
            >
              <h3 className="text-[#4285F4] font-semibold mb-2 transition-transform duration-300">Cloud Architecture & Systems</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                AWS, Azure, GCP, Oracle Cloud (OCI), IBM Cloud, VMware (vSphere/ESXi), IBM DB2, Oracle, PostgreSQL, MongoDB, High Availability, Disaster Recovery, Landing Zones
              </p>
            </div>

            {/* DevOps, Containers & IaC */}
            <div 
              onMouseEnter={() => setActiveCategory('devops')}
              onMouseLeave={() => setActiveCategory(null)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeCategory === 'devops'
                  ? 'border-[#F4B400]/80 bg-[#F4B400]/10 shadow-[0_0_20px_rgba(244,180,0,0.15)] scale-[1.02]'
                  : 'bg-white/5 border-white/10 hover:border-[#F4B400]/50 hover:bg-[#F4B400]/5'
              }`}
            >
              <h3 className="text-[#F4B400] font-semibold mb-2 transition-transform duration-300">DevOps, Containers & IaC</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Terraform, Ansible, CloudFormation, Kubernetes, Docker, Jenkins, Git/GitLab, Python, Bash, Prometheus, Grafana, ELK Stack, AWS CloudWatch
              </p>
            </div>

            {/* Generative & Agentic AI */}
            <div 
              onMouseEnter={() => setActiveCategory('ai')}
              onMouseLeave={() => setActiveCategory(null)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeCategory === 'ai'
                  ? 'border-[#0F9D58]/80 bg-[#0F9D58]/10 shadow-[0_0_20px_rgba(15,157,88,0.15)] scale-[1.02]'
                  : 'bg-white/5 border-white/10 hover:border-[#0F9D58]/50 hover:bg-[#0F9D58]/5'
              }`}
            >
              <h3 className="text-[#0F9D58] font-semibold mb-2 transition-transform duration-300">Generative & Agentic AI</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Claude, OpenAI APIs, Azure OpenAI, Hugging Face, Prompt Engineering, Agentic AI Workflows, Multi-Agent Orchestration, Vector Databases, Oracle AI Vector Search, GitHub Copilot
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Interactive Orbital Visualization */}
        <div className="flex-1 relative w-full h-[400px] md:h-[600px] flex items-center justify-center">
          
          {/* Outer scaling wrapper for mobile responsiveness */}
          <div className="relative w-full h-full max-w-[500px] max-h-[500px] scale-[0.65] sm:scale-[0.8] md:scale-100 transition-transform duration-300 origin-center">
            
            {/* Center Core Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center z-30 shadow-[0_0_40px_rgba(255,255,255,0.6)] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo.png" 
                alt="Vijay Kakade Logo" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Orbit 1: Cloud (Radius 110px) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: activeCategory === 'cloud' ? 12 : 25, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-dashed transition-all duration-300 z-10"
              style={{
                borderColor: activeCategory === 'cloud' ? '#4285F4' : 'rgba(66, 133, 244, 0.2)',
                boxShadow: activeCategory === 'cloud' ? '0 0 20px rgba(66, 133, 244, 0.3)' : 'none',
                opacity: activeCategory && activeCategory !== 'cloud' ? 0.25 : 1
              }}
              onMouseEnter={() => setActiveCategory('cloud')}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Cloud Skill Nodes */}
              {cloudNodes.map((node, i) => {
                const angle = (i * 360) / cloudNodes.length;
                const rad = (angle * Math.PI) / 180;
                const x = 110 * Math.cos(rad);
                const y = 110 * Math.sin(rad);
                return (
                  <div
                    key={node.name}
                    className="absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-125 group/node z-20"
                    style={{
                      left: `calc(50% + ${x}px - 16px)`,
                      top: `calc(50% + ${y}px - 16px)`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: activeCategory === 'cloud' ? 12 : 25, ease: "linear" }}
                      className="w-full h-full rounded-full bg-[#18181b] border flex items-center justify-center relative text-[9px] font-bold text-neutral-300 hover:text-white"
                      style={{
                        borderColor: activeCategory === 'cloud' ? '#4285F4' : 'rgba(66, 133, 244, 0.4)',
                        boxShadow: activeCategory === 'cloud' ? '0 0 10px rgba(66, 133, 244, 0.5)' : 'none',
                      }}
                    >
                      {node.shortName}
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-neutral-900 border border-white/10 rounded text-[11px] font-semibold text-white whitespace-nowrap opacity-0 pointer-events-none group-hover/node:opacity-100 transition-opacity duration-200 shadow-xl z-50">
                        {node.name}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Orbit 2: DevOps (Radius 190px) */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: activeCategory === 'devops' ? 16 : 35, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-dashed transition-all duration-300 z-10"
              style={{
                borderColor: activeCategory === 'devops' ? '#F4B400' : 'rgba(244, 180, 0, 0.2)',
                boxShadow: activeCategory === 'devops' ? '0 0 20px rgba(244, 180, 0, 0.3)' : 'none',
                opacity: activeCategory && activeCategory !== 'devops' ? 0.25 : 1
              }}
              onMouseEnter={() => setActiveCategory('devops')}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* DevOps Skill Nodes */}
              {devopsNodes.map((node, i) => {
                const angle = (i * 360) / devopsNodes.length;
                const rad = (angle * Math.PI) / 180;
                const x = 190 * Math.cos(rad);
                const y = 190 * Math.sin(rad);
                return (
                  <div
                    key={node.name}
                    className="absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-125 group/node z-20"
                    style={{
                      left: `calc(50% + ${x}px - 16px)`,
                      top: `calc(50% + ${y}px - 16px)`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: activeCategory === 'devops' ? 16 : 35, ease: "linear" }}
                      className="w-full h-full rounded-full bg-[#18181b] border flex items-center justify-center relative text-[9px] font-bold text-neutral-300 hover:text-white"
                      style={{
                        borderColor: activeCategory === 'devops' ? '#F4B400' : 'rgba(244, 180, 0, 0.4)',
                        boxShadow: activeCategory === 'devops' ? '0 0 10px rgba(244, 180, 0, 0.5)' : 'none',
                      }}
                    >
                      {node.shortName}
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-neutral-900 border border-white/10 rounded text-[11px] font-semibold text-white whitespace-nowrap opacity-0 pointer-events-none group-hover/node:opacity-100 transition-opacity duration-200 shadow-xl z-50">
                        {node.name}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Orbit 3: AI (Radius 270px) - Hidden on Mobile screens */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: activeCategory === 'ai' ? 20 : 45, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-dashed transition-all duration-300 hidden md:block z-10"
              style={{
                borderColor: activeCategory === 'ai' ? '#0F9D58' : 'rgba(15, 157, 88, 0.2)',
                boxShadow: activeCategory === 'ai' ? '0 0 20px rgba(15, 157, 88, 0.3)' : 'none',
                opacity: activeCategory && activeCategory !== 'ai' ? 0.25 : 1
              }}
              onMouseEnter={() => setActiveCategory('ai')}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* AI Skill Nodes */}
              {aiNodes.map((node, i) => {
                const angle = (i * 360) / aiNodes.length;
                const rad = (angle * Math.PI) / 180;
                const x = 270 * Math.cos(rad);
                const y = 270 * Math.sin(rad);
                return (
                  <div
                    key={node.name}
                    className="absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-125 group/node z-20"
                    style={{
                      left: `calc(50% + ${x}px - 16px)`,
                      top: `calc(50% + ${y}px - 16px)`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: activeCategory === 'ai' ? 20 : 45, ease: "linear" }}
                      className="w-full h-full rounded-full bg-[#18181b] border flex items-center justify-center relative text-[9px] font-bold text-neutral-300 hover:text-white"
                      style={{
                        borderColor: activeCategory === 'ai' ? '#0F9D58' : 'rgba(15, 157, 88, 0.4)',
                        boxShadow: activeCategory === 'ai' ? '0 0 10px rgba(15, 157, 88, 0.5)' : 'none',
                      }}
                    >
                      {node.shortName}
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-neutral-900 border border-white/10 rounded text-[11px] font-semibold text-white whitespace-nowrap opacity-0 pointer-events-none group-hover/node:opacity-100 transition-opacity duration-200 shadow-xl z-50">
                        {node.name}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
