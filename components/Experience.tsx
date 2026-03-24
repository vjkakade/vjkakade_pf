import React from 'react';

const roles = [
  {
    company: 'Wipro',
    title: 'Solutions Consultant',
    tags: ['SRE', 'DevOps', 'Multi Cloud', 'AI Engineer', 'Agentic AI', 'Gen AI'],
  },
  {
    company: 'Capgemini Engineering',
    title: 'Senior Consultant',
    tags: ['SRE', 'Linux', 'DevOps', 'Multi Cloud'],
  },
  {
    company: 'Wockhardt Ltd.',
    title: 'System Engineer',
    tags: ['Linux', 'IT Infrastructure', 'Data Center Operations'],
  },
  {
    company: 'ValuD Consulting LLC (JLL Technologies)',
    title: 'Tririga System Administrator & Linux Engineer',
    tags: ['IWMS', 'IoT', 'TAS - TRIRIGA Application Suite'],
  },
  {
    company: 'Jeet Career Academy',
    title: 'Lead Instructor',
    tags: ['Linux Administration', 'Windows Server Technologies'],
  }
];

export default function Experience() {
  return (
    <section className="relative z-20 bg-[#121212] py-16 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Professional Experience
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-16 text-lg leading-relaxed">
          A journey across global enterprises, consulting, and IT leadership roles—delivering cloud, DevOps, SRE, and automation solutions in diverse industries.
        </p>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-12 space-y-12">
          {roles.map((role, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 h-4 w-4 rounded-full bg-neutral-700 border-4 border-[#121212] group-hover:bg-white transition-colors duration-300" />
              
              <h3 className="text-2xl font-semibold text-white mb-1">
                {role.company}
              </h3>
              <p className="text-[#a0a0a0] font-medium mb-4">{role.title}</p>
              
              <div className="flex flex-wrap gap-2">
                {role.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="text-xs uppercase tracking-wider text-neutral-500 bg-white/5 px-2 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
