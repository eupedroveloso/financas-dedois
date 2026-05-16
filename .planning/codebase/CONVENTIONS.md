# Coding Conventions

**Analysis Date:** 2026-05-16

## Naming Patterns

**Files:**
- Page files use lowercase with `.tsx` extension: `page.tsx`, `layout.tsx`
- Configuration files use lowercase with extension reflecting format: `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `tsconfig.json`
- CSS files use lowercase: `globals.css`

**Components/Functions:**
- React components use PascalCase: `RootLayout`, `Home`
- Default exports are the primary pattern for page and layout components

**Variables and Constants:**
- camelCase for variables and constants: `geistSans`, `geistMono`, `nextConfig`, `eslintConfig`
- Module-level constants are preferred over inline expressions where reuse is expected

**Types/Interfaces:**
- PascalCase for types and interfaces: `Metadata`, `NextConfig`
- Type imports use `import type` syntax: `import type { Metadata } from "next"`

## Code Style

**Formatting:**
- No Prettier config detected — formatting is handled by ESLint rules from `eslint-config-next`
- Double quotes for JSX string attributes (observed in `app/layout.tsx`, `app/page.tsx`)
- Trailing commas used in multi-line objects and arrays

**Linting:**
- Tool: ESLint 9 with flat config format
- Config file: `eslint.config.mjs`
- Extends: `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- TypeScript strict mode enabled (`"strict": true` in `tsconfig.json`)

**TypeScript:**
- Strict mode required (`strict: true`)
- `noEmit: true` — TypeScript is used only for type checking, not compilation
- `isolatedModules: true` — each file must be independently compilable
- Target: `ES2017`
- Module resolution: `bundler` (Next.js native)
- `skipLibCheck: true` — third-party type errors are ignored

## Import Organization

**Order (observed pattern):**
1. External package imports (`import type { Metadata } from "next"`)
2. Third-party component imports (`import { Geist, Geist_Mono } from "next/font/google"`, `import Image from "next/image"`)
3. Local/relative imports (`import "./globals.css"`)

**Path Aliases:**
- `@/*` maps to the project root `./*` (configured in `tsconfig.json`)
- Use `@/` prefix for absolute imports from the project root instead of relative paths

**Import Style:**
- Named imports for utilities and types
- Default imports for components and config objects
- Type-only imports use `import type` to avoid runtime cost

## Error Handling

**Patterns:**
- No custom error handling patterns observed in the current codebase (early-stage scaffold)
- Next.js App Router provides built-in error boundaries via `error.tsx` convention (not yet implemented)
- TypeScript strict mode enforces null safety at compile time

## Logging

**Framework:** Not configured — `console` is the available mechanism
- No logging library installed
- Use `console.error` for errors, `console.warn` for warnings, `console.log` for development only

## Comments

**When to Comment:**
- No comments present in source files — code is expected to be self-documenting
- ESLint config has an inline comment explaining a non-obvious override: `// Override default ignores of eslint-config-next.`

**JSDoc/TSDoc:**
- Not in use — TypeScript types serve as the primary documentation mechanism

## Function Design

**Size:** Functions are small and focused; page components render only what is needed
**Parameters:** Destructured props inline for React components (e.g., `{ children }` in `RootLayout`)
**Return Values:** React components return JSX directly; config files return config objects

## Module Design

**Exports:**
- One default export per file — the primary component or config object
- Named exports are used only for metadata: `export const metadata: Metadata = { ... }`

**Barrel Files:**
- Not in use — direct imports from source files

## CSS / Styling

**Framework:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- Global styles in `app/globals.css`
- CSS custom properties used for theming: `--background`, `--foreground`
- `@theme inline` block for Tailwind v4 design token mapping
- Dark mode via `@media (prefers-color-scheme: dark)`
- Utility classes applied inline on JSX elements (no CSS Modules)

## Next.js Conventions

**App Router** is used (files live in `app/` directory, not `pages/`)
- `app/layout.tsx` — root layout, exports `metadata` and default `RootLayout`
- `app/page.tsx` — root page, default export `Home`
- Font optimization via `next/font/google` with CSS variable injection
- `next/image` used for all `<img>` elements

---

*Convention analysis: 2026-05-16*
