import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Only the CLI (migrate / db push) reads this. It must be the DIRECT
    // Supabase connection (port 5432) — migrations can't run over the pooler.
    // The app itself connects via the driver adapter in lib/prisma.ts, which
    // uses the pooled DATABASE_URL instead.
    url: env("DIRECT_URL"),
  },
});
