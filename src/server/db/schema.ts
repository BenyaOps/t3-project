// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  bigint,
  index,
  mysqlTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = mysqlTableCreator((name) => `notworking_events_${name}`);

export const posts = createTable(
  "post",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const users = createTable(
  "user",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
    email: varchar("email", { length: 256 }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const events = createTable(
  "event",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
    country: varchar("country", { length: 256 }),
    province: varchar("province", { length: 256 }),
    district: varchar("district", { length: 256 }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const images = createTable(
  "image",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    url: varchar("url", { length: 256 }),
    title: varchar("title", { length: 256 }),
  },
  (example) => ({
    urlIndex: index("url_idx").on(example.url),
  })
);