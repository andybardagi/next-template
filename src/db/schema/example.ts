// Remove this file

import { mysqlTable, varchar } from "drizzle-orm/mysql-core"

export const exampleTable = mysqlTable("db_table_name", {
  column1: varchar("db_column_name", { length: 255 }).primaryKey(),
})
