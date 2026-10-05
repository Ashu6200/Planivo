# Planivo Client — Monorepo

Cross-platform application built with React, React Native, and Electron.

## Architecture

```
client/
├── apps/
│   ├── web/        — React + Vite web application
│   ├── mobile/     — React Native + Expo mobile app
│   └── desktop/    — Electron + React + Vite desktop app
│
├── packages/
│   ├── ui/         — Tamagui shared UI components
│   ├── store/      — Redux Toolkit + Redux Persist
│   ├── api/        — RTK Query API layer
│   ├── types/      — Shared TypeScript types
│   ├── core/       — Business/domain logic
│   ├── utils/      — Generic utilities
│   └── config/     — Centralized configuration
```

## Prerequisites

- Node.js >= 20
- pnpm >= 9

## Getting Started

```bash
# Install all dependencies
pnpm install

# Run all apps in development
pnpm dev

# Run individual apps
pnpm dev:web       # Web at http://localhost:3001
pnpm dev:mobile    # Expo dev server
pnpm dev:desktop   # Electron app
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all apps in development |
| `pnpm dev:web` | Start web app |
| `pnpm dev:mobile` | Start mobile app |
| `pnpm dev:desktop` | Start desktop app |
| `pnpm build` | Build all packages and apps |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm lint` | Run Biome linting |
| `pnpm test` | Run all tests |
| `pnpm clean` | Clean build artifacts |

## Tech Stack

- **Build System**: pnpm workspaces + Turborepo
- **Web**: React 19 + Vite 6
- **Mobile**: React Native + Expo SDK 52
- **Desktop**: Electron 33 + Vite 6
- **UI**: Tamagui (cross-platform)
- **State**: Redux Toolkit + Redux Persist
- **API**: RTK Query
- **Linting**: Biome
- **Testing**: Vitest
- **Language**: TypeScript (strict mode)

## Package Dependencies

All workspace packages use `workspace:*` protocol:

```json
{
  "@project/ui": "workspace:*",
  "@project/store": "workspace:*",
  "@project/api": "workspace:*",
  "@project/types": "workspace:*",
  "@project/core": "workspace:*",
  "@project/utils": "workspace:*",
  "@project/config": "workspace:*"
}
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

> ⚠️ All `VITE_` prefixed variables are exposed in the client bundle. Never put secrets here.
