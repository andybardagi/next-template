import type { Config } from "drizzle-kit"

const {
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_INFRA,
} = process.env

const config = {
  schema: "./src/db/schema/*",
  out: "./src/db/migrations",
  dbCredentials:
    DATABASE_INFRA === "planetscale"
      ? {
          host: DATABASE_HOST as string,
          user: DATABASE_USERNAME as string,
          password: DATABASE_PASSWORD as string,
          database: DATABASE_NAME as string,
        }
      : {
          uri: `mysql://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}`,
        },
  driver: "mysql2",
} satisfies Config

export default config
