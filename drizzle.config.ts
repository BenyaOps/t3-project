import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schemas/*",
  out: "./src/server/db/migrations",
  dialect: "mysql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  
} satisfies Config;
