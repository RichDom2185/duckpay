FROM node:24-bookworm-slim AS base

FROM base AS builder
WORKDIR /app

COPY . .
RUN turbo prune account-service --docker

FROM base AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install
RUN pnpm turbo generate

COPY --from=builder /app/out/full/ .
RUN pnpm turbo build --filter=account-service...

FROM base AS runner

RUN apt-get update && apt-get install -y unzip curl \
    && rm -rf /var/lib/apt/lists/*
RUN curl -fsSL https://bun.sh/install | BUN_INSTALL=/usr/local bash

WORKDIR /app

RUN addgroup --system --gid 1001 expressjs
RUN adduser --system --uid 1001 expressjs
USER expressjs
COPY --from=installer /app .

CMD ["bun", "apps/account-service/dist/main.js"]
