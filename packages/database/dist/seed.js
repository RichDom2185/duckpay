"use strict";

// src/client.ts
var import_client = require("@prisma/client");
var prisma;
if (process.env.NODE_ENV === "production") {
  prisma = new import_client.PrismaClient();
} else {
  let globalWithPrisma = global;
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new import_client.PrismaClient();
  }
  prisma = globalWithPrisma.prisma;
}
var client_default = prisma;

// src/seed.ts
var DEFAULT_USERS = [
  // Add your own user to pre-populate the database with
  {
    name: "Tim Apple",
    email: "tim@apple.com"
  }
];
(async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map(
        (user) => client_default.user.upsert({
          where: {
            email: user.email
          },
          update: {
            ...user
          },
          create: {
            ...user
          }
        })
      )
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await client_default.$disconnect();
  }
})();
