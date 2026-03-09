# Folder Structure — What Each Folder Means

This document explains the project's folder organization and what belongs where.

---

## Top-Level Overview

```
freshgradprep/
├── docs/                    → Project documentation (you are here)
├── public/                  → Static files served as-is by Vite
├── src/                     → All application source code
│   ├── assets/              → Images, logos, and static media
│   ├── components/          → Reusable UI components (sections, widgets)
│   ├── data/                → Editable content (text, links, prices)
│   ├── hooks/               → Custom React hooks (if any)
│   ├── pages/               → Page-level components (compose sections)
│   ├── theme/               → MUI theme, color palette definitions
│   ├── types/               → Shared TypeScript interfaces (if any)
│   ├── App.tsx              → Root component (ThemeProvider, routing)
│   ├── main.tsx             → Vite entry point (renders App)
│   └── index.css            → Minimal global CSS resets
├── index.html               → HTML shell (Google Fonts loaded here)
├── package.json             → Dependencies and scripts
├── vite.config.ts           → Vite build configuration
├── tsconfig.json            → TypeScript configuration
└── .cursor/rules/           → AI assistant coding rules
```

---

## Detailed Breakdown

### `src/components/`

All reusable UI components. Each file is one component with a default export.

```
components/
├── Navbar.tsx                → Sticky navigation bar
├── HeroSection.tsx           → Hero banner with headline + CTAs
├── ProblemSection.tsx        → Problem statement cards
├── AboutSection.tsx          → About FreshGradPrep description
├── AudienceSection.tsx       → Target audience cards
├── ImpactSection.tsx         → Stats/counters section
├── ServicesSection.tsx       → Service cards grid
├── FounderSection.tsx        → Founder bio section
├── TestimonialsSection.tsx   → Auto-rotating testimonials
├── BookingSection.tsx        → Booking CTA block
├── ContactSection.tsx        → Contact information cards
├── Footer.tsx                → Site footer
├── ThemePreviewWidget.tsx    → Review-only theme switcher (removable)
└── SampleComponent.tsx       → Reference component for new contributors
```

**Naming rule:** PascalCase, one component per file, default export.

### `src/data/`

Plain TypeScript files containing editable content. No JSX, no styling.

```
data/
├── navbarContent.ts
├── heroContent.ts
├── problemContent.ts
├── aboutContent.ts
├── audienceContent.ts
├── impactContent.ts
├── servicesContent.ts
├── founderContent.ts
├── testimonialsContent.ts
├── bookingContent.ts
├── contactContent.ts
├── footerContent.ts
└── sampleData.ts
```

**Naming rule:** camelCase, one export per file, file name matches the export name.

### `src/pages/`

Page-level components that compose multiple sections into a full page.

```
pages/
└── LandingPage.tsx          → Imports and orders all 12 section components
```

Pages don't contain layout logic themselves — they simply stack section components in order.

### `src/theme/`

MUI theme configuration and color palette definitions.

```
theme/
├── colorThemes.ts           → Color palette objects (4 colors each)
└── theme.ts                 → MUI createTheme factory + typography + overrides
```

- `colorThemes.ts` is where you change hex codes to test new color combinations.
- `theme.ts` maps those 4 colors into MUI's full palette system.

### `src/assets/`

Static images and media files.

```
assets/
├── FGP_Logo_BGremoved.png   → Logo with transparent background
├── FGP_Logo_BGwhite.jpeg    → Logo with white background
└── react.svg                → Default Vite asset (can be removed)
```

### `src/hooks/`

Custom React hooks (created as needed). Currently empty.

### `src/types/`

Shared TypeScript interfaces used across multiple files (created as needed). Currently empty.

---

## Where to Put New Files

| You're building...            | Put it in...         | File name          |
| ----------------------------- | -------------------- | ------------------ |
| A new landing page section    | `src/components/`    | `NewSection.tsx`   |
| Content for that section      | `src/data/`          | `newSectionContent.ts` |
| A new full page               | `src/pages/`         | `NewPage.tsx`      |
| A reusable hook               | `src/hooks/`         | `useNewHook.ts`    |
| A shared interface            | `src/types/`         | `newType.ts`       |
| An image or logo              | `src/assets/`        | `image.png`        |
| A new color theme             | `src/theme/colorThemes.ts` | (add to existing file) |
