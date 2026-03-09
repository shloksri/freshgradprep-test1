# Coding Standards — TypeScript + React Components

This document defines how every React component in this project must be written.

---

## Core Rules

1. **Functional components only** — no class components (the only exception is `ErrorBoundary.tsx`).
2. **Arrow function syntax** — do not use `function` declarations or `React.FC`.
3. **TypeScript everywhere** — every component and hook file is `.tsx` / `.ts`.
4. **No `any`** — all values, props, and event handlers must be typed.

---

## Naming Conventions

| Item               | Convention   | Example                      |
| ------------------ | ------------ | ---------------------------- |
| Component files    | PascalCase   | `HeroSection.tsx`            |
| Data files         | camelCase    | `heroContent.ts`             |
| Hook files         | camelCase    | `useStudentDataForm.ts`    |
| Component names    | PascalCase   | `const HeroSection = () =>…` |
| Props / variables  | camelCase    | `heroContent`, `isLoading`   |
| Props interfaces   | PascalCase   | `HeroSectionProps`           |
| Custom hooks       | `use` prefix | `useUser`, `useFormState`    |

---

## File Layout Order

Every component file must follow this exact order:

```
1. Imports (React, MUI, icons, data, types)
2. Interfaces / types
3. Arrow-function component
4. Default export
```

---

## Props Interface

Every component that accepts props must define a `ComponentNameProps` interface:

```tsx
interface UserCardProps {
  name: string;
  email: string;
  onEdit?: () => void;
}
```

- Use `interface` (not `type`) for object shapes.
- Optional props use `?`.

---

## Full Component Example

This is the canonical pattern every component in this project follows:

```tsx
// 1. Imports
import { Box, Typography, Button } from '@mui/material';

// 2. Interfaces
interface FeatureCardProps {
  title: string;
  description: string;
  onLearnMore?: () => void;
}

// 3. Component (arrow function, destructured props)
const FeatureCard = ({ title, description, onLearnMore }: FeatureCardProps) => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="h5" sx={{ color: 'primary.main', mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
        {description}
      </Typography>
      {onLearnMore && (
        <Button variant="outlined" onClick={onLearnMore}>
          Learn More
        </Button>
      )}
    </Box>
  );
};

// 4. Default export
export default FeatureCard;
```

---

## Hooks

Custom hooks live in `src/hooks/` and must:

- Start with `use` (e.g. `useFormState`).
- Return a typed object using an interface.
- Use `useState`, `useCallback`, `useEffect` etc. — no class-based lifecycle.

```ts
import { useState, useCallback } from 'react';

interface UseCounterReturn {
  count: number;
  increment: () => void;
  reset: () => void;
}

const useCounter = (initial: number = 0): UseCounterReturn => {
  const [count, setCount] = useState(initial);

  const increment = useCallback(() => setCount((c) => c + 1), []);
  const reset = useCallback(() => setCount(initial), [initial]);

  return { count, increment, reset };
};

export default useCounter;
```

---

## Key Don'ts

- **Don't** use `React.FC` — just type the props directly.
- **Don't** use `any` — find or create the correct type.
- **Don't** use class components (except the error boundary).
- **Don't** hardcode colors or content inside components — use the theme and data files.
- **Don't** use raw `<p>`, `<span>`, `<h1>` tags — use MUI `Typography`.
- **Don't** use inline pixel values for spacing — use MUI's theme spacing (`sx={{ mt: 2 }}`).
