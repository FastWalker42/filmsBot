import { int, text, sqliteTable } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const usersTable = sqliteTable('users', {
  user_id: int().notNull().unique(),
  balance: int().notNull().default(0),
  partner_id: int().notNull().default(0),
  mining_time: text().notNull().default(''),
  last_activity: text()
    .notNull()
    .default(sql`(current_timestamp)`),
})
