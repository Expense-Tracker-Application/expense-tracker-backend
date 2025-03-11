# Environment Configuration

This document describes the environment configuration setup for the Expense Tracker Backend application.

## Supported Environments

The application supports multiple environments:

- **Development**: Local development environment
- **Staging**: Pre-production testing environment
- **Production**: Live production environment

## Environment Files

The application uses environment-specific configuration files:

- `.env.development` - Development environment settings
- `.env.staging` - Staging environment settings
- `.env.production` - Production environment settings
- `.env` - Default fallback settings

## Configuration Options

The following configuration options are available in the environment files:

### Server Configuration
- `PORT` - The port the server will listen on
- `HOST` - The host address to bind to
- `NODE_ENV` - The environment mode (development, staging, production)

### Database Configuration
- `DATABASE_URL` - The connection string for the database

### Logging
- `LOG_LEVEL` - The logging level (debug, info, warn, error)

### API Configuration
- `API_PREFIX` - The prefix for API routes

## Example Configuration

```dotenv
# Server Configuration
PORT=3000
HOST=localhost
NODE_ENV=development

# Database Configuration
DATABASE_URL="postgresql://postgres:password@localhost:5432/expense_tracker_dev"

# Logging
LOG_LEVEL=debug

# API Configuration
API_PREFIX=/api
```

## Environment-Specific Scripts

The application provides scripts for running in different environments:

### Development Mode
```bash
# Run in development mode
pnpm dev

# Run in staging mode
pnpm dev:staging

# Run in production mode
pnpm dev:prod
```

### Production Mode
```bash
# Build the application
pnpm build

# Start in development mode
pnpm start:dev

# Start in staging mode
pnpm start:staging

# Start in production mode
pnpm start:prod
```

## Implementation Details

The environment configuration is managed by the `src/config/environment.ts` file, which:

1. Loads the appropriate `.env` file based on the `NODE_ENV` environment variable
2. Provides a typed interface for accessing configuration values
3. Handles fallbacks for missing values

You can access the configuration in your code using:

```typescript
import config from '@config/index';

// Access configuration values
const { port, host } = config.server;
const { url } = config.database;
``` 