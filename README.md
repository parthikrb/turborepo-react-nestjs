# Turborepo React-NestJS Monorepo

A modern full-stack monorepo template using Turborepo with React and NestJS.

## Tech Stack

- **Build Tool**: [Turborepo](https://turbo.build/repo) - High-performance build system for JavaScript/TypeScript monorepos
- **Frontend**:
  - [React](https://react.dev/) - JavaScript library for building user interfaces
  - [TanStack Router](https://tanstack.com/router) - Type-safe routing for React
  - [Mantine](https://mantine.dev/) - React components library
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Backend**: [NestJS](https://nestjs.com/) - Progressive Node.js framework
- **Database**: [Drizzle ORM](https://orm.drizzle.team) - TypeScript ORM with maximum type safety
- **Package Manager**: pnpm

## What's inside?

This Turborepo includes the following packages/apps:

### Apps

- `web`: A React application with TanStack Router, Mantine, and Tailwind CSS (Frontend)
- `api`: A [NestJS](https://nestjs.com/) application (Backend)

### Packages

- `@repo/ui`: Shared React component library
- `@repo/db`: Database schema and Drizzle configuration
- `@repo/eslint-config`: ESLint configurations
- `@repo/typescript-config`: TypeScript configurations

### Utilities and Tools

This monorepo comes with several pre-configured tools:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Husky](https://typicode.github.io/husky/) for Git hooks
- [Lint-staged](https://github.com/okonet/lint-staged) for pre-commit linting

## Getting Started

### Prerequisites

- Node.js 16.x or later
- pnpm 7.x or later

### Installation

1. Clone the repository
2. Install dependencies:

```sh
pnpm install
```

3. Copy the example environment file:

```sh
cp .env.example .env
```

4. Set up your environment variables in `.env`

### Development

To develop all apps and packages:

```sh
pnpm dev
```

The following services will be available:

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

### Build

To build all apps and packages:

```sh
pnpm build
```

### Lint

To lint all apps and packages:

```sh
pnpm lint
```

## Project Structure

```
.
├── apps
│   ├── api/          # NestJS backend application
│   └── web/          # React frontend application
├── packages
│   ├── db/           # Database schemas and Drizzle configurations
│   ├── eslint-config/# Shared ESLint configurations
│   ├── typescript-config/# Shared TypeScript configurations
│   └── ui/           # Shared UI components
└── package.json
```

## Remote Caching

This project supports Turborepo's Remote Caching feature. To enable it:

1. Create a [Vercel account](https://vercel.com/signup)
2. Link your turborepo:

```sh
npx turbo login
npx turbo link
```

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a pull request

## Useful Links

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [NestJS Documentation](https://docs.nestjs.com/)
- [React Documentation](https://react.dev/)
