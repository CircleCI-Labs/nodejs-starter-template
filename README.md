# Node.js Starter Template

A standardized Node.js project template for [Your Organization].

## Overview

This repository provides a solid foundation for new Node.js projects, enforcing best practices, code quality, and a modern CI/CD workflow using CircleCI.

## Features

- Modern Node.js project structure with CommonJS modules
- Pre-commit hooks for linting and formatting
- Unit testing with Jest and JUnit XML output
- Docker support for containerized builds
- Team-specific CircleCI configuration via `.circleci/team-config.yml`
- CLI application with Commander.js

## Getting Started

### Prerequisites

- Node.js 20.x (LTS)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (optional, for container builds)

### Installation

```bash
# Clone the repository (if using as template)
git clone <repository-url>
cd nodejs-starter-template

# Install dependencies
npm install

# Set up pre-commit hooks
npm run prepare
```

### Running the Application

```bash
# Run the CLI directly
node src/starter-template/main.js

# Or use npm scripts
npm start
npm run hello
npm run build

# Available commands:
node src/starter-template/main.js hello
node src/starter-template/main.js build
```

### Running Tests

To run all tests using Jest:

```bash
npm test
```

For test coverage:

```bash
npm run test:coverage
```

You should see output indicating that the sample tests in the `tests/` directory have run and passed.

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting
npm run format:check

# Run pre-commit checks manually
npm run precommit
```

### Building the Docker Image

```bash
docker build -t starter-template:latest .
```

### Running with Docker

```bash
docker run --rm starter-template:latest
```

## CI/CD with CircleCI

This project uses a **centralized CircleCI configuration** managed by the platform team.

- The main pipeline config (`config.yml`) is maintained in a separate repo and referenced by all projects.
- This repo contains a `.circleci/team-config.yml` file, which you can use to override or extend jobs/workflows for your team's needs.
- For more information, see [Platform Team CI/CD Docs](#).

## Project Structure

```
nodejs-starter-template/
├── src/
│   └── starter-template/
│       ├── index.js          # Main library exports
│       ├── cli.js            # CLI command implementations
│       └── main.js           # CLI entry point
├── tests/
│   ├── test-sample.js        # Sample tests
│   └── test-build.js         # Build command tests
├── .circleci/
│   └── team-config.yml       # Team-specific CI configuration
├── .github/
│   ├── ISSUE_TEMPLATE/       # GitHub issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── package.json              # Dependencies and scripts
├── jest.config.js            # Jest configuration
├── .eslintrc.js              # ESLint configuration
├── .prettierrc               # Prettier configuration
├── .pre-commit-config.yaml   # Pre-commit hooks
├── Dockerfile                # Docker configuration
└── README.md
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

See [LICENSE](LICENSE) for details.

---

> _Replace this text with project-specific details as needed._
