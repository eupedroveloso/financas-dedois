<!-- refreshed: 2026-05-16 -->
# Architecture

**Analysis Date:** 2026-05-16

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                     Browser / Client                        │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTP Request
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                  Next.js App Router (v16)                   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Root Layout                            │   │
│  │              `app/layout.tsx`                       │   │
│  │  - Fonts (Geist Sans, Geist Mono)                   │   │
│  │  - Global CSS (`app/globals.css`)                   │   │
│  │  - HTML shell                                       │   │
│  └────────────────────┬────────────────────────────────┘   │
│                       │ renders children                    │
│                       ▼                                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Page Component                         │   │
│  │              `app/page.tsx`                         │   │
│  │  - Route: /                                         │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                 Static Assets                               │
│                 `public/`                                   │
│  next.svg, vercel.svg, file.svg, globe.svg, window.svg      │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| Root Layout | Provides HTML shell, fonts, global styles, wraps all pages | `app/layout.tsx` |
| Home Page | Default `/` route, placeholder landing content | `app/page.tsx` |
| Global Styles | Tailwind CSS v4 import, CSS custom properties for theme colors, font variables | `app/globals.css` |

## Pattern Overview

**Overall:** Next.js App Router — file-system-based routing with React Server Components as the default.

**Key Characteristics:**
- All components in `app/` are React Server Components by default; client components require `"use client"` directive
- `layout.tsx` wraps all sibling and nested pages — used for shared UI and global providers
- `page.tsx` files define route segments — `/` maps to `app/page.tsx`
- TypeScript strict mode enabled throughout
- Tailwind CSS v4 (via `@tailwindcss/postcss` plugin) handles all styling

## Layers

**Routing / Pages Layer:**
- Purpose: Define URL routes and compose page-level UI
- Location: `app/`
- Contains: `page.tsx` files (one per route segment)
- Depends on: Layout, components (future), CSS
- Used by: Next.js runtime — each file is an entry point

**Layout Layer:**
- Purpose: Shared shell applied to all routes (HTML, fonts, global styles)
- Location: `app/layout.tsx`
- Contains: Root HTML structure, font configuration, metadata export
- Depends on: `app/globals.css`, `next/font/google`
- Used by: All pages automatically via Next.js App Router conventions

**Styling Layer:**
- Purpose: Global design tokens and Tailwind base import
- Location: `app/globals.css`
- Contains: `@import "tailwindcss"`, CSS custom properties (`--background`, `--foreground`, font vars), dark mode media query
- Depends on: Nothing
- Used by: `app/layout.tsx` (imported once at root)

**Static Assets:**
- Purpose: Publicly served files
- Location: `public/`
- Contains: SVG icons (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`)
- Depends on: Nothing
- Used by: Page components via `next/image` or direct URL paths

## Data Flow

### Primary Request Path

1. Browser requests `/` — Next.js App Router matches `app/page.tsx`
2. Root layout renders (`app/layout.tsx`) — injects HTML, font variables, global CSS
3. `Home` page component renders inside layout's `{children}` slot
4. Response streamed to client (React Server Component rendering)
5. Static assets served directly from `public/` for images/SVGs

### No Client-Side State Flow

There is currently no client-side state management, API routes, or data fetching. All rendering happens on the server via RSC defaults.

**State Management:**
- None implemented — this is a boilerplate scaffold. No `useState`, `useContext`, or external state library is in use.

## Key Abstractions

**RootLayout:**
- Purpose: The single layout wrapping the entire application; defines font CSS variables and HTML structure
- Examples: `app/layout.tsx`
- Pattern: Named `RootLayout` export as default React Server Component

**Metadata:**
- Purpose: SEO and document head management via Next.js `Metadata` API
- Examples: `app/layout.tsx` (exported `metadata` const)
- Pattern: Export a `metadata` object (type `Metadata` from `"next"`) from any layout or page

## Entry Points

**Root Layout:**
- Location: `app/layout.tsx`
- Triggers: Every page request — applied automatically by Next.js App Router
- Responsibilities: Font loading, global CSS injection, HTML/body shell

**Home Page:**
- Location: `app/page.tsx`
- Triggers: HTTP GET `/`
- Responsibilities: Renders the default landing page UI

**Next.js Config:**
- Location: `next.config.ts`
- Triggers: Build and dev server startup
- Responsibilities: Framework configuration (currently empty/default)

## Architectural Constraints

- **Threading:** Single-threaded Node.js server; Next.js handles concurrency via async streaming. No worker threads in use.
- **Global state:** None. No module-level singletons or shared mutable state exist at this time.
- **Circular imports:** None detected — only two source files exist with no cross-imports between them.
- **React Server Components default:** Adding interactivity requires explicit `"use client"` directive; shared state between server and client must be passed as props or via server actions.
- **Next.js version:** v16.2.6 — this version introduces breaking changes versus earlier Next.js versions. Consult `node_modules/next/dist/docs/` before writing any new code.

## Anti-Patterns

### Using `<img>` instead of `next/image`

**What happens:** Raw `<img>` tags are used for images instead of the Next.js Image component.
**Why it's wrong:** Bypasses automatic optimization, lazy loading, and Core Web Vitals improvements.
**Do this instead:** Always use `import Image from "next/image"` as shown in `app/page.tsx`.

### Importing CSS in page files

**What happens:** CSS files get imported in individual page or component files.
**Why it's wrong:** `app/globals.css` is already imported in `app/layout.tsx` and applies globally; duplicate imports cause redundant processing.
**Do this instead:** Import global CSS only in `app/layout.tsx`; use Tailwind utility classes in component files.

### Adding `"use client"` unnecessarily

**What happens:** Components that perform no browser-only operations are marked `"use client"`.
**Why it's wrong:** Opts the component out of server rendering, increasing client bundle size and reducing performance.
**Do this instead:** Only add `"use client"` when the component uses browser APIs, event handlers, or React hooks (`useState`, `useEffect`, etc.).

## Error Handling

**Strategy:** Not yet implemented — boilerplate scaffold has no error boundaries or custom error pages.

**Patterns:**
- Next.js App Router supports `error.tsx` files at any route segment level for error boundaries
- `not-found.tsx` files handle 404 states per segment

## Cross-Cutting Concerns

**Logging:** None implemented. Add via server-side `console` in Server Components or a logging library.
**Validation:** None implemented.
**Authentication:** None implemented.

---

*Architecture analysis: 2026-05-16*
