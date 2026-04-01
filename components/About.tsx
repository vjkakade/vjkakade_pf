import React from 'react';

const skills = [
  'Azure', 'AWS', 'GCP', 'Oracle Cloud', 'Azure DevOps',
  'Jenkins', 'GitHub', 'Terraform', 'CI/CD Pipelines',
  'MongoDB', 'IWMS (TRIRIGA)', 'Python', 'Agentic AI', 'Generative AI'
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
            I&apos;m an experienced IT Professional with 12+ years in infrastructure, cloud, and DevOps. 
            Skilled in managing multi-platform environments (Windows, Linux, mainframe) and delivering global IT solutions.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed mb-8">
            My expertise revolves around server infrastructure, virtualization, networking, security, and databases across 
            healthcare and supply chain sectors. I have a strong background in deploying and maintaining hardware, software, 
            and IT systems for high-performance environments.
          </p>
          {/* Note: Update the href URL to point to a valid PDF file when hosting. */}
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
