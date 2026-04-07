# Students API

Simple NestJS students API for a beginner class using PostgreSQL and TypeORM.

## Requirements

- Node.js 22+
- npm
- Docker and Docker Compose if you want to run everything in containers

## Environment variables

Copy `.env.example` to `.env` and keep the values below for local development:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=students_db
PORT=3000
```

## Run with Docker

This starts both the Nest app and PostgreSQL.

```bash
docker compose up --build
```

The API will be available at `http://localhost:3000`.

PostgreSQL will be available on `localhost:5432` with:

- database: `students_db`
- username: `postgres`
- password: `postgres`

To stop the containers:

```bash
docker compose down
```

To stop the containers and remove the saved database volume:

```bash
docker compose down -v
```

## Run locally with PostgreSQL

1. Install dependencies:

```bash
npm install
```

2. Make sure PostgreSQL is running locally and create a database named `students_db`.

3. Create your `.env` file from `.env.example`.

4. Start the app:

```bash
npm run start:dev
```

## Useful scripts

```bash
npm run build
npm run start
npm run start:dev
npm run start:prod
npm run test
npm run test:e2e
```

## Notes

- The app connects to PostgreSQL through TypeORM.
- `synchronize: true` is enabled in `src/app.module.ts`, which is convenient for learning but should be turned off in production apps that use migrations.
