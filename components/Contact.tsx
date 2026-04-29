'use client';

import React, { useState } from 'react';
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

const BlogIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const ImageIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('Sending...');
    try {
      // TODO: Replace YOUR_FORM_ID_HERE with your actual formspree ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus('Failed to send. Please ensure you replaced YOUR_FORM_ID_HERE.');
      }
    } catch {
      setStatus('Failed to send. Please try again.');
    }
  };

  return (
    <footer className="relative z-20 bg-[#121212] border-t border-white/5 py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Contact Info & Socials */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-brand font-bold text-white mb-6 tracking-tight">Let&apos;s Connect</h2>
            <p className="text-neutral-400 mb-12 max-w-md text-lg leading-relaxed">
              I build cloud-native, secure, and scalable automation platforms. Reach out to collaborate or discuss new opportunities.
            </p>
            <div className="space-y-6 mb-16">
              <a href="mailto:vijaykakade@live.com" className="flex items-center text-neutral-300 hover:text-white transition-colors w-max text-lg">
                <Mail className="w-6 h-6 mr-4 text-neutral-500" />
                vijaykakade@live.com
              </a>
              <div className="flex items-center text-neutral-300 text-lg">
                <MapPin className="w-6 h-6 mr-4 text-neutral-500" />
                Pune, India
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
              <a aria-label="Visit GitHub Profile" href="https://github.com/vjkakade" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-colors text-white">
                  <GithubIcon className="w-5 h-5" />
              </a>
              <a aria-label="Visit LinkedIn Profile" href="https://www.linkedin.com/in/vjkakade/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-colors text-white">
                  <LinkedinIcon className="w-5 h-5" />
              </a>
              <a aria-label="Visit X Profile" href="https://x.com/vjkakade" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-colors text-white">
                  <XIcon className="w-5 h-5" />
              </a>
              <a aria-label="Visit Instagram Profile" href="https://instagram.com/vjkakade" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-colors text-white">
                  <InstagramIcon className="w-5 h-5" />
              </a>
              <a aria-label="Visit Blog Profile" href="https://www.knowledgehut.com/blog/author/vijay-kakade" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-colors text-white">
                  <BlogIcon className="w-5 h-5" />
              </a>
              <a aria-label="View Photo Gallery" href="/gallery" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-colors text-white">
                  <ImageIcon className="w-5 h-5" />
              </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Full Name</label>
              <input type="text" id="name" name="name" required className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-black/40 transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
              <input type="email" id="email" name="email" required className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-black/40 transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Your Message</label>
              <textarea id="message" name="message" required rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-black/40 transition-colors resize-none" placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors mt-2 text-lg">
              {status || 'Send Message'}
            </button>
            <p className="text-xs text-neutral-500 text-center mt-2 font-mono">
              Action Required: Replace YOUR_FORM_ID_HERE in Contact.tsx
            </p>
          </form>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 text-center flex flex-col items-center">
        <p className="text-neutral-500 text-sm">
          Designed by <a href="https://www.linkedin.com/in/vjkakade/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-colors">Vijay Kakade</a>
        </p>
      </div>
    </footer>
  );
}
