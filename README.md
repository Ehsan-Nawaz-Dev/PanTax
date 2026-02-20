# Snap Tax Admin

Admin dashboard for RushTax, built with **React**, **TypeScript**, **Vite**, and **MUI**.  
Authentication is handled via a custom context, with routing and theming centralized for consistency.

## Tech Stack

- **Frontend framework**: React 19 + TypeScript
- **Bundler/dev server**: Vite
- **UI library**: MUI (`@mui/material`, `@mui/icons-material`) with a custom theme
- **Forms & validation**: `react-hook-form`, `@hookform/resolvers`, `yup`
- **Routing**: `react-router`
- **Tooling**: ESLint, TypeScript, Husky

## Project Structure (high level)

- `src/main.tsx` – App entry, wraps `App` with `BrowserRouter`
- `src/App.tsx` – Root component, wires `ThemeProvider`, `AuthContextProvider`, and `AppRoutes`
- `src/routes` – Route configuration, public/private route wrappers
- `src/contexts/Auth` – Authentication context and hook
- `src/pages` – Page-level components (e.g. auth pages, dashboard)
- `src/components` – Reusable UI elements (e.g. `InputController`, `Logo`)
- `src/theme` – MUI theme (`palette`, `typography`, `components`, breakpoints)
- `src/constants`, `src/interfaces`, `src/lib`, `src/validations` – Shared constants, types, helpers, and schemas

## Running the Project

Install dependencies (project is configured for **pnpm** but npm/yarn also work):

```bash
pnpm install
pnpm dev
```

Build and preview:

```bash
pnpm build
pnpm preview
```

Run linting:

```bash
pnpm lint
```

## Auth & Routing Overview

- Authentication state is managed by `AuthContextProvider` in `src/contexts/Auth`.
- Token operations (`getToken`, `setToken`, `clearToken`, `handleLogout`) live in `src/lib/helper.ts`; avoid direct `localStorage` access elsewhere.
- Protected routes use `PrivateRoute`, which:
  - Waits for auth bootstrap (`isLoaded` / `isLoading`)
  - Redirects unauthenticated users to the login route
- Public pages (e.g. login, register, forgot password) live under `src/pages/auth`.

## Forms & Validation

- Forms use `react-hook-form` with `FormProvider`.
- Validation is handled via Yup schemas defined in `src/validations`.
- Shared initial form values are defined in `src/constants/formInitials`.
- Common validation message builders live in `src/lib/helper.ts`.

## Theming

- The app uses a custom MUI theme from `src/theme/index.ts`.
- Palette, typography, and component overrides are defined in dedicated theme files and composed in `createTheme`.
- Breakpoints and font constants are configured to match the design system.

## Cursor Rules

This repo includes **Cursor app-level rules** to keep the AI assistant aligned with project conventions:

- Rules live in `.cursor/rules/`.
- The main rule file is:
  - `.cursor/rules/app-core.mdc` – describes core patterns for auth, routing, forms, theming, and project structure.

When working in Cursor, these rules are automatically applied to keep suggestions consistent with the existing codebase.
