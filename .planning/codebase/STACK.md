# Technology Stack

**Analysis Date:** 2026-05-16

## Languages

**Primary:**
- TypeScript 5.x - All application code (`app/`, config files)
- CSS - Global styles via Tailwind v4 (`app/globals.css`)

**Secondary:**
- JavaScript (ESM) - Configuration files (`eslint.config.mjs`, `postcss.config.mjs`)

## Runtime

**Environment:**
- Node.js 22.20.0

**Package Manager:**
- npm 10.9.3
- Lockfile: `package-lock.json` present (lockfileVersion 3)

## Frameworks

**Core:**
- Next.js 16.2.6 - Full-stack React framework (App Router)
- React 19.2.4 - UI library
- React DOM 19.2.4 - DOM bindings

**Build/Dev:**
- Tailwind CSS 4.x - Utility-first CSS framework (new v4 engine via PostCSS plugin)
- `@tailwindcss/postcss` ^4 - Tailwind v4 PostCSS integration (`postcss.config.mjs`)
- TypeScript 5.x - Type checking (`tsconfig.json`)
- ESLint 9.x - Linting (`eslint.config.mjs`)
- `eslint-config-next` 16.2.6 - Next.js ESLint rules (core-web-vitals + TypeScript presets)

**Testing:**
- Not detected

## Key Dependencies

**Critical:**
- `next` 16.2.6 - Framework with App Router; note: this is Next.js 16, which has breaking changes from versions in common training data. Read `node_modules/next/dist/docs/` before writing code.
- `react` 19.2.4 - React 19 with concurrent features and new APIs
- `tailwindcss` ^4 - Tailwind v4 uses `@import "tailwindcss"` syntax (not `@tailwind base/components/utilities`)

**Infrastructure:**
- `@types/node` ^20 - Node.js type definitions
- `@types/react` ^19 - React type definitions
- `@types/react-dom` ^19 - React DOM type definitions

## Configuration

**Environment:**
- No `.env` files detected
- No environment variables currently required

**TypeScript:**
- Config: `tsconfig.json`
- Strict mode enabled
- Path alias: `@/*` maps to repo root `./`
- Module resolution: `bundler`
- Target: `ES2017`
- JSX: `react-jsx`

**Build:**
- `next.config.ts` - Next.js config (TypeScript, currently empty options)
- `postcss.config.mjs` - PostCSS with `@tailwindcss/postcss` plugin
- `eslint.config.mjs` - Flat ESLint config (ESLint v9 flat config format)

**CSS:**
- Tailwind v4 configured via `@import "tailwindcss"` in `app/globals.css`
- Theme tokens defined with `@theme inline` block in `app/globals.css`
- CSS variables: `--background`, `--foreground`, `--color-background`, `--color-foreground`, `--font-sans`, `--font-mono`
- Dark mode: `prefers-color-scheme: dark` media query

## Fonts

- Geist Sans - loaded via `next/font/google`, CSS variable `--font-geist-sans`
- Geist Mono - loaded via `next/font/google`, CSS variable `--font-geist-mono`

## Platform Requirements

**Development:**
- Node.js 22.x
- npm 10.x
- Run: `npm run dev`

**Production:**
- Build: `npm run build`
- Start: `npm run start`
- Deployment target: Vercel (referenced in default page template)

---

*Stack analysis: 2026-05-16*
