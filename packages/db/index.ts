import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schema";

export function createClient(databaseUrl: string) {
  // for queries
  const queryClient = postgres(databaseUrl);
  return drizzle(queryClient, { schema });
}

export async function runMigrations(databaseUrl: string) {
  // for migrations
  const migrationClient = postgres(databaseUrl, { max: 1 });
  
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "./drizzle",
  });
  await migrationClient.end();
}

export type * from "drizzle-orm/pg-core";
export * from "./schema";
