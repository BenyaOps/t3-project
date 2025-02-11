import { sql } from 'drizzle-orm';
import { bigint, index, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';


export const eventsTable = mysqlTable('notworking_events_event',
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
        nameIndex: index("name_event_idx").on(example.name),
      })
)