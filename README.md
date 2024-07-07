# DuckPay

> Digital cash equivalent.

## Project structure

This project is a monorepo set up using [Turborepo](https://turbo.build).

```plaintext
.
├── apps
│  ├── account-service
│  ├── atm
│  ├── payment-service
│  └── web
├── deployment
│  └── nginx-config
├── docker-compose.yml
└── packages
   ├── accounts
   ├── api
   ├── config-eslint
   ├── config-typescript
   └── payments
```

* `apps` - Contains the services & applications that make up the project
  * `account-service` - The account service backend (Express.js, TypeScript)
  * `atm` - The ATM frontend application (React.js, TypeScript)
  * `payment-service` - The payment service backend (Express.js, TypeScript)
  * `web` - The frontend web application (React.js, TypeScript)
* `deployment` - Contains the deployment configurations for the project
  * `nginx-config` - Contains the Nginx configuration for the project
* `docker-compose.yml` - The Docker Compose configuration for the project
* `packages` - Contains the shared packages used across the project
  * `accounts` - Contains the account database client (Prisma)
  * `api` - Contains the shared API client (Axios)
  * `config-eslint` - Contains the shared ESLint configuration
  * `config-typescript` - Contains the shared TypeScript configuration
  * `payments` - Contains the payment database client (Prisma)

## Deployment

The project is managed using Docker Compose. Simply run the build command to deploy:

```bash
docker compose up
```

Once deployed & up & running, you will need to create & deploy migrations to your database to add the necessary tables. This can be done using [Prisma Migrate](https://www.prisma.io/migrate):

```bash
npx prisma migrate dev
```

If you need to push any existing migrations to the database, you can use either the Prisma db push or the Prisma migrate deploy command(s):

```bash
yarn run db:push

# OR

yarn run db:migrate:deploy
```

There is slight difference between the two commands & [Prisma offers a breakdown on which command is best to use](https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push#choosing-db-push-or-prisma-migrate).

An optional additional step is to seed some initial or fake data to your database using [Prisma's seeding functionality](https://www.prisma.io/docs/guides/database/seed-database).

```bash
yarn run db:seed
```

## Useful Links

Learn more about the power of Turborepo:

* [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
* [Caching](https://turbo.build/repo/docs/core-concepts/caching)
* [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
* [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
* [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
* [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
