
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Simple table to track page views (optional, for future use)
export const pageViewsTable = pgTable('page_views', {
  id: serial('id').primaryKey(),
  page_name: text('page_name').notNull(),
  viewed_at: timestamp('viewed_at').defaultNow().notNull(),
});

export type PageView = typeof pageViewsTable.$inferSelect;
export type NewPageView = typeof pageViewsTable.$inferInsert;

// Export all tables for relation queries
export const tables = { pageViews: pageViewsTable };
