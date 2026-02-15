# FortiEscrow Landing Page - Developer Guide

## Quick Start

### Structure Overview

```
src/
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page (imports all sections)
│   └── globals.css        # Tailwind + globals
├── components/
│   └── sections/          # All landing page sections
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── SolutionSection.tsx
│       ├── ArchitectureSection.tsx
│       ├── SecuritySection.tsx
│       ├── UseCasesSection.tsx
│       ├── RoadmapSection.tsx
│       ├── CTASection.tsx
│       ├── FAQSection.tsx
│       ├── NewsletterSection.tsx
│       └── Footer.tsx
└── content/
    └── landing.ts         # All copy (centralized for easy updates)
```

## Editing Copy

All landing page content is centralized in `src/content/landing.ts`. This makes it easy to:
- Update copy without touching React components
- Track copy changes in git
- A/B test different messaging

### Example: Update Hero Headline

```typescript
// src/content/landing.ts
export const landingContent = {
  hero: {
    headline: "Your new headline here",
    // ... rest stays the same
  }
}
```

The `HeroSection` component automatically uses this:

```typescript
// src/components/sections/HeroSection.tsx
const { headline } = landingContent.hero

// headline is automatically updated everywhere it's used
```

## Component Architecture

### Section Components

Each section is self-contained:
- Imports content from `src/content/landing.ts`
- Handles its own styling (Tailwind classes)
- Can be imported and used independently

### Example: Add a New Section

```typescript
// src/components/sections/MyNewSection.tsx
import { landingContent } from "@/content/landing"

export function MyNewSection() {
  const { headline, content } = landingContent.mySection

  return (
    <section className="py-24 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">{headline}</h2>
        {/* Your content */}
      </div>
    </section>
  )
}
```

Then add it to `src/app/page.tsx`:

```typescript
import { MyNewSection } from "@/components/sections/MyNewSection"

export default function Home() {
  return (
    <main className="w-full">
      {/* ... existing sections ... */}
      <MyNewSection />
    </main>
  )
}
```

## Styling System

### Colors

```css
/* From tailwind.config.ts */
colors: {
  primary: '#1a1a1a',      /* Main background */
  secondary: '#404040',     /* Lighter backgrounds */
}
```

### Component Classes

Built-in utility classes in `src/app/globals.css`:

```css
.container-center    /* max-width container + padding */
.btn-primary        /* Blue CTA button */
.btn-secondary      /* Ghost button */
```

### Responsive Classes

All sections use Tailwind responsive prefixes:

```typescript
<div className="grid md:grid-cols-2 gap-8">
  {/* 1 column on mobile, 2 on desktop */}
</div>
```

## Adding Interactive Elements

### Newsletter Form

Currently static. To make it functional:

```typescript
// src/components/sections/NewsletterSection.tsx
"use client"

import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Call your API here
    await fetch("/api/newsletter", { 
      method: "POST",
      body: JSON.stringify({ email })
    })
  }

  return (
    // ... form with handleSubmit
  )
}
```

### Expandable FAQ

Currently uses `<details>` HTML element (works without JS). To add custom behavior:

```typescript
"use client"

import { useState } from "react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    faq.map((item, idx) => (
      <button
        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
        className={openIndex === idx ? "open" : ""}
      >
        {/* ... */}
      </button>
    ))
  )
}
```

## Adding New Copy Sections

### Step 1: Update Content File

```typescript
// src/content/landing.ts
export const landingContent = {
  // ... existing sections ...
  myNewSection: {
    headline: "My Headline",
    content: "My content",
    // ... more fields
  }
}
```

### Step 2: Create Component

```typescript
// src/components/sections/MyNewSection.tsx
import { landingContent } from "@/content/landing"

export function MyNewSection() {
  const { headline, content } = landingContent.myNewSection
  
  return (
    <section className="py-24 px-4 bg-primary">
      {/* ... */}
    </section>
  )
}
```

### Step 3: Import in Page

```typescript
// src/app/page.tsx
import { MyNewSection } from "@/components/sections/MyNewSection"

export default function Home() {
  return (
    <main className="w-full">
      {/* ... */}
      <MyNewSection />
    </main>
  )
}
```

## Type Safety

TypeScript types for content are in `src/types/content.ts`:

```typescript
export type LandingContent = {
  hero: {
    headline: string
    subheading: string
    // ...
  }
  // ... rest of sections
}
```

Use this to ensure content matches component expectations:

```typescript
import type { LandingContent } from "@/types/content"

const content: LandingContent = landingContent
```

## Performance Optimization

### Image Optimization

When adding images to `public/`:

```typescript
import Image from "next/image"

export function HeroSection() {
  return (
    <Image
      src="/logo.svg"
      alt="FortiEscrow Logo"
      width={100}
      height={100}
    />
  )
}
```

### Code Splitting

Sections are automatically code-split. Each is a separate component so Next.js can lazy-load them.

### CSS Optimization

Tailwind is configured to purge unused styles in `tailwind.config.ts`:

```typescript
content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
```

## Deployment

### Build

```bash
npm run build
```

Checks for TypeScript errors and optimizes for production.

### Start

```bash
npm start
```

Serves optimized production build locally on `:3000`.

### Deploy to Vercel

Connect GitHub repo to Vercel. Auto-deploys on push to `main`.

```bash
git push origin main
```

## A/B Testing

### Option 1: Feature Flags

```typescript
const HEADLINE_VARIANT = process.env.NEXT_PUBLIC_HEADLINE_VARIANT || "A"

const headlineA = "Escrow Infrastructure for Web3"
const headlineB = "Protocol-Level Atomic Settlement"

const headline = HEADLINE_VARIANT === "A" ? headlineA : headlineB
```

Then set environment variable in deployment:

```bash
NEXT_PUBLIC_HEADLINE_VARIANT=B npm run build
```

### Option 2: URL Parameters

```typescript
import { useSearchParams } from "next/navigation"

export function HeroSection() {
  const searchParams = useSearchParams()
  const variant = searchParams.get("variant") || "a"

  const headline = variant === "b" ? "Variant B" : "Variant A"
  // ...
}
```

Test with: `example.com/?variant=b`

## Analytics Integration

### Google Analytics

Add to `src/app/layout.tsx`:

```typescript
import Script from "next/script"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_ID');
            `,
          }}
        />
      </Script>
      <body>{children}</body>
    </html>
  )
}
```

### Event Tracking

Track button clicks:

```typescript
const handleCTAClick = () => {
  if (window.gtag) {
    window.gtag('event', 'cta_click', {
      button_name: 'see_architecture',
      scroll_depth: window.scrollY
    })
  }
}
```

## Debugging

### Development Mode

```bash
npm run dev
```

Runs on `http://localhost:3000` with hot reload.

### Production Debug

```bash
npm run build
npm start
```

Test with production optimizations locally.

### TypeScript Errors

```bash
npx tsc --noEmit
```

Check for type errors without building.

## Common Tasks

### Update Copy Without Changing Layout

Edit `src/content/landing.ts` only. Components automatically use updated content.

### Change Section Order

Reorder imports in `src/app/page.tsx`:

```typescript
export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <SecuritySection />      {/* Moved up */}
      <ProblemSection />
      {/* ... */}
    </main>
  )
}
```

### Hide a Section Temporarily

Remove from `src/app/page.tsx`:

```typescript
// Comment out or delete this line:
// <ProblemSection />
```

### Add a New Color

Update `tailwind.config.ts`:

```typescript
colors: {
  primary: '#1a1a1a',
  secondary: '#404040',
  accent: '#ff6b35',  // New color
}
```

Then use in components:

```typescript
<div className="bg-accent">...</div>
```

## Need Help?

- **Content questions**: See `MARKETING_STRATEGY.md`
- **Component issues**: Check `src/components/sections/` examples
- **Styling**: Reference `tailwind.config.ts` and `src/app/globals.css`
- **Next.js docs**: https://nextjs.org/docs
