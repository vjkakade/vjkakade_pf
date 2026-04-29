import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import LatestBlogs from '@/components/LatestBlogs';
import Contact from '@/components/Contact';

export default function Home() {
  // Rough estimate of frames if not calculated. You can update this to the exact count.
  const frameCount = 120;

  return (
    <main className="bg-[#121212] min-h-screen text-white font-sans selection:bg-white/30">
      <div className="relative w-full">
        {/* The scrolly canvas takes 500vh and scrubs through frames */}
        <ScrollyCanvas frameCount={frameCount} />
        
        {/* The overlay is absolute and sits on top of the 500vh container */}
        <Overlay />
      </div>

      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <LatestBlogs />
      <Contact />
    </main>
  );
}
