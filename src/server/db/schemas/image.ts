
import { bigint,index, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const imagesTable = mysqlTable('notworking_events_images', 
    {
        id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
        url: varchar("url", { length: 256 }),
        title: varchar("title", { length: 256 }),
        userId: varchar("user_id", { length: 256 }).notNull(),
      },
      (example) => ({
        urlIndex: index("url_images_idx").on(example.url),
      })
);