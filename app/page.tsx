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

      {/* ── Body sections ── Orb 3D background ──────────────────────────────
          CSS sticky pattern: the orb sticks to the viewport while sections
          scroll over it. -mb-[100vh] pulls content on top of the sticky div.
          Only a 15% black veil is used — letting the orb glow fully through.
      ──────────────────────────────────────────────────────────────────────── */}
      <div className="relative">

        {/* Sticky orb — stays in viewport as sections scroll past */}
        <div
          aria-hidden="true"
          className="sticky top-0 h-[100dvh] -mb-[100dvh] z-0 w-full overflow-hidden pointer-events-none select-none"
        >
          <iframe
            src="https://my.spline.design/orb-sWCiCwCK9EmhXNMo2lHmasXc/"
            frameBorder={0}
            title="Orb 3D Background"
            className="w-full h-full pointer-events-none"
            allow="autoplay"
          />

          {/* Minimal veil — only 15% dark so the orb stays visible */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />

          {/* Cover Spline watermark badge */}
          <div className="absolute bottom-0 right-0 w-48 h-12 bg-[#0a0a0a] pointer-events-none" />
        </div>

        {/* Content — layered above the orb at z-10 */}
        <div className="relative z-10">
          <About />
          <Skills />
          <Experience />
          <Certifications />
          <Projects />
          <LatestBlogs />
          <Contact />
        </div>

      </div>
    </main>
  );
}
