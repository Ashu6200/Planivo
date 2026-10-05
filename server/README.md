# Planivo Server — Microservices Monorepo

Backend architecture for Planivo built with **NestJS 12**, **Rspack**, and **Vitest**.

---

## 🏛 Architecture Overview

The backend is built as a modular microservice monorepo where services handle isolated business domains and communicate through an API Gateway, internal HTTP, and gRPC channels.

```
server/
├── apps/
│   ├── api-gatway/           — Port 3000: Unified entrypoint, request proxy & routing
│   ├── identity-service/     — Port 3001: Authentication, RBAC, organizations & users
│   ├── work-service/         — Port 3002: Tasks, sprints, boards, roadmaps & workflows
│   ├── engineering-service/  — Port 3003: VCS integration, CI/CD, PRs & code analytics
│   ├── platform-service/     — Port 3004: Audit logging, webhooks, notifications & settings
│   └── intelligence-service/ — Port 3005: AI summarization, triage & smart predictions
│
└── libs/
    ├── configuration/        — Centralized configuration and environment schema validation
    ├── contracts/            — DTOs, RPC contracts, event models, and shared interfaces
    ├── database/             — Database access abstraction, connection pooling & ORM
    ├── cache/                — Redis / In-memory caching services with TTL management
    ├── grpc/                 — gRPC client/server transport definitions & proto files
    ├── error/                — Standardized exception filters & API error envelopes
    └── common/               — Shared NestJS guards, pipes, interceptors & utilities
```

---

## 🔌 Microservice Ports

| Microservice | Default Port | Responsibility |
|---|---|---|
| **`api-gatway`** | `3000` | Ingress gateway routing client traffic to downstream microservices |
| **`identity-service`** | `3001` | Auth, token validation, user management, and workspace tenancy |
| **`work-service`** | `3002` | Project management, task tracking, backlog, and sprint cycles |
| **`engineering-service`** | `3003` | Git repository linkages, deployment tracking, CI/CD telemetry |
| **`platform-service`** | `3004` | Event webhooks, audit log trail, system configurations |
| **`intelligence-service`** | `3005` | Machine learning models, LLM integrations, and automation |

---

## 🛠 Prerequisites

- **Node.js**: `>= 20.0.0`
- **npm** or **yarn**

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Services in Development Mode

Run all microservices concurrently with color-coded logging:

```bash
npm run start:dev:all
```

Or run any service individually:

```bash
npm run start:dev:gateway        # API Gateway (Port 3000)
npm run start:dev:identity       # Identity Service (Port 3001)
npm run start:dev:work           # Work Service (Port 3002)
npm run start:dev:engineering    # Engineering Service (Port 3003)
npm run start:dev:platform       # Platform Service (Port 3004)
npm run start:dev:intelligence   # Intelligence Service (Port 3005)
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run start:dev:all` | Start all microservices in parallel with watch mode |
| `npm run start:dev:gateway` | Start API Gateway in watch mode |
| `npm run start:dev:identity` | Start Identity Service in watch mode |
| `npm run start:dev:work` | Start Work Service in watch mode |
| `npm run start:dev:engineering`| Start Engineering Service in watch mode |
| `npm run start:dev:platform` | Start Platform Service in watch mode |
| `npm run start:dev:intelligence`| Start Intelligence Service in watch mode |
| `npm run build` | Compile all services and libraries with Rspack |
| `npm test` | Run unit tests using Vitest |
| `npm run test:watch` | Run Vitest in interactive watch mode |
| `npm run test:cov` | Generate coverage report with Vitest v8 |
| `npm run test:e2e` | Run end-to-end integration tests |
| `npm run lint` | Run Biome linting |
| `npm run format` | Format source code with Biome |
| `npm run check` | Run Biome linter and formatter validation |

---

## 📦 Shared Libraries Import Paths

Shared libraries in `server/libs` are configured via TypeScript path aliases:

```typescript
import { DatabaseModule } from '@lib/database';
import { CacheModule } from '@lib/cache';
import { CommonModule } from '@lib/common';
import { ConfigurationModule } from '@lib/configuration';
import { ContractsModule } from '@lib/contracts';
import { ErrorModule } from '@lib/error';
import { GrpcModule } from '@lib/grpc';
```

---

## 🧪 Testing

Testing is powered by [Vitest](https://vitest.dev/):

```bash
# Run unit tests
npm test

# Run e2e tests
npm run test:e2e

# Run with coverage report
npm run test:cov
```
