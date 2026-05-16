# Codebase Structure

**Analysis Date:** 2026-05-16

## Directory Layout

```
dedois-v1/                    # Project root
├── app/                      # Next.js App Router — all routes and global UI
│   ├── layout.tsx            # Root layout (HTML shell, fonts, global CSS)
│   ├── page.tsx              # Home page, route: /
│   ├── globals.css           # Global styles (Tailwind v4 import + CSS vars)
│   └── favicon.ico           # Browser tab icon
├── public/                   # Publicly served static assets (no processing)
│   ├── next.svg
│   ├── vercel.svg
│   ├── file.svg
│   ├── globe.svg
│   └── window.svg
├── .claude/                  # GSD agent commands and configurations
│   ├── agents/               # GSD subagent definitions
│   ├── commands/gsd/         # GSD slash command implementations
│   ├── get-shit-done/        # GSD workflow engine (contexts, templates, workflows)
│   └── hooks/                # Git/shell hooks for Claude Code
├── .planning/                # GSD planning artifacts (not source code)
│   └── codebase/             # Codebase analysis documents (this directory)
├── next.config.ts            # Next.js configuration (currently empty defaults)
├── tsconfig.json             # TypeScript configuration (strict mode, paths alias @/*)
├── postcss.config.mjs        # PostCSS config (Tailwind CSS v4 via @tailwindcss/postcss)
├── eslint.config.mjs         # ESLint flat config (next/core-web-vitals + typescript)
├── package.json              # Dependencies and npm scripts
├── package-lock.json         # Dependency lockfile
├── next-env.d.ts             # Next.js TypeScript ambient types (auto-generated, do not edit)
├── AGENTS.md                 # Project-level Claude agent instructions
├── CLAUDE.md                 # Project-level Claude Code instructions
└── README.md                 # Project readme
```

## Directory Purposes

**`app/`:**
- Purpose: All application source code — routes, layouts, and global styles
- Contains: `layout.tsx` (root layout), `page.tsx` (route pages), `globals.css`, `favicon.ico`
- Key files: `app/layout.tsx`, `app/page.tsx`
- Naming rule: Files with special meaning to Next.js must use exact reserved names (`layout`, `page`, `error`, `loading`, `not-found`, `route`, `template`)

**`public/`:**
- Purpose: Static files served at the root URL path without processing
- Contains: SVG assets referenced by `next/image` or direct paths
- Key files: `public/next.svg`, `public/vercel.svg`
- Accessed at runtime as `/filename.svg` (no `public/` prefix in URLs)

**`.claude/`:**
- Purpose: GSD (Get Shit Done) agentic workflow system — commands, agents, templates
- Contains: Subagent definitions, slash command markdown files, workflow engine files
- Not part of the application build; used only by Claude Code tooling

**`.planning/`:**
- Purpose: GSD planning artifacts — codebase maps, phase plans, project context
- Contains: `.planning/codebase/` (architecture documents), future milestone and phase docs
- Not part of the application build

## Key File Locations

**Entry Points:**
- `app/layout.tsx`: Root layout applied to every route — fonts, HTML shell, global CSS
- `app/page.tsx`: Default `/` route page component

**Configuration:**
- `next.config.ts`: Next.js framework configuration
- `tsconfig.json`: TypeScript compiler options — path alias `@/*` maps to project root
- `postcss.config.mjs`: PostCSS — configures Tailwind CSS v4 via `@tailwindcss/postcss`
- `eslint.config.mjs`: ESLint flat config with Next.js core web vitals + TypeScript rules

**Styling:**
- `app/globals.css`: Global CSS — Tailwind v4 import, CSS custom properties for theme colors and fonts

**Type Declarations:**
- `next-env.d.ts`: Auto-generated Next.js ambient types — do not edit

## Naming Conventions

**Files:**
- React components: PascalCase by convention for the component name, but Next.js reserved filenames are lowercase (`page.tsx`, `layout.tsx`, `error.tsx`, `loading.tsx`, `not-found.tsx`, `route.ts`)
- Config files: `kebab-case` with extension indicating format (`next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`)
- CSS: `globals.css` for global styles; component-level styles use Tailwind utility classes (no CSS Modules currently)

**Directories:**
- Route segments: lowercase, matching the URL path segment they represent (e.g., `app/dashboard/` → `/dashboard`)
- Feature directories (future): kebab-case (e.g., `app/user-profile/`)

**TypeScript:**
- Page components: default export named matching the route (e.g., `export default function Home()`)
- Layout components: default export named `RootLayout` or `[Segment]Layout`
- Type imports: Use `import type` for type-only imports

## Where to Add New Code

**New Route Page:**
- Create a directory under `app/` matching the URL segment
- Add `page.tsx` inside it: `app/[route-name]/page.tsx`
- Example: `/about` → `app/about/page.tsx`

**New Nested Layout:**
- Add `layout.tsx` inside the route directory: `app/[route-name]/layout.tsx`
- Wrap children with shared UI (nav, sidebars)

**New API Route:**
- Add `route.ts` inside the route directory: `app/api/[endpoint]/route.ts`
- Export named HTTP method handlers: `export async function GET(request: Request) {}`

**New Shared Component:**
- Create `components/` at project root (does not exist yet): `components/[ComponentName].tsx`
- Import using the `@/` alias: `import { Button } from "@/components/Button"`

**New Utility / Helper:**
- Create `lib/` or `utils/` at project root (does not exist yet): `lib/[utility-name].ts`
- Import using the `@/` alias: `import { formatDate } from "@/lib/formatDate"`

**New Server Action:**
- Create `app/actions/` or co-locate with the page: `app/[route]/actions.ts`
- Add `"use server"` directive at top of file

**New Static Asset:**
- Place in `public/`: `public/[filename]`
- Reference in code as `"/filename"` (no `public/` prefix)

**Global Style Change:**
- Edit `app/globals.css` for CSS custom properties or base styles
- Use Tailwind utility classes in component JSX for component-scoped styles

## Special Directories

**`.next/`:**
- Purpose: Next.js build output and dev server cache
- Generated: Yes (automatically by `next dev` / `next build`)
- Committed: No (in `.gitignore`)

**`node_modules/`:**
- Purpose: Installed npm dependencies
- Generated: Yes (by `npm install`)
- Committed: No (in `.gitignore`)

**`.planning/`:**
- Purpose: GSD workflow planning artifacts — not application code
- Generated: Partially (by GSD commands)
- Committed: Yes (planning context is versioned)

**`.claude/`:**
- Purpose: GSD agent/command definitions — not application code
- Generated: No (managed manually or by GSD installer)
- Committed: Yes

---

*Structure analysis: 2026-05-16*
