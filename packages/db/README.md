# @repo/db

A reusable database package that provides type-safe database access using Drizzle ORM with Supabase.

## Installation

```bash
pnpm add @repo/db
```

## Usage

1. Create a `.env` file in your application (not in this package) with your Supabase credentials:

```env
# Supabase Configuration
SUPABASE_URL=your_project_url
SUPABASE_ANON_KEY=your_anon_key
DATABASE_URL=your_connection_string
```

2. Initialize the database client:

```typescript
import { createDatabaseClient } from '@repo/db';

const { supabase, db, disconnect } = createDatabaseClient({
  projectUrl: process.env.SUPABASE_URL!,
  anonKey: process.env.SUPABASE_ANON_KEY!,
  connectionString: process.env.DATABASE_URL!,
});

// Use Supabase client for auth and realtime features
const { data, error } = await supabase.from('your_table').select();

// Use Drizzle client for type-safe database operations
const users = await db.query.users.findMany();

// Don't forget to disconnect when done
await disconnect();
```

3. Running migrations:

```typescript
import { runMigrations } from '@repo/db';

await runMigrations(process.env.DATABASE_URL!);
```

## Features

- Type-safe database operations with Drizzle ORM
- Supabase integration for auth and realtime features
- Connection pooling with proper cleanup
- SSL enabled for secure connections
- Automatic validation of configuration

## Development

To modify the database schema:

1. Update the schema files in `./schema`
2. Generate migrations:

```bash
pnpm db:generate
```

3. Push migrations to your database:

```bash
pnpm db:push
```
