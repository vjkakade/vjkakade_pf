import React from 'react';

const certs = [
  { name: 'GitHub Copilot', date: 'Nov-2025' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', date: 'Sept-2025' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional', date: 'Sept-2025' },
  { name: 'Oracle AI Vector Search Certified Professional', date: 'Sept-2025' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional', date: 'Sept-2025' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional', date: 'Sept-2025' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified Architect Associate', date: 'Sept-2025' },
  { name: 'Redhat Certified Engineer', date: 'Aug-2012' },
  { name: 'Novell Certified Network +', date: 'Feb-2007' },
  { name: 'Microsoft Certified IT Professional', date: 'Feb-2007' }
];

export default function Certifications() {
  return (
    <section className="relative z-20 bg-[#121212] py-16 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Certifications
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-12 text-lg leading-relaxed">
          Industry-recognized credentials in cloud, DevOps, AI, and IT infrastructure—demonstrating expertise, continuous learning, and a commitment to excellence.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certs.map((cert, idx) => {
            const [month, year] = cert.date.split('-');
            return (
              <div
                key={idx}
                className="flex items-center justify-between p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300 relative overflow-hidden"
              >
                {/* Red left accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-1 bg-[#D95F5F] rounded-r-md" />
                
                <div className="flex-1 flex justify-center text-center px-6">
                  <p className="text-white font-bold text-sm md:text-base leading-snug max-w-[85%]">{cert.name}</p>
                </div>
                
                <div className="flex-shrink-0 text-center w-16">
                  <p className="text-[#D95F5F] text-xs md:text-sm font-semibold tracking-wide">
                    {month}-<br />{year}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
