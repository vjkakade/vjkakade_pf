import React from 'react';

const certs = [
  { name: 'GitHub Copilot', date: 'Nov-2025', url: 'https://learn.microsoft.com/api/credentials/share/en-us/VijayKakade-6850/AA58E6894A26BEE6?sharingId' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate', date: 'Oct-2025', url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=C5DAA59D651C908A81252B3DC6876DEF7A07E056675CB6AC10A898E0B98FC2C3' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified Architect Associate', date: 'Oct-2025', url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=951C3B368D3E15515AAD57BA5C176CA110DFE4AD536C83D70E91DA98C94E6213' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional', date: 'Oct-2025', url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=FE3D5D027CD0E4A114C3178DDF513822B803A6194FB46317911B360831DB3BE0' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional', date: 'Sep-2025', url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=C792CECBB307D450A870C626D76F60B37A725A0FC31316761D27ECB8D3007602' },
  { name: 'Oracle AI Vector Search Certified Professional', date: 'Sep-2025', url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=75D52C0612F4DA3FD5D93DD4F179989B80AC41469630EE13F50B015FAEA92A72' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional', date: 'Sep-2025', url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=243A02D1EF9EBB69191365A15561578B8DC6A0AE3E0185CD0433280BB884ECD6' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', date: 'Sep-2025', url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=9DE3300BD61D89DA19C785A23BE82B3123A290234E7CF4694E73B0245A1E0540' },
  { name: 'Redhat Certified Virtualization Administrator', date: 'Sep-2012' },
  { name: 'Redhat Certified Engineer', date: 'Aug-2012' },
  { name: 'Novell Certified Network +', date: 'Feb-2007' },
  { name: 'Microsoft Certified System Administrator', date: 'Mar-2010' },
  { name: 'Microsoft Certified Professional', date: 'Feb-2007' }
];

export default function Certifications() {
  return (
    <section className="relative z-20 bg-[#121212] py-16 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-brand font-bold text-white mb-8 tracking-tight">
          Certifications
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-12 text-lg leading-relaxed">
          Industry-recognized credentials in cloud, DevOps, AI, and IT infrastructure—demonstrating expertise, continuous learning, and a commitment to excellence.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300 gap-4"
            >
              <div className="flex items-center flex-1">
                <div className="h-3 w-3 rounded-full bg-white/50 mr-4 flex-shrink-0" />
                <p className="text-neutral-200 font-medium leading-snug">
                  {cert.url ? (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">
                      {cert.name}
                    </a>
                  ) : (
                    cert.name
                  )}
                </p>
              </div>
              
              <div className="flex-shrink-0 sm:ml-4">
                <p className="text-neutral-500 text-sm font-medium tracking-wide">
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
