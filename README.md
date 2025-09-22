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

## Adding a New API Documentation

To add a new API to the documentation, follow these steps:

### 1. Prepare the OpenAPI Specification

First, ensure you have your OpenAPI specification file (JSON format) ready. Place it in the `docs/public/openapi/` directory:

```
docs/public/openapi/your-api-name.json
```

### 2. Create API Documentation Directory

Create a new directory under `docs/api/` for your API:

```bash
mkdir docs/api/your-api-name
```

### 3. Create Required Files

Inside your new API directory, create the following files:

#### `docs/api/your-api-name/index.md`
```markdown
---
aside: false
outline: false
title: Your API Name
---

<script setup lang="ts">
import { useOpenapi } from 'vitepress-openapi'
import spec from '../../public/openapi/your-api-name.json'

const openapi = useOpenapi({ spec })
</script>

# Your API Name

<OASpec :spec="openapi" />
```

#### `docs/api/your-api-name/[operationId].md`
```markdown
---
aside: false
outline: false
---

<script setup lang="ts">
import { useOpenapi } from 'vitepress-openapi'
import spec from '../../public/openapi/your-api-name.json'

const openapi = useOpenapi({ spec })
</script>

<OAOperation :openapi="openapi" />
```

#### `docs/api/your-api-name/[operationId].paths.js`
```javascript
import spec from '../../public/openapi/your-api-name.json'

export default {
  paths() {
    return Object.keys(spec.paths || {}).flatMap((path) => {
      return Object.keys(spec.paths[path] || {}).map((method) => {
        const operation = spec.paths[path][method]
        return {
          params: {
            operationId: operation.operationId,
          },
        }
      })
    })
  },
}
```

#### `docs/api/your-api-name/authentication.md`
```markdown
# Autenticação

Descreva aqui como a autenticação funciona para sua API.

## Exemplo de Uso

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     https://api.zarv.com/your-endpoint
```
```

### 4. Update VitePress Configuration

Edit `docs/.vitepress/config.mts` to include your new API:

1. **Import the specification:**
```typescript
import yourApiSpec from "../public/openapi/your-api-name.json" with { type: "json" };
```

2. **Create sidebar configuration:**
```typescript
const yourApiSidebar = useSidebar({
  spec: yourApiSpec,
  linkPrefix: "/api/your-api-name/",
});
```

3. **Add to sidebar configuration:**
```typescript
sidebar: {
  // ... existing sidebars
  "/api/your-api-name/": [
    {
      text: "Autenticação",
      link: "/api/your-api-name/authentication",
    },
    {
      text: "Referência da API",
      link: "/api/your-api-name",
    },
    ...yourApiSidebar.generateSidebarGroups(),
  ],
}
```

### 5. Update API Index Page

Add your new API to the main API index page at `docs/api/index.md` by adding a new card to the existing grid.

### 6. Test Your Changes

Run the development server to test your new API documentation:

```bash
pnpm dev
```

Navigate to `/api/your-api-name` to verify everything is working correctly.

## Technologies Used

- **VitePress** - Static site generator for documentation
- **Vue.js** - Frontend framework (used by VitePress)
- **Prettier** - Code formatter
- **vitepress-openapi** - OpenAPI documentation integration