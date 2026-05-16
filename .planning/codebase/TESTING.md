# Testing Patterns

**Analysis Date:** 2026-05-16

## Test Framework

**Runner:**
- Not configured — no Jest, Vitest, Playwright, or Cypress detected
- No test scripts in `package.json`
- No test configuration files (`jest.config.*`, `vitest.config.*`) present

**Assertion Library:**
- Not applicable

**Run Commands:**
```bash
# No test commands currently configured
npm run lint   # Only quality script available
```

## Test File Organization

**Location:**
- No test files exist in the repository

**Naming:**
- Not established — no convention to follow yet

**Structure:**
- No test directory present

## Recommended Setup (for when tests are added)

Given the stack (Next.js 16 App Router + React 19 + TypeScript strict), the recommended approach is:

**Unit/Integration tests:**
- Vitest with `@testing-library/react` and `@testing-library/user-event`
- Config file: `vitest.config.ts` at project root
- Test files co-located with source: `app/page.test.tsx` next to `app/page.tsx`

**End-to-end tests:**
- Playwright (`@playwright/test`)
- Config file: `playwright.config.ts` at project root
- Test directory: `e2e/`

**Recommended `package.json` scripts:**
```bash
npm run test          # vitest
npm run test:watch    # vitest --watch
npm run test:coverage # vitest --coverage
npm run test:e2e      # playwright test
```

## Test Structure

**Suite Organization:**
- No established pattern — follow this when creating tests:
```typescript
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/app/page";

describe("Home", () => {
  it("renders the heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
```

**Patterns:**
- Setup pattern: Not established
- Teardown pattern: Not established
- Assertion pattern: Not established

## Mocking

**Framework:** Not configured

**What to Mock (when tests are added):**
- External API calls and fetch requests
- Next.js router (`next/navigation`) using `vi.mock("next/navigation")`
- Next.js image optimization in tests (mock `next/image` to avoid DOM issues)

**What NOT to Mock:**
- React component rendering logic
- Pure utility functions
- TypeScript types (not runtime)

## Fixtures and Factories

**Test Data:**
- Not established — no fixture files present

**Location:**
- Recommended: `__fixtures__/` or `test/fixtures/` at project root when needed

## Coverage

**Requirements:** Not enforced — no coverage configuration

**View Coverage:**
```bash
# After Vitest is configured:
npx vitest --coverage
```

## Test Types

**Unit Tests:**
- Not present — scope would be individual React components and utility functions

**Integration Tests:**
- Not present — scope would be page-level rendering with Next.js App Router context

**E2E Tests:**
- Not present — Playwright is the recommended option for App Router projects

## Current State

The project is a fresh Next.js scaffold with **zero test coverage**. No testing infrastructure has been installed or configured. Before writing any tests:

1. Install a test runner (Vitest recommended for Next.js + React 19)
2. Install `@testing-library/react` and `@testing-library/jest-dom`
3. Configure `vitest.config.ts` with jsdom environment
4. Add test scripts to `package.json`

The TypeScript strict mode (`strict: true` in `tsconfig.json`) and ESLint with `eslint-config-next/core-web-vitals` provide static quality assurance in the absence of tests.

---

*Testing analysis: 2026-05-16*
