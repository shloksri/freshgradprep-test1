# MUI Guide — How to Write MUI Code in This Project

This project uses **MUI v7** with Emotion for styling. All visual styling flows through the MUI theme defined in `src/theme/theme.ts`.

---

## Golden Rule

**Never hardcode colors.** Every color in every component must come from the theme palette.

```tsx
// CORRECT — uses theme tokens
<Typography sx={{ color: 'primary.main' }}>Hello</Typography>
<Box sx={{ backgroundColor: 'secondary.main' }}>...</Box>
<Button sx={{ backgroundColor: 'highlight.main' }}>CTA</Button>

// WRONG — hardcoded hex values
<Typography sx={{ color: '#043a7e' }}>Hello</Typography>
<Box sx={{ backgroundColor: '#e8e3cc' }}>...</Box>
```

---

## Available Palette Colors

The theme provides 6 palette groups. Use them via string tokens in `sx`:

| Token              | Purpose                                       | Example usage               |
| ------------------ | --------------------------------------------- | --------------------------- |
| `primary.main`     | Navbar, headings, outlined buttons, footer bg  | `color: 'primary.main'`    |
| `secondary.main`   | Alternate section backgrounds, subtle cards    | `backgroundColor: 'secondary.main'` |
| `accent.main`      | Badges, chips, decorative highlights           | `color: 'accent.main'`     |
| `accent.light`     | Subtle accent backgrounds (15% opacity)        | `backgroundColor: 'accent.light'` |
| `highlight.main`   | CTA buttons, urgent callouts                   | `backgroundColor: 'highlight.main'` |
| `highlight.light`  | Subtle highlight backgrounds (10% opacity)     | `backgroundColor: 'highlight.light'` |
| `text.primary`     | Main body text                                 | `color: 'text.primary'`    |
| `text.secondary`   | Secondary/supporting text                      | `color: 'text.secondary'`  |
| `background.default` | White page background                        | `backgroundColor: 'background.default'` |
| `divider`          | Borders and dividers                           | `borderColor: 'divider'`   |

---

## The `sx` Prop — Primary Styling Method

We use the `sx` prop for all component-level styles. Key patterns:

### Spacing (uses theme.spacing, 1 unit = 8px)

```tsx
<Box sx={{ p: 3, mt: 2, mb: 4, px: { xs: 2, md: 4 } }} />
// p: 3  = padding: 24px
// mt: 2 = margin-top: 16px
```

### Responsive values

```tsx
<Box
  sx={{
    py: { xs: 6, md: 10 },          // vertical padding: 48px mobile, 80px desktop
    fontSize: { xs: '1.5rem', md: '2.25rem' },
    flexDirection: { xs: 'column', md: 'row' },
    display: { xs: 'none', md: 'flex' },  // hide on mobile
  }}
/>
```

Breakpoints: `xs` (0px+), `sm` (600px+), `md` (900px+), `lg` (1200px+), `xl` (1536px+).

### Colors from theme

```tsx
<Box
  sx={{
    color: 'primary.main',
    backgroundColor: 'secondary.main',
    borderColor: 'divider',
  }}
/>
```

---

## Typography

Always use MUI `Typography` — never raw HTML heading/paragraph tags.

Available variants configured in our theme:

| Variant     | Font             | Weight | Use for                     |
| ----------- | ---------------- | ------ | --------------------------- |
| `h1`        | Plus Jakarta Sans | 700   | Hero headline               |
| `h2`        | Plus Jakarta Sans | 700   | Section titles              |
| `h3`        | Plus Jakarta Sans | 600   | Sub-section titles          |
| `h4`        | Plus Jakarta Sans | 600   | Card titles, prices         |
| `h5`        | Plus Jakarta Sans | 600   | Card headings, small titles |
| `h6`        | Plus Jakarta Sans | 600   | Labels, small headings      |
| `subtitle1` | DM Sans           | 500   | Subheadlines                |
| `subtitle2` | DM Sans           | 500   | Small subtext               |
| `body1`     | DM Sans           | 400   | Main body text              |
| `body2`     | DM Sans           | 400   | Secondary body text         |
| `caption`   | DM Sans           | 400   | Fine print, footnotes       |
| `button`    | Plus Jakarta Sans | 600   | Button labels               |

```tsx
<Typography variant="h2" sx={{ color: 'primary.main', mb: 4 }}>
  Section Title
</Typography>
<Typography variant="body1" sx={{ color: 'text.secondary' }}>
  Description paragraph text goes here.
</Typography>
```

---

## Layout Components

### Container

Wraps section content with a max-width. Already defaulted to `maxWidth="lg"` in theme.

```tsx
<Container>
  {/* Section content */}
</Container>
```

### Grid (MUI v7 syntax)

Use the v7 `size` prop for responsive grids:

```tsx
<Grid container spacing={3}>
  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
    <Card>...</Card>
  </Grid>
</Grid>
```

### Stack

For simple flex layouts with consistent spacing:

```tsx
<Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
  <Chip label="Tag 1" />
  <Chip label="Tag 2" />
</Stack>
```

---

## Section Pattern

Every landing page section follows this pattern:

```tsx
<Box
  component="section"
  id="section-id"              // for smooth scroll navigation
  aria-label="Section name"    // for accessibility
  sx={{
    py: { xs: 8, md: 10 },    // consistent vertical padding
    backgroundColor: 'background.default',  // or 'secondary.main' for alternating
  }}
>
  <Container>
    {/* Section content */}
  </Container>
</Box>
```

- Use `component="section"` for semantic HTML.
- Add `id` for navbar anchor links.
- Add `aria-label` for screen readers.
- Alternate between `'background.default'` (white) and `'secondary.main'` (cream) for visual rhythm.

---

## Buttons

Button hierarchy in this project:

```tsx
// Primary CTA — uses highlight color (red-orange)
<Button
  variant="contained"
  sx={{
    backgroundColor: 'highlight.main',
    '&:hover': { backgroundColor: 'highlight.dark', opacity: 0.9 },
  }}
>
  Book Now
</Button>

// Secondary CTA — uses primary color (blue), outlined
<Button
  variant="outlined"
  sx={{
    borderColor: 'primary.main',
    color: 'primary.main',
  }}
>
  Learn More
</Button>
```

---

## Cards

Cards get hover effects automatically from the theme override (`MuiCard` in `theme.ts`):

```tsx
<Card sx={{ height: '100%', border: '1px solid', borderColor: 'divider' }}>
  <CardContent sx={{ p: 3 }}>
    <Typography variant="h5" sx={{ color: 'primary.main' }}>
      Card Title
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Card description.
    </Typography>
  </CardContent>
</Card>
```

The theme already applies: `borderRadius: 16`, subtle shadow, and `translateY(-4px)` on hover.

---

## Icons

Import from `@mui/icons-material`:

```tsx
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

<CheckCircleOutlineIcon sx={{ color: 'accent.main', fontSize: 22 }} />
```

Keep icon usage minimal and purposeful.
