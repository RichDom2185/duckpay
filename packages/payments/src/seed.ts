import cuid from "cuid";
import { prisma } from "./client";

import type { Token } from "@prisma/client";

const accountId = cuid();

const DEFAULT_TOKENS = [
  {
    id: cuid(),
    accountId,
    amount: 5,
    currency: "SGD",
  },
  {
    id: cuid(),
    accountId,
    amount: 10,
    currency: "SGD",
  },
] satisfies Partial<Token>[];

(async () => {
  try {
    await Promise.all(
      DEFAULT_TOKENS.map((token) =>
        prisma.token.upsert({
          where: {
            id: token.id!,
          },
          update: {
            ...token,
          },
          create: {
            ...token,
          },
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
