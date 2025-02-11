import { sql } from 'drizzle-orm';
import { bigint, boolean, index, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('notworking_events_user', 
    {
        id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
        clerk_id : varchar("clerk_id", { length: 256 }),
        name: varchar("name", { length: 256 }),
        username: varchar("username", { length: 256 }),
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
        nameIndex: index("name_events_user_idx").on(example.name),
      })
);