# Sinch Engage OpenAPI Specification

## Overview

This repository holds the OpenAPI description and hosted API reference for the Sinch Engage API.

The source of truth is the OpenAPI file under `/spec`. Code samples live beside it and are injected into the spec at build time. Static ReDoc documentation is built with Redocly CLI and published to GitHub Pages via CI.

## Repository Structure

### `/spec`
OpenAPI specification for Sinch Engage.

| Path | Purpose |
|------|---------|
| `/spec/openapi.yaml` | Main OpenAPI 3.0 description (paths, schemas, security, and prose). |
| `/spec/code_samples/` | Per-language request samples, mapped onto operations at build time. |
| `/spec/README.md` | Notes about the spec layout. |

e.g.:
- `/spec/openapi.yaml`
- `/spec/code_samples/JavaScript/v1@messages/post.js`

#### Code samples

Samples follow the folder convention `<lang>/<path>/<HTTP verb>.<extension>` under `/spec/code_samples/`, where:

- `<lang>` — language folder name (for example `JavaScript`, `Python`, `C#`)
- `<path>` — API path with `/` replaced by `@`
- `<HTTP verb>` — HTTP method of the target operation (extension is ignored)

e.g.:
- `/spec/code_samples/JavaScript/v1@messages@{messageId}/get.js` → `GET /v1/messages/{messageId}`
- `/spec/code_samples/Python/v1@messages/post.py` → `POST /v1/messages`

At build time, `scripts/inject-code-samples.mjs` walks this tree and attaches each file as an `x-codeSamples` entry on the matching operation. The original `/spec/openapi.yaml` is never mutated; the merged result is written to `.tmp/openapi.injected.yaml`.

See [`/spec/code_samples/README.md`](spec/code_samples/README.md) for the full convention.

### `/web`
Static assets and the Handlebars HTML template used by `redocly build-docs`.

| Path | Purpose |
|------|---------|
| `/web/index.html` | ReDoc HTML template (`{{{redocHead}}}` / `{{{redocHTML}}}`). |
| `/web/logo.png`, `/web/logo.svg` | Brand logo (`x-logo` in the spec points at `./logo.png`). |
| `/web/favicon.png` | Favicon linked from the template. |
| `/web/message-flow.png` | Image referenced from the API description. |

### `/scripts`
Build helpers used by npm scripts.

| Path | Purpose |
|------|---------|
| `/scripts/inject-code-samples.mjs` | Injects `/spec/code_samples/` into `x-codeSamples` on operations. |
| `/scripts/copy-assets.mjs` | Copies `/web` assets into `/web_deploy` after docs are built. |

### `/changelog`
Changelog entries for documentation or API updates.

e.g.:
- `/changelog/2026-06-16-MAPI-2218.md`

### `/.github`
CI workflows. The main workflow installs dependencies, lints the OpenAPI file, builds static docs into `/web_deploy`, and deploys that folder to GitHub Pages.

### Root config

| Path | Purpose |
|------|---------|
| `redocly.yaml` | Redocly CLI config: API root, lint ruleset/extends, and ReDoc theme. |
| `package.json` | Dependencies and npm scripts (`lint`, `build`, `preview-docs`, and so on). |

### Generated output (not committed)

| Path | Purpose |
|------|---------|
| `/web_deploy` | Static site output: `index.html` plus copied assets. Deployed by CI. |
| `/.tmp` | Intermediate files such as `openapi.injected.yaml` (spec with code samples). |

## Working on specification

### Install

1. Install [Node JS](https://nodejs.org/)
2. Clone repo and run `npm install` in the repo root

### Usage

#### `npm run lint`
Validates the OpenAPI spec with Redocly lint rules.

#### `npm run preview-docs`
Builds the static docs (with code samples injected) and serves `web_deploy` at http://localhost:8080 so you can preview the same output CI deploys.

#### `npm run build`
Injects code samples, builds static ReDoc HTML into `web_deploy`, and copies web assets (logo, favicon, etc.).

#### `npm run bundle`
Bundles the OpenAPI spec to `web_deploy/openapi.yaml`.

#### `npm test`
Alias for `npm run lint`.
