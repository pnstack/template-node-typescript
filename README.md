# Template Node.js TypeScript

A modern Node.js TypeScript template with a well-organized folder structure and best practices.

## Requirements

- Node.js 22.x (LTS)
- pnpm (recommended) or npm

## Getting Started

Instructions for installing dependencies and running the app locally.

```bash
# Install dependencies
pnpm install

# Run in development mode
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm run start
```

## Project Structure

```
src/
├── config/        # Configuration files and environment variables
├── constants/     # Application constants and enums
├── middleware/    # Express/HTTP middleware functions
├── services/      # Business logic and service layer
├── shared/        # Shared utilities and helpers
├── types/         # TypeScript type definitions and interfaces
├── utils/         # Utility functions and helpers
└── index.ts       # Application entry point

tests/             # Unit and integration tests
dist/              # Compiled JavaScript output (generated)
```

### Folder Descriptions

| Folder | Description |
|--------|-------------|
| `config/` | Environment configuration, app settings, and external service configs |
| `constants/` | Static values, HTTP status codes, error messages, and app-wide constants |
| `middleware/` | Request processing middleware (auth, logging, validation, etc.) |
| `services/` | Business logic layer with reusable service modules |
| `shared/` | Cross-cutting utilities shared across the application |
| `types/` | TypeScript interfaces, types, and type guards |
| `utils/` | Helper functions and utility modules |

## Scripts

| Script | Description |
|--------|-------------|
| `dev` | Starts the app in development mode with live reloading |
| `build` | Compiles TypeScript to JavaScript (CJS and ESM) |
| `start` | Runs the compiled app |
| `test` | Runs unit tests |
| `test:cov` | Runs tests with coverage report |
| `lint` | Runs ESLint to check and fix code style |
| `format` | Formats code using Prettier |

## Path Aliases

The project uses path aliases for cleaner imports:

```typescript
import { config } from '@/config';
import { HTTP_STATUS } from '@/constants';
import { getCurrentTimestamp } from '@/utils';
```

## Docker

Build and run the application using Docker:

```bash
docker build -t template-node-typescript .
docker run -p 8080:8080 template-node-typescript
```

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime (v22 LTS)
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Jest](https://jestjs.io/) - Testing framework
- [ESLint](https://eslint.org/) - Linting utility
- [Prettier](https://prettier.io/) - Code formatter

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.