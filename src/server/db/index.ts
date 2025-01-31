import { drizzle } from "drizzle-orm/mysql2";
import { createPool, type Pool } from "mysql2/promise";

import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: Pool | undefined;
};

const conn = globalForDb.conn ?? createPool({ uri: env.DATABASE_URL });
if (env.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema, mode: "default" });
export async function testDbConnection() {
  try {
    await conn.query("SELECT 1");
    console.log("Database connection is valid.");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

testDbConnection()
  .then(() => {
    console.log("Database connection test passed.");
  })
  .catch((error) => {
    console.error("Database connection test failed:", error);
  });