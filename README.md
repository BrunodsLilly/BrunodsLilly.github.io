# BrunodsLilly.github.io

Personal portfolio site. Pages are auto-discovered from `web/pages/`.

## Local Development

```bash
# Generate manifest + start local server
make dev

# Or separately:
make manifest   # scans web/pages/*.html and writes web/pages/manifest.json
make serve      # serves web/ at http://localhost:3000
```

> ⚠️ You must use `make serve` (or any local server) — opening `index.html` directly
> as a `file://` URL will block the `fetch()` call.

## Adding a Page

1. Create a `.html` file in `web/pages/` with a `<title>` tag
2. Run `make manifest` (or just `make dev`)
3. The index will automatically pick it up

## Deployment

Pushing to `main` triggers the GitHub Actions workflow which:
1. Runs `make manifest` to generate `web/pages/manifest.json`
2. Deploys the `web/` directory to GitHub Pages

> ⚠️ One-time setup: go to **Settings → Pages → Source** and set it to **"GitHub Actions"**.
