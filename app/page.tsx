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
  // Exact frame count confirmed from /public/sequence/
  const frameCount = 120;

  return (
    <main className="bg-[#121212] min-h-screen text-white font-sans selection:bg-white/30">

      {/* ── Hero ── scroll-scrubbed frame animation (unchanged) */}
      <div className="relative w-full">
        <ScrollyCanvas frameCount={frameCount} />
        <Overlay />
      </div>

      {/* ── Body sections ── */}
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
