import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "@shared/schema";

if (!process.env.MYSQL_URL) {
  throw new Error("MYSQL_URL environment variable is not set. Please add your MySQL connection string.");
}

const pool = mysql.createPool(process.env.MYSQL_URL);

export const db = drizzle(pool, { schema, mode: "default" });
