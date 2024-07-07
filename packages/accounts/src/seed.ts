import { prisma } from "./client";

import type { Account } from "@repo/accounts";

const DEFAULT_ACCOUNTS = [
  { id: "clya1jleh00003b6xsw0y6793" },
  { id: "25r53dknfsler1jj43243989d" },
  { id: "1234dsagdadlekelrleklelke" }
] satisfies Partial<Account>[];

(async () => {
  try {
    await Promise.all(
      DEFAULT_ACCOUNTS.map((account) =>
        prisma.account.upsert({
          where: {
            id: account.id!
          },
          update: {
            ...account
          },
          create: {
            ...account
          }
        })
      )
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
