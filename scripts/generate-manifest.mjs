import { readdir, readFile, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PAGES_DIR = join(__dirname, "../web/pages");
const MANIFEST_PATH = join(PAGES_DIR, "manifest.json");

function extractTitle(html, filename) {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return match ? match[1].trim() : filename.replace(".html", "");
}

const files = (await readdir(PAGES_DIR))
  .filter((f) => f.endsWith(".html"))
  .sort();

const manifest = await Promise.all(
  files.map(async (file) => {
    const html = await readFile(join(PAGES_DIR, file), "utf-8");
    return { file, title: extractTitle(html, file) };
  })
);

await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
console.log(`✅ manifest.json written with ${manifest.length} page(s):`);
manifest.forEach(({ file, title }) => console.log(`   - ${file}: "${title}"`));
