# Plan: Rebrand API Docs from MessageMedia to Sinch Engage

Update all customer-facing documentation branding from MessageMedia to Sinch Engage, configure three regional API instances, and deploy to GitHub Pages. This includes updating the OpenAPI spec, HTML/config files, project metadata, and replacing branding assets with Sinch Engage logos.

## Steps

1. **Update project metadata files** — Rename project in `package.json` from "messagemedia" to "sinchengage", update `redocly.yaml` apiTitle to "Sinch Engage", and modernize `README.md` with new repo references.

2. **Replace branding in OpenAPI spec** (`spec/openapi.yaml`) — Update title, logo URL, terms of service link, developer signup link, and all references from MessageMedia to Sinch Engage (20+ occurrences).

3. **Configure three regional servers** (`spec/openapi.yaml` servers section) — Add EU, APAC, and US API endpoints replacing the single MessageMedia URL.

4. **Update host references in spec** — Replace all example hostnames (api.messagemedia.com → appropriate regional endpoints) throughout the spec examples.

5. **Replace visual assets** — Update favicon.png in both `web/` and `web_deploy/` folders with Sinch Engage branding; optionally update ReDoc theme colors in `web/redoc-config.yaml`.

6. **Verify and build** — Run `npm test` to validate OpenAPI spec, then `npm run build` to generate `web_deploy/` outputs, and prepare for GitHub Pages deployment to sinchengage.github.io/documentation.

## Further Considerations

1. **Asset sourcing** — Where are the Sinch Engage logo/favicon files located? Are they in a shared brand assets folder or do you have the files ready to import?

2. **Color scheme** — The current ReDoc theme uses `#32329f` (purple). Should this remain as Sinch Engage's primary color, or do you have a specific brand color palette?

3. **Deployment endpoint** — Confirm the target GitHub organization and pages domain (sinchengage.github.io vs. another URL) before final deployment configuration.

