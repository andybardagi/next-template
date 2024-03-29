import { Connection as PSConnection } from "@planetscale/database"
import { drizzle } from "drizzle-orm/planetscale-serverless"

import { connection } from "./connection"
import * as schema from "./schema"

const db = drizzle(connection as PSConnection, { schema })

export * from "drizzle-orm"
export * from "./connection"
export * from "./schema"
export { db }

