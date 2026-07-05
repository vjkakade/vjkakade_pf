import React from 'react';

const skills = [
  'Azure', 'AWS', 'GCP', 'Oracle Cloud (OCI)', 'Azure DevOps',
  'Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines',
  'MongoDB', 'IBM Cloud', 'IWMS (TRIRIGA)', 'Python', 'Agentic AI', 'Generative AI'
];

export default function About() {
  return (
    <section className="relative z-20 bg-[#121212] pt-32 pb-16 px-8 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Hi, It&apos;s Vijay.
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed mb-6">
            I&apos;ve spent the last 13+ years doing something I genuinely love — building the infrastructure that keeps businesses running, and lately, the AI that makes that infrastructure smarter.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed mb-6">
            My journey started deep in the fundamentals: Windows, Linux, and mainframe environments, server infrastructure, virtualization, networking, security, and databases — largely across healthcare and supply chain organizations where downtime isn&apos;t an option and precision matters.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed mb-6">
            Over the past 10+ years, that foundation evolved into a specialization in cloud and DevOps. I design and optimize multi-cloud environments (AWS, Azure, GCP, IBM Cloud, OCI) and build CI/CD pipelines using Docker, Kubernetes, Terraform, Ansible, and Jenkins — with Python and Bash scripting to automate the repetitive so teams can focus on what matters.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed mb-6">
            Today, I&apos;m applying that same infrastructure mindset to AI. As an AI Engineer, I build Generative AI and Agentic AI solutions — chatbots, RAG pipelines, and AI-driven infrastructure automation — using Claude, OpenAI APIs, Azure OpenAI, and Hugging Face. It&apos;s the natural next chapter: I&apos;ve always been the person who automates the manual and scales the fragile, and now I get to do that with LLMs and autonomous agents, not just scripts and pipelines.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed mb-8">
            Along the way, I&apos;ve led teams, mentored engineers, and driven measurable results — reduced downtime, faster deployments, leaner costs, and more resilient systems. I care about building things that actually hold up in production, not just in a demo.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            Download Resume
          </a>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Tools and technologies I use to build scalable and automated cloud environments, focusing on CI/CD automation, Infrastructure as Code, and production-ready solutions.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-neutral-200 hover:bg-white/10 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
