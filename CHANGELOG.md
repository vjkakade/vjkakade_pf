# Changelog

All notable changes to the Vijay Kakade Portfolio project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Future Edits Template]
*When making future changes, add a new section below with date, category, and affected files.*

```markdown
## [YYYY-MM-DD] - Brief Title
### Added / Changed / Fixed / Removed
- **Feature/Fix Name**: Description of what was changed and why.
- **Affected Files**:
  - `path/to/file.tsx`: Short description of change.
- **Performance / Verification**: Notes on build status (`npm run build`) or test results.
```

---

## [2026-11-16] - Dead Media Cleanup, GPU Pass Elimination & RAF Debounce
### Removed
- **Orphan Media Assets (14.31 MB)**: Cleaned up 9 unreferenced media files left over in `public/blog/` after prior blog removals (`ai-engineer-roadmap.mp4`, 4 day-series cover PNGs, and 4 article illustration PNGs).
- **Stray Files & Unused Fonts**: Removed root `source` shell artifact and unused default fonts in `app/fonts/` (`GeistVF.woff`, `GeistMonoVF.woff`).
- **GPU Backdrop Blurs**: Removed redundant `backdrop-blur-md` on 13 certification cards (`components/Certifications.tsx`) and 2 project cards (`components/Projects.tsx`), saving 15 GPU blur passes per scroll frame.

### Changed
- **ScrollyCanvas RAF Queue Debounce**: Added `rafIdRef` cancellation to cancel outdated pending animation frames during rapid scroll scrub, ensuring only the freshest frame is rendered.
- **Snappier Page Transitions**: Reduced route navigation fade in `app/template.tsx` from `0.7s` to `0.3s` for immediate responsiveness.
- **Lazy-Loaded Analytics**: Changed Google Tag Manager and Analytics strategy in `app/layout.tsx` to `strategy="lazyOnload"` to avoid blocking initial hydration.

### Verification
- `npm run lint` — 0 warnings, 0 errors.
- `npm run build` — 20/20 static pages compiled successfully.

---

## [2026-11-16] - Batch Media Asset Compression (31.66 MB Saved)
### Changed
- **Gallery Images Batch Compression**: Batch compressed all 58 images in `public/gallery/` using high-quality bicubic interpolation and quality 80 encoding, capping max dimensions at 1440px while maintaining identical filenames, aspect ratios, and visual clarity.
  - **Result**: Reduced gallery total size from **38.82 MB down to 7.15 MB** (**31.66 MB saved / 81.6% reduction**).
  - **Affected Directory**: `public/gallery/*.jpg` (58 files)
- **Verification**: `npm run lint` — 0 warnings, 0 errors.

---

## [2026-11-16] - Performance & Scrolling Smoothness Overhaul

### Removed
- **Spline 3D Orb Background**: Removed external `<iframe>` (`https://my.spline.design/orb-sWCiCwCK9EmhXNMo2lHmasXc/`) from `app/page.tsx`.
  - **Reason**: The iframe loaded an external 3D WebGL engine and assets (10MB–25MB+), continuously running a 60 FPS GPU render loop even when idle, causing heavy lag and high battery/CPU consumption.
  - **Affected File**: `app/page.tsx`

### Changed
- **Solid Section Backgrounds (`#121212`)**: Reverted all body sections from `bg-[#121212]/60` back to solid `bg-[#121212]`.
  - **Reason**: Transparent backgrounds forced the browser compositor to blend complex DOM layers with backdrop filters over the WebGL background on every scroll frame. Solid backgrounds eliminate this compositing bottleneck.
  - **Affected Files**:
    - `components/About.tsx`
    - `components/Skills.tsx`
    - `components/Experience.tsx`
    - `components/Certifications.tsx`
    - `components/Projects.tsx`
    - `components/LatestBlogs.tsx`
    - `components/Contact.tsx`

- **ScrollyCanvas Network & Memory Architecture**:
  - **`useRef` Frame Storage**: Replaced React state `useState<HTMLImageElement[]>` with `useRef<(HTMLImageElement | null)[]>`. Drawing directly to canvas context eliminates unnecessary React reconciliation and re-render cycles.
  - **Staggered / Prioritized Image Loading**:
    - Frame 0 loads immediately to paint the first pixel on screen.
    - Frames 1–20 load immediately after for responsive initial hero scrolling.
    - Frames 21–119 load in batches of 15 using `requestIdleCallback`, preventing network queue saturation and leaving bandwidth open for fonts, CSS, and page scripts.
  - **Nearest-Frame Fallback**: Scrubbing before all 120 frames finish loading smoothly renders the closest available cached frame instead of dropping frames or flashing blank.
  - **Resize Handler Decoupling**: Removed `images` from resize effect dependencies.
  - **Affected File**: `components/ScrollyCanvas.tsx`

- **Custom Cursor Zero-React-Render Architecture**:
  - **Direct Motion Values**: Replaced `useState({ x, y })` with Framer Motion `useMotionValue` and `useSpring`. Coordinates update directly via GPU transform styles without triggering 60–144Hz React component re-renders.
  - **Removed `mix-blend-difference`**: Eliminated full-screen framebuffer readbacks and repaint thrashing.
  - **Delegated Event Listener**: Replaced individual `querySelectorAll` event listeners with a single delegated listener on `document`.
  - **Fine Pointer Detection**: Cursor only activates on devices matching `(pointer: fine)`.
  - **Affected File**: `components/Cursor.tsx`

- **Scroll Helper Optimization**:
  - Added `{ passive: true }` to scroll listeners.
  - State changes only fire when crossing the 500px scroll threshold rather than continuously updating on every scroll tick.
  - **Affected File**: `components/ScrollHelper.tsx`

### Verification
- `npm run lint` — 0 warnings, 0 errors.
- `npm run build` — 20/20 static pages compiled successfully.

---

## [2026-07-22] - Blog Series Cleanup & Maintenance
### Changed
- Removed draft/transitional Day 1–4 blog series entries from `utils/blogs.ts`.
- Refined active blog list and updated static generation routes.

---

## [2026-07-21] - Design Polish & Sitemap Alignment
### Changed
- Updated sitemap priority and accurate modification dates in `app/sitemap.ts`.
- Sharpened button border radius and hover states across cards.

---

## [2026-07-15] - Hero & High-DPI Canvas Review
### Fixed
- Fixed Device Pixel Ratio (DPR) double-scaling in `components/ScrollyCanvas.tsx` to eliminate blurriness on Retina / HiDPI displays.
- Replaced placeholder hero copy with Cloud and AI messaging in `components/Overlay.tsx`.
- Removed redundant category filter from `components/Projects.tsx`.
- Standardized typography and heading hierarchy across `About.tsx` and `Skills.tsx`.
