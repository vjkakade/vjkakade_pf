import React from 'react';

const certs = [
  'AWS Certified Solutions Architect',
  'Microsoft Certified: Azure Administrator Associate',
  'Google Cloud Professional Cloud Architect',
  'Oracle Cloud Infrastructure Architect Associate',
  'Certified Kubernetes Administrator (CKA)'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-center p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="h-3 w-3 rounded-full bg-white/50 mr-4 flex-shrink-0" />
              <p className="text-neutral-200 font-medium">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
