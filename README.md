# Developers Guide

[![VitePress Documentation](https://img.shields.io/badge/vitepress-1.6.3-blue)](https://vitepress.dev/)
[![PNPM Documentation](https://img.shields.io/badge/pnpm-10.2.0-orange)](https://pnpm.io/)
[![OpenAPI Documentation](https://img.shields.io/badge/openapi-3.0-green)](https://swagger.io/specification/)

Welcome to the Developers Docs project. This document provides essential information to help you get started and contribute effectively.

## Project Overview

This project provides comprehensive public and private documentation about Zarv APIs. Public APIs are identified as OpenAPI documents tagged with `public`, while all others are considered **PRIVATE**.

The documentation is divided into the following sections:

1. **Public APIs**: These APIs are available to external developers for integration with Zarv services. The public documentation includes detailed guides, examples, and OpenAPI specifications to help developers get started quickly.

2. **Private APIs**: These APIs are internal to Zarv's engineering teams. Access to private APIs is restricted and requires proper authorization. The private documentation provides in-depth technical details, workflows, and best practices for internal use.

This guide will help you understand the structure and processes involved in contributing to the project, whether you're working on public-facing APIs or internal tools. By following the guidelines outlined here, you can ensure consistency, quality, and maintainability across all documentation efforts.

## Getting Started

1. Clone the repository:

  ```bash
  git clone https://github.com/zarvhq/developers.git
  ```

2. Install dependencies:

  ```bash
  make install
  ```

3. Run the application locally:

  ```bash
  pnpm dev
  ```

4. Build the static content:

  ```bash
  pnpm build
  ```

## Development Workflow

- **Branching**: Use feature branches for new features (e.g., `feature/feature-name`).
- **Commits**: Write clear and concise commit messages.
- **Pull Requests**: Submit pull requests for review before merging.

## Documentation

We use [VitePress](https://vitepress.dev/) to manage the project documentation and [VitePress OpenAPI](https://vitepress-openapi.vercel.app) to generate OpenApi informations. To contribute to the documentation, edit the relevant files in the `[language]` directory.

## API Documentation

To add a new API doc, update the OpenAPI configuration in `[language]/reference/api/services.ts` with the following structure:

```javascript
export default [
  {
    ... // Other Services
  },
  {
    // Service URL slug
    slug: 'fleet-tracking',

    // Service name
    label: 'Fleet Tracking',

    // URL to OpenAPI JSON
    specUrl: 'https://api-services.zarv.com/fleet-tracking/swagger-json',

    // VitePress-OpenAPI theme config (optional)
    themeConfig: {},
  }
]
```

## Deploy

The deployment process is automated using GitHub Actions. Once the code is pushed to the `main` branch, the following steps occur:

1. GitHub Actions workflow is triggered.
2. The documentation is built using the `pnpm build` command.
3. The generated static files are uploaded to an S3 bucket for hosting.

Ensure that the necessary AWS credentials and S3 bucket configurations are set up in the GitHub repository secrets.

Happy coding!
