'use client';

import React, { useState } from 'react';
import { Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const projects = [
  {
    title: 'Multi-Cloud Infra Deployment using Terraform & Azure DevOps',
    category: 'CI/CD & IAC',
    description: 'A fully automated CI/CD pipeline where Azure DevOps triggers Terraform code to deploy infrastructure across Azure, AWS, and GCP. Includes dynamic modules, backend state management, YAML pipelines, and production-grade IaC workflows.',
    demoUrl: 'https://drive.google.com/file/d/1ivDhKmfAY2mlGXH6MnDMe04hkgXalMOT/view?usp=sharing',
    repoUrl: 'https://github.com/vjkakade/FinMin_Fork'
  },
  {
    title: 'Production-Grade Azure Infrastructure with Terraform',
    category: 'Cloud Engineering',
    description: 'Builds a production-grade Azure cloud infrastructure using Terraform, featuring a fully automated deployment pipeline and real-time CPU-based autoscaling including Virtual Network, Load Balancer, and VMSS.',
    demoUrl: 'https://drive.google.com/file/d/1h4K0wPLhHXxQ_QIAMPJsARQxoSln7ULI/view?usp=sharing',
    repoUrl: 'https://github.com/rituraj12/azure-production-infra-terraform/'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="relative z-20 bg-[#121212] py-16 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-brand font-bold text-white mb-8 tracking-tight">
          My Projects
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-12 text-lg leading-relaxed">
          A collection of my hands-on DevOps, Cloud & Automation work.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                  : 'bg-white/5 text-neutral-400 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group relative flex flex-col justify-between p-8 h-auto min-h-[400px] rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="mb-8 relative z-10">
                  <p className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-widest">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold text-white group-hover:-translate-y-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex flex-col justify-between items-start flex-1 relative z-10 box-border">
                  <p className="text-neutral-300 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4 w-full border-t border-white/10 pt-6 mt-auto">
                      {project.demoUrl && (
                          <a aria-label={`View Demo Video for ${project.title}`} href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-white hover:text-neutral-300 transition-colors">
                              <Video className="w-4 h-4 mr-2" />
                              Demo Video
                          </a>
                      )}
                      {project.repoUrl && (
                          <a aria-label={`View GitHub Repository for ${project.title}`} href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-white hover:text-neutral-300 transition-colors ml-4">
                              <GithubIcon className="w-4 h-4 mr-2" />
                              GitHub Repo
                          </a>
                      )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
