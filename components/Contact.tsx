import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact() {
  return (
    <footer className="relative z-20 bg-black/40 border-t border-white/5 py-16 px-8 md:px-24 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Let&apos;s Connect</h2>
          <p className="text-neutral-400 mb-8 max-w-sm leading-relaxed">
            I build cloud-native, secure, and scalable automation platforms. Reach out to collaborate or discuss new opportunities.
          </p>
          <div className="space-y-4">
            <a href="mailto:vijaykakade@live.com" className="flex items-center text-neutral-300 hover:text-white transition-colors w-max">
              <Mail className="w-5 h-5 mr-3" />
              vijaykakade@live.com
            </a>
            <div className="flex items-center text-neutral-300">
              <MapPin className="w-5 h-5 mr-3" />
              Pune, India
            </div>
          </div>
        </div>

        <div className="flex flex-col md:items-end justify-center">
            <div className="flex space-x-6">
                <a aria-label="Visit GitHub Profile" href="https://github.com/vjkakade" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-colors text-white">
                    <GithubIcon className="w-6 h-6" />
                </a>
                <a aria-label="Visit LinkedIn Profile" href="https://www.linkedin.com/in/vjkakade/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-colors text-white">
                    <LinkedinIcon className="w-6 h-6" />
                </a>
                <a aria-label="Visit X Profile" href="https://x.com/vjkakade" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-colors text-white">
                    <XIcon className="w-6 h-6" />
                </a>
                <a aria-label="Visit Instagram Profile" href="https://instagram.com/vjkakade" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-colors text-white">
                    <InstagramIcon className="w-6 h-6" />
                </a>
            </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center flex flex-col items-center">
        <p className="text-neutral-500 text-sm">
          Designed by <a href="https://www.linkedin.com/in/vjkakade/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Vijay Kakade</a>
        </p>
      </div>
    </footer>
  );
}
