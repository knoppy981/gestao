import { PrismaClient } from "@prisma/client";

// Reuse a single PrismaClient instance across hot-reloads in development.
// Each new PrismaClient opens its own connection pool, so instantiating one
// per request would exhaust the database connections.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
