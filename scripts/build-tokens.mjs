// scripts/build-tokens.mjs
import fs from "node:fs";
import path from "node:path";

const THEMES_DIR = "themes";
const OUT = "src/app/theme.css";

const files = fs.readdirSync(THEMES_DIR).filter(f => f.endsWith(".json"));
let css = `/* auto-generated: do not edit */\n`;

for (const file of files) {
  const json = JSON.parse(fs.readFileSync(path.join(THEMES_DIR, file), "utf8"));
  const id = json.id || path.basename(file, ".json");
  const c = json.colors || {};
  const r = json.radii || {};
  const toTriplet = (arr) => Array.isArray(arr) ? `${arr[0]} ${arr[1]} ${arr[2]}` : arr;

  css += `\n[data-theme="${id}"]{\n`;
  if (c.bg)      css += `  --bg: ${toTriplet(c.bg)};\n`;
  if (c.surface) css += `  --surface: ${toTriplet(c.surface)};\n`;
  if (c.primary) css += `  --primary: ${toTriplet(c.primary)};\n`;
  if (c.text)    css += `  --text: ${toTriplet(c.text)};\n`;
  if (c.muted)   css += `  --muted: ${toTriplet(c.muted)};\n`;
  if (c.border)  css += `  --border: ${toTriplet(c.border)};\n`;
  if (c.ring)    css += `  --ring: ${toTriplet(c.ring)};\n`;
  if (r.sm)      css += `  --radius-sm: ${r.sm};\n`;
  if (r.md)      css += `  --radius-md: ${r.md};\n`;
  if (r.lg)      css += `  --radius-lg: ${r.lg};\n`;
  css += `}\n`;
}

fs.writeFileSync(OUT, css);
console.log(`✓ wrote ${OUT}`);
