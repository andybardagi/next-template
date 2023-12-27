import { Connection as PSConnection } from "@planetscale/database"
import { drizzle } from "drizzle-orm/mysql2"
import { drizzle as drizzlePlanteScale } from "drizzle-orm/planetscale-serverless"
import { Connection } from "mysql2"

import { connection } from "./connection"
import * as schema from "./schema"

const db =
  process.env.DATABASE_INFRA === "planetscale"
    ? drizzlePlanteScale(connection as PSConnection, { schema })
    : drizzle(connection as Connection, { mode: "default", schema })

export * from "drizzle-orm"
export * from "./connection"
export * from "./schema"
export { db }
