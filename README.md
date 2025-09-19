# Zarv Developers Documentation

Documentation for Zarv Developers - A comprehensive guide and API reference for developers using Zarv services.

## Getting Started

This project uses VitePress to generate static documentation from markdown files.

### Installation

First, make sure you have [pnpm](https://pnpm.io/) installed on your system. If you don't have it, you can install it globally:

```bash
npm install -g pnpm
```

Then, install the project dependencies:

```bash
pnpm install
```

## Available Scripts

### Development

#### `pnpm dev`
Starts the VitePress development server with hot reload functionality.
```bash
pnpm dev
```
This will start a local development server, typically at `http://localhost:5173`, where you can preview your documentation changes in real-time.

### Building

#### `pnpm build`
Builds the documentation for production deployment.
```bash
pnpm build
```
This command generates optimized static files in the `docs/.vitepress/dist` directory, ready for deployment to any static hosting service.

### Preview

#### `pnpm preview`
Serves the built documentation locally for testing before deployment.
```bash
pnpm preview
```
Use this command after running `pnpm build` to preview the production build locally and ensure everything works correctly.

### Code Formatting

#### `pnpm format`
Formats all code files using Prettier according to the project's style guidelines.
```bash
pnpm format
```
This ensures consistent code formatting across all markdown, configuration, and other project files.

## Project Structure

- `docs/` - Contains all documentation source files
- `docs/.vitepress/` - VitePress configuration and theme files
- `docs/api/` - API documentation
- `docs/detran/` - Detran-specific documentation
- `docs/public/` - Static assets (images, icons, etc.)

## Technologies Used

- **VitePress** - Static site generator for documentation
- **Vue.js** - Frontend framework (used by VitePress)
- **Prettier** - Code formatter
- **vitepress-openapi** - OpenAPI documentation integration