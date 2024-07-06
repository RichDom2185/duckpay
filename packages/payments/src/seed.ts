import cuid from "cuid";
import { prisma } from "./client";

const accountId1 = "clya1jleh00003b6xsw0y6793";
const amounts1 = Array.from(
  { length: 20 },
  () => Math.floor(Math.random() * 100) + 1,
);

const accountId2 = "25r53dknfsler1jj43243989d";
const amounts2 = Array.from(
  { length: 30 },
  () => Math.floor(Math.random() * 100) + 1,
);

const accountId3 = "1234dsagdadlekelrleklelke";
const amounts3 = Array.from(
  { length: 12 },
  () => Math.floor(Math.random() * 100) + 1,
);

const generateTokens = (accountId: string, amounts: number[]) => {
  const DEFAULT_CURRENCY = "SGD";
  return amounts.map((amount) => ({
    id: cuid(),
    accountId,
    amount,
    currency: DEFAULT_CURRENCY,
  }));
};

const tokens1 = generateTokens(accountId1, amounts1);
const tokens2 = generateTokens(accountId2, amounts2);
const tokens3 = generateTokens(accountId3, amounts3);

const DEFAULT_TOKENS = [...tokens1, ...tokens2, ...tokens3];

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
      ),
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
