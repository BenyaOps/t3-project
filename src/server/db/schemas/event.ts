import { sql } from 'drizzle-orm';
import { bigint, index, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';


export const eventsTable = mysqlTable('notworking_events_event',
    {
        id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
        name: varchar("name", { length: 256 }),
        userId: varchar("user_id", { length: 256 }).notNull(),
        createdAt: timestamp("created_at")
          .default(sql`CURRENT_TIMESTAMP`)
          .notNull(),
        updatedAt: timestamp("updated_at").onUpdateNow(),
        country: varchar("country", { length: 256 }),
        province: varchar("province", { length: 256 }),
        district: varchar("district", { length: 256 }),
        location: varchar("location", { length: 256 }),
        date: timestamp("date"),
        description: varchar("description", { length: 256 }),
        url_img: varchar("url_img", { length: 256 }),
        start_time: timestamp("start_time"),
        end_time: timestamp("end_time"),
      },
      (example) => ({
        nameIndex: index("name_event_idx").on(example.name),
      })
)