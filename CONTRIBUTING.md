# Contributing

Thank you for considering contributing to this project!

## Code Style

- Use [Prettier](https://prettier.io/) for formatting.
- Use [ESLint](https://eslint.org/) for linting and code quality checks.
- Follow JavaScript best practices and ES2022+ features.

## Pre-commit Hooks

- Run `npm run prepare` after cloning to set up Husky hooks.
- Run `npm run precommit` before pushing to run all checks.

## Pull Requests

- Fork the repo and create your branch from `main`.
- Ensure all tests pass (`npm test`).
- Ensure linting passes (`npm run lint`).
- Add/Update tests for new features or bugfixes.
- Keep PRs focused and well-described.

## Tests

- Place tests in the `tests/` directory.
- Use [Jest](https://jestjs.io/) for writing tests.
- Run `npm test` to execute all tests.
- Run `npm run test:coverage` to see coverage reports.

## Development Setup

```bash
# Install dependencies
npm install

# Run the CLI
npm start
# or
node src/starter-template/main.js

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format
```

## Questions

Open an issue or discussion for help or suggestions.
