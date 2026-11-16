# Custom Agent Rules for Portfolio Project

## 1. Mandatory Change Logging for Future Edits
- **Always update `CHANGELOG.md`**: Whenever you make edits, additions, refactors, or removals in this codebase, you **MUST** record the change in [CHANGELOG.md](file:///d:/Projects/vjkakade_pf/CHANGELOG.md) under a new date section using the provided template:
  - Date and brief descriptive title.
  - Category (`Added`, `Changed`, `Fixed`, `Removed`).
  - Bulleted list of what was changed and the reasoning behind it.
  - List of affected file paths.
  - Verification results (`npm run lint` / `npm run build`).

## 2. Testing & Token Conservation
- **Do not use token-intensive testing tools** (such as spawning a `browser_subagent` or performing heavy web automation checks) unless explicitly asked by the user.
- **Show changes to the user for validation**: Provide code diffs, links to generated files, or screenshots when available, and ask the user to validate the changes on their end (e.g., running localhost or visiting the deployed site) instead of running automated agent validations.

## 3. Performance & Architecture Guidelines
- **Zero-Lag Backgrounds**: Keep main body sections on solid `#121212`. Avoid full-page continuous WebGL loops, heavy third-party 3D iframes, or global `backdrop-filter` transparency layers that degrade scrolling performance.
- **ScrollyCanvas Image Sequences**: Always keep image references in `useRef` (never in React state) to prevent unnecessary re-render cascades. Maintain chunked/staggered loading so the browser's HTTP connection pool is never saturated.
- **High-Frequency Events (Mouse, Scroll)**: Never update React `useState` on raw `mousemove` or unthrottled `scroll` events. Use Framer Motion's `useMotionValue` / `useSpring` or passive event listeners with threshold checks.
- **Build Verification**: Ensure `npm run lint` and `npm run build` pass before completing any task.
