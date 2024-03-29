import { connect } from "@planetscale/database"

const { DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_HOST } = process.env

const connection = connect({
  host: DATABASE_HOST,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
})

export { connection }
