# NestJS Enterprise Boilerplate

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10.0-red.svg)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-blue.svg)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)

An enterprise-grade NestJS boilerplate with TypeScript, PostgreSQL, TypeORM, and comprehensive development tooling.

## Key Features

- 🚀 **NestJS 10.x** with TypeScript
- 🏛️ **Clean Architecture** design principles
- 🗃️ **TypeORM** with PostgreSQL
- 🔐 **JWT Authentication** built-in
- 🌐 **i18n** Internationalization support
- 📝 **Swagger/OpenAPI** documentation
- 🐳 **Docker** ready
- 🧪 **Testing** setup (Jest & E2E)
- ✨ **Code Quality** tools (ESLint, Prettier)
- 🏗️ **CI/CD** with GitHub Actions
- 📦 **Module Generator** using Hygen

## Environment Setup Guide

### Prerequisites
- Node.js (v16 or higher)
- Docker and Docker Compose
- PostgreSQL (if running locally)
- Redis (if running locally)

## Clone repository

```bash
npx degit CaoCuong2404/nestjs-enterprise-boilerplate my-project

# Configure environment
cp .env.example .env

```

### Environment Variables
The project uses various environment variables for configuration.

#### Core Configuration
```bash
NODE_ENV=development        # Application environment
PORT=3000                   # Main API port
TRANSPORT_PORT=8080         # WebSocket port
API_VERSION=v1.0.0         # API version
```

#### Security Settings

```bash
JWT_EXPIRATION_TIME=3600   # JWT token expiration (seconds)
FALLBACK_LANGUAGE=en_US    # Default language
```

#### Database Configuration

```bash
# PostgreSQL settings
DB_TYPE=postgres
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=nest_boilerplate
```

#### Cache Configuration

```bash
# Redis settings
REDIS_CACHE_ENABLED=true
REDIS_HOST=localhost
REDIS_PORT=6379
```

## Quick Start Development

1. Start Dependencies
```bash
# Start PostgreSQL and Redis
docker-compose up -d postgres redis
```

2. Install Dependencies
```bash
yarn install
```

3. Database Setup
```bash
# Run migrations
yarn migration:run
```

4. Start Development Server

```bash
# Start with hot-reload
yarn start:dev
```

5. Production Build
```bash
yarn build:prod
```

6. Verify setup

- API Documentation: http://localhost:3000/documentation for Swagger API documentation.
- Health Check: http://localhost:3000/health

## Documentation
- Setup Guide
- Architecture Overview
- API Documentation
- Naming Conventions

## Common Issues

1. Database Connection
- Ensure PostgreSQL is running: `docker ps | grep postgres`
- Check credentials in `.env`
- Default connection: `postgresql://postgres:postgres@localhost:5432/nest_boilerplate`
2. Redis Connection
- Verify Redis status: `docker ps | grep redis`
- Default connection: `redis://localhost:6379`
3. JWT Keys
- Default JWT keys are provided in `.env.example`
- For production, generate new keys:

```bash
# Generate new RSA key pair
ssh-keygen -t rsa -b 4096 -m PEM -f jwt.key
```

## License

MIT License
