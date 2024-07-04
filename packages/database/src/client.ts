import { PrismaClient } from "./generated/client";

let client: PrismaClient;

if (process.env.NODE_ENV === "production") {
  client = new PrismaClient();
} else {
  let globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  client = globalWithPrisma.prisma;
}

export const prisma: any = client;
export * from "./generated/client";
