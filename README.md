# Planivo

> **Enterprise-grade, cross-platform project engineering and work management ecosystem.**

Planivo is a modern, unified work and engineering management platform designed to streamline planning, development workflows, team collaboration, and intelligent automation. Built with an enterprise-ready decoupled architecture, Planivo brings together a multi-target frontend (Web, Mobile, Desktop) and a high-performance NestJS microservices backend.

---

## 📑 Table of Contents

- [System Architecture](#-system-architecture)
- [Repository Structure](#-repository-structure)
- [Technology Stack](#-technology-stack)
- [Backend Services & Libraries](#-backend-services--libraries)
- [Client Apps & Packages](#-client-apps--packages)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
  - [1. Backend Setup](#1-backend-setup)
  - [2. Client Setup](#2-client-setup)
- [Development Workflows & Commands](#-development-workflows--commands)
- [Cross-Platform Design System](#-cross-platform-design-system)
- [Code Quality & Standards](#-code-quality--standards)

---

## 🏛 System Architecture

Planivo is organized into two primary monorepos:
1. **`client/`**: A Turborepo-orchestrated monorepo powered by `pnpm` workspaces, sharing UI components, state management, API layer, and business logic across **Web**, **Mobile**, and **Desktop** applications.
2. **`server/`**: A NestJS microservice monorepo powered by Rspack and Nest CLI, dividing platform domains into specialized autonomous microservices communicating via HTTP and gRPC.

```
                              ┌────────────────────────────────────────┐
                              │            Planivo Clients             │
                              ├──────────────┬───────────┬─────────────┤
                              │   Web SPA    │  Mobile   │   Desktop   │
                              │ (React + Vite│  (Expo)   │  (Electron) │
                              └──────┬───────┴─────┬─────┴──────┬──────┘
                                     │             │            │
                         RTK Query   │             │            │
                                     ▼             ▼            ▼
                              ┌────────────────────────────────────────┐
                              │     API Gateway (Port 3000)            │
                              │   Routing, Auth Verification, Ingress  │
                              └───────────────────┬────────────────────┘
                                                  │
                       Internal RPC / gRPC / HTTP │
         ┌───────────────────┬────────────────────┼───────────────────┬──────────────────┐
         ▼                   ▼                    ▼                   ▼                  ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Identity Service│ │  Work Service   │ │Engineering Svc  │ │  Platform Svc   │ │Intelligence Svc │
│   (Port 3001)   │ │   (Port 3002)   │ │   (Port 3003)   │ │   (Port 3004)   │ │   (Port 3005)   │
│ Auth, RBAC, Orgs│ │ Tasks, Sprints, │ │ Git, CI/CD, PRs │ │ Auditing, Hooks │ │ AI Assistants,  │
│  & User Session │ │ Roadmaps, Boards│ │ & Dev Analytics │ │ & System Config │ │ Smart Triage    │
└─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────────────┘
         ▲                   ▲                    ▲                   ▲                  ▲
         └───────────────────┴────────────────────┼───────────────────┴──────────────────┘
                                                  │
                                   ┌──────────────┴──────────────┐
                                   │   Shared Backend Libraries  │
                                   ├─────────────────────────────┤
                                   │ Database │ Cache │ Contracts│
                                   │  gRPC    │ Error │ Common   │
                                   │      Configuration          │
                                   └─────────────────────────────┘
```

---

## 📁 Repository Structure

```
Planivo/
├── client/                     # Cross-platform client monorepo (Turborepo + pnpm)
│   ├── apps/
│   │   ├── web/                # React 19 + Vite 6 web application
│   │   ├── mobile/             # React Native (v0.76) + Expo SDK 52 mobile application
│   │   └── desktop/            # Electron 33 + Vite 6 desktop application
│   ├── packages/
│   │   ├── ui/                 # Cross-platform design system (Tailwind / NativeWind / Radix / RN Primitives)
│   │   ├── store/              # Redux Toolkit + Redux Persist state management
│   │   ├── api/                # RTK Query API client and endpoints
│   │   ├── types/              # Universal TypeScript contracts and domain models
│   │   ├── core/               # Framework-agnostic business logic and validators
│   │   ├── utils/              # Utility functions and shared helpers
│   │   └── config/             # Environment, storage, and platform configuration
│   ├── pnpm-workspace.yaml     # pnpm workspace definition
│   ├── turbo.json              # Turborepo task pipeline configuration
│   └── biome.json              # Biome linting and formatting configuration
│
├── server/                     # Backend microservices monorepo (NestJS 12)
│   ├── apps/
│   │   ├── api-gatway/         # Central API Gateway (Port 3000)
│   │   ├── identity-service/   # Authentication, RBAC, multi-tenant users (Port 3001)
│   │   ├── work-service/       # Task management, sprints, boards, roadmaps (Port 3002)
│   │   ├── engineering-service/# VCS integrations, CI/CD pipelines, code metrics (Port 3003)
│   │   ├── platform-service/   # Audit logs, webhooks, system configs, notifications (Port 3004)
│   │   └── intelligence-service/# AI triage, smart estimations, predictive workflows (Port 3005)
│   ├── libs/
│   │   ├── common/             # Common decorators, interceptors, pipes, helpers
│   │   ├── configuration/      # Centralized environment variable validation
│   │   ├── contracts/          # Microservice DTOs, schemas, and payload interfaces
│   │   ├── database/           # Database connections, ORM integrations, repositories
│   │   ├── cache/              # Caching abstractions and Redis providers
│   │   ├── error/              # Standardized exception filters and error envelopes
│   │   └── grpc/               # gRPC client/server setup and proto definitions
│   ├── nest-cli.json           # NestJS monorepo compiler settings (Rspack builder)
│   └── biome.json              # Biome linting and formatting configuration
│
└── README.md                   # Global project documentation (this file)
```

---

## ⚡ Technology Stack

### Frontend & Clients (`client/`)
| Component | Technologies |
|---|---|
| **Build & Orchestration** | [Turborepo](https://turbo.build/) v2 + [pnpm](https://pnpm.io/) v9+ Workspaces |
| **Web App** | [React](https://react.dev/) 19, [Vite](https://vitejs.dev/) 6 |
| **Mobile App** | [React Native](https://reactnative.dev/) 0.76, [Expo](https://expo.dev/) SDK 52, Expo Router v4 |
| **Desktop App** | [Electron](https://www.electronjs.org/) 33, [Vite](https://vitejs.dev/) 6, `electron-builder` |
| **Design System** | Cross-platform tokens, [Tailwind CSS](https://tailwindcss.com/) v3 (Web/Desktop), [NativeWind](https://www.nativewind.dev/) v4 (Mobile), `@rn-primitives` |
| **Icons** | [Lucide](https://lucide.dev/) (`lucide-react`, `lucide-react-native`) |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) 2, [Redux Persist](https://github.com/rt2zz/redux-persist) 6 |
| **Data Fetching** | [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) |
| **Code Tooling** | [Biome](https://biomejs.dev/) (Formatting & Linting), [TypeScript](https://www.typescriptlang.org/) 5.7+ |

### Backend Services (`server/`)
| Component | Technologies |
|---|---|
| **Framework** | [NestJS](https://nestjs.com/) 12 (Monorepo architecture) |
| **Compiler / Bundler** | [Rspack](https://rspack.dev/) (`@rspack/core`) for high-speed compilation |
| **Concurrency** | `concurrently` for running multi-service dev processes |
| **Testing** | [Vitest](https://vitest.dev/) 4 (Unit & E2E integration test suites) |
| **Code Tooling** | [Biome](https://biomejs.dev/) (Linting & Formatting) |
| **Architecture** | Microservices, gRPC inter-service communication, REST API Gateway |

---

## ⚙️ Backend Services & Libraries

### Microservices (`server/apps/`)

| Service | Port | Description |
|---|---|---|
| **`api-gatway`** | `3000` | Entrypoint for clients. Handles request dispatching, validation, rate limiting, and response formatting. |
| **`identity-service`** | `3001` | Manages authentication, identity verification, authorization/roles (RBAC), multi-tenant workspaces, and profiles. |
| **`work-service`** | `3002` | Manages work entities: tasks, epics, sprint cycles, Kanban boards, backlogs, and time tracking. |
| **`engineering-service`** | `3003` | Connects developer toolchains: Git providers, CI/CD telemetry, pull requests, automated releases, and engineering health metrics. |
| **`platform-service`** | `3004` | Enterprise platform capabilities: webhooks, audit logs, notification feeds, tenant configuration, and billing. |
| **`intelligence-service`** | `3005` | AI/ML processing: automated task categorization, smart estimates, pull-request review helpers, and natural-language queries. |

### Shared Backend Libraries (`server/libs/`)

- **`@lib/configuration`**: Type-safe environment management and service configuration.
- **`@lib/contracts`**: Shared interfaces, payloads, event contracts, and DTO definitions across all microservices.
- **`@lib/database`**: Database access layer, connection pooling, and ORM abstractions.
- **`@lib/cache`**: High-performance caching adapters (Redis / In-memory) with TTL and invalidation strategies.
- **`@lib/grpc`**: Shared gRPC transporter configurations and protocol buffer definitions.
- **`@lib/error`**: Unified exception handling, error codes, and standardized HTTP/gRPC error envelopes.
- **`@lib/common`**: Reusable NestJS guards, interceptors, custom decorators, and common utility functions.

---

## 📦 Client Apps & Packages

### Client Applications (`client/apps/`)

- **`@project/web`** (`apps/web`): React 19 Single Page Application built on Vite 6. Fast, responsive desktop and mobile browser experience.
- **`@project/mobile`** (`apps/mobile`): React Native application running on Expo SDK 52 and Expo Router v4 for iOS and Android.
- **`@project/desktop`** (`apps/desktop`): Native desktop application powered by Electron 33 and Vite 6 with system tray and native menu integrations.

### Client Packages (`client/packages/`)

- **`@project/ui`**: Cross-platform component library with platform-specific targeting:
  - `.tsx` files target Web and Electron using HTML/Radix primitives and Tailwind CSS.
  - `.native.tsx` files target React Native using `@rn-primitives` and NativeWind.
  - Included components: `Button`, `Card`, `Dialog`, `DropdownMenu`, `Select`, `Input`, `Checkbox`, `Switch`, `Tabs`, `Avatar`, `Badge`, `Skeleton`, `Tooltip`, `Heading`, `Text`, `Separator`, `Layout`.
- **`@project/store`**: Unified Redux Toolkit store with persistent storage adapters for Web (`localStorage`), Desktop (`localStorage`/file storage), and Mobile (`AsyncStorage`).
- **`@project/api`**: Centralized RTK Query client with API health checks, automated token attachment, and cache invalidation.
- **`@project/types`**: Shared domain types, state interfaces (`Theme`, `Locale`, `AppPreferences`), and API models (`ApiResponse<T>`, `ApiError`).
- **`@project/core`**: Framework-independent domain logic, default preferences, and data validation.
- **`@project/utils`**: Reusable helpers (`formatDate`, `clamp`, `delay`, `safeJsonParse`, `generateId`).
- **`@project/config`**: Platform detection, API base URLs, and storage keys.

---

## 🛠 Prerequisites

Ensure your development workstation has the following installed:

- **Node.js**: `>= 20.0.0`
- **pnpm**: `>= 9.0.0` (Recommended: `pnpm@12+`)
- **npm** or **yarn** (for backend service orchestration)
- **Optional for Mobile Development**:
  - [Expo Go](https://expo.dev/go) app on your physical mobile device.
  - [Android Studio](https://developer.android.com/studio) (for Android Emulator) or Xcode (macOS only, for iOS Simulator).

---

## 🚀 Getting Started

Clone the repository and set up both the backend and client environments:

### 1. Backend Setup

```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Start all microservices concurrently in development watch mode
npm run start:dev:all
```

> **Tip:** You can also run an individual microservice (e.g., only the Gateway and Work Service):
> ```bash
> npm run start:dev:gateway
> npm run start:dev:work
> ```

### 2. Client Setup

Open a new terminal window:

```bash
# Navigate to the client directory
cd client

# Copy environment configuration
cp .env.example .env

# Install monorepo dependencies
pnpm install

# Start all frontend apps simultaneously (Web, Mobile, Desktop)
pnpm dev
```

Alternatively, start a specific target application:

```bash
# Web application (http://localhost:3001)
pnpm dev:web

# Mobile application (Expo Developer Tools)
pnpm dev:mobile

# Desktop application (Electron)
pnpm dev:desktop
```

---

## 📜 Development Workflows & Commands

### Client Commands (`client/`)

Run commands from the `client/` directory using `pnpm`:

| Command | Action |
|---|---|
| `pnpm dev` | Start all apps concurrently using Turborepo |
| `pnpm dev:web` | Run the React 19 + Vite 6 web client |
| `pnpm dev:mobile` | Launch the Expo mobile dev server |
| `pnpm dev:desktop` | Launch the Electron desktop client |
| `pnpm build` | Compile and build all shared packages and apps |
| `pnpm build:web` | Build production bundle for Web |
| `pnpm build:desktop` | Package the Electron desktop application |
| `pnpm typecheck` | Run TypeScript compiler validation across all workspaces |
| `pnpm lint` | Run Biome linting across the monorepo |
| `pnpm lint:fix` | Automatically fix linting violations |
| `pnpm format` | Check and apply Biome code formatting |
| `pnpm test` | Run test suites across all packages |
| `pnpm clean` | Remove all build outputs and `.turbo` caches |
| `pnpm clean:all` | Deep clean including all `node_modules` |

### Server Commands (`server/`)

Run commands from the `server/` directory using `npm`:

| Command | Action |
|---|---|
| `npm run start:dev:all` | Run all 6 microservices in parallel with color-coded logs |
| `npm run start:dev:gateway` | Start API Gateway in watch mode (Port 3000) |
| `npm run start:dev:identity` | Start Identity Service in watch mode (Port 3001) |
| `npm run start:dev:work` | Start Work Service in watch mode (Port 3002) |
| `npm run start:dev:engineering` | Start Engineering Service in watch mode (Port 3003) |
| `npm run start:dev:platform` | Start Platform Service in watch mode (Port 3004) |
| `npm run start:dev:intelligence` | Start Intelligence Service in watch mode (Port 3005) |
| `npm run build` | Compile all NestJS applications via Rspack |
| `npm test` | Execute unit test suite with Vitest |
| `npm run test:watch` | Run Vitest in interactive watch mode |
| `npm run test:cov` | Generate test coverage report with v8 |
| `npm run test:e2e` | Execute end-to-end integration tests |
| `npm run lint` | Run Biome linter on backend code |
| `npm run format` | Format backend source files |

---

## 🎨 Cross-Platform Design System

Planivo features a platform-agnostic design system in `@project/ui`. Components share identical APIs and tokens while rendering native elements per runtime platform:

- **Web & Desktop (`.tsx`)**:
  - Leverages standard DOM elements and accessible primitives.
  - Styled with Tailwind CSS classes via shared tokens (`tailwind.preset.js`).
- **Mobile (`.native.tsx`)**:
  - Leverages React Native components (`View`, `Text`, `Pressable`) and `@rn-primitives`.
  - Styled with NativeWind (`className` bindings that compile into native style objects).

```typescript
// Shared consumption in any app:
import { Button, Card, Heading, ThemeProvider } from '@project/ui';

export function Example() {
  return (
    <Card elevated>
      <Heading level={2}>Universal Component</Heading>
      <Button variant="primary" size="md">
        Click Me
      </Button>
    </Card>
  );
}
```

---

## 🛡 Code Quality & Standards

- **Linting & Formatting**: Enforced via [Biome](https://biomejs.dev/) for both client and server repositories, ensuring sub-second formatting and lint checks.
- **Type Safety**: Strict TypeScript configurations (`"strict": true`, modern ECMAScript targets) ensure contract integrity from the database layer to the UI components.
- **Testing**: Comprehensive unit and end-to-end test suites powered by [Vitest](https://vitest.dev/).
- **Dependency Isolation**: Workspace packages in `client/` consume each other strictly via the `workspace:*` protocol. Backend shared modules in `server/` are linked via TypeScript paths and NestJS library configurations.

---

## 📄 License

Proprietary — All rights reserved © Planivo.
