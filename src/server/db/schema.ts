// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  bigint,
  boolean,
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
    first_name: varchar("first_name", { length: 256 }),
    last_name: varchar("last_name", { length: 256 }),
    birthdate: timestamp("birthdate"),
    avatar: varchar("avatar", { length: 256 }),
    description: varchar("description", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
    email: varchar("email", { length: 256 }),
    password: varchar("password", { length: 256 }),
    status: boolean("status").default(false),
    document_type_id: bigint("document_type_id", { mode: "number" }),
    document_number: varchar("document_number", { length: 256 }),
    phone_number: varchar("phone_number", { length: 256 }),
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
    userId: varchar("user_id", { length: 256 }).notNull(),
  },
  (example) => ({
    urlIndex: index("url_idx").on(example.url),
  })
);

export const users_events = createTable(
  "user_event",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    userId: bigint("user_id", { mode: "number" }).notNull(),
    eventId: bigint("event_id", { mode: "number" }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
  },
  (example) => ({
    userIdIndex: index("user_id_idx").on(example.userId),
    eventIdIndex: index("event_id_idx").on(example.eventId),
  })
);