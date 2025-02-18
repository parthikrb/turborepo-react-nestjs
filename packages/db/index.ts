import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import * as schema from './schema';

export interface SupabaseConfig {
  /** Supabase project URL */
  projectUrl: string;
  /** Supabase anonymous key */
  anonKey: string;
  /** Database connection string */
  connectionString: string;
}

/**
 * Creates database clients for both Supabase and Drizzle
 * @param config Supabase configuration
 * @returns Object containing both Supabase and Drizzle clients
 */
export function createDatabaseClient(config: SupabaseConfig) {
  // Validate config
  if (!config.projectUrl) {
    throw new Error('Supabase project URL is required');
  }
  if (!config.anonKey) {
    throw new Error('Supabase anonymous key is required');
  }
  if (!config.connectionString) {
    throw new Error('Database connection string is required');
  }

  // Create Supabase client
  const supabase = createSupabaseClient(config.projectUrl, config.anonKey);

  // Create Drizzle client
  const queryClient = postgres(config.connectionString, {
    ssl: true,
    max: 1,
  });
  const drizzleDb = drizzle(queryClient, { schema });

  return {
    supabase,
    db: drizzleDb,
    async disconnect() {
      await queryClient.end();
    },
  };
}

/**
 * Runs database migrations
 * @param connectionString Database connection string
 */
export async function runMigrations(connectionString: string) {
  if (!connectionString) {
    throw new Error('Database connection string is required for migrations');
  }

  const migrationClient = postgres(connectionString, {
    ssl: true,
    max: 1,
  });

  try {
    await migrate(drizzle(migrationClient), {
      migrationsFolder: './drizzle',
    });
  } finally {
    await migrationClient.end();
  }
}

export * from './schema';
