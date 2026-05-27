.PHONY: manifest serve dev test clean

manifest:
	node scripts/generate-manifest.mjs

serve:
	npx serve web

test:
	node --test $(shell find tests -name '*.test.mjs')

dev: test manifest serve

clean:
	rm -f web/pages/manifest.json
