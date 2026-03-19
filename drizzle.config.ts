import { defineConfig } from "drizzle-kit";

if (!process.env.MYSQL_URL) {
  throw new Error("MYSQL_URL environment variable is not set.");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.MYSQL_URL,
  },
});
