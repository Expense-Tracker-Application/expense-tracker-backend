# Expense Tracker Backend

A backend service for tracking expenses.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v7 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/expense-tracker-backend.git
cd expense-tracker-backend

# Install dependencies
pnpm install
```

### Running the Application

The application supports multiple environments (development, staging, production).

#### Development Mode

```bash
# Run in development mode
pnpm dev

# Run in staging mode
pnpm dev:staging

# Run in production mode
pnpm dev:prod
```

#### Production Mode

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

### Creating Commits

Use our commit script to create properly formatted commits:

```bash
pnpm commit
```

## Documentation

All project documentation is available in the `doc` folder:

- [Environment Configuration](doc/environments.md)
- [Import Aliases](doc/alias.md)
- [Commit Message Standards](doc/commit-standards.md) 