import { connect } from "@planetscale/database"
import mysql from "mysql2"

const {
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_INFRA,
} = process.env

let uri = `mysql://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}`

const connection =
  DATABASE_INFRA === "planetscale"
    ? connect({
        host: DATABASE_HOST,
        username: DATABASE_USERNAME,
        password: DATABASE_PASSWORD,
      })
    : mysql.createConnection(uri)

export { connection }
