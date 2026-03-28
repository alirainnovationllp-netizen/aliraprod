# Alira (aliralabs-site)

A React + TypeScript single-page site scaffolded with Vite and Tailwind CSS.

This repository contains the client application in the project root (`src/`, `public/`) and a small `deploy/` helper with a Node-based server bundle.

## Quick summary

- Framework: React 18 + TypeScript
- Bundler: Vite
- Styling: Tailwind CSS
- UI primitives: Radix UI + custom components

## Prerequisites

- Node.js (for development): >= 18 (recommended)
- Node.js (for the `deploy` server): >= 20 (the `deploy/package.json` specifies engines >=20)
- npm (or yarn/pnpm)

On Windows (PowerShell), you can check your versions with:

```powershell
node -v
npm -v
```

## Install

From the repository root:

```powershell
npm install
```

This will install the client dependencies listed in `package.json`.

## Available scripts

You can run the scripts defined in the root `package.json`:

- `npm run dev` — start the Vite dev server (hot reload)
- `npm run build` — produce a production build (Vite)
- `npm run preview` — locally preview the production build
- `npm run check` — run TypeScript type-checking (`tsc`)

Example (start dev server):

```powershell
npm run dev
```

Open the browser at the URL printed by Vite (usually http://localhost:5173).

## Build & Preview

Create a production build:

```powershell
npm run build
```

Preview the built site locally:

```powershell
npm run preview
```

The build output will be produced in the default Vite output folder (`dist/` in the project root) unless overridden in `vite.config.ts`.

## Deploy folder

There is a `deploy/` folder that contains a small Node server package.json. That server lists an engine requirement of Node >=20. If you plan to run the node server from `deploy/` in production, use Node 20+.

To run the deploy server (after placing a built bundle where the server expects it):

```powershell
# (example) from deploy/ run the start script
cd deploy
npm install
npm start
```

Note: how you wire the built client assets into the `deploy` server depends on your deployment method. The repository does not include an automated deploy pipeline in the root; adapt the server and hosting provider according to your target platform.

## Project structure (important files/folders)

- `src/` — application source (React components, pages, hooks, styles)
- `public/` — static assets served by Vite
- `deploy/` — small Node server bundle metadata
- `script/` — project helper scripts
- `tailwind.config.ts`, `vite.config.ts`, `tsconfig.json` — build/tooling config

Notable code locations:

- `src/main.tsx` — app entry
- `src/App.tsx` — root app component
- `src/components/` — pre-built UI components and smaller `ui/` primitives

## Type checking & linting

Type checking is available via:

```powershell
npm run check
```

The project currently does not include an ESLint configuration in the repository root; add one if you want linting rules enforced.

## Common issues / troubleshooting

- Node version mismatches: ensure Node >=18 for local dev. If running the `deploy` Node server, use Node >=20.
- If you see issues with native modules or dependencies, try removing `node_modules` and reinstalling:

```powershell
rm -r node_modules; npm install
```

On PowerShell the `rm -r` alias usually works. Alternatively use File Explorer or `Remove-Item -Recurse node_modules`.

## Contributing

If you plan to make changes:

1. Create a feature branch from `main`.
2. Run and test locally with `npm run dev`.
3. Keep changes focused and add tests where practical.

## License

This project uses the MIT license (see `package.json`).

## Further notes

- The project uses ESM modules (`type: "module"` in `package.json`). Keep tooling compatible with ESM.
- If you want a deploy script or CI configuration (GitHub Actions, Netlify, Vercel, etc.), I can add an opinionated pipeline for the platform you use.

---

If you'd like, I can:

- add a simple GitHub Actions workflow to build and deploy a static site, or
- create a short CONTRIBUTING.md template, or
- add an ESLint + Prettier configuration and a lint script.

Tell me which follow-up you'd like and I'll add it.
