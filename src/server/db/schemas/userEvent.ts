import { sql } from 'drizzle-orm';
import { bigint, index, mysqlTable, timestamp } from 'drizzle-orm/mysql-core';

export const usersEventsTable = mysqlTable('notworking_events_user_event', 
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
        userIdIndex: index("user_id_user_event_idx").on(example.userId),
        eventIdIndex: index("event_id_user_event_idx").on(example.eventId),
      })
);