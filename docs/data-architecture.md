# Data Architecture — Content Separated from Components

This project strictly separates **editable content** from **component rendering logic**. All text, links, labels, and structured data live in the `src/data/` folder. Components import from these files and render dynamically.

---

## Why This Architecture?

1. **Non-developers can edit content** — changing a heading, price, or testimonial requires editing only a data file, never a component file.
2. **No risk of breaking UI** — data files contain plain objects and arrays, no JSX or styling.
3. **Single source of truth** — each section's content lives in exactly one file.
4. **Future-ready** — data files can later be replaced by a CMS, API, or database without changing components.

---

## Folder Structure

```
src/data/
├── navbarContent.ts         → Navbar links, brand name, CTA
├── heroContent.ts           → Hero headline, subheadline, CTAs, trust chips
├── problemContent.ts        → Problem cards and transition text
├── aboutContent.ts          → About paragraphs and highlights
├── audienceContent.ts       → Audience persona cards
├── impactContent.ts         → Stats/counters
├── servicesContent.ts       → Service cards (title, price, duration, CTA)
├── founderContent.ts        → Founder bio, highlights
├── testimonialsContent.ts   → Testimonial entries
├── bookingContent.ts        → Booking CTA text, Calendly/WhatsApp links
├── contactContent.ts        → Contact form link, WhatsApp, email
├── footerContent.ts         → Footer links, copyright, community link
└── sampleData.ts            → Sample/reference data file for new contributors
```

---

## How a Data File Works

Each data file exports a single `const` object (or object + interface). Here is a real example:

### `src/data/aboutContent.ts`

```ts
export const aboutContent = {
  title: 'What is FreshGradPrep?',
  paragraphs: [
    'FreshGradPrep is a career clarity platform...',
    'Everything here is practical, structured...',
    'Whether you are a student preparing...',
  ],
  highlights: [
    'Real HR insights from actual hiring experience',
    'Practical guidance — not theory or templates',
    'Structured career clarity for every stage',
  ],
};
```

### The matching component: `src/components/AboutSection.tsx`

```tsx
import { aboutContent } from '../data/aboutContent';

const AboutSection = () => {
  return (
    <>
      <Typography variant="h2">{aboutContent.title}</Typography>

      {aboutContent.paragraphs.map((paragraph, idx) => (
        <Typography key={idx} variant="body1">{paragraph}</Typography>
      ))}

      {aboutContent.highlights.map((item) => (
        <Typography key={item}>{item}</Typography>
      ))}
    </>
  );
};
```

---

## Rules for Data Files

1. **One export per file** — each data file exports one `const` object.
2. **File name matches export name** — `heroContent.ts` exports `heroContent`.
3. **camelCase file names** — e.g. `servicesContent.ts`, not `ServicesContent.ts`.
4. **No JSX** — data files contain only plain objects, arrays, and strings.
5. **No styling** — no `sx`, no MUI imports, no colors.
6. **Interfaces for complex shapes** — if a data file has repeated items (like service cards), define an `interface` in the same file:

```ts
export interface ServiceItem {
  title: string;
  description: string;
  duration: string;
  price: string;
  ctaLabel: string;
  ctaHref: string;
}

export const servicesContent = {
  title: 'Services Offered',
  services: [
    { title: 'Resume Revamp Express', ... },
    { title: 'LinkedIn Visibility Boost', ... },
  ] as ServiceItem[],
};
```

---

## How Components Consume Data

Components use two main patterns:

### Pattern 1: Direct object access

For simple values like titles and descriptions:

```tsx
<Typography variant="h2">{heroContent.headline}</Typography>
<Typography variant="body1">{heroContent.subheadline}</Typography>
```

### Pattern 2: `.map()` for arrays

For lists of cards, links, testimonials, etc.:

```tsx
{servicesContent.services.map((service) => (
  <Card key={service.title}>
    <Typography>{service.title}</Typography>
    <Typography>{service.price}</Typography>
  </Card>
))}
```

---

## How to Add New Content

### To update existing text:

1. Open the relevant data file (e.g. `src/data/heroContent.ts`).
2. Change the string value.
3. Save. The component picks it up automatically.

### To add a new section:

1. Create `src/data/newSectionContent.ts` with your content.
2. Create `src/components/NewSection.tsx` that imports from it.
3. Add `<NewSection />` to `src/pages/LandingPage.tsx` in the desired position.

See `src/data/sampleData.ts` and `src/components/SampleComponent.tsx` for a complete working example.
