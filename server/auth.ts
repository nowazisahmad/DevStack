import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

export const auth = betterAuth({
  database: new Database("./server/database.sqlite"),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: ["http://localhost:5173"],
});
