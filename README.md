# Event App Server

A TypeScript-based REST API server for an event application. Built with Express.js, Prisma ORM, and PostgreSQL with PostGIS for geospatial event querying.

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js v5
- **ORM**: Prisma with PostgreSQL
- **Geospatial**: PostGIS (`geometry` type for location data)
- **Deployment**: Render

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL with PostGIS extension enabled
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
PORT=3000
```

### Database Setup

Enable PostGIS on your database:

```sql
CREATE EXTENSION IF NOT EXISTS postgis;
```

Run migrations:

```bash
npx prisma migrate deploy
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

## API Endpoints

### Auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/login` | Authenticate a user |

**Request body:**
```json
{
  "email": "user@example.com",
  "password": "password"
}
```

---

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users` | Create a new user |
| GET | `/users/:id` | Get a user by ID |

**POST `/users` request body:**
```json
{
  "full_name": "John Doe",
  "email": "user@example.com",
  "user_name": "johndoe",
  "password": "password"
}
```

---

### Events

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/events?lat=&lon=&radius=` | Get events near a location |

**Query parameters:**

| Param | Type | Description |
|-------|------|-------------|
| `lat` | number | Latitude |
| `lon` | number | Longitude |
| `radius` | number | Search radius |

## Project Structure

```
src/
├── server.ts          # Entry point
├── apis/              # Route handlers
│   ├── events.ts
│   ├── login.ts
│   └── users.ts
├── service/           # Business logic
│   ├── events.ts
│   ├── login.ts
│   └── users.ts
├── schemas/           # Request type definitions
└── generated/         # Prisma generated client
prisma/
├── schema.prisma      # Database schema
└── migrations/        # Migration files
```

## Deployment

This project is configured for deployment on [Render](https://render.com) via `render.yaml`.

Set the following environment variables in your Render service dashboard:

- `DATABASE_URL` — your Render PostgreSQL connection string

The build command runs `prisma migrate deploy` automatically on each deploy to apply pending migrations.
