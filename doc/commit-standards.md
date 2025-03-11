# Commit Message Standards

This document outlines the commit message standards for the Expense Tracker project. Following these standards helps maintain a clean and informative git history, facilitates automated changelog generation, and makes code reviews more efficient.

## Commit Message Format

Each commit message consists of a **header**, an optional **body**, and an optional **footer**. The header has a special format that includes a **type**, an optional **scope**, and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Header

The header is mandatory and must conform to the following format:

- **type**: Identifies the kind of change being made (see Types section below)
- **scope** (optional): Identifies the part of the codebase affected by the change (e.g., auth, expenses, config)
- **subject**: A brief description of the change in the present tense, not capitalized, and no period at the end

#### Types

- **feat**: A new feature for the user or a significant addition to the application
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries
- **ci**: Changes to CI configuration files and scripts
- **build**: Changes that affect the build system or external dependencies

### Body

The body is optional but recommended for explaining the motivation behind the change. Use the body to explain:

- Why was this change necessary?
- How does it address the issue?
- What side effects does it have?

### Footer

The footer is optional and is used for:

- Referencing issues that this commit closes or is related to
- Breaking changes (if any)

## Examples

### Simple Feature Addition

```
feat(auth): add email verification functionality
```

### Bug Fix with Issue Reference

```
fix(expenses): correct date calculation for monthly reports

Closes #123
```

### Documentation Update

```
docs(readme): update installation instructions
```

### Complex Change with Body and Footer

```
refactor(api): restructure expense endpoints for better performance

- Simplified the route handlers
- Improved query efficiency by adding indexes
- Reduced response payload size

BREAKING CHANGE: The response format for /api/expenses has changed.
Old format included nested user data, new format includes only user ID.
```

## Best Practices

1. **Keep subject lines concise** - Aim for 50 characters or less
2. **Use imperative mood** - Write "add" not "added" or "adds"
3. **Don't end the subject line with a period**
4. **Separate subject from body with a blank line**
5. **Wrap body text at 72 characters**
6. **Use the body to explain what and why vs. how**
7. **Always reference related issues in the footer**

## Tools

Consider using tools like [Commitizen](https://github.com/commitizen/cz-cli) to help format commit messages according to these standards.

## Automated Validation

We use [commitlint](https://commitlint.js.org/) to automatically validate commit messages against these standards. Invalid commit messages will be rejected.

## Changelog Generation

Following these standards allows us to automatically generate changelogs using tools like [standard-version](https://github.com/conventional-changelog/standard-version) or [semantic-release](https://github.com/semantic-release/semantic-release). 