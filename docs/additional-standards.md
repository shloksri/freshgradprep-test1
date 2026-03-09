# Additional Standards and Conventions

This document covers project-wide standards not covered in the other guides.

---

## Theme System — How It Works

This project uses a **4-color theme system** that makes it easy to swap entire color palettes.

### The 4 Colors

Every theme in `src/theme/colorThemes.ts` has exactly 4 properties:

```ts
interface ColorTheme {
  primary: string;    // Navbar, headings, footer background, outlined buttons
  secondary: string;  // Alternate section backgrounds, subtle card fills
  accent: string;     // Badges, chips, decorative elements, icons
  highlight: string;  // CTA buttons, urgent callouts, key actions
}
```

### How to Add a New Theme

1. Open `src/theme/colorThemes.ts`.
2. Add a new object:

```ts
export const myNewTheme: ColorTheme = {
  primary: '#1a1a2e',
  secondary: '#e2e2e2',
  accent: '#0f3460',
  highlight: '#e94560',
};
```

3. Add it to the `themeList` array:

```ts
export const themeList = [
  ...existingThemes,
  { name: 'My New Theme', colors: myNewTheme },
];
```

4. The theme preview widget will automatically pick it up.

### How to Change the Default Theme

In `src/App.tsx`, change the `useState` initializer:

```ts
const [activeColors, setActiveColors] = useState<ColorTheme>(myNewTheme);
```

---

## Accessibility Standards

- Use semantic HTML elements: `<section>`, `<nav>`, `<footer>`, `<main>`.
- Every section component uses `component="section"` and `aria-label`.
- All interactive elements must be keyboard-accessible.
- Images must have `alt` text.
- Form fields must have labels (when forms are added).
- Color contrast must meet WCAG AA (4.5:1 for text).

---

## Responsive Design

- **Mobile-first approach** — start with `xs` values, override for larger screens.
- Use MUI `sx` breakpoint objects, not CSS media queries.
- The navbar collapses to a hamburger drawer below `md` (900px).
- Grid items use responsive `size` props: `size={{ xs: 12, sm: 6, md: 4 }}`.
- Typography scales responsively: `fontSize: { xs: '1.75rem', md: '2.25rem' }`.

---

## Section Background Pattern

Sections alternate between two backgrounds for visual rhythm:

| Section          | Background              |
| ---------------- | ----------------------- |
| Hero             | `background.default` (white) |
| Problem          | `secondary.main` (cream)     |
| About            | `background.default` (white) |
| Audience         | `secondary.main` (cream)     |
| Impact           | `primary.main` (dark blue — special) |
| Services         | `background.default` (white) |
| Founder          | `secondary.main` (cream)     |
| Testimonials     | `background.default` (white) |
| Booking          | `primary.main` (dark blue — special) |
| Contact          | `secondary.main` (cream)     |

Impact and Booking sections use the dark `primary.main` background with white text for visual emphasis.

---

## Button Hierarchy

The project uses a consistent two-tier button system:

1. **Primary CTA** — `highlight.main` background (red-orange). Used for the most important action on screen.
2. **Secondary CTA** — `primary.main` outlined. Used for secondary actions.

Never mix this hierarchy. There should be at most one highlight-colored button per visible viewport.

---

## Smooth Scroll Navigation

- The navbar links use `href="#sectionId"` anchors.
- Each section has a matching `id` attribute (e.g. `id="services"`).
- Smooth scrolling is enabled globally via `scroll-behavior: smooth` in the `MuiCssBaseline` override.
- No JavaScript scroll libraries are needed.

---

## Git and Collaboration

- Commit frequently with clear messages.
- Don't commit `node_modules/`, `dist/`, or `.env` files (covered by `.gitignore`).
- Run `npm run build` before pushing to verify the build passes.
- Run the TypeScript check with `npx tsc -b --noEmit` to catch type errors early.

---

## Review-Only Features

The `ThemePreviewWidget` is a review/demo utility, not a production feature. It is controlled by:

```ts
// src/App.tsx
const enableThemePreview = true;  // Set to false to disable
```

When ready for production, set this to `false` or remove the widget component entirely.

---

## Scripts

| Command           | Purpose                              |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start Vite dev server (hot reload)   |
| `npm run build`    | TypeScript check + production build  |
| `npm run preview`  | Preview the production build locally |
| `npm run lint`     | Run ESLint                           |
