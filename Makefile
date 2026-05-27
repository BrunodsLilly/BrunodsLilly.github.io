.PHONY: manifest serve dev clean

manifest:
	node scripts/generate-manifest.mjs

serve:
	npx serve web

dev: manifest serve

clean:
	rm -f web/pages/manifest.json
