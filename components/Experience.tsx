'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar, Briefcase } from 'lucide-react';
import { playClickSound } from '@/utils/sound';

const roles = [
  {
    company: 'Wipro',
    title: 'Solutions Consultant | AI Engineer | Multi-Cloud Architect | DevOps Lead',
    date: 'June 2022 — Present',
    location: 'Pune, MH, India',
    tags: ['Gen AI', 'Agentic AI', 'SRE', 'DevOps', 'Multi Cloud', 'Kubernetes', 'Terraform'],
    bullets: [
      'Lead AWS cloud migration, cutting infrastructure costs by 25% and boosting performance by 30%.',
      'Design Azure Landing Zones per Microsoft CAF for secure, scalable cloud foundations.',
      'Architect multi-region high-availability deployments, reducing downtime by 45%.',
      'Automate deployments via Terraform, Bicep, and ARM templates, cutting manual effort by 40%.',
      'Optimize cloud costs by 30% through Reserved Instances, Savings Plans, and rightsizing.',
      'Streamline CI/CD pipelines via Jenkins, increasing deployment frequency from bi-weekly to daily.',
      'Design Generative AI and Agentic AI solutions (chatbots, RAG pipelines) using Claude, OpenAI, Azure OpenAI, Hugging Face.',
      'Build LLM-powered automation with Vector Databases for AI-driven infrastructure operations.',
      'Mentor 10 junior engineers and build monitoring systems, reducing MTTD by 50% and boosting productivity by 40%.'
    ]
  },
  {
    company: 'Capgemini',
    title: 'Senior Consultant - SRE | Multi Cloud | DevOps Engineer | Linux-Unix',
    date: 'June 2019 — June 2022',
    location: 'Bengaluru, KA, India',
    tags: ['SRE', 'Linux-Unix', 'DevOps', 'Multi Cloud', 'IBM TRIRIGA', 'Observability'],
    bullets: [
      'Designed and deployed scalable, secure multi-cloud infrastructure across AWS, GCP, and Azure for 24+ applications, optimizing cost and performance.',
      'Built Jenkins CI/CD pipelines integrated with Git and Docker, accelerating deployment frequency.',
      'Implemented observability using Prometheus, Grafana, ELK Stack, and CloudWatch, ensuring 99.9% application availability.',
      'Led migration of monolithic applications to microservices, reducing deployment failures by 80%.',
      'Automated performance testing and engineering, improving system efficiency by 30%.',
      'Designed zero-data-loss disaster recovery plans, minimizing downtime during outages.',
      'Automated database backup/recovery via scripting, cutting manual effort by 95% & Deployed IBM TRIRIGA (TAS) environments from scratch using automated and manual provisioning.'
    ]
  },
  {
    company: 'Wockhardt Ltd.',
    title: 'Sr. Systems Engineer | Multi Cloud | Linux-Unix | IT Infrastructure | Data Center Operations',
    date: 'Sept 2015 — June 2019',
    location: 'Mumbai, MH, India',
    tags: ['VMware', 'KVM', 'Systems Engineering', 'Data Center Operations', 'RHEL'],
    bullets: [
      'Led a team of 7 engineers supporting client VMware infrastructure on vSphere 6.0/6.5 Enterprise Plus, providing architectural guidance across complex environments.',
      'Designed and deployed RHEL, CentOS, and Fedora environments with KVM virtualization, including application deployment and support.',
      'Administered VMware vCenter/ESXi, configuring vMotion, HA, DRS, and virtual networks; managed backups using Veeam.',
      'Managed multi-platform infrastructure (Linux/Windows), including Active Directory, LDAP, Exchange, and patch management.',
      'Led full project lifecycle from requirements to live implementation, maintaining production, development, and test environments.'
    ]
  },
  {
    company: 'ValuD Consulting LLC (Known as JLL Technologies)',
    title: 'Systems Engineer | Enterprise Systems | IBM TRIRIGA Architect | Multi Cloud | Linux-Unix',
    date: 'Nov 2013 — Aug 2015',
    location: 'Chh. Sambhajinagar, MH, India',
    tags: ['IBM TRIRIGA', 'VMware', 'WebSphere', 'Network Admin', 'IT Operations'],
    bullets: [
      'Led enterprise IT operations as Lead Systems/Network Administrator, driving monitoring and deployment automation improvements.',
      'Led complete IBM TRIRIGA implementation lifecycle — sizing, installation, configuration, testing, deployment, and documentation.',
      'Engineered TRIRIGA integrations with enterprise systems, developing technical specifications and Real Estate module functionality.',
      'Administered IBM HTTP Server, TRIRIGA, WebSphere, JBoss, Apache, and IIS across Linux environments.',
      'Delivered enterprise-class VMware infrastructure (vSphere 6.0/6.5) as multi-tenant cloud base for service provider partners. Administered vCenter, configuring HA/DRS clusters, VM templates, Fault Tolerance, and vRealize Operations Manager for capacity planning.'
    ]
  },
  {
    company: 'Jeet Institute',
    title: 'Lead Instructor – Cisco Networking',
    date: 'Nov 2010 — Nov 2013',
    location: 'Chh. Sambhajinagar, MH, India',
    tags: ['Cisco Networking', 'Instruction', 'Linux Administration', 'Windows Server'],
    bullets: [
      'Delivered hands-on instruction and curriculum development for Cisco Networking (CCNA), Linux system administration, and Windows Server technologies.'
    ]
  }
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Expand first by default

  const toggleExpand = (idx: number) => {
    playClickSound();
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section className="relative z-20 bg-[#121212]/60 py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white">
            <Briefcase className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-brand font-bold text-white tracking-tight">
            Professional Experience
          </h2>
        </div>

        <p className="text-neutral-400 max-w-2xl mb-16 text-lg leading-relaxed">
          A journey across global enterprises, consulting, and IT leadership roles—delivering cloud, DevOps, SRE, and automation solutions in diverse industries.
        </p>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
          {roles.map((role, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={idx} className="relative group">
                {/* Timeline marker */}
                <div 
                  className={`absolute -left-[41px] md:-left-[57px] top-1.5 h-4 w-4 rounded-full border-4 border-[#121212] transition-all duration-300 ${
                    isExpanded ? 'bg-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'bg-neutral-700 group-hover:bg-white'
                  }`}
                />
                
                {/* Role Header (Accordion Trigger) */}
                <div 
                  onClick={() => toggleExpand(idx)}
                  className="cursor-pointer select-none group/trigger flex items-start justify-between gap-4 p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover/trigger:text-purple-300 transition-colors">
                        {role.company}
                      </h3>
                      <span className="text-sm font-semibold text-neutral-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {role.location}
                      </span>
                    </div>

                    <p className="text-[#a0a0a0] font-medium text-lg mb-4">{role.title}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {role.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx}
                          className="text-xs font-semibold tracking-wider text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-sm font-medium text-neutral-500 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {role.date}
                    </span>
                  </div>

                  <div className="p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 group-hover/trigger:text-white group-hover/trigger:bg-white/10 transition-all self-center">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {/* Role Accomplishments (Accordion Content) */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 text-neutral-300">
                    <ul className="list-none space-y-4">
                      {role.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="relative pl-6 leading-relaxed">
                          <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-purple-400 opacity-80" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
