import 'dotenv/config';
import type { Config } from 'drizzle-kit';

// This configuration is only used for generating migrations
// Each app will provide its own database connection details
export default {
  schema: './schema/index.ts',
  out: './drizzle',
  driver: 'pg',
  // These are just placeholder values for migration generation
  // The actual values will be provided by the consuming application
  dbCredentials: {
    connectionString: process.env.DATABASE_URL ?? 'postgresql://placeholder:placeholder@localhost:5432/placeholder',
  },
} satisfies Config;
