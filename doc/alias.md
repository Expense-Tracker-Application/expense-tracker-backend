# Import Aliases

This document describes the import aliases configured in the Expense Tracker Backend application. Import aliases provide a cleaner and more maintainable way to import modules across the application.

## Configured Aliases

| Alias | Path | Description |
|-------|------|-------------|
| `@config/*` | `src/config/*` | Configuration-related modules including environment settings, application configuration, and constants. |

## Examples

### Before (without aliases)

```typescript
// Importing from a deeply nested file
import config from '../../../config';
import { Environment } from '../../../config/types';
```

### After (with aliases)

```typescript
// Cleaner imports using aliases
import config from '@config/index';
import { Environment } from '@config/types';
```

## Adding New Aliases

As the project grows, we'll add more aliases to keep the codebase organized. When adding new aliases:

1. Update the `paths` configuration in `tsconfig.json`:

```json
"paths": {
  "@config/*": ["src/config/*"],
  "@models/*": ["src/models/*"],
  "@controllers/*": ["src/controllers/*"]
  // Add new aliases here
}
```

2. Update this documentation file with the new alias information.

## Benefits of Using Aliases

- **Cleaner imports**: No more long relative paths with multiple `../../../`
- **Easier refactoring**: Moving files around doesn't break import paths
- **Better organization**: Logical grouping of related modules
- **Improved readability**: Clear indication of where imports are coming from

## Supported Aliases (Current)

- `@config/*`: Configuration-related files 