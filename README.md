# Expense Tracker Backend

A backend service for tracking expenses with support for multiple environments.

## Environment Configuration

This application supports multiple environments:

- **Development**: Local development environment
- **Staging**: Pre-production testing environment
- **Production**: Live production environment

## Environment Files

The application uses environment-specific configuration files:

- `.env.development` - Development environment settings
- `.env.staging` - Staging environment settings
- `.env.production` - Production environment settings
- `.env` - Default fallback settings

## Available Scripts

In the project directory, you can run:

### Development

```bash
# Run in development mode
pnpm dev

# Run in staging mode
pnpm dev:staging

# Run in production mode
pnpm dev:prod
```

### Production

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